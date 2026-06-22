import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/AuthShell";

export const Route = createFileRoute("/candidates/signin")({
  head: () => ({
    meta: [
      { title: "Candidate sign in · WorkInEurope" },
      { name: "description", content: "Sign in to your candidate account on WorkInEurope." },
    ],
  }),
  component: CandidateSignin,
});

function CandidateSignin() {
  const [loading, setLoading] = useState(false);

  return (
    <AuthShell
      side="candidate"
      title="Welcome back"
      subtitle={
        <>
          Sign in to your candidate account.{" "}
          <Link to="/signin" className="underline underline-offset-4 text-foreground">
            Hiring? Sign in as a company
          </Link>
        </>
      }
      footer={
        <>
          New to WorkInEurope?{" "}
          <Link to="/candidates/signup" className="font-medium text-foreground underline underline-offset-4">
            Create an account
          </Link>
        </>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            window.location.href = "/candidates/dashboard";
          }, 600);
        }}
        className="space-y-4"
      >
        <Field label="Email"><Input required type="email" placeholder="you@email.com" /></Field>
        <Field label="Password"><Input required type="password" placeholder="••••••••" /></Field>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" /> Remember me
          </label>
          <a className="text-foreground underline underline-offset-4">Forgot password?</a>
        </div>

        <PrimaryButton disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </PrimaryButton>
      </form>
    </AuthShell>
  );
}
