import { z } from 'zod';

export const createSchoolSchema = z
  .object({
    name: z.string().min(0),
    city: z.string().min(0),
  })
  .required();
