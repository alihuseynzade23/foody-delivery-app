import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../services/createProduct/create-product';
import { getProductsQuery } from '../services/getProducts/get-products';
import { deleteProduct } from '../services/deleteProduct/delete-product';
import { updateCategory } from '../services/updateCategory/update-category';

export const useProduct = () => {
  const queryClient = useQueryClient();

  // Create a new category
  const createProductMutation = useMutation({
    mutationFn: createProduct.mutationFn,
    mutationKey: createProduct.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  // Delete a category
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct.mutationFn,
    mutationKey: deleteProduct.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  // Update an existing category
  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory.mutationFn,
    mutationKey: updateCategory.mutationKey,
  });

  return {
    // fetchCategories,
    // fetchCategoryById,
    fetchProducts: getProductsQuery,
    createProduct: createProductMutation,
    deleteProduct: deleteProductMutation,
    updateCategory: updateCategoryMutation,
    // getCategory: getOneCategoryQuery,
    // updateCategory: updateCategoryMutation,
  };
};
