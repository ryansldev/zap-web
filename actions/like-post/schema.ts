import { z } from 'zod'

export const LikePostParamsSchema = z.object({
  id: z.string().uuid(),
})
