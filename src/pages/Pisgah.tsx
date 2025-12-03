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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  MapPin,
  Heart,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { getOrganizationSchema, getBreadcrumbSchema, getSpeakableSchema, getFAQSchema, getPlaceSchema } from "@/lib/schemaUtils";
import { getCityBySlug } from "@/lib/cityUtils";
import pisgahHeroBg from "@/assets/pisgah-hero-bg.jpg";
import supportHands from "@/assets/support-hands.jpg";
import legalGavel from "@/assets/legal-gavel.jpg";
import paymentMethods from "@/assets/payment-methods.jpg";

const Pisgah = () => {
  const cityData = getCityBySlug('pisgah')!;
  const features = [
    {
      icon: Shield,
      title: "We Know DeKalb County's System",
      description: "We work with the DeKalb County Detention Center and DeKalb County Courthouse every single day. We understand the procedures, know the staff by name, and can navigate the system efficiently to expedite your loved one's release.",
    },
    {
      icon: MapPin,
      title: "Quick Response from Fort Payne",
      description: "Our office is located at 2700 Jordan Rd SW in Fort Payne—right next to the DeKalb County Detention Center. When you call from Pisgah, we can meet you at the jail or courthouse quickly.",
    },
    {
      icon: Heart,
      title: "5-Star Rated by DeKalb County Families",
      description: "Pisgah residents and families across DeKalb County trust us because we answer at any hour, explain everything clearly, and never charge hidden fees. Our 5-star Google rating reflects real experiences from real people in crisis.",
    },
    {
      icon: Clock,
      title: "Transparent Pricing with Payment Plans",
      description: "We charge only Alabama's required 10% bail bond fee—nothing extra. And if you need flexible payment options, we'll work with you to create a plan that fits your budget.",
    },
  ];

  const bailProcess = [
    {
      title: "Where Pisgah Arrestees Are Taken",
      description: "Anyone arrested in Pisgah—whether by local law enforcement or DeKalb County Sheriff—is transported to the DeKalb County Detention Center at 2801 Jordan Rd SW, Fort Payne, AL 35967.",
    },
    {
      title: "Where Bonds Are Posted",
      description: "All bail bonds for Pisgah arrests are posted at the DeKalb County Courthouse at 300 Grand Ave SW, Fort Payne, AL 35967. We handle all the paperwork and coordinate directly with jail staff to get your loved one out quickly.",
    },
    {
      title: "Typical Release Time",
      description: "Release usually takes 2–8 hours after we post bond, depending on jail workload. We stay in communication with you throughout the process so you're never left wondering.",
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
    "Gorhams Bluff",
    "Oak Grove",
    "Rosalie",
    "Metcalf",
    "County Road",
    "Sand Mountain",
    "Brow",
    "Central",
  ];

  const nearbyCities = [
    { name: "Fort Payne Bail Bonds", slug: "fort-payne" },
    { name: "Henagar Bail Bonds", slug: "henagar" },
    { name: "Valley Head Bail Bonds", slug: "valley-head" },
  ];

  const testimonials = [
    "I highly recommend. They were extremely professional. Answered all questions and concerns. Took care of everything quickly.",
    "They were fast, courteous, and professional.",
    "Everyone I spoke with was very helpful and courteous. Thank you very much for your kindness, it was easy and respectful.",
  ];

  const faqs = [
    {
      question: "How much does a bail bond cost in Pisgah?",
      answer: "Alabama law sets bail bond fees at 10% of the total bail amount. This is non-negotiable by law—every licensed bondsman charges the same rate. For example, if bail is set at $5,000, the bond fee is $500. We charge no additional administrative fees."
    },
    {
      question: "How long does release take from DeKalb County Jail for Pisgah arrests?",
      answer: "Typical release time is 2-8 hours after we post the bond, depending on how busy the jail is. We stay in communication with you throughout the process so you're never left wondering what's happening."
    },
    {
      question: "Do you serve Pisgah 24/7?",
      answer: "Yes. Richard, Connie, or Toni will answer your call at any time—even at 3 AM on Christmas morning. We're located in Fort Payne right next to the detention center and can respond quickly to Pisgah arrests."
    },
    {
      question: "What if I can't afford the full 10% upfront?",
      answer: "We offer flexible payment plans for families who need help. We accept credit cards and can work out arrangements that fit your budget. Call us and we'll discuss your options—there's no pressure, just honest guidance."
    },
    {
      question: "Where do Pisgah arrestees go?",
      answer: "Anyone arrested in Pisgah—whether by local law enforcement or DeKalb County Sheriff—is transported to the DeKalb County Detention Center in Fort Payne at 2801 Jordan Rd SW. All bail bonds are posted at the DeKalb County Courthouse."
    },
    {
      question: "Do you provide bail bond services all the way out to Pisgah?",
      answer: "Yes, we serve Pisgah and every corner of DeKalb County. Pisgah is about 20-25 minutes from our office, but that distance doesn't affect our service because all DeKalb County arrests are processed at the same jail in Fort Payne—right next door to us at 2700 Jordan Rd SW. When someone from Pisgah is arrested, they're transported to DeKalb County Jail for booking. Once you call us, we can have the bond posted within minutes since we're literally steps away. We've helped Pisgah families many times and understand that rural communities sometimes feel overlooked by businesses based in larger towns. That's not how we operate. Every call gets the same urgent attention, whether you're in Fort Payne or the farthest reaches of the county. Call Richard at 256-601-2041, Connie at 256-630-2824, or Toni at 256-440-0822."
    },
    {
      question: "What information do I need when calling about someone arrested in Pisgah?",
      answer: "Start with the defendant's full legal name and date of birth—this is essential for locating them in the jail system. If you know the charges and approximate arrest time, share that too, but don't wait until you have every detail. Pisgah arrests require transport to DeKalb County Jail in Fort Payne, so there may be a delay between arrest and booking completion. We can check the jail's system to see if they've arrived and been processed. You'll also need your own valid ID for signing the cosigner agreement and a payment method ready. When you call, we'll explain exactly what the total cost will be before you commit—no surprises. Many families call us feeling overwhelmed and unsure of what to do. That's normal, and we'll patiently walk you through everything. The most important step is making that first call; we handle the rest."
    },
    {
      question: "What are my obligations as a cosigner for someone from Pisgah?",
      answer: "You're legally guaranteeing the defendant will appear at all court hearings at DeKalb County Courthouse in Fort Payne. If they miss any court date, you become responsible for the entire bail amount, not just the 10% premium you already paid. For example, on a $15,000 bond, you'd owe the full $15,000 if they skip. Alabama law allows creditors to garnish up to 25% of your wages to collect this debt. Any collateral you pledged—vehicle titles, property, valuables—can be seized and sold. Before signing, ask yourself: Do I trust this person completely? Will they show up to every hearing? Can I afford the full bail amount if they run? You should maintain regular contact with the defendant, remind them of court dates, and report any concerning behavior to us immediately. If you ever believe they might flee, contact us before they miss court—we may be able to surrender them and end your liability."
    },
    {
      question: "How does bailing someone out work on nights and weekends for Pisgah residents?",
      answer: "The process is identical to any other time—we're available 24/7/365 without exception. When you call at midnight or on a holiday, a real person answers: Richard, Connie, or Toni. DeKalb County Jail accepts bonds around the clock, so there's no waiting for Monday or regular business hours. After your call, we complete the paperwork and payment, then walk the bond next door to the jail immediately. The fact that you're in Pisgah doesn't add any delay since all the action happens at the jail in Fort Payne anyway. Release processing might take slightly longer during overnight hours due to reduced jail staffing, but the bond is posted right away. Many Pisgah families have been relieved to discover they can get help at 3 AM on a Sunday just as easily as noon on a Tuesday. Don't hesitate to call us anytime at 256-601-2041—we're here when you need us."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pisgah Bail Bonds | 24/7 DeKalb County AL"
        description="24/7 bail bonds serving Pisgah, AL and all of DeKalb County. Licensed agents available now. Call 256-601-2041. Compassionate, professional service."
        canonical="/pisgah"
        city="Pisgah"
        geo={{
          placename: "Pisgah, Alabama",
          region: "AL-US",
          position: "34.6838;-85.8411"
        }}
        schema={[
          getOrganizationSchema(),
          getPlaceSchema(cityData),
          getSpeakableSchema(),
          getFAQSchema(faqs),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Pisgah", url: "/pisgah" }
          ])
        ]}
        reviews={testimonials}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section - Full Screen with Waterfall */}
      <section 
        className="relative min-h-[85vh] bg-black flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pisgahHeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl z-10 pb-32 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white uppercase tracking-wide leading-none">
              <span style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>Pisgah</span>
              <br />
              <span className="text-brand-red" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>Bail Bonds</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)' }}>
              24/7 DeKalb County Service
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
              Fast, licensed bail bond agents serving Pisgah and DeKalb County. We understand the local system and we're ready to help 24/7.
            </p>
            
            <HeroCTA className="mb-12" />
          </div>
        </div>
        
        {/* Slim Contact Banner - Bottom of Hero */}
        <SlimContactBanner />
      </section>

      {/* Quick Answers Section - AEO Optimized */}
      <QuickAnswers city="Pisgah" county="DeKalb County" releaseTime="2-8 Hours" />

      {/* Trust Section */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-foreground uppercase tracking-tight">
            Pisgah's Trusted Bail Bond Service
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            <strong className="text-brand-red">Serving Pisgah & DeKalb County Since 2019</strong> — When someone you love is arrested in Pisgah, Connie's Bail Bonding is here to help. We've been serving Pisgah families since 2019 with the same fast, compassionate service we bring to all of Northeast Alabama.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mt-4">
            Pisgah is part of DeKalb County, which means all arrests are processed through the DeKalb County Detention Center and Courthouse in Fort Payne. We're based right there in Fort Payne, so we can meet you at the jail quickly and get your loved one released as fast as possible.
          </p>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section 
        className="relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${supportHands})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <AnimatedSection className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-white uppercase tracking-tight">
            Why Choose Connie's for Pisgah Bail Bonds?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 bg-white/95">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
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
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-white uppercase tracking-tight">
            How Bail Works for Pisgah Residents
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {bailProcess.map((step, index) => (
              <div key={index} className="group bg-white/95 p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">{step.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How to Get to Our Office from Pisgah */}
      <Section className="bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center uppercase">
            How to Get to Our Office from Pisgah
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
                title="Directions from Pisgah to Connie's Bail Bonding Office"
              />
            </div>
            
            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-black mb-4">🚗 30-Minute Drive</h3>
                  <div className="space-y-3 text-foreground/80">
                    <p><strong>Distance:</strong> 20 miles from Pisgah</p>
                    <p><strong>Route:</strong> Take Highway 40 to Highway 35, then to Fort Payne</p>
                    <p><strong>We're located:</strong> Right next to DeKalb County Detention Center on Jordan Rd</p>
                  </div>
                  
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mt-4">
                    <p className="text-sm font-semibold">We can meet you at the jail or courthouse quickly after you arrive.</p>
                  </div>
                  
                  <a
                    href="https://www.google.com/maps/dir/?api=1&origin=Pisgah+AL&destination=2700+Jordan+Rd+SW,Fort+Payne,AL+35967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-black uppercase hover:bg-primary/90 transition-colors shadow-lg mt-6"
                  >
                    <MapPin className="w-6 h-6" />
                    Get Directions from Pisgah
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Local Law Enforcement & Court Information */}
      <Section className="bg-gradient-to-b from-muted to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center uppercase">
            Local Information for <span className="text-brand-red">Pisgah Residents</span>
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
                <Shield className="w-5 h-5" /> Law Enforcement Serving Pisgah
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                  <span>Pisgah Police Department</span>
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
                Arrests by any of these agencies in Pisgah or DeKalb County are processed at the 
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
                    From Pisgah to Fort Payne is approximately 25 minutes. We can meet you at either location.
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
            Services for Pisgah Residents
          </h2>
          
          <div className="flex items-start gap-8 mb-8">
            <div className="flex-1 grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">{service}</span>
                </div>
              ))}
            </div>
            <AnimatedImage
              src={paymentMethods} 
              alt="Flexible payment options for bail bonds" 
              className="w-64 h-64 rounded-lg object-cover shadow-lg hidden md:block"
              scale={true}
              delay={0.2}
            />
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
            Pisgah Neighborhoods We Serve
          </h2>
          <p className="text-center text-foreground/80 mb-8">
            We serve every neighborhood and community in Pisgah and the 35765 ZIP code area, including:
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
            Whether you're near Gorhams Bluff or out in the county, we're here to help your family 24/7.
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
                  We'll ask for the defendant's name and confirm they're at the DeKalb County Detention Center. We'll explain the 10% fee clearly with examples.
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
                  We'll meet you at the jail or courthouse in Fort Payne and handle all the paperwork. You don't have to navigate this alone.
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
                  Typically within 2–8 hours. We'll keep you updated every step of the way.
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
                <div className="text-2xl font-bold text-primary mb-2">$1,000 bail</div>
                <div className="text-foreground/80">= $100 fee</div>
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
              That's it. No hidden charges. And we offer payment plans if you need help.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          What Pisgah Families Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/maps/search/Connie's+Bail+Bonding" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-bold"
          >
            Read All Reviews on Google →
          </a>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="primary" className="bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Need Pisgah Bail Bonds Now?
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
            We'll meet you at the DeKalb County Detention Center in Fort Payne quickly.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Pisgah;
