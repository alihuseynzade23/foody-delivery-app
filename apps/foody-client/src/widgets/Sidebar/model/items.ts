export interface SidebarItemType {
  path: string;
  text: string;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: '/',
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

export const registeredUserItems: SidebarItemType[] = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/restaurants',
    text: 'Restaurants',
  },
  {
    path: '/user?page=profile',
    text: 'Profile',
  },
  {
    path: '/basket',
    text: 'Your Basket',
  },
  {
    path: '/orders',
    text: 'Your Orders',
  },
  {
    path: '/checkout',
    text: 'Checkout',
  },
  {
    path: '/about',
    text: 'About Us',
  },
  {
    path: '/how-it-works',
    text: 'How it works?',
  },
  {
    path: '/faqs',
    text: 'Faqs',
  },
];
