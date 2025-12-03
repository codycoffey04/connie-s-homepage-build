import { Phone } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { trackPhoneClick } from "@/lib/analytics";

interface MidPageCTAProps {
  headline?: string;
  subtext?: string;
}

export const MidPageCTA = ({ 
  headline = "Need Help Right Now?", 
  subtext = "Our licensed agents are available 24/7—call anytime."
}: MidPageCTAProps) => {
  return (
    <div className="bg-black py-10 my-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <p className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight mb-2">
          {headline}
        </p>
        <p className="text-white/80 text-lg mb-6">
          {subtext}
        </p>
        <a 
          href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
          onClick={() => trackPhoneClick("Richard", phoneNumbers.richard.number)}
          className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-600 text-white font-black text-lg md:text-xl uppercase tracking-wide px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Phone className="w-6 h-6" />
          Call {phoneNumbers.richard.number}
        </a>
      </div>
    </div>
  );
};
