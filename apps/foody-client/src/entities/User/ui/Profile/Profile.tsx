import React from 'react';
import styles from './Profile.module.scss';
import {
  Button,
  ButtonTheme,
  imageStore,
  ImageUpload,
  Input,
  InputTheme,
  Text,
  TextSize,
  TextTheme,
  TextWeight,
  useAuth,
} from '@org/foody-shared-components';
import {  useFormik } from 'formik';
import { updateProfileSchema } from '../../model/validations/updateProfileSchema';
import { useTranslation } from 'react-i18next';

import { useUser } from '../../model/hooks/useUser';
import { notification } from 'antd';
import { Helmet } from 'react-helmet';

export const Profile = () => {
  const { t } = useTranslation('profile');

  const { image, setImage } = imageStore();

  const { updateUser } = useUser();

  const { user } = useAuth();

  const id: string = user?._id || '';

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: '',
      contactNumber: '',
      username: '',
      address: '',
      // email: '',
    },
    validationSchema: updateProfileSchema(t`Name is required`),
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          fullName: values.fullName,
          avatar: image,
          contactNumber: values.contactNumber,
          username: values.username,
          // email: values.email && values.email,
          address: values.address,
        };

        await updateUser.mutateAsync({
          payload,
          id,
        });

        resetForm();
        setImage(null);

        notification.success({
          message: t`Profile updated successfully`,
        });
      } catch (err: any) {
        notification.error({
          message: t`Profile update failed`,
          description: err.message || 'An error occurred while updating the profile.',
        });
      }
    },
  });

  return (
    <section>
      <Helmet>
        <title>{t('User profile')}</title>
        <meta name="description" content="User profile page" />
      </Helmet>
      <Text theme={TextTheme.STRONG_GRAY} weight={TextWeight.BOLD} size={TextSize.XL}>
        Profile
      </Text>
      <ImageUpload className={styles.imageUpload} theme="client" labelName="" />
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <Input
          error={errors.contactNumber && touched.contactNumber ? errors.contactNumber : undefined}
          name="contactNumber"
          value={values.contactNumber}
          onChange={handleChange}
          theme={InputTheme.BG_WHITE}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Contact`}
        />
        {/* <Input
          error={errors.email && touched.email ? errors.email : undefined}
          name="email"
          value={values.email}
          onChange={handleChange}
          theme={InputTheme.BG_WHITE}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Email`}
        /> */}
        <Input
          error={errors.username && touched.username ? errors.username : undefined}
          name="username"
          value={values.username}
          onChange={handleChange}
          theme={InputTheme.BG_WHITE}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Username`}
        />
        <Input
          error={errors.address && touched.address ? errors.address : undefined}
          name="address"
          value={values.address}
          onChange={handleChange}
          theme={InputTheme.BG_WHITE}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Address`}
        />
        <Input
          error={errors.fullName && touched.fullName ? errors.fullName : undefined}
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          theme={InputTheme.BG_WHITE}
          inputClassName={styles.input}
          labelClassName={styles.label}
          label={t`Full Name`}
        />
        <Button
          disabled={Object.values(values).every(value => !value)}
          type="submit"
          className={styles.btn}
          theme={ButtonTheme.BG_GREEN}
        >
          Save
        </Button>
      </form>
    </section>
  );
};
