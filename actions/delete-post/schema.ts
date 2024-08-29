import { z } from 'zod'

export const DeletePostParamsSchema = z.object({
  id: z.string().uuid(),
})
