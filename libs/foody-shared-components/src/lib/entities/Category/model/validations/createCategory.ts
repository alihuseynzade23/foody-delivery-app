import * as yup from 'yup';

export const createCategorySchema = (validation: string) => {
  return yup.object({
    name: yup.string().required(validation),
  });
};
