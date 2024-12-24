import { apiClient } from '../../../../../api/api-client';

export const deleteRestaurant = {
  mutationFn: async (id: string) => {
    return await apiClient.delete(`/restaurant/${id}`);
  },
  mutationKey: ['deleteRestaurant'],
};
