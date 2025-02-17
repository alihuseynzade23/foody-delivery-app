import styles from './UserPage.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Profile, UserSidebar, Basket } from '../../../entities/User';

export const UserPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  const pages: Record<string, JSX.Element> = {
    profile: <Profile />,
    basket: <Basket />,
  };

  return (
    <div className={styles.userContainer}>
      <UserSidebar />
      <div className={styles.content}>{pages[page ?? '']}</div>
    </div>
  );
};
