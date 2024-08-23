import { z } from 'zod'

import { CreatePostBodySchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof CreatePostBodySchema>
export type ReturnType = ActionState<InputType, void>;
