import  { LucideIcon } from "lucide-react"

type StepIndicatorProps= {
    label: string
    Icon: LucideIcon
}

export const StepIndicator = ({Icon, label}: StepIndicatorProps) => {
  return (
    <div>
          <span>{label}</span>
          <Icon/>

          
    </div>
  )
}
