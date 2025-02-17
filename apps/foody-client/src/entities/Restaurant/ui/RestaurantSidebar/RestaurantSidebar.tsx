import styles from './RestaurantSidebar.module.scss';
import {
  Spinner,
  Text,
  TextFont,
  TextSize,
  TextTheme,
  TextWeight,
  useCategory,
  classNames,
} from '@org/foody-shared-components';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useCategoryIdStore } from '../../model/store/category-type-store';

import miniPizzaIcon from '../../../../shared/assets/mini-pizza.svg';

export const RestaurantSidebar = () => {
  const { fetchCategories } = useCategory();

  const { t } = useTranslation();

  const { setCategoryId, categoryId } = useCategoryIdStore();

  const { data: categories, isLoading, error } = useQuery(fetchCategories);

  const filterRestaurants = (categoryId: string) => {
    setCategoryId(categoryId);
  };

  if (error) {
    return <Text>{t`Failed to fetch categories`}</Text>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      {categories.map((item: any) => (
        <div
          key={item._id}
          onClick={() => filterRestaurants(item._id)}
          className={classNames(
            styles.categoryWrapper,
            {
              [styles.active]: item._id === categoryId,
            },
            [],
          )}
        >
          <img width={25} height={28} src={miniPizzaIcon} alt="mini pizza" />
          <Text
            font={TextFont.MUKTA}
            weight={TextWeight.BOLD}
            size={TextSize.L}
            theme={item._id === categoryId ? TextTheme.RED : TextTheme.BLACK}
          >
            {item.name}
          </Text>
        </div>
      ))}
    </div>
  );
};
