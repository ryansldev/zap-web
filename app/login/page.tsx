import { PageHeader } from "@/components/page-header";
import { LoginForm } from "./_components/form";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-[500px] mx-auto">
      <PageHeader
        title="Login"
        description={<span>Uma comunidade focada em <strong>conectar pesssoas.</strong></span>}
      />

      <LoginForm />
    </div>
  )
}