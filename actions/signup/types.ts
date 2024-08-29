import { z } from 'zod'

import { SignupBodySchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof SignupBodySchema>
export type ReturnType = ActionState<InputType, { token: string }>;
