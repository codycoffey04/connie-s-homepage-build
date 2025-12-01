import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import paymentMethods from "@/assets/payment-methods.jpg";
import howFastLightning from "@/assets/how-fast-lightning.jpg";
import clock247 from "@/assets/24-7-clock.jpg";

interface QuickAnswersProps {
  city?: string;           // e.g., "Fort Payne" for alt text
  county?: string;         // e.g., "DeKalb County" for alt text
  releaseTime?: string;    // e.g., "1-8 Hours", "2-8 Hours", "2-10 Hours"
  className?: string;
}

export const QuickAnswers = ({ 
  city = "Alabama", 
  county = "Alabama",
  releaseTime = "2-8 Hours",
  className = ""
}: QuickAnswersProps) => {
  return (
    <Section className={`quick-answers bg-gradient-to-b from-black to-gray-900 py-16 border-t-4 border-brand-red ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12 uppercase">
          Quick Answers — <span className="text-brand-red">What You Need to Know Right Now</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* HOW MUCH? Card */}
          <AnimatedCard index={0}>
            <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={paymentMethods} 
                    alt={`Flexible bail bond payment methods in ${city} Alabama including credit cards and payment plans`} 
                    className="w-full h-full object-cover" 
                    width="800" height="600" loading="lazy" fetchPriority="low" 
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black mb-4 text-black uppercase">How Much?</h3>
                  <div className="text-4xl font-black text-brand-red mb-4">10%</div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    By Alabama law, all bail bonds cost 10% of the bail amount. $5,000 bail = $500 fee. No hidden charges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

          {/* HOW FAST? Card */}
          <AnimatedCard index={1}>
            <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={howFastLightning} 
                    alt={`Fast ${releaseTime.toLowerCase()} bail bond release times in ${city} ${county} Alabama`} 
                    className="w-full h-full object-cover" 
                    width="800" height="600" loading="lazy" fetchPriority="low" 
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black mb-4 text-black uppercase">How Fast?</h3>
                  <div className="text-4xl font-black text-brand-red mb-4">{releaseTime}</div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Typical release time after we post bond. We stay in communication throughout the process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

          {/* WHEN? Card */}
          <AnimatedCard index={2}>
            <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={clock247} 
                    alt={`24/7 emergency bail bonds available around the clock in ${city} Alabama`} 
                    className="w-full h-full object-cover" 
                    width="800" height="600" loading="lazy" fetchPriority="low" 
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black mb-4 text-black uppercase">When?</h3>
                  <div className="text-4xl font-black text-brand-red mb-4">24/7/365</div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Connie, Toni, or Richard answer calls personally at any hour. No call centers. No waiting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

        </div>
      </div>
    </Section>
  );
};
