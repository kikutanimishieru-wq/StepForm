import { Button } from "@/components/ui/button";
type RegisterActionProps = {
    step: FormStep
    onBack: () => void;
}

export const RegisterAction = ({step, onBack}: RegisterActionProps ) => {
  return (
     <div>
      {step > 0 && (
        <Button
                  type="button"
                  onClick={onBack}
                  
          
          className="mt-4 h-11 w-full bg-purple-400 text-slate-950 hover:bg-purple-300"
        >
          Back
        </Button>
      )}

      <Button
        type="submit"
        className="mt-4 h-11 w-full bg-purple-400 text-slate-950 hover:bg-purple-300"
      >
        Continue
      </Button>
    </div>
  );
};
