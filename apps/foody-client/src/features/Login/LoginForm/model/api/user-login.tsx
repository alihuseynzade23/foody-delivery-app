import { apiClient } from '@org/foody-shared-components';

export const login = {
  mutationFn: async (data: { login: string; password: string }) => {
    return await apiClient.post('/auth/login', data);
  },
  mutationKey: ['login'],
};
