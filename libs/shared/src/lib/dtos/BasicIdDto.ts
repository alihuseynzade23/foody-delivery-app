import { z } from 'zod';
import { idType } from './IdType';

export const basicIdSchema = z
  .object({
    id: idType,
  })
  .required();

export type BasicIdDto = z.infer<typeof basicIdSchema>;
