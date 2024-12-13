import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../../api/api-client';

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

export { useGetOneCategory };
