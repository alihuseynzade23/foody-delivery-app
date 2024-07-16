import { z } from 'zod';

export const updatePersonalInformationSchema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    birthDate: z.string().date().or(z.date()),
    gender: z.union([z.literal('male'), z.literal('female')]),
    phone: z.string().min(0),
    email: z.string().email(),
  })
  .required();

export type UpdatePersonalInformationDto = z.infer<typeof updatePersonalInformationSchema>;
