import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FormSubmitProps {
  size?: "lg" | "sm" | "icon" | "default",
  className?: string,
  children: React.ReactNode,
}

export function FormSubmit({
  size,
  className,
  children,
}: FormSubmitProps) {
  return (
    <Button
      type="submit"
      size={size}
      className={cn(className)}
    >
      {children}
    </Button>
  )
}