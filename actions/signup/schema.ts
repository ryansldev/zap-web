import { z } from "zod";

export const SignupBodySchema = z.object({
  name: z.string().min(2, {
    message: "O nome precisa ter pelo menos 2 caracteres"
  }),
  lastname: z.string().min(2, {
    message: "O sobrenome precisa ter pelo menos 2 caracteres"
  }),
  email: z.string().email({
    message: "O e-mail precisa ser válido"
  }),
  username: z.string().min(2, {
    message: "O nome de usuário precisa ter pelo menos 2 caracteres"
  }),
  password: z.string().min(8, {
    message: "A senha precisa ter pelo menos 8 caracteres"
  })
})