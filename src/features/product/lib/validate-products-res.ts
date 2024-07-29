import { ProductDataResSchema } from '@api';
import { validateApiSchema } from '@lib/zod';

export const validateProductsResponse = (dto: unknown) => {
  return validateApiSchema({
    dto,
    schema: ProductDataResSchema,
    schemaName: 'ProductDataResSchema',
  });
};
