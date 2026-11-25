import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"
export const DateOfBirthInput = ({ control, name }: RegisterationFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor="username">Date of birth</FieldLabel>
      <Input id="username"
        placeholder="Choose your birthday"
        autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
  );
};
