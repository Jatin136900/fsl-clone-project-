import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
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
} from "lucide-react";

import type { Variants } from "framer-motion";

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

const steps = [
  { title: "Build a video profile", body: "AI guides you to record a 60-second pitch, verify your skills, and upload your resume." },
  { title: "Get matched with EU employers", body: "Our matching engine scores fit across qualifications, language, and visa requirements." },
  { title: "Interview on platform", body: "Conduct secure, automated video screens or live calls with auto-translation features." },
  { title: "Relocate & onboard", body: "Get full support with contracts, paperwork, local compliance, and EU visa sponsorship." },
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <HowItWorks />
      <Countries />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl glass-strong rounded-2xl shadow-soft flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center">
            <Sparkles className="h-4 w-4 text-brand-foreground" />
          </div>
          <span className="font-display text-xl tracking-tight">WorkIn<span className="text-muted-foreground">Europe</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/jobs" className="hover:text-foreground transition-colors">Jobs</Link>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#countries" className="hover:text-foreground transition-colors">Destinations</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Success Stories</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/candidates/signin" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-lg hover:bg-accent transition-colors">Sign in</Link>
          <Link to="/candidates/signup" className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity">
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
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
              WorkInEurope connects international professionals with verified European employers. 
              Find visa-sponsored roles, showcase your skills on video, and streamline your relocation process in days.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/signup" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium shadow-elegant hover:shadow-glow transition-all">
                I'm hiring for EU roles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/jobs" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong font-medium hover:bg-accent transition-colors">
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
                <div className="font-display text-3xl font-semibold text-gradient-brand">48k+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Active EU Employers</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-gradient-brand">71%</div>
                <div className="text-xs text-muted-foreground mt-0.5">Faster Relocation Time</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-gradient-brand">100%</div>
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

        {/* Floating AI card */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -left-6 sm:-left-12 bottom-16 glass-strong rounded-2xl p-4 shadow-elegant w-60 hidden sm:block"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
            <Brain className="h-3.5 w-3.5 text-brand" /> EU VISA COMPLIANCE
          </div>
          {[
            { label: "EU Degree equivalence", v: 100 },
            { label: "Language certification", v: 95 },
            { label: "Visa priority score", v: 98 },
          ].map((row) => (
            <div key={row.label} className="mb-2 last:mb-0">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{row.label}</span>
                <span className="font-semibold">{row.v}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.v}%` }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="h-full bg-[image:var(--gradient-brand)]"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating offer card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-4 sm:-right-10 top-12 glass-strong rounded-2xl p-3.5 shadow-elegant w-56 hidden sm:block"
        >
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-success/15 grid place-items-center">
              <CheckCircle2 className="h-4 w-4 text-success" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-sm">EU Visa Approved</div>
              <div className="text-muted-foreground">Relocating to Amsterdam 🇳🇱</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">How it works</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
              Simplifying the relocation journey.
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            A secure, end-to-end recruitment process designed to guide you step-by-step from your first video pitch to your EU visa stamp.
          </p>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl p-7 bg-card border border-border shadow-soft"
            >
              <div className="font-display text-5xl text-gradient-brand leading-none">0{i + 1}</div>
              <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-9 h-5 w-5 text-muted-foreground/40" />
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Countries() {
  return (
    <section id="countries" className="py-20 md:py-28">
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

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 bg-card border border-border hover:border-foreground/20 hover:shadow-elegant transition-all cursor-pointer"
            >
              <div className="text-4xl">{c.flag}</div>
              <div className="mt-4 font-semibold">{c.name}</div>
              <div className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" /> {c.jobs} open roles
              </div>
              <ArrowRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Success Stories</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
            Relocation stories that inspire.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-7 bg-card border border-border shadow-soft flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug tracking-tight flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center text-sm font-semibold text-white"
                  style={{ background: `oklch(0.6 0.18 ${180 + i * 50})` }}
                >
                  {t.avatar}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
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
                <Link to="/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-background/30 text-background hover:bg-background/10 transition">
                  Hire global talent for EU
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: Users, label: "Free for candidates, always" },
                { icon: Building2, label: "European compliance verification" },
                { icon: TrendingUp, label: "Guided relocation assistance" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 glass-strong rounded-xl p-4 text-background">
                  <div className="h-9 w-9 rounded-lg bg-background/15 grid place-items-center">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
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
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-[image:var(--gradient-brand)] grid place-items-center">
            <Sparkles className="h-3.5 w-3.5 text-brand-foreground" />
          </div>
          <span className="font-display text-lg text-foreground">WorkInEurope</span>
        </div>
        <div className="flex gap-6">
          <a className="hover:text-foreground cursor-pointer">Privacy Policy</a>
          <a className="hover:text-foreground cursor-pointer">Terms of Service</a>
          <a className="hover:text-foreground cursor-pointer">Relocation Guide</a>
          <a className="hover:text-foreground cursor-pointer">Contact Support</a>
        </div>
        <div>© {new Date().getFullYear()} WorkInEurope · Your European career starts here.</div>
      </div>
    </footer>
  );
}
