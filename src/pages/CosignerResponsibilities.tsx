import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { SEO } from "@/components/SEO";
import { MidPageCTA } from "@/components/MidPageCTA";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnswerBox } from "@/components/AnswerBox";
import { StatisticBox } from "@/components/StatisticBox";
import { ReadingMeta } from "@/components/ReadingMeta";
import { TableOfContents } from "@/components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Phone, Users, AlertTriangle, ShieldCheck, Scale, DollarSign, ArrowRight, ChevronDown, XCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { phoneNumbers } from "@/lib/cityUtils";
import { 
  getArticleSchema, 
  getFAQSchema, 
  getSpeakableSchema,
  getBreadcrumbSchema, 
  getOrganizationSchema 
} from "@/lib/schemaUtils";
import cosignerHeroBg from "@/assets/cosigner-hero-bg.jpg";

const faqs = [
  {
    question: "Can my wages be garnished if I cosign a bail bond?",
    answer: "Yes. If the defendant skips and you owe the forfeited bail amount, the bond company can obtain a judgment against you. Under Alabama law, up to 25% of your disposable wages can be garnished to satisfy that debt."
  },
  {
    question: "What if I cosigned but now the defendant won't talk to me?",
    answer: "Contact the bail bond company immediately. If you believe the defendant may flee or miss court, you can request to surrender them before a court date is missed. This ends your obligation."
  },
  {
    question: "Do I get my collateral back after the case is over?",
    answer: "Yes, assuming the defendant appeared at all court dates and the bond is exonerated (released by the court). The bond company returns your collateral once all obligations are complete."
  },
  {
    question: "Can I cosign for someone in another state?",
    answer: "Typically yes, but it depends on the bond company's policies. You'll still be subject to Alabama law for the bond and may need to provide additional documentation."
  },
  {
    question: "What's the difference between a cosigner and an indemnitor?",
    answer: "They're the same thing. \"Cosigner\" is the common term; \"indemnitor\" is the legal term used in bail bond contracts."
  }
];

const schemas = [
  getArticleSchema(
    "Bail Bond Cosigner Responsibilities in Alabama",
    "What does it mean to cosign a bail bond in Alabama? Understand your legal obligations, financial liability, collateral risks, and what happens if the defendant skips court.",
    "/bail-bonds-guide/cosigner-responsibilities"
  ),
  getFAQSchema(faqs),
  getSpeakableSchema(),
  getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "Cosigner Responsibilities", url: "/bail-bonds-guide/cosigner-responsibilities" }
  ]),
  getOrganizationSchema()
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

const CosignerResponsibilities = () => {
  return (
    <>
      <SEO
        title="Bail Bond Cosigner Responsibilities in Alabama | What You Need to Know"
        description="What does it mean to cosign a bail bond in Alabama? Understand your legal obligations, financial liability, collateral risks, and what happens if the defendant skips court."
        canonical="/bail-bonds-guide/cosigner-responsibilities"
        schema={schemas}
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <StickyCallButton />

        {/* Hero Section */}
      <section 
        className="relative flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${cosignerHeroBg})` }}
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
              <span className="text-white font-medium">Cosigner Responsibilities</span>
            </nav>

            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8">
                Bail Bond Cosigner Responsibilities in Alabama
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
                Cosigning a bail bond is a serious legal and financial commitment. Before you sign, you need to understand exactly what you're agreeing to. This guide explains your responsibilities, your risks, and what happens if things go wrong.
              </p>
              
              {/* Reading Meta */}
              <ReadingMeta 
                author="Richard"
                licenseNumber="S0334"
                readingTime={10}
              />

              {/* Answer Box */}
              <AnswerBox 
                question="What are cosigner responsibilities for a bail bond?"
                answer="As a cosigner (indemnitor), you guarantee two things: (1) the defendant will appear at all court dates, and (2) you will pay the full bail amount if they don't. You face financial liability including wage garnishment (up to 25% of disposable income), loss of collateral, and civil lawsuits if the defendant skips court."
                source="Alabama indemnity agreement law"
              />

              <TableOfContents 
                items={[
                  { id: 'what-is-cosigner', title: 'What Is a Cosigner?' },
                  { id: 'legal-obligations', title: 'Legal Obligations' },
                  { id: 'financial-risks', title: 'Financial Risks' },
                  { id: 'collateral-requirements', title: 'Collateral Requirements' },
                  { id: 'if-defendant-misses-court', title: 'If Defendant Misses Court' },
                  { id: 'faqs', title: 'Frequently Asked Questions' },
                ]}
              />
            </AnimatedSection>
          </div>
        </section>

        {/* What Is a Cosigner */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 id="what-is-cosigner" className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              What Is a Bail Bond Cosigner?
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-6">
                A cosigner (also called an indemnitor) is the person who signs the bail bond contract alongside the defendant, guaranteeing that:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-gray-200 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-brand-red shrink-0" />
                      <h3 className="text-xl font-bold uppercase">Guarantee #1</h3>
                    </div>
                    <p className="text-gray-700">The defendant will appear at all court dates</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-200 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="h-8 w-8 text-brand-red shrink-0" />
                      <h3 className="text-xl font-bold uppercase">Guarantee #2</h3>
                    </div>
                    <p className="text-gray-700">You will pay the full bail amount if they don't</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-gray-700 mt-6 leading-relaxed">
                When you cosign, you're essentially vouching for the defendant with your own finances on the line. The bail bond company relies on your guarantee to take on the risk of posting the full bail.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Legal Obligations */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 id="legal-obligations" className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              What Are Your Legal Obligations as a Cosigner?
            </h2>
            
            <StatisticBox 
              statistic="Up to 25% of disposable wages can be garnished"
              context="If the defendant skips and you owe the forfeited bail, the bond company can garnish your wages under Alabama law."
              citation="Alabama wage garnishment law"
            />
            
            <StatisticBox 
              statistic="90-day grace period for bond forfeiture"
              context="Alabama gives bondsmen approximately 90 days to locate the defendant before final forfeiture judgment."
              citation="Ala. Code § 15-13-131"
              citationUrl="https://casetext.com/statute/code-of-alabama/title-15-criminal-procedure/chapter-13-bail/article-7-bail-bond-forfeitures"
            />
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                When you sign a bail bond indemnity agreement, you're legally obligated to:
              </p>
              <div className="space-y-6">
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase mb-3 flex items-center gap-2">
                      <Users className="h-6 w-6 text-brand-red" />
                      1. Guarantee the Defendant's Court Appearances
                    </h3>
                    <p className="text-gray-700">
                      You're responsible for helping ensure the defendant attends every scheduled court date. While you can't force them, you're expected to stay in contact, remind them of dates, and encourage compliance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase mb-3 flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-brand-red" />
                      2. Pay the Full Bail Amount if Defendant Fails to Appear
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If the defendant skips court and the bond is forfeited, YOU owe the full bail amount to the bonding company—not just the 10% premium you already paid.
                    </p>
                    <div className="bg-gray-50 border-l-4 border-brand-red p-4">
                      <p className="font-bold mb-2">Example:</p>
                      <p className="text-gray-700">
                        You cosigned a $20,000 bond and paid a $2,000 premium. The defendant skips court. You now owe up to $20,000.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase mb-3 flex items-center gap-2">
                      <Scale className="h-6 w-6 text-brand-red" />
                      3. Pay Recovery Costs
                    </h3>
                    <p className="text-gray-700">
                      If the bonding company hires a fugitive recovery agent (bounty hunter) to find the defendant, you may be responsible for those costs too.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase mb-3 flex items-center gap-2">
                      <Phone className="h-6 w-6 text-brand-red" />
                      4. Maintain Communication
                    </h3>
                    <p className="text-gray-700">
                      You agree to stay in contact with the bail bond company and provide information about the defendant's whereabouts if asked.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Financial Risks */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 id="financial-risks" className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Financial Risks of Cosigning
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                Cosigning isn't just a favor—it's a financial risk. Here's what's at stake:
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-8">
                <div className="flex items-start gap-3 mb-6">
                  <AlertTriangle className="h-8 w-8 text-amber-600 shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold text-amber-900">
                    If the defendant fails to appear, you could face:
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-600 shrink-0 mt-1" />
                    <span>Liability for the <strong>full bail amount</strong> (potentially thousands of dollars)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-600 shrink-0 mt-1" />
                    <span><strong>Wage garnishment</strong> — Alabama law allows creditors to garnish up to 25% of your disposable income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-600 shrink-0 mt-1" />
                    <span><strong>Loss of collateral</strong> — Any property you pledged can be seized and sold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-600 shrink-0 mt-1" />
                    <span><strong>Civil lawsuit</strong> — The bond company can sue you for the full amount plus legal fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-amber-600 shrink-0 mt-1" />
                    <span><strong>Damage to credit</strong> — Unpaid judgments affect your credit score</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Collateral */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 id="collateral-requirements" className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Collateral Requirements
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                For larger bonds, the bail company may require collateral—assets you pledge to secure the bond. Common forms of collateral include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border-2 border-gray-200 p-4">
                  <p className="text-gray-700">• Real estate (home, land)</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4">
                  <p className="text-gray-700">• Vehicles (car titles)</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4">
                  <p className="text-gray-700">• Jewelry or valuables</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4">
                  <p className="text-gray-700">• Cash deposits</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 md:col-span-2">
                  <p className="text-gray-700">• Investment accounts</p>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6">
                <h3 className="text-xl font-bold uppercase mb-4">What happens to collateral:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>If the defendant completes all court appearances:</strong> Collateral is returned when the bond is exonerated
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>If the defendant skips:</strong> Collateral can be seized to cover the forfeited bail amount
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-6 italic">
                Before pledging collateral, understand that you could lose it entirely if the defendant doesn't comply.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* What Happens If Defendant Misses Court */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              What Happens If the Defendant Misses Court
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                If the defendant fails to appear in court, here's the process:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Warrant Issued",
                    description: "The judge issues a bench warrant for the defendant's arrest."
                  },
                  {
                    step: "2",
                    title: "Bond Goes Into Forfeiture",
                    description: "The court enters a conditional forfeiture judgment. This starts the clock."
                  },
                  {
                    step: "3",
                    title: "90-Day Grace Period",
                    description: "Under Alabama law (Ala. Code § 15-13-131), the bonding company has approximately 90 days to locate and return the defendant to custody."
                  },
                  {
                    step: "4",
                    title: "Bondsman Contacts You",
                    description: "Expect calls. The bond company will ask for help locating the defendant. Cooperate—it's in your interest."
                  },
                  {
                    step: "5",
                    title: "If Defendant Is Found",
                    description: "The forfeiture may be set aside. You may still owe some fees, but you avoid the full bail amount."
                  },
                  {
                    step: "6",
                    title: "If Defendant Is NOT Found",
                    description: "The forfeiture becomes final. The bonding company pays the court and comes after you for the full amount. Collateral is seized. Lawsuits and garnishment may follow."
                  }
                ].map((item) => (
                  <Card key={item.step} className="border-2 border-gray-200 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Can You Get Out */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Can You Get Out of a Cosigner Agreement?
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                Once you sign, you're generally bound until the case is fully resolved. However:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-green-500 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <h3 className="text-xl font-bold uppercase">Before a Court Date is Missed</h3>
                    </div>
                    <p className="text-gray-700">
                      You can contact the bail bond company and request to be removed as cosigner. This typically means the defendant is surrendered back to jail (re-arrested), and your obligation ends. This is a drastic step but protects you if you believe the defendant will flee.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-red-500 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="h-8 w-8 text-red-600" />
                      <h3 className="text-xl font-bold uppercase">After a Court Date is Missed</h3>
                    </div>
                    <p className="text-gray-700">
                      It's too late. The bond is in forfeiture and you're already liable.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-gray-700 mt-6 font-bold">
                Key point: If you have doubts about the defendant's reliability, act BEFORE they miss court. Once forfeiture starts, your options are limited.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Questions to Ask */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Questions to Ask Before Cosigning
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                Protect yourself by getting answers before you sign:
              </p>
              <div className="space-y-4">
                {[
                  "What is the total bail amount I'm guaranteeing?",
                  "What collateral is required?",
                  "What happens if the defendant misses court?",
                  "Can I surrender the defendant if needed? What's the process?",
                  "Are there any additional fees I could owe?",
                  "How will I be notified of court dates?"
                ].map((question, index) => (
                  <Card key={index} className="border-2 border-gray-200 bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-brand-red text-white flex items-center justify-center font-black shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{question}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-gray-700 mt-8 italic">
                A reputable bondsman will answer these questions clearly. If they won't, find another company.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Only Cosign for Someone You Trust */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Only Cosign for Someone You Trust
            </h2>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 mb-8">
                This cannot be overstated: only cosign for someone you genuinely trust to appear in court.
              </p>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-3">
                    <ShieldCheck className="h-7 w-7 text-brand-red" />
                    Ask yourself:
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red font-bold">•</span>
                      <span>Do they have a history of reliability?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red font-bold">•</span>
                      <span>Do they have ties to the community (job, family, housing)?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red font-bold">•</span>
                      <span>Have they skipped court or fled before?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red font-bold">•</span>
                      <span>Will they stay in contact with you?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red font-bold">•</span>
                      <span>Can you afford the full bail amount if they run?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <p className="text-xl text-gray-700 mt-8 font-bold">
                If you have serious doubts, it's okay to say no. Cosigning out of guilt or pressure can cost you thousands of dollars and damage your financial future.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Mid-Page CTA */}
        <MidPageCTA 
          headline="Have Questions About Cosigning?"
          subtext="We'll explain everything clearly before you sign anything."
        />

        {/* FAQ Section */}
        <AnimatedSection className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Frequently Asked Questions About Cosigning
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
              Have Questions About Cosigning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We'll explain exactly what you're agreeing to—no pressure, no surprises. Call us to discuss your situation.
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
                  title: "What Is Bond Forfeiture?",
                  description: "Understanding what happens when court is missed",
                  link: "/bail-bonds-guide/bond-forfeiture-process"
                },
                {
                  title: "Bail Costs & Fees Explained",
                  description: "Complete breakdown of what you'll pay",
                  link: "/bail-bonds-guide/bail-costs-alabama"
                }
              ].map((guide) => (
                <Card key={guide.link} className="border-2 border-gray-200 hover:border-brand-red transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold uppercase mb-3">{guide.title}</h3>
                    <p className="text-gray-700 mb-4">{guide.description}</p>
                    <Link
                      to={guide.link}
                      className="inline-flex items-center gap-2 text-brand-red font-bold uppercase hover:underline"
                    >
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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

export default CosignerResponsibilities;
