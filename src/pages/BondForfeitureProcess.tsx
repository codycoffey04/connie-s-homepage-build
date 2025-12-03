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
import { AlertTriangle, Clock, XCircle, Scale, DollarSign, Phone, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { phoneNumbers } from "@/lib/cityUtils";
import {
  getArticleSchema,
  getFAQSchema,
  getSpeakableSchema,
  getBreadcrumbSchema,
  getOrganizationSchema,
  getCustomHowToSchema,
} from "@/lib/schemaUtils";
import bondForfeitureHeroBg from "@/assets/bond-forfeiture-hero-bg.jpg";

const BondForfeitureProcess = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "Bond Forfeiture Process", url: "/bail-bonds-guide/bond-forfeiture-process" },
  ];

  const faqs = [
    {
      question: "How long do you have before a bond is forfeited in Alabama?",
      answer:
        "The court must provide notice and a hearing at least 90 days after the failure to appear before making forfeiture final. This gives the bondsman time to locate the defendant.",
    },
    {
      question: "Can forfeiture be stopped if the defendant turns themselves in?",
      answer:
        "Yes, if they surrender before the final forfeiture judgment. The court can set aside the conditional forfeiture. The sooner they turn themselves in, the better.",
    },
    {
      question: "Will I go to jail if the defendant I bailed out skips?",
      answer:
        "No. Cosigners don't face criminal charges for the defendant's failure to appear. However, you face serious civil/financial consequences—debt, lawsuits, garnishment, and loss of collateral.",
    },
    {
      question: "What if the defendant was in the hospital and missed court?",
      answer:
        "Documented medical emergencies may qualify as 'sufficient cause' to set aside forfeiture. Provide hospital records to the bondsman and attorney immediately. The defendant still needs to appear once able.",
    },
    {
      question: "Can the bondsman come after me years later?",
      answer:
        "Yes. Civil judgments in Alabama are valid for 20 years and can be renewed. The bond company can pursue collection for a long time.",
    },
  ];

  const howToSteps = [
    {
      name: "Day 0: Failure to Appear",
      text: "Defendant misses court. Judge issues a bench warrant for arrest and orders conditional forfeiture of the bond.",
    },
    {
      name: "Days 1-14: Notice Sent",
      text: "The court sends a notice of conditional forfeiture (scire facias) to the defendant and surety (bondsman). This officially starts the forfeiture clock.",
    },
    {
      name: "Days 14-90: Grace Period",
      text: "Alabama law (Ala. Code § 15-13-131) provides approximately 90 days from the notice for the bondsman to locate and return the defendant to custody.",
    },
    {
      name: "Day 90+: Final Forfeiture Hearing",
      text: "If the defendant hasn't been returned, the court holds a hearing. The conditional judgment becomes absolute—the bond is officially forfeited.",
    },
    {
      name: "After Final Forfeiture",
      text: "The bonding company must pay the full bail amount to the court. They then pursue the cosigner for reimbursement.",
    },
  ];

  const schemas = [
    getArticleSchema(
      "Bond Forfeiture Process in Alabama",
      "What happens when a defendant misses court in Alabama? Learn about the bond forfeiture process, the 90-day grace period, and what it means for cosigners.",
      "/bail-bonds-guide/bond-forfeiture-process"
    ),
    getFAQSchema(faqs),
    getCustomHowToSchema(
      "Bond Forfeiture Process in Alabama",
      "What happens when a defendant fails to appear in court and bond forfeiture begins",
      howToSteps
    ),
    getSpeakableSchema(),
    getBreadcrumbSchema(breadcrumbs),
    getOrganizationSchema(),
  ];

  return (
    <>
      <SEO
        title="Bond Forfeiture in Alabama | Missed Court?"
        description="What happens when a defendant misses court in Alabama? Learn about the bond forfeiture process, the 90-day grace period, and what it means for cosigners."
        canonical="/bail-bonds-guide/bond-forfeiture-process"
        schema={schemas}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section */}
      <section 
        className="relative flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bondForfeitureHeroBg})` }}
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
            Bond Forfeiture Process in Alabama
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed mb-6">
            Bond forfeiture happens when a defendant fails to appear in court as required. It's the worst-case scenario for everyone involved—the defendant, the cosigner, and the bail bondsman. Understanding the process helps you know what to expect and how to potentially minimize the damage.
          </p>
          
          {/* Reading Meta */}
          <div className="mb-8">
            <ReadingMeta 
              author="Richard"
              licenseNumber="S0334"
              readingTime={8}
            />
          </div>

          {/* Answer Box */}
          <AnswerBox 
            question="What is bond forfeiture in Alabama?"
            answer="Bond forfeiture occurs when a defendant fails to appear in court. The court issues a bench warrant and conditional forfeiture notice. Alabama law provides approximately 90 days for the bondsman to locate and return the defendant. If unsuccessful, the bond becomes final—the bondsman pays the full bail to the court and pursues the cosigner for reimbursement."
            source="Ala. Code § 15-13-131"
          />

          <TableOfContents 
            items={[
              { id: 'what-triggers-forfeiture', title: 'What Triggers Forfeiture?' },
              { id: 'forfeiture-timeline', title: 'Bond Forfeiture Timeline' },
              { id: 'grace-period', title: '90-Day Grace Period' },
              { id: 'sufficient-cause', title: 'What Is "Sufficient Cause"?' },
              { id: 'faqs', title: 'Frequently Asked Questions' },
            ]}
          />
        </div>
      </section>

      {/* What Triggers Forfeiture */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="h-12 w-12 text-brand-red" />
            <h2 id="what-triggers-forfeiture" className="text-4xl font-black uppercase tracking-tight">What Triggers Bond Forfeiture?</h2>
          </div>
          
          <Card className="mb-6">
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                A bond is forfeited when the defendant fails to appear (FTA) at a scheduled court hearing without a valid excuse.
              </p>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Common causes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                    <span>Forgetting the court date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                    <span>Intentionally fleeing/skipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                    <span>Being arrested on new charges elsewhere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                    <span>Medical emergency (may be excusable with documentation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                    <span>Transportation issues (rarely excused without prior notice)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">What does NOT trigger forfeiture:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Case being dismissed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Being found guilty or not guilty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Case concluding normally</span>
                  </li>
                </ul>
                <p className="mt-4 text-lg">
                  The bond remains in effect until the case ends—as long as the defendant appears at every hearing, the bond is fine.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Forfeiture Timeline */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="h-12 w-12 text-brand-red" />
            <h2 id="forfeiture-timeline" className="text-4xl font-black uppercase tracking-tight">The Forfeiture Timeline</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howToSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-black shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold">{step.name}</h3>
                  </div>
                  <p className="text-gray-700">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 90-Day Grace Period */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 id="grace-period" className="text-4xl font-black uppercase tracking-tight mb-6">The 90-Day Grace Period</h2>
          
          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                Alabama gives bondsmen roughly 90 days to find the defendant before final forfeiture. This isn't a free pass—it's a recovery window.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">What happens during this period:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Bondsman will call you (the cosigner) repeatedly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>They'll ask for any information on the defendant's whereabouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>Professional fugitive recovery agents may be dispatched</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">•</span>
                    <span>The defendant is actively hunted</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Why cooperation matters:</h3>
                <p className="text-lg">
                  If you help locate the defendant and they're returned to custody within the grace period, the forfeiture can be set aside. You may still owe some fees, but you avoid liability for the full bail amount.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-3">If the defendant is found:</h3>
                <p className="text-lg">
                  The court can vacate (cancel) the forfeiture under Ala. Code § 15-13-137 if the defendant is produced and "sufficient cause" is shown. The bond may be reinstated or a new bond required.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Sufficient Cause */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="h-12 w-12 text-brand-red" />
            <h2 id="sufficient-cause" className="text-4xl font-black uppercase tracking-tight">What "Sufficient Cause" Means</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                If the defendant missed court, can the forfeiture be reversed? Sometimes.
              </p>

              <p className="text-lg mb-6">
                Under Alabama law, the court can set aside forfeiture if:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold mt-1">1.</span>
                  <span>The defendant is produced (returned to custody), AND</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold mt-1">2.</span>
                  <span>Sufficient cause for the failure to appear is shown</span>
                </li>
              </ul>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Examples of sufficient cause:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Documented medical emergency (hospitalization)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Death in immediate family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Arrest in another jurisdiction (defendant was in custody elsewhere)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Documented circumstances beyond defendant's control</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-900 mb-4">What's NOT sufficient cause:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-6 w-6 text-red-600 shrink-0" />
                      <span>Forgot the date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-6 w-6 text-red-600 shrink-0" />
                      <span>Couldn't get a ride</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-6 w-6 text-red-600 shrink-0" />
                      <span>Had to work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-6 w-6 text-red-600 shrink-0" />
                      <span>Didn't want to come</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg mt-6">
                Judges have discretion here. Having an attorney argue for remission helps, but there's no guarantee.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Financial Consequences */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="h-12 w-12 text-brand-red" />
            <h2 className="text-4xl font-black uppercase tracking-tight">Financial Consequences of Forfeiture</h2>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-8">
            <div className="flex items-start gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-amber-600 shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-amber-900">When a bond is forfeited, the cosigner faces:</h3>
            </div>
            <ul className="space-y-3 text-gray-800 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-1">•</span>
                <span><strong>Full bail amount owed</strong> — Not just the 10% premium, the ENTIRE bail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-1">•</span>
                <span><strong>Recovery costs</strong> — Fees for bounty hunters, skip tracing, legal costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-1">•</span>
                <span><strong>Collateral seizure</strong> — Any property pledged is taken</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-1">•</span>
                <span><strong>Civil lawsuit</strong> — Bond company can sue for the balance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-1">•</span>
                <span><strong>Wage garnishment</strong> — Up to 25% of disposable income in Alabama</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-1">•</span>
                <span><strong>Credit damage</strong> — Unpaid judgments reported to credit bureaus</span>
              </li>
            </ul>

            <div className="mt-6 p-6 bg-red-100 rounded-lg border border-red-300">
              <h4 className="text-xl font-bold text-red-900 mb-3">Example:</h4>
              <p className="text-lg text-red-900">
                You cosigned a $15,000 bond (paid $1,500 premium). Defendant skips and isn't found. You now owe:
              </p>
              <ul className="mt-3 space-y-1 text-lg text-red-900">
                <li>• $15,000 (bail amount)</li>
                <li>• $2,000+ (recovery costs)</li>
                <li className="font-bold pt-2 border-t border-red-300">Total: $17,000+</li>
              </ul>
              <p className="mt-4 text-lg font-bold text-red-900">
                This is why cosigning is so serious.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How to Avoid Forfeiture */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">How to Avoid Forfeiture</h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">Prevention is everything. Here's how to minimize forfeiture risk:</p>

              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Before signing:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Only cosign for someone you genuinely trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Assess their reliability—have they skipped before?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Make sure they have stable housing and ties to the area</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">After signing:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Keep in regular contact with the defendant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Know all their court dates (ask the bondsman or attorney)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Remind them before every hearing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Attend court with them if possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Immediately report any concerns to the bondsman</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">If you're worried they'll skip:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Contact the bondsman BEFORE the court date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>You can request to surrender the defendant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>This means they go back to jail, but your liability ends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>It's drastic but protects you financially</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Found After Final Forfeiture */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">What If the Defendant Is Found After Final Forfeiture?</h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                Even after final forfeiture, there may be partial relief.
              </p>

              <p className="text-lg mb-6">
                Alabama law (Ala. Code § 15-13-139) allows for remission—the court can refund part of the forfeited amount if the defendant is later apprehended.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">How it works:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">1.</span>
                    <span>Defendant is caught (or surrenders) after forfeiture was finalized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">2.</span>
                    <span>Bondsman petitions court for remission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">3.</span>
                    <span>Judge may return a portion of the forfeited bail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold mt-1">4.</span>
                    <span>Amount varies based on timing and circumstances</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-600">
                This is discretionary and not guaranteed. You shouldn't count on it, but it's a potential silver lining if the defendant is eventually found.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Mid-Page CTA */}
      <MidPageCTA 
        headline="Facing Bond Forfeiture?"
        subtext="Call us immediately—we may be able to help resolve the situation."
      />

      {/* FAQ Section */}
      <Section variant="muted">
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
            Worried About a Missed Court Date?
          </h2>
          <p className="text-xl text-gray-300">
            If the defendant you bailed out missed court or you're concerned they might, call us immediately. Time matters—we can help navigate the situation.
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
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default BondForfeitureProcess;