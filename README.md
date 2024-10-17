# Combined Astro Example

This project has separate `frontend` and `backend` subdirectories containing an Astro project (copied from `apostrophecms/astro-frontend`) and a matching Apostrophe project (copied from `apostrophecms/starter-kit-astro`).

This single-repository approach allows the project to be deployed via our hosting service.

## Running in production

Note the `production-frontend-start` and `production-backend-start` commands in `package.json`, which are executed by our hosting service to start Astro and Apostrophe, respectively. The presence of these commands is required in order for our hosting service to detect the presence of a combined project.

Our hosting service will automatically act as a proxy for Astro, which in turn will act as a proxy for Apostrophe when appropriate and will otherwise use it privately as a back end.

The combined logs of both services will be available to you via our hosting CLI.

## Testing locally

A `dev` command (e.g. `npm run dev`) is not provided because it is easier to work with them separately in your local development environment. You'll want to easily see the separate output of each:

```bash
# In terminal window 1
cd apostrophe
npm run dev

# In terminal window 2
cd astro
npm run dev
```

For more information, see [ApostropheCMS & Astro](https://docs.astro.build/en/guides/cms/apostrophecms/). Just keep in mind that you won't need to separately fork the two projects as they are already present in their subdirectories once you fork this combined repository.
