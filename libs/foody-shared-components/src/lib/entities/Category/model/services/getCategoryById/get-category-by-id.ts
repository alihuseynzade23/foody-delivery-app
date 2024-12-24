import { apiClient } from '../../../../../api/api-client';

export const getCategoryByIdQuery = {
  queryFn: async (id: string) => {
    const response = await apiClient.get(`/category/${id}`);
    return response.data;
  },
  queryKey: ['categoryById'],
};
