import { STEPS } from "../constant/constant";
import { StepIndicator } from "./StepIndicator";
import { StepLine } from "./StepLine";

type StepperProps = {
  step: number;
};

export const Stepper = ({ step }: StepperProps) => {
  return (
    <div className="relative h-10 w-103 flex items-start">

      <div className="absolute top-3 -translate-y-1/2 left-3 right-3 flex h-0.5 bg-[#49375c]">
        <StepLine filled={step > 1} />
        <StepLine filled={step > 2} />
      </div>

      <div className="absolute inset-x-0 flex justify-between">
        {STEPS.map(({ icon, label }, index) => (
          <StepIndicator
            key={index}
            Icon={icon}
            label={label}
            number={index + 1}
            step={step}
          />
        ))}
      </div>

    </div>
  );
};