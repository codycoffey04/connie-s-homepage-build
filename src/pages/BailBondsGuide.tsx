import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { MidPageCTA } from "@/components/MidPageCTA";
import { SEO } from "@/components/SEO";
import { FAQList } from "@/components/FAQItem";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Scale, DollarSign, Building, Users, FileText, Clock, CreditCard, AlertTriangle, ShieldAlert } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { getOrganizationSchema, getBreadcrumbSchema, getFAQSchema, getWebPageSchema, getItemListSchema, getSpeakableSchema } from "@/lib/schemaUtils";
import bailGuideHeroBg from "@/assets/bail-guide-hero-bg.jpg";

const BailBondsGuide = () => {
  // Guide cards data
  const guideCards = [
    {
      icon: Scale,
      name: "How Bail Works in Alabama",
      title: "How Bail Works in Alabama",
      description: "Learn the step-by-step bail process from arrest to release.",
      url: "/bail-bonds-guide/how-bail-works-alabama"
    },
    {
      icon: DollarSign,
      name: "Bail Costs & Fees Explained",
      title: "Bail Costs & Fees Explained",
      description: "Understand the 10% premium, state fees, and what you'll actually pay.",
      url: "/bail-bonds-guide/bail-costs-alabama"
    },
    {
      icon: Building,
      name: "DeKalb County Jail Guide",
      title: "DeKalb County Jail Guide",
      description: "Everything you need to know about posting bail at DeKalb County Detention Center.",
      url: "/bail-bonds-guide/dekalb-county-jail-guide"
    },
    {
      icon: Building,
      name: "Cherokee County Jail Guide",
      title: "Cherokee County Jail Guide",
      description: "Bail process, hours, and what to expect at Cherokee County Detention Center.",
      url: "/bail-bonds-guide/cherokee-county-jail-guide"
    },
    {
      icon: Users,
      name: "Cosigner Responsibilities",
      title: "Cosigner Responsibilities",
      description: "What you're agreeing to when you cosign a bail bond and your legal obligations.",
      url: "/bail-bonds-guide/cosigner-responsibilities"
    },
    {
      icon: FileText,
      name: "Types of Bail Bonds",
      title: "Types of Bail Bonds",
      description: "Cash bonds, surety bonds, property bonds — which is right for your situation?",
      url: "/bail-bonds-guide/types-of-bail-bonds"
    },
    {
      icon: Clock,
      name: "What Happens After Arrest",
      title: "What Happens After Arrest",
      description: "The arrest-to-release timeline and what your loved one is experiencing.",
      url: "/bail-bonds-guide/what-happens-after-arrest"
    },
    {
      icon: AlertTriangle,
      name: "Bond Forfeiture Process",
      title: "Bond Forfeiture Process",
      description: "What happens if the defendant misses court and how to avoid forfeiture.",
      url: "/bail-bonds-guide/bond-forfeiture-process"
    },
    {
      icon: ShieldAlert,
      name: "How to Avoid Bail Bond Scams",
      title: "How to Avoid Bail Bond Scams",
      description: "Protect yourself from unlicensed bondsmen and common scams.",
      url: "/bail-bonds-guide/bail-bond-scams"
    }
  ];

  // FAQ data
  const guideFaqs = [
    {
      question: "How much does a bail bond cost in Alabama?",
      answer: "The standard bail bond premium is 10% of the total bail amount, which is non-refundable. Alabama law also requires state fees: a $35 administrative fee plus 3.5% of the bail amount (minimum $100 for misdemeanors, $150 for felonies)."
    },
    {
      question: "How long does it take to get released after bail is posted?",
      answer: "Alabama law requires jails to release defendants promptly once bail is properly posted. In practice, release typically takes 1-4 hours depending on the jail's processing time and how busy they are. DeKalb County Jail averages 2-8 hours."
    },
    {
      question: "What do I need to bail someone out?",
      answer: "You'll need the defendant's full legal name, date of birth, the jail they're held at, and payment for the premium (cash, credit card, or payment plan). A valid ID is required for the person posting bail."
    },
    {
      question: "Can I get my bail bond money back?",
      answer: "The 10% premium paid to a bail bondsman is non-refundable — it's the fee for their service. If you posted a cash bond directly with the court, that money is returned after the case concludes (minus any court fees), as long as the defendant appeared at all court dates."
    },
    {
      question: "What happens if the person I bailed out misses court?",
      answer: "The bond goes into forfeiture. The bondsman has approximately 90 days to locate the defendant before paying the full bail amount to the court. As the cosigner, you become liable for the full bail amount plus any recovery costs."
    }
  ];

  // Schema data
  const schemas = [
    getOrganizationSchema(),
    getWebPageSchema(
      "Alabama Bail Bonds Guide",
      "Comprehensive guide to bail bonds in DeKalb and Cherokee Counties, Alabama. Learn about bail costs, the bail process, cosigner responsibilities, and more.",
      [
        { name: "Home", url: "/" },
        { name: "Bail Bonds Guide", url: "/bail-bonds-guide" }
      ]
    ),
    getFAQSchema(guideFaqs),
    getSpeakableSchema(),
    getItemListSchema(guideCards),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Bail Bonds Guide", url: "/bail-bonds-guide" }
    ])
  ];

  return (
    <>
      <SEO 
        title="Alabama Bail Bonds Guide | DeKalb & Cherokee County"
        description="Free bail bonds guide for DeKalb & Cherokee Counties, AL. Learn how bail works, costs & fees, cosigner responsibilities, and what to expect. 24/7 help available."
        canonical="/bail-bonds-guide"
        schema={schemas}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bailGuideHeroBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl py-20 md:py-32">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
              Alabama Bail Bonds Guide
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-brand-red mb-6 uppercase tracking-wide">
              Your Complete Resource for Understanding Bail in DeKalb & Cherokee Counties
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl text-gray-300">
              Navigating the bail process can be overwhelming. We've created this comprehensive guide to help you understand how bail works in Alabama, what to expect, and how to make informed decisions when you or a loved one needs help.
            </p>
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
          </AnimatedSection>
        </div>
      </section>

      {/* Guide Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 text-center">
              Browse Our Guides
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guideCards.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <AnimatedCard key={index} index={index}>
                  <Link to={guide.url}>
                    <Card className="h-full border-2 border-border/30 hover:border-brand-red hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-brand-red" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">
                              {guide.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {guide.description}
                            </p>
                            <span className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all">
                              Read Guide
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <MidPageCTA 
        headline="Ready to Get Started?"
        subtext="Our guides are helpful, but sometimes you just need to talk to someone."
      />

      {/* Common Questions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 text-center">
              Common Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <FAQList faqs={guideFaqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 md:py-20 bg-black border-t-4 border-brand-red">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 text-white text-center">
              Need Help Right Now?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Our team is available 24/7 to answer your questions and start the bail process immediately.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedCard index={1}>
              <a
                href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                className="group flex items-center justify-between p-6 bg-white border-2 border-black hover:border-brand-red hover:bg-black transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                    {phoneNumbers.richard.name}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-black group-hover:text-white transition-colors">
                    {phoneNumbers.richard.number}
                  </div>
                </div>
                <Phone className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </a>
            </AnimatedCard>

            <AnimatedCard index={2}>
              <a
                href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`}
                className="group flex items-center justify-between p-6 bg-white border-2 border-black hover:border-brand-red hover:bg-black transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                    {phoneNumbers.connie.name}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-black group-hover:text-white transition-colors">
                    {phoneNumbers.connie.number}
                  </div>
                </div>
                <Phone className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </a>
            </AnimatedCard>

            <AnimatedCard index={3}>
              <a
                href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`}
                className="group flex items-center justify-between p-6 bg-white border-2 border-black hover:border-brand-red hover:bg-black transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                    {phoneNumbers.toni.name}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-black group-hover:text-white transition-colors">
                    {phoneNumbers.toni.number}
                  </div>
                </div>
                <Phone className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </a>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BailBondsGuide;
