'use client'

import { login } from "@/actions/login"
import { FormInput } from "@/components/form/form-input"
import { FormSubmit } from "@/components/form/form-submit"
import { useAction } from "@/hooks/use-action"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function LoginForm() {
  const router = useRouter()

  const { execute, fieldErrors } = useAction(login, {
    onSuccess: (data) => {
      console.log(data)
      toast.success('Login realizado com sucesso!')
      router.push('/')
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  async function onSubmit(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    
    await execute({
      username,
      password,
    })
  }

  return (
    <form action={onSubmit} className="w-full px-4">
      <div className="flex flex-col space-y-4">
        <FormInput
          name="username"
          type="text"
          placeholder="Digite aqui seu nome de usuário"
          label="Usuário"
          className="h-14 rounded-lg"
          errors={fieldErrors}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Digite aqui sua senha"
          label="Senha"
          className="h-14 rounded-lg"
          errors={fieldErrors}
          required
        />

        <FormSubmit>
          Login
        </FormSubmit>

        <Link href="/signup">
          <span className="text-secondary-foreground underline opacity-80">
            Não tem uma conta? registre-se
          </span>
        </Link>
      </div>
    </form>
  )
}