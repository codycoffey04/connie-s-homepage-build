import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Shield, Heart, MapPin, DollarSign, Check, BookOpen, Star, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { getLocalBusinessSchema, getBreadcrumbSchema, getSpeakableSchema } from "@/lib/schemaUtils";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Connie",
      role: "Founder & Licensed Bail Bond Agent",
      description: "Connie founded Connie's Bail Bonding to bring transparent, compassionate service to Northeast Alabama. She's a licensed Alabama bail bond agent with years of experience navigating the DeKalb and Cherokee County court systems. When you call Connie, you're talking to someone who genuinely cares about helping your family."
    },
    {
      name: "Toni",
      role: "Licensed Bail Bond Agent",
      description: "Toni is a licensed Alabama bail bond agent and a core part of our team. Clients often mention how patient and understanding she is—walking them through the process step by step, answering every question, and making sure they never feel judged or alone."
    },
    {
      name: "Richard",
      role: "Licensed Bail Bond Agent",
      description: "Richard is a licensed Alabama bail bond agent who brings calm, professional expertise to every situation. Whether it's 3 AM or a holiday weekend, Richard answers calls and gets to work immediately to help families get their loved ones home."
    }
  ];

  const values = [
    {
      icon: DollarSign,
      title: "Transparency",
      description: "We believe you deserve to know exactly what you're paying and why. Alabama law sets bail bond fees at 10%, and that's all we charge—no administrative fees, no surprise costs. We'll explain everything upfront so there's never confusion."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We understand this is one of the most stressful moments of your life. We treat every client with dignity, patience, and respect. You're not just a case number to us—you're a neighbor who needs help."
    },
    {
      icon: MapPin,
      title: "Local Commitment",
      description: "We're based right here in Fort Payne, next to the DeKalb County Detention Center. We serve DeKalb and Cherokee Counties exclusively, which means we know the local jails, courts, and procedures better than anyone. We're invested in this community because we live here too."
    },
    {
      icon: Shield,
      title: "Professionalism",
      description: "We take our responsibility seriously. We're licensed by the Alabama Professional Bail Bonding Board, we follow all state regulations, and we maintain continuing education to stay current on Alabama bail bond law. You can trust that we operate legally, ethically, and professionally."
    }
  ];

  const credentials = [
    { icon: Shield, text: "Licensed Alabama Bail Bond Agents – Fully licensed by the Alabama Professional Bail Bonding Board" },
    { icon: Check, text: "Background Checked – All agents pass state-required background checks" },
    { icon: BookOpen, text: "Continuing Education – We maintain ongoing training to stay current on Alabama bail bond regulations" },
    { icon: Star, text: "5-Star Google Rating – Rated 5 stars by 29+ real clients across DeKalb and Cherokee Counties" },
    { icon: Users, text: "Family-Owned Since 2019 – Six years serving Northeast Alabama families" }
  ];

  const testimonials = [
    "Connie's Bail Bonding went above and beyond to make sure I could make bail and get out of jail. After spending 5 days in there…it was a horrific and life altering experience. Connie's Bail Bonding is the only place I will ever use should I need a bonding agency… I can't thank them enough. 5 stars from me.",
    "Toni is awesome. She was able to explain the process easily and she handled everything in a professional way. I highly recommend this bail bonds. Thank you for being understanding and professional. ❤️",
    "I literally felt like family in the way they treated me.",
    "Connie answered immediately at 2 AM and had my son out within 4 hours. Professional, kind, and transparent about all costs. Highly recommend."
  ];

  const dekalboCountyCities = [
    { name: "Fort Payne", slug: "fort-payne" },
    { name: "Rainsville", slug: "rainsville" },
    { name: "Henagar", slug: "henagar" },
    { name: "Fyffe", slug: "fyffe" },
    { name: "Valley Head", slug: "valley-head" },
    { name: "Pisgah", slug: "pisgah" }
  ];

  const cherokeeCities = [
    { name: "Centre", slug: "centre" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us | Family-Owned Bail Bond Service Since 2019"
        description="Meet Connie, Toni, and Richard - licensed Alabama bail bond agents serving DeKalb & Cherokee Counties with compassion and professionalism 24/7."
        canonical="/about"
        schema={[
          getLocalBusinessSchema(),
          getSpeakableSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" }
          ])
        ]}
        reviews={testimonials}
      />
      <Navigation />
      
      {/* Hero Section - Full Screen with Background Image */}
      <section 
        className="relative min-h-[85vh] bg-black flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl z-10">
          {/* Main Content - Left Aligned */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
              About<br />
              Connie's<br />
              <span className="text-brand-red">Bail Bonding</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold">
              Family-Owned & Operated Since 2019
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
              Meet Connie, Toni, and Richard — licensed Alabama bail bond agents serving DeKalb & Cherokee Counties with compassion and professionalism.
            </p>
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

      {/* Our Story Section */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
            <p>
              Connie's Bail Bonding was founded in 2019 to serve Northeast Alabama families with honesty, compassion, and professionalism. We saw too many people facing one of the worst nights of their lives—confused, scared, and not knowing where to turn. We started this business to be the calm, trustworthy voice on the other end of the phone at 2 AM.
            </p>
            <p>
              We're not a call center. We're not a franchise. We're Connie, Toni, and Richard—a local family team that answers our own phones, meets you at the jail, and walks you through every step of the bail process with patience and respect.
            </p>
            <p>
              Since our first day in business, we've helped hundreds of families across DeKalb and Cherokee Counties reunite with their loved ones. We know the jails, we know the courts, and we know how stressful this process is. That's why we're available 24/7, why we explain everything upfront, and why we never charge hidden fees.
            </p>
          </div>
        </div>
      </Section>

      {/* Meet Our Team Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-4 text-center">{member.role}</p>
                  <p className="text-foreground/80 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Values Section */}
      <Section variant="muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Our Credentials Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Our Credentials</h2>
          <div className="space-y-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed pt-2">{credential.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Professional Licensing & Compliance Section */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Professional Licensing & Compliance
          </h2>
          
          <div className="bg-white border-2 border-primary/20 rounded-lg p-8 space-y-6">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Fully Licensed by the State of Alabama
              </h3>
              <p className="text-muted-foreground">
                All agents are licensed, bonded, and insured under Alabama law
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Regulatory Authority
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Alabama Professional Bail Bonding Board</li>
                  <li>• Alabama Department of Insurance</li>
                  <li>• Regulated under Alabama Code Title 15-13</li>
                </ul>
                <a 
                  href="https://www.aldoi.gov/Licensees/LicenseSearch.aspx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-semibold text-sm"
                >
                  Verify Our License →
                </a>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Requirements Met
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• State Background Checks: Passed</li>
                  <li>• Professional Liability Insurance: Active</li>
                  <li>• Continuing Education: Current</li>
                  <li>• Annual License Renewal: Compliant</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t pt-6 mt-6">
              <p className="text-sm text-foreground/70 text-center">
                <strong>Legal Notice:</strong> All bail bond fees in Alabama are set by state law at 10% of the bail amount (Alabama Code § 15-13-114). 
                This rate is uniform across all licensed bail bond agents in the state. We comply with all Alabama Department of Insurance regulations 
                and Alabama Professional Bail Bonding Board requirements.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Families Choose Us Section */}
      <Section variant="muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Why Families Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {testimonials.map((quote, index) => (
              <TestimonialCard key={index} quote={quote} />
            ))}
          </div>
          <div className="text-center">
            <a 
              href="https://www.google.com/maps/place/Connie's+Bail+Bonding,+LLC/@34.4442866,-85.7195158,17z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Read All Reviews on Google →
            </a>
          </div>
        </div>
      </Section>

      {/* Service Areas Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Service Areas</h2>
          <p className="text-center text-muted-foreground mb-8">
            We proudly serve all of DeKalb County and Cherokee County in Northeast Alabama
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">DeKalb County:</h3>
              <div className="flex flex-wrap gap-3">
                {dekalboCountyCities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/${city.slug}`}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Cherokee County:</h3>
              <div className="flex flex-wrap gap-3">
                {cherokeeCities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/${city.slug}`}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Community Involvement Section */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Community Involvement</h2>
          <p className="text-foreground/90 leading-relaxed text-lg">
            We're honored to serve the Fort Payne and Centre communities. We work closely with the DeKalb County Detention Center, Cherokee County Detention Center, and local court systems to ensure families get the help they need quickly and professionally.
          </p>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Help Your Family 24/7
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            No matter when you call, no matter what the charge, we're here to help.
          </p>
          
          <div className="space-y-4 mb-8">
            <PhoneButton name="Richard" number="256-601-2041" variant="primary" />
            <PhoneButton name="Connie" number="256-630-2824" variant="secondary" />
            <PhoneButton name="Toni" number="256-440-0822" variant="secondary" />
          </div>

          <div className="text-center space-y-2 text-muted-foreground">
            <p className="font-semibold text-foreground">Connie's Bail Bonding, LLC</p>
            <p>2700 Jordan Rd SW</p>
            <p>Fort Payne, AL 35967</p>
            <p className="text-sm mt-4 italic">
              Licensed Alabama Bail Bond Agents | Family-Owned Since 2019
            </p>
          </div>
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
                  <a href="tel:2566012041" className="hover:text-brand-red transition-colors text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Richard: 256-601-2041
                  </a>
                </p>
                <p>
                  <a href="tel:2566302824" className="hover:text-brand-red transition-colors text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Connie: 256-630-2824
                  </a>
                </p>
                <p>
                  <a href="tel:2564400822" className="hover:text-brand-red transition-colors text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Toni: 256-440-0822
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

export default About;
