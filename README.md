# Quiet Tools Website

Company website for **Quiet Tools LLC** at `quiettoolsapps.com`.

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
  image: '/assets/app-placeholders/new-app.svg',
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
