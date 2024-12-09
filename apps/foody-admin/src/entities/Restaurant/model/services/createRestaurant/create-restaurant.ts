import { apiClient } from '@org/foody-shared-components';
import { Restaurant } from '../../types/restaurant';

export const createRestaurant = {
  mutationFn: async (data: Restaurant) => {
    return await apiClient.post('/restaurant/create', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['createRestaurant'],
};
