import { create } from 'zustand';

import { AddStoreType } from '../types/add-store';

export const addStore = create<AddStoreType>(set => ({
  type: '',
  isOpen: false,

  setType: type => set({ type }),
  setIsOpen: isOpen => set({ isOpen }),
  setClose: () => set({ isOpen: false }),
}));
