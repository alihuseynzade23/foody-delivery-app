import { classNames } from '@org/foody-shared-components';
import styles from './AddEntity.module.scss';
import closeSvg from '../../../../shared/assets/close.svg';
import { useAddStore } from '../../model/store/add-store';
import { RestaurantForm } from '../../../Restaurant/ui/RestaurantForm/RestaurantForm';
import { CreateCategoryForm, UpdateCategoryFrom } from '../../../Category/';


export const AddEntity = () => {
  const { type, isOpen, setClose } = useAddStore();

  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.open]: isOpen,
          [styles.close]: !isOpen,
        },
        [],
      )}
    >
      <img onClick={setClose} src={closeSvg} alt="close" className={styles.closeIcon} />
      <div className={styles.wrapper}>
        {type === 'product' && <div>Add products</div>}
        {type === 'restaurant' && <RestaurantForm />}
        {type === 'createCategory' && <CreateCategoryForm />}
        {type === 'updateCategory' && <UpdateCategoryFrom />}
        {type === 'order' && <div>Orders</div>}
      </div>
    </div>
  );
};
