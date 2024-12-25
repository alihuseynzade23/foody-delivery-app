import * as yup from 'yup';

export const updateProfileSchema = (validation: string) => {
  return yup.object({
    fullName: yup.string(),
    contactNumber: yup
      .string()
      .matches(/^\+?[0-9]{10,15}$/, `${validation}: Invalid contact number format`),
    username: yup.string(),
    address: yup.string(),
    email: yup
      .string()
      .email(`${validation}: Invalid email format`),
  });
};
