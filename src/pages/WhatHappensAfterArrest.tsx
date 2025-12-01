import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";
import { StickyCallButton } from "@/components/StickyCallButton";
import { FAQList } from "@/components/FAQItem";
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
import { Clock, Building, Users, Phone, CheckCircle, ArrowRight, Scale, FileText } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import {
  getArticleSchema,
  getFAQSchema,
  getSpeakableSchema,
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getCustomHowToSchema,
} from "@/lib/schemaUtils";
import afterArrestHeroBg from "@/assets/after-arrest-hero-bg.jpg";

const WhatHappensAfterArrest = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bail Bonds Guide", url: "/bail-bonds-guide" },
    { name: "What Happens After Arrest", url: "/bail-bonds-guide/what-happens-after-arrest" },
  ];

  const faqs = [
    {
      question: "How do I find out if someone was arrested?",
      answer:
        "Call the county jail directly. DeKalb County: (256) 845-3801. Cherokee County: (256) 927-3365. You can also check online inmate rosters on the sheriff's office websites.",
    },
    {
      question: "Can I bail someone out before they're booked?",
      answer:
        "No. Booking must be completed before bail can be posted. The jail won't have the necessary paperwork until booking is done.",
    },
    {
      question: "What if they have warrants in another county?",
      answer:
        "They may be held on a 'detainer' even after local bail is posted. The other jurisdiction must resolve their warrant before release. This can complicate and delay things significantly.",
    },
    {
      question: "Can I get updates on their status?",
      answer:
        "The jail may provide limited information. Your bondsman can often get status updates more easily since they work with the jail regularly.",
    },
    {
      question: "What if bail is set really high?",
      answer:
        "An attorney can file a motion for bail reduction. This requires a hearing where they argue the bail is excessive. Judges sometimes lower bail if circumstances warrant.",
    },
  ];

  const howToSteps = [
    {
      name: "Arrest",
      text: "Law enforcement takes the person into custody based on a warrant, witnessing a crime, or probable cause.",
    },
    {
      name: "Transport to Jail",
      text: "The arrested person is handcuffed, read their Miranda rights, and transported to the county jail.",
    },
    {
      name: "Booking Process",
      text: "Personal information recorded, photograph and fingerprints taken, property collected, medical screening, background check, and charges formally recorded. Typically 1-3 hours.",
    },
    {
      name: "Bail Determination",
      text: "Bail is set either immediately via a bail schedule for common offenses or by a judge at a bail hearing within 24-72 hours for more serious charges.",
    },
    {
      name: "Posting Bail",
      text: "Once bail is set, a bail bond can be posted through a licensed bondsman, paying 10% premium plus state fees.",
    },
    {
      name: "Release Processing",
      text: "After bail is posted, the jail processes release (verifies bond paperwork, confirms no other holds, returns personal property). Typically 2-10 hours.",
    },
  ];

  const schemas = [
    getArticleSchema(
      "What Happens After Arrest in Alabama",
      "What happens when someone is arrested in Alabama? Learn about booking, bail hearings, release timelines, and what your loved one is experiencing in jail.",
      "/bail-bonds-guide/what-happens-after-arrest"
    ),
    getFAQSchema(faqs),
    getCustomHowToSchema(
      "What Happens After an Arrest in Alabama",
      "The complete process from arrest through release on bail",
      howToSteps
    ),
    getSpeakableSchema(),
    getBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema(),
  ];

  return (
    <>
      <SEO
        title="What Happens After Arrest in Alabama | The Booking & Bail Process"
        description="What happens when someone is arrested in Alabama? Learn about booking, bail hearings, release timelines, and what your loved one is experiencing in jail."
        canonical="/bail-bonds-guide/what-happens-after-arrest"
        schema={schemas}
      />
      <Navigation />
      <StickyCallButton />

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${afterArrestHeroBg})` }}
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
            What Happens After an Arrest in Alabama
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed mb-6">
            When someone you care about is arrested, you're left wondering what's happening to them. Understanding the process helps you take the right steps to get them released as quickly as possible. Here's exactly what happens from the moment of arrest through release.
          </p>
          
          {/* Reading Meta */}
          <div className="mb-8">
            <ReadingMeta 
              author="Toni"
              licenseNumber="S0345"
              readingTime={7}
            />
          </div>

          {/* Answer Box */}
          <AnswerBox 
            question="What happens after someone is arrested in Alabama?"
            answer="After arrest, they're transported to jail for booking (1-3 hours): photograph, fingerprints, background check, property collected. Bail is set either immediately via schedule or by judge within 24-72 hours. Once bail is posted through a bondsman (10% + fees), release processing takes 2-10 hours depending on the facility."
          />

          <TableOfContents 
            items={[
              { id: 'the-arrest', title: 'The Arrest' },
              { id: 'booking-process', title: 'Booking Process' },
              { id: 'bail-determination', title: 'Bail Determination' },
              { id: 'time-in-holding', title: 'Time in Holding Cell' },
              { id: 'faqs', title: 'Frequently Asked Questions' },
            ]}
          />
        </div>
      </section>

      {/* The Arrest */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Users className="h-12 w-12 text-brand-red" />
            <h2 id="the-arrest" className="text-4xl font-black uppercase tracking-tight">The Arrest</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                An arrest occurs when law enforcement takes someone into custody based on:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <span>Witnessing a crime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <span>A warrant issued by a judge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold mt-1">•</span>
                  <span>Probable cause to believe a crime was committed</span>
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">At the scene:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>The person is handcuffed and informed of the charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>Miranda rights are read ("You have the right to remain silent...")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>They're transported to the county jail for booking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Important:</h3>
                <p className="text-lg">
                  The arrested person should remain calm, not resist, and avoid saying anything beyond basic identifying information until they have an attorney.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Booking Process */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <FileText className="h-12 w-12 text-brand-red" />
            <h2 id="booking-process" className="text-4xl font-black uppercase tracking-tight">Booking Process</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                Booking is the administrative process of officially recording the arrest. This happens at the county jail.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">Booking includes:</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl shrink-0">1.</span>
                    <div>
                      <strong>Personal information recorded</strong> — Name, date of birth, address, physical description
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl shrink-0">2.</span>
                    <div>
                      <strong>Photograph taken</strong> — The "mugshot"
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl shrink-0">3.</span>
                    <div>
                      <strong>Fingerprints taken</strong> — For identification and criminal records
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl shrink-0">4.</span>
                    <div>
                      <strong>Personal property collected</strong> — Wallet, phone, jewelry stored until release
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl shrink-0">5.</span>
                    <div>
                      <strong>Medical screening</strong> — Basic health questions and needs assessment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl shrink-0">6.</span>
                    <div>
                      <strong>Background check</strong> — Criminal history and outstanding warrants reviewed
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl shrink-0">7.</span>
                    <div>
                      <strong>Charges formally recorded</strong> — Official booking charges documented
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">How long does booking take?</h3>
                <p className="text-lg">
                  Typically 1-3 hours, but can be longer if the jail is busy (weekend nights especially) or if there are issues with identification or warrants.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Bail Determination */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="h-12 w-12 text-brand-red" />
            <h2 id="bail-determination" className="text-4xl font-black uppercase tracking-tight">Bail Determination</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                After booking, bail must be set before release can happen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Bail schedule (immediate bail):</h3>
                  <p className="text-lg">
                    Many counties have pre-set bail amounts for common offenses. If the charges are on this schedule, bail is set immediately during booking—no judge required.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">Bail hearing (judicial determination):</h3>
                  <p className="text-lg">
                    For serious charges, felonies, or when the bail schedule doesn't apply, the defendant must appear before a judge or magistrate. This typically happens within 24-48 hours of arrest (sometimes up to 72 hours on weekends).
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">At the bail hearing:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span>Judge reviews charges and criminal history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span>Prosecution may argue for high bail or no bail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span>Defense (or defendant) can argue for lower bail or ROR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span>Judge sets bail amount and any conditions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Factors affecting bail amount:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                      <span>Severity of charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                      <span>Criminal history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                      <span>Flight risk</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                      <span>Community ties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                      <span>Danger to community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Time in Holding */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="h-12 w-12 text-brand-red" />
            <h2 id="time-in-holding" className="text-4xl font-black uppercase tracking-tight">Time in Holding</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                Between booking and release, the defendant is held in jail.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">What they experience:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span>Placed in a holding cell or general housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span>May be with other detainees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span>Limited phone access (calls are typically collect or require prepaid account)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span>Basic meals provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span>No personal belongings (stored until release)</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Can you contact them?</h3>
                  <p className="text-lg">
                    The defendant can usually make phone calls once booking is complete. Calls from jail require the recipient to accept charges or use a prepaid jail phone system. They may call you to arrange bail.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Can you visit?</h3>
                  <p className="text-lg">
                    Jails have specific visitation hours and rules. However, if you're working on bail, your time is better spent getting them released than visiting them inside.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Posting Bail */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Phone className="h-12 w-12 text-brand-red" />
            <h2 className="text-4xl font-black uppercase tracking-tight">Posting Bail</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                Once bail is set, you can post bail to secure release.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">Your options:</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl">1.</span>
                    <div>
                      <strong>Cash bond</strong> — Pay the full amount to the jail
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl">2.</span>
                    <div>
                      <strong>Surety bond</strong> — Contact a bail bondsman (most common)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-red font-black text-xl">3.</span>
                    <div>
                      <strong>Property bond</strong> — Pledge real estate (complex, slower)
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Using a bail bondsman (fastest option):</h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">1.</span>
                    <span>Call Connie's Bail Bonding: (256) 601-2041</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">2.</span>
                    <span>Provide defendant's name, DOB, charges, bail amount</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">3.</span>
                    <span>Complete paperwork (can be done by phone)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">4.</span>
                    <span>Pay premium (10%) plus state fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">5.</span>
                    <span>We post the bond at the jail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-700 font-bold">6.</span>
                    <span>Defendant is processed for release</span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Release Processing */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Building className="h-12 w-12 text-brand-red" />
            <h2 className="text-4xl font-black uppercase tracking-tight">Release Processing</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                After bail is posted, the jail processes the release. This is often called "outtake."
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">Release process includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>Verification of bond paperwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>Confirmation that no other holds exist (warrants from other jurisdictions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>Return of personal property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>Release paperwork signed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-gray-600 shrink-0" />
                    <span>Defendant physically released</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">How long does release take?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span><strong>DeKalb County Jail:</strong> Typically 2-8 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span><strong>Cherokee County Jail:</strong> Typically 2-10 hours</span>
                  </li>
                </ul>
                <p className="mt-4 text-lg">
                  Release time depends on staffing, time of day, and how busy the jail is. Overnight and weekend releases often take longer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* After Release */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">After Release</h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-xl mb-6">
                Once released, the defendant has obligations:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Immediate priorities:</h3>
                  <ol className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-700 font-bold">1.</span>
                      <span>Get court date information (should be provided at release)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-700 font-bold">2.</span>
                      <span>Contact an attorney if they don't have one</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-700 font-bold">3.</span>
                      <span>Understand bail conditions (travel restrictions, check-ins, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-700 font-bold">4.</span>
                      <span>Stay in contact with cosigner and bondsman</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Ongoing obligations:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Attend ALL court appearances (missing one triggers forfeiture)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Follow any bail conditions set by the judge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Keep bondsman informed of address/phone changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Show up on time—being late can be treated as failure to appear</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">What happens at court:</h3>
                <p className="text-lg">
                  The case proceeds through arraignment, pretrial hearings, and potentially trial. This can take months. The defendant must appear at every scheduled hearing until the case concludes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Timeline Summary */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">Timeline Summary</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left font-black uppercase">Stage</th>
                  <th className="p-4 text-left font-black uppercase">Typical Timeframe</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Arrest to arrival at jail</td>
                  <td className="p-4">30 min - 1 hour</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="p-4">Booking process</td>
                  <td className="p-4">1-3 hours</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Bail set (schedule)</td>
                  <td className="p-4">Immediate after booking</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="p-4">Bail set (hearing required)</td>
                  <td className="p-4">24-72 hours</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Bail posted to release</td>
                  <td className="p-4">2-10 hours</td>
                </tr>
                <tr className="bg-green-50 border-b">
                  <td className="p-4 font-bold">Total (best case):</td>
                  <td className="p-4 font-bold text-green-700">4-6 hours</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-4 font-bold">Total (worst case):</td>
                  <td className="p-4 font-bold text-red-700">3-4 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl text-center mt-8">
            The biggest variable is whether bail is set immediately or requires a hearing. Once bail is posted, release is usually same-day.
          </p>
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
            Someone You Know Just Got Arrested?
          </h2>
          <p className="text-xl text-gray-300">
            Call us now. We'll find out their status, bail amount, and get the process started immediately. Available 24/7.
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
                <Building className="h-12 w-12 text-brand-red mb-4" />
                <h3 className="text-xl font-bold mb-3">DeKalb County Jail Guide</h3>
                <p className="text-gray-600 mb-4">
                  How to post bail at DeKalb County Detention Center in Fort Payne, AL.
                </p>
                <a
                  href="/bail-bonds-guide/dekalb-county-jail-guide"
                  className="text-brand-red font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-brand-red mb-4" />
                <h3 className="text-xl font-bold mb-3">Cherokee County Jail Guide</h3>
                <p className="text-gray-600 mb-4">
                  How to post bail at Cherokee County Detention Center in Centre, AL.
                </p>
                <a
                  href="/bail-bonds-guide/cherokee-county-jail-guide"
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

export default WhatHappensAfterArrest;