import { database } from '@org/shared';

export const getCategories = async () => {
  try {
    const res = await database.listDocuments(
      (import.meta as any).env.VITE_DATABASE_ID,
      (import.meta as any).env.VITE_CATEGORY_COLLECTION_ID,
    );
    return res.documents;
  } catch (err) {
    console.error('Failed to fetch categories:', err);
    return [];
  }
};
