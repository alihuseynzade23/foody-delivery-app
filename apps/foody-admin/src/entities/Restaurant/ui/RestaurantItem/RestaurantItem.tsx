import { FC } from 'react';
import { Restaurant } from '../../model/types/restaurant';
import styles from './RestaurantItem.module.scss';

type Prop = {
  data: Restaurant;
};

export const RestaurantItem: FC<Prop> = ({ data }) => {
  return <div></div>;
};
