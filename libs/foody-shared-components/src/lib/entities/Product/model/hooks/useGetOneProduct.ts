import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../../api/api-client';

const useGetOneProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await apiClient.get(`/product/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export { useGetOneProduct };
