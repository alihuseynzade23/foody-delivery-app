import { classNames } from '@org/foody-shared-components';
import { addStore } from '../../model/store/add-store';
import styles from './AddEntity.module.scss';

import closeSvg from '../../../../shared/assets/close.svg';

import { AddCategoryForm } from '../AddCategoryForm/AddCategoryForm';

export const AddEntity = () => {
  const { type, isOpen, setClose } = addStore();

  return (
    isOpen && (
      <div className={styles.container}>
        <img onClick={setClose} src={closeSvg} alt="close" className={styles.closeIcon} />
        <div
          className={classNames(
            styles.wrapper,
            {
              [styles.open]: isOpen,
              [styles.close]: !isOpen,
            },
            [],
          )}
        >
          {type === 'product' && <div>Add products</div>}
          {type === 'category' && <AddCategoryForm />}
          {type === 'restaurant' && <div>Restaurants</div>}
          {type === 'order' && <div>Orders</div>}
        </div>
      </div>
    )
  );
};
