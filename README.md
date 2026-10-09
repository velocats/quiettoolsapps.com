# Quiet Tools Website

Company website for **Quiet Tools** at `quiettoolsapps.com`.

Built with Astro as a fast static site. The app portfolio is data-driven from `src/data/apps.ts`, so future Quiet Tools apps can be added without redesigning the site.

## Local development

```bash
npm install
npm run dev
```

Open the local URL Astro prints in your terminal, usually `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

The production files will be created in `dist/`.

## Add another app

Edit `src/data/apps.ts` and add another object to the `apps` array:

```ts
{
  name: 'New App',
  slug: 'new-app',
  status: 'in-development',
  shortTagline: 'A short useful tagline.',
  description: 'A short app description.',
  features: ['Feature one', 'Feature two'],
  category: 'Category',
  websiteUrl: 'https://example.com/',
  image: 'assets/app-placeholders/new-app.svg',
  accent: '#6FAFC0',
}
```

## Deployment notes

This site is ready for GitHub Pages or any static host. For GitHub Pages, build with `npm run build` and publish the `dist/` folder using your preferred workflow.

## Logo

The selected Quiet Tools logo assets live in:

- `public/assets/quiet-tools-logo.png`
- `public/assets/quiet-tools-mark.png`
- `public/assets/favicon.png`

## Production domain and deployment

The production origin is `https://quiettoolsapps.com`, with no base path. Astro, the generated canonical URLs and sitemap, and `public/CNAME` use this host. GitHub Pages HTTPS enforcement was enabled on September 10, 2026.

The existing `.github/workflows/deploy.yml` builds and deploys pushes to `main`. A successful local build does not publish changes. Verify the workflow and live URLs after publication.

## Redesign and SEO plan

See [the project plan](docs/seo-strategy-2026-09-10.md) for the reference-based visual direction, implementation log, SEO backlog, and remaining verification work.

Shared design tokens live in `src/styles/global.css`. The homepage uses a data-driven app grid with seven apps, including Cast Your Line (available on the App Store). The collection count and hero icon labels follow the app directory automatically. About and maintenance-app comparison pages support product discovery. DM Sans is self-hosted in `public/assets/fonts/` with 400, 500, and 600 weights; the system sans-serif stack remains the fallback.

Optimized WebP assets in `public/assets/optimized/` are used for the studio mark, app icons, and Hobby Tracker screenshots. Keep original assets when regenerating derivatives.

## Real app icons

The app cards are wired to use real icons from:

```text
public/assets/app-icons/cast-your-line.png
public/assets/app-icons/mealcost.png
public/assets/app-icons/tripquest.png
public/assets/app-icons/fixlog.png
public/assets/app-icons/homesteadkeeper.png
public/assets/app-icons/aroundthehouse.png
```

App cards use the image path in `src/data/apps.ts`; ensure each referenced asset exists. Cast Your Line uses its official website icon. Its App Store badge and homepage icon link to its listing through `appStoreUrl`.

To download the live website icons for the Quiet Tools apps, run:

```bash
python3 scripts/download-app-icons.py
```

The original Homestead Keeper Planner icon is stored as:

```text
public/assets/app-icons/homesteadkeeper.png
```
