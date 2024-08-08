import { useState } from 'react';

import styles from './AuthPage.module.scss';
import {
  Button,
  ButtonSize,
  ButtonTheme,
  LangSwitcher,
  LangSwitcherTheme,
  Logo,
  LogoTheme,
} from '@org/foody-shared-components';

import { RegisterForm, RegisterImage } from '../../../features/Register';
import { LoginForm, LoginImage } from '../../../features/Login';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export const AuthPage = () => {
  const [authPage, setAuthPage] = useState('login');

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{t`Login`}</title>
        <meta name="description" content="Authorization page for user" />
      </Helmet>
      <nav>
        <Logo theme={LogoTheme.PRIMARY} />
        <LangSwitcher theme={LangSwitcherTheme.CLEAR} />
      </nav>
      <div className={styles.authWrapper}>
        <div className={styles.imgWrapper}>
          {authPage === 'login' ? <LoginImage /> : <RegisterImage />}
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.btnWrapper}>
            <Button
              className={styles.btn}
              theme={ButtonTheme.CLEAR}
              size={ButtonSize.XL}
              onClick={() => setAuthPage('login')}
            >
              {t`Login`}
            </Button>
            <Button
              size={ButtonSize.XL}
              className={styles.btn}
              onClick={() => setAuthPage('register')}
            >
              {t`Sign Up`}
            </Button>
          </div>
          {authPage === 'login' ? <LoginForm /> : <RegisterForm setAuthPage={setAuthPage} />}
        </div>
      </div>
    </div>
  );
};
