import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <a href={`tel:${formattedNumber}`} className="w-full">
      <Button
        variant={variant === "primary" ? "default" : "outline"}
        size="lg"
        className={cn(
          "w-full h-auto min-h-[60px] text-lg font-bold flex flex-col sm:flex-row gap-2 items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98]",
          variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "secondary" && "border-2 border-primary text-primary hover:bg-primary/10",
          className
        )}
      >
        <Phone className="w-6 h-6" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-bold">{name}:</span>
          <span className="text-base sm:text-lg">{number}</span>
        </div>
      </Button>
    </a>
  );
};
