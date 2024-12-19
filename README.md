# Combined Astro Example

This project has separate `frontend` and `backend` subdirectories containing an Astro project (copied from `apostrophecms/astro-frontend`) and a matching Apostrophe project (copied from `apostrophecms/starter-kit-astro`).

This single-repository approach allows the project to be deployed via our hosting service.

## `npm install` in one step

The provided `postinstall` script takes care of recursively running `npm install` for both `apostrophe` and `astro` when you run it at the top level. This is handy in both development and production.

## `npm run update` in one step

For convenience you can also run `npm run update` (NOTE: you must type the `run` part as npm has no `postupdate` hook for this). Just `npm update` won't work at the top level.

## Building for production

The provided `build` script covers production builds for both Astro and Apostrophe. You shouldn't need this in a development environment (see below).

## Running in production

Note the `production-frontend-start` and `production-backend-start` scripts in `package.json`, which are executed by our hosting service to start Astro and Apostrophe, respectively. The presence of these commands is required in order for our hosting service to detect the presence of a combined project.

Our hosting service will automatically act as a proxy for Astro, which in turn will act as a proxy for Apostrophe when appropriate and will otherwise use it privately as a back end.

The combined logs of both services will be available to you via our hosting CLI.

There is no combined `start` command because the two commands are started and run in parallel by our hosting service.

## Testing locally

A combined `dev` script (e.g. `npm run dev`) is not provided because it is truly better to work with them separately in your local development environment. You'll want to easily see the separate output of each during debugging, like this:

```bash
# In terminal window 1
cd backend
npm run dev

# In terminal window 2
cd frontend
npm run dev
```

For more information, see [ApostropheCMS & Astro](https://docs.astro.build/en/guides/cms/apostrophecms/). Just keep in mind that you won't need to separately fork the two projects as they are already present in their subdirectories once you fork this combined repository.
