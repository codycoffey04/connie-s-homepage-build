import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "primary";
}

export const Section = ({ children, className, id, variant = "default" }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-20",
        variant === "muted" && "bg-light-gray",
        variant === "primary" && "bg-primary/5",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
