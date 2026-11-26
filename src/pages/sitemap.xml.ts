import type { APIRoute } from "astro";

// Single-page site: one URL. Needs `site` in astro.config.mjs for an absolute <loc>.
export const GET: APIRoute = ({ site }) => {
  const loc = site ? new URL("/", site).href : "/";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${loc}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
