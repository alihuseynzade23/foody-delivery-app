import { create } from 'zustand';

import { AddStoreType } from '../types/add-store';

export const useAddStore = create<AddStoreType>(set => ({
  type: '',
  isOpen: false,
  id: '',

  setType: type => set({ type }),
  setIsOpen: isOpen => set({ isOpen }),
  setClose: () => set({ isOpen: false }),
  setId: id => set({ id }),
}));
