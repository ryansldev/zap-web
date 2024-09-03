'use server'

import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreatePostBodySchema } from "./schema";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function handler({ text, parentId }: InputType): Promise<ReturnType> {
  try {
    const token = cookies().get('access_token')?.value
    const { data } = await api.post('/posts', {
      text,
      parentId,
    }, {
      headers: {
        cookie: token && `access_token=${token}`
      }
    })
    
    revalidatePath('/timeline')
    return { data }
  } catch(e: unknown) {
    const error = e as AxiosError<{ message: string }>
    if(error.response?.data.message === "Author not found") {
      cookies().delete('access_token')
      cookies().delete('username')

      redirect('/login')
    }

    return {
      error: error.response?.data.message ?? error.message,
    }
  }
}

export const createPost = createSafeAction(CreatePostBodySchema, handler)
