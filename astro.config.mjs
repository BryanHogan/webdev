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
					label: "Components",
					items: [
						{ label: "Intro", link: "components/intro/"},
						{ label: "NavBar", link: "components/navbar/", badge: "new" },
					],
				},
				{
					label: "Miscellaneous",
					items: [
						{ label: "About", link: "miscellaneous/about/", badge: { text: "draft", variant: "note" } }
					]
				},
			],
		}),
	],
});
