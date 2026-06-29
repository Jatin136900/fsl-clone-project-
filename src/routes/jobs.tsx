import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { MOCK_JOBS, COUNTRIES, CATEGORIES, MODES, type Job } from "@/data/jobs";
import { Search, MapPin, Briefcase, Calendar, ShieldCheck, ArrowRight, Bookmark, SlidersHorizontal } from "lucide-react";
import logo from "@/Images/logo.png";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Browse European Jobs · WorkInEurope" },
      { name: "description", content: "Browse verified European jobs with visa sponsorship. Filter by EU country, salary, and work mode." },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("All");
  const [category, setCategory] = useState("All");
  const [mode, setMode] = useState("All");
  const [visaOnly, setVisaOnly] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    return MOCK_JOBS.filter((j) => {
      if (query && !j.title.toLowerCase().includes(query.toLowerCase())) return false;
      if (country !== "All" && j.country !== country) return false;
      if (category !== "All" && j.category !== category) return false;
      if (mode !== "All" && j.mode !== mode) return false;
      if (visaOnly && !j.visaSponsorship) return false;
      return true;
    });
  }, [query, country, category, mode, visaOnly]);

  return (
    <div className="min-h-dvh bg-background">
      <header className="border-b border-border sticky top-0 z-30 glass-strong">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="WorkInEurope" className="h-16 w-16 rounded-xl object-contain" />
            <span className="font-display text-2xl tracking-tight">WorkIn<span className="text-muted-foreground">Europe</span></span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            {user ? (
              <Link
                to={user.role === "candidate" ? "/candidates/dashboard" : "/employers/dashboard"}
                className="px-4 py-2 bg-foreground text-background rounded-lg font-medium"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/candidate/login" className="px-3 py-2 hover:bg-accent rounded-lg">Sign in</Link>
                <Link to="/candidate/register" className="px-4 py-2 bg-foreground text-background rounded-lg font-medium">
                  Create profile
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="bg-aurora border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
            {filtered.length.toLocaleString()} European roles. <em className="not-italic text-gradient-brand">Visa-ready</em>.
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Verified employers across Europe's leading economies. Apply with a video resume — relocate in days.
          </p>
          <div className="mt-8 glass-strong rounded-2xl p-2 flex flex-col md:flex-row gap-2 max-w-3xl shadow-elegant">
            <div className="flex-1 flex items-center gap-2 px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search job title or skill…"
                className="w-full bg-transparent outline-none py-3"
              />
            </div>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="bg-background border border-border rounded-xl px-4 py-3 outline-none">
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button className="px-5 py-3 rounded-xl bg-foreground text-background font-medium">Search</button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid lg:grid-cols-[260px_1fr] gap-8">
        <div className="lg:hidden">
          <button 
            type="button"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-card border border-border rounded-xl text-sm font-semibold select-none cursor-pointer"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showMobileFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <aside className={`${showMobileFilters ? "block animate-in fade-in slide-in-from-top-2 duration-200" : "hidden"} lg:block space-y-6 lg:sticky lg:top-24 self-start`}>
          <FilterPanel label="Category" options={CATEGORIES} value={category} onChange={setCategory} />
          <FilterPanel label="Work mode" options={MODES} value={mode} onChange={setMode} />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
              <SlidersHorizontal className="h-3.5 w-3.5" /> More
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input type="checkbox" checked={visaOnly} onChange={(e) => setVisaOnly(e.target.checked)} className="rounded border-border text-foreground focus:ring-foreground/5" />
              Visa sponsorship only
            </label>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> roles
            </div>
            <select className="bg-card border border-border rounded-lg px-3 py-1.5 text-sm">
              <option>Most recent</option>
              <option>Highest paying</option>
              <option>Best match</option>
            </select>
          </div>
          <div className="space-y-3">
            {filtered.map((job) => <JobCard key={job.id} job={job} />)}
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
                No jobs match these filters. Try widening your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
      <div className="space-y-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={
              "w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors " +
              (value === opt ? "bg-foreground text-background font-medium" : "hover:bg-accent text-muted-foreground")
            }
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const { user } = useAuth();
  return (
    <div className="group relative rounded-2xl bg-card border border-border p-4 sm:p-5 hover:shadow-elegant hover:border-foreground/15 transition-all">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-3xl sm:text-4xl shrink-0">{job.flag}</div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-base sm:text-lg">{job.title}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.country}</span>
                <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.mode}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(job.postedAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <div className="font-display text-xl sm:text-2xl tracking-tight">
                {job.salary.toLocaleString()} <span className="text-sm text-muted-foreground">{job.currency}</span>
              </div>
              <div className="text-xs text-muted-foreground">/ {job.period.toLowerCase()}</div>
            </div>
          </div>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground line-clamp-2">{job.description}</p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              <Chip>{job.category}</Chip>
              <Chip>{job.experience}</Chip>
              {job.visaSponsorship && (
                <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success inline-flex items-center gap-1 font-medium">
                  <ShieldCheck className="h-3 w-3" /> Visa sponsored
                </span>
              )}
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-1.5 w-full sm:w-auto">
              <button className="h-9 w-9 rounded-lg hover:bg-accent grid place-items-center" aria-label="Save job">
                <Bookmark className="h-4 w-4" />
              </button>
              <Link to={user ? "/candidates/dashboard" : "/candidate/register"} className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90">
                Apply <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{children}</span>;
}
