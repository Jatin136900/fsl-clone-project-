import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AuthShell, F as Field, I as Input, P as PrimaryButton } from "./AuthShell-B5HHDpC7.mjs";
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
import "../_libs/lucide-react.mjs";
function EmployerSignin() {
  const [loading, setLoading] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthShell, { side: "employer", title: "Sign in to your workspace", subtitle: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Company account.",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/candidates/signin", className: "underline underline-offset-4 text-foreground", children: "Looking for work? Sign in as a candidate" })
  ] }), footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "New here?",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "font-medium text-foreground underline underline-offset-4", children: "Create a company account" })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/employers/dashboard";
    }, 600);
  }, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "email", placeholder: "you@company.com" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "password", placeholder: "••••••••" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox" }),
        " Remember me"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-foreground underline underline-offset-4", children: "Forgot password?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { disabled: loading, children: loading ? "Signing in…" : "Enter workspace" })
  ] }) });
}
export {
  EmployerSignin as component
};
