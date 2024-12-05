import { apiClient } from '@org/foody-shared-components';

export const getRestaurantsQuery = {
  queryFn: async () => {
    const response = await apiClient.get('/restaurant/all');
    return response.data;
  },
  queryKey: ['restaurants'],
};
