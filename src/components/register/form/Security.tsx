"use client";

import { Stepper } from "../stepper/Stepper";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants} from "@/components/ui/button"

export const Security = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <GlassSurface width={411} height={619.75}>
        <div className="flex h-full w-full flex-col px-8 py-10 text-white">
          <Stepper />

          <div className="mt-10">
            <p className="mb-2 text-xs font-semibold tracking-widest text-[#c5a6ff] uppercase">
              STEP 2 OF 3
            </p>

            <h2 className="text-3xl font-semibold tracking-tight">
              Keep it yours
            </h2>

            <p className="mt-2 text-xs leading-5 text-[#c3b7d4]">
              A strong password for everything that’s ahead.
            </p>
            <p className="tems-center text-sm font-medium mt-6 ">
            Password
            </p>
            <Input
              placeholder="Create a strong password"
              className="mt-3 text-white placeholder:text-[#c3b7d4]"
            />
            
            <p className="tems-center text-sm font-medium mt-6 ">
              Confirm password
            </p>
            <Input
              placeholder="Enter your password again"
              className="mt-3 text-white placeholder:text-[#c3b7d4]"
            />


            <div className="flex justify-center mt-4">
                <Button className= "w-94.75 h-11 bg-purple-400"/> 
               
            </div>

             <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-[#c3b7d4]">
              Progress is saved when you click Continue.
              </p>
            



          </div>
        </div>
      </GlassSurface>
    </div>
  );
};