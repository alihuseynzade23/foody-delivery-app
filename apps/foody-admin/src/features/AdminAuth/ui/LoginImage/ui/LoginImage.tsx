import styles from './LoginImage.module.scss';
import adminLoginImage from '../../../../../shared/assets/admin-login.svg';
import { LangSwitcher, LangSwitcherTheme } from '@org/foody-shared-components';


export const LoginImage = () => {
  return (
    <div className={styles.LoginImage}>
      <LangSwitcher className={styles.langSwitcher } theme={LangSwitcherTheme.CLEAR} />
      <img src={adminLoginImage} className={styles.adminLoginImage} alt="admin login" />
    </div>
  );
};
