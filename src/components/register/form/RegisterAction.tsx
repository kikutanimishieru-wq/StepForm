import { Button } from "@/components/ui/button";
type RegisterActionProps = {
    step: FormStep | 3
    onBack: () => void;
}

export const RegisterAction = ({step, onBack}: RegisterActionProps ) => {
  return (
     <div className="flex gap-3">
      {step > 0 && (
        <Button
                  type="button"
                  onClick={onBack}
                  
          
          className="flex flex-1 mt-4 h-11 w-full bg-purple-400 text-slate-950 hover:bg-purple-300"
        >
          Back
        </Button>
      )}

      <Button
        type="submit"
        className="flex  flex-3  mt-4 h-11 w-full bg-purple-400 text-slate-950 hover:bg-purple-300"
      >
        Continue
      </Button>
    </div>
  );
};
