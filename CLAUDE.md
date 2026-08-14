# CLAUDE.md -- ApostropheCMS + Astro Starter

## Architecture

Hybrid monorepo: ApostropheCMS (port 3000) is the headless backend — it owns all content schemas, widgets, page types, pieces, and the admin UI. Astro (port 4321) is the frontend renderer — it fetches content from ApostropheCMS via REST and maps it to Astro components. The `@apostrophecms/apostrophe-astro` bridge package connects them and enables in-context editing.

Start dev: `npm run install-all` then `npm run dev` → visit `http://localhost:4321`

## Adding a Widget

1. Create `backend/modules/my-widget/index.js` — set `extend: '@apostrophecms/widget-type'`, `options.label`, and `fields.add`.
2. Register in `backend/app.js`: add `'my-widget': {}` to the `modules` object.
3. Create `frontend/src/widgets/MyWidget.astro`. Widget data arrives as `Astro.props.widget`.
4. Add the mapping in `frontend/src/widgets/index.js`: `'my-widget': MyWidget`.
5. Add the widget to an area's `widgets` config in the relevant backend schema (import from `backend/lib/area.js` or inline).
6. If the widget needs client-side JavaScript, see **Client-Side Widget JavaScript** below — do not add an inline `<script>` to the `.astro` file.

The key in `index.js` must match the backend module name exactly — a mismatch silently falls back to a default renderer.

## Client-Side Widget JavaScript

**The rule:** a custom element must be *registered* independently of whether its widget rendered on the page. `customElements.define()` writes to a single document-global registry, so registration was never a component-scoped concern to begin with.

Never put an inline `<script>` in a widget component. Astro hoists a component-scoped script into the page bundle only for components that were server-rendered on that page. When an editor *adds* a widget in-context, Apostrophe injects the markup client-side, the script was never bundled, and the widget silently does nothing — with no console error.

Register at page level instead:

1. Put the class and its `customElements.define()` call in `frontend/src/widgets/MyWidget.ts`.
2. Add `import './MyWidget';` to `frontend/src/widgets/players.ts`.
3. `players.ts` is already loaded from the `endBody` slot in `frontend/src/pages/[...slug].astro`; nothing else is needed.

Resolve data in the component's frontmatter and pass it to the element as a `data-` attribute rather than fetching from inside the element. apostrophe-astro re-renders through Astro on every edit-mode change, so server-resolved data stays current.

```astro
---
// aposFetch is server-side only — never import it into client code.
import { aposFetch } from '@apostrophecms/apostrophe-astro/helpers/server';
const response = await aposFetch('/api/v1/...');
const payload = response.ok ? JSON.stringify(await response.json()) : '';
---
<my-widget data-payload={payload}></my-widget>
```

`VideoWidget.astro` / `VideoWidget.ts` is the reference implementation.

Registration must be eager; the *implementation* behind it need not be. Everything `players.ts` imports ships on every page, so if it grows large, move the heavy code behind a dynamic `import()` inside `connectedCallback` and keep only the `customElements.define()` call at page level. Note that a dynamic import also stops Astro inlining the script into each page's HTML, making it a separately cached file instead.

## Layout Slots

`AposLayout` renders `beforeMain`, `main` and `afterMain` as siblings, with Apostrophe's `prependMain` / `appendMain` injections bracketing the `main` slot. A project wrapper like `<main>` belongs **inside** the `main` slot:

```astro
<main slot="main" class="main">
  <AposTemplate {aposData} />
</main>
```

Do not split an element's opening and closing tags across `beforeMain` and `afterMain` to wrap the main slot — Astro drops attributes on a closing tag, so the element closes early, the whole subtree lands in `beforeMain`, and the injections render outside it.

## Adding a Page Type

1. Create `backend/modules/my-page/index.js` — set `extend: '@apostrophecms/page-type'` and `fields.add`.
2. Register in `backend/app.js`: add `'my-page': {}` to the `modules` object.
3. Add to the `types` array in `backend/modules/@apostrophecms/page/index.js` so editors can select it.
4. Create `frontend/src/templates/MyPage.astro`. Page data arrives as `Astro.props.page`.
5. Add the mapping in `frontend/src/templates/index.js`: `'my-page': MyPage`.

## The `_` Prefix Convention

Fields starting with `_` are relationship fields. Apostrophe populates them at request time and returns them as **arrays**, even when `max: 1`.

```js
// Relationship fields are populated at request time and returned as arrays; [0] gets the first result.
const image = widget._image?.[0];        // first image from a max:1 relationship
const author = article._author?.[0]?.title;
```

## Shared Field Utilities — Backend (`backend/lib/`)

- **`lib/link.js`** — Canonical link field set (`linkType`, `_linkPage`, `_linkFile`, `linkUrl`, `linkTarget`). Spread with `...linkConfig.link` into any schema needing a link. Do not copy these fields manually.
- **`lib/area.js`** — Exports `basicConfig`, `fullConfig`, `fullConfigExpandedGroups`. Import the right one for each area's `widgets` option.

## Frontend Utilities

**`frontend/src/utils/link.js`** — Canonical link resolution. Always use these; do not navigate `_linkPage[0]._url` manually.
- `getLinkPath(link)` — resolves a link object (page, file, or custom URL) to a URL string.
- `opensInNewTab(linkTarget)` — returns `true` if `linkTarget` is `['_blank']`.

```js
import { getLinkPath, opensInNewTab } from '../../utils/link.js';
const href = getLinkPath(widget);          // works for all three linkType values
const newTab = opensInNewTab(widget.linkTarget);
```

**`@apostrophecms/apostrophe-astro/lib/attachment.js`** — Canonical image helpers. Use these for all image rendering; do not navigate `widget._image[0].attachment` manually. See `ImageWidget.astro` for the reference implementation.
- `getAttachmentUrl(imageObj)` — returns the image URL.
- `getAttachmentSrcset(imageObj)` — returns a `srcset` string for responsive images.
- `getFocalPoint(imageObj)` — returns an `object-position` CSS value (e.g. `"40% 60%"`).
- `getWidth(imageObj)` / `getHeight(imageObj)` — return intrinsic dimensions for layout shift prevention.

```js
// Image helpers from the integration package — use these instead of navigating widget._image[0].attachment manually.
import { getAttachmentUrl, getAttachmentSrcset, getFocalPoint, getWidth, getHeight }
  from '@apostrophecms/apostrophe-astro/lib/attachment.js';

const imageObj = widget._image?.[0];
const src = getAttachmentUrl(imageObj);
const srcset = getAttachmentSrcset(imageObj);
```

## AposArea

```astro
---
// AposArea renders a CMS-editable widget sequence. The matching field is defined in the backend schema.
import AposArea from '@apostrophecms/apostrophe-astro/components/AposArea.astro';
const { page } = Astro.props;
---
<AposArea area={page.main} />
```

## i18n Key Convention

The starter uses the `project:` namespace by default: `label: 'project:myField'`.
Translations live in `backend/modules/@apostrophecms/i18n/i18n/project/`.
Add keys there or introduce your own namespace with a matching folder under `i18n/`.

## Component Registries

```
frontend/src/templates/index.js   Maps page type names → Astro components
frontend/src/widgets/index.js     Maps widget names → Astro components
```

Keys must match backend module names exactly (e.g. `'@apostrophecms/rich-text'`, `'hero'`). A wrong key silently falls back to a default renderer with no error — always verify against the backend module name.

## Project Constraints

- Do not change existing HTML class names — they are tied to existing SCSS.
- Do not rename or alter field names in `backend/lib/link.js` — widget components and frontend utils depend on them.
- `card-title-rt` and `card-content-rt` reuse `RichTextWidget` in the registry intentionally — they are inline rich-text variants.
- Widget visual variants use the widget's `styles` property in `index.js`, not `select` schema fields for appearance.
- Frontend is presentation-only — never change backend schemas from the frontend side.

## Architecture Guide

Full explanations, annotated examples, and walkthroughs: **[Astro Architecture Guide](https://docs.apostrophecms.org/guide/astro-essentials-overview.html?utm_source=astro-starter&utm_medium=claude-file&utm_campaign=architecture-guide)**
