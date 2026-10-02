import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to the live domain before launch. Sitemap and canonical links use it.
export default defineConfig({
  site: 'https://www.whitecitydecorating.co.uk',
  trailingSlash: 'never',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
