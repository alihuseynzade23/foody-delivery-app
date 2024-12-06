import { apiClient } from '@org/foody-shared-components';

export const getRestaurantByIdQuery = {
  queryFn: async (id: string) => {
    const response = await apiClient.get(`/restaurant/${id}`);
    return response.data;
  },
  queryKey: ['restaurantById'],
};
