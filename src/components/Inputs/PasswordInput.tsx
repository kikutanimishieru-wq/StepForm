
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"
import { useController } from 'react-hook-form';


export const PasswordInput = ({ control, name }: RegisterationFieldProps) => {
  const { field, fieldState } = useController({ control, name })  
  const isPassword = name === "password"

  return (
    <Field  className={fieldState.invalid?"text-red-500 gap-2":"gap-2"}>
      <FieldLabel htmlFor="username">
        {isPassword ? "Password" : "Confirm password "}
      </FieldLabel>

      <Input
        id={field.name} {...field}
        placeholder={
          isPassword ? "🔒 Create a strong password" : "🔒 Enter your password again"} />
    
      <FieldError>{fieldState.error?.message }</FieldError>
    </Field>
  )
}



