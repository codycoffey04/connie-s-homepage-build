import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { PhoneButton } from "@/components/PhoneButton";
import { Section } from "@/components/Section";
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Centre Bail Bonds — 24/7 Cherokee County Service
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Fast, Licensed Bail Bond Agents Serving Centre and Cherokee County
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
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
          <p className="text-sm text-muted-foreground mt-4">
            Available 24 hours a day, 7 days a week
          </p>
        </div>
      </Section>

      {/* Trust Section */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Centre's Trusted Bail Bond Service
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            When someone you love is arrested in Centre or anywhere in Cherokee County, Connie's Bail Bonding is ready to help. We serve Centre 24/7 with the same fast, compassionate service we bring to all of Northeast Alabama.
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
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Why Choose Connie's for Centre Bail Bonds?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* How Bail Works */}
      <Section variant="muted">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          How Bail Works in Centre
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {bailProcess.map((step, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border/50 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Services for Centre Residents
          </h2>
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

export default Centre;
