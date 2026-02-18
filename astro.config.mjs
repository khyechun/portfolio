// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://khyechun.github.io",
  base: "/portfolio",
  devToolbar: {
    enabled: false,
  },
});
