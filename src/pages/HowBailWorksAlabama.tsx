import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { FAQList } from "@/components/FAQItem";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnswerBox } from "@/components/AnswerBox";
import { StatisticBox } from "@/components/StatisticBox";
import { ReadingMeta } from "@/components/ReadingMeta";
import { TableOfContents } from "@/components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, DollarSign, Building, Users, Phone, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { getArticleSchema, getFAQSchema, getCustomHowToSchema, getSpeakableSchema, getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schemaUtils";
import howBailWorksHeroBg from "@/assets/how-bail-works-hero-bg.jpg";

const HowBailWorksAlabama = () => {
  const bailProcessSteps = [
    {
      name: "Arrest & Booking",
      text: "After arrest, the defendant is taken to the county jail for booking. This includes fingerprinting, photographing, and recording personal information. Booking typically takes 1-3 hours."
    },
    {
      name: "Bail Amount Set",
      text: "A judge or magistrate sets the bail amount based on the charges, criminal history, flight risk, and community ties. Alabama has bail schedules for common offenses, but judges have discretion to adjust amounts."
    },
    {
      name: "Bail Options Explained",
      text: "Once bail is set, you have options: pay the full amount in cash to the court, use a bail bondsman (pay 10% premium), or post property as collateral. Most people use a bail bondsman."
    },
    {
      name: "Posting Bail",
      text: "Contact a licensed bail bondsman who will prepare the paperwork. You'll pay the premium (typically 10% of bail amount) plus state fees. The bondsman posts the bond with the jail."
    },
    {
      name: "Release Processing",
      text: "Once the bond is received and verified, the jail processes the release. Alabama law requires prompt release. Actual time varies from 1-8 hours depending on the facility and time of day."
    },
    {
      name: "Court Appearances",
      text: "The defendant must appear at ALL scheduled court dates. Missing a court date triggers bond forfeiture, a warrant for arrest, and financial liability for the cosigner."
    }
  ];

  const faqs = [
    {
      question: "Can you bail someone out of jail at night in Alabama?",
      answer: "Yes. Bail bondsmen like Connie's Bail Bonding operate 24/7. However, jail release processing may be slower overnight due to reduced staff."
    },
    {
      question: "How much does bail cost for a felony in Alabama?",
      answer: "Felony bail amounts vary widely based on the specific charge and circumstances—from $5,000 for lower-level felonies to $100,000+ for serious violent crimes. You'll pay 10% to a bondsman plus state fees."
    },
    {
      question: "Can bail be denied in Alabama?",
      answer: "Yes. Bail can be denied for capital offenses (punishable by death or life without parole) and in some cases where the defendant poses an extreme flight risk or danger to the community."
    },
    {
      question: "What's the difference between bail and bond?",
      answer: '"Bail" is the amount set by the court. A "bond" is the method used to pay it. When you use a bail bondsman, they provide a "surety bond" guaranteeing the full bail amount.'
    },
    {
      question: "Do you get bail money back in Alabama?",
      answer: "If you paid cash bail directly to the court and the defendant appeared at all hearings, yes—it's refunded when the case ends (minus any fees). The 10% premium paid to a bail bondsman is NOT refundable."
    }
  ];

  const bailTypes = [
    {
      title: "Cash Bond",
      what: "Pay the full bail amount directly to the court",
      pros: "Refundable if defendant appears at all court dates",
      cons: "Requires full amount upfront; money tied up until case ends"
    },
    {
      title: "Surety Bond (Bail Bond)",
      what: "A bail bondsman posts the full amount; you pay 10% premium",
      pros: "Only need 10% upfront; fast processing",
      cons: "Premium is non-refundable; cosigner assumes liability"
    },
    {
      title: "Property Bond",
      what: "Real estate equity pledged as collateral to the court",
      pros: "No cash outlay if you have property equity",
      cons: "Complex process; property at risk if defendant skips; must be Alabama property"
    },
    {
      title: "Release on Own Recognizance (ROR)",
      what: "Released without paying bail, based on promise to appear",
      pros: "No cost",
      cons: "Only granted for minor offenses with low flight risk; judge's discretion"
    }
  ];

  const relatedGuides = [
    {
      title: "Bail Costs & Fees Explained",
      description: "Understand the 10% premium, state fees, and what you'll actually pay.",
      url: "/bail-bonds-guide/bail-costs-alabama",
      icon: DollarSign
    },
    {
      title: "DeKalb County Jail Guide",
      description: "Everything you need to know about posting bail at DeKalb County Detention Center.",
      url: "/bail-bonds-guide/dekalb-county-jail-guide",
      icon: Building
    },
    {
      title: "Cosigner Responsibilities",
      description: "What you're agreeing to when you cosign a bail bond.",
      url: "/bail-bonds-guide/cosigner-responsibilities",
      icon: Users
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "How Bail Works in Alabama", url: "/bail-bonds-guide/how-bail-works-alabama" }
  ];

  const schemas = [
    getArticleSchema(
      "How Bail Works in Alabama",
      "Learn exactly how bail works in Alabama. From arrest to release, understand the bail process, types of bail, who sets bail amounts, and how to get someone out of jail fast.",
      "/bail-bonds-guide/how-bail-works-alabama"
    ),
    getFAQSchema(faqs),
    getCustomHowToSchema(
      "How to Bail Someone Out of Jail in Alabama",
      "Step-by-step guide to the Alabama bail process from arrest to release",
      bailProcessSteps
    ),
    getSpeakableSchema(),
    getBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema()
  ];

  return (
    <>
      <SEO
        title="How Bail Works in Alabama | Step-by-Step Guide | Connie's Bail Bonding"
        description="Learn exactly how bail works in Alabama. From arrest to release, understand the bail process, types of bail, who sets bail amounts, and how to get someone out of jail fast."
        canonical="/bail-bonds-guide/how-bail-works-alabama"
        schema={schemas}
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <StickyCallButton />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
      <section 
        className="relative flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${howBailWorksHeroBg})` }}
      >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl py-20 md:py-32">
              {/* Breadcrumb */}
              <nav className="text-sm mb-8">
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
                <span className="mx-2 text-gray-600">/</span>
                <a href="/bail-bonds-guide" className="text-gray-400 hover:text-white transition-colors">Bail Bonds Guide</a>
                <span className="mx-2 text-gray-600">/</span>
                <span className="text-white font-medium">How Bail Works in Alabama</span>
              </nav>

              {/* Hero */}
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
                  How Bail Works in Alabama
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
                  When someone is arrested in Alabama, bail is the process that allows them to be released from jail while awaiting trial. Understanding how bail works helps you act quickly and make informed decisions during a stressful time. Here's everything you need to know about the Alabama bail process.
                </p>
                
                {/* Reading Meta */}
                <ReadingMeta 
                  author="Connie"
                  licenseNumber="B0092"
                  readingTime={8}
                />

                {/* Answer Box */}
                <AnswerBox 
                  question="How does bail work in Alabama?"
                  answer="After arrest and booking (1-3 hours), a judge sets bail based on charges and risk factors. You can pay 10% through a bail bondsman plus state fees, or pay the full amount in cash to the court. Once posted, the jail processes release (typically 2-8 hours). The defendant must appear at all court dates or the bail is forfeited."
                  source="Alabama Code § 15-13-106"
                />

                <TableOfContents 
                  items={[
                    { id: 'what-is-bail', title: 'What Is Bail?' },
                    { id: 'the-alabama-bail-process', title: 'The Alabama Bail Process Step-by-Step' },
                    { id: 'types-of-bail', title: 'Types of Bail in Alabama' },
                    { id: 'who-sets-bail', title: 'Who Sets Bail in Alabama?' },
                    { id: 'how-long-does-bail-take', title: 'How Long Does Bail Take?' },
                    { id: 'what-alabama-law-says', title: 'What Alabama Law Says' },
                    { id: 'faqs', title: 'Frequently Asked Questions' },
                  ]}
                />
              </AnimatedSection>
            </div>
          </section>

          <Section>

            {/* What Is Bail */}
            <AnimatedSection delay={0.1}>
              <h2 id="what-is-bail" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                What Is Bail?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                Bail is a financial guarantee to the court that a defendant will appear for all scheduled court dates. When you post bail, you're essentially promising the court that the defendant will show up. If they do, the bail obligation ends when the case concludes. If they don't, the bail is forfeited.
              </p>
            </AnimatedSection>

            {/* The Process Step-by-Step */}
            <AnimatedSection delay={0.2}>
              <h2 id="the-alabama-bail-process" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 mt-16">
                How Does the Alabama Bail Process Work?
              </h2>
              
              <StatisticBox 
                statistic="Booking typically takes 1-3 hours"
                context="This is the first step after arrest before bail can even be posted."
                citation="DeKalb County Sheriff's Office"
              />
              
              <StatisticBox 
                statistic="Release processing: 2-8 hours at DeKalb County Jail"
                context="After bail is posted, this is how long it takes for the inmate to be released."
                citation="Local operational data"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bailProcessSteps.map((step, index) => (
                  <AnimatedCard key={index} index={index}>
                    <Card className="h-full border-2 border-gray-200 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold uppercase tracking-tight pt-2">
                            {step.name}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {step.text}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>

            {/* Types of Bail */}
            <AnimatedSection delay={0.3}>
              <h2 id="types-of-bail" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                Types of Bail in Alabama
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-8">
                Alabama law (Ala. Code § 15-13-111) recognizes several forms of bail:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bailTypes.map((type, index) => (
                  <AnimatedCard key={index} index={index}>
                    <Card className="h-full border-2 border-gray-200 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-brand-red">
                          {type.title}
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <p className="font-bold text-gray-900 mb-1">What it is:</p>
                            <p className="text-gray-700">{type.what}</p>
                          </div>
                          <div>
                            <p className="font-bold text-green-600 mb-1 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Pros:
                            </p>
                            <p className="text-gray-700">{type.pros}</p>
                          </div>
                          <div>
                            <p className="font-bold text-red-600 mb-1 flex items-center gap-2">
                              <XCircle className="w-4 h-4" />
                              Cons:
                            </p>
                            <p className="text-gray-700">{type.cons}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>

            {/* Who Sets Bail */}
            <AnimatedSection delay={0.4}>
              <h2 id="who-sets-bail" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                Who Sets Bail in Alabama?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                Bail is set by a judge or magistrate, typically at the defendant's first court appearance (initial appearance or arraignment). For common offenses, jails may have a pre-set bail schedule allowing release before seeing a judge. Factors affecting bail amount include:
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Severity of the charges</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Defendant's criminal history</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Risk of fleeing</strong> (flight risk)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Ties to the community</strong> (job, family, property)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Potential danger to the community</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Defendant's financial resources</strong></span>
                </li>
              </ul>
            </AnimatedSection>

            {/* How Long */}
            <AnimatedSection delay={0.5}>
              <h2 id="how-long-does-bail-take" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                How Long Does Bail Take?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                The timeline from arrest to release varies:
              </p>
              <div className="bg-gray-50 border-l-4 border-brand-red p-6 space-y-3 max-w-4xl">
                <p className="text-gray-700"><strong className="text-brand-red">Booking:</strong> 1-3 hours after arrest</p>
                <p className="text-gray-700"><strong className="text-brand-red">Bail set:</strong> May be immediate (bail schedule) or require a hearing (24-72 hours)</p>
                <p className="text-gray-700"><strong className="text-brand-red">Posting bail:</strong> 30 minutes to 2 hours with a bondsman</p>
                <p className="text-gray-700"><strong className="text-brand-red">Release processing:</strong> 1-8 hours depending on jail</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-6">
                At DeKalb County Jail, most releases occur within 2-8 hours of posting bond. Cherokee County Jail is similar. Weekend and overnight arrests may take longer due to limited staff.
              </p>
            </AnimatedSection>

            {/* Alabama Law */}
            <AnimatedSection delay={0.6}>
              <h2 id="what-alabama-law-says" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                What Alabama Law Says
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                Alabama's bail process is governed by the Code of Alabama, Title 15, Chapter 13. Key provisions:
              </p>
              <ul className="space-y-4 max-w-4xl">
                <li className="flex items-start gap-3">
                  <Scale className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Ala. Code § 15-13-107:</strong>
                    <span className="text-gray-700"> Officials must release a defendant once proper bail is posted</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Ala. Code § 15-13-111:</strong>
                    <span className="text-gray-700"> Defines acceptable forms of bail (cash, surety, property)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Ala. Code § 12-19-311:</strong>
                    <span className="text-gray-700"> Establishes state bail bond fees ($35 + 3.5% of bail amount)</span>
                  </div>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-6">
                Alabama also requires bail bondsmen to be licensed through the Alabama Professional Bail Bonding Board (APBB). Always verify your bondsman is licensed.
              </p>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection delay={0.7}>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 mt-16">
                Frequently Asked Questions
              </h2>
              <div className="max-w-4xl">
                <FAQList faqs={faqs} />
              </div>
            </AnimatedSection>

            {/* Emergency CTA */}
            <AnimatedSection delay={0.8}>
              <div className="bg-black border-t-4 border-brand-red p-8 md:p-12 mt-16">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 text-center">
                  Need to Post Bail Now?
                </h2>
                <p className="text-white text-lg text-center mb-8 max-w-3xl mx-auto">
                  We're available 24/7 and can start the process immediately. Call now for fast, confidential service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <a
                    href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                    className="group flex items-center justify-between p-6 bg-white border-2 border-white hover:border-brand-red hover:bg-brand-red transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                        {phoneNumbers.richard.name}
                      </div>
                      <div className="text-xl font-black text-black group-hover:text-white transition-colors">
                        {phoneNumbers.richard.number}
                      </div>
                    </div>
                    <Phone className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`}
                    className="group flex items-center justify-between p-6 bg-white border-2 border-white hover:border-brand-red hover:bg-brand-red transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                        {phoneNumbers.connie.name}
                      </div>
                      <div className="text-xl font-black text-black group-hover:text-white transition-colors">
                        {phoneNumbers.connie.number}
                      </div>
                    </div>
                    <Phone className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`}
                    className="group flex items-center justify-between p-6 bg-white border-2 border-white hover:border-brand-red hover:bg-brand-red transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                        {phoneNumbers.toni.name}
                      </div>
                      <div className="text-xl font-black text-black group-hover:text-white transition-colors">
                        {phoneNumbers.toni.number}
                      </div>
                    </div>
                    <Phone className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Related Guides */}
            <AnimatedSection delay={0.9}>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 mt-16">
                Related Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedGuides.map((guide, index) => {
                  const Icon = guide.icon;
                  return (
                    <AnimatedCard key={index} index={index}>
                      <Link to={guide.url} className="block h-full">
                        <Card className="h-full border-2 border-gray-200 hover:border-brand-red hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                          <CardContent className="p-6">
                            <Icon className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold uppercase tracking-tight mb-3">
                              {guide.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {guide.description}
                            </p>
                            <span className="text-brand-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                              Read Guide <ArrowRight className="w-4 h-4" />
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    </AnimatedCard>
                  );
                })}
              </div>
            </AnimatedSection>
          </Section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HowBailWorksAlabama;
