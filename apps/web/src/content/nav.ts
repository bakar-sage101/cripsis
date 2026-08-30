export type NavLink = { label: string; href: string };

/** Primary header navigation. */
export const primaryNav: NavLink[] = [
  { label: 'Platform', href: '/platform' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const partnerCta: NavLink = {
  label: 'Become a design partner →',
  href: '/design-partners',
};

/** Footer link columns. */
export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/platform#security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Design Partners', href: '/design-partners' },
    ],
  },
];
