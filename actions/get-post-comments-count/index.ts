'use server'

import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { GetPostCommentsParamsSchema } from "./schema";
import { revalidatePath } from "next/cache";

async function handler({ id }: InputType): Promise<ReturnType> {
  try {
    const { data } = await api.get(`/posts/${id}/comments/count`)
    
    revalidatePath('/timeline/')
    return { data }
  } catch(e: unknown) {
    const error = e as AxiosError<{ message: string }>
    return {
      error: error.response?.data.message ?? error.message,
    }
  }
}

export const getPostCommentsCount = createSafeAction(GetPostCommentsParamsSchema, handler)
