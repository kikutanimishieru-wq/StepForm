import React from 'react'
type RegisterHeadrops = {
    step: FormStep 
}

import { copy } from "@/components/constant/constant"
export const RegisterHeadProfile = ({step}:RegisterHeadrops) => {
  return (
      <div>
             <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c5a6ff]">
        {copy[2].step}
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
         {copy[2].title}
          </h2>

          <p className="mt-2 text-xs leading-5 text-[#c3b7d4]">
          {copy[2].description}
          </p>
    </div>
  )
}
