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

const Fyffe = () => {
  const features = [
    {
      icon: MapPin,
      title: "We're Close to Fyffe",
      description: "Our Fort Payne office at 2700 Jordan Rd SW is just a short drive from Fyffe. When you call us, we can meet you at the DeKalb County Detention Center quickly—no waiting for someone to drive in from hours away.",
    },
    {
      icon: Shield,
      title: "We Know DeKalb County's Process",
      description: "Even though Fyffe is its own community, all bail bonds for Fyffe arrests are posted at the DeKalb County Courthouse in Fort Payne. We know this system inside and out, and we'll walk you through exactly what happens so there's no confusion.",
    },
    {
      icon: Heart,
      title: "5-Star Service for DeKalb County Families",
      description: "Families in Fyffe and across DeKalb County trust us because we answer immediately, explain costs clearly, and treat every client with respect. Our 5-star Google rating comes from real people we've helped during their toughest moments.",
    },
    {
      icon: Clock,
      title: "Transparent Pricing with No Hidden Fees",
      description: "We charge only the state-required 10% bail bond fee—nothing extra. And if you need a payment plan, we'll work with you to make it manageable.",
    },
  ];

  const bailProcess = [
    {
      title: "Where Fyffe Arrestees Are Taken",
      description: "Anyone arrested in Fyffe—whether by Fyffe Police or DeKalb County Sheriff—is transported to the DeKalb County Detention Center at 2801 Jordan Rd SW, Fort Payne, AL 35967.",
    },
    {
      title: "Where Bonds Are Posted",
      description: "All bail bonds for Fyffe arrests are posted at the DeKalb County Courthouse at 300 Grand Ave SW, Fort Payne, AL 35967. This is about a 10-minute drive from Fyffe. We handle everything at the courthouse and jail so you don't have to navigate the system alone.",
    },
    {
      title: "Typical Release Time",
      description: "Release usually takes 2–8 hours after we post bond, depending on how busy the jail is. We stay in communication with you throughout, so you're never left wondering what's happening.",
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
    "Gibson Crossroads",
    "Moores Crossroads",
    "Luttrell",
    "Guest",
    "Ten Broeck",
    "McKestes",
    "Lydia",
    "Chigger Hill",
    "South Hill",
    "Lakeview",
  ];

  const nearbyCities = [
    { name: "Fort Payne Bail Bonds", slug: "fort-payne" },
    { name: "Rainsville Bail Bonds", slug: "rainsville" },
    { name: "Henagar Bail Bonds", slug: "henagar" },
  ];

  const testimonials = [
    "Friendly, non-judgmental, straight to the point, quick & easy. No run around. Will definitely recommend.",
    "I've been dealing with y'all a long time – you're great people with a big heart. I highly recommend your services.",
    "They made a tough time easy and effortless. The staff was very personable and beyond friendly. I literally felt like family.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Fyffe Bail Bonds — 24/7 DeKalb County Service
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Fast, Licensed Bail Bond Agents Serving Fyffe and DeKalb County
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
            Fyffe's Trusted Bail Bond Service
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            When someone you love is arrested in Fyffe, Connie's Bail Bonding is here to help. We've been serving Fyffe families since 2019 with fast, compassionate bail bond service that you can count on—24 hours a day, 7 days a week.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mt-4">
            Fyffe is part of DeKalb County, which means all arrests are processed through the DeKalb County Detention Center and Courthouse in Fort Payne. We're based right there in Fort Payne, just minutes from Fyffe, so we can meet you at the jail quickly and get your loved one released as fast as possible.
          </p>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Why Choose Connie's for Fyffe Bail Bonds?
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
          How Bail Works for Fyffe Residents
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
            Services for Fyffe Residents
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
              Call anytime, day or night: <span className="font-bold text-primary">Richard {phoneNumbers.richard.number}</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Neighborhoods */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
            Fyffe Neighborhoods We Serve
          </h2>
          <p className="text-center text-foreground/80 mb-8">
            We serve every neighborhood and community in Fyffe and the 35971 ZIP code area, including:
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
            Whether you're in town or out in the county, we're here to help your family 24/7.
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
                  We'll ask for the defendant's name and confirm they're at the DeKalb County Detention Center. We'll explain the 10% fee with clear examples—no surprises.
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
                <div className="text-2xl font-bold text-primary mb-2">$1,500 bail</div>
                <div className="text-foreground/80">= $150 fee</div>
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
          What Fyffe Families Are Saying
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
            Need Fyffe Bail Bonds Now?
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
            We're based nearby in Fort Payne and can meet you at the jail within minutes.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Connie's Bail Bonding, LLC
              </h3>
              <p className="text-foreground/80 mb-4">
                2700 Jordan Rd SW<br />
                Fort Payne, AL 35967
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>Richard: {phoneNumbers.richard.number}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>Connie: {phoneNumbers.connie.number}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>Toni: {phoneNumbers.toni.number}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-foreground/80 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Service Area</h4>
              <p className="text-sm text-foreground/80">
                Licensed Alabama Bail Bond Agents serving Fyffe and all of DeKalb County since 2019.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-foreground/60">
            <p>© 2025 Connie's Bail Bonding, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fyffe;
