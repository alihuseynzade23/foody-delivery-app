import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Spinner,
  Text,
  TextSize,
  TextTheme,
  TextWeight,
  useGetOneRestaurant,
  useGetProductsByRestaurantId,
} from '@org/foody-shared-components';
import styles from './RestaurantDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Flex } from 'antd';

export const RestaurantDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation('restaurant');

  const navigate = useNavigate();

  const { data: restaurant, isLoading, error } = useGetOneRestaurant(id || '');
  const {
    data: products,
    isLoading: productIsLoading,
    error: productIsError,
  } = useGetProductsByRestaurantId(id || '');

  const handleGoBack = () => {
    navigate(-1);
  };

  if (error || productIsError) return <Text>{t`Failed to fetch data`}</Text>;
  if (isLoading || productIsLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{t`Restaurants`}</title>
      </Helmet>
      <img
        className={styles.restaurantImage}
        width={500}
        src={restaurant.image}
        alt={restaurant.name}
      />
      <section className={styles.restaurantInfo}>
        <div>
          <Text theme={TextTheme.GRAY} weight={TextWeight.BOLD} size={TextSize.XL}>
            {restaurant.name}
          </Text>
          <Text theme={TextTheme.PRIMARY_GRAY} weight={TextWeight.MEDIUM}>
            {restaurant.address}
          </Text>
        </div>
        <div className={styles.cuisineInfo}>
          <div>
            <Text weight={TextWeight.MEDIUM} size={TextSize.L} theme={TextTheme.PRIMARY_GRAY}>
              Cuisine
            </Text>
            <Text weight={TextWeight.MEDIUM} theme={TextTheme.PRIMARY_GRAY}>
              {restaurant.cuisine}
            </Text>
          </div>
          <Text className={styles.deliveryPrice} theme={TextTheme.RED}>
            ${restaurant.price} delivery
          </Text>
          <Button onClick={handleGoBack} className={styles.goBack}>
            Go back
          </Button>
        </div>
      </section>
      <hr className={styles.line} />
      <p>{restaurant.description}</p>
      <div className={styles.productContainer}>
        <Text
          className={styles.productsTitle}
          theme={TextTheme.STRONG_GRAY}
          size={TextSize.XL}
          weight={TextWeight.BOLD}
        >
          Products
        </Text>
        {products.map((product: any) => (
          <section className={styles.productWrapper} key={product._id}>
            <Flex justify="space-between">
              <Flex align="center" gap="2rem">
                <img height={53} width={57} src={product.image} alt={product.name} />
                <div className={styles.productName}>
                  <Text size={TextSize.L} weight={TextWeight.MEDIUM} theme={TextTheme.GRAY}>
                    {product.name}
                  </Text>
                  <Text weight={TextWeight.MEDIUM} theme={TextTheme.PRIMARY_GRAY}>
                    {product.description}
                  </Text>
                </div>
              </Flex>
              <Flex gap='2.5rem' align="center">
                <Text size={TextSize.L} weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
                  <span className={styles.from}>From</span> ${product.price}
                </Text>
                <Button className={styles.add}>+</Button>
              </Flex>
            </Flex>
          </section>
        ))}
      </div>
    </div>
  );
};
