import { FC, useEffect, useMemo, useState } from 'react';
import {
  classNames,
  isActivePath,
  Logo,
  LogoTheme,
  Text,
  useAuth,
} from '@org/foody-shared-components';
import styles from './SidebarResponsive.module.scss';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/items';

import logoutIcon from '../../../../shared/assets/logout.svg';
import arrowLeft from '../../../../shared/assets/arrow-left.svg';

interface SidebarResponsiveProps {
  onClose: () => void;
  className?: string;
}

export const SidebarResponsive: FC<SidebarResponsiveProps> = ({ onClose, className }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const { logout } = useAuth();

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map(item => (
        <SidebarItem isActive={isActivePath(item.path)} item={item} key={item.path} />
      )),
    [],
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.sideBarContainer}>
      <div
        className={classNames(
          styles.Sidebar,
          { [styles.open]: isVisible, [styles.close]: !isVisible },
          [className],
        )}
      >
        <div className={styles.logoWrapper}>
          <img
            src={arrowLeft}
            height={20}
            width={20}
            alt="arrow-left"
            style={{ cursor: 'pointer' }}
            onClick={handleClose}
          />
          <Logo theme={LogoTheme.PRIMARY} />
        </div>
        {itemsList}
        <div className={styles.logout} onClick={logout}>
          <img height={24} width={24} src={logoutIcon} alt="logout" />
          <Text>{t`Logout`}</Text>
        </div>
      </div>
    </div>
  );
};
