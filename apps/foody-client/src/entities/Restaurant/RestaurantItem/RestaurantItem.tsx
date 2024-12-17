import { FC } from 'react';
import styles from './RestaurantItem.module.scss';

type Props = {
  data: any;
};

export const RestaurantItem: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <p style={{ color: '#000' }}>{data.name}</p>
    </div>
  );
};
