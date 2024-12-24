import { FC } from 'react';
import {
  Text,
  TextSize,
  TextTheme,
  TextWeight,
  useRestaurant,
  useProduct,
} from '@org/foody-shared-components';
import { Product } from '../../lib/types/product';
import styles from './ProductItem.module.scss';
import { HandleButtons } from '../../../../features/handleProduct/ui/HandleButtons';
import { useQuery } from '@tanstack/react-query';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAddStore } from '../../../Add';

type Prop = {
  data: any;
};

export const ProductItem: FC<Prop> = ({ data }) => {
  const { fetchRestaurantById } = useRestaurant();
  const { t } = useTranslation('product');
  const { data: restaurant } = useQuery({
    queryKey: ['restaurantById', data.restaurantId],
    queryFn: () => fetchRestaurantById.queryFn(data.restaurantId),
  });

  const { setType, setIsOpen, setId } = useAddStore();

  const { deleteProduct } = useProduct();

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct.mutateAsync(localStorage.getItem('@foody_delete_item_id') || '');

      notification.success({
        message: t`Product deleted successfully`,
      });
    } catch (e: any) {
      notification.error({
        message: t`Product deletion failed`,
        description: e.message || 'An error occurred while creating the product.',
      });
    }
  };

  const handleEditProduct = async (id: string) => {
    setType('updateProduct');
    setIsOpen(true);
    setId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img height={160} src={data.image} alt="product" />
        <div className={styles.textWrapper}>
          <Text size={TextSize.L} weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
            {data.name}
          </Text>
          <Text size={TextSize.S} theme={TextTheme.GRAY}>
            {restaurant?.name}
          </Text>
        </div>
        <div className={styles.footer}>
          <p>${data.price}</p>
          <HandleButtons
            id={data._id}
            onDelete={handleDeleteProduct}
            onEdit={() => handleEditProduct(data._id ? data._id : '')}
          />
        </div>
      </div>
    </div>
  );
};
