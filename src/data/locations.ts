export interface CountryData {
  code: string;
  name: string;
  flag: string;
  cities: string[];
}

export const EUROPEAN_LOCATIONS: CountryData[] = [
  { code: "DE", name: "Germany", flag: "🇩🇪", cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Stuttgart", "Dusseldorf"] },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"] },
  { code: "IE", name: "Ireland", flag: "🇮🇪", cities: ["Dublin", "Cork", "Galway", "Limerick"] },
  { code: "FR", name: "France", flag: "🇫🇷", cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Strasbourg"] },
  { code: "ES", name: "Spain", flag: "🇪🇸", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga", "Zaragoza"] },
  { code: "SE", name: "Sweden", flag: "🇸🇪", cities: ["Stockholm", "Gothenburg", "Malmo", "Uppsala"] },
  { code: "AT", name: "Austria", flag: "🇦🇹", cities: ["Vienna", "Salzburg", "Innsbruck", "Graz", "Linz"] },
  { code: "PL", name: "Poland", flag: "🇵🇱", cities: ["Warsaw", "Krakow", "Gdansk", "Wroclaw", "Poznan"] },
  { code: "IT", name: "Italy", flag: "🇮🇹", cities: ["Rome", "Milan", "Naples", "Turin", "Florence", "Venice"] },
  { code: "BE", name: "Belgium", flag: "🇧🇪", cities: ["Brussels", "Antwerp", "Ghent", "Liege", "Bruges"] },
  { code: "DK", name: "Denmark", flag: "🇩🇰", cities: ["Copenhagen", "Aarhus", "Odense"] },
  { code: "FI", name: "Finland", flag: "🇫🇮", cities: ["Helsinki", "Espoo", "Tampere"] },
  { code: "NO", name: "Norway", flag: "🇳🇴", cities: ["Oslo", "Bergen", "Trondheim"] },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", cities: ["Zurich", "Geneva", "Basel", "Bern"] }
];

export const ALL_COUNTRIES: { code: string; name: string; flag: string }[] = [
  ...EUROPEAN_LOCATIONS.map(({ code, name, flag }) => ({ code, name, flag })),
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" }
];
