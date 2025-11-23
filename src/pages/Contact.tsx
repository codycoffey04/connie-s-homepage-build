import { MapPin, Clock, CheckCircle, Building2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQList } from "@/components/FAQItem";
import { phoneNumbers } from "@/lib/cityUtils";
import { SEO } from "@/components/SEO";
import { getLocalBusinessSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/schemaUtils";

const serviceAreas = {
  dekalb: [
    { name: "Fort Payne", slug: "fort-payne" },
    { name: "Rainsville", slug: "rainsville" },
    { name: "Henagar", slug: "henagar" },
    { name: "Fyffe", slug: "fyffe" },
    { name: "Valley Head", slug: "valley-head" },
    { name: "Pisgah", slug: "pisgah" }
  ],
  cherokee: [
    { name: "Centre", slug: "centre" }
  ]
};

const readyInfo = [
  { text: "Defendant's full name", subtext: "(the person who was arrested)" },
  { text: "Location", subtext: "(which jail they're in—DeKalb County Detention Center or Cherokee County Detention Center)" },
  { text: "Charge", subtext: "(if you know it—we can also find out for you)" },
  { text: "Any questions about cost or the process", subtext: "" }
];

const keyLocations = [
  {
    county: "DeKalb County",
    facilities: [
      { name: "DeKalb County Detention Center", address: "2801 Jordan Rd SW, Fort Payne, AL 35967" },
      { name: "DeKalb County Courthouse", address: "300 Grand Ave SW, Fort Payne, AL 35967" }
    ]
  },
  {
    county: "Cherokee County",
    facilities: [
      { name: "Cherokee County Detention Center", address: "110 Cedar Bluff Rd, Centre, AL 35960" },
      { name: "Cherokee County Courthouse", address: "100 Main St, Centre, AL 35960" }
    ]
  }
];

const contactFaqs = [
  {
    question: "How quickly can you get my loved one out?",
    answer: "Release typically takes 2–8 hours after we post the bond, depending on jail workload. We'll stay in communication with you throughout the process."
  },
  {
    question: "How much does a bail bond cost?",
    answer: "Alabama law requires a 10% fee for all bail bonds. For example, if bail is $5,000, the bond fee is $500. We charge no additional administrative fees."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. We understand that coming up with 10% can be challenging. We offer flexible payment plans and accept credit cards."
  },
  {
    question: "What counties do you serve?",
    answer: "We serve DeKalb County (Fort Payne, Rainsville, Henagar, Fyffe, Valley Head, Pisgah) and Cherokee County (Centre)."
  },
  {
    question: "Do you really answer calls 24/7?",
    answer: "Yes. Connie, Toni, or Richard will answer your call at any time—even at 3 AM on Christmas morning. We're a family business, and we answer our own phones."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us | 24/7 Bail Bonds | Fort Payne, AL"
        description="Contact Connie's Bail Bonding 24/7. Call Richard 256-601-2041, Connie 256-630-2824, or Toni 256-440-0822. Located at 2700 Jordan Rd SW, Fort Payne."
        canonical="/contact"
        schema={[
          getLocalBusinessSchema(),
          getFAQSchema(contactFaqs),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" }
          ])
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact Connie's Bail Bonding
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            We're Available 24/7—Call Anytime
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Arrests don't follow business hours, and neither do we. Whether it's 2 AM on a Sunday or a holiday afternoon, Connie's Bail Bonding answers immediately. No call centers. No delays. Just Connie, Toni, and Richard—ready to help your family right now.
          </p>
        </div>

        <div className="mt-12 space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Call Us Immediately</h3>
          <PhoneButton name={phoneNumbers.richard.name} number={phoneNumbers.richard.number} variant="primary" />
          <PhoneButton name={phoneNumbers.connie.name} number={phoneNumbers.connie.number} variant="primary" />
          <PhoneButton name={phoneNumbers.toni.name} number={phoneNumbers.toni.number} variant="primary" />
          <p className="text-center text-foreground/70 italic mt-6">
            We answer our own phones 24 hours a day, 7 days a week, 365 days a year.
          </p>
        </div>
      </Section>

      {/* Office Location with Interactive Map */}
      <Section variant="muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Office Location
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Interactive Map */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-primary/20">
              <iframe
                src="https://maps.google.com/maps?q=2700+Jordan+Rd+SW,+Fort+Payne,+AL+35967&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Connie's Bail Bonding Office Location - 2700 Jordan Rd SW, Fort Payne, AL 35967"
              />
            </div>
            
            {/* Right: Location Details + CTA */}
            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <MapPin className="w-7 h-7 text-primary" />
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-bold text-xl">Connie's Bail Bonding, LLC</p>
                    <p className="text-lg text-foreground/80">2700 Jordan Rd SW</p>
                    <p className="text-lg text-foreground/80">Fort Payne, AL 35967</p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                    <p className="font-semibold text-primary flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Located next to DeKalb County Detention Center
                    </p>
                    <p className="text-sm text-foreground/70 mt-2">
                      We're right next door for the fastest possible service.
                    </p>
                  </div>
                  
                  {/* Get Directions Button - Pre-filled */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=2700+Jordan+Rd+SW,Fort+Payne,AL+35967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <MapPin className="w-6 h-6" />
                    Get Directions
                  </a>
                  
                  <p className="text-sm text-center text-foreground/60 italic">
                    Directions will open in Google Maps from your current location
                  </p>
                </CardContent>
              </Card>
              
              {/* Contact Info Card */}
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                  <a 
                    href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`} 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Richard: {phoneNumbers.richard.number}
                  </a>
                  <a 
                    href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`} 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Connie: {phoneNumbers.connie.number}
                  </a>
                  <a 
                    href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`} 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Toni: {phoneNumbers.toni.number}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Service Area</h2>
          <p className="text-center text-lg text-foreground/80 mb-8">
            We serve all of DeKalb County and Cherokee County in Northeast Alabama.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DeKalb County:</h3>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.dekalb.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/${city.slug}`}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all"
                  >
                    {city.name} Bail Bonds →
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Cherokee County:</h3>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.cherokee.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/${city.slug}`}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all"
                  >
                    {city.name} Bail Bonds →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Hours */}
      <Section variant="primary">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary">
            <CardContent className="text-center py-8 space-y-4">
              <Clock className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Hours</h2>
              <p className="text-2xl font-semibold text-primary">
                Open 24 hours a day, 7 days a week, 365 days a year.
              </p>
              <p className="text-lg text-foreground/80">
                We never close. We never send calls to voicemail. When you need help, we're here.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What to Have Ready */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            What to Have Ready When You Call
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-8">
            To help us assist you as quickly as possible, please have this information ready:
          </p>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {readyInfo.map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-card p-4 rounded-lg border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">{item.text}</p>
                  {item.subtext && <p className="text-foreground/70">{item.subtext}</p>}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-foreground/70 italic mt-6">
            Don't worry if you don't have all the details—we'll help you figure everything out.
          </p>
        </div>
      </Section>

      {/* Key Jail and Courthouse Locations */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Jail and Courthouse Locations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {keyLocations.map((location) => (
              <div key={location.county}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  {location.county}
                </h3>
                <div className="space-y-4">
                  {location.facilities.map((facility, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <p className="font-bold text-lg mb-2">{facility.name}</p>
                        <p className="text-foreground/70">{facility.address}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={contactFaqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Call Now—We'll Walk You Through Everything
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <PhoneButton name={phoneNumbers.richard.name} number={phoneNumbers.richard.number} variant="primary" />
            <PhoneButton name={phoneNumbers.connie.name} number={phoneNumbers.connie.number} variant="primary" />
            <PhoneButton name={phoneNumbers.toni.name} number={phoneNumbers.toni.number} variant="primary" />
          </div>
          
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We'll meet you at the DeKalb County Detention Center or Cherokee County Courthouse within minutes. Let us help your family tonight.
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

export default Contact;
