import { apiClient } from "@org/foody-shared-components";

export const register = {
  mutationFn: async (data: {
    login: string;
    password: string;
    username: string;
    fullName: string;
  }) => {
    return await apiClient.post('/auth/register', data);
  },
  mutationKey: ['register'],
};
