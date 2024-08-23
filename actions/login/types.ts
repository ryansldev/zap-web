import { z } from 'zod'

import { LoginBodySchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof LoginBodySchema>
export type ReturnType = ActionState<InputType, { token: string }>;
