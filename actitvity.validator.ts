import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import {
  paginationResponseSchema,
  paginationSchema,
  response500Schema,
} from '.';

const activity_activity_type = z.enum(['outdoor', 'indoor']);

const positiveNumberRegex = /^[1-9]\d*$/;

export const fetchActivitiesInputSchema = z.object({
  query: z
    .object({
      filters: z
        .object({
          startDate: z.date().optional(),
          location: z.string().optional(),
          activityType: activity_activity_type.optional(),
          search: z.string().optional(),
        })
        .optional(),

      sort: z
        .object({
          id: z.enum(['asc', 'desc']),
        })
        .optional(),
    })
    .merge(paginationSchema),
});

export const fetchActivitiesResponseSchema = z
  .object({
    response200: z.object({
      success: z.boolean(),
      data: z
        .object({
          activities: z
            .object({
              id: z.number(),
              name: z.string(),
              description: z.string(),
              location: z.string(),
              startDate: z.string(),
              endDate: z.string(),
              activityType: z.string(),
              image: z.string(),
            })
            .array(),
        })
        .merge(paginationResponseSchema),
      message: z.string(),
    }),
  })
  .merge(response500Schema);

export type FetchActivitiesInputSchemaType = z.infer<
  typeof fetchActivitiesInputSchema
>;
