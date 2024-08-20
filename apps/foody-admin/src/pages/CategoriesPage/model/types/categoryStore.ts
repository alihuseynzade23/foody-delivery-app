type Category = {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: string[];
  $tenant: string;
  $updatedAt: string;
  name: string;
};

export type CategoryStoreType = {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  addCategory: (category: Category) => void;
};
