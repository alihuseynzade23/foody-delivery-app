import { useModal } from '@org/foody-shared-components';
import { database, ID } from '@org/shared';
import toast from 'react-hot-toast';

export const deleteCategory = async (id?: string) => {
  try {
    const res = await database.deleteDocument(
      (import.meta as any).env.VITE_DATABASE_ID,
      (import.meta as any).env.VITE_CATEGORY_COLLECTION_ID,
      '',
    );
    toast.success('Category deleted successfully');
    return res;
  } catch (err: any) {
    toast.error(err.message);
  }
};
