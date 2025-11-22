import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
}

export const TestimonialCard = ({ quote }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-muted-foreground/30 mb-2" />
        <p className="text-base leading-relaxed text-foreground/90 italic">
          "{quote}"
        </p>
      </CardContent>
    </Card>
  );
};
