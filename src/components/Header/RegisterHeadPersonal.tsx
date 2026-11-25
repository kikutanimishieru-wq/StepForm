import React from "react";
type RegisterHeadrops = {
  step: FormStep;
};

import { copy } from "@/components/constant/constant";
export const RegisterHeadPersonal = ({ step }: RegisterHeadrops) => {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c5a6ff]">{copy[0].step}</p>

      <h2 className="text-3xl font-semibold tracking-tight">{copy[0].title}</h2>

      <p className="mt-2 text-xs leading-5 text-[#c3b7d4]">{copy[0].description}</p>
    </div>
  );
};
