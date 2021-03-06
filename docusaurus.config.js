/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nick Silva',
  tagline: 'A React-based static github website template.',
  url: 'https://silva-nick.github.io',
  baseUrl: '/portfolio/',
  organizationName: 'silva-nick', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  onBrokenLinks: 'throw',
  trailingSlash: 'false',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      /*logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
      },*/
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'More Info',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/silva-nick',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'silva-nick',
          items: [
            {
              label: 'Home',
              to: '/portfolio/',
            },
            {
              label: 'Resume',
              to: '/docs/resume',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/<GITHUB-USER>',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Timeline',
              to: '/docs/timeline',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'silva-nick',
        path: '/portfolio/',
        pageTitle: 'silva-nick',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'stargazers_count',
          direction: 'desc',
          numRepos: 10,
        },
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/silva-nick/portfolio/tree/main/blog',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/silva-nick/portfolio/tree/main/blog',
          postsPerPage: 4,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
