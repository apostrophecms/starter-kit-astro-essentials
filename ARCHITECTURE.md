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

## Client-Side Behavior

A custom element must be **registered independently of whether its widget rendered on the page**. `customElements.define()` writes to a single document-global registry, so registration is document-scoped by the platform's design, not component-scoped.

This is why widget JavaScript does not belong in an inline `<script>` inside the widget component. Astro hoists a component-scoped script into the page bundle only for components that were server-rendered on that page — so when an editor adds a widget in-context, Apostrophe injects the markup client-side and the script is never loaded. The widget silently does nothing.

Register at page level instead:

| File | Role |
|---|---|
| `frontend/src/widgets/<Name>.ts` | The custom element class and its `customElements.define()` call |
| `frontend/src/widgets/players.ts` | Imports every such module; the single registration point |
| `frontend/src/pages/[...slug].astro` | Loads `players.ts` from the `endBody` slot |

Prefer resolving data server-side in the component's frontmatter and passing it down as a `data-` attribute over fetching from the element itself — apostrophe-astro re-renders through Astro on every edit-mode change, so server-resolved data stays fresh. `VideoWidget.astro` / `VideoWidget.ts` is the canonical example.

Registration has to be eager; the implementation behind it does not. Everything `players.ts` imports ships on every page, so if the registry grows, keep only `customElements.define()` at page level and pull the heavy code in via a dynamic `import()` on first use.

## Layout Slots

`AposLayout` exposes eight slots: `startHead`, `standardHead`, `extraHead`, `startBody`, `beforeMain`, `main`, `afterMain`, `endBody`. It renders `beforeMain`, `main` and `afterMain` as **siblings**, with Apostrophe's `prependMain` / `appendMain` injections bracketing the `main` slot — matching the block structure of Apostrophe's own `outerLayoutBase.html`.

A project wrapper such as `<main>` therefore goes *inside* the `main` slot. Splitting an element's opening and closing tags across `beforeMain` and `afterMain` does not work: Astro drops attributes on a closing tag, so the element closes early and the injections land outside it.

## i18n Convention

The starter uses the `project:` namespace by default (`label: 'project:myField'`), with translation files at `backend/modules/@apostrophecms/i18n/i18n/project/`. Add new keys there or introduce your own namespace with a matching folder.

## Styling

**Global Styles** — site-wide design tokens (colors, spacing, typography) configured in `backend/modules/@apostrophecms/styles/index.js`. Editors control these through a dedicated admin UI.

**Widget Styles** — per-instance CSS controls declared in a widget's `styles` property in its `index.js`. Scoped to each widget instance, edited through the widget modal.
