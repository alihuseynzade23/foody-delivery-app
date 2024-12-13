import * as yup from 'yup';

export const createProductSchema = (validation: string) => {
  return yup.object({
    name: yup.string().required(validation),
  });
};
