import { PageHeader } from "@/components/page-header";
import { SignupForm } from "./_components/form";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-[500px] mx-auto">
      <PageHeader
        title="Cadastro"
        description={<span>Uma comunidade focada em <strong>conectar pesssoas.</strong></span>}
      />

      <SignupForm />
    </div>
  )
}