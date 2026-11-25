import { RegisterHeadPersonal } from "./RegisterHeadPersonal";
import { RegisterHeadProfile } from "./RegisterHeadProfile";
import { RegisterHeadSecurity } from "./RegisterHeadSecurity";

type FormStep = 0 | 1 | 2;

type RegisterHeadProps = {
  step: FormStep | 3;
};

const headComponents = [RegisterHeadPersonal, RegisterHeadSecurity, RegisterHeadProfile] as const;

export const RegisterHeadStep = ({ step }: RegisterHeadProps) => {
  if (step === 3) return;

  const HeadComponent = headComponents[step];

  return <HeadComponent step={step} />;
};
