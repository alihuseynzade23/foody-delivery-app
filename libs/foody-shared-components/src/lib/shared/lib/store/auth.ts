import { create } from 'zustand';
import { UserSession } from '../types/user';

type AuthStore = {
  user: UserSession | null;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isLoggedIn: boolean;
  setUser: (user: UserSession | null) => void;
};

const useAuthStore = create<AuthStore>(set => ({
  user: null,
  isLoading: false,
  isLoggedIn: false,

  setIsLoading: value => set({ isLoading: value }),
  setUser: user => set(state => ({ user, isLoggedIn: !!user })), 
}));

export default useAuthStore;
