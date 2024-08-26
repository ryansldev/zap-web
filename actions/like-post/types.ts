import { z } from 'zod'

import { LikePostParamsSchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof LikePostParamsSchema>
export type ReturnType = ActionState<InputType, void>;
