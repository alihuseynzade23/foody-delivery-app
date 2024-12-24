import { apiClient } from '../../../../../api/api-client';
// import { Product } from '../../types/product';

export const updateProduct = {
  mutationFn: async ({ payload, id }: { payload: any; id: string }) => {
    return await apiClient.put(`/product/${id}`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['updateProduct'],
};
