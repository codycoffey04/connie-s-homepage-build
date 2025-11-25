export const cities = [
  { 
    name: "Fort Payne", 
    slug: "fort-payne",
    state: "AL",
    zipCodes: ["35967", "35968"],
    county: "DeKalb"
  },
  { 
    name: "Rainsville", 
    slug: "rainsville",
    state: "AL",
    zipCodes: ["35986"],
    county: "DeKalb"
  },
  { 
    name: "Henagar", 
    slug: "henagar",
    state: "AL",
    zipCodes: ["35978"],
    county: "DeKalb"
  },
  { 
    name: "Fyffe", 
    slug: "fyffe",
    state: "AL",
    zipCodes: ["35971"],
    county: "DeKalb"
  },
  { 
    name: "Pisgah", 
    slug: "pisgah",
    state: "AL",
    zipCodes: ["35765"],
    county: "DeKalb"
  },
  { 
    name: "Valley Head", 
    slug: "valley-head",
    state: "AL",
    zipCodes: ["35989"],
    county: "DeKalb"
  },
  { 
    name: "Centre", 
    slug: "centre",
    state: "AL",
    zipCodes: ["35960"],
    county: "Cherokee"
  }
];

export const getCityUrl = (cityName: string) => {
  const city = cities.find(c => c.name === cityName);
  return city ? `/${city.slug}` : '/';
};

export const phoneNumbers = {
  richard: { name: "Richard", number: "256-601-2041" },
  connie: { name: "Connie", number: "256-523-7685" },
  toni: { name: "Toni", number: "256-997-9932" }
};
