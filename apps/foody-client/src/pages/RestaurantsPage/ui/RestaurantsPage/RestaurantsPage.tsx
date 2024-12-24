import {
  RestaurantSidebar,
  useCategoryIdStore,
  RestaurantItem,
} from '../../../../entities/Restaurant';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import styles from './RestaurantsPage.module.scss';
import {
  Spinner,
  Text,
  useGetRestaurantsByCategoryId,
  useRestaurant,
} from '@org/foody-shared-components';
import { useQuery } from '@tanstack/react-query';

export const RestaurantsPage: FC = () => {
  const { t } = useTranslation('restaurant');
  const { fetchRestaurants } = useRestaurant();

  const { data: restaurants, isLoading, error } = useQuery(fetchRestaurants);

  const { categoryId } = useCategoryIdStore();

  const { data: filteredRestaurants } = useGetRestaurantsByCategoryId(categoryId);

  if (error) {
    return <Text>{t`Failed to fetch data`}</Text>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Helmet>
        <title>{t`Restaurants`}</title>
      </Helmet>
      <main className={styles.container}>
        <RestaurantSidebar />
        <section className={styles.restaurantsWrapper}>
          {categoryId
            ? filteredRestaurants?.map((item: any) => <RestaurantItem data={item} />)
            : restaurants?.map((item: any) => <RestaurantItem data={item} />)}
        </section>
      </main>
    </div>
  );
};
