import { Input, InputTheme } from '@org/foody-shared-components';
import styles from './AddCategoryForm.module.scss';

import { AddFormLayout } from '../AddFormLayout/AddFormLayout';

export const AddCategoryForm = () => {
  return (
    <AddFormLayout
      title="Add Category"
      subtitle="
Add your Category information"
    >
      <form className={styles.container}>
        <Input theme={InputTheme.BG_ADMIN} inputClassName={styles.input} label='Name'  />
      </form>
    </AddFormLayout>
  );
};
