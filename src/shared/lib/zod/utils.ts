import { z } from 'zod';

type ValidateApiConfig<TSchema extends z.ZodTypeAny> = {
  dto: unknown;
  schema: TSchema;
  schemaName: string;
};

export const validateApiSchema = <TSchema extends z.ZodTypeAny>(
  config: ValidateApiConfig<TSchema>
): z.infer<TSchema> => {
  const { data, success, error } = config.schema.safeParse(config.dto);
  if (success) {
    return data;
  } else {
    console.error(`API Validation Error: ${config.schemaName}`, {
      dto: config.dto,
      error: error.message,
      issues: error.issues,
    });
    throw error;
  }
};
