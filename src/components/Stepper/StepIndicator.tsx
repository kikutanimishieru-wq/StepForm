import  { LucideIcon } from "lucide-react"
import {Check} from "lucide-react"
import { cn } from "@/lib/cn"


type StepIndicatorProps= {
    label: string
    Icon: LucideIcon
    number: number
    step: number
}

export const StepIndicator = ({Icon, label, number, step}: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-center first:items-start last:items-end">
          <span 
          className={cn
          ("size-6 rounded-full flex justify-center items-center pos", 
          step>number ? "bg-pink-500" :"bg-black")}>
            {step >= number  ?
            <Check/> : number}
          </span>
          
          <span className="flex gap-1.5 items-center " >
        
          <Icon className="size-4 flex items-center"/>
          <span className="text-xs flex items-center">{label} </span>
        

          </span>
          

          
    </div>
  )
}
