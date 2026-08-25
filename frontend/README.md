# Astro Frontend

The presentation layer for the ApostropheCMS + Astro hybrid demo — it fetches content from the ApostropheCMS backend via REST and maps it to Astro components, with support for in-context editing.

## Running Standalone

```bash
# From this directory
npm run dev
```

Runs on **http://localhost:4321**. Requires the ApostropheCMS backend to be running on port 3000 for content. The admin UI is at `/login`.

> For full monorepo setup (install, environment variables, running both packages together), see the [root README](../README.md).

## Working in This Package

- **All routing** is handled by `src/pages/[...slug].astro` — the CMS drives the URL structure.
- **Page type components** are mapped in `src/templates/index.js`; widget components in `src/widgets/index.js`.
- **Link and image helpers** live in `src/utils/link.js` and `@apostrophecms/apostrophe-astro/lib/attachment.js` — use these instead of navigating raw CMS data manually.
- **Web components** are registered in `src/widgets/players.ts`, not in an inline `<script>` inside the widget's `.astro` file — registration has to happen whether or not the widget rendered on the page. See the note in the [root README](../README.md#for-astro-developers) for why.

For general Astro patterns, see the [Astro documentation](https://docs.astro.build/). For the CMS integration, see the [`apostrophe-astro` package](https://github.com/apostrophecms/apostrophe-astro).
