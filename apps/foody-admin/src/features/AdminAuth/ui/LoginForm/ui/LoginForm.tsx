import {
  Input,
  InputTheme,
  Button,
  ButtonTheme,
  ButtonSize,
  Text,
  TextSize,
  TextTheme,
  TextFont,
  TextWeight,
  loginSchema,
  useAuth,
} from '@org/foody-shared-components';

import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import { LoadingOutlined } from '@ant-design/icons';
import { notification, Spin } from 'antd';
import { useAdminLogin } from '../model/hooks/useAdminLogin';

export const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const adminLoginMutation = useAdminLogin();

  const { isLoading } = useAuth();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema(lang),
    onSubmit: () => handleLogin(),
  });

  const handleLogin = async () => {
    try {
      // const response = await adminLoginMutation.mutateAsync({
      //   login: values.email,
      //   password: values.password
      // })
      await adminLoginMutation.mutateAsync({
        login: values.email,
        password: values.password,
      });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.message || 'An error occurred during registration',
      });
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={styles.LoginForm}>
      <Text
        className={styles.title}
        size={TextSize.XL}
        theme={TextTheme.ORANGE}
        font={TextFont.MONTSERRAT}
        weight={TextWeight.EXTRABOLD}
      >
        {t('Welcome Admin')}
      </Text>
      <div className={styles.inputWrapper}>
        <Input
          error={errors.email && touched.email ? errors.email : undefined}
          name="email"
          // disabled={isLoading}
          onChange={handleChange}
          inputClassName={styles.input}
          value={values.email}
          theme={InputTheme.BG_ADMIN}
          placeholder="Email"
        />
        <Input
          error={errors.password && touched.password ? errors.password : undefined}
          name="password"
          onChange={handleChange}
          // disabled={isLoading}
          inputClassName={styles.input}
          value={values.password}
          theme={InputTheme.BG_ADMIN}
          placeholder="Password"
          type="password"
        />
      </div>
      <Button
        type="submit"
        theme={ButtonTheme.BG_VIOLET}
        size={ButtonSize.XL}
        className={styles.loginBtn}
      >
        {isLoading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        ) : (
          t('Sign in')
        )}
      </Button>
    </form>
  );
};
