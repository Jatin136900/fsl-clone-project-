import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { D as DashboardShell, C as CANDIDATE_NAV } from "./DashboardShell-DpRtUbuQ.mjs";
import { A as ArrowRight, S as Sparkles, C as CircleCheck, V as Video, g as CirclePlay, e as ShieldCheck, P as Plus, c as Briefcase, d as Calendar, i as Brain, m as Plane, T as TrendingUp, G as GraduationCap, L as Languages, h as Star } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
const recommendations = [{
  title: "Registered Nurse",
  company: "Mercy Health · 🇮🇪 Dublin",
  salary: "4,200 EUR/mo",
  match: 98
}, {
  title: "Senior Nurse — ICU",
  company: "Berlin Klinikum · 🇩🇪 Berlin",
  salary: "4,500 EUR/mo",
  match: 94
}, {
  title: "Charge Nurse",
  company: "Vienna Care · 🇦🇹 Vienna",
  salary: "4,100 EUR/mo",
  match: 91
}];
const applications = [{
  title: "Registered Nurse",
  company: "Mercy Health · Dublin",
  stage: "Interview",
  color: "bg-warning"
}, {
  title: "ICU Specialist",
  company: "Berlin Klinikum · Berlin",
  stage: "Shortlisted",
  color: "bg-brand"
}, {
  title: "Pediatric Nurse",
  company: "Rotterdam Care · Rotterdam",
  stage: "Reviewed",
  color: "bg-muted-foreground"
}, {
  title: "Emergency Nurse",
  company: "Stockholm Clinic · Stockholm",
  stage: "Submitted",
  color: "bg-muted-foreground"
}];
function CandidateDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { role: "candidate", nav: CANDIDATE_NAV, user: {
    name: "Priya Nadkarni",
    email: "priya@email.com",
    avatar: "PN"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Welcome, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VideoResumeCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustScoreCard, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.4fr_1fr] gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendedJobs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationsTracker, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AICoachCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RelocationCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsRadar, {})
    ] })
  ] }) });
}
function Welcome() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: "Tuesday, 9 June" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl tracking-tight mt-1", children: [
        "Good morning, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gradient-brand", children: "Priya" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "You have 3 new interview invites and 24 fresh job matches." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/jobs", className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-medium text-sm", children: [
      "Browse all jobs ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] })
  ] });
}
function ProfileCard() {
  const completion = 82;
  const steps = [{
    label: "Personal info",
    done: true
  }, {
    label: "Work experience",
    done: true
  }, {
    label: "Video resume",
    done: true
  }, {
    label: "Certifications",
    done: true
  }, {
    label: "References",
    done: false
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: Sparkles, children: "AI Profile Builder" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Profile strength" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl text-gradient-brand", children: [
          completion,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        width: 0
      }, animate: {
        width: `${completion}%`
      }, transition: {
        duration: 1
      }, className: "h-full bg-[image:var(--gradient-brand)]" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 " + (s.done ? "text-success" : "text-muted-foreground/40") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s.done ? "" : "text-muted-foreground", children: s.label })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 w-full text-sm inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-secondary hover:bg-accent", children: [
      "Add references ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] });
}
function VideoResumeCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: Video, children: "Video Resume" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[oklch(0.62_0.19_256)] to-[oklch(0.75_0.17_200)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-14 w-14 rounded-full bg-white/95 grid place-items-center shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-7 w-7 text-foreground" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-xs font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 text-success" }),
        " Verified"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 text-white text-xs", children: "0:48 · EN, FR subs" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-sm py-2 rounded-lg bg-secondary hover:bg-accent inline-flex items-center justify-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
        " Skill demo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm py-2 rounded-lg bg-foreground text-background inline-flex items-center justify-center gap-1.5", children: "Re-record" })
    ] })
  ] });
}
function TrustScoreCard() {
  const score = 94;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: ShieldCheck, children: "Trust Score" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 w-24 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "h-full w-full -rotate-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "42", fill: "none", stroke: "var(--muted)", strokeWidth: "8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.circle, { cx: "50", cy: "50", r: "42", fill: "none", stroke: "url(#g)", strokeWidth: "8", strokeLinecap: "round", strokeDasharray: 2 * Math.PI * 42, initial: {
            strokeDashoffset: 2 * Math.PI * 42
          }, animate: {
            strokeDashoffset: 2 * Math.PI * 42 * (1 - score / 100)
          }, transition: {
            duration: 1.4,
            ease: "easeOut"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g", x1: "0", x2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "oklch(0.62 0.19 256)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "oklch(0.75 0.17 200)" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gradient-brand", children: score }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-sm space-y-1.5 flex-1", children: [{
        l: "ID verified",
        v: true
      }, {
        l: "Employment verified",
        v: true
      }, {
        l: "3 certifications validated",
        v: true
      }, {
        l: "References pending",
        v: false
      }].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 " + (row.v ? "text-success" : "text-muted-foreground/40") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: row.v ? "" : "text-muted-foreground", children: row.l })
      ] }, row.l)) })
    ] })
  ] });
}
function RecommendedJobs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: Briefcase, children: "Recommended for you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/jobs", className: "text-xs text-muted-foreground hover:text-foreground", children: "View all →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: recommendations.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-3 rounded-xl hover:bg-accent/60 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center text-brand-foreground font-semibold", children: r.company.split(" ")[0][0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
          r.company,
          " · ",
          r.salary
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl text-gradient-brand leading-none", children: [
          r.match,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "match" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs px-3 py-1.5 rounded-lg bg-foreground text-background font-medium", children: "Apply" })
    ] }, r.title)) })
  ] });
}
function ApplicationsTracker() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: Calendar, children: "Application tracker" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: applications.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.company })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-2 py-1 rounded-full text-white font-semibold " + a.color, children: a.stage })
    ] }) }, a.title)) })
  ] });
}
function AICoachCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: Brain, children: "AI Career Coach" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
      "Based on your video answers, your strongest pitch is ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "patient empathy" }),
      ". Practice your weakest: salary negotiation."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 text-sm inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-foreground text-background", children: [
      "Start 5-min drill ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] });
}
function RelocationCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: Plane, children: "Visa & Relocation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 text-sm space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🇮🇪 Ireland" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success text-xs font-semibold", children: "Eligible" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🇩🇪 Germany" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success text-xs font-semibold", children: "Eligible" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🇳🇱 Netherlands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-warning text-xs font-semibold", children: "Docs needed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🇦🇹 Austria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs font-semibold", children: "Review" })
      ] })
    ] })
  ] });
}
function SkillsRadar() {
  const skills = [{
    name: "Clinical care",
    v: 95,
    icon: GraduationCap
  }, {
    name: "English fluency",
    v: 88,
    icon: Languages
  }, {
    name: "Leadership",
    v: 76,
    icon: Star
  }, {
    name: "EHR systems",
    v: 82,
    icon: TrendingUp
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { icon: TrendingUp, children: "Skill assessment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-3.5 w-3.5 text-muted-foreground" }),
          s.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          s.v,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        width: 0
      }, animate: {
        width: `${s.v}%`
      }, transition: {
        duration: 1
      }, className: "h-full bg-[image:var(--gradient-brand)]" }) })
    ] }, s.name)) })
  ] });
}
function Card({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border p-5 shadow-soft", children });
}
function CardTitle({
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-brand-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children })
  ] });
}
export {
  CandidateDashboard as component
};
