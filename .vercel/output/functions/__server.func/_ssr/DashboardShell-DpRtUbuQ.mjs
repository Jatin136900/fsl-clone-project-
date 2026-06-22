import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { n as LayoutDashboard, a as Search, U as Users, V as Video, o as ListChecks, c as Briefcase, p as MessageSquare, j as ChartColumn, e as ShieldCheck, B as Building2, q as CreditCard, f as Bookmark, r as User, G as GraduationCap, L as Languages, i as Brain, m as Plane, s as Calculator, S as Sparkles, t as Settings, u as LogOut, v as Bell } from "../_libs/lucide-react.mjs";
const CANDIDATE_NAV = [
  {
    title: "Overview",
    items: [
      { to: "/candidates/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/candidates/dashboard", icon: Briefcase, label: "Job recommendations", badge: "24" },
      { to: "/candidates/dashboard", icon: Bookmark, label: "Saved jobs" },
      { to: "/candidates/dashboard", icon: ListChecks, label: "Applications", badge: "8" }
    ]
  },
  {
    title: "Profile",
    items: [
      { to: "/candidates/dashboard", icon: User, label: "AI profile builder" },
      { to: "/candidates/dashboard", icon: Video, label: "Video resume" },
      { to: "/candidates/dashboard", icon: GraduationCap, label: "Certifications" },
      { to: "/candidates/dashboard", icon: Languages, label: "Languages" }
    ]
  },
  {
    title: "Tools",
    items: [
      { to: "/candidates/dashboard", icon: Brain, label: "AI career coach" },
      { to: "/candidates/dashboard", icon: MessageSquare, label: "Interview prep" },
      { to: "/candidates/dashboard", icon: Plane, label: "Visa & relocation" },
      { to: "/candidates/dashboard", icon: Calculator, label: "Earnings calculator" }
    ]
  }
];
const EMPLOYER_NAV = [
  {
    title: "Hire",
    items: [
      { to: "/employers/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/employers/dashboard", icon: Search, label: "AI talent search" },
      { to: "/employers/dashboard", icon: Users, label: "Candidate feed", badge: "new" },
      { to: "/employers/dashboard", icon: Video, label: "Video screening" }
    ]
  },
  {
    title: "Pipeline",
    items: [
      { to: "/employers/dashboard", icon: ListChecks, label: "ATS pipeline" },
      { to: "/employers/dashboard", icon: Briefcase, label: "Job postings" },
      { to: "/employers/dashboard", icon: MessageSquare, label: "Messages" }
    ]
  },
  {
    title: "Workspace",
    items: [
      { to: "/employers/dashboard", icon: ChartColumn, label: "Analytics" },
      { to: "/employers/dashboard", icon: ShieldCheck, label: "Compliance" },
      { to: "/employers/dashboard", icon: Building2, label: "Company" },
      { to: "/employers/dashboard", icon: CreditCard, label: "Billing" }
    ]
  }
];
function DashboardShell({
  nav,
  user,
  role,
  children
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh grid lg:grid-cols-[260px_1fr] bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex flex-col border-r border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-brand-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg leading-none", children: "WorkInEurope" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5", children: role === "candidate" ? "Candidate" : "Employer" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-y-auto p-3 space-y-5", children: nav.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 mb-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: group.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: group.items.map((item) => {
          const active = path === item.to;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.to,
              className: "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors " + (active ? "bg-accent text-foreground font-medium" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: item.label }),
                item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-foreground text-background font-semibold", children: item.badge })
              ]
            }
          ) }, item.label);
        }) })
      ] }, group.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-[image:var(--gradient-brand)] grid place-items-center text-brand-foreground text-sm font-semibold", children: user.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: user.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", children: user.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "mt-1 flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
              " Sign out"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 glass-strong border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-xl relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              placeholder: role === "candidate" ? "Search jobs, companies, skills…" : "Search candidates, skills, countries…",
              className: "w-full pl-9 pr-4 py-2 rounded-lg bg-background border border-border focus:border-foreground/20 outline-none text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative h-9 w-9 rounded-lg grid place-items-center hover:bg-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden h-9 w-9 rounded-full bg-[image:var(--gradient-brand)] grid place-items-center text-brand-foreground text-xs font-semibold", children: user.avatar })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 lg:p-8", children })
    ] })
  ] });
}
export {
  CANDIDATE_NAV as C,
  DashboardShell as D,
  EMPLOYER_NAV as E
};
