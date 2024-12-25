import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '../services/updateProfile/update-profile';

export const useUser = () => {
  const queryClient = useQueryClient();

  // Update user
  const updateUserMutation = useMutation({
    mutationFn: updateProfile.mutationFn,
    mutationKey: updateProfile.mutationKey,

    // onSuccess: () => {
    //     queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    //   },
  })
//   const createRestaurantMutation = useMutation({
//     mutationFn: createRestaurant.mutationFn,
//     mutationKey: createRestaurant.mutationKey,

//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['restaurants'] });
//     },
//   });

  // Delete a restaurant
//   const deleteRestaurantMutation = useMutation({
//     mutationFn: deleteRestaurant.mutationFn,
//     mutationKey: deleteRestaurant.mutationKey,

//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['restaurants'] });
//     },
//   });

  // Update an existing restaurant
//   const updateRestaurantMutation = useMutation({
//     mutationFn: updateRestaurant.mutationFn,
//     mutationKey: updateRestaurant.mutationKey,

//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['restaurants'] });
//     },
//   });

  return {
    // fetchRestaurants: getRestaurantsQuery,/
    // fetchRestaurantById: getRestaurantByIdQuery,
    // createRestaurant: createRestaurantMutation,
    // deleteRestaurant: deleteRestaurantMutation,
    updateUser: updateUserMutation,
  };
};
