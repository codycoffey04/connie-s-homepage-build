import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnswerBox } from "@/components/AnswerBox";
import { StatisticBox } from "@/components/StatisticBox";
import { ReadingMeta } from "@/components/ReadingMeta";
import { TableOfContents } from "@/components/TableOfContents";
import { GuideHero } from "@/components/GuideHero";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Phone, MapPin, Clock, Building, Scale, DollarSign, Users, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { phoneNumbers } from "@/lib/cityUtils";
import { 
  getArticleSchema, 
  getFAQSchema, 
  getBreadcrumbSchema, 
  getLocalBusinessSchema,
  getDeKalbCountyJailSchema,
  getDeKalbCountyCourthouseSchema,
  getSpeakableSchema
} from "@/lib/schemaUtils";
import dekalbJailHeroBg from "@/assets/dekalb-jail-hero-bg.jpg";

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

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
  { name: "DeKalb County Jail Guide", url: "/bail-bonds-guide/dekalb-county-jail-guide" }
];

const schemas = [
  getArticleSchema(
    "DeKalb County Jail Bail Guide",
    "How to post bail at DeKalb County Detention Center in Fort Payne, AL. Facility address, bail process, release times, and what to expect when bailing someone out.",
    "/bail-bonds-guide/dekalb-county-jail-guide"
  ),
  getFAQSchema(faqs),
  getDeKalbCountyJailSchema(),
  getDeKalbCountyCourthouseSchema(),
  getSpeakableSchema(),
  getBreadcrumbSchema(breadcrumbs),
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
        description="How to post bail at DeKalb County Detention Center in Fort Payne, AL. Facility address, bail process, release times, and what to expect when bailing someone out."
        canonical="/bail-bonds-guide/dekalb-county-jail-guide"
        schema={schemas}
      />
      <Navigation />
      <StickyCallButton />

      <GuideHero 
        backgroundImage={dekalbJailHeroBg}
        title="DeKalb County Jail Bail Guide"
        description="When someone is arrested in DeKalb County, Alabama, they're taken to the DeKalb County Detention Center in Fort Payne. Here's everything you need to know about posting bail and getting your loved one released."
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <ReadingMeta 
            author="Richard"
            licenseNumber="S0334"
            readingTime={5}
          />

          <AnswerBox 
            question="How do I post bail at DeKalb County Jail?"
            answer="Call Connie's Bail Bonding 24/7 at 256-601-2041, 256-630-2824, or 256-440-0822. Provide the inmate's name and charges. We post bonds at DeKalb County Detention Center (300 Grand Avenue SW, Fort Payne, AL 35967). Release typically takes 2-8 hours. Located next to our office. Costs 10% premium plus state fees."
          />

          <TableOfContents 
            items={[
              { id: 'facility-information', title: 'Facility Information' },
              { id: 'how-to-post-bail', title: 'How to Post Bail' },
              { id: 'release-times', title: 'Release Times' },
              { id: 'types-of-bonds', title: 'Types of Bonds Accepted' },
              { id: 'courthouse-information', title: 'Courthouse Information' },
              { id: 'cities-served', title: 'Cities & Areas Served' },
              { id: 'faqs', title: 'Frequently Asked Questions' },
            ]}
          />
        </div>
      </Section>

      {/* Facility Information */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <Building className="h-12 w-12 text-brand-red" />
              <h2 id="facility-information" className="text-4xl font-black uppercase tracking-tight">
                DeKalb County Detention Center
              </h2>
            </div>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-brand-red shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">Address</h3>
                        <p className="text-gray-700">
                          300 Grand Avenue SW<br />
                          Fort Payne, AL 35967
                        </p>
                        <a 
                          href="https://www.google.com/maps/place/300+Grand+Avenue+SW,+Fort+Payne,+AL+35967"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-red hover:underline mt-2 inline-block"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <Phone className="h-6 w-6 text-brand-red shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">Phone</h3>
                        <a href="tel:2568453801" className="text-gray-700 hover:text-brand-red">
                          (256) 845-3801
                        </a>
                        <p className="text-gray-600 text-sm mt-1">Main jail phone line</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-brand-red shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">Bail Bond Hours</h3>
                        <p className="text-gray-700">24/7 — Anytime, Any Day</p>
                        <p className="text-gray-600 text-sm mt-1">Jail accepts bonds around the clock</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                  <p className="text-lg font-semibold text-blue-900">
                    Connie's Bail Bonding is located at <strong>2700 Jordan Rd SW</strong>, directly across from the DeKalb County Detention Center. We're the closest bondsman to the jail—ready to post bail immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* How to Post Bail */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 id="how-to-post-bail" className="text-4xl font-black uppercase tracking-tight mb-8">
              How to Post Bail at DeKalb County Jail
            </h2>

            <StatisticBox 
              statistic="2-8 hours is the typical release time after bail is posted"
              context="DeKalb County Jail processes releases 24/7, but timing varies based on workload."
              citation="Local operational data"
            />

            <div className="space-y-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Call Us 24/7</h3>
                      <p className="text-gray-700 mb-4">
                        Contact Connie's Bail Bonding anytime. We're available around the clock including nights, weekends, and holidays.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-brand-red hover:underline font-semibold">
                          <Phone className="w-4 h-4" />
                          {phoneNumbers.richard.number} (Richard)
                        </a>
                        <a href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-brand-red hover:underline font-semibold">
                          <Phone className="w-4 h-4" />
                          {phoneNumbers.connie.number} (Connie)
                        </a>
                        <a href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-brand-red hover:underline font-semibold">
                          <Phone className="w-4 h-4" />
                          {phoneNumbers.toni.number} (Toni)
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Provide Basic Information</h3>
                      <p className="text-gray-700 mb-3">We'll need:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">The defendant's full legal name</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Date of birth (if known)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Charges (if known)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Your contact information</span>
                        </li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-3">
                        If you don't have all the details, that's okay—we can help you find out.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Complete Paperwork & Payment</h3>
                      <p className="text-gray-700 mb-3">
                        We'll explain the costs (10% premium + state fees) and review the bail bond agreement. Payment options include:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Cash</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Credit/Debit cards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Payment plans (for qualifying clients)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">We Post the Bond</h3>
                      <p className="text-gray-700">
                        We electronically submit the bond to DeKalb County Jail. Because we're located directly across the street, we can also hand-deliver paperwork if needed for faster processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Jail Processes Release</h3>
                      <p className="text-gray-700 mb-3">
                        Once the jail receives and verifies the bond, they begin release processing. This includes:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Confirming there are no other holds or warrants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Completing discharge paperwork</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Returning personal property</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-red mt-1">•</span>
                          <span className="text-gray-700">Providing court date information</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Defendant is Released</h3>
                      <p className="text-gray-700">
                        Your loved one walks out the front door. We'll make sure you know the court date and requirements to avoid any issues.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Release Times */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 id="release-times" className="text-4xl font-black uppercase tracking-tight mb-8">
              How Long Does Release Take?
            </h2>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <p className="text-xl mb-6">
                  After we post the bond, DeKalb County Jail typically releases defendants within <strong className="text-brand-red">2-8 hours</strong>.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold mb-4">Factors affecting release time:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red font-bold mt-1">•</span>
                      <span className="text-gray-700"><strong>Time of day</strong> — Late nights and early mornings are slower due to reduced staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red font-bold mt-1">•</span>
                      <span className="text-gray-700"><strong>Jail volume</strong> — Busy times (weekend nights) mean more inmates being processed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red font-bold mt-1">•</span>
                      <span className="text-gray-700"><strong>Outstanding warrants</strong> — If there's a hold from another jurisdiction, release will be delayed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red font-bold mt-1">•</span>
                      <span className="text-gray-700"><strong>Bond verification</strong> — Jail staff verify bond paperwork and confirm no other issues</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg">
                    <strong className="text-blue-900">Alabama law requires "prompt release"</strong> once bail is posted properly. While 2-8 hours is typical at DeKalb County, it can occasionally be faster or slower based on circumstances beyond our control.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* Types of Bonds */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 id="types-of-bonds" className="text-4xl font-black uppercase tracking-tight mb-8">
              Types of Bonds Accepted at DeKalb County Jail
            </h2>

            <div className="space-y-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-brand-red">
                    Surety Bonds (Bail Bondsman)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Most common option.</strong> You pay a licensed bail bondsman 10% of the total bail amount as a premium (plus state fees), and the bondsman posts the full bond with the court.
                  </p>
                  <p className="text-gray-700">
                    <strong>Example:</strong> If bail is $10,000, you pay approximately $1,385 (10% + fees) to Connie's, and we post the full $10,000 bond.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-brand-red">
                    Cash Bonds
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Pay the full bail amount directly to the court in cash or money order. This is refunded when the case concludes (minus any court fees), assuming all court appearances are made.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Note:</strong> Most people don't have thousands in cash available, making surety bonds the practical choice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-brand-red">
                    Property Bonds
                  </h3>
                  <p className="text-gray-700">
                    Real estate equity can be pledged as collateral directly to the court. This requires a complex legal process, title verification, and can take several days—generally not practical for immediate release.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Courthouse Information */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <Scale className="h-12 w-12 text-brand-red" />
              <h2 id="courthouse-information" className="text-4xl font-black uppercase tracking-tight">
                DeKalb County Courthouse
              </h2>
            </div>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <p className="text-xl mb-6">
                  After release, the defendant must appear at the DeKalb County Courthouse for all scheduled court dates.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-brand-red shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">Address</h3>
                        <p className="text-gray-700">
                          300 Grand Avenue SW<br />
                          Fort Payne, AL 35967
                        </p>
                        <a 
                          href="https://www.google.com/maps/place/300+Grand+Avenue+SW,+Fort+Payne,+AL+35967"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-red hover:underline mt-2 inline-block"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-6 w-6 text-brand-red shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">Phone</h3>
                        <a href="tel:2568455700" className="text-gray-700 hover:text-brand-red">
                          (256) 845-5700
                        </a>
                        <p className="text-gray-600 text-sm mt-1">Circuit Clerk's Office</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mt-6">
                  <p className="text-lg font-semibold text-red-900">
                    <strong>Missing a court date will result in bond forfeiture</strong>, a warrant for arrest, and additional charges. Mark all court dates on your calendar immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* Cities Served */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 id="cities-served" className="text-4xl font-black uppercase tracking-tight mb-8">
              DeKalb County Cities & Areas We Serve
            </h2>

            <p className="text-xl mb-8">
              Connie's Bail Bonding serves all of DeKalb County. If the arrest happened anywhere in DeKalb County, the defendant goes to the Fort Payne jail, and we can post bail immediately.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Fort Payne', 'Rainsville', 'Henagar', 'Fyffe', 'Pisgah', 'Valley Head', 'Ider', 'Geraldine', 'Collinsville', 'Mentone', 'Sylvania', 'Crossville'].map((city) => (
                <Card key={city} className="border-2 border-gray-200">
                  <CardContent className="p-4 text-center">
                    <p className="font-bold text-lg">{city}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 id="faqs" className="text-4xl font-black uppercase tracking-tight mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div>
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Emergency CTA */}
      <Section variant="primary">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
              Need to Post Bail Right Now?
            </h2>
            <p className="text-xl mb-8">
              We're available 24/7 to post bail at DeKalb County Jail. Call anytime—we answer every call.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                className="group flex items-center justify-between p-6 bg-white border-2 border-black hover:border-brand-red hover:bg-black transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                    {phoneNumbers.richard.name}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-black group-hover:text-white transition-colors">
                    {phoneNumbers.richard.number}
                  </div>
                </div>
                <Phone className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </a>

              <a
                href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`}
                className="group flex items-center justify-between p-6 bg-white border-2 border-black hover:border-brand-red hover:bg-black transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                    {phoneNumbers.connie.name}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-black group-hover:text-white transition-colors">
                    {phoneNumbers.connie.number}
                  </div>
                </div>
                <Phone className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </a>

              <a
                href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`}
                className="group flex items-center justify-between p-6 bg-white border-2 border-black hover:border-brand-red hover:bg-black transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                    {phoneNumbers.toni.name}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-black group-hover:text-white transition-colors">
                    {phoneNumbers.toni.number}
                  </div>
                </div>
                <Phone className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Related Guides */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">
              Related Guides
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/bail-bonds-guide/how-bail-works-alabama" className="group">
                <Card className="h-full border-2 border-gray-200 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Scale className="h-12 w-12 text-brand-red mb-4" />
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                      How Bail Works in Alabama
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Learn the step-by-step bail process from arrest to release.
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-red font-semibold group-hover:gap-3 transition-all">
                      Read Guide
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/bail-bonds-guide/bail-costs-alabama" className="group">
                <Card className="h-full border-2 border-gray-200 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <DollarSign className="h-12 w-12 text-brand-red mb-4" />
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                      Bail Costs & Fees
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Understand the 10% premium, state fees, and what you'll actually pay.
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-red font-semibold group-hover:gap-3 transition-all">
                      Read Guide
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/bail-bonds-guide/cosigner-responsibilities" className="group">
                <Card className="h-full border-2 border-gray-200 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-brand-red mb-4" />
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                      Cosigner Responsibilities
                    </h3>
                    <p className="text-gray-700 mb-4">
                      What you're agreeing to when you cosign a bail bond.
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-red font-semibold group-hover:gap-3 transition-all">
                      Read Guide
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default DeKalbCountyJailGuide;
