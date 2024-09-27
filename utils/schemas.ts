import { z, ZodSchema } from 'zod';
export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }
  return result.data;
}
function validateImageFile() {
  const maxUploadSize = 1024 * 2048;
  const acceptedFileTypes = ['image/'];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'File size must be less than 1MB')
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image');
}
export const productSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' })
    .max(100, { message: 'name must be less than 100 characters long' }),
  company: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  price: z.coerce.number().int().min(0),
  description: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  featured: z.coerce.boolean(),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== '', {
    message: 'Product id cannot be empty',
  }),
  authorName: z.string().refine((value) => value !== '', {
    message: 'Author name cannot be empty',
  }),
  authorImageUrl: z.string().refine((value) => value !== '', {
    message: 'Author image URL cannot be empty',
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: 'Rating must be at least 1' })
    .max(5, { message: 'Rating must be at most 5' }),
  comment: z
    .string()
    .min(10, { message: 'Comment must be at least 10 characters long' })
    .max(1000, { message: 'Comment must be at most 1000 characters long' }),
});
