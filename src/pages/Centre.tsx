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
import centreHeroBg from "@/assets/centre-hero-bg.jpg";
import freedomHandcuffs from "@/assets/freedom-handcuffs.jpg";
import legalGavel from "@/assets/legal-gavel.jpg";
import scalesJustice from "@/assets/scales-justice.jpg";
import paymentMethods from "@/assets/payment-methods.jpg";
import howFastLightning from "@/assets/how-fast-lightning.jpg";
import clock247 from "@/assets/24-7-clock.jpg";

const Centre = () => {
  const features = [
    {
      icon: Shield,
      title: "We Know Cherokee County's System",
      description: "We work regularly with the Cherokee County Detention Center and Cherokee County Courthouse. We understand the local procedures, know the staff, and can navigate the system efficiently to get your loved one released as fast as possible.",
    },
    {
      icon: MapPin,
      title: "Fast Response to Centre",
      description: "Our Fort Payne office is about 25 minutes from Centre. When you call, we can be at the Cherokee County Jail or Courthouse quickly—ready to post bond and handle all the paperwork for you.",
    },
    {
      icon: Heart,
      title: "5-Star Rated by Cherokee County Families",
      description: "Centre residents and families across Cherokee County have given us 5-star reviews because we treat everyone with dignity, answer at any hour, and deliver on our promises. We're not a call center—you talk directly to Connie, Toni, or Richard.",
    },
    {
      icon: Clock,
      title: "Transparent Pricing, No Hidden Fees",
      description: "We charge only Alabama's required 10% bail bond fee. Nothing extra. And if you need a payment plan, we'll work with you to make it affordable.",
    },
  ];

  const bailProcess = [
    {
      title: "Where Centre Arrestees Are Taken",
      description: "If someone is arrested in Centre—by Centre Police, Cherokee County Sheriff, or state troopers—they're taken to the Cherokee County Detention Center at 110 Cedar Bluff Rd, Centre, AL 35960.",
    },
    {
      title: "Where Bonds Are Posted",
      description: "Bail bonds for Cherokee County arrests are posted at the Cherokee County Courthouse at 100 Main St, Centre, AL 35960. We meet you there, complete the paperwork, and coordinate with jail staff to expedite the release.",
    },
    {
      title: "Typical Release Time",
      description: "Most releases take 2–8 hours after we post the bond, depending on how busy the jail is. The Cherokee County Sheriff's Office notes that bonds may not be posted during shift change times (approximately 5–7 AM, 11 AM–1 PM, 5–7 PM), so we time everything to avoid delays.",
    },
    {
      title: "Weekend and Holiday Notes",
      description: "For standard charges with preset bail amounts, we can post bail 24/7—even on weekends and holidays. For serious charges requiring a bond hearing, the defendant may need to wait until the next court day.",
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
    "Brooks Estates",
    "Turkey Town",
    "Big Nose Creek Subdivision",
    "Spring Garden",
    "Brookstone",
    "Mirror Lake",
  ];

  const nearbyCities = [
    { name: "Fort Payne Bail Bonds", slug: "fort-payne" },
    { name: "Rainsville Bail Bonds", slug: "rainsville" },
    { name: "Pisgah Bail Bonds", slug: "pisgah" },
  ];

  const testimonials = [
    "Toni is awesome. She was able to explain the process easily and she handled everything in a professional way. I highly recommend this bail bonds. Thank you for being understanding and professional. ❤️",
    "Staff was willing to go the extra mile while also being friendly. Explained the process well.",
    "Great business. Professional and courteous. Would recommend to anyone needing help. Will use again if ever needed.",
  ];

  const faqs = [
    {
      question: "How much does a bail bond cost in Centre?",
      answer: "Alabama law sets bail bond fees at 10% of the total bail amount. This is non-negotiable by law—every licensed bondsman charges the same rate. For example, if bail is set at $5,000, the bond fee is $500. We charge no additional administrative fees."
    },
    {
      question: "How long does release take from Cherokee County Jail?",
      answer: "Typical release time is 2-10 hours after we post the bond, depending on how busy the jail is. Cherokee County Detention Center may not process bonds during shift change times (approximately 5-7 AM, 11 AM-1 PM, and 5-7 PM), so we time everything strategically to avoid delays."
    },
    {
      question: "Do you serve Centre and Cherokee County 24/7?",
      answer: "Yes. Richard, Connie, or Toni will answer your call at any time—even at 3 AM on Christmas morning. We're located about 25 minutes from Centre in Fort Payne, and we regularly serve Cherokee County."
    },
    {
      question: "What if I can't afford the full 10% upfront?",
      answer: "We offer flexible payment plans for families who need help. We accept credit cards and can work out arrangements that fit your budget. Call us and we'll discuss your options—there's no pressure, just honest guidance."
    },
    {
      question: "Where do Centre arrestees go?",
      answer: "Anyone arrested in Centre—whether by Centre Police, Cherokee County Sheriff, or state troopers—is transported to the Cherokee County Detention Center at 110 Cedar Bluff Rd in Centre. All bail bonds are posted at the Cherokee County Courthouse on Main Street."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Centre Bail Bonds | 24/7 Service | Cherokee County, AL"
        description="Fast 24/7 bail bonds serving Centre, AL and Cherokee County. Licensed agents who know the local system. Call 256-601-2041 now."
        canonical="/centre"
        city="Centre"
        schema={[
          getLocalBusinessSchema("Centre"),
          getCityServiceAreaSchema("Centre"),
          getSpeakableSchema(),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Centre", url: "/centre" }
          ])
        ]}
        reviews={testimonials}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section - Full Screen with Courthouse Background */}
      <section 
        className="relative min-h-[85vh] bg-black flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${centreHeroBg})` }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl z-10">
          {/* Main Content - Left Aligned */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
              Centre<br />
              <span className="text-brand-red">Bail Bonds</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold">
              24/7 Cherokee County Service
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
              Fast, licensed bail bond agents serving Centre and Cherokee County. We know the local system and can get your loved one released quickly.
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
                <a href="tel:2565237685" className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Connie: 256-523-7685
                </a>
                <a href="tel:2569979932" className="text-white hover:text-brand-red transition-colors font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Toni: 256-997-9932
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
                    <img src={paymentMethods} alt="Flexible bail bond payment methods in Centre Alabama including credit cards and payment plans" className="w-full h-full object-cover" loading="lazy" />
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

            {/* HOW FAST? Card - Centre Specific */}
            <AnimatedCard index={1}>
              <Card className="bg-white border-2 border-transparent hover:border-brand-red transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img src={howFastLightning} alt="Fast 2-10 hour bail bond release times in Centre Cherokee County Alabama" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-black mb-4 text-black uppercase">How Fast?</h3>
                    <div className="text-4xl font-black text-brand-red mb-4">2-10 Hours</div>
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
                    <img src={clock247} alt="24/7 emergency bail bonds available around the clock in Centre Alabama" className="w-full h-full object-cover" loading="lazy" />
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
            Centre's Trusted Bail Bond Service
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            <strong className="text-brand-red">Serving Centre & Cherokee County Since 2019</strong> — When someone you love is arrested in Centre or anywhere in Cherokee County, Connie's Bail Bonding is ready to help. We serve Centre 24/7 with the same fast, compassionate service we bring to all of Northeast Alabama.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mt-4">
            Centre is the county seat of Cherokee County, which means the Cherokee County Courthouse and Cherokee County Detention Center are both located right here. We know these facilities well, understand the release procedures, and can meet you at either location within minutes to get your loved one out quickly.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mt-4">
            Since 2019, families across Cherokee County have trusted us because we answer calls immediately, explain everything clearly, and never charge hidden fees.
          </p>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section 
        className="relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${freedomHandcuffs})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <AnimatedSection className="relative z-10" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Why Choose Connie's for Centre Bail Bonds?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow bg-card/90 backdrop-blur-sm">
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
        variant="muted"
        className="relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${legalGavel})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <AnimatedSection className="relative z-10" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            How Bail Works in Centre
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {bailProcess.map((step, index) => (
              <div key={index} className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How to Get to Our Office from Centre */}
      <Section className="bg-white py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center uppercase">
            Our Fort Payne Office (30-Minute Drive from Centre)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-primary/20">
              <iframe
                src="https://maps.google.com/maps?q=2700+Jordan+Rd+SW,+Fort+Payne,+AL+35967&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Centre to Connie's Bail Bonding Office"
              />
            </div>
            
            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-black mb-4">🚗 30-Minute Drive to Fort Payne</h3>
                  <div className="space-y-3 text-foreground/80">
                    <p><strong>Distance:</strong> ~30 miles from Centre</p>
                    <p><strong>Our Fort Payne Office:</strong><br />2700 Jordan Rd SW, Fort Payne, AL 35967</p>
                    <p><strong>Route:</strong> Take Highway 35 North to Fort Payne</p>
                  </div>
                  
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mt-4">
                    <p className="text-sm font-semibold">We can also meet you at Cherokee County facilities in Centre—no need to drive to Fort Payne!</p>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Centre+AL&destination=2700+Jordan+Rd+SW,Fort+Payne,AL+35967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-black uppercase hover:bg-primary/90 transition-colors shadow-lg mt-6"
                  >
                    <MapPin className="w-6 h-6" />
                    Get Directions from Centre
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
            Cherokee County Facilities (Right Here in Centre)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Cherokee County Detention Center Map */}
            <div className="space-y-4">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Cherokee County Detention Center</h3>
                  <p className="mb-2"><strong>Address:</strong> 110 Cedar Bluff Rd, Centre, AL 35960</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=110+Cedar+Bluff+Rd,Centre,AL+35960"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </CardContent>
              </Card>
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
                <iframe
                  src="https://maps.google.com/maps?q=110+Cedar+Bluff+Rd,+Centre,+AL+35960&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cherokee County Detention Center Location Map"
                />
              </div>
            </div>
            
            {/* Cherokee County Courthouse Map */}
            <div className="space-y-4">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Cherokee County Courthouse</h3>
                  <p className="mb-2"><strong>Address:</strong> 100 Main St, Centre, AL 35960</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=100+Main+St,Centre,AL+35960"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </CardContent>
              </Card>
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
                <iframe
                  src="https://maps.google.com/maps?q=100+Main+St,+Centre,+AL+35960&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cherokee County Courthouse Location Map"
                />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-black mb-8 text-center uppercase mt-12">
            Local Information for <span className="text-brand-red">Centre Residents</span>
          </h2>
          
          {/* Courthouse Hours */}
          <Card className="mb-6 border-2 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Cherokee County Courthouse Hours
              </h3>
              <p className="mb-2"><strong>Address:</strong> 100 Main St, Centre, AL 35960</p>
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
                <Shield className="w-5 h-5" /> Law Enforcement Serving Centre
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Centre Police Department</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Cherokee County Sheriff's Office</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Alabama State Troopers (Highway Patrol)</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Arrests by any of these agencies in Centre or Cherokee County are processed at the 
                Cherokee County Detention Center.
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
                  <p className="font-semibold mb-1">Cherokee County Detention Center</p>
                  <p className="text-sm mb-2">110 Cedar Bluff Rd, Centre, AL 35960</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Parking:</strong> Visitor parking available in the main lot. 
                    We'll meet you at the entrance and guide you through the process.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="font-semibold mb-1">Cherokee County Courthouse</p>
                  <p className="text-sm mb-2">100 Main St, Centre, AL 35960</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Parking:</strong> On-street parking available on Main Street and surrounding blocks. 
                    Courthouse has a public parking area behind the building.
                  </p>
                </div>
                <div className="pt-4 border-t bg-primary/5 -mx-6 -mb-6 p-6 rounded-b-lg">
                  <p className="text-sm font-semibold">
                    <Clock className="w-4 h-4 inline mr-2" />
                    From our Fort Payne office, we can reach Centre in approximately 25 minutes.
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
            Services for Centre Residents
          </h2>
          
          <div className="flex items-start gap-8 mb-8">
            <AnimatedImage
              src={scalesJustice} 
              alt="Licensed Alabama bail bond service" 
              className="w-64 h-64 rounded-lg object-cover shadow-lg hidden md:block"
              scale={true}
              delay={0.2}
            />
            <div className="flex-1 grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg mb-4 text-foreground/80">
              No matter the charge, we're here to help. Call now: <span className="font-bold text-primary">Richard {phoneNumbers.richard.number}</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Neighborhoods */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Centre Neighborhoods We Serve
          </h2>
          <p className="text-center text-foreground/80 mb-8">
            We serve every neighborhood and community in Centre and the 35960 ZIP code area, including:
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
            Whether you're in downtown Centre or out in the county, we're here for your family 24/7.
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
            Need bail bonds in a nearby city? We serve all of Cherokee and DeKalb Counties:
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
                <h3 className="text-xl font-bold mb-2 text-foreground">Call us anytime</h3>
                <p className="text-foreground/80">
                  Call us anytime, day or night. Richard, Connie, or Toni will answer immediately.
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
                  We'll ask for the defendant's name and confirm they're at the Cherokee County Detention Center. We'll explain the 10% bond fee clearly—no surprises.
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
                  We'll meet you at the Cherokee County Courthouse in Centre and handle all the paperwork. You don't have to navigate this alone.
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
                  Typically within 2–8 hours. We'll keep you updated throughout the process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              How Much Does It Cost?
            </h3>
            <p className="text-foreground/80 mb-6 text-center">
              Alabama law sets bail bond fees at 10% of the total bail amount. For example:
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">$2,000 bail</div>
                <div className="text-foreground/80">= $200 fee</div>
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
              That's it. No administrative fees. No hidden costs. And we offer payment plans if you need help.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          What Centre Families Are Saying
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
            Need Centre Bail Bonds Now?
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
            We can be at the Cherokee County Courthouse or Detention Center within minutes.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Centre;
