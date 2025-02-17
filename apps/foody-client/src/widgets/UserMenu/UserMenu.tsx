import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './UserMenu.module.scss';
import userIcon from '../../shared/assets/user.svg';
import { useAuth } from '@org/foody-shared-components';

interface UserMenuProps {
  navigate: (path: string) => void;
}

export const UserMenu: FC<UserMenuProps> = ({ navigate }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const { logout } = useAuth();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.userMenuWrapper} ref={menuRef}>
      <img src={userIcon} alt="user" className={styles.userIcon} onClick={toggleMenu} />
      {menuOpen && (
        <div className={styles.userMenu}>
          <div onClick={() => handleNavigation('/user?page=profile')}>{t`Profile`}</div>
          <div onClick={() => handleNavigation('/user?page=basket')}>{t`Your Basket`}</div>
          <div onClick={() => handleNavigation('/user?page=orders')}>{t`Your Orders`}</div>
          <div onClick={() => handleNavigation('/user?page=checkout')}>{t`Checkout`}</div>
          <div onClick={logout}>{t`Logout`}</div>
        </div>
      )}
    </div>
  );
};
