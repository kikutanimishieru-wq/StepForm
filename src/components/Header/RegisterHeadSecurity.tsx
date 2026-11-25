import React from 'react'
type RegisterHeadrops = {
    step: FormStep 
}

import { copy } from "@/components/constant/constant"
export const RegisterHeadSecurity = ({step}:RegisterHeadrops) => {
  return (
      <div>
             <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c5a6ff]">
        {copy[1].step}
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
         {copy[1].title}
          </h2>

          <p className="mt-2 text-xs leading-5 text-[#c3b7d4]">
          {copy[1].description}
          </p>
    </div>
  )
}
