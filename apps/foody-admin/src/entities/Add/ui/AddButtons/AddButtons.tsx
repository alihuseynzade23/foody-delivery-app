import { Button, ButtonTheme } from '@org/foody-shared-components';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './AddButtons.module.scss';
import { useAddStore } from '../../model/store/add-store';

type AddButtonsProps = {
  buttonText: string;
  onSubmit: () => void;
};

export const AddButtons: FC<AddButtonsProps> = ({ buttonText, onSubmit }) => {
  const { t } = useTranslation();

  const { setClose } = useAddStore();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button
          onClick={setClose}
          className={`${styles.btn} ${styles.cancel}`}
          theme={ButtonTheme.BG_GRAY}
        >{t`Cancel`}</Button>
        <Button
          onClick={onSubmit}
          theme={ButtonTheme.BG_VIOLET}
          className={`${styles.btn} ${styles.add}`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
