export type Product = {
  _id?: string;
  name: string;
  image: string | undefined;
  description: string;
  price: number;
  restaurantId: string;
  quantity?: number;
};
