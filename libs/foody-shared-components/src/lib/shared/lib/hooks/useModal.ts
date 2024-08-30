import modalStore from '../store/modal';

export const useModal = () => {
  const { openModal, closeModal, isModalOpen } = modalStore();

  return {
    openModal,
    isModalOpen,
    closeModal,
  };
};
