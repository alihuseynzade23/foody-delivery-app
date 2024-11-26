import { apiClient } from '@org/foody-shared-components';

export const adminLogin = {
  mutationFn: async (data: { login: string; password: string }) => {
    return await apiClient.post('auth/login/admin', data);
  },
  mutationKey: ['adminLogin'],
};
