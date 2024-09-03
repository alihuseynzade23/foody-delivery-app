import { useQuery } from '@tanstack/react-query';
import { database } from '@org/shared';

const fetchCategories = async () => {
  try {
    const res = await database.listDocuments(
      (import.meta as any).env.VITE_DATABASE_ID,
      (import.meta as any).env.VITE_CATEGORY_COLLECTION_ID,
    );
    return res.documents;
  } catch (err) {
    throw new Error('Failed to fetch categories: ' + err.message);
  }
};

export const useCategories = () => {
  return useQuery(['categories'], fetchCategories, {
    // These are the typical options supported in the latest React Query versions
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Number of retries on failure
    onError: err => {
      console.error('Error fetching categories:', err);
    },
    // Use this for long-term caching if needed, but ensure your React Query version supports it
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });
};
