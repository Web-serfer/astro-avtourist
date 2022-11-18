import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
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