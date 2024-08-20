import { addStore } from '../store/add-store';

export const addCb = (type: string) => {
  const { setIsOpen, setType } = addStore();

  return () => {
    setIsOpen(true);
    setType(type);
  };
};
