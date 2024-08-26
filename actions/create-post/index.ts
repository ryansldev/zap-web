'use server'

import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreatePostBodySchema } from "./schema";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function handler({ text }: InputType): Promise<ReturnType> {
  try {
    const token = cookies().get('access_token')?.value
    const { data } = await api.post('/posts', {
      text,
    }, {
      headers: {
        cookie: token && `access_token=${token}`
      }
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

export const createPost = createSafeAction(CreatePostBodySchema, handler)
