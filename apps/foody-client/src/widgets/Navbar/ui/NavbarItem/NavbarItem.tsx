import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Text } from '@org/foody-shared-components';

import styles from './NavbarItem.module.scss';

import { NavLink } from 'react-router-dom';
import { NavbarItemType } from '../../model/items';

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem = memo(({ item }: NavbarItemProps) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => classNames(styles.item, { [styles.active]: isActive })}
    >
      <Text className={styles.link}>{t(item.text)}</Text>
    </NavLink>
  );
});
