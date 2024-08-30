import { ID, storage } from '@org/shared';

export const uploadImage = async (file: File) => {
  await storage.createFile((import.meta as any).env.VITE_IMAGE_BUCKET_ID, ID.unique(), file);
};
