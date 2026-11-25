"use client";

import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Stepper } from "@/components/Stepper/Stepper";
import React, { useState } from "react";
import { RegisterAction } from "./RegisterAction";

import { RegisterStep } from "@/components/Stepper/RegisterStep";
import { RegisterHeadStep } from "@/components/Header/RegisterHeadStep";
import { registartionSchema } from "@/lib/schema/register.schema";
import { defaults } from "@/components/constant/registration";
export const RegisterForm = () => {

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registartionSchema),
    mode: "onChange",
    defaultValues: defaults
})


  const [step, setStep] = useState<FormStep |3>(0)

  

  const handleBack = () => {
    const previousStep = step === 2 ? 1 : 0

    setStep(previousStep)
  }

  const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const nextStep= step=== 0? 1: 2
    
    
    setStep(nextStep)
    
  }

 
  return (
    <Card className="w-full   relative gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0 text-white">
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit}>
        
          
        <Stepper step={step+1}/>
        <div className="mt-10">
          <RegisterHeadStep step={step}/>
          <RegisterStep step={step} form= {form} />

  
          <p id="email-hint" className="mt-2 text-xs text-[#c3b7d4]">
            A little connection starts with the right address.
          </p>
            <RegisterAction step={step} onBack={handleBack } />
       
          </div>
          </form>
      </CardContent>
    </Card>
  );
};