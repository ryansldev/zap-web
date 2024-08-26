import { z } from 'zod'

import { HasLikePostSchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof HasLikePostSchema>
export type ReturnType = ActionState<InputType, boolean>;
