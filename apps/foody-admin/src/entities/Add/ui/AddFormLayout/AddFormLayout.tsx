import { ImageUpload, Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';
import { FC } from 'react';
import { AddButtons } from '../AddButtons/AddButtons';

import styles from './AddFormLayout.module.scss';

interface AddFormLayoutProps {
  title: string;
  children: React.ReactNode;
  subtitle: string;
}

export const AddFormLayout: FC<AddFormLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <Text theme={TextTheme.DARK_GRAY} weight={TextWeight.MEDIUM} size={TextSize.XL}>{title}</Text>

        {/* <ImageUpload /> */}
        <p>Our custom image upload component</p>
        <div className={styles.formContainer}>
          <Text theme={TextTheme.DARK_GRAY} size={TextSize.L} weight={TextWeight.MEDIUM}>{subtitle}</Text>
          <div className={styles.formWrapper}>{children}</div>
        </div>
      </div>

      <AddButtons />
    </div>
  );
};
