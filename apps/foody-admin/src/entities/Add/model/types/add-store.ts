export type AddStoreType = {
  type: string;
  isOpen: boolean;
  setType: (type: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  setClose: () => void;
};
