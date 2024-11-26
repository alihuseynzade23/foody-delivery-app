import { useMutation } from '@tanstack/react-query';
import { register } from '../api/user-register';

export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: register.mutationFn,
    mutationKey: register.mutationKey,
    onError: error => {
      console.error('Registration failed:', error);
    },
  });
  return mutation;
};
