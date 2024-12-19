import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://webdev.bryanhogan.com',
	integrations: [starlight({
		title: 'Web Dev',
		logo: {
			src: './src/assets/Penguin-Web-Dev-Bryan-Hogan-Logo.svg',
		},
		lastUpdated: true,
		social: {
			github: 'https://github.com/BryanHogan/webdev',
			instagram: 'https://www.instagram.com/bryanhoganme/',
			mastodon: "https://mastodon.social/@BryanHogan",
			threads: "https://www.threads.net/@bryanhoganme",
			rss: "https://bryanhogan.com/rss.xml"
		},
		editLink: {
			baseUrl: 'https://github.com/bryanhogan/webdev/edit/master/',
		},
		customCss: [
			"./src/styles/custom.css",
		],
		sidebar: [
			{
				label: "Getting Started",
				items: [
					{ label: "Beginner Introduction", link: "start/beginner-introduction/" },
					{ label: "Ways To Build Web", link: "start/ways-to-build/" },
					{ label: "Step Checklist", link: "start/checklist/" }
				]
			},
			{
				label: "Visual Design & UX ✨",
				items: [
					{ label: "Building UI & UX", link: "visual-design/building-ui-ux/"},
					{ label: "Picking Colors", link: "visual-design/colors/"},
				],
			},
			{
				label: "CSS 🎨",
				items: [
					{ label: "CSS Reset", link: "css/css-reset/"},
					{ label: "CSS Variables", link: "css/variables/"},
					{ label: "Utility Classes", link: "css/utility-classes/", badge: "new"},
					{ label: "Spacing", link: "css/spacing/"}
				],
			},
			{
				label: "SEO 🔍",
				items: [
					{ label: "SEO", link: "seo/introduction/", badge: "new" },
					{ label: "<Head>", link: "seo/head/" }
				],
			},
			{
				label: "Components 🧩",
				items: [
					{ label: "Components", link: "components/introduction/" },
					{ label: "Accordion", link: "components/accordion/" },
					{ label: "NavBar", link: "components/navbar/", badge: "new"},
				],
			},
			{
				label: "Miscellaneous",
				items: [
					{ label: "About", link: "miscellaneous/about/"},
					{ label: "Styling Markdown", link: "miscellaneous/styling-markdown/"},
					{ label: "Resources", link: "miscellaneous/resources/" }
				]
			},
		],
		favicon: "/favicon/favicon.svg",
		head: [
			{
				tag: 'script',
				attrs: {
					src: 'https://cloud.umami.is/script.js',
					'data-website-id': 'da96b3bd-cbcd-4411-b661-ac6a88d363eb',
					defer: true,
				},
			},
			{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/favicon/favicon.ico',
					sizes: '32x32',
				},
			},
		],
	}), sitemap()],
});