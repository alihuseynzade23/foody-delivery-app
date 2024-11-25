import { authStore } from '../store/auth';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import toast from 'react-hot-toast';

export const useAuth = () => {
  const { isLoading, isLoggedIn, setIsLoggedIn, setIsLoading, setUser, user } = authStore();

  //   const navigate = (url: string) => (window.location.href = url);

  const register = (email: string, password: string) => {
    setIsLoading(true);
    const mutation = useMutation({
      mutationFn: async () => await axios.post('/api/auth/register', { email, password }),
      onSuccess: () => setIsLoading(false),
      onError: () => setIsLoading(false),
    });

    mutation.mutate();
  };

  //   const login = (email: string, password: string) => {
  //     setIsLoading(true);
  //     account
  //       .createEmailPasswordSession(email, password)
  //       .then(res => {
  //         setIsLoggedIn(true);
  //         localStorage.setItem('foody_user', JSON.stringify(res));
  //         setUser(res);
  //       })
  //       .catch(handleError)
  //       .finally(() => setIsLoading(false));
  //   };

  //   const adminLogin = (email: string, password: string) => {
  //     setIsLoading(true);
  //     account
  //       .createEmailPasswordSession(email, password)
  //       .then(res => {
  //         if (res.userId == (import.meta as any).env.VITE_ADMIN_USER_ID) {
  //           setIsLoggedIn(true);
  //           localStorage.setItem('foody_user', JSON.stringify(res));
  //           setUser(res);
  //         } else {
  //           handleError(new Error('Unauthorized'));
  //         }
  //       })
  //       .catch(handleError)
  //       .finally(() => setIsLoading(false));
  //   };

  //   const register = (email: string, password: string, cb: () => void) => {
  //     setIsLoading(true);
  //     account
  //       .create(ID.unique(), email, password)
  //       .then(res => {
  //         cb();
  //       })
  //       .catch(handleError)
  //       .finally(() => setIsLoading(false));
  //   };

  //   const logout = async () => {
  //     setIsLoading(true);
  //     try {
  //       await account.deleteSessions();
  //       localStorage.clear();
  //       setUser(null);
  //       navigate('/');
  //     } catch (error: any) {
  //       handleError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   const adminInitialCheck = async () => {
  //     setIsLoading(true);
  //     account
  //       .getSession('current')
  //       .then(res => {
  //         if (res.userId === (import.meta as any).env.VITE_ADMIN_USER_ID) {
  //           localStorage.setItem('foody_user', JSON.stringify(res));
  //           setUser(res);
  //           setIsLoggedIn(true);
  //         } else {
  //           setIsLoggedIn(false);
  //           localStorage.clear();
  //         }
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setIsLoggedIn(false);
  //       })
  //       .finally(() => setIsLoading(false));
  //   };

  //   const initialCheck = async () => {
  //     setIsLoading(true);
  //     account
  //       .getSession('current')
  //       .then(res => {
  //         localStorage.setItem('foody_user', JSON.stringify(res));
  //         setUser(res);
  //         setIsLoggedIn(true);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setIsLoggedIn(false);
  //       })
  //       .finally(() => setIsLoading(false));
  //   };

  //   const handleError = (err: Error) => {
  //     console.error(err);
  //     toast.error(err.message);
  //     setUser(null);
  //     setIsLoading(false);
  //   };

  return {
    //     login,
    //     adminInitialCheck,
    //     adminLogin,
    register,
    //     logout,
    //     isLoggedIn,
    isLoading,
    //     initialCheck,
    //     user,
  };
};
