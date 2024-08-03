import { FC, useEffect, useMemo, useState } from 'react';
import {
  Button,
  ButtonSize,
  ButtonTheme,
  classNames,
  isActivePath,
  TextSize,
  TextWeight,
  Text,
  TextTheme,
} from '@org/foody-shared-components';
import styles from './SidebarReponsive.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemType, registeredUserItems, SidebarItemsList } from '../../model/items';
import closeIconBlack from '../../../../shared/assets/close-icon-black.svg';
import userIcon from '../../../../shared/assets/user.svg';
import { Link } from 'react-router-dom';

interface SidebarResponsiveProps {
  onClose: () => void;
  className?: string;
}

export const SidebarResponsive: FC<SidebarResponsiveProps> = ({ onClose, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState('');

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    setIsVisible(true);

    setIsRegistered(true);
    setUserName('Name Surname');
  }, []);

  const itemsList = useMemo(() => {
    const baseItems: SidebarItemType[] = isRegistered ? registeredUserItems : SidebarItemsList;
    return baseItems.map(item => (
      <SidebarItem isActive={isActivePath(item.path)} item={item} key={item.path} />
    ));
  }, [isRegistered]);

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

        {isRegistered ? (
          <div className={styles.userInfo}>
            <img
              src={userIcon}
              height={30}
              width={30}
              alt="user-icon"
              style={{ cursor: 'pointer', marginRight: '8px' }}
            />
            <Text size={TextSize.XL} weight={TextWeight.MEDIUM} theme={TextTheme.BLACK}>
              {userName}
            </Text>
          </div>
        ) : (
          <Button theme={ButtonTheme.BG_RED} className={styles.btn} size={ButtonSize.M}>
            Sign up
          </Button>
        )}

        <div className={styles.itemList}>{itemsList}</div>
        {isRegistered && (
          <Link className={styles.logout} to={'/'}>
            <Text size={TextSize.XL} weight={TextWeight.MEDIUM} theme={TextTheme.CLEAR}>
              {'Logout'}
            </Text>
          </Link>
        )}
      </div>
    </div>
  );
};
