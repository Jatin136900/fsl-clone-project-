import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Sparkles, a as Search, b as SlidersHorizontal, M as MapPin, c as Briefcase, d as Calendar, e as ShieldCheck, f as Bookmark, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const MOCK_JOBS = [
  { id: "1", title: "Carpenter (Construction)", country: "Poland", flag: "🇵🇱", mode: "On Site", salary: 2500, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-06-03", visaSponsorship: true, experience: "2+ years", description: "Skilled carpenter needed for major construction projects in Warsaw. Accommodation provided." },
  { id: "2", title: "Electrical Technician", country: "Germany", flag: "🇩🇪", mode: "Hybrid", salary: 3200, currency: "EUR", period: "Month", category: "Engineering", postedAt: "2026-05-27", visaSponsorship: false, experience: "3+ years", description: "Maintain and install electrical systems for industrial facilities in Munich." },
  { id: "3", title: "Dairy Farm Assistant", country: "Ireland", flag: "🇮🇪", mode: "On Site", salary: 3050, currency: "EUR", period: "Month", category: "Agriculture", postedAt: "2026-05-25", visaSponsorship: true, experience: "Entry level", description: "Help with milking, feeding and farm operations on a family-run dairy." },
  { id: "4", title: "Plasterer", country: "Ireland", flag: "🇮🇪", mode: "On Site", salary: 3050, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-05-25", visaSponsorship: true, experience: "2+ years", description: "Interior and exterior plastering for new builds and renovations." },
  { id: "5", title: "Excavator Operator", country: "Netherlands", flag: "🇳🇱", mode: "On Site", salary: 3100, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-05-25", visaSponsorship: true, experience: "License required", description: "Operate heavy excavation machinery on infrastructure sites." },
  { id: "6", title: "Chicken Factory Worker", country: "Netherlands", flag: "🇳🇱", mode: "On Site", salary: 2525, currency: "EUR", period: "Month", category: "Manufacturing", postedAt: "2026-05-25", visaSponsorship: true, experience: "Entry level", description: "Production line work at a modern poultry processing plant." },
  { id: "7", title: "Car Driver (Category B)", country: "Romania", flag: "🇷🇴", mode: "On Site", salary: 1400, currency: "EUR", period: "Month", category: "Logistics", postedAt: "2026-05-25", visaSponsorship: false, experience: "License B", description: "Delivery and chauffeur duties for a corporate fleet in Bucharest." },
  { id: "8", title: "Tile Fitter", country: "Austria", flag: "🇦🇹", mode: "On Site", salary: 2930, currency: "EUR", period: "Month", category: "Construction", postedAt: "2026-05-22", visaSponsorship: true, experience: "3+ years", description: "Premium residential tile installation across Vienna and Salzburg." },
  { id: "9", title: "Senior React Engineer", country: "Germany", flag: "🇩🇪", mode: "Remote", salary: 75e3, currency: "EUR", period: "Year", category: "Tech & Software", postedAt: "2026-06-01", visaSponsorship: true, experience: "5+ years", description: "Build the next generation of fintech tooling. Remote-first, Berlin HQ." },
  { id: "10", title: "Registered Nurse", country: "Ireland", flag: "🇮🇪", mode: "On Site", salary: 4200, currency: "EUR", period: "Month", category: "Healthcare", postedAt: "2026-06-04", visaSponsorship: true, experience: "Irish NMBI license", description: "Join a leading private hospital in Dublin. Relocation package included." },
  { id: "11", title: "Hotel Chef de Partie", country: "France", flag: "🇫🇷", mode: "On Site", salary: 3100, currency: "EUR", period: "Month", category: "Hospitality", postedAt: "2026-06-02", visaSponsorship: true, experience: "4+ years", description: "Five-star resort kitchen in Nice, Mediterranean cuisine." },
  { id: "12", title: "Welder (TIG/MIG)", country: "Sweden", flag: "🇸🇪", mode: "On Site", salary: 3800, currency: "EUR", period: "Month", category: "Manufacturing", postedAt: "2026-05-30", visaSponsorship: true, experience: "Certified", description: "Pipeline and structural welding for industrial contractor in Gothenburg." }
];
const COUNTRIES = ["All", "Germany", "Ireland", "Netherlands", "Romania", "Austria", "Poland", "France", "Sweden"];
const CATEGORIES = ["All", "Construction", "Engineering", "Agriculture", "Manufacturing", "Logistics", "Tech & Software", "Healthcare", "Hospitality"];
const MODES = ["All", "On Site", "Remote", "Hybrid"];
function JobsPage() {
  const [query, setQuery] = reactExports.useState("");
  const [country, setCountry] = reactExports.useState("All");
  const [category, setCategory] = reactExports.useState("All");
  const [mode, setMode] = reactExports.useState("All");
  const [visaOnly, setVisaOnly] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
    return MOCK_JOBS.filter((j) => {
      if (query && !j.title.toLowerCase().includes(query.toLowerCase())) return false;
      if (country !== "All" && j.country !== country) return false;
      if (category !== "All" && j.category !== category) return false;
      if (mode !== "All" && j.mode !== mode) return false;
      if (visaOnly && !j.visaSponsorship) return false;
      return true;
    });
  }, [query, country, category, mode, visaOnly]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border sticky top-0 z-30 glass-strong", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-brand-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: "WorkInEurope" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/signin", className: "px-3 py-2 hover:bg-accent rounded-lg", children: "Sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/signup", className: "px-4 py-2 bg-foreground text-background rounded-lg font-medium", children: "Create profile" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-aurora border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-14 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl tracking-tight leading-[1.05]", children: [
        filtered.length.toLocaleString(),
        " European roles. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gradient-brand", children: "Visa-ready" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg max-w-2xl", children: "Verified employers across Europe's leading economies. Apply with a video resume — relocate in days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 glass-strong rounded-2xl p-2 flex flex-col md:flex-row gap-2 max-w-3xl shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search job title or skill…", className: "w-full bg-transparent outline-none py-3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: country, onChange: (e) => setCountry(e.target.value), className: "bg-background border border-border rounded-xl px-4 py-3 outline-none", children: COUNTRIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: c }, c)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-5 py-3 rounded-xl bg-foreground text-background font-medium", children: "Search" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-10 grid lg:grid-cols-[260px_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6 lg:sticky lg:top-24 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { label: "Category", options: CATEGORIES, value: category, onChange: setCategory }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { label: "Work mode", options: MODES, value: mode, onChange: setMode }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-3.5 w-3.5" }),
            " More"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: visaOnly, onChange: (e) => setVisaOnly(e.target.checked) }),
            "Visa sponsorship only"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
            "Showing ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
            " roles"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-card border border-border rounded-lg px-3 py-1.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Most recent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Highest paying" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Best match" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          filtered.map((job) => /* @__PURE__ */ jsxRuntimeExports.jsx(JobCard, { job }, job.id)),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground", children: "No jobs match these filters. Try widening your search." })
        ] })
      ] })
    ] })
  ] });
}
function FilterPanel({
  label,
  options,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(opt), className: "w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors " + (value === opt ? "bg-foreground text-background font-medium" : "hover:bg-accent text-muted-foreground"), children: opt }, opt)) })
  ] });
}
function JobCard({
  job
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group relative rounded-2xl bg-card border border-border p-5 hover:shadow-elegant hover:border-foreground/15 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: job.flag }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: job.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
              " ",
              job.country
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5" }),
              " ",
              job.mode
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
              " ",
              new Date(job.postedAt).toLocaleDateString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl tracking-tight", children: [
            job.salary.toLocaleString(),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: job.currency })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            "/ ",
            job.period.toLowerCase()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground line-clamp-2", children: job.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: job.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { children: job.experience }),
          job.visaSponsorship && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-1 rounded-full bg-success/10 text-success inline-flex items-center gap-1 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3" }),
            " Visa sponsored"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-9 w-9 rounded-lg hover:bg-accent grid place-items-center", "aria-label": "Save job", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/candidates/signup", className: "inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90", children: [
            "Apply ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Chip({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground font-medium", children });
}
export {
  JobsPage as component
};
