import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import node from '@astrojs/node';
import apostrophe from '@apostrophecms/apostrophe-astro';

// Load .env variables into the config file context.
// process.env is used as a fallback for variables set via the CLI or shell.
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  output: 'server',
  server: {
    port: env.PORT ? parseInt(env.PORT) : 4321,
    // Required for some hosting, like Heroku
    // host: true
  },
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    apostrophe({
      aposHost: 'http://localhost:3000',
      widgetsMapping: './src/widgets',
      templatesMapping: './src/templates',
      includeResponseHeaders: [
        'content-security-policy',
        'strict-transport-security',
        'x-frame-options',
        'referrer-policy',
        'cache-control'
      ],
      excludeRequestHeaders: [
        // Must exclude this for separate apostrophe and astro hosting to work
        // 'host'
      ]
    })
  ],
  vite: {
    ssr: {
      // Do not externalize the @apostrophecms/apostrophe-astro plugin, we need
      // to be able to use virtual: URLs there
      noExternal: [ '@apostrophecms/apostrophe-astro' ],
    }
  }
});
