import { PasswordInput } from "../Inputs/Index"

export const StepSecurity = ({form}: StepComponentProps) => {
  return (
    <div className="space-y-5">
      <PasswordInput control={form.control}  name= "password"/>
          <PasswordInput control={form.control}  name= "confirmPassword" />
    </div>
  )
}
