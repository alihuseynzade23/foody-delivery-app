import styles from './UserSidebar.module.scss';
import {
  Text,
  TextFont,
  TextSize,
  TextTheme,
  TextWeight,
  classNames,
  useAuth,
} from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';

import { sidebarItems } from '../../model/lib/sidebar-items';
import { SidebarItems } from '../../model/lib/sidebar-items';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const UserSidebar = () => {
  const { t } = useTranslation('user');

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  const { logout } = useAuth();

  const redirect = (url: string) => {
    if (url === '/logout') {
      logout();
    } else {
      navigate(url);
    }
  };

  return (
    <div className={styles.container}>
      {sidebarItems.map((item: SidebarItems, index) => (
        <div
          key={index}
          onClick={() => redirect(item.url || '')}
          className={classNames(
            styles.categoryWrapper,
            {
              [styles.active]: item.param === page,
            },
            [],
          )}
        >
          <img width={25} height={28} src={item.icon} alt={item.name} />
          <Text
            font={TextFont.MUKTA}
            weight={TextWeight.BOLD}
            size={TextSize.L}
            theme={item.param === page ? TextTheme.RED : TextTheme.BLACK}
          >
            {item.name}
          </Text>
        </div>
      ))}
    </div>
  );
};
