import { z } from 'zod';

/*
Referenced:
 https://laniewski.me/blog/2023-11-19-api-response-validation-with-zod/#:~:text=How%20to%20use%20Zod,-In%20a%20real&text=This%20helper%20function%20takes%20a,message%20and%20throws%20an%20error.
*/
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
