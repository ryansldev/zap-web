'use server'

import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { LikePostParamsSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function handler({ id }: InputType): Promise<ReturnType> {
  try {
    const { data } = await api.post(`/posts/${id}/like`, {}, {
      headers: {
        cookie: `access_token=${cookies().get('access_token')?.value}`
      },
    })
    
    revalidatePath('/timeline')
    return { data }
  } catch(e: unknown) {
    const error = e as AxiosError<{ message: string }>
    return {
      error: error.response?.data.message ?? error.message,
    }
  }
}

export const likePost = createSafeAction(LikePostParamsSchema, handler)
