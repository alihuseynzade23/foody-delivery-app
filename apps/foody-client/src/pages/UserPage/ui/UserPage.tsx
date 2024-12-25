import styles from './UserPage.module.scss';

import { useSearchParams } from 'react-router-dom';

import { Profile, UserSidebar } from '../../../entities/User';

export const UserPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  return (
    <div className={styles.userContainer}>
      <UserSidebar />
      <div className={styles.content}>{page === 'profile' && <Profile />}</div>
    </div>
  );
};
