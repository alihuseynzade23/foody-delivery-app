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
  useAuth,
  Loader,
} from '@org/foody-shared-components';

import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';

import { AdminLoginSchema } from '@org/shared';

import { useFormik } from 'formik';

export const LoginForm = () => {
  const { t } = useTranslation();

  const { login, isLoading } = useAuth();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: AdminLoginSchema(),
    onSubmit: () => handleLogin(),
  });

  const handleLogin = () => {
    login(values.email, values.password);
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
          disabled={isLoading}
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
          disabled={isLoading}
          inputClassName={styles.input}
          value={values.password}
          theme={InputTheme.BG_ADMIN}
          placeholder="Password"
          type="password"
          eye="true"
        />
      </div>
      <Button
        type="submit"
        theme={ButtonTheme.BG_VIOLET}
        size={ButtonSize.XL}
        className={styles.loginBtn}
      >
        {/* {t('Sign in')} */}
        {isLoading ? <Loader /> : t('Sign in')}
      </Button>
    </form>
  );
};
