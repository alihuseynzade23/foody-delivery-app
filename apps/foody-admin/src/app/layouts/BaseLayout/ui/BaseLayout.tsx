import { FC, useState } from 'react';
import { classNames } from '@org/foody-shared-components';

import styles from './BaseLayout.module.scss';

import { Navbar } from '../../../../widgets/Navbar';
import { Sidebar, SidebarResponsive } from '../../../../widgets/Sidebar';
import { AddEntity } from '../../../../entities/Add/';

interface BaseLayoutProps {
  className?: string;
  children?: React.ReactNode;
  header?: boolean;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ className, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className={classNames(styles.AdminLayout, {}, [className])}>
      <Navbar openSidebar={openSidebar} />
      <div className={classNames(styles.contentWrapper)}>
        {isSidebarOpen ? <SidebarResponsive onClose={closeSidebar} /> : <Sidebar />}
        <div style={{ width: '100%' }}>{children}</div>
        <AddEntity />
      </div>
    </div>
  );
};
