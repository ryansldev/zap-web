import { z } from 'zod'

import { DislikePostParamsSchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof DislikePostParamsSchema>
export type ReturnType = ActionState<InputType, void>;
