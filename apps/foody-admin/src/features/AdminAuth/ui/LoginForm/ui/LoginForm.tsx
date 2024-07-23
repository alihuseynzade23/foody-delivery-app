import React from 'react';
import { Input, InputTheme, Button, ButtonTheme, ButtonSize } from '@org/foody-shared-components';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <div className={styles.LoginForm}>
      {/* Change to our Text component */}
      <p className={styles.title}>Welcome Admin</p>
      <div className={styles.inputWrapper}>
        <Input inputClassName={styles.input} theme={InputTheme.BG_ADMIN} placeholder="Username" />
        <Input inputClassName={styles.input} theme={InputTheme.BG_ADMIN} placeholder="Password" />
      </div>
      {/* Change to our Button component */}
      <Button theme={ButtonTheme.BG_VIOLET} size={ButtonSize.XL} className={styles.loginBtn}>
        Sign in
      </Button>
    </div>
  );
};
