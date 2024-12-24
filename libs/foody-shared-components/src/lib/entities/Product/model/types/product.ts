export type Product = {
  _id?: string;
  name: string;
  image: File | null;
  description: string;
  price: number;
  restaurantId: string;
};
