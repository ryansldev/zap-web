import { cn } from "@/lib/utils";
import { Input, InputProps } from "../ui/input";

type FormInputProps = InputProps

export function FormInput({
  type,
  name,
  placeholder,
  className,
}: FormInputProps) {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      className={cn(className)}
    />
  )
}