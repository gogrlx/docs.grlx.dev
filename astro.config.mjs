import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// SEE: https://developers.google.com/analytics/devguides/collection/gtagjs
const gaTrackingID = import.meta.env.GA_TRACKING_ID
const gaSrc = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingID}`

// SEE: https://plausible.io/docs/plausible-script
const plausibleDomain = import.meta.env.PLAUSIBLE_DOMAIN
const plausibleSrc =
  import.meta.env.PLAUSIBLE_SRC || 'https://plausible.io/js/script.js'

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
      lastUpdated: true,
      description:
        'Documentation for grlx. Fleet configuration management that is low overhead, dependency free, and easy to install.',
      components: {
        Footer: './src/components/AdatomicFooter.astro',
      },
      customCss: ['./src/tailwind.css', './src/custom.css'],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      favicon: '/favicon.ico',
      head,
      logo: { src: './src/assets/grlx.webp' },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/gogrlx/grlx' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/gogrlx' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/RNsZ3KWjXm' },
        { icon: 'email', label: 'Email', href: 'mailto:grlx@adatomic.com?subject=Question' },
      ],
      sidebar: [
        { label: 'Getting Started', link: '/getting-started' },
        {
          label: 'Architecture',
          autogenerate: { directory: 'architecture' },
        },
        {
          label: 'Ingredients',
          autogenerate: { directory: 'ingredients' },
        },
        {
          label: 'Recipes',
          autogenerate: { directory: 'recipes' },
        },
        { label: 'Glossary', link: '/glossary' },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://docs.grlx.dev',
})
