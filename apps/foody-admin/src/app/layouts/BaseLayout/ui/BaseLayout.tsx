import { FC } from 'react';
import { classNames } from '@org/foody-shared-components';

import styles from './BaseLayout.module.scss';

import { Navbar } from '../../../../widgets/Navbar';
import { Sidebar } from '../../../../widgets/Sidebar';

interface BaseLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ className, children }) => {
  return (
    <div className={classNames(styles.AdminLayout, {}, [className])}>
      <Navbar />
      <div className={classNames(styles.contentWrapper)}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
