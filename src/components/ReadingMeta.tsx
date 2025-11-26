import { Clock, Calendar } from "lucide-react";

interface ReadingMetaProps {
  author: "Connie" | "Richard" | "Toni";
  licenseNumber: string;
  readingTime: number; // in minutes
  lastUpdated?: string; // e.g., "November 2025"
}

export const ReadingMeta = ({ 
  author, 
  licenseNumber, 
  readingTime, 
  lastUpdated = "November 2025" 
}: ReadingMetaProps) => {
  const licenseUrls = {
    "B0092": "https://apbb.alabama.gov/licensee/B0092",
    "S0334": "https://apbb.alabama.gov/licensee/S0334",
    "S0345": "https://apbb.alabama.gov/licensee/S0345"
  };

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
      <div className="flex items-center gap-2">
        <span>Written by <strong className="text-foreground">{author}</strong></span>
        <span>•</span>
        <a 
          href={licenseUrls[licenseNumber as keyof typeof licenseUrls]}
          className="text-brand-red hover:underline font-medium"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Verify ${author}'s APBB license`}
        >
          APBB License #{licenseNumber} ✓
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span>{readingTime} min read</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <span>Updated {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};
