import { z } from 'zod'

import { DeletePostParamsSchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof DeletePostParamsSchema>
export type ReturnType = ActionState<InputType, void>;
