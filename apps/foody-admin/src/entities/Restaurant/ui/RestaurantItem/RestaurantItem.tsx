import { FC } from 'react';
import { Restaurant } from '../../model/types/restaurant';
import styles from './RestaurantItem.module.scss';
import {
  HandleButtons,
  HandleButtonsDisplay,
} from '../../../../features/handleProduct/ui/HandleButtons';
import { useCategory } from '../../../Category';
import { useQuery } from '@tanstack/react-query';
import { Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';
import { useRestaurant } from '../../model/hooks/useRestaurant';
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
      await deleteRestaurant.mutateAsync(localStorage.getItem('@foody_delete_item_id') || '');

      notification.success({
        message: t`Restaurant deleted succesfully`,
      });
    } catch (e: any) {
      notification.error({
        message: t`Restaurant deletion failed`,
        description: e.message || 'An error occurred while deleting the Restaurant.',
      });
    }
  };

  const handleEditRestaurant = async (id: string) => {
    setType('updateRestaurant');
    setIsOpen(true);
    setId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img width={65} height={57} src={data.image} alt="restaurant" />
        <div className={styles.textWrapper}>
          <Text size={TextSize.L} weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
            {data.name}
          </Text>
          <Text size={TextSize.S} theme={TextTheme.GRAY}>
            {category?.name}
          </Text>
        </div>
      </div>
      <HandleButtons
        display={HandleButtonsDisplay.COLUMN}
        id={data._id}
        onDelete={handleDeleteRestaurant}
        onEdit={() => handleEditRestaurant(data._id ? data._id : '')}
      />
    </div>
  );
};
