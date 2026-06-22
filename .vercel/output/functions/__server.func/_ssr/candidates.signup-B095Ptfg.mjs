import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AuthShell, F as Field, I as Input, P as PrimaryButton } from "./AuthShell-B5HHDpC7.mjs";
import { e as ShieldCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function CandidateSignup() {
  const [loading, setLoading] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthShell, { side: "candidate", title: "Create your account", subtitle: "Start your global career journey in under 2 minutes.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Already have an account?",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/signin", className: "font-medium text-foreground underline underline-offset-4", children: "Sign in" })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Priya" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Nadkarni" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "email", placeholder: "you@email.com" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country / Nationality", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full px-4 py-3 rounded-xl bg-card border border-border outline-none focus:border-foreground/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Select your country" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇮🇳 India" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇵🇭 Philippines" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇵🇰 Pakistan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇳🇬 Nigeria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇷🇴 Romania" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇧🇩 Bangladesh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇪🇬 Egypt" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", hint: "8 characters minimum", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "password", minLength: 8, placeholder: "••••••••" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Confirm password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "password", placeholder: "••••••••" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "mt-1", defaultChecked: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send me job alerts and platform updates. No spam." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { disabled: loading, children: loading ? "Creating account…" : "Create my account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-success" }),
      "128-bit encrypted. Your details stay private."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
      "By creating an account you agree to our",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "underline", children: "Terms" }),
      " and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "underline", children: "Privacy Policy" }),
      "."
    ] })
  ] }) });
}
export {
  CandidateSignup as component
};
