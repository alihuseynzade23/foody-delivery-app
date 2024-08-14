import { Button, ButtonTheme } from '@org/foody-shared-components';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './AddButtons.module.scss';
import { addStore } from '../../model/store/add-store';

type AddButtonsProps = {
  buttonText: string;
};

export const AddButtons: FC<AddButtonsProps> = ({ buttonText }) => {
  const { t } = useTranslation();

  const { setClose } = addStore();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button
          onClick={setClose}
          className={`${styles.btn} ${styles.cancel}`}
          theme={ButtonTheme.BG_GRAY}
        >{t`Cancel`}</Button>
        <Button theme={ButtonTheme.BG_VIOLET} className={`${styles.btn} ${styles.add}`}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
