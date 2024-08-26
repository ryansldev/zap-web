import { z } from 'zod'

const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
})

export const HasLikePostSchema = z.array(UserSchema)
