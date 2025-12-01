import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";

interface GuideHeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  showCTA?: boolean;
}

export const GuideHero = ({ 
  backgroundImage, 
  title, 
  description, 
  breadcrumbs,
  showCTA = false 
}: GuideHeroProps) => {
  return (
    <section 
      className="relative flex items-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl py-20 md:py-32">
        <AnimatedSection>
          <Breadcrumb items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 [text-shadow:_0_2px_12px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mb-8 [text-shadow:_0_2px_4px_rgba(0,0,0,0.9),_0_4px_12px_rgba(0,0,0,0.7)]">
            {description}
          </p>
          
          {showCTA && (
            <Button 
              asChild
              size="lg"
              className="bg-brand-red hover:bg-red-600 text-white font-black uppercase tracking-wider text-lg px-8 py-6 h-auto"
            >
              <a href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};
