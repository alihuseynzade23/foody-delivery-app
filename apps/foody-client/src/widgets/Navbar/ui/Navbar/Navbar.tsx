import { FC, useMemo } from 'react';
import { ButtonSize, classNames, Input, isActivePath } from '@org/foody-shared-components';

import styles from './Navbar.module.scss';

import { Logo, LogoTheme } from '@org/foody-shared-components';
import { Button, ButtonTheme } from '@org/foody-shared-components';
import { LangSwitcher } from '@org/foody-shared-components';
import { Text, TextSize, TextWeight } from '@org/foody-shared-components';

import { useTranslation } from 'react-i18next';

import burgerMenuIcon from '../../../../shared/assets/burger-menu.svg';
import { NavbarItemList } from '../../model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';

interface NavbarProps {
  className?: string;
  isOpen?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ className, isOpen }) => {
  const { t } = useTranslation('dashboard');

  const itemsList = useMemo(
    () =>
      NavbarItemList.map(item => (
        <NavbarItem isActive={isActivePath(item.path)} item={item} key={item.path} />
      )),
    [],
  );

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.nav}>
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
          <Logo theme={LogoTheme.SECONDARY} />
        </div>
        <div className={styles.itemsWrapper}>{itemsList}</div>
      </div>
      <div className={styles.clientWrapper}>
        <Input  className={styles.input} placeholder="Search" inputWrapperClassName={styles.inputWrapper} />
        <LangSwitcher />
        <Button theme={ButtonTheme.BG_RED} className={styles.btn} size={ButtonSize.M}>
          Sign up
        </Button>
      </div>
    </div>
  );
};
