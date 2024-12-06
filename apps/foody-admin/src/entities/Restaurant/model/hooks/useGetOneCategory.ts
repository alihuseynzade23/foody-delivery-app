import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@org/foody-shared-components';

const useGetOneCategory = (id: string) => {
  return useQuery({
    queryKey: ['category', id],
    queryFn: async () => {
      const response = await apiClient.get(`/category/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export default useGetOneCategory;
