import starlightPlugin from '@astrojs/starlight-tailwind'
import defaultTheme from 'tailwindcss/defaultTheme'

const accent = {
  200: '#bee1ff',
  600: '#2376ed',
  900: '#1d448b',
  950: '#162b55',
}
const gray = {
  100: '#f4f6fa',
  200: '#e9eef5',
  300: '#bcc3ca',
  400: '#818d9c',
  500: '#4e5967',
  700: '#2f3946',
  800: '#1e2834',
  900: '#14191e',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        accent,
        gray,
      },
    },
  },
  plugins: [starlightPlugin()],
}
