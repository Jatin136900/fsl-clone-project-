import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import React, { useState, type ReactNode } from "react";
import logo from "@/Images/logo.png";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
  side,
  wide,
}: {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  side?: "candidate" | "employer";
  wide?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Detect active tab and action
  const isCandidate = pathname.includes("/candidate") || (!pathname.includes("/company") && side !== "employer");
  const isCompany = pathname.includes("/company") || (!pathname.includes("/candidate") && side === "employer");
  const isRegister = pathname.includes("/register") || pathname.includes("/signup");
  const isForgotPassword = pathname.includes("forgot-password");

  const currentAction = isForgotPassword ? "forgot-password" : isRegister ? "register" : "login";

  const candidatePath = `/candidate/${currentAction}`;
  const companyPath = `/company/${currentAction}`;

  return (
    <div className="min-h-dvh grid lg:grid-cols-2 bg-background overflow-x-hidden">
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
          <Link to="/" className="inline-flex items-center gap-4 w-fit">
            <img src={logo} alt="WorkInEurope" className="h-20 w-20 rounded-2xl object-contain bg-white/10 p-2" />
            <span className="font-display text-3xl font-bold tracking-tight">WorkInEurope</span>
          </Link>
          <div className="max-w-md">
            <div className="text-xs uppercase tracking-[0.25em] text-background/60 mb-4">
              {isCompany ? "For EU employers" : "For candidates"}
            </div>
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight">
              {isCompany
                ? "Hire verified global talent for EU roles."
                : "Your European career is one video away."}
            </h2>
            <p className="mt-5 text-background/70 leading-relaxed">
              {isCompany
                ? "Post unlimited jobs, search millions of video-verified candidates, and run your European hiring pipeline in one place."
                : "Build a video resume in minutes. Apply to thousands of European jobs with visa sponsorship — and get matched by AI."}
            </p>
          </div>
          <div className="flex gap-6 text-sm text-background/60">
            <div>
              <div className="font-display text-3xl text-background">2.4M+</div>
              <div>Candidates</div>
            </div>
            <div>
              <div className="font-display text-3xl text-background">48k</div>
              <div>EU Employers</div>
            </div>
            <div>
              <div className="font-display text-3xl text-background">8</div>
              <div>EU Target Countries</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col min-h-dvh lg:min-h-0 overflow-y-auto">
        <div className="flex items-center justify-between shrink-0 p-4 sm:p-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Back to home
          </Link>
          <Link to="/" className="lg:hidden inline-flex items-center gap-2.5">
            <img src={logo} alt="WorkInEurope" className="h-14 w-14 rounded-xl object-contain bg-card border border-border/10 p-1" />
            <span className="font-display text-xl font-bold tracking-tight">WorkInEurope</span>
          </Link>
        </div>
        <div
          className={`flex-1 flex justify-center px-4 pb-8 sm:px-6 sm:pb-10 ${
            wide ? "items-start pt-2 sm:pt-4" : "items-center py-8 sm:py-10"
          }`}
        >
          <div className={`w-full min-w-0 ${wide ? "max-w-2xl" : "max-w-md"}`}>
            {/* Tabs */}
            <div className="flex rounded-xl bg-secondary/50 p-1 sm:p-1.5 mb-6 sm:mb-8 border border-border/20">
              <Link
                to={candidatePath}
                className={`flex-1 text-center py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all select-none
                  ${isCandidate
                    ? "bg-card text-foreground shadow-elegant border border-border/10"
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                Candidate
              </Link>
              <Link
                to={companyPath}
                className={`flex-1 text-center py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all select-none
                  ${isCompany
                    ? "bg-card text-foreground shadow-elegant border border-border/10"
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                Company
              </Link>
            </div>

            <h1
              className={`font-display tracking-tight leading-tight ${
                wide ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-4xl"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{subtitle}</p>
            )}
            <div className="mt-6 sm:mt-8">{children}</div>
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

export function PasswordInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={show ? "text" : "password"}
        className={
          "w-full pl-4 pr-10 py-3 rounded-xl bg-card border border-border focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 outline-none transition " +
          (props.className ?? "")
        }
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
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
