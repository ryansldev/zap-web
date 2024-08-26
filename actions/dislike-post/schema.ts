import { z } from 'zod'

export const DislikePostParamsSchema = z.object({
  id: z.string().uuid(),
})
