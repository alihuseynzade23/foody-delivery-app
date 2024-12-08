import { FC, ReactNode, MouseEvent, useEffect } from 'react';
import styles from './Modal.module.scss';
import { Text, TextSize, TextTheme, TextWeight } from '../../Text';
import { Button, ButtonTheme } from '../../Button';
import { useModal } from '../../../lib/hooks/useModal';

export type ModalProps = {
  onClick: () => void;
};

export const Modal: FC<ModalProps> = ({ onClick }) => {
  const { closeModal } = useModal();

  const onWrapperClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const onDeleteClick = () => {
    onClick();
    closeModal();
  };

  // Add event listener for Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Attach the event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={styles.modalWrapper} onClick={onWrapperClick}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <Text theme={TextTheme.BLACK} weight={TextWeight.BOLD} size={TextSize.XL}>
          Are you sure it’s deleted?
        </Text>
        <Text theme={TextTheme.BLACK}>
          Attention! If you delete this product, it will not come back...
        </Text>

        <div className={styles.btnWrapper}>
          <Button onClick={closeModal} theme={ButtonTheme.BG_GRAY}>
            Cancel
          </Button>
          <Button onClick={onDeleteClick} theme={ButtonTheme.BG_RED}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
