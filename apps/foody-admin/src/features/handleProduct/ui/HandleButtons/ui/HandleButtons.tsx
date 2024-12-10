import styles from './HandleButtons.module.scss';

import editIcon from '../../../../../shared/assets/edit.svg';
import deleteIcon from '../../../../../shared/assets/delete.svg';

import { classNames, Modal, Mods, useModal } from '@org/foody-shared-components';
import { FC } from 'react';

type HandleButtonsProps = {
  className?: string;
  display?: string;
  onDelete: () => void;
  onEdit: () => void;
  id?: string | undefined;
};

export enum HandleButtonsDisplay {
  ROW = 'row',
  COLUMN = 'column',
}

export const HandleButtons: FC<HandleButtonsProps> = props => {
  const { display = HandleButtonsDisplay.ROW, className, onDelete, onEdit, id } = props;

  const { openModal, isModalOpen } = useModal();

  const mods: Mods = {
    [styles[display]]: true,
  };

  const handleDelete = () => {
    localStorage.setItem('@foody_delete_item_id', id || '');
    openModal();
  };

  return (
    <div className={classNames(styles.handleButtons, mods, [className])}>
      <img onClick={onEdit} src={editIcon} alt="edit" />
      <img src={deleteIcon} onClick={handleDelete} alt="delete" />
      {isModalOpen && <Modal onClick={onDelete} />}
    </div>
  );
};
