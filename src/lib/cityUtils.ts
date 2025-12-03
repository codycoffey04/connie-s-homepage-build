// src/lib/cityUtils.ts - Single source of truth for city data and schema constants

export interface CityData {
  name: string;
  slug: string;
  state: string;
  stateAbbrev: string;
  zipCodes: string[];
  county: string;
  geo: {
    lat: string;
    lng: string;
  };
  population: string;
  neighborhoods: string[];
  jailName?: string;
  jailPhone?: string;
}

// Schema Constants
export const SITE_URL = 'https://connies-bailbonds.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const SERVICE_ID = `${SITE_URL}/#service`;
export const getPlaceId = (slug: string) => `${SITE_URL}/${slug}#place`;

// Consolidated City Data
export const cities: CityData[] = [
  {
    name: "Fort Payne",
    slug: "fort-payne",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCodes: ["35967", "35968"],
    county: "DeKalb",
    geo: { lat: "34.4443", lng: "-85.7197" },
    population: "14000",
    neighborhoods: ["Pine Ridge", "Fisher Crossroads", "Adamsburg", "Dogtown", "Douglas", "Terrapin Hills"],
    jailName: "DeKalb County Detention Center",
    jailPhone: "(256) 845-3801"
  },
  {
    name: "Rainsville",
    slug: "rainsville",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCodes: ["35986"],
    county: "DeKalb",
    geo: { lat: "34.4942", lng: "-85.8486" },
    population: "5000",
    neighborhoods: ["Caney Creek", "Eastside", "Grand Estates", "Kc Subdivision", "Kilgore", "Lakeview Terrace", "Shiloh", "Rainbow Subdivision", "The Pines", "Peaceful Acres", "Edgewood", "S. Estates"]
  },
  {
    name: "Henagar",
    slug: "henagar",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCodes: ["35978"],
    county: "DeKalb",
    geo: { lat: "34.6356", lng: "-85.7694" },
    population: "2500",
    neighborhoods: ["Andrew Lee", "Bellview", "Biddle", "Brookfield", "Brown Town", "Central", "Cherokee", "Woodview"]
  },
  {
    name: "Fyffe",
    slug: "fyffe",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCodes: ["35971"],
    county: "DeKalb",
    geo: { lat: "34.4470", lng: "-85.9036" },
    population: "1000",
    neighborhoods: ["Gibson Crossroads", "Moores Crossroads", "Luttrell", "Guest", "Ten Broeck", "McKestes", "Lydia", "Chigger Hill", "South Hill", "Lakeview"]
  },
  {
    name: "Pisgah",
    slug: "pisgah",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCodes: ["35765"],
    county: "DeKalb",
    geo: { lat: "34.6881", lng: "-85.8342" },
    population: "700",
    neighborhoods: ["Gorhams Bluff", "Oak Grove", "Rosalie", "Metcalf", "County Road", "Sand Mountain", "Brow", "Central"]
  },
  {
    name: "Valley Head",
    slug: "valley-head",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCodes: ["35989"],
    county: "DeKalb",
    geo: { lat: "34.5692", lng: "-85.6197" },
    population: "550",
    neighborhoods: ["Oakdale", "Co Rd 728", "Holder Loop", "Lil Mole Run", "Winston Place", "Sequoyah", "Manitou", "Lookout", "Sand Mountain", "DeSoto", "Canyon", "Brow"]
  },
  {
    name: "Centre",
    slug: "centre",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCodes: ["35960"],
    county: "Cherokee",
    geo: { lat: "34.1626", lng: "-85.6788" },
    population: "3600",
    neighborhoods: ["Brooks Estates", "Turkey Town", "Big Nose Creek Subdivision", "Spring Garden", "Brookstone", "Mirror Lake"],
    jailName: "Cherokee County Detention Center",
    jailPhone: "(256) 927-3565"
  }
];

// Helper Functions
export const getCityBySlug = (slug: string): CityData | undefined => 
  cities.find(city => city.slug === slug);

export const getAllCitySlugs = (): string[] => 
  cities.map(city => city.slug);

export const getCitiesByCounty = (county: string): CityData[] => 
  cities.filter(city => city.county === county);

export const getCityUrl = (cityName: string): string => {
  const city = cities.find(c => c.name === cityName);
  return city ? `/${city.slug}` : '/';
};

// Phone Numbers (backward compatibility)
export const phoneNumbers = {
  richard: { name: "Richard", number: "256-601-2041" },
  connie: { name: "Connie", number: "256-630-2824" },
  toni: { name: "Toni", number: "256-440-0822" }
};
