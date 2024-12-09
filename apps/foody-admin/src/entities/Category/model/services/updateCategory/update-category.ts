import { apiClient } from '@org/foody-shared-components';
import { Category } from '../../types/category';

export const updateCategory = {
  mutationFn: async ({
    payload,
    id,
  }: {
    payload: Pick<Category, 'name' | 'image'>;
    id: string;
  }) => {
    return await apiClient.put(`/category/${id}`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['updateCategory'],
};
