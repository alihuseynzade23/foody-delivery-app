import { storage } from '@org/shared';

export const getCategoryImages = async () => {
  try {
    const res = await storage.listFiles((import.meta as any).env.VITE_IMAGE_BUCKET_ID);
    console.log(res, 'res');
    return res.files;
  } catch (err) {
    console.error('Failed to fetch category images:', err);
    return [];
  }
};
