import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  User,
  Video,
  Briefcase,
  Bookmark,
  MessageSquare,
  GraduationCap,
  Languages,
  Brain,
  Plane,
  Calculator,
  Settings,
  LogOut,
  Bell,
  Search,
  Users,
  ListChecks,
  BarChart3,
  Building2,
  ShieldCheck,
  CreditCard,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/Images/logo.png";

type NavItem = { to: string; icon: LucideIcon; label: string; badge?: string };
type NavGroup = { title: string; items: NavItem[] };

export const CANDIDATE_NAV: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { to: "/candidates/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/candidates/dashboard", icon: Briefcase, label: "Job recommendations", badge: "24" },
      { to: "/candidates/dashboard", icon: Bookmark, label: "Saved jobs" },
      { to: "/candidates/dashboard", icon: ListChecks, label: "Applications", badge: "8" },
    ],
  },
  {
    title: "Profile",
    items: [
      { to: "/candidates/dashboard", icon: User, label: "AI profile builder" },
      { to: "/candidates/dashboard", icon: Video, label: "Video resume" },
      { to: "/candidates/dashboard", icon: GraduationCap, label: "Certifications" },
      { to: "/candidates/dashboard", icon: Languages, label: "Languages" },
    ],
  },
  {
    title: "Tools",
    items: [
      { to: "/candidates/dashboard", icon: Brain, label: "AI career coach" },
      { to: "/candidates/dashboard", icon: MessageSquare, label: "Interview prep" },
      { to: "/candidates/dashboard", icon: Plane, label: "Visa & relocation" },
      { to: "/candidates/dashboard", icon: Calculator, label: "Earnings calculator" },
    ],
  },
];

export const EMPLOYER_NAV: NavGroup[] = [
  {
    title: "Hire",
    items: [
      { to: "/employers/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/employers/dashboard", icon: Search, label: "AI talent search" },
      { to: "/employers/dashboard", icon: Users, label: "Candidate feed", badge: "new" },
      { to: "/employers/dashboard", icon: Video, label: "Video screening" },
    ],
  },
  {
    title: "Pipeline",
    items: [
      { to: "/employers/dashboard", icon: ListChecks, label: "ATS pipeline" },
      { to: "/employers/dashboard", icon: Briefcase, label: "Job postings" },
      { to: "/employers/dashboard", icon: MessageSquare, label: "Messages" },
    ],
  },
  {
    title: "Workspace",
    items: [
      { to: "/employers/dashboard", icon: BarChart3, label: "Analytics" },
      { to: "/employers/dashboard", icon: ShieldCheck, label: "Compliance" },
      { to: "/employers/dashboard", icon: Building2, label: "Company" },
      { to: "/employers/dashboard", icon: CreditCard, label: "Billing" },
    ],
  },
];

import { useAuth } from "@/context/AuthContext";

export function DashboardShell({
  nav,
  user,
  role,
  children,
}: {
  nav: NavGroup[];
  user: { name: string; email: string; avatar: string };
  role: "candidate" | "employer";
  children: ReactNode;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-dvh grid lg:grid-cols-[260px_1fr] bg-secondary/40">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col border-r border-border bg-card">
        <div className="p-5 border-b border-border">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="WorkInEurope" className="h-16 w-16 rounded-xl object-contain bg-card border border-border/10 p-1" />
            <div>
              <div className="font-display text-xl font-bold leading-none">WorkInEurope</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1.5">
                {role === "candidate" ? "Candidate" : "Employer"}
              </div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-5">
          {nav.map((group) => (
            <div key={group.title}>
              <div className="px-3 mb-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                {group.title}
              </div>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const active = path === item.to;
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className={
                          "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors " +
                          (active
                            ? "bg-accent text-foreground font-medium"
                            : "text-muted-foreground hover:bg-accent/60 hover:text-foreground")
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-foreground text-background font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
            <div className="h-9 w-9 rounded-full bg-[image:var(--gradient-brand)] grid place-items-center text-brand-foreground text-sm font-semibold">
              {user.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{user.name}</div>
              <div className="text-xs text-muted-foreground truncate">{user.email}</div>
            </div>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </div>
          <Link
            to="/"
            onClick={logout}
            className="mt-1 flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </Link>
        </div>
      </aside>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in" 
          />

          {/* Drawer Content */}
          <aside className="relative flex flex-col w-[280px] max-w-[80vw] h-full bg-card border-r border-border shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-3">
                <img src={logo} alt="WorkInEurope" className="h-14 w-14 rounded-xl object-contain bg-card border border-border/10 p-1" />
                <div>
                  <div className="font-display text-xl font-bold leading-none">WorkInEurope</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1.5">
                    {role === "candidate" ? "Candidate" : "Employer"}
                  </div>
                </div>
              </Link>
              <button 
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors"
                aria-label="Close Menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-3 space-y-5">
              {nav.map((group) => (
                <div key={group.title}>
                  <div className="px-3 mb-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    {group.title}
                  </div>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => {
                      const active = path === item.to;
                      return (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className={
                              "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors " +
                              (active
                                ? "bg-accent text-foreground font-medium"
                                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground")
                            }
                          >
                            <item.icon className="h-4 w-4" />
                            <span className="flex-1">{item.label}</span>
                            {item.badge && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-foreground text-background font-semibold">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
            <div className="p-3 border-t border-border">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                <div className="h-9 w-9 rounded-full bg-[image:var(--gradient-brand)] grid place-items-center text-brand-foreground text-sm font-semibold">
                  {user.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{user.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{user.email}</div>
                </div>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </div>
              <Link
                to="/"
                onClick={() => {
                  setMobileOpen(false);
                  logout();
                }}
                className="mt-1 flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
              >
                <LogOut className="h-4 w-4" /> Sign out
              </Link>
            </div>
          </aside>
        </div>
      )}

      <main className="min-w-0">
        <header className="sticky top-0 z-30 glass-strong border-b border-border">
          <div className="flex items-center gap-3 px-4 sm:px-6 py-3.5">
            <button 
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-9 w-9 rounded-lg grid place-items-center hover:bg-accent text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex-1 max-w-xl relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder={
                  role === "candidate" ? "Search jobs, companies, skills…" : "Search candidates, skills, countries…"
                }
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-background border border-border focus:border-foreground/20 outline-none text-sm"
              />
            </div>
            <button className="relative h-9 w-9 rounded-lg grid place-items-center hover:bg-accent shrink-0">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
            </button>
            <div className="lg:hidden h-9 w-9 rounded-full bg-[image:var(--gradient-brand)] grid place-items-center text-brand-foreground text-xs font-semibold shrink-0">
              {user.avatar}
            </div>
          </div>
        </header>
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
