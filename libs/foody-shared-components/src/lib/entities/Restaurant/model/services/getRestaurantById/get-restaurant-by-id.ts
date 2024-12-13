import { apiClient } from '../../../../../api/api-client';

export const getRestaurantByIdQuery = {
  queryFn: async (id: string) => {
    const response = await apiClient.get(`/restaurant/${id}`);
    return response.data;
  },
  queryKey: ['restaurantById'],
};
