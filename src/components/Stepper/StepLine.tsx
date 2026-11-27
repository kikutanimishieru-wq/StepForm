import { cn } from "@/lib/cn";

type StepLineProps = {
  filled: boolean;
};

export const StepLine = ({ filled }: StepLineProps) => {
  return (
    <div
      className={cn(
        "h-full flex-1 origin-left bg-[#c5a6ff] h-1 transition duration-300",
        filled ? "scale-x-100" : "scale-x-0"
      )}
    />
  );
};