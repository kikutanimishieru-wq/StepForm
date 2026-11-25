import { StepPersonal } from "./StepPersonal"
import { StepProfile } from "./StepProfile"
import { StepSuccess } from "./StepSuccess"
import { StepSecurity } from "./StepSecurity"


type RegisterProps = {
    step: FormStep | 3
}

const stepComponent= [StepPersonal,StepSecurity, StepProfile, StepSuccess, ]



export const RegisterStep = ({ step}:RegisterProps) => {
    if (step === 3) {
        const Success = stepComponent[step]
        return (
          <Success/>
  )
      
  }
  
    const ActiveStep= stepComponent[step]
    return <div>
      <ActiveStep/>
  </div>
  

}
