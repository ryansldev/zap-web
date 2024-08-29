'use server'

import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { SignupBodySchema } from "./schema";

async function handler({
  name,
  lastname,
  email,
  username,
  password,
}: InputType): Promise<ReturnType> {
  try {
    const { data } = await api.post('/signup', {
      name,
      lastname,
      email,
      username,
      password,
    })

    return { data }
  } catch(e: unknown) {
    const error = e as AxiosError<{ message: string }>
    return {
      error: error.response?.data.message ?? error.message,
    }
  }
}

export const signup = createSafeAction(SignupBodySchema, handler)
