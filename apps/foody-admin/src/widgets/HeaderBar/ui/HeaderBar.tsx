import { FC } from 'react';
import styles from './HeaderBar.module.scss';
import { Text, TextSize, TextWeight } from '@org/foody-shared-components';

interface HeaderBarProps {
  title: string;
  children: any;
}

export const HeaderBar: FC<HeaderBarProps> = ({ title, children }) => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Text weight={TextWeight.MEDIUM} size={TextSize.L} className={styles.title}>
          {title}
        </Text>
        {children}
      </div>
    </header>
  );
};
