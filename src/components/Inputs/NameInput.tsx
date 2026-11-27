import React from 'react'
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"
import { useController } from 'react-hook-form';
export const NameInput = ({ control, name }: RegisterationFieldProps) => {
  const { field, fieldState } = useController({ control, name })
  
  const isFirstname = field.name === "firstName"


  return (
     <Field className={fieldState.invalid?"text-red-500 gap-2":"gap-2"}>
      <FieldLabel htmlFor="username" className='mt-5'> {isFirstname ? "Fist name" : "Last name "}</FieldLabel>
      

      <Input id={field.name} {...field}
        placeholder={isFirstname? "e.g. Alex" : "e.g. Morgan" } />

      <FieldError>{fieldState.error?.message }</FieldError>

    </Field>
  )
}
