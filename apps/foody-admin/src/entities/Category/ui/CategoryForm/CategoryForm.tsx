import { Input, InputTheme, Spinner } from '@org/foody-shared-components';
import styles from './CategoryForm.module.scss';

import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

import { useAddStore } from '../../../Add';

import { createCategorySchema } from '../../model/validations/createCategory';

import { AddFormLayout } from '../../../Add';

import { imageStore } from '@org/foody-shared-components';
import { useCategory } from '../../model/hooks/useCategory';
import { notification } from 'antd';
import useGetCategory from '../../model/hooks/useGetOneCategory';
import { useEffect } from 'react';

export const CategoryForm = () => {
  const { t } = useTranslation('category');
  const { setClose, id } = useAddStore();

  const { data: category, isLoading } = useGetCategory(id);
  const { image, setImage, setImageUrl } = imageStore();

  const { createCategory } = useCategory();

  const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: createCategorySchema(t`Name is required`),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createCategory.mutateAsync({
          name: values.name,
          image,
        });

        resetForm();
        setClose();
        setImage(null);

        notification.success({
          message: t`Category created successfully`,
        });
      } catch (err: any) {
        notification.error({
          message: t`Category creation failed`,
          description: err.message || 'An error occurred while creating the category.',
        });
      }
    },
  });

  useEffect(() => {
    if (category) {
      setValues({
        name: category.name,
      });
      setImage(category.image);
      setImageUrl(category.image);
    }
  }, [category, setValues, setImageUrl, setImage]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <AddFormLayout
      title={t`Add Category`}
      subtitle={t`Add category information`}
      buttonText={id ? t`Update Category` : t`Create Category`}
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
