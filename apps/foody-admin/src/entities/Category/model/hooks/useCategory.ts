import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@org/foody-shared-components';
import { createCategory } from '../services/createCategory/create-category';
import { getCategoriesQuery } from '../services/getCategories/get-categories';

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

  // const fetchCategoriesQuery = useQuery({
  //   queryFn: getCategories.queryFn,
  //   queryKey: getCategories.queryKey,
  // });

  // Fetch a single category by ID
  //   const fetchCategoryById = id => {
  //     return useQuery(
  //       ['category', id],
  //       async () => {
  //         const { data } = await apiClient.get(`/category/${id}`);
  //         return data;
  //       },
  //       {
  //         enabled: !!id, // Only fetch if ID is provided
  //       },
  //     );
  //   };

  // Update an existing category
  //   const updateCategoryMutation = useMutation(
  //     async ({ id, updatedData }) => {
  //       const { data } = await apiClient.patch(`/category/${id}`, updatedData);
  //       return data;
  //     },
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries(['categories']);
  //         queryClient.invalidateQueries(['category', id]); // Refresh specific category
  //       },
  //     },
  //   );

  // Delete a category
  //   const deleteCategoryMutation = useMutation(
  //     async id => {
  //       await apiClient.delete(`/category/${id}`);
  //     },
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries(['categories']); // Refresh category list
  //       },
  //     },
  //   );

  // Return all hooks and functions
  return {
    // fetchCategories,
    // fetchCategoryById,
    fetchCategories: getCategoriesQuery,
    createCategory: createCategoryMutation,
    // updateCategory: updateCategoryMutation,
    // deleteCategory: deleteCategoryMutation,
  };
};
