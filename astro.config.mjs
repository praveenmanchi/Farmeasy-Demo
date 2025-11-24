import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5000,
      strictPort: true,
      allowedHosts: [
        'localhost',
        '.localhost',
        '.replit.dev',
        '.repl.co'
      ],
      hmr: {
        clientPort: 5000
      }
    }
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://yourdomain.com',
  integrations: [ sitemap()]
});