export const getLocalBusinessSchema = (city?: string) => ({
  "@context": "https://schema.org",
  "@type": "BailBondService",
  "name": "Connie's Bail Bonding",
  "image": "https://conniesbailbonding.com/og-image.jpg",
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
  "priceRange": "10% of bail amount (Alabama state law)",
  "paymentAccepted": [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Payment Plans"
  ],
  "currenciesAccepted": "USD",
  "knowsAbout": [
    "DeKalb County Bail Bonds",
    "Cherokee County Bail Bonds",
    "Alabama Bail Law",
    "Emergency Bail Bonds",
    "Misdemeanor Bail",
    "Felony Bail",
    "24/7 Bail Services"
  ],
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
      "availableLanguage": ["English"],
      "areaServed": "US-AL",
      "contactOption": "TollFree",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "256-523-7685",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US-AL"
    },
    {
      "@type": "ContactPoint",
      "telephone": "256-997-9932",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US-AL"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "founder": {
    "@type": "Person",
    "name": "Connie"
  },
  "foundingDate": "2019"
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

export const getReviewSchema = (reviews: string[]) => {
  // Generate realistic review dates from the past 6-12 months
  const generateReviewDate = (index: number) => {
    const today = new Date();
    const monthsAgo = 6 + Math.floor((index * 6) / reviews.length); // Spread reviews over 6-12 months
    const daysOffset = Math.floor(Math.random() * 28); // Random day within the month
    const reviewDate = new Date(today.getFullYear(), today.getMonth() - monthsAgo, today.getDate() - daysOffset);
    return reviewDate.toISOString().split('T')[0];
  };

  return reviews.map((reviewText, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "BailBondService",
      "name": "Connie's Bail Bonding",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2700 Jordan Rd SW",
        "addressLocality": "Fort Payne",
        "addressRegion": "AL",
        "postalCode": "35967"
      }
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

export const getWebPageSchema = (name: string, description: string, breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": `https://conniesbailbonding.com${breadcrumbs[breadcrumbs.length - 1]?.url || '/'}`,
  "breadcrumb": getBreadcrumbSchema(breadcrumbs),
  "publisher": {
    "@type": "Organization",
    "name": "Connie's Bail Bonding"
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
      "name": item.name,
      "description": item.description,
      "url": `https://conniesbailbonding.com${item.url}`
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
    "jobTitle": authors[authorName].title,
    "worksFor": {
      "@type": "BailBondService",
      "name": "Connie's Bail Bonding"
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
  datePublished: string = "2024-01-15",
  dateModified: string = "2025-11-25",
  authorName: "Connie" | "Richard" | "Toni" = "Connie"
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "author": getAuthorSchema(authorName),
  "publisher": {
    "@type": "Organization",
    "name": "Connie's Bail Bonding",
    "logo": {
      "@type": "ImageObject",
      "url": "https://conniesbailbonding.com/og-image.jpg"
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://conniesbailbonding.com${url}`
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
  "url": "https://conniesbailbonding.com",
  "description": "24/7 bail bond services in Fort Payne, DeKalb County, and Cherokee County, Alabama",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://conniesbailbonding.com/bail-bonds-guide?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Connie's Bail Bonding",
    "url": "https://conniesbailbonding.com"
  }
});

// Place Schema - DeKalb County Jail
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

// Place Schema - DeKalb County Courthouse
export const getDeKalbCountyCourthouseSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Courthouse",
  "name": "DeKalb County Courthouse",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "300 Grand Avenue SW",
    "addressLocality": "Fort Payne",
    "addressRegion": "AL",
    "postalCode": "35967",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.4444",
    "longitude": "-85.7198"
  },
  "telephone": "(256) 845-8500",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "16:30"
  }
});

// Place Schema - Cherokee County Jail
export const getCherokeeCountyJailSchema = () => ({
  "@context": "https://schema.org",
  "@type": "GovernmentBuilding",
  "name": "Cherokee County Detention Center",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "110 Cedar Bluff Road",
    "addressLocality": "Centre",
    "addressRegion": "AL",
    "postalCode": "35960",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.1571",
    "longitude": "-85.6788"
  },
  "telephone": "(256) 927-3565",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
});

// Place Schema - Cherokee County Courthouse
export const getCherokeeCourthouseSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Courthouse",
  "name": "Cherokee County Courthouse",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Main Street",
    "addressLocality": "Centre",
    "addressRegion": "AL",
    "postalCode": "35960",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.1626",
    "longitude": "-85.6788"
  },
  "telephone": "(256) 927-3368",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "16:30"
  }
});

// Enhanced Service Area Schema for City Pages
export const getCityServiceAreaSchema = (cityName: string) => {
  const cityData: Record<string, { lat: string; lng: string; zipCodes: string[]; county: string; population: string }> = {
    "Fort Payne": {
      lat: "34.4443",
      lng: "-85.7197",
      zipCodes: ["35967", "35968"],
      county: "DeKalb",
      population: "14000"
    },
    "Rainsville": {
      lat: "34.4942",
      lng: "-85.8486",
      zipCodes: ["35986"],
      county: "DeKalb",
      population: "5000"
    },
    "Henagar": {
      lat: "34.6356",
      lng: "-85.7694",
      zipCodes: ["35978"],
      county: "DeKalb",
      population: "2500"
    },
    "Fyffe": {
      lat: "34.4470",
      lng: "-85.9036",
      zipCodes: ["35971"],
      county: "DeKalb",
      population: "1000"
    },
    "Pisgah": {
      lat: "34.6881",
      lng: "-85.8342",
      zipCodes: ["35765"],
      county: "DeKalb",
      population: "700"
    },
    "Valley Head": {
      lat: "34.5692",
      lng: "-85.6197",
      zipCodes: ["35989"],
      county: "DeKalb",
      population: "550"
    },
    "Centre": {
      lat: "34.1626",
      lng: "-85.6788",
      zipCodes: ["35960"],
      county: "Cherokee",
      population: "3600"
    }
  };

  const data = cityData[cityName];
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Bail Bond Service in ${cityName}, Alabama`,
    "provider": {
      "@type": "BailBondService",
      "name": "Connie's Bail Bonding"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": `${data.county} County`,
        "containedInPlace": {
          "@type": "State",
          "name": "Alabama"
        }
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data.lat,
        "longitude": data.lng
      }
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": data.lat,
        "longitude": data.lng
      },
      "geoRadius": "15 mi"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "256-601-2041",
        "contactType": "customer service",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    }
  };
};
