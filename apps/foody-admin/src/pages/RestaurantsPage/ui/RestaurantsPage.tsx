import styles from './RestaurantsPage.module.scss';
import { Button, Spinner, Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAddStore } from '../../../entities/Add';

import { useQuery } from '@tanstack/react-query';
import { RestaurantItem, useRestaurant } from '../../../entities/Restaurant';
import { Restaurant } from '../../../entities/Restaurant/model/types/restaurant';
import { useCategory } from '../../../entities/Category';
import { useState } from 'react';
import { useGetRestaurantsByCategoryId } from '../../../entities/Restaurant';

export const RestaurantsPage = () => {
  const { t } = useTranslation('restaurant');
  const { fetchRestaurants } = useRestaurant();
  const { fetchCategories } = useCategory();
  const { data: restaurants, isLoading, error } = useQuery(fetchRestaurants);
  const { data: categories } = useQuery(fetchCategories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: filteredRestaurants, isLoading: filteredLoading } =
    useGetRestaurantsByCategoryId(selectedCategory);

  const { setIsOpen, setType } = useAddStore();

  const handleAdding = () => {
    setIsOpen(true);
    setType('createRestaurant');
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  if (isLoading) {
    <Spinner />;
  }

  if (filteredLoading) {
    <Spinner />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <Text weight={TextWeight.BOLD} size={TextSize.L}>
          {t('Failed to load categories. Please try again later.')}
        </Text>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{t('Restaurants page')}</title>
        <meta name="description" content="Restaurants page" />
      </Helmet>

      <HeaderBar
        onSelectChange={handleCategoryChange}
        selectOptions={categories || []}
        select
        title={t('Restaurant')}
      >
        <Button onClick={handleAdding} add>
          <Text weight={TextWeight.BOLD} size={TextSize.M}>
            {t('ADD RESTAURANT')}
          </Text>
        </Button>
      </HeaderBar>
      <div className={styles.restaurantsWrapper}>
        {selectedCategory ? (
          filteredRestaurants?.length > 0 ? (
            filteredRestaurants.map((item: Restaurant) => (
              <RestaurantItem key={item._id} data={item} />
            ))
          ) : (
            <Text size={TextSize.L}>{t`Restaurants not found`}</Text>
          )
        ) : (
          restaurants?.map((item: Restaurant) => <RestaurantItem key={item._id} data={item} />)
        )}
      </div>
    </div>
  );
};
