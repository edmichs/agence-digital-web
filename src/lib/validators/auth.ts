import { z } from 'zod'

export const authSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, {
      message: 'Email must contain at least 5 character(s)',
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must contain at least 6 character(s)',
    })
})

export type authPayload = z.infer<typeof authSchema>
