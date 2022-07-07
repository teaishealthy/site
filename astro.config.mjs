import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://teaishealthy.me",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [sitemap()],
});
