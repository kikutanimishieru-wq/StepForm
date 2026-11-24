import { STEPS } from "../constant/constant";
import { StepIndicator } from "./StepIndicator";
import { StepLine } from "./StepLine";

type StepperProps = {
  step: number;
};

export const Stepper = ({ step }: StepperProps) => {
  return (
      <div className="relative h-10 w-103">
          <div className="absolute flex h-0.5 w-full bg-purple-800">
            <StepLine filled= {step >1} />
            <StepLine filled={step >2 } /> 
          </div>
         
          

          <div className="flex justify-between ">
        {STEPS.map(({ icon, label }, index) => (
        <StepIndicator
          key={index}
          Icon={icon}
          label={label}
    
        />
      ))}
        </div>
      
    </div>
  );
};