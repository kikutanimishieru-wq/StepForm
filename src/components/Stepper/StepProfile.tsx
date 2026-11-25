import { DateOfBirthInput, PhoneNumbeInput, ProfileImageInput } from "../Inputs/Index"

export const StepProfile = ({form}: StepComponentProps) => {
  return (
    <div className="space-y-5">
          <DateOfBirthInput  control={form.control}  name= "dateOfBirth"/>
          <PhoneNumbeInput control={form.control}  name= "phoneNumber"/>
      <ProfileImageInput  control={form.control}  name= "profileImage"/>    
    </div>
  )
}
