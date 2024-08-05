import useAuthStore from '../store/auth';

import { account, ID } from '@org/shared';

import toast from 'react-hot-toast';

export const useAuth = () => {
  const { isLoading, isLoggedIn, setIsLoggedIn, setIsLoading, setUser, user } = useAuthStore();

  const navigate = (url: string) => (window.location.href = url);

  const login = (email: string, password: string) => {
    setIsLoading(true);
    account
      .createEmailPasswordSession(email, password)
      .then(res => {
        setUser(res);
        setIsLoading(false);
      })
      .catch(error => {
        handleError(error);
      });
  };

  const register = (email: string, password: string, cb: () => void) => {
    setIsLoading(true);
    account
      .create(ID.unique(), email, password)
      .then(res => {
        cb();
        setIsLoading(false);
        // setUser(res);
        // setIsLoading(false);
      })
      .catch(error => {
        handleError(error);
      });
  };

  const logout = async () => {
    await account.deleteSessions();
    localStorage.clear();
    setIsLoading(false);
    setUser(null);
    navigate('/');
  };

  const initialCheck = async () => {
    setIsLoading(true);

    account
      .getSession('current')
      .then(res => {
        setUser(res);
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleError = (err: Error) => {
    toast.error(err.message);
    console.error(err);
    localStorage.clear();
    setUser(null);
    setIsLoading(false);
  };

  return {
    // handleCode,
    login,
    register,
    logout,
    isLoggedIn,
    isLoading,
    initialCheck,
    // isChecked,
    user,
    // getMe,
    // getNewTokens,
    // redirectToPwChange,
  };
};
