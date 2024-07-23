import React from 'react';

import styles from './LoginImage.module.scss';
import adminLoginImage from '../../../../../shared/assets/admin-login.svg';

export const LoginImage = () => {
  return (
    <div className={styles.LoginImage}>
      {/* Place lang switcher here */}
      <img src={adminLoginImage} alt='admin login'/>;
    </div>
  );
};
