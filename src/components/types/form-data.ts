import { z } from 'zod';
export const ContactSchema = z.object({
  name: z.string().min(2).trim(),
  email: z.string().email('Invalid email format').trim(),
  subject: z.string().min(2).trim(),
  message: z.string().min(2).trim(),
});

export type Data = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FormData = z.infer<typeof ContactSchema>;
