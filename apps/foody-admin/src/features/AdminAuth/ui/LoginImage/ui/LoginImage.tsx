import React from 'react';

import styles from './LoginImage.module.scss';
import adminLoginImage from '../../../../../shared/assets/admin-login.svg';
import { LangSwitcher } from '@org/foody-shared-components';

export const LoginImage = () => {
  return (
    <div className={styles.LoginImage}>
      <LangSwitcher className={styles.langSwitcher} />
      <img src={adminLoginImage} alt="admin login" />
    </div>
  );
};
