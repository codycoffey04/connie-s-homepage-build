import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";
import { StickyCallButton } from "@/components/StickyCallButton";
import { FAQList } from "@/components/FAQItem";
import { AnswerBox } from "@/components/AnswerBox";
import { ReadingMeta } from "@/components/ReadingMeta";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ShieldAlert, AlertTriangle, XCircle, CheckCircle, Phone, ArrowRight, ShieldCheck, DollarSign, Scale } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import {
  getArticleSchema,
  getFAQSchema,
  getSpeakableSchema,
  getBreadcrumbSchema,
  getLocalBusinessSchema,
} from "@/lib/schemaUtils";

const BailBondScams = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "Avoiding Bail Bond Scams", url: "/bail-bonds-guide/bail-bond-scams" },
  ];

  const faqs = [
    {
      question: "Can I get my money back if I was scammed?",
      answer:
        "It depends. If you paid by credit card, you may be able to dispute the charge. Cash and wire transfers are harder to recover. File reports with the APBB, police, and AG's office—they may be able to help, especially if the scammer is caught.",
    },
    {
      question: "How do I know if a bail bondsman is licensed?",
      answer:
        "Check the APBB's online Licensee Search at www.apbb.alabama.gov, or ask to see their physical license. Every licensed bondsman must carry their license and present it upon request.",
    },
    {
      question: "Is it illegal to operate as an unlicensed bondsman?",
      answer:
        "Yes. Operating as a bail bondsman without an APBB license is illegal in Alabama (Ala. Code § 15-13-202). Unlicensed operators can face criminal charges.",
    },
    {
      question: "What if a bondsman offers me a deal way below 10%?",
      answer:
        "Be skeptical. Premiums significantly below 10% are unusual and may indicate an unlicensed operator or hidden fees. Legitimate bondsmen operate on thin margins and can't deeply discount their services.",
    },
    {
      question: "Should I work with a bondsman I found online?",
      answer:
        "Online research is fine, but always verify licensing before paying. Scammers create professional-looking websites. The APBB database is the definitive source for verification.",
    },
  ];

  const schemas = [
    getArticleSchema(
      "How to Avoid Bail Bond Scams in Alabama",
      "Protect yourself from bail bond scams in Alabama. Learn the warning signs of unlicensed bondsmen, common scams, and how to verify a legitimate bail bond company.",
      "/bail-bonds-guide/bail-bond-scams"
    ),
    getFAQSchema(faqs),
    getSpeakableSchema(),
    getBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema(),
  ];

  const scams = [
    {
      number: 1,
      title: "The Unlicensed Bondsman",
      description:
        "Someone offers bail bond services but isn't actually licensed. They take your money, provide fake paperwork, and your loved one never gets released—or worse, the 'bond' is rejected and you've lost your money.",
      howToAvoid:
        "Always verify the bondsman's license with the Alabama Professional Bail Bonding Board (APBB).",
    },
    {
      number: 2,
      title: "The Phone Scam",
      description:
        "You receive a call claiming your family member is in jail and needs immediate bail money. The caller pressures you to send money via wire transfer, gift cards, or cryptocurrency. In reality, your family member isn't in jail at all—or they are, but the caller isn't affiliated with any legitimate bond company.",
      howToAvoid:
        "Never send money based on an unsolicited call. Hang up and call the jail directly to verify. Call your family member directly if possible.",
    },
    {
      number: 3,
      title: "Excessive Fees",
      description:
        "A bondsman charges significantly more than 10% or adds unexplained fees far beyond the state-mandated amounts. While premiums can occasionally be higher for high-risk bonds, fees dramatically above the norm are a red flag.",
      howToAvoid:
        "Know the standard rates (10% premium + $35 admin + 3.5% state fee). Ask for an itemized breakdown in writing.",
    },
    {
      number: 4,
      title: "Upfront 'Processing' Fees",
      description:
        "Someone asks for money before telling you the bail amount or completing any paperwork—claiming it's a 'processing fee' or 'application fee' that's separate from the premium.",
      howToAvoid:
        "Legitimate bondsmen don't charge application fees. You pay the premium when the bond is being written, not before.",
    },
    {
      number: 5,
      title: "No Paperwork",
      description:
        "The bondsman takes your money but doesn't provide proper documentation—no contract, no receipt, no copy of the bond.",
      howToAvoid:
        "Always get signed paperwork including the indemnity agreement, premium receipt, and bond copy. No paperwork = no deal.",
    },
  ];

  return (
    <>
      <SEO
        title="How to Avoid Bail Bond Scams in Alabama | Protect Yourself"
        description="Protect yourself from bail bond scams in Alabama. Learn the warning signs of unlicensed bondsmen, common scams, and how to verify a legitimate bail bond company."
        canonical="/bail-bonds-guide/bail-bond-scams"
        schema={schemas}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section */}
      <Section className="bg-black text-white border-t-4 border-brand-red">
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
          How to Avoid Bail Bond Scams in Alabama
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed mb-6">
          When you're desperate to bail out a loved one, scammers see an opportunity. Unlicensed operators and outright fraudsters prey on families in crisis. Knowing the warning signs protects you from losing money to criminals instead of helping your family.
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
          question="How do I avoid bail bond scams in Alabama?"
          answer="Verify the bondsman's license with the APBB (www.apbb.alabama.gov). Red flags include: no license shown, fees below 10%, upfront 'processing fees', payment via wire/gift cards/crypto, no written contracts, unsolicited phone calls claiming a family member is in jail. Always verify bail information directly with the jail before sending money."
        />
      </Section>

      {/* Common Scams */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <ShieldAlert className="h-12 w-12 text-brand-red" />
            <h2 className="text-4xl font-black uppercase tracking-tight">Common Bail Bond Scams</h2>
          </div>

          <div className="space-y-6">
            {scams.map((scam) => (
              <Card key={scam.number} className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-black shrink-0">
                      {scam.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Scam #{scam.number}: {scam.title}</h3>
                      <p className="text-lg text-gray-700 mb-4">{scam.description}</p>
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="flex items-start gap-2">
                          <ShieldCheck className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                          <span>
                            <strong className="text-green-900">How to avoid:</strong>{" "}
                            <span className="text-green-800">{scam.howToAvoid}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Warning Signs */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">
            Warning Signs of a Scam
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-8">
            <div className="flex items-start gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-amber-600 shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-amber-900">Red flags that indicate a potential scam:</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They won't show you their license</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They ask for payment via wire transfer, gift cards, or crypto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They pressure you to pay immediately without explaining costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They won't provide written contracts or receipts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>Their fees are dramatically higher (or lower) than 10%</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They can't be found on the APBB license database</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They don't have a physical office or verifiable address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They guarantee the defendant won't have to go to court</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They contact you unsolicited claiming a family member is in jail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-xl">⚠️</span>
                  <span>They refuse to answer questions about the process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How to Verify */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <ShieldCheck className="h-12 w-12 text-brand-red" />
            <h2 className="text-4xl font-black uppercase tracking-tight">How to Verify a Bail Bondsman in Alabama</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                Alabama requires all bail bond agents to be licensed through the Alabama Professional Bail Bonding Board (APBB).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">To verify a license:</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-black text-xl">1.</span>
                    <div>
                      <strong>Ask to see their license</strong> — Licensed bondsmen must carry their license and show it upon request (Ala. Admin. Code r. 153-X-3-.04)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-black text-xl">2.</span>
                    <div>
                      <strong>Check the APBB online database</strong> — Visit www.apbb.alabama.gov and use the Licensee Search tool
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-black text-xl">3.</span>
                    <div>
                      <strong>Confirm the company name matches</strong> — The license should show the individual agent AND their company
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-black text-xl">4.</span>
                    <div>
                      <strong>Note the license number</strong> — Legitimate agents have a state-issued license number
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-xl font-bold text-red-900">
                  If they refuse to provide license information or aren't in the database, do not give them money.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What Legitimate Bondsmen Do */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">
            What Legitimate Bondsmen Do
          </h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">A reputable bail bond company will:</p>

              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Clearly explain all fees upfront (premium, state fees, any collateral requirements)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Provide a written contract (indemnity agreement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Give you receipts for all payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Show their license upon request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Answer your questions without pressure tactics</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Have a physical address and verifiable phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Be listed in the APBB database</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Explain the cosigner's responsibilities clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Not guarantee outcomes they can't control (like case dismissal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <span>Be available 24/7 for bail emergencies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-6 border-l-4 border-gray-300">
                <p className="text-lg">
                  At Connie's Bail Bonding, we've been serving DeKalb and Cherokee counties since 2019. Our agents are fully licensed, and we're happy to answer any questions before you sign anything.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What to Do If Scammed */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <XCircle className="h-12 w-12 text-brand-red" />
            <h2 className="text-4xl font-black uppercase tracking-tight">What to Do If You've Been Scammed</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                If you believe you've been victimized by a bail bond scam:
              </p>

              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black text-xl shrink-0">1.</span>
                  <div>
                    <strong className="text-xl">Document everything</strong>
                    <p className="text-gray-700 mt-1">Save all texts, emails, receipts, and records of communication</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black text-xl shrink-0">2.</span>
                  <div>
                    <strong className="text-xl">File a complaint with the APBB</strong>
                    <p className="text-gray-700 mt-1">The Alabama Professional Bail Bonding Board investigates unlicensed operators and misconduct</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black text-xl shrink-0">3.</span>
                  <div>
                    <strong className="text-xl">Report to local law enforcement</strong>
                    <p className="text-gray-700 mt-1">File a police report, especially if significant money was stolen</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black text-xl shrink-0">4.</span>
                  <div>
                    <strong className="text-xl">Contact the Alabama Attorney General</strong>
                    <p className="text-gray-700 mt-1">Their Consumer Protection Division handles fraud complaints</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-black text-xl shrink-0">5.</span>
                  <div>
                    <strong className="text-xl">Warn others</strong>
                    <p className="text-gray-700 mt-1">Report the scam to the Better Business Bureau and leave reviews warning others</p>
                  </div>
                </li>
              </ol>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">APBB Complaint Contact:</h3>
                <p className="text-lg">
                  Alabama Professional Bail Bonding Board<br />
                  www.apbb.alabama.gov
                </p>
              </div>

              <p className="text-lg mt-6">
                Taking action helps protect the next family from the same scam.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Why Scammers Target Bail */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Why Scammers Target Bail Situations
          </h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">Bail scams work because:</p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-xl">•</span>
                  <div>
                    <strong className="text-lg">Urgency</strong> — Families are desperate and acting fast
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-xl">•</span>
                  <div>
                    <strong className="text-lg">Emotional distress</strong> — Clear thinking is compromised during crisis
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-xl">•</span>
                  <div>
                    <strong className="text-lg">Unfamiliarity</strong> — Most people don't know how bail works
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-xl">•</span>
                  <div>
                    <strong className="text-lg">Limited verification</strong> — It's hard to verify claims when someone you love is in jail
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-xl">•</span>
                  <div>
                    <strong className="text-lg">Cash transactions</strong> — Bail often involves significant cash, making it attractive to thieves
                  </div>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-900 mb-3">Protect yourself by slowing down.</h3>
                <p className="text-lg">
                  Even in an emergency, take 5 minutes to verify the bondsman's license. A legitimate bondsman understands this and won't pressure you to skip verification.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

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
            Work With a Licensed, Local Bondsman
          </h2>
          <p className="text-xl text-gray-300">
            Connie's Bail Bonding has served DeKalb and Cherokee counties since 2019. Licensed, local, and transparent. Call us anytime.
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
                <a
                  href="/bail-bonds-guide/how-bail-works-alabama"
                  className="text-brand-red font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-brand-red mb-4" />
                <h3 className="text-xl font-bold mb-3">Bail Costs & Fees Explained</h3>
                <p className="text-gray-600 mb-4">
                  Complete breakdown of bail bond costs, premiums, and fees in Alabama.
                </p>
                <a
                  href="/bail-bonds-guide/bail-costs-alabama"
                  className="text-brand-red font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <ShieldCheck className="h-12 w-12 text-brand-red mb-4" />
                <h3 className="text-xl font-bold mb-3">Cosigner Responsibilities</h3>
                <p className="text-gray-600 mb-4">
                  What does it mean to cosign a bail bond? Know your legal obligations.
                </p>
                <a
                  href="/bail-bonds-guide/cosigner-responsibilities"
                  className="text-brand-red font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default BailBondScams;