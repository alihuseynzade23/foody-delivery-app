import { z } from 'zod';
import { basicIdSchema } from '../BasicIdDto';

const fields = z
  .object({
    name: z.string().min(0),
    city: z.string().min(0),
  })
  .required();

export const schoolSchema = z.intersection(basicIdSchema, fields);

export type SchoolDto = z.infer<typeof schoolSchema>;
