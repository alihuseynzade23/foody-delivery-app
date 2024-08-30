import { Input, InputTheme } from '@org/foody-shared-components';
import styles from './AddCategoryForm.module.scss';

// import { AddFormLayout } from '../AddFormLayout/AddFormLayout';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

import { addStore } from '../../../Add';

import toast from 'react-hot-toast';

import { createCategorySchema } from '../../model/validations/createCategory';
import { categoryStore } from '../../../../pages/CategoriesPage';

import { createCategory } from '../../model/services/createCategory/createCategory';

import { AddFormLayout } from '../../../Add';

import { imageStore } from '@org/foody-shared-components';
import { uploadImage } from '../../../../shared/utils/upload-image';

export const CategoryForm = () => {
  const { t } = useTranslation('category');
  const { setClose } = addStore();

  const { addCategory } = categoryStore();
  const { image } = imageStore();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: createCategorySchema(t`Name is required`),
    onSubmit: () => handleCreateCategory(),
  });

  const handleCreateCategory = async () => {
    try {
      const data = await createCategory(values.name);
      uploadImage(image as File);
      setClose();
      // @ts-expect-error-next-line
      addCategory(data);
      toast.success('Category created successfully');
    } catch (err: any) {
      toast.error(err.message);
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
