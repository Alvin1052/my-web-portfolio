import z from 'zod';

export const loginScheme = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters' })
    .nonempty({
      message: 'Password is required',
    }),
});

export type TLoginScheme = z.infer<typeof loginScheme>;
