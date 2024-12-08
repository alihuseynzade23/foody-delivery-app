export type AddStoreType = {
  type: string;
  id: string;
  isOpen: boolean;
  setType: (type: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  setClose: () => void;
  setId: (id: string) => void;
};
