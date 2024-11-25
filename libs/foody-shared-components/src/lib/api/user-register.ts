import apiClient from './api-client';

export const register = {
  mutationFn: async (data: { login: string; password: string }) => {
    return await apiClient.post('/auth/register', data);
  },
  mutationKey: ['register'],
};
