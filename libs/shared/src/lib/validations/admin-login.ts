import * as yup from 'yup';

export const AdminLoginSchema = () => {
  return yup.object({
    email: yup.string().email('Enter a valid email address').required('Email address is required'),
    password: yup
      .string()
      .min(5, 'Password must be at least 5 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .required('Password is required'),
  });
};
