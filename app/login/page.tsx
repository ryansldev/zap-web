import { PageHeader } from "@/components/page-header";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <PageHeader
        title="Login"
        description={<span>Uma comunidade focada em <strong>conectar pesssoas.</strong></span>}
      />
    </div>
  )
}