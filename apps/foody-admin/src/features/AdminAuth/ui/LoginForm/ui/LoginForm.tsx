import { Input, InputTheme, Button, ButtonTheme, ButtonSize } from '@org/foody-shared-components';

import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.LoginForm}>
      {/* Change to our Text component */}
      <p className={styles.title}>{t`Welcome Admin`}</p>
      <div className={styles.inputWrapper}>
        <Input inputClassName={styles.input} theme={InputTheme.BG_ADMIN} placeholder="Username" />
        <Input inputClassName={styles.input} theme={InputTheme.BG_ADMIN} placeholder="Password" />
      </div>
      {/* Change to our Button component */}
      <Button theme={ButtonTheme.BG_VIOLET} size={ButtonSize.XL} className={styles.loginBtn}>
        {t`Sign in`}
      </Button>
    </div>
  );
};
