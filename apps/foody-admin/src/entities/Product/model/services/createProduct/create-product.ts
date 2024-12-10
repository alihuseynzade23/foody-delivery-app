import { apiClient } from '@org/foody-shared-components';

type Props = {
  name: string;
  image: File | null;
  description: string;
  restaurantId: string;
  price: string;
};

export const createProduct = {
  mutationFn: async (data: Props) => {
    return await apiClient.post('/product/create', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['createProduct'],
};
