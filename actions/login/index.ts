'use server'

import { api } from "@/lib/api";
import { InputType, ReturnType } from "./types";
import { AxiosError } from "axios";
import { createSafeAction } from "@/lib/create-safe-action";
import { LoginBodySchema } from "./schema";
import { cookies } from "next/headers";

async function handler({
  username,
  password,
}: InputType): Promise<ReturnType> {
  try {
    const { data } = await api.post('/login', {
      username,
      password,
    })

    const token: string = data.token
    cookies().set('access_token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 60*60*24,
    })

    cookies().set('username', username)

    return { data }
  } catch(e: unknown) {
    const error = e as AxiosError<{ message: string }>
    return {
      error: error.response?.data.message ?? error.message,
    }
  }
}

export const login = createSafeAction(LoginBodySchema, handler)
