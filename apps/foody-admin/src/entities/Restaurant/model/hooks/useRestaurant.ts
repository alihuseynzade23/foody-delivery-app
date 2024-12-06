import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRestaurant } from '../services/createRestaurant/create-restaurant';
import { getRestaurantsQuery } from '../services/getRestaurants/get-restaurants';
import { deleteRestaurant } from '../services/deleteRestaurant/delet-restaurant';
import { getRestaurantByIdQuery } from '../services/getRestaurantById/get-restaurant-by-id';
// import { updateCategory } from '../services/updateCategory/update-category';

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

  // Update an existing category
  // const updateCategoryMutation = useMutation({
  //   mutationFn: updateCategory.mutationFn,
  //   mutationKey: updateCategory.mutationKey,
  // });

  return {
    fetchRestaurants: getRestaurantsQuery,
    fetchRestaurantById: getRestaurantByIdQuery,
    createRestaurant: createRestaurantMutation,
    // deleteCategory: deleteCategoryMutation,
    deleteRestaurant: deleteRestaurantMutation,
    // updateCategory: updateCategoryMutation,
    // getCategory: getOneCategoryQuery,
    // updateCategory: updateCategoryMutation,
  };
};
