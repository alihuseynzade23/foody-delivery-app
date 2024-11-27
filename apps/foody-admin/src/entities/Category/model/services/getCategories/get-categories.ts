import { apiClient } from '@org/foody-shared-components';

export const getCategoriesQuery = {
  queryFn: async () => {
    const response = await apiClient.get('/category/all');
    return response.data;
  },
  queryKey: ['categories'],
};
