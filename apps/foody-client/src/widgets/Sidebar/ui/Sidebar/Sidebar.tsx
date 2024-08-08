import { FC, useEffect, useMemo, useState } from 'react';
import {
  Button,
  ButtonSize,
  ButtonTheme,
  classNames,
  TextSize,
  TextWeight,
  Text,
  TextTheme,
  useAuth,
} from '@org/foody-shared-components';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemType, registeredUserItems, SidebarItemsList } from '../../model/items';
import closeIconBlack from '../../../../shared/assets/close-icon-black.svg';
import userIcon from '../../../../shared/assets/user.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  onClose: () => void;
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ onClose, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { isLoggedIn, logout } = useAuth();

  const { t } = useTranslation();

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itemsList = useMemo(() => {
    const baseItems: SidebarItemType[] = isLoggedIn ? registeredUserItems : SidebarItemsList;
    return baseItems.map(item => <SidebarItem item={item} key={item.path} />);
  }, [isLoggedIn]);

  return (
    <div className={styles.sideBarContainer}>
      <div
        className={classNames(
          styles.Sidebar,
          { [styles.open]: isVisible, [styles.close]: !isVisible },
          [className],
        )}
      >
        <img
          src={closeIconBlack}
          height={20}
          width={20}
          alt="arrow-left"
          style={{ cursor: 'pointer' }}
          onClick={handleClose}
        />

        {isLoggedIn ? (
          <div className={styles.userInfo}>
            <img
              src={userIcon}
              height={30}
              width={30}
              alt="user-icon"
              style={{ cursor: 'pointer', marginRight: '8px' }}
            />
            <Text size={TextSize.XL} weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
              User
            </Text>
          </div>
        ) : (
          <Link to="/profile">
            <Button theme={ButtonTheme.BG_RED} className={styles.btn} size={ButtonSize.M}>
              Sign up
            </Button>
          </Link>
        )}

        <div className={styles.itemList}>{itemsList}</div>
        {isLoggedIn && (
          <Button onClick={logout} className={styles.logout}>
            <Text size={TextSize.XL} weight={TextWeight.MEDIUM} theme={TextTheme.CLEAR}>
              {t`Logout`}
            </Text>
          </Button>
        )}
      </div>
    </div>
  );
};
