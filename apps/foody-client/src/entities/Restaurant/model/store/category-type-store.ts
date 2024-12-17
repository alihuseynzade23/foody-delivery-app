import { create } from 'zustand';

type Store = {
  //   type: string;
  categoryId: string;
  //   setType: (type: string) => void;
  setCategoryId: (categoryId: string) => void;
};

export const useCategoryIdStore = create<Store>(set => ({
  //   type: '',
  categoryId: '',

  //   setType: type => set({ type }),
  setCategoryId: categoryId => set({ categoryId }),
}));
