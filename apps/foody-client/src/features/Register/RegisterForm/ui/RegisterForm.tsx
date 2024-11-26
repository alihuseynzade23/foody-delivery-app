import {
  Button,
  ButtonSize,
  ButtonTheme,
  Input,
  Spinner,
  registerSchema,
} from '@org/foody-shared-components';
import styles from './RegisterForm.module.scss';
import { useFormik } from 'formik';
// import { registerSchema } from '@org/shared';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { notification } from 'antd';

import { useRegister } from '../model/hooks/useRegister';

interface RegisterFormProps {
  setAuthPage: (page: string) => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ setAuthPage }) => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  // const { register, isLoading } = useAuth();
  const registerMutation = useRegister();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      fullName: '',
    },
    validationSchema: registerSchema(lang),
    onSubmit: () => handleRegister(),
  });

  const handleRegister = async () => {
    try {
      await registerMutation.mutateAsync({
        login: values.email,
        password: values.password,
        username: values.username,
        fullName: values.fullName,
      });
      setAuthPage('login');
      notification.success({
        message: 'Registration successful!',
      });
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
        label={t`Full name`}
        value={values.fullName}
        disabled={registerMutation.isPending}
        name="fullName"
        onChange={handleChange}
        type="text"
        placeholder="Tehran Hamidli"
        error={errors.fullName && touched.fullName ? errors.fullName : undefined}
      />
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        value={values.username}
        disabled={registerMutation.isPending}
        name="username"
        onChange={handleChange}
        label="Username"
        type="text"
        placeholder="Push it to the github"
        error={errors.username && touched.username ? errors.username : undefined}
      />
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        value={values.email}
        // disabled={isLoading}
        name="email"
        onChange={handleChange}
        label="email"
        type="text"
        placeholder="email"
        error={errors.email && touched.email ? errors.email : undefined}
      />
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        value={values.password}
        // disabled={isLoading}
        name="password"
        onChange={handleChange}
        label={t`Password`}
        type="password"
        placeholder={t`Password`}
        error={errors.password && touched.password ? errors.password : undefined}
      />
      <Button
        type="submit"
        size={ButtonSize.L}
        className={styles.btn}
        disabled={registerMutation.isPending}
        theme={ButtonTheme.BG_RED}
      >
        {registerMutation.isPending ? <Spinner /> : t('Register')}
      </Button>
    </form>
  );
};
