import { Input, InputTheme, Spinner, Text } from '@org/foody-shared-components';
import styles from './ProductForm.module.scss';

import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

import { useAddStore } from '../../../Add';

import { createCategorySchema } from '../../model/validations/createCategory';

import { AddFormLayout } from '../../../Add';

import { imageStore } from '@org/foody-shared-components';
import { useProduct } from '../../model/hooks/useProduct';
import { notification, Select } from 'antd';
import useGetCategory from '../../model/hooks/useGetOneProduct';
import { useEffect } from 'react';
import { Restaurant } from '../../../Restaurant/model/types/restaurant';
import { useRestaurant } from '../../../Restaurant';
import { useQuery } from '@tanstack/react-query';

export const ProductForm = () => {
  const { t } = useTranslation('product');
  const { setClose, id } = useAddStore();

  const { fetchRestaurants } = useRestaurant();
  const { data: restaurants, isLoading } = useQuery(fetchRestaurants);

  const { createProduct } = useProduct();

  // const { data: category, isLoading } = useGetCategory(id);
  const { image, setImage, setImageUrl } = imageStore();

  // const { createCategory } = useCategory();

  const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      restaurantId: '',
    },
    validationSchema: createCategorySchema(t`Name is required`),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createProduct.mutateAsync({
          name: values.name,
          image,
          description: values.description,
          price: values.price,
          restaurantId: values.restaurantId,
        });
        resetForm();
        setClose();
        setImage(null);
        notification.success({
          message: t`Product created successfully`,
        });
      } catch (err: any) {
        notification.error({
          message: t`Product creation failed`,
          description: err.message || 'An error occurred while creating the product.',
        });
      }
    },
  });

  // useEffect(() => {
  //   if (category) {
  //     setValues({
  //       name: category.name,
  //     });
  //     setImage(category.image);
  //     setImageUrl(category.image);
  //   }
  // }, [category, setValues, setImageUrl, setImage]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <AddFormLayout
      title={t`Add Product`}
      subtitle={t`Add product information`}
      buttonText={id ? t`Update Product` : t`Create Product`}
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
        <Input
          error={errors.description && touched.description ? errors.description : undefined}
          name="description"
          value={values.description}
          onChange={handleChange}
          theme={InputTheme.BG_ADMIN}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label="Description"
        />
        <Input
          error={errors.price && touched.price ? errors.price : undefined}
          name="price"
          type="number"
          value={values.price}
          onChange={handleChange}
          theme={InputTheme.BG_ADMIN}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label="Price"
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.selectWrapper}>
            <Text>Restaurant</Text>
            <Select
              variant="filled"
              className={styles.select}
              onChange={value => setValues({ ...values, restaurantId: value })}
              options={restaurants?.map((restaurant: Restaurant) => ({
                label: restaurant.name,
                value: restaurant._id,
              }))}
            />
          </div>
        )}
      </div>
    </AddFormLayout>
  );
};
