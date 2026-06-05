import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Globe2,
  PlayCircle,
  ShieldCheck,
  Video,
  Brain,
  Briefcase,
  Languages,
  CheckCircle2,
  Star,
  Users,
  Building2,
  TrendingUp,
  Zap,
  MapPin,
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
  { flag: "🇦🇪", name: "UAE", jobs: "12.4k" },
  { flag: "🇩🇪", name: "Germany", jobs: "9.8k" },
  { flag: "🇨🇦", name: "Canada", jobs: "8.2k" },
  { flag: "🇸🇦", name: "Saudi Arabia", jobs: "7.6k" },
  { flag: "🇸🇬", name: "Singapore", jobs: "5.9k" },
  { flag: "🇦🇺", name: "Australia", jobs: "5.1k" },
  { flag: "🇬🇧", name: "United Kingdom", jobs: "4.8k" },
  { flag: "🇯🇵", name: "Japan", jobs: "3.4k" },
];

const categories = [
  { icon: "🏗️", name: "Construction", count: "8,420" },
  { icon: "🏥", name: "Healthcare", count: "6,310" },
  { icon: "💻", name: "Tech & Software", count: "12,840" },
  { icon: "🍳", name: "Hospitality", count: "5,920" },
  { icon: "🚚", name: "Logistics", count: "4,180" },
  { icon: "🧑‍🏭", name: "Manufacturing", count: "7,640" },
  { icon: "🎓", name: "Education", count: "3,210" },
  { icon: "💼", name: "Finance", count: "4,950" },
];

const features = [
  {
    icon: Video,
    title: "Video-first portfolios",
    body: "Candidates introduce themselves, demonstrate skills, and prove craft on camera — verified for authenticity.",
  },
  {
    icon: Brain,
    title: "AI matching engine",
    body: "Goes beyond keywords. Matches based on real skills, language fluency, work culture, and visa eligibility.",
  },
  {
    icon: ShieldCheck,
    title: "Verified trust score",
    body: "Identity, employment, certifications and skills — all verified. Every profile carries a trust score.",
  },
  {
    icon: Globe2,
    title: "Global compliance",
    body: "Country-specific hiring rules, visa sponsorship signals and built-in relocation support.",
  },
  {
    icon: Languages,
    title: "Multi-language fluency",
    body: "Auto-subtitled video resumes in 40+ languages so language never blocks great talent.",
  },
  {
    icon: Zap,
    title: "Hire in days, not months",
    body: "Shortlist, interview, and offer inside one workspace. Cut time-to-hire by up to 71%.",
  },
];

const stats = [
  { value: "2.4M+", label: "Verified candidates" },
  { value: "48k", label: "Active employers" },
  { value: "147", label: "Countries served" },
  { value: "71%", label: "Faster time-to-hire" },
];

const steps = [
  { title: "Build a video profile", body: "AI guides candidates through resume, skills, and a 60-second video pitch." },
  { title: "Get matched globally", body: "Our engine scores fit across role, visa, language, and culture." },
  { title: "Interview on platform", body: "Async video screens and live interviews — recorded and transcribed." },
  { title: "Hire & relocate", body: "Offer letters, contracts, visa support and onboarding in one flow." },
];

const testimonials = [
  {
    quote:
      "We hired 14 nurses from 6 countries in under a month. The verified video profiles cut our screening time by 80%.",
    name: "Aisha Rahman",
    role: "Head of Talent · Mercy Health Group",
    avatar: "AR",
  },
  {
    quote:
      "TalentBridge AI feels like the LinkedIn of global hiring — but faster, smarter, and actually built for cross-border work.",
    name: "Marcus Hollander",
    role: "CTO · Berlin Robotics",
    avatar: "MH",
  },
  {
    quote:
      "I got hired in Dubai from a small town in the Philippines. The video resume changed everything.",
    name: "Joana Reyes",
    role: "Hospitality Specialist",
    avatar: "JR",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <HowItWorks />
      <Countries />
      <Categories />
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
          <span className="font-display text-xl tracking-tight">TalentBridge<span className="text-muted-foreground"> AI</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/jobs" className="hover:text-foreground transition-colors">Jobs</Link>
          <a href="#features" className="hover:text-foreground transition-colors">Platform</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#countries" className="hover:text-foreground transition-colors">Countries</a>
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
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
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
              Now matching talent across 147 countries
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
            >
              Hire the world's <em className="not-italic text-gradient-brand">best talent</em>, on video.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              TalentBridge AI connects international employers with verified, video-first candidates.
              From nurses in Manila to engineers in Lagos — discover, vet, and hire in days.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/signup" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium shadow-elegant hover:shadow-glow transition-all">
                I'm hiring talent
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/candidates/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong font-medium hover:bg-accent transition-colors">
                <PlayCircle className="h-4 w-4" />
                I'm looking for work
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {["EM", "JK", "AR", "MH"].map((i, idx) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full ring-2 ring-background grid place-items-center text-xs font-semibold"
                    style={{
                      background: `oklch(0.7 0.15 ${200 + idx * 30})`,
                      color: "white",
                    }}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                  ))}
                  <span className="ml-1 font-semibold text-foreground">4.9</span>
                </div>
                <p className="text-xs">from 12,400+ hiring teams</p>
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
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE
            </div>
            <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-xs font-semibold">
              <ShieldCheck className="h-3 w-3 text-success" /> Verified
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-xs opacity-80">Video resume · 0:48</div>
              <div className="font-semibold text-lg">Priya N. — RN, Manila 🇵🇭</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <div>
              <div className="font-semibold">Senior Registered Nurse</div>
              <div className="text-muted-foreground text-xs flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3" /> Open to Dubai, Riyadh, Berlin
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Match</div>
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
            <Brain className="h-3.5 w-3.5 text-brand" /> AI MATCH BREAKDOWN
          </div>
          {[
            { label: "Clinical skills", v: 96 },
            { label: "English fluency", v: 92 },
            { label: "Visa eligibility", v: 100 },
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
              <div className="font-semibold text-sm">Offer accepted</div>
              <div className="text-muted-foreground">Hired in 8 days · 🇦🇪</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Marquee() {
  const logos = ["Mercy Health", "Berlin Robotics", "Atlas Logistics", "Nordic Build", "Sunrise Hotels", "GreenGrid Energy", "Cobalt Tech", "Maple Care"];
  return (
    <section className="border-y border-border/60 py-8 overflow-hidden">
      <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Trusted by hiring teams worldwide
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="font-display text-2xl text-muted-foreground/70">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-border/60 shadow-soft">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 lg:p-10"
            >
              <div className="font-display text-5xl lg:text-6xl tracking-tight text-gradient-brand">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Platform</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
            Everything you need to hire <em className="not-italic text-gradient-brand">across borders</em>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A complete recruitment OS built for international hiring — verified profiles, AI matching, video screening, and global compliance in one place.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-2xl p-7 bg-card border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              <div className="h-11 w-11 rounded-xl bg-[image:var(--gradient-brand)] grid place-items-center shadow-glow">
                <f.icon className="h-5 w-5 text-brand-foreground" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">How it works</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
              From profile to passport stamp.
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            A guided journey for candidates and employers — designed to remove every friction point in cross-border hiring.
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
    <section id="countries" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Global reach</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
            Hiring lanes that <em className="not-italic text-gradient-brand">actually work</em>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Verified visa pathways, salary benchmarks and compliance built in for every corridor we open.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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

function Categories() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Categories</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
              From bedside to backend.
            </h2>
          </div>
          <a className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Browse all roles <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="text-left rounded-2xl p-5 bg-card border border-border hover:bg-accent transition-colors"
            >
              <div className="text-2xl">{cat.icon}</div>
              <div className="mt-3 font-semibold">{cat.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{cat.count} candidates</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Stories</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
            Lives changed, teams transformed.
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
    <section className="py-24 md:py-32">
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
                The future of global hiring is here.
              </h2>
              <p className="mt-4 text-background/70 text-lg max-w-lg">
                Join 2.4 million candidates and 48,000 employers building careers and companies without borders.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-background text-foreground font-medium hover:opacity-90 transition">
                  Start hiring <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/candidates/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-background/30 text-background hover:bg-background/10 transition">
                  Create candidate profile
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: Users, label: "Free for candidates, always" },
                { icon: Building2, label: "Employers from day 1" },
                { icon: TrendingUp, label: "Cancel anytime" },
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
          <span className="font-display text-lg text-foreground">TalentBridge AI</span>
        </div>
        <div className="flex gap-6">
          <a className="hover:text-foreground">Privacy</a>
          <a className="hover:text-foreground">Terms</a>
          <a className="hover:text-foreground">Trust</a>
          <a className="hover:text-foreground">Press</a>
        </div>
        <div>© {new Date().getFullYear()} TalentBridge AI · Hiring without borders</div>
      </div>
    </footer>
  );
}
