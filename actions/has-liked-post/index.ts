'use server'

import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { cookies } from "next/headers";
import { HasLikePostSchema } from "./schema";

async function handler(likedBy: InputType): Promise<ReturnType> {
  try {
    const username = cookies().get('username')?.value
    return { data: !!(likedBy.find((user) => user.username === username)) ?? false }
  } catch(e: any) {
    return {
      error: e.message,
    }
  }
}

export const hasLikedPost = createSafeAction(HasLikePostSchema, handler)
