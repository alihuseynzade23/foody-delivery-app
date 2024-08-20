import { database, ID } from '@org/shared';

export const createCategory = async (name: string) => {
  try {
    const res = await database.createDocument(
      (import.meta as any).env.VITE_DATABASE_ID,
      (import.meta as any).env.VITE_CATEGORY_COLLECTION_ID,
      ID.unique(),
      { name },
    );
    return res;
  } catch (err) {
    console.error('Failed to fetch categories:', err);
    return [];
  }
};
