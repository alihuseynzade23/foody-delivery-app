import { FC } from 'react';
import { classNames } from '@org/foody-shared-components';

import styles from './Navbar.module.scss';

import { Logo, LogoTheme } from '@org/foody-shared-components';
import { Button, ButtonTheme } from '@org/foody-shared-components';
import { LangSwitcher } from '@org/foody-shared-components';
import { Text, TextSize, TextWeight } from '@org/foody-shared-components';

import userIcon from '../../../shared/assets/user.svg';
import { useTranslation } from 'react-i18next';

import burgerMenuIcon from '../../../shared/assets/burger-menu.svg';

interface NavbarProps {
  className?: string;
  isOpen?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ className, isOpen }) => {
  const { t } = useTranslation('dashboard');

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.logoWrapper}>
        <img
          onClick={isOpen}
          src={burgerMenuIcon}
          height={26}
          width={26}
          alt="burger-menu"
          style={{ cursor: 'pointer' }}
          className={styles.burgerMenu}
        />
        <Logo theme={LogoTheme.PRIMARY} />
      </div>
      <div className={classNames(styles.infoWrapper)}>
        <Button theme={ButtonTheme.BG_VIOLET} className={styles.addBtn}>
          <Text weight={TextWeight.EXTRABOLD} size={TextSize.S}>
            {'+ ' + t`ADD PRODUCT`}
          </Text>
        </Button>
        <Button theme={ButtonTheme.BG_VIOLET} className={styles.addBtnResponse}>
          <Text weight={TextWeight.EXTRABOLD} size={TextSize.XL}>
            +
          </Text>
        </Button>
        <LangSwitcher />
        <div className={classNames(styles.userInfoWrapper)}>
          <img height={40} width={40} src={userIcon} alt="user" />
          <Text weight={TextWeight.MEDIUM}>Admin</Text>
        </div>
      </div>
    </div>
  );
};
