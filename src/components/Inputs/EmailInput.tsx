import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"

export const EmailInput = ({ control }: RegisterationFieldProps) => {
  return (
   <Field>
      <FieldLabel htmlFor="">Email Address</FieldLabel>
      <Input id="username" placeholder="you@example.com" autoComplete="off" aria-invalid />
      <FieldError></FieldError>
    </Field>
  )
}
