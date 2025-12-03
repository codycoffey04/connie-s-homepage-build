import { Phone, MessageSquare } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { PhoneButton } from "@/components/PhoneButton";

interface HeroCTAProps {
  variant?: "single" | "team";
  phoneNumber?: string;
  className?: string;
}

export const HeroCTA = ({ variant = "single", phoneNumber, className = "" }: HeroCTAProps) => {
  const number = phoneNumber || phoneNumbers.richard.number;
  const formattedNumber = number.replace(/[^0-9]/g, "");

  if (variant === "team") {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-4xl mx-auto ${className}`}>
        <PhoneButton name="Richard" number={phoneNumbers.richard.number} variant="primary" />
        <PhoneButton name="Connie" number={phoneNumbers.connie.number} variant="primary" />
        <PhoneButton name="Toni" number={phoneNumbers.toni.number} variant="primary" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center ${className}`}>
      <a 
        href={`tel:${formattedNumber}`}
        className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-brand-red text-white font-black text-base md:text-xl uppercase tracking-wide hover:bg-red-600 transition-all duration-200 shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95"
      >
        <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
        Call Now
      </a>
      <a 
        href={`sms:${formattedNumber}`}
        className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-white text-black font-bold text-base md:text-xl uppercase tracking-wide hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-105 active:scale-95"
      >
        <MessageSquare className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
        Text Us
      </a>
    </div>
  );
};
