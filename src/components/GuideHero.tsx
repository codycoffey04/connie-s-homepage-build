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
      className="relative min-h-[70vh] flex items-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl py-20 md:py-32">
        <AnimatedSection>
          <Breadcrumb items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
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
