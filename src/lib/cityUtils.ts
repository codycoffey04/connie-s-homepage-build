export const cities = [
  { name: "Fort Payne", slug: "fort-payne" },
  { name: "Rainsville", slug: "rainsville" },
  { name: "Centre", slug: "centre" },
  { name: "Henagar", slug: "henagar" },
  { name: "Fyffe", slug: "fyffe" },
  { name: "Pisgah", slug: "pisgah" },
  { name: "Valley Head", slug: "valley-head" }
];

export const getCityUrl = (cityName: string) => {
  const city = cities.find(c => c.name === cityName);
  return city ? `/${city.slug}` : '/';
};

export const phoneNumbers = {
  richard: { name: "Richard", number: "256-601-2041" },
  connie: { name: "Connie", number: "256-630-2824" },
  toni: { name: "Toni", number: "256-440-0822" }
};
