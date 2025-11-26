import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PhoneButton } from "@/components/PhoneButton";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedImage } from "@/components/AnimatedImage";
import { AnimatedCard } from "@/components/AnimatedCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  MapPin,
  Heart,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { getLocalBusinessSchema, getBreadcrumbSchema, getSpeakableSchema, getFAQSchema, getCityServiceAreaSchema } from "@/lib/schemaUtils";
import rainsvilleHeroBg from "@/assets/rainsville-hero-bg.jpg";
import clockImage from "@/assets/24-7-clock.jpg";
import legalGavel from "@/assets/legal-gavel.jpg";
import scalesJustice from "@/assets/scales-justice.jpg";
import paymentMethods from "@/assets/payment-methods.jpg";
import howFastLightning from "@/assets/how-fast-lightning.jpg";

const Rainsville = () => {
  const features = [
    {
      icon: Shield,
      title: "We Understand Rainsville's Connection to Fort Payne",
      description: "Rainsville residents often don't realize that even though there's a Probate Office satellite location in Rainsville, all bail bonds are posted at the DeKalb County Courthouse in Fort Payne. We'll explain exactly what happens, where to go, and how long it takes—so there's no confusion.",
    },
    {
      icon: MapPin,
      title: "Fast Response from Fort Payne",
      description: "We're located just minutes from Rainsville at 2700 Jordan Rd SW in Fort Payne, right next to the DeKalb County Detention Center. When you call, we can reach Rainsville or meet you at the jail within 20 minutes.",
    },
    {
      icon: Heart,
      title: "5-Star Service for DeKalb County Families",
      description: "Rainsville families trust us because we answer calls at 2 AM, explain costs clearly, and treat every client with respect. Our 5-star Google rating comes from real people in real crises who we helped.",
    },
    {
      icon: Clock,
      title: "No Hidden Fees—Just Honest Pricing",
      description: "We charge only the state-required 10% bail bond fee. No extras. No surprises. And if you need a payment plan, we'll work with you.",
    },
  ];

  const bailProcess = [
    {
      title: "Where Rainsville Arrestees Are Taken",
      description: "Anyone arrested in Rainsville—whether by Rainsville Police or DeKalb County Sheriff—is transported to the DeKalb County Detention Center at 2801 Jordan Rd SW, Fort Payne, AL 35967.",
    },
    {
      title: "Where Bonds Are Posted",
      description: "All bail bonds for Rainsville arrests are posted at the DeKalb County Courthouse at 300 Grand Ave SW, Fort Payne, AL 35967. This is about a 15-minute drive from Rainsville. We handle everything at the courthouse while you wait with your family.",
    },
    {
      title: "Typical Release Time",
      description: "Release usually takes 2–8 hours after we post bond, depending on jail workload. If someone is arrested late Friday night or on a weekend, there may be slight delays, but we work as quickly as possible.",
    },
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
    "Warrant Advice & Support",
  ];

  const neighborhoods = [
    "Caney Creek",
    "Eastside",
    "Grand Estates",
    "Kc Subdivision",
    "Kilgore",
    "Lakeview Terrace",
    "Shiloh",
    "Rainbow Subdivision",
    "The Pines",
    "Peaceful Acres",
    "Edgewood",
    "S. Estates",
  ];

  const nearbyCities = [
    { name: "Fort Payne Bail Bonds", slug: "fort-payne" },
    { name: "Centre Bail Bonds", slug: "centre" },
    { name: "Henagar Bail Bonds", slug: "henagar" },
  ];

  const testimonials = [
    "They were fast, courteous, and professional.",
    "I didn't have the full 10% on hand, and they worked out a plan with me.",
    "Everyone I spoke with was very helpful and courteous. Thank you very much for your kindness, it was easy and respectful.",
  ];

  const faqs = [
    {
      question: "How much does a bail bond cost in Rainsville?",
      answer: "Alabama law sets bail bond fees at 10% of the total bail amount. This is non-negotiable by law—every licensed bondsman charges the same rate. For example, if bail is set at $5,000, the bond fee is $500. We charge no additional administrative fees."
    },
    {
      question: "How long does release take from DeKalb County Jail for Rainsville arrests?",
      answer: "Typical release time is 2-8 hours after we post the bond, depending on how busy the jail is. We stay in communication with you throughout the process so you're never left wondering what's happening."
    },
    {
      question: "Do you serve Rainsville 24/7?",
      answer: "Yes. Richard, Connie, or Toni will answer your call at any time—even at 3 AM on Christmas morning. We're located just minutes from Rainsville in Fort Payne, and we can respond quickly to meet your needs."
    },
    {
      question: "What if I can't afford the full 10% upfront?",
      answer: "We offer flexible payment plans for families who need help. We accept credit cards and can work out arrangements that fit your budget. Call us and we'll discuss your options—there's no pressure, just honest guidance."
    },
    {
      question: "Where do Rainsville arrestees go?",
      answer: "Anyone arrested in Rainsville—whether by Rainsville Police or DeKalb County Sheriff—is transported to the DeKalb County Detention Center in Fort Payne at 2801 Jordan Rd SW. All bail bonds are posted at the DeKalb County Courthouse."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Rainsville Bail Bonds | 24/7 Service | DeKalb County, AL"
        description="Fast 24/7 bail bonds serving Rainsville, AL and DeKalb County. Licensed agents ready to help. Call 256-601-2041. Payment plans available."
        canonical="/rainsville"
        city="Rainsville"
        geo={{
          placename: "Rainsville, Alabama",
          region: "AL-US",
          position: "34.4871;-85.8447"
        }}
        schema={[
          getLocalBusinessSchema("Rainsville"),
          getCityServiceAreaSchema("Rainsville"),
          getSpeakableSchema(),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Rainsville", url: "/rainsville" }
          ])
        ]}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section - Full Screen with Background */}
      <section 
        className="relative min-h-[85vh] bg-black flex items-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${rainsvilleHeroBg})`,
          backgroundPosition: '75% center'
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
          }}
        />
        
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
              Rainsville<br />
              <span className="text-brand-red">Bail Bonds</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold">
              24/7 DeKalb County Service
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
              Fast, licensed bail bond agents serving Rainsville and DeKalb County. We're just minutes away and ready to help 24/7.
            </p>
          </div>
        </div>
        
        {/* Slim Contact Banner - Bottom of Hero */}
        <div className="contact-info absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t-4 border-brand-red z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/70 text-sm uppercase tracking-wide font-semibold">
                Available 24/7 - Call Any Team Member:
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                <a href="tel:2566012041" className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Richard: 256-601-2041
                </a>
                <a href="tel:2566302824" className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Connie: 256-630-2824
                </a>
                <a href="tel:2564400822" className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Toni: 256-440-0822
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers Section - AEO Optimized */}
      <Section className="quick-answers bg-gradient-to-b from-black to-gray-900 py-16 border-t-4 border-brand-red">
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
                    <img src={paymentMethods} alt="Flexible bail bond payment methods in Rainsville Alabama including credit cards and payment plans" className="w-full h-full object-cover" width="800" height="600" loading="lazy" fetchPriority="low" />
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

            {/* HOW FAST? Card - Rainsville Specific */}
            <AnimatedCard index={1}>
              <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img src={howFastLightning} alt="Fast 2-8 hour bail bond release times in Rainsville DeKalb County Alabama" className="w-full h-full object-cover" width="800" height="600" loading="lazy" fetchPriority="low" />
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

            {/* WHEN? Card */}
            <AnimatedCard index={2}>
              <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img src={clockImage} alt="24/7 emergency bail bond service" className="w-full h-full object-cover" width="800" height="600" loading="lazy" fetchPriority="low" />
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

      {/* Trust Section */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Rainsville's Trusted Bail Bond Service
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            <strong className="text-brand-red">Serving Rainsville & DeKalb County Since 2019</strong> — If your loved one has been arrested in Rainsville, you need help fast—and you need someone who understands how DeKalb County's bail system works. Connie's Bail Bonding has been serving Rainsville families since 2019 with the same compassion and professionalism we bring to every client.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mt-4">
            Even though Rainsville has some county offices, all arrests in Rainsville are processed through the DeKalb County Detention Center and Courthouse in Fort Payne. We know this system inside and out, and we're based right next to the jail—which means we can meet you there quickly and get your loved one released as fast as possible.
          </p>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section 
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${clockImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <AnimatedSection className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Why Choose Connie's for Rainsville Bail Bonds?
          </h2>
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

      {/* How Bail Works */}
      <Section 
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${legalGavel})` }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <AnimatedSection className="relative z-10" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            How Bail Works for Rainsville Residents
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {bailProcess.map((step, index) => (
              <div key={index} className="bg-white/95 p-6 rounded-lg border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How to Get to Our Office from Rainsville */}
      <Section className="bg-muted py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center uppercase">
            How to Get to Our Office from Rainsville
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-primary/20">
              <iframe
                src="https://maps.google.com/maps?q=2700+Jordan+Rd+SW,+Fort+Payne,+AL+35967&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Rainsville to Connie's Bail Bonding Office"
              />
            </div>
            
            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-black mb-4">🚗 15-Minute Drive</h3>
                  <div className="space-y-3 text-foreground/80">
                    <p><strong>Distance:</strong> 10 miles from Rainsville</p>
                    <p><strong>Route:</strong> Take Highway 35 South to Fort Payne</p>
                    <p><strong>We're located:</strong> Right next to DeKalb County Detention Center on Jordan Rd</p>
                  </div>
                  
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mt-4">
                    <p className="text-sm font-semibold">When you call, we can meet you at the jail or courthouse within minutes of arriving.</p>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Rainsville+AL&destination=2700+Jordan+Rd+SW,Fort+Payne,AL+35967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-black uppercase hover:bg-primary/90 transition-colors shadow-lg mt-6"
                  >
                    <MapPin className="w-6 h-6" />
                    Get Directions from Rainsville
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Local Law Enforcement & Court Information */}
      <Section className="bg-gradient-to-b from-muted to-white py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center uppercase">
            Local Information for <span className="text-brand-red">Rainsville Residents</span>
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
                <Shield className="w-5 h-5" /> Law Enforcement Serving Rainsville
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Rainsville Police Department</span>
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
                Arrests by any of these agencies in Rainsville or DeKalb County are processed at the 
                DeKalb County Detention Center in Fort Payne.
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
                    <Clock className="w-4 h-4 inline mr-2" />
                    From Rainsville to Fort Payne is approximately 15 minutes. We can meet you at either location.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Services for Rainsville Residents
          </h2>
          <div className="flex items-center gap-6 mb-8 justify-center">
            <AnimatedImage
              src={scalesJustice} 
              alt="Licensed Alabama bail bond agents" 
              className="w-32 h-32 rounded-lg object-cover shadow-lg"
              scale={true}
              delay={0.2}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Licensed & Trusted</h3>
              <p className="text-foreground/80">Alabama-licensed professionals serving DeKalb County</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/80">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg mb-4 text-foreground/80">
              Call anytime, day or night: <span className="font-bold text-primary">Richard {phoneNumbers.richard.number}</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Neighborhoods */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Rainsville Neighborhoods We Serve
          </h2>
          <p className="text-center text-foreground/80 mb-8">
            We serve every neighborhood and community in Rainsville and the 35986 ZIP code area, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((neighborhood, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {neighborhood}
              </span>
            ))}
          </div>
          <p className="text-center text-foreground/80 mt-8">
            Whether you're in downtown Rainsville or out in the county, we're here to help your family.
          </p>
        </div>
      </Section>

      {/* Nearby Cities */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            We Also Serve Nearby Areas
          </h2>
          <p className="text-center text-foreground/80 mb-8">
            Need bail bonds in a nearby city? We serve all of DeKalb and Cherokee Counties:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {nearbyCities.map((city, index) => (
              <Link
                key={index}
                to={`/${city.slug}`}
                className="block p-6 bg-card border border-border/50 rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {city.name}
                  </span>
                  <ChevronRight className="w-5 h-5 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            What to Expect When You Call Us
          </h2>
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Call us immediately</h3>
                <p className="text-foreground/80">
                  Richard, Connie, or Toni will answer, even at 3 AM.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">We'll gather information</h3>
                <p className="text-foreground/80">
                  We'll ask for the defendant's name and confirm they're at the DeKalb County Detention Center. We'll explain the 10% fee with a clear example.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">We'll handle the paperwork</h3>
                <p className="text-foreground/80">
                  We'll meet you at the jail or courthouse in Fort Payne and handle all the paperwork. You don't have to figure this out alone.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Your loved one is released</h3>
                <p className="text-foreground/80">
                  Typically within 2–8 hours. We'll stay in touch so you know what's happening.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              How Much Does a Bail Bond Cost?
            </h3>
            <p className="text-foreground/80 mb-6 text-center">
              Alabama law requires a 10% fee for all bail bonds. Examples:
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">$2,500 bail</div>
                <div className="text-foreground/80">= $250 fee</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">$5,000 bail</div>
                <div className="text-foreground/80">= $500 fee</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">$10,000 bail</div>
                <div className="text-foreground/80">= $1,000 fee</div>
              </div>
            </div>
            <p className="text-center text-foreground/80 mt-6">
              That's it. No hidden charges. And if you need help with payment, we offer flexible plans and accept credit cards.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          What Rainsville Families Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="primary" className="bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Need Rainsville Bail Bonds Now?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Call immediately for 24/7 service:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <PhoneButton
              name={phoneNumbers.richard.name}
              number={phoneNumbers.richard.number}
              variant="primary"
            />
            <PhoneButton
              name={phoneNumbers.connie.name}
              number={phoneNumbers.connie.number}
              variant="primary"
            />
            <PhoneButton
              name={phoneNumbers.toni.name}
              number={phoneNumbers.toni.number}
              variant="primary"
            />
          </div>
          <p className="text-lg font-semibold text-foreground/90">
            We'll meet you at the DeKalb County Detention Center in Fort Payne within 20 minutes.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Rainsville;
