import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AuthShell, Field, Input, PasswordInput, PrimaryButton } from "@/components/AuthShell";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/company/login")({
  head: () => ({
    meta: [
      { title: "Company Sign In · WorkInEurope" },
      { name: "description", content: "Sign in to your company workspace on WorkInEurope." },
    ],
  }),
  component: CompanyLogin,
});

function CompanyLogin() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user && user.role === "company") {
      navigate({ to: "/employers/dashboard" });
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!email) {
      setError("Business email is required.");
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
      login("company", "Marcus Hollander", email, {
        companyName: "Berlin Robotics",
        website: "https://berlin-robotics.com",
        industry: "Technology",
        companySize: "51-200",
        country: "Germany",
        city: "Berlin",
      });

      // Redirect to employer dashboard
      setTimeout(() => {
        navigate({ to: "/employers/dashboard" });
      }, 500);
    }, 1000);
  };

  return (
    <AuthShell
      side="employer"
      title="Welcome back"
      subtitle="Sign in to continue to your company workspace."
      footer={
        <>
          New to WorkInEurope?{" "}
          <Link to="/company/register" className="font-medium text-foreground underline underline-offset-4">
            Create a company account
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

        <Field label="Work Email">
          <Input
            required
            type="email"
            placeholder="you@company.com"
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
          <Link to="/company/forgot-password" className="text-foreground underline underline-offset-4 cursor-pointer hover:opacity-85 transition-opacity">
            Forgot password?
          </Link>
        </div>

        <PrimaryButton disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              Entering workspace…
            </span>
          ) : (
            "Enter workspace"
          )}
        </PrimaryButton>

        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-2">
          <ShieldCheck className="h-3.5 w-3.5 text-success" />
          Workspace protection active.
        </div>
      </form>
    </AuthShell>
  );
}
