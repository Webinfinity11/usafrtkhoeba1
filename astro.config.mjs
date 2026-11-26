// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Set to the live domain (e.g. "https://example.ge") to enable canonical URL,
  // absolute og:image/og:url and an absolute sitemap.
  // site: "https://example.ge",
  build: { inlineStylesheets: "always" },
  prefetch: true,
});
