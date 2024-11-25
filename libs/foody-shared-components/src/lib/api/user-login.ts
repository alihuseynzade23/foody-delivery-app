import apiClient from './api-client';

export const login = {
  mutationFn: async (data: { login: string; password: string }) => {
    return await apiClient.post('/auth/login', data);
  },
  mutationKey: ['login'],
};
