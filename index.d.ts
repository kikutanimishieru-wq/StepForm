import type { RegisterValues } from "@/schemas";
import type { Control, FieldPath } from "react-hook-form";
import { z } from "zod"
import {UseformReturn} from "react-hook-form"


declare global {
  type FormStep = 0 | 1 | 2;

  type RegisterValues= z.infer<typeof fieldValues>

  type UploadResult = { url: string };

  type ApiError = { error: string };

  type UploadedImageType = {
    file: File;
    result: UploadResult;
  };

  type RegistrationFieldProps<Name extends FieldPath<RegisterValues>> = { control: Control<RegisterValues>; name: Name };

  type StepComponentProps = { form: UseformReturn<RegisterValues> }
  
  type RegisterationFieldProps= {control: Control<RegisterValues>, name: T}
}
