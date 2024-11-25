import { useMutation } from '@tanstack/react-query';
import { login } from '../../../api/user-login';

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: login.mutationFn,
    mutationKey: login.mutationKey,
    onError: error => {
      console.error('Login failed:', error);
    },
  });
  return mutation;
};
