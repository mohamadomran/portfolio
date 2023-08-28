export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Mohamad Omran',
  description: '',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/project',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  links: {
    github: 'https://github.com/mohamadomran',
    twitter: 'https://twitter.com/itsMohamadOmran',
  },
};
