import { z } from 'zod'

import { GetIsAuthenticatedSchema } from './schema'
import { ActionState } from '@/lib/create-safe-action'

export type InputType = z.infer<typeof GetIsAuthenticatedSchema>
export type ReturnType = ActionState<InputType, boolean>;
