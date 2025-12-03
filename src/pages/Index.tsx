import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PhoneButton } from "@/components/PhoneButton";
import { HeroCTA } from "@/components/HeroCTA";
import { SlimContactBanner } from "@/components/SlimContactBanner";
import { QuickAnswers } from "@/components/QuickAnswers";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";
import { FAQList } from "@/components/FAQItem";
import { Card, CardContent } from "@/components/ui/card";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedImage } from "@/components/AnimatedImage";
import { AnimatedCard } from "@/components/AnimatedCard";
import { getOrganizationSchema, getBreadcrumbSchema, getServiceSchema, getHowToSchema, getSpeakableSchema, getWebSiteSchema } from "@/lib/schemaUtils";
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
  Phone,
  BookOpen,
  ArrowRight,
  Building,
  Scale
} from "lucide-react";
import { phoneNumbers, cities } from "@/lib/cityUtils";
import heroBg from "@/assets/hero-bg.jpg";
import freedomHandcuffs from "@/assets/freedom-handcuffs.jpg";
import supportHands from "@/assets/support-hands.jpg";
import legalGavel from "@/assets/legal-gavel.jpg";
import scalesJustice from "@/assets/scales-justice.jpg";
import alabamaMap from "@/assets/alabama-map.jpg";
import paymentMethods from "@/assets/payment-methods.jpg";

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

  const whyChooseChecklist = [
    "Available 24/7 - We Answer Every Call Personally",
    "Licensed Alabama Bail Bond Agents",
    "Family-Owned & Operated Since 2019",
    "Located Next to DeKalb County Detention Center",
    "Fast Release - Usually 2-8 Hours",
    "Transparent Pricing - Only State-Required 10%",
    "No Hidden Fees - Ever",
    "Payment Plans Available"
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
        reviews={testimonials}
        schema={[
          getOrganizationSchema(),
          getWebSiteSchema(),
          getServiceSchema(),
          getHowToSchema(),
          getSpeakableSchema(),
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
        <div 
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.4) 100%)' }}
        />
        
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl z-10 pb-32 md:pb-24">
          {/* Main Content - Centered */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-black mb-8 uppercase leading-none tracking-wide">
              <span 
                className="block text-4xl md:text-6xl lg:text-7xl text-white mb-1"
                style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
              >
                Fast.
              </span>
              <span 
                className="block text-4xl md:text-6xl lg:text-7xl text-white mb-1"
                style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
              >
                Fair.
              </span>
              <span 
                className="block text-5xl md:text-7xl lg:text-8xl text-brand-red"
                style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
              >
                24/7.
              </span>
            </h1>
            
            {/* Decorative divider */}
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6" />
            
            <p 
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-white font-semibold"
              style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)' }}
            >
              Northeast Alabama's Most Trusted Bail Bond Service
            </p>
            
            <p 
              className="text-base md:text-lg mb-12 text-white/90 max-w-2xl mx-auto font-medium tracking-wide"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
            >
              Family-Owned&nbsp;&nbsp;|&nbsp;&nbsp;Licensed Agents&nbsp;&nbsp;|&nbsp;&nbsp;Serving DeKalb &amp; Cherokee Counties Since 2019
            </p>
            
            {/* Primary CTA - Centered Buttons */}
            <HeroCTA className="mb-12 justify-center" />
          </div>
        </div>
        
        {/* Slim Contact Banner - Bottom of Hero */}
        <SlimContactBanner />
      </section>

      {/* Quick Answers Section */}
      <QuickAnswers city="Fort Payne" county="DeKalb County" releaseTime="2-8 Hours" />

      {/* Why Choose Connie's */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Stats Bar */}
          <div className="bg-brand-red/5 rounded-lg p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="group p-4 rounded-lg hover:bg-brand-red/10 transition-all duration-300 cursor-default">
                <div className="text-3xl font-black text-brand-red mb-1 group-hover:scale-110 transition-transform duration-300">6+</div>
                <div className="text-sm font-semibold text-foreground/70">Years Serving Alabama</div>
              </div>
              <div className="group p-4 rounded-lg hover:bg-brand-red/10 transition-all duration-300 cursor-default">
                <div className="text-3xl font-black text-brand-red mb-1 group-hover:scale-110 transition-transform duration-300">1,000+</div>
                <div className="text-sm font-semibold text-foreground/70">Families Helped</div>
              </div>
              <div className="group p-4 rounded-lg hover:bg-brand-red/10 transition-all duration-300 cursor-default">
                <div className="text-3xl font-black text-brand-red mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm font-semibold text-foreground/70">Available Every Day</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-tight">
            Why Choose Connie's?
          </h2>
          
          {/* Checklist Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseChecklist.map((item, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="group flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-transparent hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p className="text-foreground/90 font-medium">{item}</p>
                </div>
              </AnimatedCard>
            ))}
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
            width={1920}
            height={1280}
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


      {/* How Our Bail Process Works */}
      <Section className="bg-white">
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
            <div key={index} className="text-center group p-6 rounded-lg hover:bg-muted/50 transition-all duration-300">
              <div className="w-24 h-24 bg-brand-red text-white font-black text-4xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
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

      {/* Services We Offer Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-tight">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          <div className="space-y-6 w-full">
            {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg font-semibold">{service}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 w-full">
            {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </Section>

      {/* Learn About the Bail Process Section */}
      <Section className="bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Learn About the Bail Process
            </h2>
            <p className="text-lg text-foreground/80">
              Free resources to help you understand your options and make informed decisions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link 
              to="/bail-bonds-guide/how-bail-works-alabama"
              className="bg-white p-6 rounded-lg border border-border hover:border-brand-red transition-all hover:-translate-y-1 shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Scale className="h-6 w-6 text-brand-red" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                How Bail Works in Alabama
              </h3>
              <p className="text-sm text-foreground/70">
                Step-by-step guide from arrest to release
              </p>
            </Link>

            <Link 
              to="/bail-bonds-guide/bail-costs-alabama"
              className="bg-white p-6 rounded-lg border border-border hover:border-brand-red transition-all hover:-translate-y-1 shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <DollarSign className="h-6 w-6 text-brand-red" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                Bail Costs & Fees Explained
              </h3>
              <p className="text-sm text-foreground/70">
                Understand the 10% premium and state fees
              </p>
            </Link>

            <Link 
              to="/bail-bonds-guide/dekalb-county-jail-guide"
              className="bg-white p-6 rounded-lg border border-border hover:border-brand-red transition-all hover:-translate-y-1 shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Building className="h-6 w-6 text-brand-red" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                DeKalb County Jail Guide
              </h3>
              <p className="text-sm text-foreground/70">
                Posting bail at Fort Payne detention center
              </p>
            </Link>

            <Link 
              to="/bail-bonds-guide/cosigner-responsibilities"
              className="bg-white p-6 rounded-lg border border-border hover:border-brand-red transition-all hover:-translate-y-1 shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Users className="h-6 w-6 text-brand-red" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                Cosigner Responsibilities
              </h3>
              <p className="text-sm text-foreground/70">
                Know your obligations before you sign
              </p>
            </Link>
          </div>

          <div className="text-center">
            <Link 
              to="/bail-bonds-guide"
              className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red/80 font-bold transition-colors"
            >
              View All Guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Payment Methods & Credentials */}
      <Section className="bg-white py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
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

      {/* Areas We Serve Section */}
      <Section className="service-area bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-tight">
            Areas We Serve in Northeast Alabama
          </h2>
          
          <div className="mb-12">
            <AnimatedImage
              src={alabamaMap}
              alt="Alabama map showing service areas"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-8">
            {/* DeKalb County */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-brand-red" />
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-red">
                  DeKalb County
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/fort-payne"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-border rounded-full font-bold hover:border-brand-red hover:text-brand-red transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Fort Payne
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/rainsville"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-border rounded-full font-bold hover:border-brand-red hover:text-brand-red transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Rainsville
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/henagar"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-border rounded-full font-bold hover:border-brand-red hover:text-brand-red transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Henagar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/fyffe"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-border rounded-full font-bold hover:border-brand-red hover:text-brand-red transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Fyffe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/valley-head"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-border rounded-full font-bold hover:border-brand-red hover:text-brand-red transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Valley Head
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/pisgah"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-border rounded-full font-bold hover:border-brand-red hover:text-brand-red transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Pisgah
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Cherokee County */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-brand-red" />
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-red">
                  Cherokee County
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/centre"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-border rounded-full font-bold hover:border-brand-red hover:text-brand-red transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Centre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-tight">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
        </div>
      </Section>

      {/* Google Reviews Widget */}
      <Section className="bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase tracking-tight">
            Live Google Reviews
          </h2>
          <p className="text-center text-base text-foreground/60 mb-12">
            Real reviews from our clients - updated automatically
          </p>
          <GoogleReviewsWidget placeId="ChIJAa6xSXPZYYgR0zqawfYasDk" />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-base text-foreground/60 mb-8">
            Or call us 24/7: <a href="tel:2566012041" className="font-bold text-brand-red hover:text-red-600 transition-colors">256-601-2041</a>
          </p>
          <div className="max-w-4xl mx-auto">
            <FAQList faqs={faqs} />
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-muted" id="contact">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">
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

      <Footer />
    </div>
  );
};

export default Index;
