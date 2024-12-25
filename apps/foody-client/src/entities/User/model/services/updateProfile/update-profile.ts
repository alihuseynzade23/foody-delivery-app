import { apiClient } from '@org/foody-shared-components';

export const updateProfile = {
  mutationFn: async ({ payload, id }: { payload: any; id: string }) => {
    return await apiClient.patch(`auth/${id}`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  mutationKey: ['updateProfile'],
};
