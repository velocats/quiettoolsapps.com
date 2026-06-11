export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://quiettoolsapps.com/sitemap-index.xml\n`);
}
