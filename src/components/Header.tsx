import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Brain,
  Briefcase,
  CheckCircle2,
  Star,
  Users,
  Building2,
  TrendingUp,
  MapPin,
  Globe2,
  Plane,
  UserCheck,
  Video,
  FileCheck,
  Menu,
  X,
} from "lucide-react";

import type { Variants } from "framer-motion";
import logo from "@/Images/logo.png";

function AnimatedCounter({
  value,
  duration = 1.8,
  delay = 0,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  decimals?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      });
    }
  }, [inView, count, value, duration, delay]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        const num = parseFloat(latest);
        ref.current.textContent = decimals > 0
          ? num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix
          : Math.round(num).toLocaleString() + suffix;
      }
    });
  }, [rounded, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const countries = [
  { flag: "🇩🇪", name: "Germany", jobs: "9.8k" },
  { flag: "🇳🇱", name: "Netherlands", jobs: "7.6k" },
  { flag: "🇮🇪", name: "Ireland", jobs: "4.2k" },
  { flag: "🇫🇷", name: "France", jobs: "8.2k" },
  { flag: "🇪🇸", name: "Spain", jobs: "5.1k" },
  { flag: "🇸🇪", name: "Sweden", jobs: "3.4k" },
  { flag: "🇦🇹", name: "Austria", jobs: "2.8k" },
  { flag: "🇵🇱", name: "Poland", jobs: "1.9k" },
];


const testimonials = [
  {
    quote:
      "We relocated 14 engineers to Berlin in under a month. The verified video resumes saved us over 80 hours of screening time.",
    name: "Aisha Rahman",
    role: "Head of Talent · Berlin Robotics",
    avatar: "AR",
  },
  {
    quote:
      "WorkInEurope is the first platform that actually handles the complexity of EU relocation, compliance, and language barriers smoothly.",
    name: "Marcus Hollander",
    role: "CTO · Munich Biotech",
    avatar: "MH",
  },
  {
    quote:
      "I secured my dream developer role in Amsterdam from Bangalore. The video portfolio helped me stand out instantly.",
    name: "Joana Reyes",
    role: "Full Stack Engineer · Adyen",
    avatar: "JR",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />
      <Hero />
      <GlobalCareerJourney />
      <Countries />
      <SuccessStoriesMap />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-strong border-x-0 border-t-0 border-b border-border/15 shadow-soft">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 py-3.5 md:py-4">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="WorkInEurope" className="h-16 w-16 rounded-xl object-contain" />
            <span className="font-display text-2xl tracking-tight">WorkIn<span className="text-muted-foreground">Europe</span></span>
          </Link>
        </div>

        {/* Center: Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-muted-foreground">
          <Link to="/jobs" className="hover:text-foreground transition-colors">Jobs</Link>
          <a href="#countries" className="hover:text-foreground transition-colors">Destinations</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Success Stories</a>
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Link
                to={user.role === "candidate" ? "/candidates/dashboard" : "/employers/dashboard"}
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold h-11 px-5 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                Go to Dashboard <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <>
                <Link to="/candidate/login" className="inline-flex items-center justify-center text-sm font-semibold h-11 px-5 rounded-lg hover:bg-accent transition-colors">Sign in</Link>
                <Link to="/candidate/register" className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold h-11 px-6 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity">
                  Get started <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </div>

          {/* Hamburger toggle button (visible on mobile/tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-card/98 backdrop-blur-lg overflow-hidden shadow-elegant"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              <Link 
                to="/jobs" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-border/40 transition-colors"
              >
                Jobs
              </Link>
              <a 
                href="#countries" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-border/40 transition-colors"
              >
                Destinations
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-border/40 transition-colors"
              >
                Success Stories
              </a>
              <div className="flex flex-col gap-3.5 pt-4">
                {user ? (
                  <Link
                    to={user.role === "candidate" ? "/candidates/dashboard" : "/employers/dashboard"}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5 text-sm font-semibold h-11 px-5 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    Go to Dashboard <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <>
                    <Link 
                      to="/candidate/login" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center text-sm font-semibold h-11 px-5 rounded-lg border border-border hover:bg-accent transition-colors"
                    >
                      Sign in
                    </Link>
                    <Link 
                      to="/candidate/register" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-1.5 text-sm font-semibold h-11 px-6 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                    >
                      Get started <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-80 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Relocating top global talent to European companies
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
            >
              Your gateway to <em className="not-italic text-gradient-brand">working in Europe</em>.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              WorkInEurope connects skilled professionals with verified European employers. Find visa-sponsored jobs and start your relocation journey with confidence.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/company/register" className="group inline-flex items-center gap-2.5 px-7 py-4 md:px-[2.25rem] md:py-[1.125rem] rounded-xl bg-foreground text-background font-semibold text-base md:text-[1.05rem] shadow-elegant hover:shadow-glow transition-all">
                I'm hiring for EU roles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/jobs" className="inline-flex items-center gap-2.5 px-6 py-3.5 md:px-8 md:py-4 rounded-xl glass-strong font-semibold text-base md:text-[1.05rem] hover:bg-accent transition-colors">
                <PlayCircle className="h-4 w-4" />
                Find European jobs
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-8"
            >
              <div>
                <div className="font-display text-3xl font-semibold text-gradient-brand">
                  <AnimatedCounter value={48} suffix="k+" delay={0} />
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">Active EU Employers</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-gradient-brand">
                  <AnimatedCounter value={71} suffix="%" delay={0.2} />
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">Faster Relocation Time</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-gradient-brand">
                  <AnimatedCounter value={100} suffix="%" delay={0.4} />
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">Verified EU Compliance</div>
              </div>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative"
    >
      <div className="relative aspect-[5/6] sm:aspect-[5/5] max-w-md mx-auto">
        {/* Glow */}
        <div className="absolute -inset-10 bg-[image:var(--gradient-mesh)] opacity-30 blur-3xl rounded-full" />

        {/* Main candidate card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative glass-strong rounded-3xl p-5 shadow-elegant"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.62_0.19_256)] to-[oklch(0.75_0.17_200)]">
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-white/50 animate-pulse-ring" />
                <button className="relative h-16 w-16 rounded-full bg-white/95 grid place-items-center shadow-elegant">
                  <PlayCircle className="h-7 w-7 text-foreground" />
                </button>
              </div>
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-white text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE SCREEN
            </div>
            <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-xs font-semibold">
              <ShieldCheck className="h-3 w-3 text-success" /> Verified Skills
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-xs opacity-80">Video introduction · 0:52</div>
              <div className="font-semibold text-lg">Priya N. — Cloud Engineer</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <div>
              <div className="font-semibold">Senior Devops Specialist</div>
              <div className="text-muted-foreground text-xs flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3" /> Target: Germany, Netherlands, Ireland
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">EU Fit Score</div>
              <div className="font-display text-2xl text-gradient-brand leading-none">98%</div>
            </div>
          </div>
        </motion.div>


      </div>
    </motion.div>
  );
}

const getCountryFlagUrl = (name: string) => {
  const codes: Record<string, string> = {
    Germany: "de",
    Netherlands: "nl",
    Ireland: "ie",
    France: "fr",
    Spain: "es",
    Sweden: "se",
    Austria: "at",
    Poland: "pl",
  };
  const code = codes[name];
  return code ? `https://flagcdn.com/${code}.svg` : "";
};

const getCountryCode = (name: string) => {
  const codes: Record<string, string> = {
    Germany: "DE",
    Netherlands: "NL",
    Ireland: "IE",
    France: "FR",
    Spain: "ES",
    Sweden: "SE",
    Austria: "AT",
    Poland: "PL",
  };
  return codes[name] || "";
};

function Countries() {
  return (
    <section id="countries" className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">European Corridors</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
            Popular target destinations.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We map verified visa options, salary benchmarks, and local compliance requirements for Europe's leading economies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 bg-card border border-border hover:border-brand/30 hover:shadow-elegant transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10 max-w-[calc(100%-72px)] sm:max-w-[calc(100%-88px)]">
                <div className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-secondary text-xs font-semibold text-muted-foreground tracking-wider mb-3">
                  {getCountryCode(c.name)}
                </div>
                <div className="font-semibold text-lg">{c.name}</div>
                <div className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5" /> {c.jobs} open roles
                </div>
              </div>

              <img
                src={getCountryFlagUrl(c.name)}
                alt={`${c.name} Flag`}
                className="absolute right-0 bottom-0 w-20 h-14 sm:w-24 sm:h-16 object-cover rounded-tl-xl border-t border-l border-border/20 shadow-soft pointer-events-none group-hover:scale-110 transition-all duration-500 z-20 opacity-100 filter-none"
              />

              <ArrowRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all z-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 bg-foreground text-background">
          <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-25" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Europe's leading careers are waiting.
              </h2>
              <p className="mt-4 text-background/70 text-lg max-w-lg">
                Join 2.4M+ international professionals matching with verified European employers today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/jobs" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-background text-foreground font-medium hover:opacity-90 transition">
                  Browse European jobs <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/company/register" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-background/30 text-background hover:bg-background/10 transition">
                  Hire global talent for EU
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              {[
                {
                  icon: Users,
                  label: "Free for candidates, always",
                  bgClass: "from-white/95 to-emerald-50/95 hover:from-white hover:to-emerald-100/95 border-emerald-500/20 hover:border-emerald-500/35",
                  iconClass: "text-emerald-600 bg-emerald-50 border border-emerald-200/50",
                  shadowClass: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
                },
                {
                  icon: Building2,
                  label: "European compliance verification",
                  bgClass: "from-white/95 to-blue-50/95 hover:from-white hover:to-blue-100/95 border-blue-500/20 hover:border-blue-500/35",
                  iconClass: "text-blue-600 bg-blue-50 border border-blue-200/50",
                  shadowClass: "hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]",
                },
                {
                  icon: TrendingUp,
                  label: "Guided relocation assistance",
                  bgClass: "from-white/95 to-purple-50/95 hover:from-white hover:to-purple-100/95 border-purple-500/20 hover:border-purple-500/35",
                  iconClass: "text-purple-600 bg-purple-50 border border-purple-200/50",
                  shadowClass: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className={`group flex items-center gap-4 bg-gradient-to-r ${item.bgClass} border rounded-2xl p-4 text-slate-900 shadow-soft hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${item.shadowClass}`}
                  >
                    <div className={`h-10 w-10 rounded-xl grid place-items-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.iconClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900/90">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-muted-foreground text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img src={logo} alt="WorkInEurope" className="h-14 w-14 rounded-xl object-contain" />
          <span className="font-display text-xl text-foreground">WorkInEurope</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a className="hover:text-foreground cursor-pointer">Privacy Policy</a>
          <a className="hover:text-foreground cursor-pointer">Terms of Service</a>
          <a className="hover:text-foreground cursor-pointer">Relocation Guide</a>
          <a className="hover:text-foreground cursor-pointer">Contact Support</a>
        </div>
        <div className="text-muted-foreground/80">© {new Date().getFullYear()} WorkInEurope · Your European career starts here.</div>
      </div>
    </footer>
  );
}

function GlobalCareerJourney() {
  const [progress, setProgress] = useState(0);
  const [isJourneyCompleted, setIsJourneyCompleted] = useState(false);
  const [showFinalGlow, setShowFinalGlow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 4, {
        duration: 4.5,
        ease: "linear",
        onUpdate: (latest) => {
          setProgress(latest);
        },
        onComplete: () => {
          setTimeout(() => {
            setIsJourneyCompleted(true);
            setShowFinalGlow(true);
            setTimeout(() => {
              setShowFinalGlow(false);
            }, 1500);
          }, 400);
        },
      });
      return () => controls.stop();
    }
  }, [isInView]);

  const journeySteps = [
    {
      num: "01",
      title: "Create Profile",
      desc: "Build a digital resume with AI-verified degrees and skills certifications.",
      icon: UserCheck,
    },
    {
      num: "02",
      title: "Upload Skill Video",
      desc: "Record a short pitch showcasing your technical skills and speaking ability.",
      icon: PlayCircle,
    },
    {
      num: "03",
      title: "Get Interviewed",
      desc: "Connect directly via secure on-platform calls with real-time translation.",
      icon: Video,
    },
    {
      num: "04",
      title: "Receive Offer",
      desc: "Lock in visa-sponsored employment contracts under EU labor standards.",
      icon: FileCheck,
    },
    {
      num: "05",
      title: "Relocate Abroad",
      desc: "Get full relocation support, flights, housing, and work visa compliance.",
      icon: Plane,
    },
  ];

  const getStepState = (index: number) => {
    const isCompleted = index === 4 ? isJourneyCompleted : progress >= index + 1;
    const isActive = index === 4 ? (progress >= 4 && !isJourneyCompleted) : (progress >= index && progress < index + 1);
    return { isCompleted, isActive };
  };

  const getLineScale = (index: number) => {
    if (progress <= index) return 0;
    if (progress >= index + 1) return 1;
    return progress - index;
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-background">
      {/* Cinematic background overlay */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden lg:block">
        <img
          src="/images/career_journey_visual.png"
          alt="Career Journey"
          className="h-full w-full object-cover"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Your Roadmap</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-tight">
            The Global Career Journey.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A transparent, step-by-step relocation pipeline designed to match your skills with trusted employers.
          </p>
        </div>

        <div className={`relative transition-all duration-[1200ms] ease-out rounded-[2rem] p-8 -m-8 border border-transparent ${
          showFinalGlow 
            ? "shadow-[0_0_60px_oklch(0.62_0.19_256/_0.2)] bg-brand/5 border-brand/10" 
            : ""
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 relative z-10">
            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              const { isCompleted, isActive } = getStepState(i);
              const lineScale = i < 4 ? getLineScale(i) : 0;

              return (
                <div
                  key={step.title}
                  className="flex flex-row md:flex-col items-start gap-5 md:gap-0 relative group w-full"
                >
                  {/* Connection lines to the next step */}
                  {i < 4 && (
                    <>
                      {/* Desktop lines */}
                      <div className="absolute left-[64px] right-[-32px] top-[32px] h-0.5 bg-border/20 hidden md:block z-0 pointer-events-none" />
                      <div 
                        className="absolute left-[64px] right-[-32px] top-[32px] h-0.5 bg-[image:var(--gradient-brand)] hidden md:block origin-left transition-all duration-75 ease-out z-0 pointer-events-none" 
                        style={{ transform: `scaleX(${lineScale})`, transformOrigin: "left" }}
                      />

                      {/* Mobile lines */}
                      <div className="absolute left-[32px] top-[64px] bottom-[-40px] w-0.5 bg-border/20 md:hidden z-0 pointer-events-none" />
                      <div 
                        className="absolute left-[32px] top-[64px] bottom-[-40px] w-0.5 bg-[image:var(--gradient-brand)] md:hidden origin-top transition-all duration-75 ease-out z-0 pointer-events-none" 
                        style={{ transform: `scaleY(${lineScale})`, transformOrigin: "top" }}
                      />
                    </>
                  )}

                  {/* Node circle wrapper */}
                  <div
                    className={`relative flex items-center justify-center h-16 w-16 rounded-2xl transition-all duration-500 bg-card shrink-0 md:mb-5 border-2 ${
                      isActive
                        ? "border-brand shadow-glow scale-110 z-10"
                        : "border-border shadow-soft z-10"
                    }`}
                  >
                    <Icon className={`h-6 w-6 transition-opacity duration-500 text-brand ${
                      isActive || isCompleted ? "opacity-100" : "opacity-40"
                    }`} />
                    
                    {/* Badge / Success indicator */}
                    <AnimatePresence mode="wait">
                      {isCompleted ? (
                        <motion.span
                          key="completed"
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-success text-white flex items-center justify-center shadow-soft z-20"
                        >
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                            <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="num"
                          className={`absolute -top-1.5 -right-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full transition-all duration-300 shadow-soft z-20 ${
                            isActive
                              ? "bg-brand text-brand-foreground scale-110"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {step.num}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col text-left">
                    <h3 className={`font-semibold text-lg transition-colors duration-500 ${
                      isActive ? "text-brand" : isCompleted ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-foreground/90" : "text-muted-foreground"
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesMap() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { numValue: 8400, suffix: "+", label: "Candidates Relocated", decimals: 0 },
    { numValue: 1600, suffix: "+", label: "Verified Employers", decimals: 0 },
    { numValue: 96.4, suffix: "%", label: "Visa Success Rate", decimals: 1 },
    { numValue: 14, suffix: " Days", label: "Avg. Relocation Time", decimals: 0 },
  ];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden text-white">
      {/* Full-width premium background image with overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/global_workers_background.png"
          alt="Global Workers"
          className="h-full w-full object-cover"
        />
        {/* Deep blue brand gradient overlay for readability and premium look */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.02_260)] via-[oklch(0.13_0.02_260/0.95)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.02_260)] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Info & Stats */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-glow font-semibold">Global Network</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-tight">
              Success Stories Around the World.
            </h2>
            <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl">
              Connecting skilled labor from all corners of the world to premium European enterprises. We verify credentials, manage compliance, and support relocation.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-glow">
                    <AnimatedCounter
                      value={s.numValue}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      delay={i * 0.1}
                    />
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/60 mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Auto-playing Testimonial Slider */}
          <div className="relative h-[350px] sm:h-[450px] w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-elegant flex flex-col p-8 sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col flex-1 justify-between relative z-10"
              >
                {/* 5-Star Rating */}
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="font-display text-2xl sm:text-3xl leading-snug tracking-tight text-white mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                </div>

                {/* Profile Information */}
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full grid place-items-center text-base font-semibold text-white shrink-0 shadow-soft"
                    style={{ background: `oklch(0.6 0.18 ${180 + activeIndex * 50})` }}
                  >
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base sm:text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 flex gap-1.5 z-30">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-6 bg-brand" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
