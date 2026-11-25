import { DateOfBirthInput, PhoneNumbeInput, ProfileImageInput } from "../Inputs/Index"

export const StepProfile = () => {
  return (
    <div className="space-y-5">
          <DateOfBirthInput />
          <PhoneNumbeInput />
      <ProfileImageInput/>    
    </div>
  )
}
