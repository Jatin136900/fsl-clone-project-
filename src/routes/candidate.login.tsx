import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AuthShell, Field, Input, PasswordInput, PrimaryButton } from "@/components/AuthShell";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/candidate/login")({
  head: () => ({
    meta: [
      { title: "Candidate Sign In · WorkInEurope" },
      { name: "description", content: "Sign in to your candidate account on WorkInEurope." },
    ],
  }),
  component: CandidateLogin,
});

function CandidateLogin() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user && user.role === "candidate") {
      navigate({ to: "/candidates/dashboard" });
    }
  }, [user, navigate]);

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
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    // Simulate login request
    setTimeout(() => {
      setLoading(false);
      setSuccess("Successfully logged in!");
      
      // Call authentication login
      login("candidate", "Priya Nadkarni", email, {
        skills: "React, Node.js, TypeScript",
        experienceLevel: "Senior",
        currentCountry: "India",
        preferredCountry: "Ireland",
        preferredCity: "Dublin",
      });

      // Redirect to candidate dashboard
      setTimeout(() => {
        navigate({ to: "/candidates/dashboard" });
      }, 500);
    }, 1000);
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your candidate account."
      footer={
        <>
          New to WorkInEurope?{" "}
          <Link to="/candidate/register" className="font-medium text-foreground underline underline-offset-4">
            Create an account
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

        <Field label="Password">
          <PasswordInput
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </Field>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground cursor-pointer select-none">
            <input type="checkbox" className="rounded border-border text-foreground focus:ring-foreground/5" /> Remember me
          </label>
          <a className="text-foreground underline underline-offset-4 cursor-pointer hover:opacity-85 transition-opacity">
            Forgot password?
          </a>
        </div>

        <PrimaryButton disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              Signing in…
            </span>
          ) : (
            "Sign in"
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
