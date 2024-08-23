import { cn } from "@/lib/utils";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { useFormStatus } from "react-dom";
import { FormErrors } from "./form-errors";

type FormInputProps = InputProps & {
  errors?: Record<string, string[] | undefined>
  label?: string;
}

export function FormInput(props: FormInputProps) {
  const { pending } = useFormStatus();

  return (
    <div className="space-y-2 w-full">
      <div className="space-y-1 w-full">
        { props.label ? (
          <Label
            htmlFor={props.name}
            className="text-xs font-semibold"
          >
            {props.label}
          </Label>
        ) : null}
        <Input
          type={props.type}
          name={props.id || props.name}
          placeholder={props.placeholder}
          className={cn(props.className)}
          disabled={pending || props.disabled}
          required={props.required}
        />
      </div>
      <FormErrors
        id={(props.name || props.id)!}
        errors={props.errors}
      />
    </div>
  )
}