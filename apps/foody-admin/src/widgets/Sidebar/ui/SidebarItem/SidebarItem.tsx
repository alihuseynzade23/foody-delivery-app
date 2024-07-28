import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Text } from '@org/foody-shared-components';
import styles from './SidebarItem.module.scss';
import { Link } from 'react-router-dom';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  isActive: boolean;
}

export const SidebarItem = memo(({ item, isActive }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <Link to={item.path} className={classNames(styles.item, { [styles.active]: isActive })}>
      <img height={24} width={24} src={item.Icon} alt={item.text} />
      <Text className={styles.link}>{t(item.text)}</Text>
    </Link>
  );
});
