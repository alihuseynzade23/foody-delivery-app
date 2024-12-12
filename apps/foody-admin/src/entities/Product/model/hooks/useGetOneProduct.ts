import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@org/foody-shared-components';

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

export default useGetOneProduct;
