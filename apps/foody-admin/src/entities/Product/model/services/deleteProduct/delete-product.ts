import { apiClient } from '@org/foody-shared-components';

export const deleteProduct = {
  mutationFn: async (id: string) => {
    return await apiClient.delete(`/product/${id}`);
  },
  mutationKey: ['deleteProduct'],
};
