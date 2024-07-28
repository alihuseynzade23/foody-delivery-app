import { FC } from 'react';
import { classNames } from '@org/foody-shared-components';

import styles from './Navbar.module.scss';

import { Logo, LogoTheme } from '@org/foody-shared-components';
import { Button, ButtonTheme } from '@org/foody-shared-components';
import { LangSwitcher } from '@org/foody-shared-components';
import { Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';

import userIcon from '../../../shared/assets/user.svg';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('dashboard');

  return (
    <div className={classNames(styles.AdminNavbar, {}, [className])}>
      <Logo theme={LogoTheme.PRIMARY} />

      <div className={classNames(styles.infoWrapper)}>
        <Button theme={ButtonTheme.BG_VIOLET} className={styles.addBtn}>
          <Text weight={TextWeight.EXTRABOLD}  size={TextSize.S}>
            {'+ ' + t`ADD PRODUCT`}
          </Text>
        </Button>
        <LangSwitcher />
        <div className={classNames(styles.userInfoWrapper)}>
          <img height={40} width={40} src={userIcon} alt="user" />
          <Text weight={TextWeight.MEDIUM} >Admin</Text>
        </div>
      </div>
    </div>
  );
};
