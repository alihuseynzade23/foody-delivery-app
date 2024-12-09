import { apiClient } from '@org/foody-shared-components';

export const deleteRestaurant = {
  mutationFn: async (id: string) => {
    return await apiClient.delete(`/restaurant/${id}`);
  },
  mutationKey: ['deleteRestaurant'],
};
