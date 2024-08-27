import { z } from 'zod'

import { GetPostCommentsParamsSchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof GetPostCommentsParamsSchema>
export type ReturnType = ActionState<InputType, { count: number }>;
