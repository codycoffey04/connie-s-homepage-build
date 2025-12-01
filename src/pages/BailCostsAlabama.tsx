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
import { Scale, Users, CreditCard, Phone, ShieldCheck, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import { getArticleSchema, getFAQSchema, getSpeakableSchema, getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schemaUtils";
import bailCostsHeroBg from "@/assets/bail-costs-hero-bg.jpg";

const BailCostsAlabama = () => {
  const faqs = [
    {
      question: "Why is the bail bond premium non-refundable?",
      answer: "The premium is the bondsman's fee for their service—posting the full bail amount and taking on the risk that the defendant might not appear. Once the defendant is released, the service is complete."
    },
    {
      question: "Can I negotiate the 10% premium?",
      answer: "The 10% rate is industry standard, and Alabama regulations govern bondsman practices. Some bondsmen may offer payment plans, but significantly lower premiums are rare and could be a red flag."
    },
    {
      question: "What happens if I can't afford the premium?",
      answer: "Ask about payment plans. You may also explore whether family members can help, or whether an attorney can request a bail reduction. Property bonds are another option if you have real estate equity."
    },
    {
      question: "Do I pay the bail bond company or the court?",
      answer: "If using a bondsman, you pay them directly (premium + state fees). They then post the bond with the court. If posting cash bail, you pay the court directly the full bail amount."
    },
    {
      question: "Is there a minimum bail bond fee?",
      answer: "Most bondsmen have a minimum charge (often $75-$100) even for very low bail amounts. State fees also have minimums ($100 misdemeanor / $150 felony)."
    }
  ];

  const relatedGuides = [
    {
      title: "How Bail Works in Alabama",
      description: "Learn the step-by-step bail process from arrest to release.",
      url: "/bail-bonds-guide/how-bail-works-alabama",
      icon: Scale
    },
    {
      title: "Cosigner Responsibilities",
      description: "What you're agreeing to when you cosign a bail bond.",
      url: "/bail-bonds-guide/cosigner-responsibilities",
      icon: Users
    },
    {
      title: "Types of Bail Bonds",
      description: "Cash bonds, surety bonds, property bonds—which is right for your situation?",
      url: "/bail-bonds-guide/types-of-bail-bonds",
      icon: Scale
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "Bail Costs in Alabama", url: "/bail-bonds-guide/bail-costs-alabama" }
  ];

  const schemas = [
    getArticleSchema(
      "Bail Bond Costs & Fees in Alabama",
      "How much does a bail bond cost in Alabama? Learn about the 10% premium, state-mandated fees, payment plans, and exactly what you'll pay to bail someone out.",
      "/bail-bonds-guide/bail-costs-alabama"
    ),
    getFAQSchema(faqs),
    getSpeakableSchema(),
    getBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema()
  ];

  return (
    <>
      <SEO
        title="Bail Bond Costs in Alabama | Fees Explained | Connie's Bail Bonding"
        description="How much does a bail bond cost in Alabama? Learn about the 10% premium, state-mandated fees, payment plans, and exactly what you'll pay to bail someone out."
        canonical="/bail-bonds-guide/bail-costs-alabama"
        schema={schemas}
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <StickyCallButton />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section 
            className="relative min-h-[70vh] flex items-center text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${bailCostsHeroBg})` }}
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
                <span className="text-white font-medium">Bail Costs in Alabama</span>
              </nav>

              {/* Hero */}
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
                  Bail Bond Costs & Fees in Alabama
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
                  Understanding what you'll actually pay to bail someone out is crucial. Alabama has both bondsman premiums and state-mandated fees. Here's a complete breakdown so you know exactly what to expect—no surprises.
                </p>
                
                {/* Reading Meta */}
                <ReadingMeta 
                  author="Connie"
                  licenseNumber="B0092"
                  readingTime={7}
                />

                {/* Answer Box */}
                <AnswerBox 
                  question="How much does a bail bond cost in Alabama?"
                  answer="A bail bond in Alabama costs 10% of the total bail amount (the bondsman's premium) plus state-mandated fees ($35 + 3.5% of bail, with minimums of $100 for misdemeanors and $150 for felonies). For example, a $10,000 bail would cost approximately $1,385 total."
                  source="Ala. Code § 12-19-311"
                />

                <TableOfContents 
                  items={[
                    { id: 'bail-bond-premium', title: 'Bail Bond Premium (10%)' },
                    { id: 'state-fees', title: 'State Bail Bond Fees' },
                    { id: 'total-cost-examples', title: 'Total Cost Examples' },
                    { id: 'payment-options', title: 'Payment Options Available' },
                    { id: 'what-affects-bail', title: 'What Affects Your Bail Amount?' },
                    { id: 'faqs', title: 'Frequently Asked Questions' },
                  ]}
                />
              </AnimatedSection>
            </div>
          </section>

          <Section>

            {/* 10% Premium */}
            <AnimatedSection delay={0.1}>
              <h2 id="bail-bond-premium" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                How Much Is the Bail Bond Premium?
              </h2>
              
              <StatisticBox 
                statistic="10% is the industry standard bail bond premium in Alabama"
                context="This rate is consistent across most bondsmen and is non-refundable."
                citation="Alabama bail industry standard"
              />
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                When you use a bail bondsman, you pay a premium—typically 10% of the total bail amount. This is the industry standard in Alabama and across most of the country.
              </p>
              <div className="bg-brand-red/10 border-l-4 border-brand-red p-6 max-w-4xl mb-6">
                <p className="text-lg font-bold text-gray-900 mb-2">Example:</p>
                <p className="text-gray-700">If bail is set at <strong>$10,000</strong>, your premium to the bondsman is <strong className="text-brand-red">$1,000</strong>.</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                This premium is <strong>non-refundable</strong>. It's the fee for the bondsman's service in securing the defendant's release. Even if the case is dismissed or the defendant is found not guilty, you do not get the premium back. The bondsman earned it by taking on the risk and posting the full bail amount.
              </p>
            </AnimatedSection>

            {/* State Fees */}
            <AnimatedSection delay={0.2}>
              <h2 id="state-fees" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                What Are Alabama's State Bail Bond Fees?
              </h2>
              
              <StatisticBox 
                statistic="Alabama state fees: $35 + 3.5% of bail (min $100 misd/$150 felony)"
                context="These mandatory fees are separate from the bondsman's premium."
                citation="Ala. Code § 12-19-311"
                citationUrl="https://casetext.com/statute/code-of-alabama/title-12-courts/chapter-19-bail-bond-costs-and-surcharges"
              />
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                In addition to the bondsman's premium, Alabama law (Ala. Code § 12-19-311) requires state fees on every bail bond:
              </p>
              <div className="overflow-x-auto max-w-4xl">
                <table className="w-full border-2 border-gray-300">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="p-4 text-left font-black uppercase tracking-tight">Fee Type</th>
                      <th className="p-4 text-left font-black uppercase tracking-tight">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-4 font-medium">Administrative Fee</td>
                      <td className="p-4">$35 flat</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4 font-medium">Percentage Fee</td>
                      <td className="p-4">3.5% of bail amount</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-4 font-medium">Minimum (Misdemeanor)</td>
                      <td className="p-4 font-bold text-brand-red">$100 total state fees</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4 font-medium">Minimum (Felony)</td>
                      <td className="p-4 font-bold text-brand-red">$150 total state fees</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-4 font-medium">Maximum (Misdemeanor)</td>
                      <td className="p-4 font-bold text-brand-red">$450 total state fees</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium">Maximum (Felony)</td>
                      <td className="p-4 font-bold text-brand-red">$750 total state fees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-6">
                These fees are collected when bail is posted and go to state funds—they're separate from the bondsman's premium.
              </p>
            </AnimatedSection>

            {/* Total Cost Examples */}
            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                Total Cost Examples
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                Here's what you'd actually pay for common bail amounts:
              </p>
              <div className="overflow-x-auto max-w-5xl">
                <table className="w-full border-2 border-gray-300">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="p-4 text-left font-black uppercase tracking-tight">Bail Amount</th>
                      <th className="p-4 text-left font-black uppercase tracking-tight">10% Premium</th>
                      <th className="p-4 text-left font-black uppercase tracking-tight">State Fees</th>
                      <th className="p-4 text-left font-black uppercase tracking-tight">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-4 font-medium">$1,000</td>
                      <td className="p-4">$100</td>
                      <td className="p-4">$100 (minimum)</td>
                      <td className="p-4 font-bold text-brand-red text-lg">$200</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4 font-medium">$2,500</td>
                      <td className="p-4">$250</td>
                      <td className="p-4">$122.50</td>
                      <td className="p-4 font-bold text-brand-red text-lg">$372.50</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-4 font-medium">$5,000</td>
                      <td className="p-4">$500</td>
                      <td className="p-4">$210</td>
                      <td className="p-4 font-bold text-brand-red text-lg">$710</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4 font-medium">$10,000</td>
                      <td className="p-4">$1,000</td>
                      <td className="p-4">$385</td>
                      <td className="p-4 font-bold text-brand-red text-lg">$1,385</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-4 font-medium">$25,000</td>
                      <td className="p-4">$2,500</td>
                      <td className="p-4">$750 (felony max)</td>
                      <td className="p-4 font-bold text-brand-red text-lg">$3,250</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium">$50,000</td>
                      <td className="p-4">$5,000</td>
                      <td className="p-4">$750 (felony max)</td>
                      <td className="p-4 font-bold text-brand-red text-lg">$5,750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base text-gray-600 leading-relaxed max-w-5xl mt-4 italic">
                Note: Some bondsmen have minimum charges (often $75-$100) regardless of bail amount. State fee caps mean very high bail amounts don't result in proportionally higher state fees.
              </p>
            </AnimatedSection>

            {/* Payment Options */}
            <AnimatedSection delay={0.4}>
              <h2 id="payment-options" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                Payment Options
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                Most bail bond companies, including Connie's Bail Bonding, offer multiple payment methods:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-6">
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-brand-red" />
                      Accepted Payment Types
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Cash</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Credit cards (Visa, Mastercard, Discover)</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Debit cards</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Payment plans (for qualifying clients)</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-brand-red" />
                      Payment Plans
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you can't pay the full premium upfront, ask about financing. Many bondsmen offer payment plans where you pay a portion down and the rest over time. You'll typically need to qualify based on income or collateral. <strong>Always get the terms in writing.</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* What Affects Bail */}
            <AnimatedSection delay={0.5}>
              <h2 id="what-affects-bail" className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                What Affects Bail Amount?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                The bail amount itself (which determines your premium) is set by a judge based on:
              </p>
              <ul className="space-y-3 max-w-4xl">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>The charges:</strong> More serious crimes = higher bail</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Criminal history:</strong> Prior offenses typically mean higher bail</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Flight risk:</strong> Those likely to flee get higher bail or no bail</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Community ties:</strong> Local job, family, and property ownership can lower bail</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Public safety:</strong> Danger to the community increases bail</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-6">
                You cannot negotiate the bail amount with a bondsman—it's set by the court. But if bail seems excessive, a defense attorney can request a bail reduction hearing.
              </p>
            </AnimatedSection>

            {/* Refundable */}
            <AnimatedSection delay={0.6}>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                Are Bail Bond Fees Refundable?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                Let's be clear about what's refundable and what's not:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <Card className="border-2 border-red-300 bg-red-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6" />
                      NOT Refundable
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• The 10% premium paid to a bail bondsman (this is their fee for service)</li>
                      <li className="text-gray-700">• State-mandated fees</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-green-300 bg-green-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-green-700 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Potentially Refundable
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• Cash bail paid directly to the court (returned after case concludes if defendant appeared at all hearings, minus any court costs)</li>
                      <li className="text-gray-700">• Collateral (returned when bond is exonerated and all obligations met)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-6">
                The premium is never refunded because the bondsman fulfilled their service the moment they posted bail and the defendant was released. Whether the defendant is found guilty, not guilty, or the charges are dropped doesn't change that the bondsman did their job.
              </p>
            </AnimatedSection>

            {/* Alabama Law */}
            <AnimatedSection delay={0.7}>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                What Alabama Law Says
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                Alabama's bail bond fees are established by statute:
              </p>
              <div className="bg-gray-50 border-l-4 border-brand-red p-6 max-w-4xl">
                <p className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand-red" />
                  Ala. Code § 12-19-311
                </p>
                <p className="text-gray-700 mb-2">Sets the state fee structure:</p>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-700">• $35 administrative fee on every bond</li>
                  <li className="text-gray-700">• 3.5% of the bail amount</li>
                  <li className="text-gray-700">• Minimum $100 (misdemeanor) / $150 (felony)</li>
                  <li className="text-gray-700">• Maximum $450 (misdemeanor) / $750 (felony)</li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-6">
                These fees support state court and law enforcement funds. They're required by law and cannot be waived by the bondsman.
              </p>
            </AnimatedSection>

            {/* How to Avoid Overpaying */}
            <AnimatedSection delay={0.8}>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 mt-16">
                How to Avoid Overpaying
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                Protect yourself when posting bail:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {[
                  { number: 1, text: "Verify the bondsman is licensed — Check the Alabama Professional Bail Bonding Board (APBB) database" },
                  { number: 2, text: "Get a written fee breakdown — Premium, state fees, and any additional charges should be itemized" },
                  { number: 3, text: "Ask about payment plan terms — Interest rates, late fees, and consequences of missed payments" },
                  { number: 4, text: "Understand collateral requirements — Know exactly what you're pledging and when you get it back" },
                  { number: 5, text: "Beware of 'discount' offers — Extremely low premiums may indicate an unlicensed operator or hidden fees" }
                ].map((tip, index) => (
                  <AnimatedCard key={index} index={index}>
                    <Card className="h-full border-2 border-gray-200 hover:border-brand-red transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-black">
                            {tip.number}
                          </div>
                          <p className="text-gray-700 leading-relaxed pt-1">{tip.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection delay={0.9}>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 mt-16">
                Frequently Asked Questions About Bail Costs
              </h2>
              <div className="max-w-4xl">
                <FAQList faqs={faqs} />
              </div>
            </AnimatedSection>

            {/* Emergency CTA */}
            <AnimatedSection delay={1.0}>
              <div className="bg-black border-t-4 border-brand-red p-8 md:p-12 mt-16">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 text-center">
                  Get an Exact Quote Now
                </h2>
                <p className="text-white text-lg text-center mb-8 max-w-3xl mx-auto">
                  Call us with the bail amount and charges—we'll tell you exactly what it costs. No hidden fees, no surprises.
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
            <AnimatedSection delay={1.1}>
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

export default BailCostsAlabama;
