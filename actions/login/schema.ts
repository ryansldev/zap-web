import { z } from "zod";

export const LoginBodySchema = z.object({
  username: z.string().min(2, {
    message: "O nome de usuário precisa ter pelo menos 2 caracteres"
  }),
  password: z.string().min(8, {
    message: "A senha precisa ter pelo menos 8 caracteres"
  })
})