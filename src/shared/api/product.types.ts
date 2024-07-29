import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number().min(1, 'Id is required'),
  title: z.string().min(1, 'Title is required'),
  images: z.string().array().min(1, 'Images array is required'),
  thumbnail: z.string().min(1, 'Thumbnail is required'),
});

export type TProduct = z.infer<typeof ProductSchema>;

export const ProductDataResSchema = z.object({
  limit: z.number().min(1),
  products: ProductSchema.array(),
  skip: z.number(),
  total: z.number(),
});

export type ProductDataRes = z.infer<typeof ProductDataResSchema>;
