import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../../api/api-client';

const useGetOneRestaurant = (id: string) => {
  return useQuery({
    queryKey: ['restaurant', id],
    queryFn: async () => {
      const response = await apiClient.get(`/restaurant/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export { useGetOneRestaurant };
