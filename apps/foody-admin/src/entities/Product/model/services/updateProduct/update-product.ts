import { apiClient } from '@org/foody-shared-components';
import { Product } from '../../types/product';

export const updateProduct = {
  mutationFn: async ({ payload, id }: { payload: Product; id: string }) => {
    return await apiClient.put(`/product/${id}`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['updateProduct'],
};
