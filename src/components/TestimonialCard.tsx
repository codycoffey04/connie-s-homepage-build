import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
}

export const TestimonialCard = ({ quote }: TestimonialCardProps) => {
  return (
    <div className="group bg-white rounded-xl border border-border/30 shadow-md p-8 relative hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
      {/* Large quote mark */}
      <div className="absolute top-6 left-6 text-brand-red/20 group-hover:text-brand-red/30 transition-colors">
        <Quote className="w-12 h-12" />
      </div>
      
      {/* Stars */}
      <div className="flex gap-1 mb-4 pl-8 md:pl-16">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
        ))}
      </div>
      
      {/* Quote text */}
      <p className="text-base md:text-lg leading-relaxed text-foreground/80 italic pl-8 md:pl-16">
        "{quote}"
      </p>
      
      {/* Attribution */}
      <div className="mt-6 pt-4 border-t border-border/30 pl-8 md:pl-16">
        <p className="text-sm font-semibold text-brand-red">Verified Google Review</p>
      </div>
    </div>
  );
};
