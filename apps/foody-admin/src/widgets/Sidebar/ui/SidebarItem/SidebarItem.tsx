import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Text } from '@org/foody-shared-components';
import styles from './SidebarItem.module.scss';
import { NavLink } from 'react-router-dom';
import { SidebarItemType } from '../../model/items';

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
      <img height={24} width={24} src={item.Icon} alt={item.text} />
      <Text className={styles.link}>{t(item.text)}</Text>
    </NavLink>
  );
});
