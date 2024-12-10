import styles from './ProductsPage.module.scss';
import { Text, TextSize, TextWeight } from '@org/foody-shared-components';
import { HeaderBar } from '../../../widgets/HeaderBar';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Spinner } from '@org/foody-shared-components';
import { notification } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useAddStore } from '../../../entities/Add';
import { ProductItem, useProduct } from '../../../entities/Product';
import { Product } from '../../../entities/Product/model/types/product';

export const ProductsPage = () => {
  const { t } = useTranslation('product');

  const { fetchProducts, deleteProduct } = useProduct();
  const { data: products, isLoading, error } = useQuery(fetchProducts);

  const { setType, setIsOpen, setId } = useAddStore();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <Text weight={TextWeight.BOLD} size={TextSize.L}>
          {t('Failed to load products. Please try again later.')}
        </Text>
      </div>
    );
  }

  const handleSidebarOpening = () => {
    setType('product');
    setIsOpen(true);
  };

  // const handleEditCategory = async (id: string) => {
  //   handleSidebarOpening();
  //   setId(id);
  // };

  return (
    <div>
      <Helmet>
        <title>{t('Products page')}</title>
        <meta name="description" content="Products page" />
      </Helmet>
      <HeaderBar defaultValue="Restaurant type" select title={t('Product')} />

      <div className={styles.restaurantsWrapper}>
        {products?.map((item: Product) => (
          <ProductItem key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};
