import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Phone, MapPin, Clock, Building, Scale, DollarSign, Users, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { phoneNumbers } from "@/lib/cityUtils";
import { 
  getArticleSchema, 
  getFAQSchema, 
  getBreadcrumbSchema, 
  getLocalBusinessSchema 
} from "@/lib/schemaUtils";

const faqs = [
  {
    question: "How do I find out if someone is in DeKalb County Jail?",
    answer: "Call the jail at (256) 845-3801 or check the DeKalb County Sheriff's Office website for the online inmate roster. You'll need the person's name and date of birth."
  },
  {
    question: "Can I post bail at DeKalb County Jail at night?",
    answer: "Yes. The jail accepts bonds 24 hours a day, 7 days a week. Connie's Bail Bonding is also available 24/7 to post bail at any hour."
  },
  {
    question: "How much is bail at DeKalb County Jail?",
    answer: "Bail amounts vary based on the charges and are set by a judge or magistrate. Common misdemeanors may have pre-set bail amounts. Call us with the charges and we can give you an estimate."
  },
  {
    question: "What if bail hasn't been set yet?",
    answer: "For more serious charges, the defendant must appear before a judge for bail to be set (usually within 24-48 hours of arrest). We can still prepare paperwork and be ready to post immediately once bail is determined."
  },
  {
    question: "Can I visit someone in DeKalb County Jail before posting bail?",
    answer: "The jail has specific visitation schedules and rules. Contact the jail directly at (256) 845-3801 for current visitation policies. Posting bail and getting them released is typically faster than waiting for visitation."
  }
];

const schemas = [
  getArticleSchema(
    "DeKalb County Jail Bail Guide",
    "How to post bail at DeKalb County Detention Center in Fort Payne, AL. Facility address, visiting hours, bail process, release times, and what to expect.",
    "/bail-bonds-guide/dekalb-county-jail-guide"
  ),
  getFAQSchema(faqs),
  getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "DeKalb County Jail Guide", url: "/bail-bonds-guide/dekalb-county-jail-guide" }
  ]),
  getLocalBusinessSchema()
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-gray-200">
      <CollapsibleTrigger className="flex w-full items-center justify-between py-6 text-left hover:text-brand-red transition-colors">
        <h3 className="text-lg font-bold uppercase pr-4">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

const DeKalbCountyJailGuide = () => {
  return (
    <>
      <SEO
        title="DeKalb County Jail Bail Guide | Fort Payne, AL | Connie's Bail Bonding"
        description="How to post bail at DeKalb County Detention Center in Fort Payne, AL. Facility address, visiting hours, bail process, release times, and what to expect."
        canonical="/bail-bonds-guide/dekalb-county-jail-guide"
        schema={schemas}
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <StickyCallButton />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-28 pb-8">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-brand-red transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/bail-bonds-guide" className="hover:text-brand-red transition-colors">Bail Bonds Guide</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">DeKalb County Jail Guide</span>
          </nav>
        </div>

        {/* Hero Section */}
        <AnimatedSection className="container mx-auto px-4 pb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8">
            DeKalb County Jail Bail Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            If someone you care about has been arrested and taken to DeKalb County Detention Center, you need answers fast. This guide covers everything you need to know about posting bail at DeKalb County Jail—from facility information to the bail process and what to expect for release times.
          </p>
        </AnimatedSection>

        {/* Facility Information */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">Facility Information</h2>
            <Card className="border-2 border-gray-200 bg-white max-w-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="h-8 w-8 text-brand-red" />
                  <h3 className="text-2xl font-bold uppercase">DeKalb County Detention Center</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Address:</strong>
                      <span className="text-gray-700">2801 Jordan Road SW, Fort Payne, AL 35968</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Phone:</strong>
                      <a href="tel:256-845-3801" className="text-brand-red hover:underline">(256) 845-3801</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Hours:</strong>
                      <span className="text-gray-700">24/7 (jail operations)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Lobby Hours for Bail:</strong>
                      <span className="text-gray-700">24 hours (bondsmen can post bail anytime)</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2801+Jordan+Road+SW,+Fort+Payne,+AL+35968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase hover:bg-red-700 transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  Get Directions
                </a>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* How to Post Bail */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              How to Post Bail at DeKalb County Jail
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {[
                {
                  number: "1",
                  title: "Confirm the Arrest",
                  description: "Call the jail at (256) 845-3801 or check the online inmate roster to confirm the person is in custody and get their booking number. You'll need the defendant's full legal name and date of birth."
                },
                {
                  number: "2",
                  title: "Find Out the Bail Amount",
                  description: "The jail staff can tell you the bail amount once it's been set. For common offenses, bail may be set immediately via a bail schedule. For more serious charges, the defendant may need to see a judge first (typically within 24-48 hours)."
                },
                {
                  number: "3",
                  title: "Contact a Bail Bondsman",
                  description: "Call Connie's Bail Bonding at (256) 601-2041. We're available 24/7 and can start the paperwork immediately. Have ready: defendant's full name and DOB, booking number, bail amount, and your payment method."
                },
                {
                  number: "4",
                  title: "Complete Paperwork & Pay",
                  description: "You'll sign the bail bond agreement (as the indemnitor/cosigner) and pay the premium (10% of bail) plus state fees. This can often be done over the phone or we can meet you at the jail."
                },
                {
                  number: "5",
                  title: "Bond is Posted",
                  description: "We deliver the bond paperwork to the jail. Once the jail verifies and accepts the bond, they begin processing the defendant's release."
                },
                {
                  number: "6",
                  title: "Defendant Released",
                  description: "Release times at DeKalb County Jail typically range from 2-8 hours after the bond is posted, depending on how busy the facility is and time of day."
                }
              ].map((step) => (
                <Card key={step.number} className="border-2 border-gray-200 hover:border-brand-red transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-brand-red text-white flex items-center justify-center text-2xl font-black shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold uppercase">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Release Times */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Release Times at DeKalb County Jail
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-6">
                How long does it take to get out of DeKalb County Jail after bail is posted?
              </p>
              <div className="bg-white border-l-4 border-brand-red p-6 mb-6">
                <p className="text-2xl font-bold text-brand-red mb-2">Typical release time: 2-8 hours</p>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase mb-4">Factors affecting release time:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Time of day:</strong> Daytime releases (8am-5pm) are often faster due to full staffing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Day of week:</strong> Weekends and holidays may have slower processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Jail volume:</strong> Busy booking periods (weekend nights) can delay releases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Paperwork accuracy:</strong> Errors on bond documents cause delays</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-6 italic">
                Alabama law requires jails to release defendants promptly once proper bail is posted (Ala. Code § 15-13-107). If release is taking significantly longer than 8 hours with no explanation, contact your bondsman to follow up with the jail.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Types of Bonds */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Types of Bonds Accepted
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                DeKalb County Detention Center accepts:
              </p>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-brand-red" />
                    Surety Bonds
                  </h3>
                  <p className="text-gray-700">Posted by a licensed bail bondsman (most common)</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-brand-red" />
                    Cash Bonds
                  </h3>
                  <p className="text-gray-700">Full bail amount paid directly to the jail</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-2">
                    <Building className="h-6 w-6 text-brand-red" />
                    Property Bonds
                  </h3>
                  <p className="text-gray-700">Real estate used as collateral (requires court approval and additional paperwork)</p>
                </div>
              </div>
              <p className="text-gray-700 mt-6 italic">
                Using a licensed bondsman is the fastest option. Cash bonds require the full amount upfront and property bonds involve a longer approval process.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Courthouse Information */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              DeKalb County Courthouse Information
            </h2>
            <Card className="border-2 border-gray-200 bg-white max-w-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-8 w-8 text-brand-red" />
                  <h3 className="text-2xl font-bold uppercase">DeKalb County Courthouse</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Address:</strong>
                      <span className="text-gray-700">300 Grand Avenue SW, Fort Payne, AL 35967</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Phone:</strong>
                      <a href="tel:256-845-8500" className="text-brand-red hover:underline">(256) 845-8500</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Hours:</strong>
                      <span className="text-gray-700">Monday-Friday, 8:00 AM - 4:30 PM</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  This is where the defendant's court appearances will take place. Missing a court date here triggers bond forfeiture—make sure the defendant knows ALL scheduled dates.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Cities Served */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Cities & Areas We Serve in DeKalb County
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-6">
                Connie's Bail Bonding serves all of DeKalb County, including:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fort Payne • Rainsville • Henagar • Fyffe • Valley Head • Pisgah • Collinsville • Crossville • Geraldine • Hammondville • Ider • Mentone • Powell • Shiloh • Sylvania
              </p>
              <p className="text-gray-700 mt-6 italic">
                No matter where the arrest occurred in DeKalb County, the defendant is typically taken to the DeKalb County Detention Center in Fort Payne.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl bg-white border-2 border-gray-200 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Emergency CTA */}
        <AnimatedSection className="bg-black border-t-4 border-brand-red py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Need to Post Bail at DeKalb County Jail?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're located in Fort Payne and can be at the jail within minutes. Call now—we answer 24/7.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {Object.values(phoneNumbers).map((contact) => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                  className="bg-brand-red text-white px-6 py-4 font-black uppercase hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-sm">{contact.name}</div>
                    <div className="text-lg">{contact.number}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Related Guides */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
              {[
                {
                  title: "How Bail Works in Alabama",
                  description: "Step-by-step guide to the Alabama bail process",
                  link: "/bail-bonds-guide/how-bail-works-alabama"
                },
                {
                  title: "Bail Costs & Fees Explained",
                  description: "Complete breakdown of what you'll pay",
                  link: "/bail-bonds-guide/bail-costs-alabama"
                },
                {
                  title: "Cherokee County Jail Guide",
                  description: "How to post bail at Cherokee County Detention Center",
                  link: "/bail-bonds-guide/cherokee-county-jail-guide"
                }
              ].map((guide) => (
                <Card key={guide.link} className="border-2 border-gray-200 hover:border-brand-red transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase mb-3">{guide.title}</h3>
                    <p className="text-gray-700 mb-4">{guide.description}</p>
                    <a
                      href={guide.link}
                      className="inline-flex items-center gap-2 text-brand-red font-bold uppercase hover:underline"
                    >
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );
};

export default DeKalbCountyJailGuide;
