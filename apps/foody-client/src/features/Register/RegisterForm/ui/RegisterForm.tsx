import { Button, ButtonSize, ButtonTheme, Input, useAuth } from '@org/foody-shared-components';
import styles from './RegisterForm.module.scss';
import { useFormik } from 'formik';
import { registerSchema } from '@org/shared';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface RegisterFormProps {
  setAuthPage: (page: string) => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ setAuthPage }) => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  const { register, isLoading } = useAuth();

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

  const cb = () => setAuthPage('login');

  const handleRegister = () => {
    register(values.email, values.password, cb);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        label={t`Full name`}
        value={values.fullName}
        disabled={isLoading}
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
        disabled={isLoading}
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
        disabled={isLoading}
        name="email"
        onChange={handleChange}
        label="Email"
        type="text"
        placeholder="Email"
        error={errors.email && touched.email ? errors.email : undefined}
      />
      <Input
        inputClassName={styles.input}
        labelClassName={styles.label}
        value={values.password}
        disabled={isLoading}
        name="password"
        onChange={handleChange}
        label={t`Password`}
        type="password"
        placeholder={t`Password`}
        error={errors.password && touched.password ? errors.password : undefined}
      />
      <Button type="submit" size={ButtonSize.L} className={styles.btn} theme={ButtonTheme.BG_RED}>
        {t('Register')}
      </Button>
    </form>
  );
};
