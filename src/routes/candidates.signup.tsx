import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/AuthShell";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/candidates/signup")({
  head: () => ({
    meta: [
      { title: "Create your candidate account · TalentBridge AI" },
      { name: "description", content: "Join 2.4M+ verified candidates. Build a video resume and apply to global jobs in minutes." },
    ],
  }),
  component: CandidateSignup,
});

function CandidateSignup() {
  const [loading, setLoading] = useState(false);

  return (
    <AuthShell
      side="candidate"
      title="Create your account"
      subtitle="Start your global career journey in under 2 minutes."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/candidates/signin" className="font-medium text-foreground underline underline-offset-4">
            Sign in
          </Link>
        </>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => setLoading(false), 800);
        }}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-3">
          <Field label="First name"><Input required placeholder="Priya" /></Field>
          <Field label="Last name"><Input required placeholder="Nadkarni" /></Field>
        </div>
        <Field label="Email"><Input required type="email" placeholder="you@email.com" /></Field>
        <Field label="Country / Nationality">
          <select className="w-full px-4 py-3 rounded-xl bg-card border border-border outline-none focus:border-foreground/30">
            <option>Select your country</option>
            <option>🇮🇳 India</option>
            <option>🇵🇭 Philippines</option>
            <option>🇵🇰 Pakistan</option>
            <option>🇳🇬 Nigeria</option>
            <option>🇷🇴 Romania</option>
            <option>🇧🇩 Bangladesh</option>
            <option>🇪🇬 Egypt</option>
          </select>
        </Field>
        <Field label="Password" hint="8 characters minimum">
          <Input required type="password" minLength={8} placeholder="••••••••" />
        </Field>
        <Field label="Confirm password"><Input required type="password" placeholder="••••••••" /></Field>

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-1" defaultChecked />
          <span>Send me job alerts and platform updates. No spam.</span>
        </label>

        <PrimaryButton disabled={loading}>
          {loading ? "Creating account…" : "Create my account"}
        </PrimaryButton>

        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          128-bit encrypted. Your details stay private.
        </div>

        <p className="text-xs text-muted-foreground text-center">
          By creating an account you agree to our{" "}
          <a className="underline">Terms</a> and <a className="underline">Privacy Policy</a>.
        </p>
      </form>
    </AuthShell>
  );
}
