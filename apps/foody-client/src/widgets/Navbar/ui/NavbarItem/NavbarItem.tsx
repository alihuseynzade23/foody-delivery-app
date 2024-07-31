import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Text } from '@org/foody-shared-components';

import styles from './NavbarItem.module.scss';

import { Link } from 'react-router-dom';
import { NavbarItemType } from '../../model/items';

interface NavbarItemProps {
  item: NavbarItemType;
  isActive: boolean;
}

export const NavbarItem = memo(({ item, isActive }: NavbarItemProps) => {
  const { t } = useTranslation();

  return (
    <Link to={item.path} className={classNames(styles.item, { [styles.active]: isActive })}>
      <Text className={styles.link}>{t(item.text)}</Text>
    </Link>
  );
});
