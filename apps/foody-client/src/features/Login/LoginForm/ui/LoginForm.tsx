import { Button, ButtonSize, ButtonTheme, Input, useAuth } from '@org/foody-shared-components';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { loginSchema } from '@org/shared';

export const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { login, isLoading } = useAuth();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema(lang),
    onSubmit: () => handleLogin(),
  });

  const handleLogin = () => {
    login(values.email, values.password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        label="Email"
        value={values.email}
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="Email"
        error={errors.email && touched.email ? errors.email : undefined}
      />
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        value={values.password}
        onChange={handleChange}
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
        error={errors.password && touched.password ? errors.password : undefined}
      />
      <Button type="submit" size={ButtonSize.L} className={styles.btn} theme={ButtonTheme.BG_RED}>
        Login
      </Button>
    </form>
  );
};
