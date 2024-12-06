import { Input, InputTheme, Spinner, Text } from '@org/foody-shared-components';
import styles from './RestaurantForm.module.scss';

import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

import { useAddStore } from '../../../Add';

import { createRestaurantSchema } from '../../model/validations/createRestaurant';

import { AddFormLayout } from '../../../Add';

import { imageStore } from '@org/foody-shared-components';
import { useRestaurant } from '../../model/hooks/useRestaurant';
import { notification, Select } from 'antd';
import { useCategory } from '../../../Category/model/hooks/useCategory';
import { useQuery } from '@tanstack/react-query';
import { Category } from '../../../Category/model/types/category';

export const RestaurantForm = () => {
  const { t } = useTranslation('restaurant');
  const { setClose, id } = useAddStore();

  const { fetchCategories } = useCategory();
  const { image, setImage, setImageUrl } = imageStore();
  const { data: categories, isLoading } = useQuery(fetchCategories);

  const { createRestaurant } = useRestaurant();

  const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      name: '',
      cuisine: '',
      price: '',
      deliveryTime: '',
      address: '',
      categoryId: '',
    },
    validationSchema: createRestaurantSchema(t`Name is required`),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createRestaurant.mutateAsync({
          name: values.name,
          image,
          cuisine: values.cuisine,
          price: Number(values.price),
          deliveryTime: Number(values.deliveryTime),
          address: values.address,
          categoryId: values.categoryId,
        });

        resetForm();
        setClose();
        setImage(null);

        notification.success({
          message: t`Restaurant created successfully`,
        });
      } catch (err: any) {
        notification.error({
          message: t`Restaurant creation failed`,
          description: err.message || 'An error occurred while creating the restaurant.',
        });
      }
    },
  });

  return (
    <AddFormLayout
      title={t`Add Restaurant`}
      subtitle={t`Add restaurant information`}
      buttonText={id ? t`Update Restaurant` : t`Create Restaurant`}
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
          error={errors.cuisine && touched.cuisine ? errors.cuisine : undefined}
          name="cuisine"
          value={values.cuisine}
          onChange={handleChange}
          // value={Array.isArray(values.cuisine) ? values.cuisine.join(', ') : values.cuisine}
          // onChange={e =>
          //   handleChange({
          //     target: {
          //       name: 'cuisine',
          //       value: e.target.value.split(',').map(item => item.trim()),
          //     },
          //   })
          // }
          theme={InputTheme.BG_ADMIN}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Cuisine`}
        />

        <Input
          error={errors.address && touched.address ? errors.address : undefined}
          name="address"
          value={values.address}
          onChange={handleChange}
          theme={InputTheme.BG_ADMIN}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Address`}
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
          label={t`Price`}
        />

        <Input
          error={errors.deliveryTime && touched.deliveryTime ? errors.deliveryTime : undefined}
          name="deliveryTime"
          type="number"
          value={values.deliveryTime}
          onChange={handleChange}
          theme={InputTheme.BG_ADMIN}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Delivery Time (mins)`}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.selectWrapper}>
            <Text>Category</Text>
            <Select
              variant="filled"
              className={styles.select}
              onChange={value => setValues({ ...values, categoryId: value })}
              options={categories?.map((category: Category) => ({
                label: category.name,
                value: category._id,
              }))}
            />
          </div>
        )}
      </div>
    </AddFormLayout>
  );
};
