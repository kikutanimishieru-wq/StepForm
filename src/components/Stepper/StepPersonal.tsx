import { EmailInput, NameInput } from "../Inputs/Index"

export const StepPersonal = () => {
  return (
      <div className="space-y-5">
          <div className="flex gap-5" >
              <NameInput />
              <NameInput />
          </div>
          <div>
              <EmailInput/>
          </div>
          
    </div>
  )
}
