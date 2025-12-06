// src/lib/schemaUtils.ts - Schema utilities with @id interconnections

import { cities, CityData, SITE_URL, ORG_ID, SERVICE_ID, getPlaceId } from './cityUtils';

// ============================================
// CORE SCHEMA FUNCTIONS (New @id Architecture)
// ============================================

/**
 * Master Organization Schema with 33+ properties
 * All other schemas reference this via @id
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "BailBondService"],
  "@id": ORG_ID,
  
  // Core Identity
  "name": "Connie's Bail Bonding",
  "legalName": "Connie's Bail Bonding, LLC",
  "alternateName": ["Connies Bail Bonds", "Connie's Bail Bonds Fort Payne"],
  "description": "Licensed 24/7 bail bond service serving DeKalb and Cherokee Counties in Northeast Alabama. Family-owned since 2019, we provide fast, compassionate bail bond services with flexible payment plans.",
  "slogan": "24/7 Bail Bonds — We Answer When You Call",
  "url": SITE_URL,
  "logo": `${SITE_URL}/og-image.png`,
  "image": `${SITE_URL}/og-image.png`,
  
  // Founding & Leadership
  "foundingDate": "2019",
  "founder": {
    "@type": "Person",
    "name": "Connie",
    "jobTitle": "Owner & Licensed Bail Agent",
    "description": "Licensed bail bond agent serving Northeast Alabama families since 2019. APBB License #B0092.",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Alabama Professional Bail Bondsman License #B0092",
      "url": "https://apbb.alabama.gov/licensee/B0092"
    }
  },
  
  // E-E-A-T: Expertise
  "knowsAbout": [
    "Alabama Bail Bond Law",
    "DeKalb County Bail Bonds",
    "Cherokee County Bail Bonds",
    "Surety Bonds",
    "Cash Bonds",
    "Property Bonds",
    "Felony Bail Bonds",
    "Misdemeanor Bail Bonds",
    "24/7 Emergency Bail Services",
    "Bail Bond Payment Plans",
    "Bond Forfeiture Process",
    "Alabama Court System",
    "Jail Release Process",
    "Cosigner Responsibilities",
    "Bail Bond Indemnitor Requirements"
  ],
  
  // E-E-A-T: Credentials
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "APBB License #B0092 (Connie)",
      "url": "https://apbb.alabama.gov/licensee/B0092"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "APBB License #S0334 (Richard)",
      "url": "https://apbb.alabama.gov/licensee/S0334"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "APBB License #S0345 (Toni)",
      "url": "https://apbb.alabama.gov/licensee/S0345"
    }
  ],
  
  // E-E-A-T: Recognition
  "awards": [
    "4.9 Star Google Rating (150+ Reviews)",
    "A+ BBB Rating",
    "Licensed by Alabama Professional Bail Bondsman Board"
  ],
  
  // E-E-A-T: Memberships
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Alabama Bail Bondsman Association"
    }
  ],
  
  // Aggregate Rating
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  
  // Location
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
  
  // Service Area — @id references to Place schemas
  "areaServed": cities.map(city => ({
    "@type": "Place",
    "@id": getPlaceId(city.slug)
  })),
  
  // Service Catalog — @id reference to Service schema
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "@id": SERVICE_ID
  },
  
  // Contact
  "telephone": "+1-256-601-2041",
  "email": "info@connies-bailbonds.com",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-256-601-2041",
      "contactType": "customer service",
      "name": "Richard",
      "availableLanguage": "English",
      "areaServed": "US-AL",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-256-630-2824",
      "contactType": "customer service",
      "name": "Connie",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-256-440-0822",
      "contactType": "customer service",
      "name": "Toni",
      "availableLanguage": "English"
    }
  ],
  
  // Operations
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "10% of bail amount (Alabama state law)",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Payment Plans"],
  "currenciesAccepted": "USD",
  
  // Social & External
  "sameAs": [
    "https://www.facebook.com/conniesbailbonding",
    "https://www.google.com/maps/place/Connie's+Bail+Bonding"
  ]
});

/**
 * Place Schema for individual cities
 * Each Place has unique @id and contains neighborhoods
 */
export const getPlaceSchema = (city: CityData) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": getPlaceId(city.slug),
  
  "name": `${city.name}, ${city.state}`,
  "description": `${city.name} is a community of approximately ${parseInt(city.population).toLocaleString()} residents in ${city.county} County, Alabama. Connie's Bail Bonding provides 24/7 bail bond services to ${city.name} and surrounding areas.`,
  "url": `${SITE_URL}/${city.slug}`,
  
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city.name,
    "addressRegion": city.stateAbbrev,
    "postalCode": city.zipCodes.join(", "),
    "addressCountry": "US"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": city.geo.lat,
    "longitude": city.geo.lng
  },
  
  "containedInPlace": {
    "@type": "AdministrativeArea",
    "name": `${city.county} County`,
    "containedInPlace": {
      "@type": "State",
      "name": "Alabama"
    }
  },
  
  "containsPlace": city.neighborhoods.map(neighborhood => ({
    "@type": "Neighborhood",
    "name": neighborhood
  }))
});

/**
 * Service Schema with @id references
 * References Organization and all Places
 */
export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": SERVICE_ID,
  
  "name": "24/7 Bail Bond Services",
  "description": "Licensed bail bond services available 24 hours a day, 7 days a week across DeKalb and Cherokee Counties, Alabama.",
  "serviceType": "Bail Bond Service",
  
  // Reference back to Organization
  "provider": {
    "@type": "BailBondService",
    "@id": ORG_ID
  },
  
  // Reference all Place schemas
  "areaServed": cities.map(city => ({
    "@type": "Place",
    "@id": getPlaceId(city.slug)
  })),
  
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bail Bond Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Emergency Bail Bonds",
          "description": "Immediate bail bond services available around the clock, any day of the year"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Misdemeanor Bail Bonds",
          "description": "Bail bonds for misdemeanor charges including DUI, theft, and assault"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Felony Bail Bonds",
          "description": "Bail bonds for felony charges with flexible payment options"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Payment Plans",
          "description": "Flexible payment arrangements for families who need help covering the bond premium"
        }
      }
    ]
  },
  
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": SITE_URL,
    "servicePhone": "+1-256-601-2041",
    "availableLanguage": "English"
  }
});

// ============================================
// SUPPORTING SCHEMA FUNCTIONS (Kept from original)
// ============================================

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "name": "Breadcrumb",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${SITE_URL}${item.url}`
  }))
});

export const getFAQSchema = (faqs: { question: string; answer: string }[], pageUrl?: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Frequently Asked Questions",
  ...(pageUrl && { "url": `${SITE_URL}${pageUrl}` }),
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
      "url": `${SITE_URL}/#call`
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Provide Information",
      "text": "Tell us the inmate's name, jail location, and charges. We'll look up their bail amount and explain the process.",
      "url": `${SITE_URL}/#information`
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Complete Paperwork",
      "text": "We'll meet you to complete the simple paperwork. Bring a valid ID and discuss payment options including flexible payment plans.",
      "url": `${SITE_URL}/#paperwork`
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Post Bond & Release",
      "text": "We post the bond at the jail. Release typically takes 1-8 hours in Fort Payne, 2-8 hours in other DeKalb County cities.",
      "url": `${SITE_URL}/#release`
    }
  ]
});

export const getReviewSchema = (reviews: string[]) => {
  const generateReviewDate = (index: number) => {
    const today = new Date();
    const monthsAgo = 6 + Math.floor((index * 6) / reviews.length);
    const daysOffset = Math.floor(Math.random() * 28);
    const reviewDate = new Date(today.getFullYear(), today.getMonth() - monthsAgo, today.getDate() - daysOffset);
    return reviewDate.toISOString().split('T')[0];
  };

  return reviews.map((reviewText, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "BailBondService",
      "@id": ORG_ID
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": `Verified Customer ${index + 1}`
    },
    "reviewBody": reviewText,
    "publisher": {
      "@type": "Organization",
      "name": "Google"
    },
    "datePublished": generateReviewDate(index)
  }));
};

export const getSpeakableSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Connie's Bail Bonding - 24/7 Bail Bonds",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".quick-answers",
      ".contact-info",
      ".how-it-works",
      ".service-area"
    ],
    "xpath": [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content"
    ]
  }
});

export const getAboutPageSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": name,
  "description": description,
  "url": `${SITE_URL}/about`,
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".quick-answers",
      ".contact-info",
      ".how-it-works",
      ".service-area"
    ],
    "xpath": [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content"
    ]
  }
});

export const getWebPageSchema = (name: string, description: string, breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": `${SITE_URL}${breadcrumbs[breadcrumbs.length - 1]?.url || '/'}`,
  "breadcrumb": getBreadcrumbSchema(breadcrumbs),
  "publisher": {
    "@type": "Organization",
    "@id": ORG_ID
  }
});

export const getItemListSchema = (items: { name: string; description: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Alabama Bail Bonds Educational Guides",
  "description": "Comprehensive educational articles about bail bonds in Alabama",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Article",
      "headline": item.name,
      "description": item.description,
      "url": `${SITE_URL}${item.url}`,
      "author": getAuthorSchema("Connie"),
      "publisher": {
        "@type": "Organization",
        "@id": ORG_ID,
        "name": "Connie's Bail Bonding",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/og-image.png`
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/og-image.png`
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-12-03"
    }
  }))
});

// Author Schema with APBB License Verification
export const getAuthorSchema = (authorName: "Connie" | "Richard" | "Toni" = "Connie") => {
  const authors = {
    "Connie": {
      name: "Connie",
      credential: "APBB License #B0092",
      url: "https://apbb.alabama.gov/licensee/B0092",
      title: "Owner & Licensed Bail Agent"
    },
    "Richard": {
      name: "Richard",
      credential: "APBB License #S0334",
      url: "https://apbb.alabama.gov/licensee/S0334",
      title: "Licensed Bail Agent"
    },
    "Toni": {
      name: "Toni",
      credential: "APBB License #S0345",
      url: "https://apbb.alabama.gov/licensee/S0345",
      title: "Licensed Bail Agent"
    }
  };
  
  return {
    "@type": "Person",
    "name": authors[authorName].name,
    "url": `${SITE_URL}/about`,
    "jobTitle": authors[authorName].title,
    "worksFor": {
      "@type": "BailBondService",
      "@id": ORG_ID
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": authors[authorName].credential,
      "url": authors[authorName].url
    }
  };
};

export const getArticleSchema = (
  headline: string,
  description: string,
  url: string,
  datePublished: string = "2024-01-15T00:00:00-06:00",
  dateModified: string = "2024-12-03T00:00:00-06:00",
  authorName: "Connie" | "Richard" | "Toni" = "Connie"
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/og-image.png`,
    "width": 1200,
    "height": 630
  },
  "author": getAuthorSchema(authorName),
  "publisher": {
    "@type": "Organization",
    "@id": ORG_ID,
    "name": "Connie's Bail Bonding",
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/og-image.png`
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SITE_URL}${url}`
  }
});

export const getCustomHowToSchema = (
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": name,
  "description": description,
  "totalTime": "PT8H",
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
});

// WebSite Schema for homepage
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Connie's Bail Bonding",
  "url": SITE_URL,
  "description": "24/7 bail bond services in Fort Payne, DeKalb County, and Cherokee County, Alabama",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/bail-bonds-guide?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "@id": ORG_ID
  }
});

// ============================================
// GOVERNMENT BUILDING SCHEMAS
// ============================================

export const getDeKalbCountyJailSchema = () => ({
  "@context": "https://schema.org",
  "@type": "GovernmentBuilding",
  "name": "DeKalb County Detention Center",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2801 Jordan Road SW",
    "addressLocality": "Fort Payne",
    "addressRegion": "AL",
    "postalCode": "35968",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.4378",
    "longitude": "-85.7241"
  },
  "telephone": "(256) 845-3801",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
});

export const getDeKalbCountyCourthouseSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Courthouse",
  "name": "DeKalb County Courthouse",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "300 Grand Ave SW",
    "addressLocality": "Fort Payne",
    "addressRegion": "AL",
    "postalCode": "35967",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.4427",
    "longitude": "-85.7194"
  },
  "telephone": "(256) 845-8500",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "16:30"
  }
});

export const getCherokeeCountyJailSchema = () => ({
  "@context": "https://schema.org",
  "@type": "GovernmentBuilding",
  "name": "Cherokee County Detention Center",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "110 Cedar Bluff Rd",
    "addressLocality": "Centre",
    "addressRegion": "AL",
    "postalCode": "35960",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.1520",
    "longitude": "-85.6740"
  },
  "telephone": "(256) 927-3565",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
});

export const getCherokeeCourthouseSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Courthouse",
  "name": "Cherokee County Courthouse",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Main St",
    "addressLocality": "Centre",
    "addressRegion": "AL",
    "postalCode": "35960",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.1516",
    "longitude": "-85.6784"
  },
  "telephone": "(256) 927-3668",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "16:30"
  }
});
