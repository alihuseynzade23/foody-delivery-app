import basketIcon from '../../../../shared/assets/basket.svg';
import profileIcon from '../../../../shared/assets/people_outline.svg';

export type SidebarItems = {
  name: string;
  url: string;
  icon: string;
  param?: string;
};

export const sidebarItems: SidebarItems[] = [
  {
    name: 'Profile',
    url: '/user?page=profile',
    param: 'profile',
    icon: profileIcon,
  },
  {
    name: 'Your Basket',
    url: '/user?page=basket',
    param: 'basket',
    icon: basketIcon,
  },
  {
    name: 'Your Orders',
    url: '/user?page=orders',
    param: 'orders',
    icon: basketIcon,
  },
  {
    name: 'Checkout',
    url: '/user?page=checkout',
    param: 'checkout',
    icon: basketIcon,
  },
  {
    name: 'Logout',
    icon: basketIcon,
    url: '/logout',
  },
];
