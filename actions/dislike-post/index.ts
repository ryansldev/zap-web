'use server'

import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { DislikePostParamsSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function handler({ id }: InputType): Promise<ReturnType> {
  try {
    const token = cookies().get('access_token')?.value
    const { data } = await api.post(`/posts/${id}/dislike`, {}, {
      headers: {
        cookie: token && `access_token=${token}`
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

export const dislikePost = createSafeAction(DislikePostParamsSchema, handler)
