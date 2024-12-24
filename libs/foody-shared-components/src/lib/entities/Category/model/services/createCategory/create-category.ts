import { apiClient } from '../../../../../api/api-client';

export const createCategory = {
  mutationFn: async (data: { name: string; image: File | null }) => {
    return await apiClient.post('/category/create', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['createCategory'],
};
