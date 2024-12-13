import { apiClient } from '../../../../../api/api-client';

export const deleteProduct = {
  mutationFn: async (id: string) => {
    return await apiClient.delete(`/product/${id}`);
  },
  mutationKey: ['deleteProduct'],
};
