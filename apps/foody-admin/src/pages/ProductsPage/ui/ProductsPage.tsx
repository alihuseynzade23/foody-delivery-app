import styles from './ProductsPage.module.scss';
import {
  Spinner,
  Text,
  TextSize,
  TextWeight,
  useRestaurant,
  useGetProductsByRestaurantId,
  useProduct,
} from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ProductItem } from '../../../entities/Product';
import { Product } from '../../../entities/Product/lib/types/product';

export const ProductsPage = () => {
  const { t } = useTranslation('product');
  const { fetchProducts } = useProduct();
  const { data: products, isLoading, error } = useQuery(fetchProducts);
  const { fetchRestaurants } = useRestaurant();
  const { data: restaurants } = useQuery(fetchRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);

  const { data: filteredProducts, isLoading: filteredLoading } =
    useGetProductsByRestaurantId(selectedRestaurant);

  const handleRestaurantChange = (value: string) => {
    setSelectedRestaurant(value);
  };

  console.log(products, 'products');
  console.log(filteredProducts, 'filtered products')

  console.log(selectedRestaurant)

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
          {t('Failed to load restaurants. Please try again later.')}
        </Text>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{t('Products page')}</title>
        <meta name="description" content="Products page" />
      </Helmet>

      <HeaderBar
        onSelectChange={handleRestaurantChange}
        selectOptions={restaurants || []}
        select
        defaultValue="Restaurant"
        title={t('Product')}
      />
      <div className={styles.productsWrapper}>
        {selectedRestaurant ? (
          filteredProducts?.length > 0 ? (
            filteredProducts.map((item: Product) => <ProductItem key={item._id} data={item} />)
          ) : (
            <Text size={TextSize.L}>{t`Products not found`}</Text>
          )
        ) : (
          products?.map((item: Product) => <ProductItem key={item._id} data={item} />)
        )}
      </div>
    </div>
  );
};
