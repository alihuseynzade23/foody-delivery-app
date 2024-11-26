import { useMutation } from '@tanstack/react-query';
import { login } from '../api/user-login';
import { useAuth } from '@org/foody-shared-components';

export const useLogin = () => {
  const { handleTokens, setIsLoggedIn, setUser } = useAuth();

  const mutation = useMutation({
    mutationFn: login.mutationFn,
    mutationKey: login.mutationKey,
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
