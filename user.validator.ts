import z from 'zod';
import { response500Schema } from '.';

export const registerUserInputSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    phone: z.string(),
  }),
});

export const registerUserResponseSchema = z
  .object({
    response201: z.object({
      success: z.boolean(),
      data: z.object({
        id: z.number(),
        email: z.string(),
        firstname: z.string(),
        lastname: z.string(),
        phone: z.string(),
      }),
      message: z.string(),
    }),
  })
  .merge(response500Schema);

export const loginUserResponseSchema = z
  .object({
    response200: z.object({
      success: z.boolean(),
      data: z.object({
        accessToken: z.string(),
      }),
      message: z.string(),
    }),
  })
  .merge(response500Schema);

export const loginUserInputSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(5).max(25),
  }),
});

export type registerUserSchemaType = z.infer<typeof registerUserInputSchema>;
export type loginUserSchemaType = z.infer<typeof loginUserInputSchema>;
export type registerUserResponseSchemaType = z.infer<
  typeof registerUserResponseSchema
>;
export type loginUserResponseSchemaType = z.infer<
  typeof loginUserResponseSchema
>;
