import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone, AlertTriangle, ExternalLink } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";
import scalesJusticeImg from "@/assets/scales-justice.jpg";

const TermsOfService = () => {
  const breadcrumbs = [
    { name: "Terms of Service", url: "/terms-of-service" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service | Connie's Bail Bonding",
    "description": "Terms and conditions for using Connie's Bail Bonding website and services.",
    "url": "https://connies-bailbonds.com/terms-of-service",
    "mainEntity": {
      "@type": "Article",
      "headline": "Terms of Service",
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
        <title>Terms of Service | Connie's Bail Bonding</title>
        <meta name="description" content="Terms and conditions for using Connie's Bail Bonding website and services. Serving DeKalb and Cherokee Counties, Alabama." />
        <link rel="canonical" href="https://connies-bailbonds.com/terms-of-service" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms of Service | Connie's Bail Bonding" />
        <meta property="og:description" content="Terms and conditions for using Connie's Bail Bonding website and services." />
        <meta property="og:url" content="https://connies-bailbonds.com/terms-of-service" />
        <meta property="og:image" content="https://connies-bailbonds.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Terms of Service - Professional bail bond services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Connie's Bail Bonding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Connie's Bail Bonding" />
        <meta name="twitter:description" content="Terms and conditions for using Connie's Bail Bonding website and services." />
        <meta name="twitter:image" content="https://connies-bailbonds.com/og-image.png" />
        <meta name="twitter:image:alt" content="Terms of Service - Professional bail bond services" />
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
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">
              Agreement for Use of Our Website & Services
            </p>
            <p className="text-sm text-white/70 mt-4">Last Updated: December 3, 2025</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Agreement to Terms */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.
          </p>
        </AnimatedSection>
      </Section>

      {/* About Our Company */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">About Our Company</h2>
          <p className="text-muted-foreground mb-6">
            Connie's Bail Bonding, LLC is a privately owned bail bond agency licensed by the Alabama Professional Bail 
            Bonding Board (APBB). We are not a government agency, law firm, or court. Our services are available only 
            in Alabama, specifically DeKalb and Cherokee Counties.
          </p>
          
          <h3 className="text-xl font-bold mb-4">Licensed Agents:</h3>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-lg mb-6">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold">Agent</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">Role</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">License #</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Connie</td>
                  <td className="px-4 py-3 text-muted-foreground">Agency Owner</td>
                  <td className="px-4 py-3 text-muted-foreground">B0092</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Richard</td>
                  <td className="px-4 py-3 text-muted-foreground">Professional Surety Bondsman</td>
                  <td className="px-4 py-3 text-muted-foreground">S0334</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Toni</td>
                  <td className="px-4 py-3 text-muted-foreground">Professional Surety Bondsman</td>
                  <td className="px-4 py-3 text-muted-foreground">S0345</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-muted-foreground">
            Verify our licenses at{" "}
            <a 
              href="https://www.apbb.alabama.gov/licensees/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              apbb.alabama.gov/licensees <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </AnimatedSection>
      </Section>

      {/* Website Information Disclaimer */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Website Information Disclaimer</h2>
          <p className="text-muted-foreground mb-4">
            The information on this website is for general informational purposes only. While we strive to provide 
            accurate information about the bail process in Alabama, we make no guarantees that the information is 
            complete, current, or applicable to your specific situation.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <p className="text-amber-800 font-semibold">
              This website does not provide legal advice. Nothing on this site creates an attorney-client relationship. 
              For legal advice about your case, consult a licensed attorney.
            </p>
          </div>
          <p className="text-muted-foreground">
            We are not responsible for errors or omissions on the website, or for any actions you take based on the 
            information provided here.
          </p>
        </AnimatedSection>
      </Section>

      {/* Bail Bond Services */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Bail Bond Services</h2>
          
          <h3 className="text-xl font-bold mb-3">Services Subject to Separate Agreement</h3>
          <p className="text-muted-foreground mb-6">
            Actual bail bond services are governed by a separate written Bail Bond Agreement that you will sign in person. 
            Using this website does not create a bail bond contract.
          </p>

          <h3 className="text-xl font-bold mb-3">No Guarantee of Release</h3>
          <p className="text-muted-foreground mb-6">
            We cannot guarantee that any defendant will be released from custody. Bail is subject to court approval, 
            and judges may deny or modify bail at their discretion.
          </p>

          <h3 className="text-xl font-bold mb-3">Premium and Fees</h3>
          <p className="text-muted-foreground mb-6">
            The bail bond premium in Alabama is 10% of the total bail amount, as established by industry standards. 
            Additional state fees apply pursuant to Alabama Code § 12-19-311. All costs will be explained to you 
            before you agree to proceed.
          </p>

          <h3 className="text-xl font-bold mb-3">Premiums Are Non-Refundable</h3>
          <p className="text-muted-foreground">
            Once a bond is posted, the premium is fully earned and non-refundable, regardless of the outcome of the case. 
            Limited exceptions may apply under Alabama Administrative Code r. 153-X-6-.03 (such as if we fail to secure 
            the defendant's release or surrender the defendant without cause).
          </p>
        </AnimatedSection>
      </Section>

      {/* Cosigner Responsibilities - Important Warning */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Cosigner (Indemnitor) Responsibilities</h2>
          
          <div className="bg-red-50 border-2 border-brand-red rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-red-800 mb-3">IMPORTANT: Read This Before Cosigning</p>
                <p className="text-red-700 mb-4">
                  If you agree to cosign a bail bond, you are entering a serious financial obligation. By signing a 
                  Bail Bond Agreement, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-red-700">
                  <li>You guarantee the defendant will appear at all scheduled court dates</li>
                  <li>If the defendant fails to appear, you are liable for the <strong>full bail amount</strong>, not just the 10% premium</li>
                  <li>You are responsible for any recovery costs, including fees incurred to locate and return the defendant</li>
                  <li>Your wages may be garnished up to 25% of your disposable income to satisfy the debt</li>
                  <li>Any collateral you pledge (vehicle titles, property, etc.) may be seized and sold</li>
                  <li>Premiums are non-refundable once the bond is posted</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground font-bold">
            Cosigning a bail bond means you are putting your finances at risk. Do not cosign unless you fully trust 
            the defendant to appear at every court hearing.
          </p>
        </AnimatedSection>
      </Section>

      {/* Payment Terms */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Payment Terms</h2>
          <p className="text-muted-foreground mb-4">
            We accept cash, credit cards, and debit cards. Payments are processed by phone or in person—we do not 
            accept payment through our website.
          </p>
          <p className="text-muted-foreground mb-4">
            If you pay by credit card, we follow industry-standard security measures (PCI-DSS) to protect your 
            payment information. We do not store credit card numbers after the transaction is complete.
          </p>
          <p className="text-muted-foreground">
            If we charge a processing fee for credit card payments, this will be disclosed to you before payment.
          </p>
        </AnimatedSection>
      </Section>

      {/* Limitation of Liability */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">To the maximum extent permitted by Alabama law:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li>We are not liable for any indirect, incidental, or consequential damages arising from your use of this website or our services</li>
            <li>Our total liability to you shall not exceed the amount of the premium you paid for bail bond services</li>
            <li>We are not liable for the actions of any defendant released on bond</li>
            <li>We are not liable for information on this website that is outdated or inaccurate</li>
          </ul>
          <p className="text-muted-foreground">
            This limitation does not apply to liability that cannot be excluded under Alabama law, such as liability 
            for personal injury caused by our negligence.
          </p>
        </AnimatedSection>
      </Section>

      {/* Dispute Resolution */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Dispute Resolution</h2>
          
          <h3 className="text-xl font-bold mb-3">Governing Law</h3>
          <p className="text-muted-foreground mb-6">
            These Terms and any disputes arising from your use of this website or our services are governed by the 
            laws of the State of Alabama.
          </p>

          <h3 className="text-xl font-bold mb-3">Jurisdiction</h3>
          <p className="text-muted-foreground mb-6">
            Any legal proceedings must be brought in the state or federal courts located in DeKalb County, Alabama. 
            By using this website, you consent to the jurisdiction of these courts.
          </p>

          <h3 className="text-xl font-bold mb-3">Informal Resolution First</h3>
          <p className="text-muted-foreground">
            Before filing any legal claim, you agree to contact us first to attempt to resolve the dispute informally. 
            Many concerns can be resolved quickly through direct communication.
          </p>
        </AnimatedSection>
      </Section>

      {/* Intellectual Property */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content on this website—including text, logos, images, and design—is the property of Connie's Bail 
            Bonding, LLC and is protected by copyright. You may not copy, reproduce, or distribute our content 
            without written permission.
          </p>
        </AnimatedSection>
      </Section>

      {/* Third-Party Links */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Third-Party Links</h2>
          <p className="text-muted-foreground">
            Our website may contain links to third-party websites (such as court websites or the APBB). We are not 
            responsible for the content or privacy practices of those sites.
          </p>
        </AnimatedSection>
      </Section>

      {/* Changes to These Terms */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Changes to These Terms</h2>
          <p className="text-muted-foreground">
            We may update these Terms of Service at any time. The "Last Updated" date at the top reflects the most 
            recent revision. Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>
        </AnimatedSection>
      </Section>

      {/* Complaints and Regulatory Information */}
      <Section variant="muted">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Complaints and Regulatory Information</h2>
          <p className="text-muted-foreground mb-4">
            We are committed to ethical business practices and compliance with Alabama law. If you have a complaint 
            that we cannot resolve, you may contact the Alabama Professional Bail Bonding Board:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
            <p className="font-bold text-foreground mb-2">Alabama Professional Bail Bonding Board</p>
            <p className="text-muted-foreground mb-2">
              Website:{" "}
              <a 
                href="https://www.apbb.alabama.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                apbb.alabama.gov
              </a>
            </p>
            <p className="text-muted-foreground">Phone: (334) 353-8950</p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Contact Us */}
      <Section>
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Contact Us</h2>
          <div className="bg-muted p-6 rounded-lg max-w-md">
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

      {/* Related Links */}
      <Section variant="muted">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">See also:</p>
            <Link to="/privacy-policy" className="text-primary hover:underline font-semibold">
              ← Privacy Policy
            </Link>
          </div>
        </AnimatedSection>
      </Section>

      <Footer />
      <StickyCallButton />
    </>
  );
};

export default TermsOfService;
