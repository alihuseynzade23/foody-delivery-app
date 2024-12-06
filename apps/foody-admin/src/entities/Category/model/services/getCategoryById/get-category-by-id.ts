import { apiClient } from '@org/foody-shared-components';

export const getCategoryByIdQuery = {
  queryFn: async (id: string) => {
    const response = await apiClient.get(`/category/${id}`);
    return response.data;
  },
  queryKey: ['categoryById'],
};
