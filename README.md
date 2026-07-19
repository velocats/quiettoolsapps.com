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

## GitHub Pages base path

This project is currently configured for GitHub Pages at:

```text
https://velocats.github.io/quiettoolsapps.com/
```

The `astro.config.mjs` file includes:

```js
site: 'https://velocats.github.io',
base: '/quiettoolsapps.com',
```

That makes built asset URLs include `/quiettoolsapps.com/`, which is required for images and icons to load correctly on a GitHub Pages project site. When moving to the final custom domain `quiettoolsapps.com`, change the config to the custom domain and remove the base path.

## Real app icons

The app cards are wired to use real icons from:

```text
public/assets/app-icons/mealcost.png
public/assets/app-icons/tripquest.png
public/assets/app-icons/fixlog.png
public/assets/app-icons/homesteadkeeper.png
public/assets/app-icons/aroundthehouse.png
```

If an icon file is missing, the card falls back to the simple placeholder artwork in `public/assets/app-placeholders/`.

To download the live website icons for the Quiet Tools apps, run:

```bash
python3 scripts/download-app-icons.py
```

Homestead Keeper Planner is coming soon, so add its final icon manually as:

```text
public/assets/app-icons/homesteadkeeper.png
```
