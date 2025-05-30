import { memo } from 'react';
import { classNames, Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';
import styles from './SidebarItem.module.scss';
import { NavLink } from 'react-router-dom';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
  item: SidebarItemType;
  onClose?: () => void;
}

export const SidebarItem = memo(({ item, onClose }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <NavLink
      onClick={onClose}
      to={item.path}
      className={({ isActive }) => classNames(styles.item, { [styles.active]: isActive })}
    >
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
