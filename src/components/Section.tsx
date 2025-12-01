import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "primary";
  style?: CSSProperties;
}

export const Section = ({ children, className, id, variant = "default", style }: SectionProps) => {
  return (
    <section
      id={id}
      style={style}
      className={cn(
        "w-full py-12 md:py-20",
        variant === "muted" && "bg-muted",
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
