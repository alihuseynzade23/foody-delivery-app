import { Input, InputTheme } from '@org/foody-shared-components';
import styles from './AddCategoryForm.module.scss';

// import { AddFormLayout } from '../AddFormLayout/AddFormLayout';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

import { addStore } from '../../../Add';

import { createCategorySchema } from '../../model/validations/createCategory';
import { categoryStore } from '../../../../pages/CategoriesPage';

import { createCategory } from '../../model/services/createCategory/create-category';

import { AddFormLayout } from '../../../Add';

import { imageStore } from '@org/foody-shared-components';
import { uploadImage } from '../../../../shared/utils/upload-image';
import { useCategory } from '../../model/hooks/useCategory';
import { notification } from 'antd';

export const CategoryForm = () => {
  const { t } = useTranslation('category');
  const { setClose } = addStore();

  const { addCategory } = categoryStore();
  const { image } = imageStore();

  const { createCategory } = useCategory();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: createCategorySchema(t`Name is required`),
    onSubmit: () => handleCreateCategory(),
    // onSubmit: () => console.log('test'),
  });

  const handleCreateCategory = async () => {
    try {
      // Call the createCategory mutation
      await createCategory.mutateAsync({
        name: values.name,
        image, // Pass the image file
      });
  
      // Close the modal or reset the form
      setClose();
  
      // React Query will refetch the categories after this
      notification.success({
        message: t`Category created successfully`,
      });
    } catch (err: any) {
      notification.error({
        message: t`Category creation failed`,
        description: err.message || 'An error occurred while creating the category.',
      });
    }
  };
  
  return (
    <AddFormLayout
      title={t`Add Category`}
      subtitle={t`Add category information`}
      buttonText={t`Create Category`}
      onSubmit={handleSubmit}
    >
      <div className={styles.container}>
        <Input
          error={errors.name && touched.name ? errors.name : undefined}
          name="name"
          value={values.name}
          onChange={handleChange}
          theme={InputTheme.BG_ADMIN}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label="Name"
        />
      </div>
    </AddFormLayout>
  );
};
