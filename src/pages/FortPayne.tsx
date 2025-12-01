import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PhoneButton } from "@/components/PhoneButton";
import { HeroCTA } from "@/components/HeroCTA";
import { SlimContactBanner } from "@/components/SlimContactBanner";
import { QuickAnswers } from "@/components/QuickAnswers";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedImage } from "@/components/AnimatedImage";
import { AnimatedCard } from "@/components/AnimatedCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  MapPin, 
  Star, 
  Clock, 
  CheckCircle2, 
  Building2,
  Phone,
  ChevronRight,
  DollarSign
} from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { getLocalBusinessSchema, getBreadcrumbSchema, getSpeakableSchema, getFAQSchema, getCityServiceAreaSchema } from "@/lib/schemaUtils";
import fortPayneHeroBg from "@/assets/hero-bg.jpg";
import supportHands from "@/assets/support-hands.jpg";
import legalGavel from "@/assets/legal-gavel.jpg";
import paymentMethods from "@/assets/payment-methods.jpg";

const FortPayne = () => {
  const features = [
    {
      icon: MapPin,
      title: "We Know DeKalb County Inside and Out",
      description: "We work with the DeKalb County Detention Center and DeKalb County Courthouse every single day. We know the staff by name, understand the release procedures, and can navigate shift change times to get your loved one out as fast as possible."
    },
    {
      icon: Building2,
      title: "We're Right Here in Fort Payne",
      description: "Our office is located at 2700 Jordan Rd SW—literally next door to the jail. When you call us, we can be at the detention center or courthouse within minutes. No waiting for someone to drive in from Huntsville or Birmingham."
    },
    {
      icon: Star,
      title: "5-Star Rated by Fort Payne Families",
      description: "Don't just take our word for it. Fort Payne residents have rated us 5 stars on Google because we treat every client with dignity, answer calls immediately, and never charge hidden fees."
    },
    {
      icon: Shield,
      title: "Licensed Alabama Bail Bond Agents",
      description: "We're fully licensed by the Alabama Professional Bail Bonding Board. We follow all state regulations, maintain continuing education, and operate with complete transparency."
    }
  ];

  const howBailWorks = [
    {
      title: "Where Arrestees Are Taken",
      description: "If someone is arrested anywhere in Fort Payne—by Fort Payne Police or DeKalb County Sheriff—they're taken to the DeKalb County Detention Center at 2801 Jordan Rd SW, Fort Payne, AL 35967."
    },
    {
      title: "Where Bonds Are Posted",
      description: "Bail bonds are posted at the DeKalb County Courthouse at 300 Grand Ave SW, Fort Payne, AL 35967. We handle all paperwork and coordinate directly with jail staff to expedite the release."
    },
    {
      title: "How Long Does Release Take?",
      description: "Typical release time is 2–8 hours after we post the bond, depending on how busy the jail is. We stay in communication with you throughout the process, so you're never left wondering what's happening."
    },
    {
      title: "Weekend and Holiday Notes",
      description: "If someone is arrested on a weekend or holiday for a serious charge that requires a bond hearing, they may need to wait until the next court day. For standard charges with preset bond amounts, we can post bail 24/7 and get them out even on weekends."
    }
  ];

  const services = [
    "24/7 Bail Bond Service (all charge types)",
    "Felony Bonds",
    "Misdemeanor Bonds",
    "DUI Bonds",
    "Traffic Bonds",
    "Probation Violation Bonds",
    "Payment Plans Available",
    "Credit Cards Accepted",
    "Warrant Advice & Support"
  ];

  const neighborhoods = [
    "Pine Ridge",
    "Fisher Crossroads",
    "Pumpkin Center",
    "Adamsburg",
    "Dogtown",
    "Collbran",
    "Douglas",
    "Terrapin Hills"
  ];

  const nearbyCities = [
    { name: "Rainsville", slug: "rainsville" },
    { name: "Centre", slug: "centre" },
    { name: "Henagar", slug: "henagar" }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Call Us Immediately",
      description: "Call Richard, Connie, or Toni immediately at any hour."
    },
    {
      number: "2",
      title: "We Gather Information",
      description: "We'll ask for the defendant's name, location, and charge (if known). We'll explain all costs upfront—only the state-required 10% with no hidden fees."
    },
    {
      number: "3",
      title: "We Handle the Paperwork",
      description: "We'll meet you at the DeKalb County Detention Center or Courthouse. We handle all the paperwork while you wait."
    },
    {
      number: "4",
      title: "Your Loved One is Released",
      description: "Your loved one is released, typically within 2–8 hours. We'll keep you updated throughout."
    }
  ];

  const testimonials = [
    "Connie answered immediately at 2 AM and had my son out within 4 hours. Professional, kind, and transparent about all costs. Highly recommend.",
    "They made a horrible situation much easier to handle.",
    "I literally felt like family in the way they treated me."
  ];

  const faqs = [
    {
      question: "How much does a bail bond cost in Fort Payne?",
      answer: "Alabama law sets bail bond fees at 10% of the total bail amount. This is non-negotiable by law—every licensed bondsman charges the same rate. For example, if bail is set at $5,000, the bond fee is $500. We charge no additional administrative fees."
    },
    {
      question: "How long does release take from DeKalb County Jail?",
      answer: "Typical release time is 1-8 hours after we post the bond, depending on how busy the jail is. Because we're located right next to the detention center, we can post bonds immediately and monitor the release process closely."
    },
    {
      question: "Do you really answer calls 24/7 in Fort Payne?",
      answer: "Yes. Richard, Connie, or Toni will answer your call at any time—even at 3 AM on Christmas morning. We're a family business based right here in Fort Payne, and we answer our own phones. No call centers, no delays."
    },
    {
      question: "What if I can't afford the full 10% upfront?",
      answer: "We offer flexible payment plans for families who need help. We accept credit cards and can work out arrangements that fit your budget. Call us and we'll discuss your options—there's no pressure, just honest guidance."
    },
    {
      question: "Where is your Fort Payne office located?",
      answer: "Our office is at 2700 Jordan Rd SW, Fort Payne, AL 35967—right next door to the DeKalb County Detention Center. This allows us to meet clients quickly and post bonds immediately, which is why our release times are often faster than other bail bond companies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Fort Payne Bail Bonds | 24/7 Service | DeKalb County, AL"
        description="Fast 24/7 bail bonds in Fort Payne, AL. Licensed agents next to DeKalb County Detention Center. Call Richard 256-601-2041. No hidden fees."
        canonical="/fort-payne"
        city="Fort Payne"
        geo={{
          placename: "Fort Payne, Alabama",
          region: "AL-US",
          position: "34.444389;-85.719772"
        }}
        schema={[
          getLocalBusinessSchema("Fort Payne"),
          getCityServiceAreaSchema("Fort Payne"),
          getSpeakableSchema(),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Fort Payne", url: "/fort-payne" }
          ])
        ]}
        reviews={testimonials}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section - Full Screen with Background */}
      <section 
        className="relative min-h-[85vh] bg-black flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fortPayneHeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl z-10 pb-32 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
              Fort Payne<br />
              <span className="text-brand-red">Bail Bonds</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold">
              24/7 DeKalb County Service
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
              Fast, licensed bail bond agents serving Fort Payne and DeKalb County. Located right next to the detention center for fastest possible service.
            </p>
            
            <HeroCTA className="mb-12" />
          </div>
        </div>
        
        {/* Slim Contact Banner - Bottom of Hero */}
        <SlimContactBanner />
      </section>

      {/* Quick Answers Section - AEO Optimized */}
      <QuickAnswers city="Fort Payne" county="DeKalb County" releaseTime="1-8 Hours" />

      {/* Trust Section */}
      <Section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight">
            Fort Payne's Trusted Bail Bond Agency
          </h2>
          <div className="text-lg text-foreground/80 space-y-4 text-left md:text-center">
            <p>
              <strong className="text-brand-red">Serving Fort Payne & DeKalb County Since 2019</strong> — When someone you love is arrested in Fort Payne, every minute matters. Connie's Bail Bonding is located right here in Fort Payne—at 2700 Jordan Rd SW, right next to the DeKalb County Detention Center. We know the jail staff, the court procedures, and exactly how to get your loved one released quickly.
            </p>
            <p>
              Since 2019, we've built our reputation on trust and professionalism in the Fort Payne community. Our family team answers calls personally 24/7—no call centers, no delays. Just honest, compassionate help when you need it most.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section 
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${supportHands})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <AnimatedSection className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Why Choose Connie's for Fort Payne Bail Bonds?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How Bail Works in Fort Payne */}
      <Section 
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${legalGavel})` }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <AnimatedSection className="relative z-10" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              How Bail Works in Fort Payne
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {howBailWorks.map((item, index) => (
              <div key={index} className="bg-white/95 p-6 rounded-lg border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Office Location Map */}
      <Section className="bg-white py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center uppercase">
            Our Fort Payne Office Location
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-primary/20">
              <iframe
                src="https://maps.google.com/maps?q=2700+Jordan+Rd+SW,+Fort+Payne,+AL+35967&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Connie's Bail Bonding Office - 2700 Jordan Rd SW, Fort Payne, AL"
              />
            </div>
            
            {/* Details */}
            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-black mb-4">📍 We're Right Here in Fort Payne</h3>
                  <div className="space-y-3 text-foreground/80">
                    <p className="text-lg"><strong>Address:</strong><br />2700 Jordan Rd SW<br />Fort Payne, AL 35967</p>
                    <p className="text-lg"><strong>Next to:</strong> DeKalb County Detention Center (2-minute walk)</p>
                    <p className="text-lg"><strong>From Downtown Fort Payne:</strong> 5-minute drive via Gault Ave</p>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Fort+Payne+AL&destination=2700+Jordan+Rd+SW,Fort+Payne,AL+35967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-black uppercase hover:bg-primary/90 transition-colors shadow-lg mt-6"
                  >
                    <MapPin className="w-6 h-6" />
                    Get Directions from Your Location
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Local Law Enforcement & Court Information */}
      <Section className="bg-gradient-to-b from-white to-muted py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center uppercase">
            Local Information for <span className="text-brand-red">Fort Payne Residents</span>
          </h2>
          
          {/* Courthouse Hours */}
          <Card className="mb-6 border-2 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> DeKalb County Courthouse Hours
              </h3>
              <p className="mb-2"><strong>Address:</strong> 300 Grand Ave SW, Fort Payne, AL 35967</p>
              <p className="mb-2"><strong>Hours:</strong> Monday-Friday, 8:00 AM - 4:30 PM</p>
              <p className="mb-2"><strong>Closed:</strong> Weekends and Federal Holidays</p>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Note:</strong> Bonds can be posted 24/7 for standard charges with preset bail amounts. 
                For serious charges requiring a judge's bond hearing, you may need to wait until the courthouse reopens.
              </p>
            </CardContent>
          </Card>
          
          {/* Law Enforcement */}
          <Card className="mb-6 border-2 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Law Enforcement Serving Fort Payne
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Fort Payne Police Department</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>DeKalb County Sheriff's Office</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Alabama State Troopers (Highway Patrol)</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Arrests by any of these agencies in Fort Payne or DeKalb County are processed at the 
                DeKalb County Detention Center.
              </p>
            </CardContent>
          </Card>
          
          {/* Directions & Parking */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Meeting Location & Parking
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">DeKalb County Detention Center</p>
                  <p className="text-sm mb-2">2801 Jordan Rd SW, Fort Payne, AL 35967</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Parking:</strong> Visitor parking available in the main lot. 
                    We'll meet you at the entrance and guide you through the process.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="font-semibold mb-1">DeKalb County Courthouse</p>
                  <p className="text-sm mb-2">300 Grand Ave SW, Fort Payne, AL 35967</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Parking:</strong> Public parking available on Grand Avenue and in the courthouse lot.
                  </p>
                </div>
                <div className="pt-4 border-t bg-primary/5 -mx-6 -mb-6 p-6 rounded-b-lg">
                  <p className="text-sm font-semibold">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Our office at 2700 Jordan Rd SW is right next to the detention center—we can meet you within minutes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            Services for Fort Payne Residents
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-border/50 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center gap-6 mb-8">
                <img 
                  src={paymentMethods} 
                  alt="Payment methods accepted - credit cards and cash" 
                  className="w-32 h-32 rounded-lg object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Payment Options</h3>
                  <p className="text-foreground/80">Credit cards, cash, and payment plans available</p>
                </div>
              </div>
              
              <ul className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-lg font-semibold text-foreground mb-4">
                  No matter the charge, we're here to help.
                </p>
                <a href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}>
                  <Button size="lg" className="text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Richard: {phoneNumbers.richard.number}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Neighborhoods */}
      <Section className="bg-muted py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            Fort Payne Neighborhoods We Serve
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We serve every neighborhood and community in Fort Payne and the surrounding 35967 ZIP code area
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-4 text-center">
                {neighborhoods.map((neighborhood, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-muted/50 rounded-md text-foreground font-medium"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
              <p className="text-center text-foreground/70 mt-8">
                No matter where in Fort Payne you are, we're here to help your family 24/7.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Nearby Cities */}
      <Section className="bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            We Also Serve Nearby Areas
          </h2>
          <p className="text-lg text-foreground/80">
            Looking for bail bonds in a nearby city? We serve all of DeKalb and Cherokee Counties:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {nearbyCities.map((city) => (
            <Link key={city.slug} to={`/${city.slug}`}>
              <Card className="border-border/50 hover:shadow-lg transition-all hover:border-teal cursor-pointer h-full">
                <CardContent className="p-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">
                    {city.name} Bail Bonds
                  </span>
                  <ChevronRight className="w-5 h-5 text-teal" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Process Steps */}
      <Section className="bg-muted py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            What to Expect When You Call Us
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-border/50 text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-navy-deep text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-border/50 shadow-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <DollarSign className="w-6 h-6 text-teal" />
                How Much Does It Cost?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">
                Alabama law sets bail bond fees at 10% of the total bail amount. For example:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  $1,000 bail = $100 fee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  $5,000 bail = $500 fee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  $10,000 bail = $1,000 fee
                </li>
              </ul>
              <p className="text-foreground/80 font-semibold">
                We charge no additional administrative fees. And if you can't afford the full amount upfront, we offer flexible payment plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            What Fort Payne Families Are Saying
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-muted py-16">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-deep">
              Need Fort Payne Bail Bonds Now?
            </h2>
            <p className="text-xl text-foreground/70">
              Call immediately for 24/7 service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <PhoneButton 
              name={phoneNumbers.richard.name}
              number={phoneNumbers.richard.number}
              variant="secondary"
            />
            <PhoneButton 
              name={phoneNumbers.connie.name}
              number={phoneNumbers.connie.number}
              variant="secondary"
            />
            <PhoneButton 
              name={phoneNumbers.toni.name}
              number={phoneNumbers.toni.number}
              variant="secondary"
            />
          </div>

          <div className="pt-8 text-center">
            <p className="text-lg font-semibold text-foreground/80">
              We can be at the DeKalb County Detention Center within minutes.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default FortPayne;
