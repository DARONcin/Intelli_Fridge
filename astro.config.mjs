import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// No intentes usar AstroIntegration si no es compatible
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()]
  // Otras configuraciones si es necesario
});