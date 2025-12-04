import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackPhoneClick } from "@/lib/analytics";

interface PhoneButtonProps {
  name: string;
  number: string;
  className?: string;
}

export const PhoneButton = ({ name, number, className }: PhoneButtonProps) => {
  const formattedNumber = number.replace(/[^0-9]/g, "");
  
  return (
    <a
      href={`tel:${formattedNumber}`}
      onClick={() => trackPhoneClick(name, number)}
      className={cn(
        "group flex items-center justify-between p-6 bg-white border-2 border-black hover:border-brand-red hover:bg-black hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300",
        className
      )}
    >
      <div className="flex-1">
        <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
          {name}
        </div>
        <div className="text-2xl font-black text-black group-hover:text-white transition-colors">
          {number}
        </div>
      </div>
      <Phone className="w-8 h-8 text-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-300" />
    </a>
  );
};
