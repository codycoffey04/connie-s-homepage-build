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
          "w-full h-auto min-h-[80px] p-6 rounded-xl",
          "bg-white text-foreground",
          "border-2 border-transparent",
          "shadow-lg hover:shadow-2xl",
          "transition-all duration-300",
          "hover:border-teal hover:-translate-y-1",
          "flex flex-col sm:flex-row gap-3 items-center justify-center",
          "cursor-pointer",
          className
        )}
      >
        <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
          <Phone className="w-6 h-6 text-teal" />
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            {name}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-navy-deep">
            {number}
          </span>
        </div>
      </div>
    </a>
  );
};
