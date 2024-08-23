import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreatePostBodySchema } from "./schema";

async function handler({ text }: InputType): Promise<ReturnType> {
  try {
    const { data } = await api.post('/posts', {
      text,
    })
    
    return { data }
  } catch(e: unknown) {
    const error = e as AxiosError<{ message: string }>
    return {
      error: error.response?.data.message ?? error.message,
    }
  }
}

export const createPost = createSafeAction(CreatePostBodySchema, handler)
