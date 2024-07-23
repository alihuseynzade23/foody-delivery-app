import { LoginImage } from '../../../features/AdminAuth/ui/LoginImage';
import { LoginForm } from '../../../features/AdminAuth/ui/LoginForm';

import styles from './AdminPage.module.scss';

import { Logo, LogoTheme } from '@org/foody-shared-components';

export const AdminPage = () => {
  return (
    <div className={styles.admin}>
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
