import { FC, useEffect, useState } from 'react';
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
import { Product } from '../../../../shared/lib/types/product';

import basketIcon from '../../../../shared/assets/basket.svg';
import deleteIcon from '../../../../shared/assets/delete_sweep.svg';

export const RestaurantDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation('restaurant');

  const [userProducts, setUserProducts] = useState<Product[]>([]);

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

  const handleAddProduct = (product: Product) => {
    const existingProduct = userProducts.find(element => element._id === product._id);

    if (existingProduct) {
      setUserProducts(prev =>
        prev.map((item: Product) =>
          item._id === product._id ? { ...item, quantity: item.quantity || 0 + 1 } : item,
        ),
      );
    } else {
      setUserProducts(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const handleDecreaseProduct = (product: Product) => {
    setUserProducts((prev) =>
      prev.map((item: any) =>
        item.quantity > 1 && item._id === product._id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleDeleteProduct = (productId: string) => {
    setUserProducts(prev => {
      const updatedProducts = prev.filter(item => item._id !== productId);
      localStorage.setItem('@foody_user_products', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const handleSummProducts = () => {
    const summ = userProducts.reduce((total, product) => {
      return total + product.price * (product.quantity || 1);
    }, 0);
    return summ;
  };

  const goToCheckout = () => {
    navigate('/user?page=checkout'); 
  };

  useEffect(() => {
    const savedProducts = localStorage.getItem('@foody_user_products');
    if (savedProducts) {
      setUserProducts(JSON.parse(savedProducts || ''));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@foody_user_products', JSON.stringify(userProducts));
  }, [userProducts]);

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
      <div className={styles.productsWrapper}>
        <div className={styles.productContainer}>
          <Text
            className={styles.productsTitle}
            theme={TextTheme.STRONG_GRAY}
            size={TextSize.XL}
            weight={TextWeight.BOLD}
          >
            Products
          </Text>
          {products.map((product: Product) => (
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
                <Flex gap="2.5rem" align="center">
                  <Text size={TextSize.L} weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
                    <span className={styles.from}>From</span> ${product.price}
                  </Text>
                  <Button onClick={() => handleAddProduct(product)} className={styles.add}>
                    +
                  </Button>
                </Flex>
              </Flex>
            </section>
          ))}
        </div>
        <section className={styles.basketWrapper}>
          <div>
            <Flex className={styles.productItems} gap="0.5rem" align="center">
              <img src={basketIcon} alt="basket" />
              <Text weight={TextWeight.MEDIUM} theme={TextTheme.RED}>
                {userProducts.length} items
              </Text>
            </Flex>
            {userProducts.map((item: Product) => (
              <div key={item._id} className={styles.basket}>
                <Flex align="center" gap="1rem">
                  <img src={item.image} height={53} width={57} alt="product" />
                  <div className={styles.productName}>
                    <Text theme={TextTheme.BLACK}>{item.name}</Text>
                    <Text theme={TextTheme.BLACK}>${item.price}</Text>
                  </div>
                </Flex>
                <Flex>
                  <div className={styles.quantityWrapper}>
                    <Button className={styles.basketIcons} onClick={() => handleAddProduct(item)}>
                      +
                    </Button>
                    <Text weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
                      {item.quantity}
                    </Text>
                    <Button
                      className={styles.basketIcons}
                      onClick={() => handleDecreaseProduct(item)}
                    >
                      —
                    </Button>
                  </div>
                  <div>
                    <img
                      onClick={() => handleDeleteProduct(item._id || '')}
                      className={styles.delete}
                      src={deleteIcon}
                      alt="delete"
                    />
                  </div>
                </Flex>
              </div>
            ))}
          </div>
          <Flex onClick={goToCheckout} justify='space-between' className={styles.checkoutWrapper}>
            <Text className={styles.checkoutText}>Checkout</Text>
            <Text className={styles.checkout} theme={TextTheme.RED} weight={TextWeight.MEDIUM}>${handleSummProducts()}</Text>
          </Flex>
        </section>
      </div>
    </div>
  );
};
