import { Phone } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";

export const StickyCallButton = () => {
  return (
    <a
      href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
      className="fixed bottom-6 right-6 z-50 md:hidden"
      aria-label="Call for immediate help"
    >
      <div className="bg-teal hover:bg-teal/90 text-white rounded-full shadow-2xl px-6 py-4 flex items-center gap-3 animate-pulse hover:animate-none transition-all hover:scale-105 active:scale-95">
        <Phone className="w-6 h-6" />
        <span className="font-bold text-lg">CALL NOW</span>
      </div>
    </a>
  );
};
