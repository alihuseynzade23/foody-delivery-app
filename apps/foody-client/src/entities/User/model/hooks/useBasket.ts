import { useState, useEffect } from 'react';
import { Product } from '../../../../shared/lib/types/product';

const STORAGE_KEY = '@foody_user_products';

export const useBasket = () => {
  const [userProducts, setUserProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem(STORAGE_KEY);
    if (savedProducts) {
      setUserProducts(JSON.parse(savedProducts));
    }
  }, []);

  useEffect(() => {
    if (userProducts.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProducts));
    }
  }, [userProducts]);

  const addProduct = (product: Product) => {
    setUserProducts(prev => {
      const existingProduct = prev.find(item => item._id === product._id);
      if (existingProduct) {
        return prev.map(item =>
          item._id === product._id ? { ...item, quantity: (item.quantity || 0) + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseProduct = (product: Product) => {
    setUserProducts(prev =>
      prev
        .map(item =>
          item._id === product._id && item.quantity && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity && item.quantity > 0),
    );
  };

  const deleteProduct = (productId: string) => {
    setUserProducts(prev => {
      const updatedProducts = prev.filter(item => item._id !== productId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const getTotalPrice = () => {
    return userProducts.reduce(
      (total, product) => total + (product.price || 0) * (product.quantity || 1),
      0,
    );
  };

  return {
    userProducts,
    addProduct,
    setUserProducts,
    decreaseProduct,
    deleteProduct,
    getTotalPrice,
  };
};
