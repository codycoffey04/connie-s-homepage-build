import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { PhoneButton } from "@/components/PhoneButton";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQList } from "@/components/FAQItem";
import { Card, CardContent } from "@/components/ui/card";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedImage } from "@/components/AnimatedImage";
import { AnimatedCard } from "@/components/AnimatedCard";
import { getLocalBusinessSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schemaUtils";
import { 
  Clock, 
  Zap, 
  DollarSign, 
  Users, 
  CreditCard, 
  Shield, 
  MapPin,
  Star,
  Check,
  Phone
} from "lucide-react";
import { phoneNumbers, cities } from "@/lib/cityUtils";
import heroBg from "@/assets/hero-bg.jpg";
import freedomHandcuffs from "@/assets/freedom-handcuffs.jpg";
import supportHands from "@/assets/support-hands.jpg";
import clock247 from "@/assets/24-7-clock.jpg";
import legalGavel from "@/assets/legal-gavel.jpg";
import scalesJustice from "@/assets/scales-justice.jpg";
import alabamaMap from "@/assets/alabama-map.jpg";
import paymentMethods from "@/assets/payment-methods.jpg";
import howFastLightning from "@/assets/how-fast-lightning.jpg";

const Index = () => {

  const whyChooseList = [
    "Available 24/7 - We Answer Every Call Personally",
    "Licensed Alabama Bail Bond Agents",
    "Family-Owned & Operated Since 2019",
    "Located Next to DeKalb County Detention Center",
    "Fast Release - Usually 2-8 Hours",
    "Transparent Pricing - Only State-Required 10%",
    "No Hidden Fees - Ever",
    "Payment Plans Available",
    "Credit Cards Accepted",
    "Five-Star Google Reviews"
  ];

  const whyChooseFeatures = [
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Arrests don't follow business hours, and neither do we. Our family team answers calls personally at any hour—no answering services, no waiting."
    },
    {
      icon: Zap,
      title: "Fast Service",
      description: "We're located right next to the DeKalb County Detention Center. We know the staff, the procedures, and how to get your loved one released quickly."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Alabama law requires a 10% bail bond fee. That's all we charge—no administrative fees, no surprise costs. Ever."
    },
    {
      icon: Users,
      title: "Family Owned & Operated",
      description: "You'll talk directly to Connie, Toni, or Richard. We treat every client with dignity and professionalism because we're your neighbors, not a corporation."
    },
    {
      icon: CreditCard,
      title: "Payment Plans Available",
      description: "We understand that coming up with 10% can be challenging. We work with families to create flexible payment arrangements. Credit cards accepted."
    },
    {
      icon: Shield,
      title: "Respectful & Discreet",
      description: "We know this is stressful. We'll guide you through every step without judgment, keeping everything confidential."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Call Us Immediately",
      description: "The moment you know someone's been arrested, call Richard, Connie, or Toni. We answer 24/7—even at 2 AM."
    },
    {
      number: "2",
      title: "We Gather Information",
      description: "We'll ask for the defendant's name, which jail they're in, and the charge (if you know it). We'll explain all costs upfront."
    },
    {
      number: "3",
      title: "We Meet You at the Jail or Courthouse",
      description: "We come to you—whether that's the DeKalb County Detention Center, Cherokee County Jail, or the courthouse. We'll handle all the paperwork."
    },
    {
      number: "4",
      title: "Your Loved One Is Released",
      description: "Typical release time is 2–8 hours, depending on jail workload. We stay in touch throughout the process so you're never left wondering."
    }
  ];

  const services = [
    "24/7 Bail Bond Service for all charge types",
    "Felony Bonds",
    "Misdemeanor Bonds",
    "DUI Bonds",
    "Traffic Bonds",
    "Probation Violation Bonds",
    "Speedy Jail Release Assistance",
    "Payment Plans",
    "Warrant Advice & Support",
    "Guidance Through the Bail Process"
  ];

  const testimonials = [
    "Connie answered immediately at 2 AM and had my son out within 4 hours. Professional, kind, and transparent about all costs. Highly recommend.",
    "Connie's Bail Bonding went above and beyond to make sure I could make bail and get out of jail. After spending 5 days in there…it was a horrific and life altering experience. Connie's Bail Bonding is the only place I will ever use should I need a bonding agency… I can't thank them enough. 5 stars from me.",
    "Toni is awesome. She was able to explain the process easily and she handled everything in a professional way. I highly recommend this bail bonds. Thank you for being understanding and professional. ❤️",
    "I literally felt like family in the way they treated me."
  ];

  const faqs = [
    {
      question: "How much does a bail bond cost in Alabama?",
      answer: "Alabama law sets bail bond fees at 10% of the total bail amount. This is non-negotiable by law—every licensed bondsman charges the same rate. For example, if bail is set at $5,000, the bond fee is $500. We charge no additional administrative fees."
    },
    {
      question: "How long does it take to get released?",
      answer: "Typical release time is 2–8 hours after we post the bond, depending on how busy the jail is. Weekend and holiday releases may take slightly longer due to reduced staff. We stay in communication with you throughout the process."
    },
    {
      question: "Do you really answer calls 24/7?",
      answer: "Yes. Connie, Toni, or Richard will answer your call at any time—even at 3 AM on Christmas morning. We're a family business, and we answer our own phones. No call centers."
    },
    {
      question: "What if I can't afford the full 10% upfront?",
      answer: "We offer flexible payment plans for families who need help. We accept credit cards and can work out arrangements that fit your budget. Call us and we'll discuss your options—there's no pressure, just honest guidance."
    },
    {
      question: "Where are you located?",
      answer: "Our office is at 2700 Jordan Rd SW, Fort Payne, AL 35967—right next to the DeKalb County Detention Center. This allows us to meet clients quickly and post bonds immediately."
    },
    {
      question: "What counties do you serve?",
      answer: "We serve DeKalb County (Fort Payne, Rainsville, Henagar, Fyffe, Valley Head, Pisgah) and Cherokee County (Centre). If your loved one is arrested anywhere in these counties, we can help."
    }
  ];

  const keyLocations = [
    {
      name: "DeKalb County Detention Center",
      address: "2801 Jordan Rd SW, Fort Payne, AL 35967"
    },
    {
      name: "DeKalb County Courthouse",
      address: "300 Grand Ave SW, Fort Payne, AL 35967"
    },
    {
      name: "Cherokee County Detention Center",
      address: "110 Cedar Bluff Rd, Centre, AL 35960"
    },
    {
      name: "Cherokee County Courthouse",
      address: "100 Main St, Centre, AL 35960"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="24/7 Bail Bonds Fort Payne, AL | DeKalb & Cherokee County"
        description="Fast, confidential 24/7 bail bonds in Fort Payne, Rainsville, Henagar & DeKalb County AL. Licensed agents Richard, Connie & Toni. Call 256-601-2041 now."
        canonical="/"
        schema={[
          getLocalBusinessSchema(),
          getServiceSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" }
          ])
        ]}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section - Modern Banner Style */}
      <section 
        className="relative min-h-[85vh] bg-black flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Subtle dark overlay for image contrast */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl z-10">
          {/* Main Content - Left Aligned, Bold */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
              Fast.<br />
              Fair.<br />
              <span className="text-brand-red">24/7.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold">
              Alabama's Most Trusted Bail Bond Service
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
              Family-owned. Licensed agents. Serving DeKalb & Cherokee Counties since 2019.
            </p>
            
            {/* Primary CTA - Single Bold Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center justify-center px-8 py-5 bg-brand-red text-white font-black text-xl uppercase tracking-wide hover:bg-red-600 transition-all duration-200 shadow-2xl hover:shadow-red-500/50 hover:scale-105"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call Now
              </a>
              
              <a 
                href={`sms:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-black font-bold text-xl uppercase tracking-wide hover:bg-gray-100 transition-all duration-200"
              >
                Text Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Slim Contact Banner - Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t-4 border-brand-red z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/70 text-sm uppercase tracking-wide font-semibold">
                Available 24/7 - Call Any Team Member:
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                <a href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`} className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Richard: {phoneNumbers.richard.number}
                </a>
                <a href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`} className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Connie: {phoneNumbers.connie.number}
                </a>
                <a href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`} className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Toni: {phoneNumbers.toni.number}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers Section - AEO Optimized */}
      <Section className="bg-gradient-to-b from-black to-gray-900 py-16 border-t-4 border-brand-red">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12 uppercase">
            Quick Answers — <span className="text-brand-red">What You Need to Know Right Now</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* How Much? */}
            <AnimatedCard index={0}>
              <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img src={paymentMethods} alt="Payment methods and pricing transparency" className="w-full h-full object-cover" />
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

            {/* How Fast? */}
            <AnimatedCard index={1}>
              <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img src={howFastLightning} alt="Fast bail bond service" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-black mb-4 text-black uppercase">How Fast?</h3>
                    <div className="text-4xl font-black text-brand-red mb-4">2-8 Hours</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Typical release time after we post bond. We stay in communication throughout the process.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* When? */}
            <AnimatedCard index={2}>
              <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img src={clock247} alt="24/7 emergency bail bond service" className="w-full h-full object-cover" />
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

      {/* Why Choose Us - Bullet List */}
      <Section className="bg-white py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <AnimatedImage
              src={freedomHandcuffs} 
              alt="Unlocked handcuffs representing freedom and bail bonds" 
              className="w-full h-auto rounded-lg shadow-2xl"
              scale={true}
              delay={0.2}
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-black uppercase tracking-tight">
              Why Choose <span className="text-brand-red">Connie's</span>
            </h2>
            <div className="space-y-4">
              {whyChooseList.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-black group-hover:text-brand-red transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* When Your Loved One Needs Help */}
      <Section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={supportHands} 
            alt="Hands reaching out in support representing compassionate bail bond service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            When Your Loved One Needs Help, We're Here
          </h2>
          <div className="text-lg leading-relaxed space-y-4 text-white/90">
            <p>
              We understand this is a difficult time. Whether it's 2 AM on a Sunday or a holiday afternoon, Connie's Bail Bonding answers immediately. No call centers. No delays. Just Connie, Toni, and Richard—ready to help your family right now.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-2">
              <Star className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <span className="text-sm text-white">Five-Star Google Reviews</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <span className="text-sm text-white">Licensed Alabama Bail Bond Agents</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <span className="text-sm text-white">No Hidden Fees—Only the State-Required 10%</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <span className="text-sm text-white">Available 24 Hours a Day, 7 Days a Week</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <span className="text-sm text-white">Payment Plans & Credit Cards Accepted</span>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Why Choose Connie's */}
      <Section className="bg-black py-24">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-white uppercase tracking-tight">
          What Makes Us <span className="text-brand-red">Different</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {whyChooseFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border-2 border-transparent hover:border-brand-red transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-black group-hover:bg-brand-red transition-colors flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-black uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">{feature.description}</p>
                {feature.title === "Transparent Pricing" && (
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-bold mb-2 text-black">Example:</p>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>$5,000 bail = $500 fee</p>
                      <p>$10,000 bail = $1,000 fee</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* How Our Bail Process Works */}
      <Section className="bg-white py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
              How It <span className="text-brand-red">Works</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We've streamlined the bail bond process to get your loved one released as quickly as possible. Here's what happens when you call us.
            </p>
          </div>
          <div>
            <AnimatedImage
              src={legalGavel} 
              alt="Legal gavel representing justice system and bail bonds" 
              className="w-full h-auto rounded-lg shadow-2xl"
              scale={true}
              delay={0.3}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 bg-brand-red text-white font-black text-4xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-black mb-4 text-black uppercase">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Services We Offer Across DeKalb & Cherokee Counties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <span className="text-base text-foreground/90">{service}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-foreground/90">
            No matter the charge or situation, we're here to help. Call now:{" "}
            <a href="tel:2566012041" className="font-bold text-brand-red hover:text-red-600 transition-colors">
              Richard 256-601-2041
            </a>
          </p>
        </div>
      </Section>

      {/* Payment Methods & Credentials */}
      <Section className="bg-muted py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Payment Methods */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-border overflow-hidden">
              <div className="relative h-48 mb-6 -mx-8 -mt-8">
                <AnimatedImage src={paymentMethods} alt="Credit cards and cash payment methods" className="w-full h-full object-cover" delay={0.2} />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase text-black">Payment Options</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">All Major Credit Cards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">Cash Accepted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">Flexible Payment Plans</span>
                </div>
              </div>
              <p className="text-sm text-foreground/70 mt-6 italic">
                We work with families to create payment arrangements that fit your budget.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-black text-white p-8 rounded-lg shadow-lg border-4 border-brand-red overflow-hidden">
              <div className="relative h-48 mb-6 -mx-8 -mt-8">
                <AnimatedImage src={scalesJustice} alt="Scales of justice representing licensed bail bond services" className="w-full h-full object-cover" delay={0.3} />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase">Licensed & Trusted</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Licensed by Alabama</p>
                    <p className="text-sm text-white/80">Professional Bail Bonding Board</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">5-Star Google Reviews</p>
                    <p className="text-sm text-white/80">Real families, real results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Family-Owned Since 2019</p>
                    <p className="text-sm text-white/80">Serving DeKalb & Cherokee Counties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Next to DeKalb County Jail</p>
                    <p className="text-sm text-white/80">Fast response, local expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Areas We Serve */}
      <Section className="bg-muted py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Areas We Serve in Northeast Alabama
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            Providing 24/7 bail bond services throughout DeKalb and Cherokee Counties
          </p>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src={alabamaMap} 
              alt="Alabama map showing DeKalb and Cherokee counties service areas" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        {/* DeKalb County */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-red" />
            DeKalb County
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities
              .filter(city => city.county === 'DeKalb')
              .map((city) => (
                <Link 
                  key={city.slug} 
                  to={`/${city.slug}`}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-brand-red hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand-red transition-colors">
                            {city.name}
                          </h4>
                          <p className="text-sm text-foreground/70 mb-2">
                            {city.state}
                          </p>
                          <p className="text-sm text-foreground/60">
                            <span className="font-medium">ZIP:</span> {city.zipCodes.join(', ')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>

        {/* Cherokee County */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-red" />
            Cherokee County
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities
              .filter(city => city.county === 'Cherokee')
              .map((city) => (
                <Link 
                  key={city.slug} 
                  to={`/${city.slug}`}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-brand-red hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand-red transition-colors">
                            {city.name}
                          </h4>
                          <p className="text-sm text-foreground/70 mb-2">
                            {city.state}
                          </p>
                          <p className="text-sm text-foreground/60">
                            <span className="font-medium">ZIP:</span> {city.zipCodes.join(', ')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-black">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial} />
          ))}
        </div>
        <div className="text-center">
          <a 
            href="https://www.google.com/maps/search/Connie's+Bail+Bonding" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white hover:bg-red-600 transition-colors font-bold uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Read All Reviews on Google →
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-base text-foreground/60 mb-8">
          Or call us 24/7: <a href="tel:2566012041" className="font-bold text-brand-red hover:text-red-600 transition-colors">256-601-2041</a>
        </p>
        <div className="max-w-4xl mx-auto">
          <FAQList faqs={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-white py-16" id="contact">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Need Fort Payne Bail Bonds Now?
          </h2>
          <p className="text-xl mb-8 text-foreground/90">Call immediately for 24/7 service:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <PhoneButton name={phoneNumbers.richard.name} number={phoneNumbers.richard.number} />
            <PhoneButton name={phoneNumbers.connie.name} number={phoneNumbers.connie.number} />
            <PhoneButton name={phoneNumbers.toni.name} number={phoneNumbers.toni.number} />
          </div>
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-foreground">Connie's Bail Bonding, LLC</h3>
            <div className="flex items-start justify-center gap-2 text-foreground/80 mb-2">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>2700 Jordan Rd SW<br />Fort Payne, AL 35967</p>
            </div>
            <p className="text-base text-foreground/80 mt-4 italic">
              We'll meet you at the DeKalb County Detention Center or Cherokee County Courthouse within minutes. Let us help your family tonight.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Locations */}
      <Section className="bg-muted py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
          Key Locations We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {keyLocations.map((location, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">{location.name}</h3>
                <p className="text-sm text-foreground/70">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-brand-red text-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Contact Us</h3>
              <div className="space-y-3">
                <p>
                  <a href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`} className="hover:text-brand-red transition-colors text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Richard: {phoneNumbers.richard.number}
                  </a>
                </p>
                <p>
                  <a href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`} className="hover:text-brand-red transition-colors text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Connie: {phoneNumbers.connie.number}
                  </a>
                </p>
                <p>
                  <a href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`} className="hover:text-brand-red transition-colors text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Toni: {phoneNumbers.toni.number}
                  </a>
                </p>
                <p className="flex items-start gap-2 mt-4">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>2700 Jordan Rd SW<br />Fort Payne, AL 35967</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="hover:text-brand-red transition-colors font-semibold uppercase text-sm">Home</Link>
                <Link to="/about" className="hover:text-brand-red transition-colors font-semibold uppercase text-sm">About</Link>
                <Link to="/contact" className="hover:text-brand-red transition-colors font-semibold uppercase text-sm">Contact</Link>
                <Link to="/faq" className="hover:text-brand-red transition-colors font-semibold uppercase text-sm">FAQ</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Legal</h3>
              <p className="text-sm mb-4 font-semibold">Licensed Alabama Bail Bond Agents</p>
              <p className="text-sm mb-4 font-semibold">Family-Owned Since 2019</p>
              <p className="text-sm mb-4 font-semibold">Available 24/7/365</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm space-y-3">
            <p className="text-white/70 italic">
              This website does not constitute legal advice. Bail bond approval is subject to court discretion.
            </p>
            <p className="font-bold text-white">
              © 2025 Connie's Bail Bonding, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
