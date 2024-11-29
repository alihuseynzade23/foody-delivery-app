import { classNames } from '@org/foody-shared-components';
import styles from './AddEntity.module.scss';
import closeSvg from '../../../../shared/assets/close.svg';
import { CategoryForm } from '../../../Category';
import { useAddStore } from '../../model/store/add-store';

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
        {type === 'category' && <CategoryForm />}
        {type === 'restaurant' && <div>Restaurants</div>}
        {type === 'order' && <div>Orders</div>}
      </div>
    </div>
  );
};
