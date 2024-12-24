import { apiClient } from '../../../../../api/api-client';

export const getProductsQuery = {
  queryFn: async () => {
    const response = await apiClient.get('/product/all');
    return response.data;
  },
  queryKey: ['products'],
};
