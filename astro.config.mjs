import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { remarkReadingTime } from "./src/scripts/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://antiantidev.github.io",
  base: "/astrodex",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});