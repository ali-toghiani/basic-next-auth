import * as z from 'zod';

export const PhoneSchema = z.object({
  phone: z.string()
          .min(11, 'Phone number must be at least 11 characters long')
          .max(11, 'Phone number must be at most 11 characters long')
          .regex(/^09\d*$/, 'Phone number must be a valid number')
});