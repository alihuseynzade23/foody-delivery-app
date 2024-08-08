import { memo } from 'react';
import { classNames, Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';
import styles from './SidebarItem.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => classNames(styles.item, { [styles.active]: isActive })}
    >
      {' '}
      <Text
        className={classNames(styles.link)}
        size={TextSize.XL}
        weight={TextWeight.NORMAL}
        theme={TextTheme.CLEAR}
      >
        {t(item.text)}
      </Text>
    </NavLink>
  );
});
