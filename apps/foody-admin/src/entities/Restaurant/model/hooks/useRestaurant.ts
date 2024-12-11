import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRestaurant } from '../services/createRestaurant/create-restaurant';
import { getRestaurantsQuery } from '../services/getRestaurants/get-restaurants';
import { deleteRestaurant } from '../services/deleteRestaurant/delet-restaurant';
import { updateRestaurant } from '../services/updateRestaurant/update-restaurant';
import { getRestaurantByIdQuery } from '../services/getRestaurantById/get-restaurant-by-id';

export const useRestaurant = () => {
  const queryClient = useQueryClient();

  // Create a new restaurant
  const createRestaurantMutation = useMutation({
    mutationFn: createRestaurant.mutationFn,
    mutationKey: createRestaurant.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    },
  });

  // Delete a restaurant
  const deleteRestaurantMutation = useMutation({
    mutationFn: deleteRestaurant.mutationFn,
    mutationKey: deleteRestaurant.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    },
  });

  // Update an existing restaurant
  const updateRestaurantMutation = useMutation({
    mutationFn: updateRestaurant.mutationFn,
    mutationKey: updateRestaurant.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    },
  });

  return {
    fetchRestaurants: getRestaurantsQuery,
    fetchRestaurantById: getRestaurantByIdQuery,
    createRestaurant: createRestaurantMutation,
    deleteRestaurant: deleteRestaurantMutation,
    updateRestaurant: updateRestaurantMutation,
  };
};
