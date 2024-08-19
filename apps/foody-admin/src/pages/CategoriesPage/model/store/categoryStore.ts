import { create } from 'zustand';
import { CategoryStoreType } from '../types/categoryStore';

export const categoryStore = create<CategoryStoreType>(set => ({
  categories: [],
  isLoading: false,

  setCategories: categories => set({ categories }),
  setIsLoading: value => set({ isLoading: value }),
  addCategory: category =>
    set(state => ({
      categories: [...state.categories, category],
    })),
}));
