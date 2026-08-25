// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` y `base` se inyectan desde CI para soportar dos escenarios:
//  - Dominio propio      -> SITE_URL=https://ejemplo.com        BASE_PATH=/
//  - Página de proyecto  -> SITE_URL=https://usuario.github.io   BASE_PATH=/videobook-web
const site = process.env.SITE_URL ?? 'https://example.com';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    // Genera /about/index.html en vez de /about.html: URLs limpias en GitHub Pages
    format: 'directory',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
