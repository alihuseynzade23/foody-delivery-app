import DashboardIcon from '../../../shared/assets/dashboard.svg';
import ProductIcon from '../../../shared/assets/products.svg';
import RestaurantsIcon from '../../../shared/assets/restaurants.svg';
import CategoryIcon from '../../../shared/assets/category.svg';
import OrderIcon from '../../../shared/assets/orders.svg';
import OfferIcon from '../../../shared/assets/offer.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: string;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: '/',
    Icon: DashboardIcon,
    text: 'Dashboard',
  },
  {
    path: '/products',
    Icon: ProductIcon,
    text: 'Products',
  },
  {
    path: '/restaurants',
    Icon: RestaurantsIcon,
    text: 'Restaurants',
  },
  {
    path: '/category',
    Icon: CategoryIcon,
    text: 'Category',
  },
  {
    path: '/orders',
    Icon: OrderIcon,
    text: 'Orders',
  },
  {
    path: '/offer',
    Icon: OfferIcon,
    text: 'Offer',
  },
];
