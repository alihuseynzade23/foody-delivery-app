import { apiClient } from '../../../../../api/api-client';

export const deleteCategory = {
  mutationFn: async (id: string) => {
    return await apiClient.delete(`/category/${id}`);
  },
  mutationKey: ['deleteCategory'],
};
