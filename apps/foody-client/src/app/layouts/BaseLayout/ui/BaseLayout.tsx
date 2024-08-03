import { FC, useState } from 'react';
import { Navbar } from '../../../../widgets/Navbar/ui/Navbar/Navbar';
import styles from './BaseLayout.module.scss';
import { classNames } from '@org/foody-shared-components';
import { SidebarResponsive } from '../../../../../../foody-client/src/widgets/Sidebar';


interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  return (
    <div className={styles.BaseLayout}>
      <Navbar isOpen={openSidebar} />
      <div className={classNames(styles.contentWrapper)}>
        {isSidebarOpen ? <SidebarResponsive onClose={closeSidebar} /> : null}
        {children}
      </div>
    </div>

    
  );
};
