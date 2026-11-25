import { StepPersonal } from "./StepPersonal"
import { StepProfile } from "./StepProfile"
import { StepSuccess } from "./StepSuccess"
import { StepSecurity } from "./StepSecurity"


type RegisterProps = {
    step: FormStep | 3
} &StepComponentProps

const stepComponent= [StepPersonal,StepSecurity, StepProfile, StepSuccess ] as const ;


export const RegisterStep = ({ step, form}:RegisterProps) => {
    if (step === 3) {
        const Success = stepComponent[step]
        return (
          <Success/>
  )
      
  }
  
    const ActiveStep= stepComponent[step]
    return <div>
      <ActiveStep form={form} />
      
  </div>
  

}
