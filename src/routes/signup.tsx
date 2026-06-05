import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/AuthShell";
import { Building2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your company account · TalentBridge AI" },
      { name: "description", content: "Hire verified, video-first talent from 147 countries. Free company account, unlimited job postings." },
    ],
  }),
  component: EmployerSignup,
});

function EmployerSignup() {
  const [loading, setLoading] = useState(false);

  return (
    <AuthShell
      side="employer"
      title="Create your company account"
      subtitle="Free forever. Unlimited job postings, unlimited candidate search."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-foreground underline underline-offset-4">
            Sign in
          </Link>
        </>
      }
    >
      <div className="grid grid-cols-3 gap-2 mb-5">
        {["Unlimited jobs", "AI matching", "Video screening"].map((p) => (
          <div key={p} className="flex items-center gap-1.5 text-xs px-2.5 py-2 rounded-lg bg-secondary">
            <CheckCircle2 className="h-3 w-3 text-success shrink-0" />
            <span className="truncate">{p}</span>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => setLoading(false), 800);
        }}
        className="space-y-4"
      >
        <Field label="Company name">
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input required placeholder="Acme Health Group" className="pl-10" />
          </div>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Your name"><Input required placeholder="Marcus" /></Field>
          <Field label="Role"><Input required placeholder="Head of Talent" /></Field>
        </div>
        <Field label="Work email"><Input required type="email" placeholder="you@company.com" /></Field>
        <Field label="Country">
          <select className="w-full px-4 py-3 rounded-xl bg-card border border-border outline-none focus:border-foreground/30">
            <option>Select country</option>
            <option>🇦🇪 UAE</option>
            <option>🇩🇪 Germany</option>
            <option>🇨🇦 Canada</option>
            <option>🇸🇦 Saudi Arabia</option>
            <option>🇬🇧 United Kingdom</option>
            <option>🇸🇬 Singapore</option>
          </select>
        </Field>
        <Field label="Password" hint="8 characters minimum">
          <Input required type="password" minLength={8} placeholder="••••••••" />
        </Field>

        <PrimaryButton disabled={loading}>
          {loading ? "Creating workspace…" : "Create company workspace"}
        </PrimaryButton>

        <p className="text-xs text-muted-foreground text-center">
          Looking for work?{" "}
          <Link to="/candidates/signup" className="underline text-foreground">Create a candidate account</Link>
        </p>
      </form>
    </AuthShell>
  );
}
