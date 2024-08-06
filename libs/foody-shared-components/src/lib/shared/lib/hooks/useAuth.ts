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
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(res));
        setUser(res);
      })
      .catch(handleError)
      .finally(() => setIsLoading(false));
  };

  const adminLogin = (email: string, password: string) => {
    setIsLoading(true);
    account
      .createEmailPasswordSession(email, password)
      .then(res => {
        if (res.userId == (import.meta as any).env.VITE_ADMIN_USER_ID) {
          setIsLoggedIn(true);
          localStorage.setItem('user', JSON.stringify(res));
          setUser(res);
        } else {
          handleError(new Error('Unauthorized'));
        }
      })
      .catch(handleError)
      .finally(() => setIsLoading(false));
  };
  const register = (email: string, password: string, cb: () => void) => {
    setIsLoading(true);
    account
      .create(ID.unique(), email, password)
      .then(res => {
        cb();
      })
      .catch(handleError)
      .finally(() => setIsLoading(false));
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await account.deleteSessions();
      localStorage.clear();
      setUser(null);
      navigate('/');
    } catch (error: any) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const adminInitialCheck = async () => {
    setIsLoading(true);
    account
      .getSession('current')
      .then(res => {
        if (res.userId === (import.meta as any).env.VITE_ADMIN_USER_ID) {
          setUser(res);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          localStorage.clear();
        }
      })
      .catch(error => {
        console.error(error);
        setIsLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  };

  const initialCheck = async () => {
    setIsLoading(true);
    account
      .getSession('current')
      .then(res => {
        setUser(res);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.error(error);
        setIsLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
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
    adminInitialCheck,
    adminLogin,
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
