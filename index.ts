import { z } from 'zod';

export const response500Schema = z.object({
  response500: z.object({
    success: z.boolean(),
    message: z.string(),
  }),
});

export const paginationSchema = z.object({
  pagination: z
    .object({
      pageSize: z
        .string()
        .regex(/^[1-9]\d*$/, 'pageSize must be a positive number'),
      page: z.string().regex(/^[1-9]\d*$/, 'page must be a positive number'),
    })
    .optional(),
});

export const paginationResponseSchema = z.object({
  pageSize: z.number(),
  page: z.number(),
  total: z.number(),
});
