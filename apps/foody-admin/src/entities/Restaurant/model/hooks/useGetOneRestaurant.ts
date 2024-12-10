import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@org/foody-shared-components';

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

export default useGetOneRestaurant;
