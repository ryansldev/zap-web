import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

interface FormSubmitProps {
  size?: "lg" | "sm" | "icon" | "default";
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export function FormSubmit({
  size,
  className,
  disabled,
  children,
}: FormSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      size={size}
      className={cn(className)}
    >
      {children}
    </Button>
  )
}