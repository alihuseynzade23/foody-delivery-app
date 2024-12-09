import * as yup from 'yup';

export const createRestaurantSchema = (validation: string) => {
  return yup.object({
    name: yup.string().required(validation),
    cuisine: yup.string().required(validation).optional(),
    price: yup.number().required(validation).positive(validation).min(0, validation),
    deliveryTime: yup.number().required(validation).positive(validation).min(0, validation),
    address: yup.string().required(validation),
    categoryId: yup.string().required(validation),
    // .matches(/^[0-9a-fA-F]{24}$/, 'Invalid category ID format'),
  });
};
