import { apiClient } from '@org/foody-shared-components';

export const getRestaurantsByCategoryIdQuery = {
  queryFn: async (id: string) => {
    const response = await apiClient.get(`/restaurant/byCategoryId/${id}`);
    return response.data;
  },
  queryKey: ['restaurantByCategoryId'],
};
