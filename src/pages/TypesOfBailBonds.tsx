import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";
import { StickyCallButton } from "@/components/StickyCallButton";
import { FAQList } from "@/components/FAQItem";
import { MidPageCTA } from "@/components/MidPageCTA";
import { AnswerBox } from "@/components/AnswerBox";
import { StatisticBox } from "@/components/StatisticBox";
import { ReadingMeta } from "@/components/ReadingMeta";
import { TableOfContents } from "@/components/TableOfContents";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Scale, DollarSign, Building, Users, FileText, CheckCircle, XCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { phoneNumbers } from "@/lib/cityUtils";
import {
  getArticleSchema,
  getFAQSchema,
  getSpeakableSchema,
  getBreadcrumbSchema,
  getOrganizationSchema,
} from "@/lib/schemaUtils";
import typesBailBondsHeroBg from "@/assets/types-bail-bonds-hero-bg.jpg";

const TypesOfBailBonds = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "Types of Bail Bonds", url: "/bail-bonds-guide/types-of-bail-bonds" },
  ];

  const faqs = [
    {
      question: "What's the most common type of bail bond?",
      answer:
        "Surety bonds (through a bail bondsman) are by far the most common. Most people don't have thousands in cash available, making the 10% premium the practical choice.",
    },
    {
      question: "Can I switch from one bond type to another?",
      answer:
        "Generally no. Once bail is posted one way, that's the method until the case concludes. If you posted cash and want it back sooner, you can't simply switch to a surety bond.",
    },
    {
      question: "What if I can't afford any type of bond?",
      answer:
        "You can request a bail reduction hearing through an attorney, ask about payment plans from a bondsman, or see if family can help with a property bond. Public defenders can also argue for ROR at arraignment.",
    },
    {
      question: "Is a bail bond the same as bail?",
      answer:
        "Not exactly. 'Bail' is the amount set by the court. A 'bail bond' is one method of paying it—specifically through a surety/bondsman. Cash bail and property bonds are other methods of satisfying the bail requirement.",
    },
  ];

  const schemas = [
    getArticleSchema(
      "Types of Bail Bonds in Alabama",
      "Learn about the different types of bail bonds in Alabama: cash bonds, surety bonds, property bonds, and ROR. Understand which option is right for your situation.",
      "/bail-bonds-guide/types-of-bail-bonds"
    ),
    getFAQSchema(faqs),
    getSpeakableSchema(),
    getBreadcrumbSchema(breadcrumbs),
    getOrganizationSchema(),
  ];

  return (
    <>
      <SEO
        title="Types of Bail Bonds in Alabama | Cash, Surety, Property Bonds Explained"
        description="Learn about the different types of bail bonds in Alabama: cash bonds, surety bonds, property bonds, and ROR. Understand which option is right for your situation."
        canonical="/bail-bonds-guide/types-of-bail-bonds"
        schema={schemas}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section */}
      <section 
        className="relative flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${typesBailBondsHeroBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl py-20 md:py-32">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.url} className="contents">
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage className="text-white">
                        {crumb.name}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={crumb.url}
                        className="text-gray-400 hover:text-white"
                      >
                        {crumb.name}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator className="text-gray-600" />
                  )}
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
            Types of Bail Bonds in Alabama
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed mb-6">
            When bail is set, you have options for how to pay it. Alabama law (Ala. Code § 15-13-111) recognizes several forms of bail, each with different requirements, costs, and risks. Understanding your options helps you choose the best path to get your loved one released.
          </p>
          
          {/* Reading Meta */}
          <div className="mb-8">
            <ReadingMeta 
              author="Connie"
              licenseNumber="B0092"
              readingTime={9}
            />
          </div>

          {/* Answer Box */}
          <AnswerBox 
            question="What are the types of bail bonds in Alabama?"
            answer="Alabama recognizes four types of bail: Cash Bonds (pay full amount, fully refundable), Surety Bonds (pay 10% to bondsman, most common), Property Bonds (use real estate equity as collateral), and Release on Own Recognizance/ROR (no payment required, judge's discretion for low-risk cases)."
            source="Ala. Code § 15-13-111"
          />

          <TableOfContents 
            items={[
              { id: 'cash-bonds', title: 'Cash Bonds' },
              { id: 'surety-bonds', title: 'Surety Bonds (Bail Bondsman)' },
              { id: 'property-bonds', title: 'Property Bonds' },
              { id: 'own-recognizance', title: 'Release on Own Recognizance (ROR)' },
              { id: 'faqs', title: 'Frequently Asked Questions' },
            ]}
          />
        </div>
      </section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="h-12 w-12 text-brand-red" />
            <h2 id="cash-bonds" className="text-4xl font-black uppercase tracking-tight">What Is a Cash Bond?</h2>
          </div>
          
          <StatisticBox 
            statistic="Surety bonds (through a bondsman) are used in 95%+ of cases"
            context="Most people don't have thousands in cash available to post bail directly with the court."
            citation="Bail industry data"
          />
          
          <p className="text-xl mb-6">
            A cash bond means paying the full bail amount directly to the court or jail.
          </p>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">How it works:</h3>
              <p className="text-lg mb-6">
                You pay 100% of the bail amount in cash (or sometimes cashier's check/money order) to the court. The money is held until the case concludes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Pros:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Fully refundable if defendant appears at all court dates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>No bondsman fee (you get the full amount back minus court costs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Simple process—no third party involved</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Cons:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Requires the entire bail amount upfront</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Money is tied up for months (sometimes years) until case ends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>If defendant misses court, you lose it all</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
                <p className="font-bold mb-2">Best for:</p>
                <p>Those with available cash who are confident the defendant will appear and want to avoid the non-refundable bondsman premium.</p>
              </div>

              <div className="mt-6 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="font-bold mb-2">Example:</p>
                <p>Bail is $5,000. You pay $5,000 to the court. Case concludes 6 months later with defendant appearing at all hearings. Court returns $5,000 (minus ~$50 in court fees).</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Surety Bond */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="h-12 w-12 text-brand-red" />
            <h2 id="surety-bonds" className="text-4xl font-black uppercase tracking-tight">Surety Bond (Bail Bond)</h2>
          </div>
          <p className="text-xl mb-6">
            A surety bond is what most people mean when they say "bail bond." A licensed bail bondsman posts the full bail amount on your behalf.
          </p>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">How it works:</h3>
              <p className="text-lg mb-6">
                You pay the bondsman a premium (typically 10% of the bail amount) plus state-mandated fees. The bondsman then posts a surety bond with the court guaranteeing the full bail. A cosigner (indemnitor) guarantees repayment if the defendant fails to appear.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Pros:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Only need 10% upfront instead of full amount</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Fast—bondsmen work 24/7 and know the system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Payment plans often available</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Cons:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Premium is non-refundable (it's the bondsman's fee)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Cosigner assumes liability for full bail if defendant skips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Collateral may be required for larger bonds</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
                <p className="font-bold mb-2">Best for:</p>
                <p>Most people. Unless you have the full cash amount readily available, a surety bond is the fastest and most practical option.</p>
              </div>

              <div className="mt-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold mb-2">Example:</p>
                <p>Bail is $10,000. You pay $1,000 premium + ~$385 state fees ($1,385 total) to the bondsman. Defendant is released. Premium is never refunded—it's the cost of the service.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Property Bond */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Building className="h-12 w-12 text-brand-red" />
            <h2 id="property-bonds" className="text-4xl font-black uppercase tracking-tight">Property Bond</h2>
          </div>
          <p className="text-xl mb-6">
            A property bond uses real estate equity as collateral instead of cash.
          </p>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">How it works:</h3>
              <p className="text-lg mb-6">
                A property owner pledges their Alabama real estate to the court. The property must have unencumbered equity equal to or greater than the bail amount. A lien is placed on the property until the case concludes.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4">Alabama requirements (Ala. Code § 15-13-152):</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Property must be located in Alabama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Owner must be an Alabama resident</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Equity (value minus mortgages/liens) must exceed bail amount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>All owners must sign (both spouses if jointly owned)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Homestead exemption must be waived</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Lien is recorded against the property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Maximum 4 property bonds per year per owner (non-family)</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Pros:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>No cash outlay if you have property equity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>No bondsman premium</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Cons:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Complex process requiring court approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Property is at risk—can be sold if defendant skips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Takes longer to process than surety bonds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>All owners must agree and sign</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
                <p className="font-bold mb-2">Best for:</p>
                <p>Those with significant property equity, no available cash, and high confidence in the defendant. Not recommended for speed.</p>
              </div>

              <div className="mt-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold mb-2">Example:</p>
                <p>Bail is $25,000. Your home is worth $150,000 with a $100,000 mortgage ($50,000 equity). You can pledge the property. If defendant skips, you could lose your home.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ROR */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Users className="h-12 w-12 text-brand-red" />
            <h2 id="own-recognizance" className="text-4xl font-black uppercase tracking-tight">Release on Own Recognizance (ROR)</h2>
          </div>
          <p className="text-xl mb-6">
            ROR means the defendant is released without paying any bail—just a written promise to appear.
          </p>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">How it works:</h3>
              <p className="text-lg mb-6">
                The judge determines the defendant is low-risk and releases them based solely on their promise to attend all court dates. No money or collateral required.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4">Factors judges consider:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Minor, non-violent charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>No criminal history or minimal history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Strong community ties (job, family, long-term residence)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>No flight risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Not a danger to the community</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Pros:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Free—no bail payment required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Immediate release once granted</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Cons:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Entirely at judge's discretion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Rarely granted for serious charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>May come with conditions (check-ins, travel restrictions)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
                <p className="font-bold mb-2">Best for:</p>
                <p>First-time offenders with minor charges and strong community ties. You can request ROR through an attorney, but it's not guaranteed.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* PR vs Unsecured */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <FileText className="h-12 w-12 text-brand-red" />
            <h2 className="text-4xl font-black uppercase tracking-tight">Personal Recognizance Bond vs. Unsecured Bond</h2>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                These terms are sometimes confused:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold mb-2">Personal Recognizance (PR/ROR):</h4>
                  <p>No money required. Defendant signs a promise to appear.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold mb-2">Unsecured Bond:</h4>
                  <p>A bail amount is set, but no money is paid upfront. If the defendant fails to appear, they owe the full amount. It's like a "promise to pay if you skip."</p>
                </div>
              </div>

              <p className="text-lg mt-6">
                Both are alternatives to secured bonds, but unsecured bonds still carry financial liability. These are granted at the judge's discretion and typically only for low-risk defendants.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">
            Which Type of Bond Should You Choose?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left font-black uppercase">Bond Type</th>
                  <th className="p-4 text-left font-black uppercase">Upfront Cost</th>
                  <th className="p-4 text-left font-black uppercase">Refundable?</th>
                  <th className="p-4 text-left font-black uppercase">Speed</th>
                  <th className="p-4 text-left font-black uppercase">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-bold">Cash Bond</td>
                  <td className="p-4">100% of bail</td>
                  <td className="p-4">Yes (if defendant appears)</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">You lose full amount if skip</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="p-4 font-bold">Surety Bond</td>
                  <td className="p-4">10% + fees</td>
                  <td className="p-4">No (premium is fee)</td>
                  <td className="p-4 text-green-700 font-bold">Fast</td>
                  <td className="p-4">Cosigner liable for full amount</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">Property Bond</td>
                  <td className="p-4">$0 cash</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4 text-red-700">Slow</td>
                  <td className="p-4">Property at risk</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold">ROR</td>
                  <td className="p-4">$0</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4 text-green-700">Fast (if granted)</td>
                  <td className="p-4">None (if compliant)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl text-center mt-8">
            For most situations, a surety bond through a licensed bail bondsman is the fastest and most practical choice. You get your loved one out quickly without tying up large amounts of cash.
          </p>
        </div>
      </Section>

      {/* Mid-Page CTA */}
      <MidPageCTA 
        headline="Not Sure Which Bond Type Is Right?"
        subtext="We'll explain your options clearly—no pressure, no jargon."
      />

      {/* FAQ Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={faqs} />
        </div>
      </Section>

      {/* Emergency CTA */}
      <Section className="bg-black text-white border-t-4 border-brand-red">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Not Sure Which Bond Type Is Right?
          </h2>
          <p className="text-xl text-gray-300">
            Call us and we'll explain your options based on the specific situation. Free consultation, no obligation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PhoneButton
            name={phoneNumbers.richard.name}
            number={phoneNumbers.richard.number}
          />
          <PhoneButton
            name={phoneNumbers.connie.name}
            number={phoneNumbers.connie.number}
          />
          <PhoneButton
            name={phoneNumbers.toni.name}
            number={phoneNumbers.toni.number}
          />
        </div>
      </Section>

      {/* Related Guides */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Scale className="h-12 w-12 text-brand-red mb-4" />
                <h3 className="text-xl font-bold mb-3">How Bail Works in Alabama</h3>
                <p className="text-gray-600 mb-4">
                  Understanding Alabama's bail system, how it works, and what to expect.
                </p>
                <Link
                  to="/bail-bonds-guide/how-bail-works-alabama"
                  className="text-brand-red font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-brand-red mb-4" />
                <h3 className="text-xl font-bold mb-3">Bail Costs & Fees Explained</h3>
                <p className="text-gray-600 mb-4">
                  Complete breakdown of bail bond costs, premiums, and fees in Alabama.
                </p>
                <Link
                  to="/bail-bonds-guide/bail-costs-alabama"
                  className="text-brand-red font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-brand-red mb-4" />
                <h3 className="text-xl font-bold mb-3">Cosigner Responsibilities</h3>
                <p className="text-gray-600 mb-4">
                  What does it mean to cosign a bail bond? Know your legal obligations.
                </p>
                <Link
                  to="/bail-bonds-guide/cosigner-responsibilities"
                  className="text-brand-red font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default TypesOfBailBonds;