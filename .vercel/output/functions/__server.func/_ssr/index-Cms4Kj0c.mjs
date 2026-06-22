import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Sparkles, A as ArrowRight, g as CirclePlay, c as Briefcase, h as Star, U as Users, B as Building2, T as TrendingUp, e as ShieldCheck, M as MapPin, i as Brain, C as CircleCheck } from "../_libs/lucide-react.mjs";
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
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }
  })
};
const countries = [
  { flag: "🇩🇪", name: "Germany", jobs: "9.8k" },
  { flag: "🇳🇱", name: "Netherlands", jobs: "7.6k" },
  { flag: "🇮🇪", name: "Ireland", jobs: "4.2k" },
  { flag: "🇫🇷", name: "France", jobs: "8.2k" },
  { flag: "🇪🇸", name: "Spain", jobs: "5.1k" },
  { flag: "🇸🇪", name: "Sweden", jobs: "3.4k" },
  { flag: "🇦🇹", name: "Austria", jobs: "2.8k" },
  { flag: "🇵🇱", name: "Poland", jobs: "1.9k" }
];
const steps = [
  { title: "Build a video profile", body: "AI guides you to record a 60-second pitch, verify your skills, and upload your resume." },
  { title: "Get matched with EU employers", body: "Our matching engine scores fit across qualifications, language, and visa requirements." },
  { title: "Interview on platform", body: "Conduct secure, automated video screens or live calls with auto-translation features." },
  { title: "Relocate & onboard", body: "Get full support with contracts, paperwork, local compliance, and EU visa sponsorship." }
];
const testimonials = [
  {
    quote: "We relocated 14 engineers to Berlin in under a month. The verified video resumes saved us over 80 hours of screening time.",
    name: "Aisha Rahman",
    role: "Head of Talent · Berlin Robotics",
    avatar: "AR"
  },
  {
    quote: "WorkInEurope is the first platform that actually handles the complexity of EU relocation, compliance, and language barriers smoothly.",
    name: "Marcus Hollander",
    role: "CTO · Munich Biotech",
    avatar: "MH"
  },
  {
    quote: "I secured my dream developer role in Amsterdam from Bangalore. The video portfolio helped me stand out instantly.",
    name: "Joana Reyes",
    role: "Full Stack Engineer · Adyen",
    avatar: "JR"
  }
];
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Countries, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl glass-strong rounded-2xl shadow-soft flex items-center justify-between px-5 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-brand-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl tracking-tight", children: [
        "WorkIn",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Europe" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/jobs", className: "hover:text-foreground transition-colors", children: "Jobs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-foreground transition-colors", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#countries", className: "hover:text-foreground transition-colors", children: "Destinations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#testimonials", className: "hover:text-foreground transition-colors", children: "Success Stories" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/signin", className: "hidden sm:inline-flex text-sm px-4 py-2 rounded-lg hover:bg-accent transition-colors", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/candidates/signup", className: "inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity", children: [
        "Get started ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-80 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.025] pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            animate: "show",
            variants: fadeUp,
            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success animate-pulse" }),
              "Relocating top global talent to European companies"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            custom: 1,
            initial: "hidden",
            animate: "show",
            variants: fadeUp,
            className: "mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight",
            children: [
              "Your gateway to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gradient-brand", children: "working in Europe" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            custom: 2,
            initial: "hidden",
            animate: "show",
            variants: fadeUp,
            className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed",
            children: "WorkInEurope connects international professionals with verified European employers. Find visa-sponsored roles, showcase your skills on video, and streamline your relocation process in days."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            custom: 3,
            initial: "hidden",
            animate: "show",
            variants: fadeUp,
            className: "mt-8 flex flex-wrap items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", className: "group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium shadow-elegant hover:shadow-glow transition-all", children: [
                "I'm hiring for EU roles",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-0.5 transition-transform" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/jobs", className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong font-medium hover:bg-accent transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4" }),
                "Find European jobs"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            custom: 4,
            initial: "hidden",
            animate: "show",
            variants: fadeUp,
            className: "mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold text-gradient-brand", children: "48k+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Active EU Employers" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold text-gradient-brand", children: "71%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Faster Relocation Time" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold text-gradient-brand", children: "100%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Verified EU Compliance" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVisual, {})
    ] }) })
  ] });
}
function HeroVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] },
      className: "relative",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/6] sm:aspect-[5/5] max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 bg-[image:var(--gradient-mesh)] opacity-30 blur-3xl rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: { y: [0, -8, 0] },
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            className: "relative glass-strong rounded-3xl p-5 shadow-elegant",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.62_0.19_256)] to-[oklch(0.75_0.17_200)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-white/50 animate-pulse-ring" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "relative h-16 w-16 rounded-full bg-white/95 grid place-items-center shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-7 w-7 text-foreground" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-white text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" }),
                  " LIVE SCREEN"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-xs font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 text-success" }),
                  " Verified Skills"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: "Video introduction · 0:52" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-lg", children: "Priya N. — Cloud Engineer" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Senior Devops Specialist" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-xs flex items-center gap-1 mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                    " Target: Germany, Netherlands, Ireland"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "EU Fit Score" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gradient-brand leading-none", children: "98%" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: { y: [0, 10, 0] },
            transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            className: "absolute -left-6 sm:-left-12 bottom-16 glass-strong rounded-2xl p-4 shadow-elegant w-60 hidden sm:block",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3.5 w-3.5 text-brand" }),
                " EU VISA COMPLIANCE"
              ] }),
              [
                { label: "EU Degree equivalence", v: 100 },
                { label: "Language certification", v: 95 },
                { label: "Visa priority score", v: 98 }
              ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 last:mb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    row.v,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { width: 0 },
                    animate: { width: `${row.v}%` },
                    transition: { duration: 1.2, delay: 0.6 },
                    className: "h-full bg-[image:var(--gradient-brand)]"
                  }
                ) })
              ] }, row.label))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, -10, 0] },
            transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            className: "absolute -right-4 sm:-right-10 top-12 glass-strong rounded-2xl p-3.5 shadow-elegant w-56 hidden sm:block",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-success/15 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: "EU Visa Approved" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Relocating to Amsterdam 🇳🇱" })
              ] })
            ] })
          }
        )
      ] })
    }
  );
}
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "py-20 md:py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-brand font-semibold", children: "How it works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]", children: "Simplifying the relocation journey." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground md:max-w-sm", children: "A secure, end-to-end recruitment process designed to guide you step-by-step from your first video pitch to your EU visa stamp." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.li,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "relative rounded-2xl p-7 bg-card border border-border shadow-soft",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-5xl text-gradient-brand leading-none", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-semibold text-lg", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.body }),
          i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "hidden lg:block absolute -right-3 top-9 h-5 w-5 text-muted-foreground/40" })
        ]
      },
      s.title
    )) })
  ] }) });
}
function Countries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "countries", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-brand font-semibold", children: "European Corridors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]", children: "Popular target destinations." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "We map verified visa options, salary benchmarks, and local compliance requirements for Europe's leading economies." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: countries.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        className: "group relative rounded-2xl p-6 bg-card border border-border hover:border-foreground/20 hover:shadow-elegant transition-all cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: c.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-semibold", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-muted-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5" }),
            " ",
            c.jobs,
            " open roles"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "absolute top-6 right-6 h-4 w-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" })
        ]
      },
      c.name
    )) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "py-20 md:py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-brand font-semibold", children: "Success Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]", children: "Relocation stories that inspire." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "rounded-2xl p-7 bg-card border border-border shadow-soft flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-4", children: [...Array(5)].map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-warning text-warning" }, i2)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-xl leading-snug tracking-tight flex-1", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-10 w-10 rounded-full grid place-items-center text-sm font-semibold text-white",
                style: { background: `oklch(0.6 0.18 ${180 + i * 50})` },
                children: t.avatar
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: t.role })
            ] })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl p-10 md:p-16 bg-foreground text-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-25" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.05]",
        style: {
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl tracking-tight leading-[1.05]", children: "Europe's leading careers are waiting." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-background/70 text-lg max-w-lg", children: "Join 2.4M+ international professionals matching with verified European employers today." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/jobs", className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-background text-foreground font-medium hover:opacity-90 transition", children: [
            "Browse European jobs ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-background/30 text-background hover:bg-background/10 transition", children: "Hire global talent for EU" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: [
        { icon: Users, label: "Free for candidates, always" },
        { icon: Building2, label: "European compliance verification" },
        { icon: TrendingUp, label: "Guided relocation assistance" }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 glass-strong rounded-xl p-4 text-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-background/15 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: item.label })
      ] }, item.label)) })
    ] })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-md bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-brand-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-foreground", children: "WorkInEurope" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-foreground cursor-pointer", children: "Privacy Policy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-foreground cursor-pointer", children: "Terms of Service" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-foreground cursor-pointer", children: "Relocation Guide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-foreground cursor-pointer", children: "Contact Support" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " WorkInEurope · Your European career starts here."
    ] })
  ] }) });
}
const SplitComponent = Landing;
export {
  SplitComponent as component
};
