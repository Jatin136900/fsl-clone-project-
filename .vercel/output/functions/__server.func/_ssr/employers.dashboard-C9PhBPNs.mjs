import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DashboardShell, E as EMPLOYER_NAV } from "./DashboardShell-DpRtUbuQ.mjs";
import { a as Search, P as Plus, c as Briefcase, U as Users, V as Video, j as ChartColumn, k as ArrowUpRight, g as CirclePlay, e as ShieldCheck, M as MapPin, E as Ellipsis, A as ArrowRight, S as Sparkles } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const kpis = [{
  label: "Open roles",
  value: "14",
  delta: "+3 this week",
  icon: Briefcase
}, {
  label: "Candidates in pipeline",
  value: "284",
  delta: "+42",
  icon: Users
}, {
  label: "Video screens watched",
  value: "1.2k",
  delta: "+18%",
  icon: Video
}, {
  label: "Avg. time-to-hire",
  value: "9d",
  delta: "-3d",
  icon: ChartColumn
}];
const candidates = [{
  name: "Priya Nadkarni",
  role: "Registered Nurse",
  country: "🇮🇳 India → Ireland",
  match: 98,
  stage: "Interview",
  trust: 94
}, {
  name: "Samuel Okafor",
  role: "Senior Welder",
  country: "🇳🇬 Nigeria → Sweden",
  match: 95,
  stage: "Shortlist",
  trust: 91
}, {
  name: "Linh Tran",
  role: "React Engineer",
  country: "🇻🇳 Vietnam → Germany",
  match: 93,
  stage: "Offer",
  trust: 96
}, {
  name: "Hassan Ali",
  role: "Chef de Partie",
  country: "🇵🇰 Pakistan → France",
  match: 91,
  stage: "Review",
  trust: 88
}, {
  name: "Joana Reyes",
  role: "Hospitality Lead",
  country: "🇵🇭 Philippines → Netherlands",
  match: 90,
  stage: "Review",
  trust: 92
}];
const pipeline = [{
  stage: "Sourced",
  count: 142
}, {
  stage: "Reviewed",
  count: 78
}, {
  stage: "Shortlist",
  count: 36
}, {
  stage: "Interview",
  count: 18
}, {
  stage: "Offer",
  count: 6
}, {
  stage: "Hired",
  count: 4
}];
function EmployerDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "employer", nav: EMPLOYER_NAV, user: {
    name: "Marcus Hollander",
    email: "marcus@berlin-robotics.com",
    avatar: "MH"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Welcome, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KPIGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.5fr_1fr] gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CandidateFeed, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineCard, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AITalentSearch, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RecentJobs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ComplianceCard, {})
    ] })
  ] }) });
}
function Welcome() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: "Berlin Robotics · Workspace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl tracking-tight mt-1", children: [
        "Welcome back, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gradient-brand", children: "Marcus" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "42 new video-verified candidates match your open roles." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
        " AI talent search"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Post a job"
      ] })
    ] })
  ] });
}
function KPIGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: kpis.map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    delay: i * 0.05
  }, className: "rounded-2xl bg-card border border-border p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: k.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { className: "h-4 w-4 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-4xl tracking-tight", children: k.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-success inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" }),
      " ",
      k.delta
    ] })
  ] }, k.label)) });
}
function CandidateFeed() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
        " Top matched candidates"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs text-muted-foreground hover:text-foreground", children: "View all →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: candidates.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center gap-4 hover:bg-accent/40 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-[oklch(0.62_0.19_256)] to-[oklch(0.75_0.17_200)] grid place-items-center text-white font-semibold", children: [
        c.name.split(" ").map((s) => s[0]).join(""),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-card grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-success font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3" }),
            " ",
            c.trust
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
            c.country
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl text-gradient-brand leading-none", children: [
          c.match,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "match" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: c.stage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-9 w-9 rounded-lg hover:bg-accent grid place-items-center", "aria-label": "More", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-4 w-4" }) })
    ] }, c.name)) })
  ] });
}
function PipelineCard() {
  const max = Math.max(...pipeline.map((p) => p.count));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4" }),
      " Hiring pipeline"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: pipeline.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s.stage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: s.count })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        width: 0
      }, animate: {
        width: `${s.count / max * 100}%`
      }, transition: {
        duration: 0.9
      }, className: "h-full bg-[image:var(--gradient-brand)]" }) })
    ] }, s.stage)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-5 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-secondary text-sm hover:bg-accent", children: [
      "Open ATS ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] });
}
function AITalentSearch() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "AI talent search", icon: Sparkles, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Describe the role in plain English. Get a ranked shortlist in seconds." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-xl border border-border bg-background p-3 text-sm", children: '"Find me React developers with European degree equivalence, fluent English, open to Amsterdam relocation."' }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium", children: [
      "Run AI search ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] });
}
function RecentJobs() {
  const jobs = [{
    title: "Senior Robotics Engineer",
    apps: 42,
    status: "Live"
  }, {
    title: "QA Automation",
    apps: 28,
    status: "Live"
  }, {
    title: "Field Service Tech (Munich)",
    apps: 19,
    status: "Draft"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Recent job posts", icon: Briefcase, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-3", children: jobs.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: j.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
        j.apps,
        " applications"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold " + (j.status === "Live" ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground"), children: j.status })
  ] }, j.title)) }) });
}
function ComplianceCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "European compliance", icon: ShieldCheck, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 text-sm space-y-2", children: [{
    l: "🇩🇪 DE Blue Card filings",
    v: "Up to date"
  }, {
    l: "🇳🇱 NL IND sponsorships",
    v: "2 expiring"
  }, {
    l: "🇮🇪 IE Critical Skills permits",
    v: "Auto-filed"
  }, {
    l: "🇵🇱 PL Voivodeship permits",
    v: "1 pending"
  }].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.l }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: row.v })
  ] }, row.l)) }) });
}
function Card({
  title,
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-5 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-brand-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: title })
    ] }),
    children
  ] });
}
function Badge({
  children
}) {
  const map = {
    Interview: "bg-warning/15 text-warning",
    Shortlist: "bg-brand/15 text-brand",
    Offer: "bg-success/15 text-success",
    Review: "bg-secondary text-muted-foreground"
  };
  const cls = map[String(children)] ?? "bg-secondary text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold " + cls, children });
}
export {
  EmployerDashboard as component
};
