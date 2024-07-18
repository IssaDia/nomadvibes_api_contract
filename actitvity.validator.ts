import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const activity_activity_type = z.enum(['outdoor', 'indoor']); // Example enum, adjust as needed

const positiveNumberRegex = /^[1-9]\d*$/;

export const FetchActivitiesInputSchema = z.object({
  query: z.object({
    filters: z
      .object({
        startDate: z.date().optional(),
        location: z.string().optional(),
        activityType: activity_activity_type.optional(),
        search: z.string().optional(),
      })
      .optional(),
    pagination: z
      .object({
        pageSize: z
          .string()
          .regex(positiveNumberRegex, 'pageSize must be a positive number'),
        page: z
          .string()
          .regex(positiveNumberRegex, 'page must be a positive number'),
      })
      .optional(),
    sort: z
      .object({
        id: z.enum(['asc', 'desc']),
      })
      .optional(),
  }),
});

export type FetchActivitiesInputSchemaType = z.infer<
  typeof FetchActivitiesInputSchema
>;
