import { create } from 'zustand';
import { User } from '../types/user';

type AuthStore = {
  user: User | null;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  setUser: (user: User | null) => void;
};

const authStore = create<AuthStore>(set => ({
  user: null,
  isLoading: false,
  isLoggedIn: false,

  setIsLoading: value => set({ isLoading: value }),
  setUser: user => set(state => ({ user })),
  setIsLoggedIn: value => set({ isLoggedIn: value }),
}));

export { authStore };
