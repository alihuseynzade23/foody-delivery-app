import { apiClient } from '@org/foody-shared-components';

export const getProductsQuery = {
  queryFn: async () => {
    const response = await apiClient.get('/product/all');
    return response.data;
  },
  queryKey: ['products'],
};
