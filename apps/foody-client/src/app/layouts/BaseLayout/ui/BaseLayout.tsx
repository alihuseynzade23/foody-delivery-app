import { FC, useState } from 'react';
import { Navbar } from '../../../../widgets/Navbar/ui/Navbar/Navbar';
import styles from './BaseLayout.module.scss';
import { classNames } from '@org/foody-shared-components';
import { Sidebar } from '../../../../widgets/Sidebar';
import { Footer } from '../../../../../../foody-client/src/widgets/Footer';

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
    <>
      <div className={styles.BaseLayout}>
        <Navbar isOpen={openSidebar} />
        <div className={classNames(styles.contentWrapper)}>
          {isSidebarOpen ? <Sidebar onClose={closeSidebar} /> : null}
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
