import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // base: '/Portfolio-Astro/', // Descomentar si tu proyecto está en un subdirectorio
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});