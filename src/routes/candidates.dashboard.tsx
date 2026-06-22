import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { DashboardShell, CANDIDATE_NAV } from "@/components/DashboardShell";
import { motion } from "framer-motion";
import {
  Video, Sparkles, ArrowRight, CheckCircle2, Briefcase, Calendar, Brain, Languages,
  GraduationCap, ShieldCheck, TrendingUp, Plane, PlayCircle, Plus, Star,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export const Route = createFileRoute("/candidates/dashboard")({
  head: () => ({ meta: [{ title: "Candidate dashboard · WorkInEurope" }] }),
  component: CandidateDashboard,
});

const recommendations = [
  { title: "Registered Nurse", company: "Mercy Health · 🇮🇪 Dublin", salary: "4,200 EUR/mo", match: 98 },
  { title: "Senior Nurse — ICU", company: "Berlin Klinikum · 🇩🇪 Berlin", salary: "4,500 EUR/mo", match: 94 },
  { title: "Charge Nurse", company: "Vienna Care · 🇦🇹 Vienna", salary: "4,100 EUR/mo", match: 91 },
];

const applications = [
  { title: "Registered Nurse", company: "Mercy Health · Dublin", stage: "Interview", color: "bg-warning" },
  { title: "ICU Specialist", company: "Berlin Klinikum · Berlin", stage: "Shortlisted", color: "bg-brand" },
  { title: "Pediatric Nurse", company: "Rotterdam Care · Rotterdam", stage: "Reviewed", color: "bg-muted-foreground" },
  { title: "Emergency Nurse", company: "Stockholm Clinic · Stockholm", stage: "Submitted", color: "bg-muted-foreground" },
];

function CandidateDashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || user.role !== "candidate")) {
      navigate({ to: "/candidate/login" });
    }
  }, [user, loading, navigate]);

  if (loading || !user || user.role !== "candidate") {
    return (
      <div className="min-h-screen bg-background grid place-items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-medium animate-pulse">Verifying credentials…</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardShell
      role="candidate"
      nav={CANDIDATE_NAV}
      user={{ name: user.name, email: user.email, avatar: user.avatar }}
    >
      <div className="space-y-6">
        <Welcome />

        <div className="grid lg:grid-cols-3 gap-5">
          <ProfileCard />
          <VideoResumeCard />
          <TrustScoreCard />
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
          <RecommendedJobs />
          <ApplicationsTracker />
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <AICoachCard />
          <RelocationCard />
          <SkillsRadar />
        </div>
      </div>
    </DashboardShell>
  );
}

function Welcome() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">Tuesday, 9 June</div>
        <h1 className="font-display text-4xl tracking-tight mt-1">
          Good morning, <em className="not-italic text-gradient-brand">Priya</em>.
        </h1>
        <p className="text-muted-foreground mt-1">You have 3 new interview invites and 24 fresh job matches.</p>
      </div>
      <Link to="/jobs" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-medium text-sm">
        Browse all jobs <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ProfileCard() {
  const completion = 82;
  const steps = [
    { label: "Personal info", done: true },
    { label: "Work experience", done: true },
    { label: "Video resume", done: true },
    { label: "Certifications", done: true },
    { label: "References", done: false },
  ];
  return (
    <Card>
      <CardTitle icon={Sparkles}>AI Profile Builder</CardTitle>
      <div className="mt-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm text-muted-foreground">Profile strength</span>
          <span className="font-display text-2xl text-gradient-brand">{completion}%</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completion}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-[image:var(--gradient-brand)]"
          />
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {steps.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className={"h-4 w-4 " + (s.done ? "text-success" : "text-muted-foreground/40")} />
            <span className={s.done ? "" : "text-muted-foreground"}>{s.label}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full text-sm inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-secondary hover:bg-accent">
        Add references <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </Card>
  );
}

function VideoResumeCard() {
  return (
    <Card>
      <CardTitle icon={Video}>Video Resume</CardTitle>
      <div className="mt-4 relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[oklch(0.62_0.19_256)] to-[oklch(0.75_0.17_200)]">
        <div className="absolute inset-0 grid place-items-center">
          <button className="h-14 w-14 rounded-full bg-white/95 grid place-items-center shadow-elegant">
            <PlayCircle className="h-7 w-7 text-foreground" />
          </button>
        </div>
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-xs font-semibold">
          <ShieldCheck className="h-3 w-3 text-success" /> Verified
        </div>
        <div className="absolute bottom-3 left-3 text-white text-xs">0:48 · EN, FR subs</div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="text-sm py-2 rounded-lg bg-secondary hover:bg-accent inline-flex items-center justify-center gap-1.5">
          <Plus className="h-3.5 w-3.5" /> Skill demo
        </button>
        <button className="text-sm py-2 rounded-lg bg-foreground text-background inline-flex items-center justify-center gap-1.5">
          Re-record
        </button>
      </div>
    </Card>
  );
}

function TrustScoreCard() {
  const score = 94;
  return (
    <Card>
      <CardTitle icon={ShieldCheck}>Trust Score</CardTitle>
      <div className="mt-4 flex items-center gap-5">
        <div className="relative h-24 w-24 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--muted)" strokeWidth="8" />
            <motion.circle
              cx="50" cy="50" r="42" fill="none" stroke="url(#g)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - score / 100) }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.62 0.19 256)" />
                <stop offset="1" stopColor="oklch(0.75 0.17 200)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="font-display text-2xl text-gradient-brand">{score}</div>
          </div>
        </div>
        <ul className="text-sm space-y-1.5 flex-1">
          {[
            { l: "ID verified", v: true },
            { l: "Employment verified", v: true },
            { l: "3 certifications validated", v: true },
            { l: "References pending", v: false },
          ].map((row) => (
            <li key={row.l} className="flex items-center gap-1.5">
              <CheckCircle2 className={"h-3.5 w-3.5 " + (row.v ? "text-success" : "text-muted-foreground/40")} />
              <span className={row.v ? "" : "text-muted-foreground"}>{row.l}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function RecommendedJobs() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <CardTitle icon={Briefcase}>Recommended for you</CardTitle>
        <Link to="/jobs" className="text-xs text-muted-foreground hover:text-foreground">View all →</Link>
      </div>
      <div className="mt-4 space-y-3">
        {recommendations.map((r) => (
          <div key={r.title} className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/60 transition-colors">
            <div className="h-11 w-11 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center text-brand-foreground font-semibold">
              {r.company.split(" ")[0][0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{r.title}</div>
              <div className="text-xs text-muted-foreground truncate">{r.company} · {r.salary}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="font-display text-xl text-gradient-brand leading-none">{r.match}%</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">match</div>
            </div>
            <button className="text-xs px-3 py-1.5 rounded-lg bg-foreground text-background font-medium">Apply</button>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ApplicationsTracker() {
  return (
    <Card>
      <CardTitle icon={Calendar}>Application tracker</CardTitle>
      <div className="mt-4 space-y-3">
        {applications.map((a) => (
          <div key={a.title}>
            <div className="flex items-center justify-between text-sm">
              <div>
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-muted-foreground">{a.company}</div>
              </div>
              <span className={"text-[10px] uppercase tracking-wider px-2 py-1 rounded-full text-white font-semibold " + a.color}>
                {a.stage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function AICoachCard() {
  return (
    <Card>
      <CardTitle icon={Brain}>AI Career Coach</CardTitle>
      <p className="mt-3 text-sm text-muted-foreground">
        Based on your video answers, your strongest pitch is <span className="text-foreground font-medium">patient empathy</span>. Practice your weakest: salary negotiation.
      </p>
      <button className="mt-4 text-sm inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-foreground text-background">
        Start 5-min drill <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </Card>
  );
}

function RelocationCard() {
  return (
    <Card>
      <CardTitle icon={Plane}>Visa & Relocation</CardTitle>
      <ul className="mt-3 text-sm space-y-2">
        <li className="flex items-center justify-between"><span>🇮🇪 Ireland</span><span className="text-success text-xs font-semibold">Eligible</span></li>
        <li className="flex items-center justify-between"><span>🇩🇪 Germany</span><span className="text-success text-xs font-semibold">Eligible</span></li>
        <li className="flex items-center justify-between"><span>🇳🇱 Netherlands</span><span className="text-warning text-xs font-semibold">Docs needed</span></li>
        <li className="flex items-center justify-between"><span>🇦🇹 Austria</span><span className="text-muted-foreground text-xs font-semibold">Review</span></li>
      </ul>
    </Card>
  );
}

function SkillsRadar() {
  const skills = [
    { name: "Clinical care", v: 95, icon: GraduationCap },
    { name: "English fluency", v: 88, icon: Languages },
    { name: "Leadership", v: 76, icon: Star },
    { name: "EHR systems", v: 82, icon: TrendingUp },
  ];
  return (
    <Card>
      <CardTitle icon={TrendingUp}>Skill assessment</CardTitle>
      <div className="mt-4 space-y-3">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="inline-flex items-center gap-1.5">
                <s.icon className="h-3.5 w-3.5 text-muted-foreground" />
                {s.name}
              </span>
              <span className="font-semibold">{s.v}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${s.v}%` }} transition={{ duration: 1 }} className="h-full bg-[image:var(--gradient-brand)]" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-card border border-border p-5 shadow-soft">{children}</div>;
}

function CardTitle({ icon: Icon, children }: { icon: typeof Sparkles; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center">
        <Icon className="h-3.5 w-3.5 text-brand-foreground" />
      </div>
      <h3 className="font-semibold">{children}</h3>
    </div>
  );
}
