export type Restaurant = {
  _id?: string;
  name: string;
  image: File | null;
  cuisine: string;
  price: number;
  deliveryTime: number;
  address: string;
  categoryId: string;
};
