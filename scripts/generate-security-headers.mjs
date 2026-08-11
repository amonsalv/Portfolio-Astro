import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST_DIR = 'dist';
const INLINE_SCRIPT_RE = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g;

function findHtmlFiles(dir) {
	const files = [];
	for (const entry of readdirSync(dir)) {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) files.push(...findHtmlFiles(path));
		else if (entry.endsWith('.html')) files.push(path);
	}
	return files;
}

function collectScriptHashes() {
	const hashes = new Set();
	for (const file of findHtmlFiles(DIST_DIR)) {
		const html = readFileSync(file, 'utf8');
		for (const [, content] of html.matchAll(INLINE_SCRIPT_RE)) {
			if (content.trim() === '') continue;
			hashes.add(`'sha256-${createHash('sha256').update(content, 'utf8').digest('base64')}'`);
		}
	}
	return [...hashes];
}

const scriptHashes = collectScriptHashes();

// Astro inlines page-specific CSS as <style> blocks (build.inlineStylesheets: 'auto') and
// several components use inline style="" attributes with static, author-controlled values —
// neither is hashable per-attribute in a maintainable way, so style-src keeps 'unsafe-inline'.
const csp = [
	"default-src 'self'",
	`script-src 'self' ${scriptHashes.join(' ')}`,
	"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
	"font-src 'self' https://fonts.gstatic.com",
	"img-src 'self' data:",
	"connect-src 'self'",
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"frame-ancestors 'none'",
	'upgrade-insecure-requests',
].join('; ');

const headers = `/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: ${csp}
`;

writeFileSync(join(DIST_DIR, '_headers'), headers);
console.log(`Generated ${DIST_DIR}/_headers with ${scriptHashes.length} inline script hash(es).`);
