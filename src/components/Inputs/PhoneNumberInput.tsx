import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"
import { useController } from 'react-hook-form';

export const PhoneNumbeInput = ({ control, name }: RegisterationFieldProps) => {
    const { field, fieldState } = useController({ control, name })  
  return (
   <Field>
      <FieldLabel htmlFor="username">Phone number</FieldLabel>
      <Input id="username"
        placeholder={
           "99112233"
        }
        
        autoComplete="off" aria-invalid />
      <FieldError>{fieldState.error?.message }</FieldError>
    </Field>
  )
}

