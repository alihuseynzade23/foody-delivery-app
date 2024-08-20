import { create } from 'zustand';
import { UserSession } from '../types/user';
import { account } from '@org/shared';

type AuthStore = {
  user: UserSession | null;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  setUser: (user: UserSession | null) => void;
};

const authStore = create<AuthStore>(set => ({
  user: null,
  isLoading: false,
  isLoggedIn: false,

  setIsLoading: value => set({ isLoading: value }),
  setUser: user => set(state => ({ user })),
  setIsLoggedIn: value => set({ isLoggedIn: value }),
}));

export default authStore;
