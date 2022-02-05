const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Telestion Dev Hub',
	tagline: 'A modular Ground Station',
	url: 'https://docs.telestion.wuespace.de/',
	baseUrl: '/',
	trailingSlash: true,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'wuespace', // Usually your GitHub org/user name.
	projectName: 'telestion-docs', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Telestion Docs',
			logo: {
				alt: 'Telestion Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					to: '/',
					position: 'left',
					label: 'Docs',
					activeBaseRegex: '^/(common-concepts/.*)?$'
				},
				{
					to: 'application',
					position: 'left',
					label: 'Application'
				},
				{
					to: 'client',
					position: 'left',
					label: 'Client'
				},
				{
					href: 'https://telestion.wuespace.de',
					label: 'Project Homepage',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'light',
			links: [
				{
					title: 'Telestion',
					items: [
						{
							label: 'Homepage',
							href: 'https://telestion.wuespace.de'
						},
						{
							label: 'Project Documentation',
							to: '/'
						},
						{
							label: 'Development Blog',
							href: 'https://telestion.wuespace.de/blog'
						},
						{
							label: 'WüSpace e. V.',
							href: 'https://www.wuespace.de'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Twitter',
							href: 'https://twitter.com/wuespace'
						},
						{
							label: 'YouTube',
							href: 'https://www.youtube.com/channel/UC1mwTgqCY5-G1RouptOXnSg'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							to: 'internal',
							label: 'Internal Documentation'
						},
						{
							label: "Writer's Guide",
							href: '/writers-guide'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/wuespace/telestion'
						},
						{
							label: 'Legal Notice',
							href: 'https://wuespace.de/legal-notice/'
						},
						{
							label: 'Privacy Policy',
							href: 'https://wuespace.de/privacy-policy/'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} WüSpace e. V. Built with Docusaurus.`
		},
		prism: {
			additionalLanguages: ['java', 'powershell', 'ebnf'],
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		}
	},
	clientModules: [],
	plugins: [
		[
			require.resolve('@cmfcmf/docusaurus-search-local'),
			{
				// docsRouteBasePath: '/',
				indexBlog: false
			}
		]
	],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					id: 'docs',
					sidebarPath: require.resolve('./sidebars.js'),
					path: 'docs',

					routeBasePath: '/',
					// Please change this to your repo.
					editUrl: 'https://github.com/wuespace/telestion-docs/edit/main'
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
