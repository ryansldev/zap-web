import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useAction } from "@/hooks/use-action";
import { createPost } from "@/actions/create-post";

import { FormSubmit } from "@/components/form/form-submit";
import { FormInput } from "@/components/form/form-input";

import { SendHorizonal } from "lucide-react";

export function CreatePostForm() {
  const router = useRouter()

  const { execute, fieldErrors } = useAction(createPost, {
    onSuccess: () => {},
    onError: (error) => {
      toast.error(error)
      if(error === 'Authentication required') { router.push('/login') }
    },
  })

  function onSubmit(formData: FormData) {
    const text = formData.get('text') as string
    execute({ text })
  }
  
  return (
    <form action={onSubmit}>
      <div className="flex items-center relative min-w-[700px] mt-6">
        <FormInput
          name="text"
          type="text"
          placeholder="O que está acontecendo?"
          className="h-20 rounded-full text-[18px] px-8"
          errors={fieldErrors}
          required
        />

        <FormSubmit
          size="icon"
          className="absolute right-7 rounded-lg h-12 w-12 top-4"
        >
          <SendHorizonal className="h-6 w-6" />
        </FormSubmit>
      </div>
    </form>
  )
}