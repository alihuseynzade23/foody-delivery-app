import { apiClient } from '../../../../../api/api-client';
import { Restaurant } from '../../types/restaurant';

export const updateRestaurant = {
  mutationFn: async ({ payload, id }: { payload: Restaurant; id: string }) => {
    return await apiClient.put(`/restaurant/${id}`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['updateRestaurant'],
};
