'use server'

import { ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { GetIsAuthenticatedSchema } from "./schema";
import { cookies } from "next/headers";

async function handler(): Promise<ReturnType> {
  try {
    const data = !!(cookies().get('access_token') && cookies().get('username'))
    return { data }
  } catch(e: unknown) {
    const error = e as AxiosError<{ message: string }>
    return {
      error: error.response?.data.message ?? error.message,
    }
  }
}

export const getIsAuthenticated = createSafeAction(GetIsAuthenticatedSchema, handler)
