import { apiClient } from '@org/foody-shared-components';
import { Category } from '../../types/product';

export const updateCategory = {
  mutationFn: async ({ payload, id }: { payload: Category; id: string }) => {
    return await apiClient.put(`/category/${id}`, payload);
  },
  mutationKey: ['updateCategory'],
};
