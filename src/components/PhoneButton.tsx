import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  name: string;
  number: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export const PhoneButton = ({ name, number, variant = "primary", className }: PhoneButtonProps) => {
  const formattedNumber = number.replace(/[^0-9]/g, "");
  
  return (
    <a href={`tel:${formattedNumber}`} className="w-full group">
      <div
        className={cn(
          "w-full h-auto min-h-[88px] py-6 px-6 rounded-xl",
          "bg-teal text-white",
          "shadow-lg hover:shadow-2xl",
          "transition-all duration-300",
          "hover:bg-teal/90 hover:-translate-y-1 active:translate-y-0",
          "flex flex-col sm:flex-row gap-4 items-center justify-center",
          "cursor-pointer",
          className
        )}
      >
        <Phone className="w-8 h-8 text-white shrink-0" />
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider">
            {name}
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-white leading-none">
            {number}
          </span>
        </div>
      </div>
    </a>
  );
};
