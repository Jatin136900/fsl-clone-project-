export type Job = {
  id: string;
  title: string;
  country: string;
  flag: string;
  mode: "On Site" | "Remote" | "Hybrid";
  salary: number;
  currency: string;
  period: "Month" | "Year" | "Hour";
  category: string;
  postedAt: string;
  visaSponsorship: boolean;
  experience: string;
  description: string;
};

export const MOCK_JOBS: Job[] = [
  { id: "1", title: "Carpenter (Construction)", country: "Saudi Arabia", flag: "🇸🇦", mode: "On Site", salary: 2500, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-06-03", visaSponsorship: true, experience: "2+ years", description: "Skilled carpenter needed for major construction projects in Riyadh. Accommodation provided." },
  { id: "2", title: "Electrical Technician", country: "Pakistan", flag: "🇵🇰", mode: "Hybrid", salary: 2800, currency: "EUR", period: "Month", category: "Engineering", postedAt: "2026-05-27", visaSponsorship: false, experience: "3+ years", description: "Maintain and install electrical systems for industrial facilities." },
  { id: "3", title: "Dairy Farm Assistant", country: "Ireland", flag: "🇮🇪", mode: "On Site", salary: 3050, currency: "EUR", period: "Month", category: "Agriculture", postedAt: "2026-05-25", visaSponsorship: true, experience: "Entry level", description: "Help with milking, feeding and farm operations on a family-run dairy." },
  { id: "4", title: "Plasterer", country: "Ireland", flag: "🇮🇪", mode: "On Site", salary: 3050, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-05-25", visaSponsorship: true, experience: "2+ years", description: "Interior and exterior plastering for new builds and renovations." },
  { id: "5", title: "Excavator Operator", country: "Netherlands", flag: "🇳🇱", mode: "On Site", salary: 3100, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-05-25", visaSponsorship: true, experience: "License required", description: "Operate heavy excavation machinery on infrastructure sites." },
  { id: "6", title: "Chicken Factory Worker", country: "Netherlands", flag: "🇳🇱", mode: "On Site", salary: 2525, currency: "EUR", period: "Month", category: "Manufacturing", postedAt: "2026-05-25", visaSponsorship: true, experience: "Entry level", description: "Production line work at a modern poultry processing plant." },
  { id: "7", title: "Car Driver (Category B)", country: "Romania", flag: "🇷🇴", mode: "On Site", salary: 1400, currency: "EUR", period: "Month", category: "Logistics", postedAt: "2026-05-25", visaSponsorship: false, experience: "License B", description: "Delivery and chauffeur duties for a corporate fleet in Bucharest." },
  { id: "8", title: "Tile Fitter", country: "Austria", flag: "🇦🇹", mode: "On Site", salary: 2930, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-05-22", visaSponsorship: true, experience: "3+ years", description: "Premium residential tile installation across Vienna and Salzburg." },
  { id: "9", title: "Senior React Engineer", country: "Germany", flag: "🇩🇪", mode: "Remote", salary: 75000, currency: "EUR", period: "Year", category: "Tech & Software", postedAt: "2026-06-01", visaSponsorship: true, experience: "5+ years", description: "Build the next generation of fintech tooling. Remote-first, Berlin HQ." },
  { id: "10", title: "Registered Nurse", country: "UAE", flag: "🇦🇪", mode: "On Site", salary: 3800, currency: "EUR", period: "Month", category: "Healthcare", postedAt: "2026-06-04", visaSponsorship: true, experience: "DHA license", description: "Join a leading private hospital in Dubai. Relocation package included." },
  { id: "11", title: "Hotel Chef de Partie", country: "Singapore", flag: "🇸🇬", mode: "On Site", salary: 3400, currency: "EUR", period: "Month", category: "Hospitality", postedAt: "2026-06-02", visaSponsorship: true, experience: "4+ years", description: "Five-star resort kitchen, Mediterranean cuisine." },
  { id: "12", title: "Welder (TIG/MIG)", country: "Canada", flag: "🇨🇦", mode: "On Site", salary: 4200, currency: "EUR", period: "Month", category: "Manufacturing", postedAt: "2026-05-30", visaSponsorship: true, experience: "Certified", description: "Pipeline and structural welding for industrial contractor." },
];

export const COUNTRIES = ["All", "Saudi Arabia", "UAE", "Germany", "Ireland", "Netherlands", "Romania", "Austria", "Pakistan", "Singapore", "Canada"];
export const CATEGORIES = ["All", "Construction", "Engineering", "Agriculture", "Manufacturing", "Logistics", "Tech & Software", "Healthcare", "Hospitality"];
export const MODES = ["All", "On Site", "Remote", "Hybrid"];
