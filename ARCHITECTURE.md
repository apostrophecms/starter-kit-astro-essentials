# Architecture

Quick reference for developers working in this codebase. For prose explanations, annotated code examples, and full walkthroughs of every pattern below, see the **[Astro Architecture Guide](https://docs.apostrophecms.org/guide/astro-architecture.html?utm_source=astro-starter&utm_medium=architecture-file&utm_campaign=architecture-guide)**.

---

## Responsibility Split

**Backend (ApostropheCMS, port 3000)** owns all content modeling: schemas, widgets, page types, pieces, and the admin editing UI. The frontend never defines data shapes.

**Frontend (Astro, port 4321)** owns all rendering: it receives content objects from the backend via REST and maps them to Astro components. The frontend never stores or validates content.

The `@apostrophecms/apostrophe-astro` bridge package connects them — it provides the `aposPageFetch` helper, `AposArea`, and the in-context editing overlay.

## Component Registries

Templates and widgets are mapped by name. Keys **must match backend module names exactly** or the component silently falls back to a default.

| Registry file | Maps |
|---|---|
| `frontend/src/templates/index.js` | Page type names → Astro components |
| `frontend/src/widgets/index.js` | Widget names → Astro components |

```js
// frontend/src/widgets/index.js
const widgetComponents = {
  '@apostrophecms/rich-text': RichTextWidget, // key = backend module name
  'hero': HeroWidget,
};
```

## The `_` Prefix Convention

Fields starting with `_` are relationship fields. Apostrophe resolves them at request time and returns them as **arrays**, even when `max: 1`. Always use `[0]` or the image helpers for images.

```js
// Relationship fields are populated at request time and returned as arrays; [0] gets the first result.
const image = widget._image?.[0];
const author = article._author?.[0]?.title;
```

## `lib/` Utilities (Backend)

| File | What it contains |
|---|---|
| `backend/lib/link.js` | Canonical link fields (`linkType`, `_linkPage`, `_linkFile`, `linkUrl`, `linkTarget`). Spread into any schema needing a link. |
| `backend/lib/area.js` | Area widget configs: `basicConfig`, `fullConfig`, `fullConfigExpandedGroups`. |

## Frontend Utilities

| File | What it contains |
|---|---|
| `frontend/src/utils/link.js` | `getLinkPath(link)` — resolves a link object to a URL. `opensInNewTab(linkTarget)` — checks if target is `_blank`. Always use these; do not navigate `_linkPage[0]._url` manually. |
| `@apostrophecms/apostrophe-astro/lib/attachment.js` | `getAttachmentUrl()`, `getAttachmentSrcset()`, `getFocalPoint()`, `getWidth()`, `getHeight()`. Use these for all image rendering. See `ImageWidget.astro` for the canonical example. |

## i18n Convention

The starter uses the `project:` namespace by default (`label: 'project:myField'`), with translation files at `backend/modules/@apostrophecms/i18n/i18n/project/`. Add new keys there or introduce your own namespace with a matching folder.

## Styling

**Global Styles** — site-wide design tokens (colors, spacing, typography) configured in `backend/modules/@apostrophecms/styles/index.js`. Editors control these through a dedicated admin UI.

**Widget Styles** — per-instance CSS controls declared in a widget's `styles` property in its `index.js`. Scoped to each widget instance, edited through the widget modal.
