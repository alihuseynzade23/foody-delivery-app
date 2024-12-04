import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRestaurant } from '../services/createRestaurant/create-restaurant';
import { getCategoriesQuery } from '../services/getCategories/get-categories';
import { deleteCategory } from '../services/deleteCategory/delet-category';
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

  // Delete a category
  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory.mutationFn,
    mutationKey: deleteCategory.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  // Update an existing category
  // const updateCategoryMutation = useMutation({
  //   mutationFn: updateCategory.mutationFn,
  //   mutationKey: updateCategory.mutationKey,
  // });

  return {
    // fetchCategories,
    // fetchCategoryById,
    fetchCategories: getCategoriesQuery,
    createRestaurant: createRestaurantMutation,
    deleteCategory: deleteCategoryMutation,
    // updateCategory: updateCategoryMutation,
    // getCategory: getOneCategoryQuery,
    // updateCategory: updateCategoryMutation,
  };
};
