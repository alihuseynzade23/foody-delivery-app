import styles from './AdminPage.module.scss';

import { Logo, LogoTheme, Text } from '@org/foody-shared-components';

export const AdminPage = () => {
  return (
    <div className={styles.admin}>
      <Logo theme={LogoTheme.PRIMARY} />
      
      <Text title="Foody Delivery App" size="s" />
    </div>
  );
};
