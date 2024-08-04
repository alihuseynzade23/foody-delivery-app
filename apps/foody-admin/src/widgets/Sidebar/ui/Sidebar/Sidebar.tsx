import { classNames, isActivePath, Text, useAuth } from '@org/foody-shared-components';

import styles from './Sidebar.module.scss';

import { FC, useMemo } from 'react';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useTranslation } from 'react-i18next';

import logoutIcon from '../../../../shared/assets/logout.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const { logout } = useAuth();

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map(item => (
        <SidebarItem isActive={isActivePath(item.path)} item={item} key={item.path} />
      )),
    [],
  );

  return (
    <div className={classNames(styles.Sidebar, {}, [className])}>
      {itemsList}
      <div className={styles.logout} onClick={logout}>
        <img height={24} width={24} src={logoutIcon} alt="logout" />
        <Text>{t`Logout`}</Text>
      </div>
    </div>
  );
};
