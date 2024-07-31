export interface NavbarItemType {
  path: string;
  text: string;
}

export const NavbarItemList: NavbarItemType[] = [
  {
    path: '/home',
    text: 'Home',
  },
  {
    path: '/restaurants',
    text: 'Restaurants',
  },
  {
    path: '/about',
    text: 'About us',
  },
  {
    path: '/how-it-works',
    text: 'How it works',
  },
  {
    path: '/faqs',
    text: 'FAQs',
  },
];
