import { z } from 'zod'

export const GetPostCommentsParamsSchema = z.object({
  id: z.string().uuid(),
})
