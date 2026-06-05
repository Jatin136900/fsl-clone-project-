import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
  side,
}: {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  side?: "candidate" | "employer";
}) {
  return (
    <div className="min-h-dvh grid lg:grid-cols-2 bg-background">
      <div className="relative hidden lg:block overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative h-full flex flex-col p-12 justify-between">
          <Link to="/" className="inline-flex items-center gap-2 w-fit">
            <div className="h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display text-xl">TalentBridge AI</span>
          </Link>
          <div className="max-w-md">
            <div className="text-xs uppercase tracking-[0.25em] text-background/60 mb-4">
              {side === "employer" ? "For employers" : "For candidates"}
            </div>
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight">
              {side === "employer"
                ? "Hire verified talent from 147 countries."
                : "Your next career is one video away."}
            </h2>
            <p className="mt-5 text-background/70 leading-relaxed">
              {side === "employer"
                ? "Post unlimited jobs, search millions of video-verified candidates, and run your full hiring pipeline in one place."
                : "Build a video resume in minutes. Apply to thousands of global jobs with visa sponsorship — and get matched by AI."}
            </p>
          </div>
          <div className="flex gap-6 text-sm text-background/60">
            <div>
              <div className="font-display text-3xl text-background">2.4M+</div>
              <div>Verified candidates</div>
            </div>
            <div>
              <div className="font-display text-3xl text-background">48k</div>
              <div>Active employers</div>
            </div>
            <div>
              <div className="font-display text-3xl text-background">147</div>
              <div>Countries</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col">
        <div className="flex items-center justify-between p-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Link to="/" className="lg:hidden inline-flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-[image:var(--gradient-brand)] grid place-items-center">
              <Sparkles className="h-3.5 w-3.5 text-brand-foreground" />
            </div>
            <span className="font-display">TalentBridge</span>
          </Link>
        </div>
        <div className="flex-1 grid place-items-center px-6 py-10">
          <div className="w-full max-w-md">
            <h1 className="font-display text-4xl tracking-tight leading-tight">{title}</h1>
            {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
            <div className="mt-8">{children}</div>
            {footer && <div className="mt-6 text-sm text-muted-foreground">{footer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </div>
      {children}
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 outline-none transition " +
        (props.className ?? "")
      }
    />
  );
}

export function PrimaryButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium shadow-elegant hover:shadow-glow transition-all disabled:opacity-50 " +
        (props.className ?? "")
      }
    >
      {children}
    </button>
  );
}
