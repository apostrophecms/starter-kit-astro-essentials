// Page-level registration point for widget custom elements.
// Imported from the endBody slot in src/pages/[...slug].astro so that every
// element is defined on every page, whether or not the widget was present in
// the initial server render. Add further custom element modules here.
//
// Everything reachable from this file is bundled into a single chunk that ships
// on every page, so keep these modules to hand-written DOM code. If a widget
// needs a third-party library, import it dynamically inside connectedCallback
// so it is only fetched on pages where the widget actually appears — the
// customElements.define() call itself must stay eager here either way.

import './VideoWidget';
