import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AuthShell, F as Field, I as Input, P as PrimaryButton } from "./AuthShell-B5HHDpC7.mjs";
import { C as CircleCheck, B as Building2 } from "../_libs/lucide-react.mjs";
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
function EmployerSignup() {
  const [loading, setLoading] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthShell, { side: "employer", title: "Create your company account", subtitle: "Free forever. Unlimited job postings, unlimited candidate search.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Already have an account?",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signin", className: "font-medium text-foreground underline underline-offset-4", children: "Sign in" })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: ["Unlimited jobs", "AI matching", "Video screening"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs px-2.5 py-2 rounded-lg bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 text-success shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: p })
    ] }, p)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => setLoading(false), 800);
    }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company name", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Acme Health Group", className: "pl-10" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Marcus" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Role", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Head of Talent" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "email", placeholder: "you@company.com" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full px-4 py-3 rounded-xl bg-card border border-border outline-none focus:border-foreground/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Select country" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇩🇪 Germany" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇳🇱 Netherlands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇮🇪 Ireland" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇫🇷 France" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇪🇸 Spain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇸🇪 Sweden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇦🇹 Austria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "🇵🇱 Poland" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", hint: "8 characters minimum", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "password", minLength: 8, placeholder: "••••••••" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { disabled: loading, children: loading ? "Creating workspace…" : "Create company workspace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
        "Looking for work?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/signup", className: "underline text-foreground", children: "Create a candidate account" })
      ] })
    ] })
  ] });
}
export {
  EmployerSignup as component
};
