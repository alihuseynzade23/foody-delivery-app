import { FC } from 'react';
import {
  Text,
  TextSize,
  TextTheme,
  TextWeight,
  useRestaurant,
  useCategory,
} from '@org/foody-shared-components';
import styles from './RestaurantItem.module.scss';
import {
  HandleButtons,
  HandleButtonsDisplay,
} from '../../../../features/handleProduct/ui/HandleButtons';
import { useQuery } from '@tanstack/react-query';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAddStore } from '../../../Add';

type Prop = {
  data: any;
};

export const RestaurantItem: FC<Prop> = ({ data }) => {
  const { fetchCategoryById } = useCategory();
  const { t } = useTranslation('restaurant');
  const { data: category } = useQuery({
    queryKey: ['categoryById', data.categoryId],
    queryFn: () => fetchCategoryById.queryFn(data.categoryId),
  });

  const { setType, setIsOpen, setId } = useAddStore();
  const { deleteRestaurant } = useRestaurant();

  const handleDeleteRestaurant = async () => {
    try {
      const restaurantId = localStorage.getItem('@foody_delete_item_id');
      if (!restaurantId) {
        throw new Error('Restaurant ID not found in local storage');
      }

      await deleteRestaurant.mutateAsync(restaurantId);

      notification.success({
        message: t('Restaurant deleted successfully'),
      });
    } catch (e: any) {
      notification.error({
        message: t('Restaurant deletion failed'),
        description: e.message || 'An error occurred while deleting the Restaurant.',
      });
    }
  };

  const handleEditRestaurant = (id: string) => {
    setType('updateRestaurant');
    setIsOpen(true);
    setId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {data.image && <img width={65} height={57} src={data.image} alt="restaurant" />}
        <div className={styles.textWrapper}>
          <Text size={TextSize.L} weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
            {data.name}
          </Text>
          <Text size={TextSize.S} theme={TextTheme.GRAY}>
            {category?.name || t('Unknown Category')}
          </Text>
        </div>
      </div>
      <HandleButtons
        display={HandleButtonsDisplay.COLUMN}
        id={data._id}
        onDelete={handleDeleteRestaurant}
        onEdit={() => handleEditRestaurant(data._id || '')}
      />
    </div>
  );
};
