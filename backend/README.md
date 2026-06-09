# ApostropheCMS Backend

The headless CMS backend for the ApostropheCMS + Astro hybrid demo — it owns all content schemas, widgets, page types, pieces, and the admin UI, and serves content to the Astro frontend via REST.

## Running Standalone

```bash
# From this directory
npm run dev
```

Runs on **http://localhost:3000**. This is only used to confirm if the backend project is running.

> For full monorepo setup (install, environment variables, running both packages together), see the [root README](../README.md).

## Working in This Package

- **Content types** are defined in `modules/` — each folder is an ApostropheCMS module.
- **Shared field helpers** live in `lib/` (`link.js`, `area.js`) — use these instead of copying field definitions.
- **i18n strings** go in `modules/@apostrophecms/i18n/i18n/project/`.
- The frontend Astro package must also be running for in-context editing to work.

This backend is based on the [ApostropheCMS public-demo](https://github.com/apostrophecms/public-demo). Key differences: frontend templates are removed (replaced by Astro components) and the `@apostrophecms/apostrophe-astro` integration is added.