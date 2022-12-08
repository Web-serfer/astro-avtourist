import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight: 'shiki'
  },
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});