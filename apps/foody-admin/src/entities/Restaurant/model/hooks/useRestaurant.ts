import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createRestaurant } from '../services/createRestaurant/create-restaurant';
import { getRestaurantsQuery } from '../services/getRestaurants/get-restaurants';
import { deleteRestaurant } from '../services/deleteRestaurant/delet-restaurant';
import { updateRestaurant } from '../services/updateRestaurant/update-restaurant';
import { getRestaurantsByCategoryIdQuery } from '../services/getRestaurantsByCategoryId/get-restaurants-by-category';
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

  // const getRestaurantsByCategoryIdQuery = id => {
  //   return useQuery({
  //     queryKey: ['restaurant', id],
  //     queryFn: async () => {
  //       const response = await apiClient.get(`/restaurant/${id}`);
  //       return response.data;
  //     },
  //     enabled: !!id,
  //   });
  // };

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
    // fetchRestaurantsByCategoryId,
    // fetchCategoryById,
    createRestaurant: createRestaurantMutation,
    // deleteCategory: deleteCategoryMutation,
    deleteRestaurant: deleteRestaurantMutation,
    updateRestaurant: updateRestaurantMutation,
    // getCategory: getOneCategoryQuery,
    // updateCategory: updateCategoryMutation,
  };
};
