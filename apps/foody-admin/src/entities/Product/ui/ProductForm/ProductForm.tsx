import {
  Input,
  InputTheme,
  Spinner,
  Text,
  useRestaurant,
  useProduct,
  createProductSchema,
  useGetOneProduct,
} from '@org/foody-shared-components';
import styles from './ProductForm.module.scss';

import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

import { useAddStore } from '../../../Add';

import { AddFormLayout } from '../../../Add';

import { imageStore } from '@org/foody-shared-components';
import { notification, Select } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Restaurant } from '../../../Restaurant/lib/types/restaurant';

export const CreateProductForm = () => {
  const { t } = useTranslation('product');
  const { setClose } = useAddStore();

  const { image, setImage, setImageUrl } = imageStore();

  const { fetchRestaurants } = useRestaurant();

  const { data: restaurants, isLoading } = useQuery(fetchRestaurants);

  const { createProduct } = useProduct();

  const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      restaurantId: '',
    },
    validationSchema: createProductSchema(t`Name is required`),
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

  useEffect(() => {
    setImageUrl('');
    setImage(null);
  }, [setImageUrl, setImage]);

  return (
    <AddFormLayout
      title={t`Add Product`}
      subtitle={t`Add product information`}
      buttonText={t`Create Product`}
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

export const UpdateProductForm = () => {
  const { t } = useTranslation('product');
  const { setClose, id } = useAddStore();

  const { fetchRestaurants } = useRestaurant();
  const { data: product, isLoading: productLoading } = useGetOneProduct(id);
  const { updateProduct } = useProduct();
  const { image, setImage, setImageUrl } = imageStore();
  const { data: restaurants, isLoading } = useQuery(fetchRestaurants);

  const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      restaurantId: '',
    },
    validationSchema: createProductSchema(t`Name is required`),
    onSubmit: async values => {
      try {
        const payload = {
          name: values.name,
          image,
          description: values.description,
          price: Number(values.price),
          restaurantId: values.restaurantId,
        };
        await updateProduct.mutateAsync({ payload, id });

        setClose();

        notification.success({
          message: t`Product updated successfully`,
        });
      } catch (err: any) {
        notification.error({
          message: t`Product update failed`,
          description: err.message || 'An error occurred while updating the product.',
        });
      }
    },
  });

  useEffect(() => {
    if (product) {
      setValues({
        name: product.name,
        price: product.price,
        description: product.description,
        restaurantId: product.restaurantId,
      });
      setImage(product.image);
      setImageUrl(product.image);
    }
  }, [setImage, setImageUrl, setValues, product]);

  if (productLoading) {
    return <Spinner />;
  }

  return (
    <AddFormLayout
      title={t`Update Product`}
      subtitle={t`Update product information`}
      buttonText={t`Update Product`}
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
          label={t`Name`}
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
              value={product.restaurantId}
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
