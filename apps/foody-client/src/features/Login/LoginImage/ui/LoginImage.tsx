import loginIcon from '../../../../shared/assets/user-login.svg';

import styles from './LoginImage.module.scss';

export const LoginImage = () => {
  return (
    <div className={styles.container}>
      <img src={loginIcon} alt="login" />
    </div>
  );
};
