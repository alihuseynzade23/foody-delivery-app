import {
  RestaurantSidebar,
  useCategoryIdStore,
  RestaurantItem,
} from '../../../entities/Restaurant';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import styles from './RestaurantsPage.module.scss';
import { useGetRestaurantsByCategoryId, useRestaurant } from '@org/foody-shared-components';
import { useQuery } from '@tanstack/react-query';

export const RestaurantsPage: FC = () => {
  const { fetchRestaurants } = useRestaurant();

  const { data: restaurants, isLoading, error } = useQuery(fetchRestaurants);

  const { categoryId } = useCategoryIdStore();

  const { data: filteredRestaurants } = useGetRestaurantsByCategoryId(categoryId);

  const { t } = useTranslation('restaurant');
  return (
    <div>
      <Helmet>
        <title>{t`Restaurants`}</title>
      </Helmet>
      <main className={styles.container}>
        <RestaurantSidebar />
        {categoryId
          ? filteredRestaurants?.map((item: any) => <RestaurantItem data={item} />)
          : restaurants?.map((item: any) => <RestaurantItem data={item} />)}
      </main>
    </div>
  );
};
