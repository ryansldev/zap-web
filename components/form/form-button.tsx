import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FormButtonProps {
  size?: "lg" | "sm" | "icon" | "default",
  className?: string,
  children: React.ReactNode,
}

export function FormButton({
  size = "default",
  className,
  children,
}: FormButtonProps) {
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