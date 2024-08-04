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
} from '@org/foody-shared-components';

import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';

import { account, AdminLoginSchema } from '@org/shared';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: AdminLoginSchema(),
    onSubmit: () => handleLogin(),
  });

  const handleLogin = async () => {
    try {
      await account.createEmailPasswordSession(values.email, values.password);
      navigate('/dashboard');
    } catch (error: any) {
      if (error.code === 400) {
        toast.error(t('Invalid email or password'));
        return;
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.LoginForm}>
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
        {t('Sign in')}
      </Button>
    </form>
  );
};
