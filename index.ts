import { z } from 'zod';

export const response500Schema = z.object({
  response500: z.object({
    success: z.boolean(),
    message: z.string(),
  }),
});
