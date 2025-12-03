import { Phone } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { trackPhoneClick } from "@/lib/analytics";

interface SlimContactBannerProps {
  className?: string;
}

export const SlimContactBanner = ({ className = "" }: SlimContactBannerProps) => {
  return (
    <div className={`contact-info absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t-4 border-brand-red z-10 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm uppercase tracking-wide font-semibold">
            Available 24/7 - Call Any Team Member:
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {Object.entries(phoneNumbers).map(([key, { name, number }]) => (
              <a 
                key={key}
                href={`tel:${number.replace(/[^0-9]/g, "")}`}
                onClick={() => trackPhoneClick(name, number)}
                className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {name}: {number}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
