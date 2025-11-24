export const getLocalBusinessSchema = (city?: string) => ({
  "@context": "https://schema.org",
  "@type": "BailBondService",
  "name": "Connie's Bail Bonding",
  "image": "https://conniesbailbonding.com/logo.png",
  "description": "24/7 bail bond services in Fort Payne, DeKalb County, and Cherokee County, Alabama",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2700 Jordan Rd SW",
    "addressLocality": "Fort Payne",
    "addressRegion": "AL",
    "postalCode": "35967",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.444389",
    "longitude": "-85.719772"
  },
  "telephone": "256-601-2041",
  "email": "info@conniesbailbonding.com",
  "url": "https://conniesbailbonding.com",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Fort Payne",
      "containedIn": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Rainsville",
      "containedIn": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Henagar",
      "containedIn": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Fyffe",
      "containedIn": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Centre",
      "containedIn": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Pisgah",
      "containedIn": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Valley Head",
      "containedIn": {
        "@type": "State",
        "name": "Alabama"
      }
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "256-601-2041",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US-AL"
    },
    {
      "@type": "ContactPoint",
      "telephone": "256-630-2824",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US-AL"
    },
    {
      "@type": "ContactPoint",
      "telephone": "256-440-0822",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US-AL"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://conniesbailbonding.com${item.url}`
  }))
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bail Bond Service",
  "provider": {
    "@type": "BailBondService",
    "name": "Connie's Bail Bonding"
  },
  "areaServed": {
    "@type": "State",
    "name": "Alabama"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bail Bond Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Emergency Bail Bonds",
          "description": "Immediate bail bond services available around the clock"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Misdemeanor Bail Bonds",
          "description": "Bail bonds for misdemeanor charges"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Felony Bail Bonds",
          "description": "Bail bonds for felony charges"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Payment Plans Available",
          "description": "Flexible payment options for bail bonds"
        }
      }
    ]
  }
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get a Bail Bond in Alabama",
  "description": "Step-by-step guide to getting a bail bond in Fort Payne and DeKalb County, Alabama",
  "totalTime": "PT2H",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Call Us Immediately",
      "text": "Contact Connie's Bail Bonding at 256-601-2041, 256-630-2824, or 256-440-0822. We answer 24/7/365.",
      "url": "https://conniesbailbonding.com/#call"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Provide Information",
      "text": "Tell us the inmate's name, jail location, and charges. We'll look up their bail amount and explain the process.",
      "url": "https://conniesbailbonding.com/#information"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Complete Paperwork",
      "text": "We'll meet you to complete the simple paperwork. Bring a valid ID and discuss payment options including flexible payment plans.",
      "url": "https://conniesbailbonding.com/#paperwork"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Post Bond & Release",
      "text": "We post the bond at the jail. Release typically takes 1-8 hours in Fort Payne, 2-8 hours in other DeKalb County cities.",
      "url": "https://conniesbailbonding.com/#release"
    }
  ]
});
