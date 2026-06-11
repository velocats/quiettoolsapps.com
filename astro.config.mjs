import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://velocats.github.io',
  base: '/quiettoolsapps.com',
  integrations: [sitemap()],
});
