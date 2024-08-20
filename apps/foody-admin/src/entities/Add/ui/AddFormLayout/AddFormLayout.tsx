import { Text, TextSize, TextTheme, TextWeight } from '@org/foody-shared-components';
import { FC } from 'react';
import { AddButtons } from '../AddButtons/AddButtons';

import styles from './AddFormLayout.module.scss';

import closeSvg from '../../../../shared/assets/close.svg';
import { addStore } from '../../model/store/add-store';

interface AddFormLayoutProps {
  title: string;
  subtitle: string;
  buttonText: string;
  children: React.ReactNode;
}

export const AddFormLayout: FC<AddFormLayoutProps> = ({
  children,
  title,
  subtitle,
  buttonText,
}) => {
  const { setClose } = addStore();

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <Text theme={TextTheme.DARK_GRAY} weight={TextWeight.MEDIUM} size={TextSize.XL}>
            {title}
          </Text>
          <img onClick={setClose} src={closeSvg} alt="close" className={styles.closeIcon} />
        </div>

        {/* <ImageUpload /> */}
        <p>Our custom image upload component</p>
        <div className={styles.formContainer}>
          <Text theme={TextTheme.DARK_GRAY} size={TextSize.L} weight={TextWeight.MEDIUM}>
            {subtitle}
          </Text>
          <div className={styles.formWrapper}>{children}</div>
        </div>
      </div>

      <AddButtons buttonText={buttonText} />
    </div>
  );
};
