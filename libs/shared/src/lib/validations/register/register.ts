import * as yup from 'yup';
import { yupTranslations } from '../../utils/yup-translations';

export const registerSchema = (lang: string) => {
  const t = (path: string) => {
    // @ts-ignore
    return path.split('.').reduce((acc, part) => acc && acc[part], yupTranslations[lang]);
  };

  return yup.object({
    email: yup.string().required(t('email.required')).email(t('email.valid')),
    password: yup
      .string()
      .required(t('password.required'))
      .min(5, t('password.min'))
      .matches(/[A-Z]/, t('password.uppercase'))
      .matches(/[a-z]/, t('password.lowercase'))
      .matches(/[0-9]/, t('password.number')),
    username: yup.string().required(t('userName.required')).min(5, t('userName.min')),
    fullName: yup.string().required(t('fullName.required')),
  });
};
