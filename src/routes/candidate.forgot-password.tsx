import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/AuthShell";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/candidate/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset Candidate Password · WorkInEurope" },
      { name: "description", content: "Reset your candidate password on WorkInEurope." },
    ],
  }),
  component: CandidateForgotPassword,
});

function CandidateForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulate reset request
    setTimeout(() => {
      setLoading(false);
      setSuccess("Reset link sent! If this email is registered, you will receive instructions shortly.");
      setEmail("");
    }, 1000);
  };

  return (
    <AuthShell
      title="Reset password"
      subtitle="Enter your email to receive a password reset link."
      footer={
        <>
          <Link to="/candidate/login" className="font-medium text-foreground underline underline-offset-4">
            Back to sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3.5 rounded-xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 animate-in fade-in duration-200">
            {error}
          </div>
        )}
        {success && (
          <div className="p-3.5 rounded-xl bg-success/10 text-success text-sm font-medium border border-success/20 animate-in fade-in duration-200">
            {success}
          </div>
        )}

        <Field label="Email">
          <Input
            required
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </Field>

        <PrimaryButton disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              Sending reset link…
            </span>
          ) : (
            "Send Reset Link"
          )}
        </PrimaryButton>

        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-2">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Secure, encrypted authentication.
        </div>
      </form>
    </AuthShell>
  );
}
