import { z } from 'zod';

export const idType = z.string().uuid().or(z.literal(''));
