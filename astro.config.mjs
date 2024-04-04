import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://webdev.bryanhogan.com',
	integrations: [
		starlight({
			title: 'Web Dev',
			logo: {
				src: './src/assets/Penguin-Web-Dev-Bryan-Hogan-Logo.svg',
			},
			social: {
				github: 'https://github.com/BryanHogan/webdev',
				instagram: 'https://www.instagram.com/bryanhoganme/',
				mastodon: "https://mastodon.social/@BryanHogan",
				threads: "https://www.threads.net/@bryanhoganme",
				// this should be BlueSky -> twitter: "https://bsky.app/profile/bryanhogan.com",
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
					label: "Beginner Help",
					items: [
						{ label: "Getting Started", link: "start/beginner-introduction/"},
					]
				},
				{
					label: "Components",
					items: [
						{ label: "Introduction", link: "components/introduction/"},
						//{ label: "NavBar", link: "components/navbar/", badge: "new" },
						{ label: "Accordion", link: "components/accordion/", badge: "new" },
						{ label: "NavBar", link: "components/navbar/", badge: { text: "wip", variant: "note" } },
					],
				},
				{
					label: "Astro Components",
					items: [
						{ label: "Introduction", link: "astro/introduction/", badge: { text: "wip", variant: "note" } },
					],
				},
				{
					label: "Miscellaneous",
					items: [
						{ label: "About", link: "miscellaneous/about/", badge: { text: "draft", variant: "note" } },
						{ label: "Resources", link: "miscellaneous/resources/"}
					]
				},
			],
		}),
	],
});
