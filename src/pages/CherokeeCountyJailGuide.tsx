import { Navigation } from "@/components/Navigation";
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
    question: "How do I check if someone is in Cherokee County Jail?",
    answer: "Call (256) 927-3365 or check the Cherokee County Sheriff's website for their inmate roster."
  },
  {
    question: "Can I bail someone out of Cherokee County Jail on the weekend?",
    answer: "Yes. The jail accepts bonds 24/7 including weekends and holidays. Call Connie's anytime—we're always available."
  },
  {
    question: "Is Cherokee County Jail different from DeKalb County?",
    answer: "Each county has its own jail and court system. If the arrest happened in Cherokee County, they go to Cherokee County Jail in Centre. DeKalb County arrests go to the jail in Fort Payne. We serve both counties."
  },
  {
    question: "How far is Cherokee County Jail from Fort Payne?",
    answer: "Centre is about 25-30 minutes from Fort Payne. Connie's Bail Bonding serves both counties and can post bail at Cherokee County Jail promptly."
  },
  {
    question: "What if there's a warrant in another county?",
    answer: "If the defendant has an outstanding warrant elsewhere, they may be held even after bail is posted until the other jurisdiction is resolved. The jail can explain any holds affecting release."
  }
];

const schemas = [
  getArticleSchema(
    "Cherokee County Jail Bail Guide",
    "How to post bail at Cherokee County Detention Center in Centre, AL. Facility address, bail process, release times, and what to expect when bailing someone out.",
    "/bail-bonds-guide/cherokee-county-jail-guide"
  ),
  getFAQSchema(faqs),
  getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "Cherokee County Jail Guide", url: "/bail-bonds-guide/cherokee-county-jail-guide" }
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

const CherokeeCountyJailGuide = () => {
  return (
    <>
      <SEO
        title="Cherokee County Jail Bail Guide | Centre, AL | Connie's Bail Bonding"
        description="How to post bail at Cherokee County Detention Center in Centre, AL. Facility address, bail process, release times, and what to expect when bailing someone out."
        canonical="/bail-bonds-guide/cherokee-county-jail-guide"
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
            <span className="text-gray-900 font-semibold">Cherokee County Jail Guide</span>
          </nav>
        </div>

        {/* Hero Section */}
        <AnimatedSection className="container mx-auto px-4 pb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8">
            Cherokee County Jail Bail Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            When someone is arrested in Cherokee County, Alabama, they're taken to the Cherokee County Detention Center in Centre. Here's everything you need to know about posting bail and getting your loved one released.
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
                  <h3 className="text-2xl font-bold uppercase">Cherokee County Detention Center</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Address:</strong>
                      <span className="text-gray-700">110 Cedar Bluff Road, Centre, AL 35960</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Phone:</strong>
                      <a href="tel:256-927-3365" className="text-brand-red hover:underline">(256) 927-3365</a>
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
                      <span className="text-gray-700">24 hours</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=110+Cedar+Bluff+Road,+Centre,+AL+35960"
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
              How to Post Bail at Cherokee County Jail
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {[
                {
                  number: "1",
                  title: "Confirm the Arrest",
                  description: "Call the jail at (256) 927-3365 to confirm the person is in custody. You'll need their full legal name and date of birth. Ask for the booking number and bail amount if available."
                },
                {
                  number: "2",
                  title: "Determine Bail Amount",
                  description: "Jail staff can provide the bail amount once it's set. Cherokee County may use a bail schedule for common offenses. For felonies or serious charges, the defendant may need a bail hearing first."
                },
                {
                  number: "3",
                  title: "Contact Connie's Bail Bonding",
                  description: "Call us at (256) 601-2041. We serve all of Cherokee County and can post bail at the Centre jail 24/7. Have the defendant's information and bail amount ready."
                },
                {
                  number: "4",
                  title: "Sign Paperwork & Pay Premium",
                  description: "As the cosigner (indemnitor), you'll sign the bail bond agreement and pay the 10% premium plus state fees. We can handle paperwork by phone, fax, or in person."
                },
                {
                  number: "5",
                  title: "Bond Posted at Jail",
                  description: "We file the bond with Cherokee County Detention Center. The jail verifies the bond and begins release processing."
                },
                {
                  number: "6",
                  title: "Release",
                  description: "Cherokee County Jail release times are typically 2-10 hours depending on jail activity and time of day."
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
              Release Times at Cherokee County Jail
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-6">
                How long until release after posting bail at Cherokee County Jail?
              </p>
              <div className="bg-white border-l-4 border-brand-red p-6 mb-6">
                <p className="text-2xl font-bold text-brand-red mb-2">Typical release time: 2-10 hours</p>
              </div>
              <p className="text-gray-700 mb-6">
                Cherokee County is a smaller facility, which can mean faster processing during slow periods but limited staff during nights and weekends.
              </p>
              <div>
                <h3 className="text-xl font-bold uppercase mb-4">Factors affecting release:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Staffing levels:</strong> Fewer officers on duty overnight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Booking activity:</strong> High-arrest periods cause delays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Bond verification:</strong> Paperwork must be reviewed and approved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <span><strong>Outstanding holds:</strong> Warrants from other jurisdictions can delay release</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-6 italic">
                If it's been more than 10 hours with no update, contact your bondsman to follow up.
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
                Cherokee County Detention Center accepts:
              </p>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-brand-red" />
                    Surety Bonds
                  </h3>
                  <p className="text-gray-700">Through licensed bail bond companies (fastest method)</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-brand-red" />
                    Cash Bonds
                  </h3>
                  <p className="text-gray-700">Full bail amount paid to the jail</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-2">
                    <Building className="h-6 w-6 text-brand-red" />
                    Property Bonds
                  </h3>
                  <p className="text-gray-700">Must be approved by the court; requires licensed bondsman or attorney involvement, and two signatures on property bond paperwork</p>
                </div>
              </div>
              <p className="text-gray-700 mt-6 italic">
                Note: Cherokee County requires property bonds to go through a licensed bail bond company or involve additional court approval. Surety bonds through a bondsman are the simplest option.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Courthouse Information */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Cherokee County Courthouse Information
            </h2>
            <Card className="border-2 border-gray-200 bg-white max-w-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-8 w-8 text-brand-red" />
                  <h3 className="text-2xl font-bold uppercase">Cherokee County Courthouse</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Address:</strong>
                      <span className="text-gray-700">100 Main Street, Centre, AL 35960</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-red mt-1 shrink-0" />
                    <div>
                      <strong className="block">Circuit Clerk Phone:</strong>
                      <a href="tel:256-927-3637" className="text-brand-red hover:underline">(256) 927-3637</a>
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
                  All court appearances for Cherokee County cases are held here. The defendant must attend every scheduled hearing—missing court triggers bond forfeiture and a warrant.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Cities Served */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Cities & Areas We Serve in Cherokee County
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-6">
                Connie's Bail Bonding provides bail bonds throughout Cherokee County:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Centre • Cedar Bluff • Leesburg • Gaylesville • Sand Rock • Round Mountain • Broomtown • Spring Garden • Piedmont (partial)
              </p>
              <p className="text-gray-700 mt-6 italic">
                Arrests anywhere in Cherokee County are processed through the Cherokee County Detention Center in Centre.
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
              Posting Bail in Cherokee County?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We serve Centre and all of Cherokee County. Call now—day or night, we'll get the process started.
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
                  title: "DeKalb County Jail Guide",
                  description: "How to post bail at DeKalb County Detention Center",
                  link: "/bail-bonds-guide/dekalb-county-jail-guide"
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

        {/* Footer */}
        <footer className="bg-black text-white border-t-4 border-brand-red py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold uppercase mb-4">Contact Us</h3>
                <div className="space-y-3">
                  {Object.values(phoneNumbers).map((contact) => (
                    <div key={contact.number} className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-red" />
                      <a href={`tel:${contact.number.replace(/[^0-9]/g, '')}`} className="hover:text-brand-red transition-colors">
                        {contact.name}: {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-brand-red transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-brand-red transition-colors">About</a></li>
                  <li><a href="/contact" className="hover:text-brand-red transition-colors">Contact</a></li>
                  <li><a href="/faq" className="hover:text-brand-red transition-colors">FAQ</a></li>
                  <li><a href="/bail-bonds-guide" className="hover:text-brand-red transition-colors">Bail Guide</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase mb-4">Legal</h3>
                <p className="text-sm text-gray-400">Licensed & Bonded in Alabama</p>
                <p className="text-sm text-gray-400 mt-2">Serving DeKalb & Cherokee Counties</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Connie's Bail Bonding. All rights reserved.</p>
              <p className="mt-2">Available 24/7 for Emergency Bail Bonds</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CherokeeCountyJailGuide;
