import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"
import { Calendar } from "../ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { useController } from 'react-hook-form';
import { Button } from "../ui/button";
import { log } from "console";
 



export const DateOfBirthInput = ({ control, name }: RegisterationFieldProps) => {

  const {
    field, fieldState
  } = useController({ control, name })  

  const handleSelect = (date: Date | undefined) => {
 
  }
  return (
  
    <Field className="">
      <FieldLabel htmlFor="username">Date of birth</FieldLabel>
      

      <Popover>
        <PopoverTrigger>
          <Button
            type="button"
          
            className="rounded-[9px] border-[#d8c1f459]  bg-[#110c1861] h-11 w-full justify-start"
          > 
            

          <CalendarIcon/>
               
          
          </Button>

        </PopoverTrigger>
              
      
        
        <PopoverContent className=" w-auto bg-[#21152e] p-0  text-[#f6f2ff]" align="start" >
                <Calendar
              mode="single"
              onSelect={handleSelect}
          />
        </PopoverContent>


      </Popover>
   
  
      <FieldError>Choose another username.</FieldError>
    </Field>
  );
};
