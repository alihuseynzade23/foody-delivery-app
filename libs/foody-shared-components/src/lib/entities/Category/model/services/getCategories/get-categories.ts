import { apiClient } from '../../../../../api/api-client';

export const getCategoriesQuery = {
  queryFn: async () => {
    const response = await apiClient.get('/category/all');
    return response.data;
  },
  queryKey: ['categories'],
};
