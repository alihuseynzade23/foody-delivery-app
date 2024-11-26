import { useAuth } from '@org/foody-shared-components';
import { adminLogin } from '../api/admin-login';
import { useMutation } from '@tanstack/react-query';

export const useAdminLogin = () => {
  const { handleTokens, setIsLoggedIn, setUser } = useAuth();

  const mutation = useMutation({
    mutationFn: adminLogin.mutationFn,
    mutationKey: adminLogin.mutationKey,
    onError: error => {
      console.error('Login failed:', error);
    },
    onSuccess: res => {
      handleTokens(res.data.access_token, res.data.refresh_token);
      setUser(res.data.user);
      setIsLoggedIn(true);
    },
  });
  return mutation;
};
