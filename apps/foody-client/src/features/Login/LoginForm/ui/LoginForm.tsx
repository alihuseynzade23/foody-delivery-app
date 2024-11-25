import {
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  Spinner,
  // useAuth,
  loginSchema,
  useLogin,
  authStore,
} from '@org/foody-shared-components';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { notification } from 'antd';

export const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const loginMutation = useLogin();
  const { setIsLoggedIn } = authStore();
  // const {
  // login,
  // isLoading } = useAuth();

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
      await loginMutation.mutateAsync({
        login: values.email,
        password: values.password,
      });
      setIsLoggedIn(true);
    } catch (error: any) {
      notification.error({
        message: error?.response.data.message || 'An error occurred during registration',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        label="Email"
        value={values.email}
        disabled={loginMutation.isPending}
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
        disabled={loginMutation.isPending}
        name="password"
        label={t`Password`}
        type="password"
        placeholder={t`Password`}
        error={errors.password && touched.password ? errors.password : undefined}
      />
      <Button type="submit" size={ButtonSize.L} className={styles.btn} theme={ButtonTheme.BG_RED}>
        {loginMutation.isPending ? <Spinner /> : t`Login`}
      </Button>
    </form>
  );
};
