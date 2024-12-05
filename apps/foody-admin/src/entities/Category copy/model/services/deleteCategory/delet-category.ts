import { apiClient } from '@org/foody-shared-components';

export const deleteCategory = {
  mutationFn: async (id: string) => {
    return await apiClient.delete(`/category/${id}`);
  },
  mutationKey: ['deleteCategory'],
};
