import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/AuthShell";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Company sign in · WorkInEurope" },
      { name: "description", content: "Sign in to your company workspace on WorkInEurope." },
    ],
  }),
  component: EmployerSignin,
});

function EmployerSignin() {
  const [loading, setLoading] = useState(false);

  return (
    <AuthShell
      side="employer"
      title="Sign in to your workspace"
      subtitle={
        <>
          Company account.{" "}
          <Link to="/candidates/signin" className="underline underline-offset-4 text-foreground">
            Looking for work? Sign in as a candidate
          </Link>
        </>
      }
      footer={
        <>
          New here?{" "}
          <Link to="/signup" className="font-medium text-foreground underline underline-offset-4">
            Create a company account
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
            window.location.href = "/employers/dashboard";
          }, 600);
        }}
        className="space-y-4"
      >
        <Field label="Work email"><Input required type="email" placeholder="you@company.com" /></Field>
        <Field label="Password"><Input required type="password" placeholder="••••••••" /></Field>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" /> Remember me
          </label>
          <a className="text-foreground underline underline-offset-4">Forgot password?</a>
        </div>
        <PrimaryButton disabled={loading}>{loading ? "Signing in…" : "Enter workspace"}</PrimaryButton>
      </form>
    </AuthShell>
  );
}
