import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"

export const ProfileImageInput = ({ control, name }: RegisterationFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor="username">Profile photo</FieldLabel>
      <Input id="username"
        placeholder="Choose a photo"
        autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
  )
}
