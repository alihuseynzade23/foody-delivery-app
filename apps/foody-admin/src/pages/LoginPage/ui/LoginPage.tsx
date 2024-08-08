import { LoginImage } from '../../../features/AdminAuth/ui/LoginImage';
import { LoginForm } from '../../../features/AdminAuth/ui/LoginForm';

import styles from './LoginPage.module.scss';

import { Logo, LogoTheme } from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.admin}>
      <Helmet>
        <title>{t`Sign in`}</title>
        <meta name="description" content="Login page for admin" />
      </Helmet>

      <div className={styles.logoWrapper}>
        <Logo theme={LogoTheme.PRIMARY} />
      </div>
      <div className={styles.loginWrapper}>
        <LoginForm />
        <LoginImage />
      </div>
    </div>
  );
};
