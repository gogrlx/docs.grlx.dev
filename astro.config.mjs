import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'grlx.dev',
            logo: { src: './src/assets/grlx.webp' },
			social: {
                github: 'https://gihthub.com/gogrlx/grlx',
                'x.com': 'https://x.com/gogrlx',
			},
			sidebar: [
                {label: 'Getting Started', link: '/getting-started'},
                {
                    label: 'Ingredients',
                    autogenerate: { directory: 'ingredients' },
                },
			],
		}),
	],
});
