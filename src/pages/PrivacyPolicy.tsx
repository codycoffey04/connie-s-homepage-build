import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import scalesJusticeImg from "@/assets/scales-justice.jpg";

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { name: "Privacy Policy", url: "/privacy-policy" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Connie's Bail Bonding",
    "description": "Learn how Connie's Bail Bonding collects, uses, and protects your personal information.",
    "url": "https://connies-bailbonds.com/privacy-policy",
    "mainEntity": {
      "@type": "Article",
      "headline": "Privacy Policy",
      "datePublished": "2025-12-03",
      "dateModified": "2025-12-03",
      "author": {
        "@type": "Organization",
        "name": "Connie's Bail Bonding, LLC"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Connie's Bail Bonding</title>
        <meta name="description" content="Learn how Connie's Bail Bonding collects, uses, and protects your personal information. Serving DeKalb and Cherokee Counties, Alabama." />
        <link rel="canonical" href="https://connies-bailbonds.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Connie's Bail Bonding" />
        <meta property="og:description" content="Learn how Connie's Bail Bonding collects, uses, and protects your personal information." />
        <meta property="og:url" content="https://connies-bailbonds.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Connie's Bail Bonding" />
        <meta name="twitter:description" content="Learn how Connie's Bail Bonding collects, uses, and protects your personal information." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${scalesJusticeImg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl py-16 md:py-24">
          <AnimatedSection>
            <Breadcrumb items={breadcrumbs} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 [text-shadow:_0_2px_12px_rgba(0,0,0,0.8)]">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">
              How We Protect Your Information
            </p>
            <p className="text-sm text-white/70 mt-4">Last Updated: December 3, 2025</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Connie's Bail Bonding, LLC is a licensed bail bond agency serving DeKalb and Cherokee Counties, Alabama. 
              Our office is located at 2700 Jordan Rd SW, Fort Payne, AL 35967. We are licensed by the Alabama Professional 
              Bail Bonding Board (APBB).
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information when you visit our 
              website or use our services.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Information We Collect */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Information We Collect</h2>
          
          <h3 className="text-xl font-bold mb-4">When You Contact Us or Use Our Services</h3>
          <p className="text-muted-foreground mb-4">We may collect the following information to process bail bonds:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Full name, date of birth, address, phone number, and email</li>
            <li>Driver's license or government ID number</li>
            <li>Social Security number (for cosigner qualification)</li>
            <li>Employment and income information</li>
            <li>Financial information for payment processing</li>
            <li>Information about the defendant (name, charges, jail location, case details)</li>
            <li>Collateral documentation (property titles, vehicle information) when applicable</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">When You Visit Our Website</h3>
          <p className="text-muted-foreground mb-4">Our website may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li>IP address and browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring website</li>
          </ul>
          <p className="text-muted-foreground font-medium">
            We do not collect credit card or payment information through our website. All payments are processed by phone or in person.
          </p>
        </AnimatedSection>
      </Section>

      {/* How We Use Your Information */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Process bail bond applications and post bonds</li>
            <li>Verify cosigner eligibility</li>
            <li>Process payments</li>
            <li>Communicate with you about bond status and court dates</li>
            <li>Comply with court requirements and legal obligations</li>
            <li>Locate defendants who fail to appear (as required by the bail bond agreement)</li>
          </ul>
          <p className="text-muted-foreground font-bold">We do not sell your personal information to third parties.</p>
        </AnimatedSection>
      </Section>

      {/* How We Share Your Information */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">How We Share Your Information</h2>
          <p className="text-muted-foreground mb-4">We share your information only as necessary to conduct our business or as required by law:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li><strong>Courts and jails</strong> — to post bonds and fulfill legal requirements</li>
            <li><strong>Surety insurance companies</strong> — to underwrite bonds</li>
            <li><strong>Law enforcement</strong> — when required by law or to locate defendants who fail to appear</li>
            <li><strong>Alabama Professional Bail Bonding Board</strong> — as required for regulatory compliance</li>
            <li><strong>Collection agencies or attorneys</strong> — if necessary to recover forfeited bond amounts</li>
          </ul>
          <p className="text-muted-foreground">
            We do not disclose nonpublic personal information about our customers or former customers to anyone except 
            as described above or as otherwise permitted by law.
          </p>
        </AnimatedSection>
      </Section>

      {/* How We Protect Your Information */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">How We Protect Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We maintain reasonable security measures to protect your personal information, as required by Alabama law 
            (Ala. Code § 8-38-3). These include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Locked storage for paper records</li>
            <li>Password protection for digital files</li>
            <li>Limited employee access to sensitive information</li>
            <li>Secure disposal of records no longer needed</li>
          </ul>
        </AnimatedSection>
      </Section>

      {/* Data Breach Notification */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Data Breach Notification</h2>
          <p className="text-muted-foreground">
            In the event of a data breach involving your sensitive personal information, we will notify you in accordance 
            with the Alabama Data Breach Notification Act of 2018 (Ala. Code § 8-38-1 et seq.), no later than 45 days 
            after determining a breach has occurred.
          </p>
        </AnimatedSection>
      </Section>

      {/* Cookies and Tracking */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Cookies and Tracking</h2>
          <p className="text-muted-foreground">
            Our website may use cookies for basic analytics to understand how visitors use the site. You can disable 
            cookies in your browser settings. We do not use cookies to collect personal information or track you 
            across other websites.
          </p>
        </AnimatedSection>
      </Section>

      {/* Children's Privacy */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Children's Privacy</h2>
          <p className="text-muted-foreground">
            Our website and services are not directed to children under 18. You must be 18 or older to enter into a 
            bail bond agreement in Alabama. We do not knowingly collect information from children under 13.
          </p>
        </AnimatedSection>
      </Section>

      {/* Your Rights */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Your Rights</h2>
          <p className="text-muted-foreground mb-4">You may contact us to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Request information about what personal data we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Ask questions about our privacy practices</li>
          </ul>
        </AnimatedSection>
      </Section>

      {/* Contact Us */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Contact Us</h2>
          <p className="text-muted-foreground mb-4">If you have questions about this Privacy Policy, contact us at:</p>
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
            <p className="font-bold text-foreground mb-2">Connie's Bail Bonding, LLC</p>
            <p className="text-muted-foreground mb-4">
              2700 Jordan Rd SW<br />
              Fort Payne, AL 35967
            </p>
            <div className="space-y-2">
              <a href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="w-4 h-4" />
                Richard: {phoneNumbers.richard.number}
              </a>
              <a href={`tel:${phoneNumbers.connie.number.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="w-4 h-4" />
                Connie: {phoneNumbers.connie.number}
              </a>
              <a href={`tel:${phoneNumbers.toni.number.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="w-4 h-4" />
                Toni: {phoneNumbers.toni.number}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Changes to This Policy */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. The "Last Updated" date at the top reflects the most recent revision.
          </p>
        </AnimatedSection>
      </Section>

      {/* Related Links */}
      <Section variant="muted">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">See also:</p>
            <Link to="/terms-of-service" className="text-primary hover:underline font-semibold">
              Terms of Service →
            </Link>
          </div>
        </AnimatedSection>
      </Section>

      <Footer />
      <StickyCallButton />
    </>
  );
};

export default PrivacyPolicy;
