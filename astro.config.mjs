import 'dotenv/config'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// SEE: https://developers.google.com/analytics/devguides/collection/gtagjs
const gaTrackingID = process.env.GA_TRACKING_ID
const gaSrc = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingID}`

// SEE: https://plausible.io/docs/plausible-script
const plausibleDomain = process.env.PLAUSIBLE_DOMAIN
const plausibleSrc =
  process.env.PLAUSIBLE_SRC || 'https://plausible.io/js/script.js'

const head = []

if (gaTrackingID) {
  head.push(
    {
      tag: 'script',
      attrs: {
        src: gaSrc,
        async: true,
      },
    },
    {
      tag: 'script',
      content: `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaTrackingID}');
`,
    },
  )
}

if (plausibleDomain && plausibleSrc) {
  head.push({
    tag: 'script',
    attrs: {
      src: plausibleSrc,
      'data-domain': plausibleDomain,
      defer: true,
    },
  })
}

head.push(
  {
    tag: 'link',
    attrs: {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
  {
    tag: 'link',
    attrs: {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
  },
  {
    tag: 'link',
    attrs: {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
  },
  {
    tag: 'link',
    attrs: {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  },
  {
    tag: 'link',
    attrs: {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#7cc6fe',
    },
  },
  {
    tag: 'meta',
    attrs: {
      name: 'msapplication-TileColor',
      content: '#7cc6fe',
    },
  },
  {
    tag: 'meta',
    attrs: {
      name: 'theme-color',
      content: '#bee1ff',
    },
  },
)

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'grlx Docs',
      description:
        'Documentation for grlx. Fleet configuration management that is low overhead, dependency free, and easy to install.',
      components: {
        Head: './src/components/Transitions.astro',
        Footer: './src/components/AdatomicFooter.astro',
      },
      customCss: ['./src/tailwind.css'],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
      },
      favicon: '/favicon.ico',
      head,
      logo: { src: './src/assets/grlx.webp' },
      social: {
        github: 'https://gihthub.com/gogrlx/grlx',
        'x.com': 'https://x.com/gogrlx',
      },
      sidebar: [
        { label: 'Getting Started', link: '/getting-started' },
        {
          label: 'Ingredients',
          autogenerate: { directory: 'ingredients' },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
  site: 'https://doc.grlx.dev',
})
