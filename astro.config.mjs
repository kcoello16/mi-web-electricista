// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // <-- Esta es la integración oficial

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // <-- Así se activa
  ]
});