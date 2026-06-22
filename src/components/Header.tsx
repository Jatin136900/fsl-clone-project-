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
  Plane,
  UserCheck,
  Video,
  FileCheck,
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
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-strong border-x-0 border-t-0 border-b border-border/15 shadow-soft">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 py-3.5 md:py-4">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center">
              <Sparkles className="h-4 w-4 text-brand-foreground" />
            </div>
            <span className="font-display text-xl tracking-tight">WorkIn<span className="text-muted-foreground">Europe</span></span>
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
          <Link to="/candidates/signin" className="hidden sm:inline-flex items-center justify-center text-sm font-semibold h-11 px-5 rounded-lg hover:bg-accent transition-colors">Sign in</Link>
          <Link to="/candidates/signup" className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold h-11 px-6 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity">
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
              WorkInEurope connects skilled professionals with verified European employers. Find visa-sponsored jobs and start your relocation journey with confidence.
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

function GlobalCareerJourney() {
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

  return (
    <section className="relative py-24 overflow-hidden bg-background">
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

        <div className="relative">
          {/* Timeline connection line for desktop */}
          <div className="absolute top-[32px] left-[10%] right-[10%] h-0.5 bg-border/40 hidden md:block" />

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col items-center md:items-start text-center md:text-left relative"
                >
                  {/* Node circle */}
                  <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl glass-strong shadow-soft border border-border group-hover:border-brand/40 group-hover:shadow-glow transition-all duration-300 mb-6 bg-card">
                    <Icon className="h-6 w-6 text-brand" />
                    <span className="absolute -top-2 -right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[image:var(--gradient-brand)] text-brand-foreground shadow-soft">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg group-hover:text-brand transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed max-w-xs md:max-w-none">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesMap() {
  const markers = [
    { city: "Berlin, DE", lat: "45%", lon: "52%", relocations: "1,240+ hires" },
    { city: "Amsterdam, NL", lat: "41%", lon: "47%", relocations: "980+ hires" },
    { city: "Dublin, IE", lat: "36%", lon: "38%", relocations: "740+ hires" },
    { city: "Paris, FR", lat: "48%", lon: "45%", relocations: "850+ hires" },
    { city: "Warsaw, PL", lat: "43%", lon: "58%", relocations: "520+ hires" },
  ];

  const stats = [
    { value: "8,400+", label: "Candidates Relocated" },
    { value: "1,600+", label: "Verified Employers" },
    { value: "96.4%", label: "Visa Success Rate" },
    { value: "14 Days", label: "Avg. Relocation Time" },
  ];

  return (
    <section className="relative py-24 overflow-hidden text-white">
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

            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="font-display text-3xl md:text-4xl font-semibold text-brand-glow">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Map Mockup */}
          <div className="relative h-[350px] sm:h-[450px] w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-elegant">
            {/* World/Europe Map SVG Background */}
            <svg
              viewBox="0 0 1000 600"
              className="absolute inset-0 h-full w-full opacity-20 text-white fill-current"
            >
              {/* Simplified outline of Europe/World map */}
              <path d="M150,150 Q180,120 220,160 T300,140 T380,200 T420,180 T500,260 T600,200 T700,240 T800,180 T900,220 L950,500 L50,500 Z" />
              <path d="M250,220 Q280,180 320,240 T400,200 T480,280 T520,250 T600,320 T700,260 T800,300 T900,240 L900,450 L100,450 Z" />
            </svg>

            {/* Animated Map Pins */}
            {markers.map((marker, i) => (
              <div
                key={marker.city}
                className="absolute group cursor-pointer"
                style={{ top: marker.lat, left: marker.lon }}
              >
                <div className="relative">
                  {/* Ring animation */}
                  <span className="absolute -inset-2.5 rounded-full bg-brand-glow/40 animate-pulse-ring" />
                  {/* Core pin */}
                  <div className="h-3 w-3 rounded-full bg-brand-glow border-2 border-white shadow-soft relative z-10" />
                </div>

                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 scale-0 group-hover:scale-100 transition-all origin-bottom bg-foreground text-background text-[10px] rounded-lg p-2 shadow-elegant z-20 pointer-events-none text-center">
                  <div className="font-semibold">{marker.city}</div>
                  <div className="text-[9px] opacity-80 mt-0.5">{marker.relocations}</div>
                </div>
              </div>
            ))}

            {/* Decorative Compass / Grid lines */}
            <div className="absolute right-6 bottom-6 flex items-center gap-2 text-white/40 text-[10px]">
              <Globe2 className="h-4 w-4 animate-pulse" />
              <span>ACTIVE CHANNELS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
