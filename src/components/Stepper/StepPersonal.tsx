import { EmailInput, NameInput } from "../Inputs/Index"

export const StepPersonal = ({form}: StepComponentProps) => {
  return (
      <div className="space-y-5">
          <div className="flex gap-5" >
              <NameInput control={form.control} name= "firstName" />
              <NameInput control={form.control} name= "lastName"/>
          </div>
          <div>
              <EmailInput control={form.control} name= "email"/>
          </div>
          
    </div>
  )
}
