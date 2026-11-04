import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import node from '@astrojs/node';
import apostrophe from '@apostrophecms/apostrophe-astro';

// Load .env variables into the config file context.
// process.env is used as a fallback for variables set via the CLI or shell.
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

const output = 'server';

// Public hostnames the site is served from, e.g. "www.example.com" (treated as
// https) or a full origin such as "http://staging.example.com:4321". Astro only
// trusts Host and X-Forwarded-* headers that match one of these, and otherwise
// rejects logout and uploads as cross-site on some deployments. Defaults to
// ApostropheCMS hosting. Read at build time, so set it where `npm run build` runs.
const allowedDomains = (env.APOS_ALLOWED_DOMAINS || '**.apos.dev')
  .split(',')
  .map(entry => entry.trim())
  .filter(Boolean)
  .map(entry => {
    const { protocol, hostname, port } = new URL(entry.includes('://') ? entry : `https://${entry}`);
    return { protocol: protocol.replace(':', ''), hostname, ...(port && { port }) };
  });

export default defineConfig({
  output,
  // Astro warns on every prerendered page if this is set for a static build
  ...(output === 'server' && {
    security: { allowedDomains }
  }),
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
        'host'
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
