# grlx docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![License: 0BSD](https://img.shields.io/badge/license-0BSD-blue)](LICENSE)

Documentation site for [grlx](https://github.com/gogrlx/grlx) — effective fleet configuration management.

Live at **[docs.grlx.dev](https://docs.grlx.dev)**

## Development

All commands are run from the root of the project:

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `bun install`    | Install dependencies                        |
| `bun run dev`    | Start local dev server at `localhost:4321`   |
| `bun run build`  | Build production site to `./dist/`           |
| `bun run preview`| Preview the build locally before deploying   |

## Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Pagefind](https://pagefind.app) for search (built-in via Starlight)

## License

[0BSD](LICENSE)
