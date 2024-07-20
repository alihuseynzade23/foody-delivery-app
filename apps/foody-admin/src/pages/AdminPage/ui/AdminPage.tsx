import styles from './AdminPage.module.scss';

import { Logo, LogoTheme } from '@org/foody-shared-components';

export const AdminPage = () => {
  return (
    <div className={styles.admin}>
      <Logo theme={LogoTheme.PRIMARY} />
    </div>
  );
};
