import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../services/createProduct/create-product';
import { getProductsQuery } from '../services/getProducts/get-products';
import { deleteProduct } from '../services/deleteProduct/delete-product';
import { updateProduct } from '../services/updateProduct/update-product';

export const useProduct = () => {
  const queryClient = useQueryClient();

  // Create a new product
  const createProductMutation = useMutation({
    mutationFn: createProduct.mutationFn,
    mutationKey: createProduct.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  // Delete a product
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct.mutationFn,
    mutationKey: deleteProduct.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  // Update an existing product
  const updateProductMutation = useMutation({
    mutationFn: updateProduct.mutationFn,
    mutationKey: updateProduct.mutationKey,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return {
    fetchProducts: getProductsQuery,
    createProduct: createProductMutation,
    deleteProduct: deleteProductMutation,
    updateProduct: updateProductMutation,
  };
};
