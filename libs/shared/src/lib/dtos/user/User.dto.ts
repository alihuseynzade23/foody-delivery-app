import { z } from 'zod';
import { basicIdSchema } from '../BasicIdDto';
import { schoolSchema } from '../school/School.dto';

export const initialUser = {
  id: '',
  firstName: '',
  lastName: '',
  sub: '',
  email: '',
  birthDate: new Date(0),
  phone: '',
  gender: '',
};

const fields = z
  .object({
    email: z.string().min(0),
    sub: z.string().min(0),
    firstName: z.string().min(0),
    lastName: z.string().min(0),
    birthDate: z.date(),
    phone: z.string().min(0),
    gender: z.string().min(0),
    graduationYear: z.number(),
    schoolType: z.string(),
    school: schoolSchema,
    isEnMentorNeeded: z.boolean(),
  })
  .required();

const userSchema = z.intersection(basicIdSchema, fields);

export type UserDto = z.infer<typeof userSchema>;
