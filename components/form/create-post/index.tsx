'use client'

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useAction } from "@/hooks/use-action";
import { createPost } from "@/actions/create-post";

import { FormSubmit } from "@/components/form/form-submit";
import { FormInput } from "@/components/form/form-input";

import { SendHorizonal } from "lucide-react";
import { useRef } from "react";

interface CreatePostFormProps {
  disabled?: boolean;
  parentId?: string;
  redirect?: boolean;
}

export function CreatePostForm({
  redirect,
  parentId,
  disabled = false,
}: CreatePostFormProps) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const { execute, fieldErrors } = useAction(createPost, {
    onSuccess: () => {
      toast.success('Publicação criada!')
      { redirect && router.push('/timeline') }
    },
    onError: (error) => {
      toast.error(error)
      if(error === "Authentication required") router.push('/login')
    }
  })

  async function onSubmit(formData: FormData) {
    const text = formData.get('text') as string
    await execute({ text, parentId })
    if(inputRef.current) {
      inputRef.current.value = ''
    }
  }
  
  return (
    <form action={onSubmit} className="w-full">
      <div className="flex items-center relative w-full max-w-[700px] mt-6 mx-auto">
        <FormInput
          ref={inputRef}
          name="text"
          type="text"
          placeholder={disabled ? "Faça login para criar uma nova publicação" : "O que está acontecendo?"}
          className="h-20 rounded-full sm:text-[18px] text-1xl sm:px-8 px-5 sm:pr-0 pr-[85px]"
          errors={fieldErrors}
          disabled={disabled}
          required
        />

        <FormSubmit
          size="icon"
          disabled={disabled}
          className="absolute sm:right-7 right-6 rounded-lg h-12 w-12 top-4"
        >
          <SendHorizonal className="h-6 w-6" />
        </FormSubmit>
      </div>
    </form>
  )
}