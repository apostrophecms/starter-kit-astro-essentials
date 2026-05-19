# Handoff: Adding .env File Support to ApostropheCMS + Astro Repos

This doc captures the changes made in `astro-public-demo` on branch `pro-9535-add-env` and provides step-by-step instructions for applying the same pattern to other repos.

---

## Background

Both the backend (ApostropheCMS/Node.js) and frontend (Astro) need to load configuration from `.env` files rather than relying solely on variables set inline in npm scripts or the shell. Each sub-project gets its own `.env` file — `backend/.env` and `frontend/.env` — to keep concerns isolated.

---

## Why `loadEnv` is needed in the frontend

Astro evaluates `astro.config.mjs` before Vite has finished loading, which means `.env` files have not been read yet when the config runs. `import.meta.env` (Vite's augmented env object) is therefore not available in `astro.config.mjs`. `process.env` is available, but only contains variables set via the shell or `cross-env` — not from `.env` files.

The fix is to use Vite's `loadEnv` helper to manually load the `.env` file at the top of `astro.config.mjs`. `loadEnv` merges `.env` file values with existing shell/CLI variables, so both sources continue to work.

---

## Changes to make

### 1. Backend — install `dotenv` and load it in `app.js`

```bash
cd backend
npm install dotenv
```

Add `import 'dotenv/config'` as the **first line** of `backend/app.js`:

```js
import 'dotenv/config';
import apostrophe from 'apostrophe';
// ...
```

This uses the ES module form of dotenv, which suits projects with `"type": "module"` in their `package.json`.

### 2. Backend — add `.env` to `backend/.gitignore`

Add `.env` near the top of `backend/.gitignore`:

```
.env
```

### 3. Backend — create `backend/.env.example`

Create `backend/.env.example` as a template for developers. Adjust the variables to match what each repo actually uses in `app.js` and its npm scripts. The `astro-public-demo` version looks like this:

```dotenv
# ApostropheCMS Backend Environment Variables
# Copy this file to .env and fill in your values.

# Required for local development when using the Astro frontend
APOS_EXTERNAL_FRONT_KEY=dev

# Set to 1 to force the admin UI to rebuild on every nodemon restart.
# Only needed when actively developing Apostrophe admin UI code.
# By default, the admin UI only rebuilds when package-lock.json changes.
# APOS_DEV=1

# Public-facing base URL of the Astro frontend (overrides baseUrl in app.js)
# APOS_BASE_URL=http://localhost:4321

# Base URL used when doing a static Astro build
# APOS_STATIC_BASE_URL=http://static.localhost:4000

# URL path prefix for non-root hosting (e.g. GitHub Pages). No trailing slash.
# APOS_PREFIX=

# Database connection URI. Apostrophe defaults to MongoDB but also supports
# SQLite and PostgreSQL via the @apostrophecms/db-connect adapter.
# The backend used is determined by the URI protocol — no code changes needed.
#
# MongoDB (default):
# APOS_DB_URI=mongodb://localhost:27017/your-project-name
#
# SQLite (no server required, good for local dev):
# APOS_DB_URI=sqlite://./data/your-project-name.db
#
# PostgreSQL (note: use underscores, not hyphens, in the database name):
# APOS_DB_URI=postgres://user:password@localhost:5432/your_project_name
```

### 4. Frontend — update `astro.config.mjs`

Import `loadEnv` from `vite` and use it to replace all `process.env` references in the config file.

```js
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
// ... other imports

// Load .env variables into the config file context.
// process.env is used as a fallback for variables set via the CLI or shell.
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
```

The three `loadEnv` arguments:
- **mode** — which `.env` variant to load (`development` → `.env` + `.env.development`, etc.)
- **dir** — where to look; `process.cwd()` resolves to the `frontend/` directory when Astro runs
- **prefix** — passing `''` loads all variables, not just `PUBLIC_`-prefixed ones

Then replace every `process.env.VARIABLE` in the file with `env.VARIABLE`. For example:

```js
// Before
const isStatic = process.env.APOS_BUILD === 'static';
base: process.env.APOS_PREFIX || undefined,
port: process.env.PORT ? parseInt(process.env.PORT) : 4321,

// After
const isStatic = env.APOS_BUILD === 'static';
base: env.APOS_PREFIX || undefined,
port: env.PORT ? parseInt(env.PORT) : 4321,
```

`vite` is already a dependency of any Astro project, so no additional install is needed.

### 5. Frontend — create `frontend/.env.example`

Check whether `frontend/.gitignore` already includes `.env` (it does in Astro's default scaffold). If not, add it.

Create `frontend/.env.example`:

```dotenv
# Astro Frontend Environment Variables
# Copy this file to .env and fill in your values.

# Required for local development — must match APOS_EXTERNAL_FRONT_KEY in the backend
APOS_EXTERNAL_FRONT_KEY=dev

# Port for the Astro dev/preview server (default: 4321)
# PORT=4321

# URL path prefix for non-root hosting (e.g. GitHub Pages). No trailing slash.
# APOS_PREFIX=

# Set to "static" to trigger a static build
# APOS_BUILD=

# Comma-separated list of allowed image domains (defaults to **.apos.dev)
# APOS_ALLOWED_DOMAINS=example.com,images.example.com
```

Adjust the variables to match what each repo's `astro.config.mjs` actually reads.

---

## Checklist per repo

- [ ] `cd backend && npm install dotenv`
- [ ] Add `import 'dotenv/config'` as first line of `backend/app.js`
- [ ] Add `.env` to `backend/.gitignore`
- [ ] Create `backend/.env.example`
- [ ] Add `loadEnv` import and `env` object to `frontend/astro.config.mjs`
- [ ] Replace all `process.env.*` in `astro.config.mjs` with `env.*`
- [ ] Create `frontend/.env.example`
- [ ] Confirm `frontend/.gitignore` includes `.env`
