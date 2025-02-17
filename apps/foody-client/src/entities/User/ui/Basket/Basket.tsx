import { Text, TextTheme, TextSize, TextWeight, Button } from '@org/foody-shared-components';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useBasket } from '../../model/hooks/useBasket';
import styles from './Basket.module.scss';

import basketIcon from '../../../../shared/assets/basket.svg';
import deleteIcon from '../../../../shared/assets/delete_sweep.svg';

export const Basket = () => {
  const { t } = useTranslation();
  const { userProducts, addProduct, decreaseProduct, deleteProduct, getTotalPrice } = useBasket();

  return (
    <section className={styles.container}>
      <Helmet>
        <title>{t('User basket')}</title>
        <meta name="description" content="User basket page" />
      </Helmet>

      <Text theme={TextTheme.BLACK} size={TextSize.XL} weight={TextWeight.BOLD}>
        Your Basket
      </Text>

      <div className={styles.basketHeader}>
        <img src={basketIcon} alt="basket" />
        <Text theme={TextTheme.RED} weight={TextWeight.MEDIUM}>
          {userProducts.length} items
        </Text>
      </div>

      <div className={styles.productList}>
        {userProducts.map(item => (
          <div key={item._id} className={styles.basketItem}>
            <img src={item.image} className={styles.productImage} alt={item.name} />
            <div className={styles.productInfo}>
              <Text theme={TextTheme.BLACK} size={TextSize.M} weight={TextWeight.MEDIUM}>
                {item.name}
              </Text>
              <Text theme={TextTheme.GRAY} size={TextSize.S}>
                ${item.price}
              </Text>
            </div>
            <div className={styles.quantityControl}>
              <Button className={styles.quantityButton} onClick={() => addProduct(item)}>
                +
              </Button>
              <Text>{item.quantity}</Text>
              <Button className={styles.quantityButton} onClick={() => decreaseProduct(item)}>
                –
              </Button>
            </div>
            <img
              src={deleteIcon}
              className={styles.deleteIcon}
              onClick={() => deleteProduct(item._id || '')}
              alt="delete"
            />
          </div>
        ))}
      </div>

      <div className={styles.checkoutSection}>
        <Button className={styles.checkoutButton}>Checkout</Button>
        <Text className={styles.totalPrice} theme={TextTheme.RED} weight={TextWeight.BOLD}>
          ${getTotalPrice().toFixed(2)}
        </Text>
      </div>
    </section>
  );
};
