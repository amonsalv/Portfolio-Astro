/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface WindowEventMap {
	languageChange: CustomEvent<{ language: 'en' | 'es' }>;
}
