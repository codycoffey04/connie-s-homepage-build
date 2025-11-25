import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { PhoneButton } from "@/components/PhoneButton";
import { FAQList } from "@/components/FAQItem";
import { StickyCallButton } from "@/components/StickyCallButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { getLocalBusinessSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/schemaUtils";

const generalFaqs = [
  {
    question: "How much does a bail bond cost in Alabama?",
    answer: "Alabama law sets bail bond fees at 10% of the total bail amount. This rate is required by state law—every licensed bail bondsman in Alabama charges the same percentage.\n\nExamples:\n• $1,000 bail = $100 bond fee\n• $5,000 bail = $500 bond fee\n• $10,000 bail = $1,000 bond fee\n\nThis 10% fee is non-refundable, even if charges are dropped or the defendant is found not guilty. That's because you're paying for the bail bond service, not the bail itself."
  },
  {
    question: "Can I get a bail bond with bad credit?",
    answer: "Yes. Bad credit does not prevent you from getting a bail bond. We work with families in all financial situations.\n\nWhile we may ask about your financial situation to set up payment plans, we don't run credit checks like a bank would. Our focus is on helping you get your loved one home, not judging your credit score.\n\nIf you're concerned about affording the bond fee, ask us about flexible payment plans when you call."
  },
  {
    question: "How do I find out someone's bail amount in Fort Payne?",
    answer: "Call us at 256-601-2041 and we'll look it up for you immediately.\n\nAll we need is the person's full legal name and which jail they're in (DeKalb County Detention Center or Cherokee County Detention Center). We have direct access to jail booking systems and can get you the bail amount, charges, and booking information within minutes.\n\nYou can also call the jail directly:\n• DeKalb County Detention Center: 256-845-3851\n• Cherokee County Detention Center: 256-927-3643\n\nBut calling us is faster—we'll not only get the information but also explain your options right away."
  },
  {
    question: "What happens if you miss court after posting bail?",
    answer: "Missing a court date after posting bail has serious consequences:\n\n1. **Bail Forfeiture:** The court keeps the full bail amount (not just the 10% you paid us)\n2. **Warrant Issued:** A bench warrant is issued for your arrest\n3. **Financial Responsibility:** The person who signed the bond becomes responsible for the full bail amount\n4. **Additional Charges:** You may face additional criminal charges for failure to appear\n\nThis is why attending all court dates is absolutely critical. We provide court date reminders and follow-up to help you stay compliant.\n\nIf you have a legitimate emergency (medical issue, family crisis), call us immediately so we can help communicate with the court and try to resolve the situation before a warrant is issued."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. We charge only the state-required 10% premium—nothing extra. No administrative fees, no processing fees, no surprise charges. What we quote you on the phone is exactly what you'll pay.\n\nSome bail bond companies add extra fees on top of the 10%. We don't. Transparency is one of our core values."
  },
  {
    question: "What if I can't afford the full 10% upfront?",
    answer: "We understand that coming up with the full bond fee can be challenging, especially on short notice. That's why we offer flexible payment plans.\n\nWe'll work with you to create a payment arrangement that fits your budget. We also accept all major credit cards. Call us at 256-601-2041 to discuss your options—there's no pressure, just honest guidance about what we can do to help."
  },
  {
    question: "Do you really answer calls 24/7?",
    answer: "Yes. Connie, Toni, or Richard will personally answer your call at any time—even at 3 AM on Christmas morning.\n\nWe're a family business, and we answer our own phones. No call centers. No voicemail. No waiting until \"business hours.\" When you call, you talk directly to one of us."
  },
  {
    question: "How long does it take to get someone out of jail?",
    answer: "Typical release time is 2–8 hours after we post the bond, depending on how busy the jail is. Several factors affect timing:\n\n• Jail workload: If the jail is processing multiple releases, it may take longer\n• Shift changes: Jails have shift change times (approximately 5–7 AM, 11 AM–1 PM, 5–7 PM) when releases may pause\n• Time of day: Late night and early morning releases are often faster because the jail is less busy\n• Day of week: Weekend releases can take slightly longer due to reduced staff\n\nWe stay in communication with you throughout the process so you always know what's happening."
  },
  {
    question: "What happens if someone is arrested on the weekend?",
    answer: "For most charges with preset bail amounts, we can post bail 24/7—even on weekends and holidays. Your loved one can still be released.\n\nHowever, for serious charges that require a bond hearing before a judge, the defendant may need to wait until the next court day (usually Monday). In those cases, we can still help—we'll be ready to post bond as soon as the judge sets the bail amount."
  }
];

const processFaqs = [
  {
    question: "How does the bail bond process work?",
    answer: "Step 1: Call us immediately\nThe moment you know someone's been arrested, call Richard, Connie, or Toni. We'll answer right away.\n\nStep 2: We gather information\nWe'll ask for the defendant's full name, which jail they're in, and the charge (if you know it). We'll explain all costs upfront and answer any questions.\n\nStep 3: We meet you\nWe'll meet you at the jail or courthouse to complete the paperwork. You don't have to navigate the system alone.\n\nStep 4: Bond is posted\nWe post the bond with the court and coordinate with jail staff.\n\nStep 5: Your loved one is released\nRelease typically takes 2–8 hours. We'll keep you updated throughout."
  },
  {
    question: "What information do I need to have ready when I call?",
    answer: "To help us assist you quickly, please have:\n\n• Defendant's full legal name (the person who was arrested)\n• Location (which jail they're in—DeKalb County Detention Center or Cherokee County Detention Center)\n• Charge (if you know it—we can also find this out for you)\n\nIf you don't have all this information, don't worry. We'll help you figure it out."
  },
  {
    question: "Where do I meet you?",
    answer: "We'll meet you at whichever location is most convenient:\n\nFor DeKalb County arrests:\n• DeKalb County Detention Center: 2801 Jordan Rd SW, Fort Payne, AL 35967\n• DeKalb County Courthouse: 300 Grand Ave SW, Fort Payne, AL 35967\n\nFor Cherokee County arrests:\n• Cherokee County Detention Center: 110 Cedar Bluff Rd, Centre, AL 35960\n• Cherokee County Courthouse: 100 Main St, Centre, AL 35960\n\nYou can also meet us at our office at 2700 Jordan Rd SW, Fort Payne, AL 35967 (right next to the DeKalb County jail)."
  },
  {
    question: "What is collateral and do I need it?",
    answer: "Collateral is property or assets (like a vehicle title, property deed, or jewelry) that can be used to secure a bail bond for higher bail amounts or higher-risk situations.\n\nFor most standard bonds, collateral is not required—just the 10% fee. However, for very large bail amounts (typically $50,000+) or certain situations, we may ask for collateral as additional security.\n\nIf collateral is needed, we'll discuss your options. We accept various forms of collateral and will work with you to find a solution that fits your situation."
  },
  {
    question: "What happens if the defendant doesn't show up for court?",
    answer: "If the defendant fails to appear in court, the bail bond becomes forfeited and you become responsible for the full bail amount (not just the 10% fee).\n\nThis is why it's critical that the defendant attends all court dates. We'll provide court date reminders and follow-up support to help ensure compliance.\n\nIf there's a legitimate reason for missing court (medical emergency, etc.), contact us immediately so we can help resolve the situation with the court."
  }
];

const localFaqs = [
  {
    question: "Where is the DeKalb County jail located?",
    answer: "The DeKalb County Detention Center is located at:\n\n**2801 Jordan Rd SW, Fort Payne, AL 35967**\n\nOur office is right next door at 2700 Jordan Rd SW, so we can be at the jail within 2 minutes of your call.\n\nIf you need to visit someone or drop off items, the jail is just off Highway 35 in Fort Payne. There's parking available on-site."
  },
  {
    question: "How long does it take to bail someone out of DeKalb County jail?",
    answer: "In Fort Payne (DeKalb County Detention Center), typical release time is **1-8 hours** after we post the bond.\n\nFor other DeKalb County cities (Rainsville, Fyffe, Henagar, Valley Head, Pisgah), release typically takes **2-8 hours**.\n\nFor Cherokee County (Centre), release typically takes **2-10 hours**.\n\nFactors that affect timing:\n• How busy the jail is (late night/early morning is usually faster)\n• Shift changes (releases may pause during shift changes)\n• Booking backlog (weekends can be busier)\n• Administrative processing time\n\nWe stay in communication with you throughout the entire process so you know exactly what's happening."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all of DeKalb County and Cherokee County in Northeast Alabama, including:\n\nDeKalb County: Fort Payne, Rainsville, Henagar, Fyffe, Valley Head, Pisgah, and all surrounding communities\n\nCherokee County: Centre and all surrounding communities\n\nIf your loved one is arrested anywhere in these counties, we can help."
  },
  {
    question: "Why should I choose a local bail bondsman instead of a big company?",
    answer: "Local matters in bail bonds. Here's why:\n\nSpeed: We're located right next to the DeKalb County Detention Center. We can be at the jail within minutes, not hours.\n\nKnowledge: We work with DeKalb and Cherokee County jails and courts every single day. We know the staff, the procedures, and how to expedite releases.\n\nPersonal service: You talk directly to Connie, Toni, or Richard—not a call center in another city. We treat you like a neighbor, because you are.\n\nCommunity reputation: We've built our reputation in Fort Payne and Centre since 2019. Our 5-star reviews come from your neighbors."
  },
  {
    question: "Do you handle federal bonds or immigration bonds?",
    answer: "We focus exclusively on state and local bonds in DeKalb and Cherokee Counties (felonies, misdemeanors, DUI, traffic violations, probation violations, etc.).\n\nWe do not handle federal bonds or immigration bonds, as these require specialized licensing and different procedures."
  }
];

const paymentFaqs = [
  {
    question: "Do you offer payment plans for bail bonds?",
    answer: "Yes. We offer flexible payment plans that work with your budget.\n\nHere's how it works:\n• We post the bond immediately—your loved one doesn't wait for you to pay in full\n• You pay a down payment (amount varies based on the bond)\n• We set up installment payments over time\n• No interest charges—just the state-required 10% fee\n\nEvery family's situation is different, so we customize payment arrangements based on what you can afford. Call us at 256-601-2041 to discuss your specific situation—we'll work something out."
  },
  {
    question: "Can I use collateral instead of cash for a bail bond?",
    answer: "For most standard bail bonds (under $50,000), collateral is not required—just the 10% fee.\n\nFor higher bail amounts or special situations, we may accept collateral such as:\n• Vehicle titles (car, truck, motorcycle)\n• Real estate/property deeds\n• Jewelry or valuable assets\n\nCollateral serves as additional security to guarantee the defendant will appear in court. If all court appearances are made, your collateral is returned in full.\n\nCall us to discuss whether collateral would be needed for your specific situation."
  },
  {
    question: "Can I pay with a credit card?",
    answer: "Yes. We accept all major credit cards (Visa, Mastercard, Discover, American Express). This makes it easier to get help quickly, even if you don't have cash on hand."
  },
  {
    question: "Is the 10% fee refundable?",
    answer: "No. The 10% bond fee is non-refundable, even if the charges are dropped, the case is dismissed, or the defendant is found not guilty.\n\nYou're paying for the bail bond service—for us to post the full bail amount with the court and take on the risk that the defendant will appear at all court dates. Once the service is provided, the fee is earned."
  },
  {
    question: "What if bail is set higher than we expected?",
    answer: "If bail is set higher than you anticipated, call us anyway. We offer payment plans that can make even higher bonds manageable. We'll work with you to find a solution.\n\nFor very high bail amounts, we may discuss collateral options or involve a co-signer to help secure the bond."
  }
];

const legalFaqs = [
  {
    question: "Are you licensed?",
    answer: "Yes. Connie, Toni, and Richard are all licensed Alabama bail bond agents, licensed by the Alabama Professional Bail Bonding Board.\n\nAlabama requires all bail bond agents to pass background checks, complete education requirements, and maintain continuing education. We follow all state regulations and operate with complete transparency."
  },
  {
    question: "Can you give me legal advice about my case?",
    answer: "No. We're bail bond agents, not attorneys. We can help you navigate the bail process, but we cannot provide legal advice about your case, charges, or potential outcomes.\n\nIf you need legal representation, we're happy to explain the difference between bail bonds and legal defense, but you'll need to contact a criminal defense attorney for advice about your case."
  },
  {
    question: "What is Aniah's Law and how does it affect bail?",
    answer: "Aniah's Law is an Alabama constitutional amendment passed in 2022 that allows judges to deny bail for certain violent offenses (such as murder, first-degree kidnapping, first-degree rape, and some other serious violent crimes).\n\nBefore Aniah's Law, almost all offenses were bailable. Now, for the most serious violent crimes, a prosecutor can request that the judge deny bail entirely.\n\nFor the vast majority of charges (DUI, theft, assault, drug possession, traffic offenses, probation violations, etc.), bail is still available and we can help. But for certain extreme cases, bail may be denied by the court—in which case there's nothing any bail bondsman can do."
  },
  {
    question: "Do you work with attorneys or can you recommend one?",
    answer: "We work professionally with many local attorneys, but we cannot recommend specific lawyers as that could create a conflict of interest.\n\nIf you need an attorney, the Alabama State Bar has a lawyer referral service, or you can ask the court about public defenders if you qualify."
  }
];

const chargeSpecificFaqs = [
  {
    question: "How much does a DUI bail bond cost in Alabama?",
    answer: "DUI bail bonds in Alabama cost 10% of the bail amount, just like any other charge.\n\nTypical DUI bail amounts:\n• First-time DUI (no injuries): $500-$2,500\n• Second DUI: $2,500-$5,000\n• DUI with injury: $5,000-$25,000\n• Felony DUI: $10,000+\n\nExamples:\n• $1,000 DUI bail = $100 bond fee\n• $5,000 DUI bail = $500 bond fee\n\nWe handle DUI bail bonds 24/7 throughout DeKalb and Cherokee Counties. Call 256-601-2041 immediately after arrest—the sooner you call, the sooner we can start the release process."
  },
  {
    question: "Can you get bail for a felony charge in Alabama?",
    answer: "Yes, bail is available for most felony charges in Alabama.\n\nHowever, under Aniah's Law (passed in 2022), judges can deny bail entirely for certain violent felonies such as:\n• Murder\n• First-degree kidnapping\n• First-degree rape\n• First-degree robbery\n• Certain sexual offenses involving minors\n\nFor all other felony charges (drug possession, theft, burglary, assault, fraud, etc.), bail is available and we can help.\n\nFelony bail amounts are typically higher ($10,000-$100,000+), but we offer payment plans to make it manageable. Call us to discuss your specific situation."
  },
  {
    question: "What is the bail amount for domestic violence in Alabama?",
    answer: "Domestic violence bail amounts in Alabama vary based on severity:\n\n• Third-degree domestic violence (misdemeanor): $500-$2,500\n• Second-degree domestic violence (misdemeanor): $1,000-$5,000\n• First-degree domestic violence (felony): $5,000-$25,000+\n\nFactors that affect bail:\n• Prior domestic violence convictions\n• Severity of injuries\n• Whether weapons were involved\n• Violation of protective orders\n\nWe handle domestic violence bail bonds throughout DeKalb and Cherokee Counties. Alabama law requires a 10% bond fee regardless of the charge."
  },
  {
    question: "How does bail work for drug charges in Alabama?",
    answer: "Drug charge bail in Alabama depends on the type and amount:\n\n**Marijuana possession:**\n• Personal use amount: $500-$2,500 bail\n• Larger amounts: $5,000-$25,000 bail\n\n**Controlled substances (meth, cocaine, pills):**\n• Possession: $2,500-$10,000 bail\n• Trafficking: $25,000-$100,000+ bail\n\nAll bail bonds cost 10% of the bail amount. We offer payment plans for higher bail amounts.\n\nWe handle drug-related bail bonds 24/7. Call 256-601-2041 to discuss your specific charges and bail options."
  }
];

const FAQ = () => {
  const allFaqs = [...generalFaqs, ...processFaqs, ...localFaqs, ...paymentFaqs, ...legalFaqs, ...chargeSpecificFaqs];
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Bail Bonds FAQ | Common Questions Answered"
        description="Get answers to frequently asked questions about bail bonds in Alabama. Learn about costs, the process, payment options, and more from licensed agents."
        canonical="/faq"
        schema={[
          getLocalBusinessSchema(),
          getFAQSchema(allFaqs),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" }
          ])
        ]}
      />
      <Navigation />
      <StickyCallButton />
      <ScrollToTop />
      
      {/* Hero Section */}
      <Section variant="default" className="pt-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Frequently Asked Questions About Bail Bonds
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <PhoneButton name="Richard" number="256-601-2041" variant="primary" />
            <PhoneButton name="Connie" number="256-630-2824" variant="primary" />
            <PhoneButton name="Toni" number="256-440-0822" variant="primary" />
          </div>
          
          <p className="text-lg text-muted-foreground italic">
            Have a question we didn't answer? Call us 24/7—we're here to help.
          </p>
        </div>
      </Section>

      {/* Table of Contents - Sticky Navigation */}
      <Section className="bg-muted/50 py-8 sticky top-20 z-40 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-4 text-center text-foreground">Jump to Section:</h2>
          <nav className="flex flex-wrap justify-center gap-4">
            <a 
              href="#general" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              General Questions
            </a>
            <a 
              href="#process" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              The Process
            </a>
            <a 
              href="#local" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              Local Info
            </a>
            <a 
              href="#payment" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              Payment & Costs
            </a>
            <a 
              href="#legal" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              Legal & Compliance
            </a>
            <a 
              href="#charges" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              By Charge Type
            </a>
          </nav>
        </div>
      </Section>

      {/* General Bail Bond Questions */}
      <Section variant="muted" id="general">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            General Bail Bond Questions
          </h2>
          <FAQList faqs={generalFaqs} />
        </div>
      </Section>

      {/* The Bail Process */}
      <Section variant="default" id="process">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            The Bail Process
          </h2>
          <FAQList faqs={processFaqs} />
        </div>
      </Section>

      {/* Local Questions */}
      <Section variant="muted" id="local">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            Local Questions
          </h2>
          <FAQList faqs={localFaqs} />
        </div>
      </Section>

      {/* Payment & Costs */}
      <Section variant="default" id="payment">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            Payment & Costs
          </h2>
          <FAQList faqs={paymentFaqs} />
        </div>
      </Section>

      {/* Legal & Compliance Questions */}
      <Section variant="muted" id="legal">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            Legal & Compliance Questions
          </h2>
          <FAQList faqs={legalFaqs} />
        </div>
      </Section>

      {/* Charge-Specific Questions */}
      <Section variant="default" id="charges">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            Bail Bonds by Charge Type
          </h2>
          <FAQList faqs={chargeSpecificFaqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Still Have Questions?
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            If you didn't find your answer here, call us anytime. We're here 24/7 to walk you through the process and answer any questions you have.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <PhoneButton name="Richard" number="256-601-2041" variant="primary" />
            <PhoneButton name="Connie" number="256-630-2824" variant="primary" />
            <PhoneButton name="Toni" number="256-440-0822" variant="primary" />
          </div>
          
          <div className="pt-8 space-y-4 text-sm text-foreground/70">
            <p className="font-semibold">
              Connie's Bail Bonding, LLC<br />
              2700 Jordan Rd SW<br />
              Fort Payne, AL 35967
            </p>
            <p className="italic">
              Licensed Alabama Bail Bond Agents | Family-Owned Since 2019 | Serving DeKalb & Cherokee Counties
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQ;
