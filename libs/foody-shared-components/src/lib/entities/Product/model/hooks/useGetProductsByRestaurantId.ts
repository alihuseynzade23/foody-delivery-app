import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../../api/api-client';

export const useGetProductsByRestaurantId = (selectedRestaurant: string | null) => {
  if (!selectedRestaurant) {
    console.warn('Selected category is null or undefined.');
  }

  return useQuery({
    queryKey: ['products', 'byRestaurantId', selectedRestaurant],
    queryFn: async () => {
      if (!selectedRestaurant) return [];
      const response = await apiClient.get(`/product/byRestaurantId/${selectedRestaurant}`);
      return response.data;
    },
    enabled: !!selectedRestaurant,
  });
};
