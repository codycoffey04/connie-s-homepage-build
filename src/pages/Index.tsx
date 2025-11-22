import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { PhoneButton } from "@/components/PhoneButton";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQList } from "@/components/FAQItem";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Zap, 
  DollarSign, 
  Users, 
  CreditCard, 
  Shield, 
  MapPin,
  Star,
  Check
} from "lucide-react";
import { phoneNumbers, cities } from "@/lib/cityUtils";

const Index = () => {

  const trustSignals = [
    { icon: Star, text: "Five-Star Google Reviews" },
    { icon: Shield, text: "Licensed Alabama Agents" },
    { icon: DollarSign, text: "No Hidden Fees" },
    { icon: Clock, text: "Available 24/7" },
    { icon: CreditCard, text: "Payment Plans Accepted" },
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
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-navy-deep">
              24/7 Bail Bonds You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-foreground/70 font-light">
              Fast, Transparent, Compassionate Service
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <PhoneButton name={phoneNumbers.richard.name} number={phoneNumbers.richard.number} />
              <PhoneButton name={phoneNumbers.connie.name} number={phoneNumbers.connie.number} />
              <PhoneButton name={phoneNumbers.toni.name} number={phoneNumbers.toni.number} />
            </div>
            <p className="text-base text-foreground/60">
              Family-owned • Licensed Alabama Agents • Serving DeKalb & Cherokee Counties
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <Section className="bg-muted py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
          {trustSignals.map((signal, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-border/50 p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <signal.icon className="w-7 h-7 text-navy-deep stroke-[2]" />
              <p className="text-sm md:text-base font-semibold text-foreground leading-snug">
                {signal.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* When Your Loved One Needs Help */}
      <Section id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            When Your Loved One Needs Help, We're Here
          </h2>
          <div className="text-lg leading-relaxed space-y-4 text-foreground/90">
            <p>
              We understand this is a difficult time. Whether it's 2 AM on a Sunday or a holiday afternoon, Connie's Bail Bonding answers immediately. No call centers. No delays. Just Connie, Toni, and Richard—ready to help your family right now.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-2">
              <Star className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
              <span className="text-sm">Five-Star Google Reviews</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
              <span className="text-sm">Licensed Alabama Bail Bond Agents</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
              <span className="text-sm">No Hidden Fees—Only the State-Required 10%</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
              <span className="text-sm">Available 24 Hours a Day, 7 Days a Week</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
              <span className="text-sm">Payment Plans & Credit Cards Accepted</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Connie's */}
      <Section className="bg-white py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-navy-deep">
          Why Choose Connie's Bail Bonding?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {whyChooseFeatures.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <feature.icon className="w-8 h-8 text-teal mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-base leading-relaxed text-foreground/70">{feature.description}</p>
                {feature.title === "Transparent Pricing" && (
                  <div className="mt-6 p-5 bg-muted/30 rounded-lg border border-border/50">
                    <p className="font-semibold mb-2 text-navy-deep">Example:</p>
                    <div className="space-y-1 text-sm text-foreground/80">
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
      <Section className="bg-muted py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-navy-deep">
          How Our Bail Process Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-full bg-navy-deep text-white font-bold text-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-base leading-relaxed text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <PhoneButton name="Call Richard Now" number={phoneNumbers.richard.number} className="max-w-md mx-auto" />
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-navy-deep">
          Services We Offer Across DeKalb & Cherokee Counties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
              <span className="text-base text-foreground/90">{service}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-foreground/90">
            No matter the charge or situation, we're here to help. Call now:{" "}
            <a href="tel:2566012041" className="font-bold text-primary hover:text-primary/80 transition-colors">
              Richard 256-601-2041
            </a>
          </p>
        </div>
      </Section>

      {/* Areas We Serve */}
      <Section className="bg-muted py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy-deep">
          Areas We Serve in Northeast Alabama
        </h2>
        <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
          Providing 24/7 bail bond services throughout DeKalb and Cherokee Counties
        </p>
        
        {/* DeKalb County */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
            <MapPin className="w-6 h-6" />
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
                  <Card className="h-full border-border hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
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
          <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
            <MapPin className="w-6 h-6" />
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
                  <Card className="h-full border-border hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-navy-deep">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white rounded-lg hover:bg-teal-light transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            Read All Reviews on Google →
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-navy-deep">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <FAQList faqs={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-white py-16" id="contact">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-deep">
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-navy-deep">
          Key Locations We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {keyLocations.map((location, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">{location.name}</h3>
                <p className="text-sm text-foreground/70">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-navy-deep text-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-3">
                <p>
                  <a href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`} className="hover:text-teal transition-colors text-lg">
                    Richard: {phoneNumbers.richard.number}
                  </a>
                </p>
                <p>
                  <a href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`} className="hover:text-teal transition-colors text-lg">
                    Connie: {phoneNumbers.connie.number}
                  </a>
                </p>
                <p>
                  <a href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`} className="hover:text-teal transition-colors text-lg">
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
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="hover:text-teal transition-colors">Home</Link>
                <Link to="/about" className="hover:text-teal transition-colors">About</Link>
                <Link to="/contact" className="hover:text-teal transition-colors">Contact</Link>
                <Link to="/faq" className="hover:text-teal transition-colors">FAQ</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Legal</h3>
              <p className="text-sm mb-4">Licensed Alabama Bail Bond Agents</p>
              <p className="text-sm mb-4">Family-Owned Since 2019</p>
              <p className="text-sm mb-4">Available 24/7/365</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm space-y-3">
            <p className="text-white/70 italic">
              This website does not constitute legal advice. Bail bond approval is subject to court discretion.
            </p>
            <p className="font-semibold text-white">
              © 2025 Connie's Bail Bonding, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
