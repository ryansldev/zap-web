import { z } from 'zod'

export const CreatePostBodySchema = z.object({
  text: z.string(),
  parentId: z.string().uuid().optional(),
})
