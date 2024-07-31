import { FC } from 'react';
import { Navbar } from '../../../../widgets/Navbar/ui/Navbar/Navbar';

import styles from './BaseLayout.module.scss';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles.BaseLayout}>
      <Navbar />
      {children}
    </div>
  );
};
