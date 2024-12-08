import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategory } from '../services/createCategory/create-category';
import { getCategoriesQuery } from '../services/getCategories/get-categories';
import { deleteCategory } from '../services/deleteCategory/delet-category';
import { updateCategory } from '../services/updateCategory/update-category';

export const useCategory = () => {
  const queryClient = useQueryClient();

  // Create a new category
  const createCategoryMutation = useMutation({
    mutationFn: createCategory.mutationFn,
    mutationKey: createCategory.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
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
  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory.mutationFn,
    mutationKey: updateCategory.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  return {
    // fetchCategories,
    // fetchCategoryById,
    fetchCategories: getCategoriesQuery,
    createCategory: createCategoryMutation,
    deleteCategory: deleteCategoryMutation,
    updateCategory: updateCategoryMutation,
    // getCategory: getOneCategoryQuery,
    // updateCategory: updateCategoryMutation,
  };
};
