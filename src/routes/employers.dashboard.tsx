import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell, EMPLOYER_NAV } from "@/components/DashboardShell";
import { motion } from "framer-motion";
import {
  Users, Briefcase, Video, BarChart3, ShieldCheck, ArrowRight, ArrowUpRight, MapPin, Star, PlayCircle, Plus, MoreHorizontal, type LucideIcon, Search, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/employers/dashboard")({
  head: () => ({ meta: [{ title: "Employer dashboard · WorkInEurope" }] }),
  component: EmployerDashboard,
});

const kpis = [
  { label: "Open roles", value: "14", delta: "+3 this week", icon: Briefcase },
  { label: "Candidates in pipeline", value: "284", delta: "+42", icon: Users },
  { label: "Video screens watched", value: "1.2k", delta: "+18%", icon: Video },
  { label: "Avg. time-to-hire", value: "9d", delta: "-3d", icon: BarChart3 },
];

const candidates = [
  { name: "Priya Nadkarni", role: "Registered Nurse", country: "🇮🇳 India → Ireland", match: 98, stage: "Interview", trust: 94 },
  { name: "Samuel Okafor", role: "Senior Welder", country: "🇳🇬 Nigeria → Sweden", match: 95, stage: "Shortlist", trust: 91 },
  { name: "Linh Tran", role: "React Engineer", country: "🇻🇳 Vietnam → Germany", match: 93, stage: "Offer", trust: 96 },
  { name: "Hassan Ali", role: "Chef de Partie", country: "🇵🇰 Pakistan → France", match: 91, stage: "Review", trust: 88 },
  { name: "Joana Reyes", role: "Hospitality Lead", country: "🇵🇭 Philippines → Netherlands", match: 90, stage: "Review", trust: 92 },
];

const pipeline = [
  { stage: "Sourced", count: 142 },
  { stage: "Reviewed", count: 78 },
  { stage: "Shortlist", count: 36 },
  { stage: "Interview", count: 18 },
  { stage: "Offer", count: 6 },
  { stage: "Hired", count: 4 },
];

function EmployerDashboard() {
  return (
    <DashboardShell
      role="employer"
      nav={EMPLOYER_NAV}
      user={{ name: "Marcus Hollander", email: "marcus@berlin-robotics.com", avatar: "MH" }}
    >
      <div className="space-y-6">
        <Welcome />
        <KPIGrid />
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
          <CandidateFeed />
          <PipelineCard />
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <AITalentSearch />
          <RecentJobs />
          <ComplianceCard />
        </div>
      </div>
    </DashboardShell>
  );
}

function Welcome() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
          Berlin Robotics · Workspace
        </div>
        <h1 className="font-display text-4xl tracking-tight mt-1">
          Welcome back, <em className="not-italic text-gradient-brand">Marcus</em>.
        </h1>
        <p className="text-muted-foreground mt-1">42 new video-verified candidates match your open roles.</p>
      </div>
      <div className="flex gap-2">
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:bg-accent">
          <Search className="h-4 w-4" /> AI talent search
        </button>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium">
          <Plus className="h-4 w-4" /> Post a job
        </button>
      </div>
    </div>
  );
}

function KPIGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {kpis.map((k, i) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-2xl bg-card border border-border p-5"
        >
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{k.label}</div>
            <k.icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2 font-display text-4xl tracking-tight">{k.value}</div>
          <div className="mt-1 text-xs text-success inline-flex items-center gap-1">
            <ArrowUpRight className="h-3 w-3" /> {k.delta}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CandidateFeed() {
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border">
        <h3 className="font-semibold flex items-center gap-2">
          <Users className="h-4 w-4" /> Top matched candidates
        </h3>
        <button className="text-xs text-muted-foreground hover:text-foreground">View all →</button>
      </div>
      <div className="divide-y divide-border">
        {candidates.map((c) => (
          <div key={c.name} className="p-5 flex items-center gap-4 hover:bg-accent/40 transition-colors">
            <div className="relative h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-[oklch(0.62_0.19_256)] to-[oklch(0.75_0.17_200)] grid place-items-center text-white font-semibold">
              {c.name.split(" ").map((s) => s[0]).join("")}
              <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-card grid place-items-center">
                <PlayCircle className="h-4 w-4" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium truncate">{c.name}</span>
                <span className="inline-flex items-center gap-1 text-[10px] text-success font-semibold">
                  <ShieldCheck className="h-3 w-3" /> {c.trust}
                </span>
              </div>
              <div className="text-xs text-muted-foreground truncate flex items-center gap-2">
                <span>{c.role}</span>
                <span className="inline-flex items-center gap-0.5"><MapPin className="h-3 w-3" />{c.country}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-xl text-gradient-brand leading-none">{c.match}%</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">match</div>
            </div>
            <Badge>{c.stage}</Badge>
            <button className="h-9 w-9 rounded-lg hover:bg-accent grid place-items-center" aria-label="More">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineCard() {
  const max = Math.max(...pipeline.map((p) => p.count));
  return (
    <div className="rounded-2xl bg-card border border-border p-5">
      <h3 className="font-semibold flex items-center gap-2">
        <BarChart3 className="h-4 w-4" /> Hiring pipeline
      </h3>
      <div className="mt-5 space-y-3">
        {pipeline.map((s) => (
          <div key={s.stage}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">{s.stage}</span>
              <span className="font-semibold">{s.count}</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(s.count / max) * 100}%` }}
                transition={{ duration: 0.9 }}
                className="h-full bg-[image:var(--gradient-brand)]"
              />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-secondary text-sm hover:bg-accent">
        Open ATS <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function AITalentSearch() {
  return (
    <Card title="AI talent search" icon={Sparkles}>
      <p className="mt-3 text-sm text-muted-foreground">
        Describe the role in plain English. Get a ranked shortlist in seconds.
      </p>
      <div className="mt-3 rounded-xl border border-border bg-background p-3 text-sm">
        "Find me React developers with European degree equivalence, fluent English, open to Amsterdam relocation."
      </div>
      <button className="mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium">
        Run AI search <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </Card>
  );
}

function RecentJobs() {
  const jobs = [
    { title: "Senior Robotics Engineer", apps: 42, status: "Live" },
    { title: "QA Automation", apps: 28, status: "Live" },
    { title: "Field Service Tech (Munich)", apps: 19, status: "Draft" },
  ];
  return (
    <Card title="Recent job posts" icon={Briefcase}>
      <ul className="mt-3 space-y-3">
        {jobs.map((j) => (
          <li key={j.title} className="flex items-center justify-between text-sm">
            <div>
              <div className="font-medium">{j.title}</div>
              <div className="text-xs text-muted-foreground">{j.apps} applications</div>
            </div>
            <span className={"text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold " + (j.status === "Live" ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground")}>
              {j.status}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ComplianceCard() {
  return (
    <Card title="European compliance" icon={ShieldCheck}>
      <ul className="mt-3 text-sm space-y-2">
        {[
          { l: "🇩🇪 DE Blue Card filings", v: "Up to date" },
          { l: "🇳🇱 NL IND sponsorships", v: "2 expiring" },
          { l: "🇮🇪 IE Critical Skills permits", v: "Auto-filed" },
          { l: "🇵🇱 PL Voivodeship permits", v: "1 pending" },
        ].map((row) => (
          <li key={row.l} className="flex items-center justify-between">
            <span>{row.l}</span>
            <span className="text-xs text-muted-foreground">{row.v}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Card({ title, icon: Icon, children }: { title: string; icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card border border-border p-5 shadow-soft">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center">
          <Icon className="h-3.5 w-3.5 text-brand-foreground" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  const map: Record<string, string> = {
    Interview: "bg-warning/15 text-warning",
    Shortlist: "bg-brand/15 text-brand",
    Offer: "bg-success/15 text-success",
    Review: "bg-secondary text-muted-foreground",
  };
  const cls = map[String(children)] ?? "bg-secondary text-muted-foreground";
  return <span className={"text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold " + cls}>{children}</span>;
}

// Avoid unused warning for Star
void Star;
