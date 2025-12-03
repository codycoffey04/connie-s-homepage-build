import { Phone } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { trackPhoneClick } from "@/lib/analytics";

export const StickyCallButton = () => {
  return (
    <a
      href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
      onClick={() => trackPhoneClick("Richard", phoneNumbers.richard.number)}
      className="group fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full bg-brand-red hover:bg-red-600 shadow-2xl hover:shadow-red-500/50 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center md:hidden"
      aria-label="Call for immediate help"
    >
      <Phone className="h-7 w-7 text-white group-hover:animate-pulse" />
    </a>
  );
};
