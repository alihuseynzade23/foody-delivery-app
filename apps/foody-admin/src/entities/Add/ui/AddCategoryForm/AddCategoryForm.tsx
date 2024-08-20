import { Input, InputTheme } from '@org/foody-shared-components';
import styles from './AddCategoryForm.module.scss';

import { AddFormLayout } from '../AddFormLayout/AddFormLayout';
import { useTranslation } from 'react-i18next';

export const AddCategoryForm = () => {
  const { t } = useTranslation();

  return (
    <AddFormLayout
      title={t`Add Category`}
      subtitle={t`Add category information`}
      buttonText={t`Create Category`}
    >
      <div className={styles.container}>
        <Input
          theme={InputTheme.BG_ADMIN}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label="Name"
        />
      </div>
    </AddFormLayout>
  );
};
