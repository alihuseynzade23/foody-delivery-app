import { apiClient } from '../../../../../api/api-client';

export const getRestaurantsQuery = {
  queryFn: async () => {
    const response = await apiClient.get('/restaurant/all');
    return response.data;
  },
  queryKey: ['restaurants'],
};
