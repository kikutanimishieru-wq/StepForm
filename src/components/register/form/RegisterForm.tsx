"use client";


import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Stepper } from "@/components/Stepper/Stepper";
import React, { useState } from "react";
import { RegisterAction } from "./RegisterAction";

export const RegisterForm = () => {
  const [step, setStep] = useState<FormStep>(0)

  

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
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c5a6ff]">
            Step 1 of 3
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Let’s start with you.
          </h2>

          <p className="mt-2 text-xs leading-5 text-[#c3b7d4]">
            A few details to make this space your own.
          </p>

          <label htmlFor="firstName" className="mt-6 block text-sm font-medium">
            First name
          </label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="e.g. Alex"
            className="mt-3 text-white placeholder:text-[#c3b7d4]"
          />

          <label htmlFor="lastName" className="mt-6 block text-sm font-medium">
            Last name
          </label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="e.g. Morgan"
            className="mt-3 text-white placeholder:text-[#c3b7d4]"
          />

          <label htmlFor="email" className="mt-6 block text-sm font-medium">
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-describedby="email-hint"
            placeholder="e.g. alex@example.com"
            className="mt-3 text-white placeholder:text-[#c3b7d4]"
          />

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