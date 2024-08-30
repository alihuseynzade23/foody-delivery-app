import styles from './HandleButtons.module.scss';

import editIcon from '../../../../../shared/assets/edit.svg';
import deleteIcon from '../../../../../shared/assets/delete.svg';

import { classNames, Modal, Mods, useModal } from '@org/foody-shared-components';
import { FC } from 'react';

type HandleButtonsProps = {
  className?: string;
  display?: string;
  onClick: () => void;
};

export enum HandleButtonsDisplay {
  ROW = 'row',
  COLUMN = 'column',
}

export const HandleButtons: FC<HandleButtonsProps> = props => {
  const { display = HandleButtonsDisplay.ROW, className, onClick } = props;

  const { openModal, isModalOpen } = useModal();

  const mods: Mods = {
    [styles[display]]: true,
  };
  return (
    <div className={classNames(styles.handleButtons, mods, [className])}>
      <img src={editIcon} alt="edit" />
      <img src={deleteIcon} onClick={openModal} alt="delete" />
      {isModalOpen && <Modal onClick={onClick} />}
    </div>
  );
};
