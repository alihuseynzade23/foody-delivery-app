import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../../api/api-client';

export const useGetRestaurantsByCategoryId = (selectedCategory: string | null) => {
  if (!selectedCategory) {
    console.warn('Selected category is null or undefined.');
  }

  return useQuery({
    queryKey: ['restaurants', 'byCategoryId', selectedCategory],
    queryFn: async () => {
      if (!selectedCategory) return [];
      const response = await apiClient.get(`/restaurant/byCategoryId/${selectedCategory}`);
      return response.data;
    },
    enabled: !!selectedCategory,
  });
};
