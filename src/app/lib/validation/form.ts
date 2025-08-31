import z from 'zod';

export const formScheme = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),
  message: z
    .string()
    .max(1000, { message: 'Message must be less than 1000 characters' })
    .nonempty({ message: 'Message is required' }),
});

export type TFormScheme = z.infer<typeof formScheme>;
