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
				label: "For Beginner Devs",
				items: [
					{ label: "Getting Started", link: "start/beginner-introduction/" },
					{ label: "Ways To Build Web", link: "start/ways-to-build/" },
					{ label: "Step Checklist", link: "start/checklist/" }
				]
			},
			{
				label: "Components 🧩",
				items: [
					{ label: "Components", link: "components/introduction/" },
					{ label: "Accordion", link: "components/accordion/" },
					{ label: "NavBar", link: "components/navbar/", badge: { text: "wip", variant: "caution" } },
				],
			},
			{
				label: "Visual Design & UX ✨",
				items: [
					{ label: "Laws Of UI", link: "visual-design/ui-laws/"},
					{ label: "Picking Colors", link: "visual-design/colors/", badge: { text: "wip", variant: "caution" } },
				],
			},
			{
				label: "CSS 🎨",
				items: [
					{ label: "CSS Reset", link: "css/css-reset/", badge: { text: "wip", variant: "caution" } },
					{ label: "CSS Variables", link: "css/variables/", badge: { text: "wip", variant: "caution" } },
					{ label: "Spacing", link: "css/spacing/", badge: { text: "wip", variant: "caution" } },
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
				label: "Miscellaneous",
				items: [
					{ label: "About", link: "miscellaneous/about/", badge: { text: "draft", variant: "caution" } },
					{ label: "Styling Markdown", link: "miscellaneous/styling-markdown/", badge: "new" },
					{ label: "Resources", link: "miscellaneous/resources/" }
				]
			},
		],
		favicon: '/favicon/favicon.svg',
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