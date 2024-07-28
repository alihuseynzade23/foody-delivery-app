import { classNames, isActivePath, Text } from '@org/foody-shared-components';

import styles from './Sidebar.module.scss';

import { FC, useMemo } from 'react';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logoutIcon from '../../../../shared/assets/logout.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

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
      <Link className={styles.logout} to={'/'}>
        <img height={24} width={24} src={logoutIcon} alt="logout" />
        <Text>{t`Logout`}</Text>
      </Link>
    </div>
  );
};
