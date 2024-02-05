import { defineConfig } from 'astro/config'
// import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import sentry from '@sentry/astro'
import spotlightjs from '@spotlightjs/astro'

/**
 * for more info @see https://astro.build/config
 */

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // output: 'server', // TODO: learn about this completely, later 🔥
  integrations: [
    // mdx(),
    sitemap(),
    sentry(),
    spotlightjs(),
    tailwind({
      nesting: true,
    }),
  ],
})
