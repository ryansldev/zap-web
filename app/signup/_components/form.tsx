'use client'

import { signup } from "@/actions/signup"
import { FormInput } from "@/components/form/form-input"
import { FormSubmit } from "@/components/form/form-submit"
import { useAction } from "@/hooks/use-action"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function SignupForm() {
  const router = useRouter()

  const { execute, fieldErrors } = useAction(signup, {
    onSuccess: () => {
      toast.success('Cadastrado realizado com sucesso!')
      router.push('/login')
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  async function onSubmit(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const lastname = formData.get('lastname') as string
    
    await execute({
      name,
      lastname,
      email,
      username,
      password,
    })
  }

  return (
    <form action={onSubmit} className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-2">
          <FormInput
            name="name"
            type="text"
            placeholder="Digite aqui seu nome"
            label="Nome"
            className="h-14 rounded-lg"
            errors={fieldErrors}
            required
          />
          <FormInput
            name="lastname"
            type="text"
            placeholder="Digite aqui seu sobrenome"
            label="Sobrenome"
            className="h-14 rounded-lg"
            errors={fieldErrors}
            required
          />
        </div>
        <FormInput
          name="email"
          type="email"
          placeholder="Digite aqui seu e-mail"
          label="E-mail"
          className="h-14 rounded-lg"
          errors={fieldErrors}
          required
        />
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
          Cadastrar
        </FormSubmit>
      </div>
    </form>
  )
}