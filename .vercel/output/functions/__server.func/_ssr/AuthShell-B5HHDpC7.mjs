import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Sparkles, l as ArrowLeft } from "../_libs/lucide-react.mjs";
function AuthShell({
  title,
  subtitle,
  children,
  footer,
  side
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh grid lg:grid-cols-2 bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden lg:block overflow-hidden bg-foreground text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.06]",
          style: {
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col p-12 justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl", children: "WorkInEurope" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-background/60 mb-4", children: side === "employer" ? "For EU employers" : "For candidates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl leading-[1.05] tracking-tight", children: side === "employer" ? "Hire verified global talent for EU roles." : "Your European career is one video away." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-background/70 leading-relaxed", children: side === "employer" ? "Post unlimited jobs, search millions of video-verified candidates, and run your European hiring pipeline in one place." : "Build a video resume in minutes. Apply to thousands of European jobs with visa sponsorship — and get matched by AI." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 text-sm text-background/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-background", children: "2.4M+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Candidates" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-background", children: "48k" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "EU Employers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-background", children: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "EU Target Countries" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              " Back to home"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "lg:hidden inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-md bg-[image:var(--gradient-brand)] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-brand-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display", children: "WorkInEurope" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid place-items-center px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl tracking-tight leading-tight", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children }),
        footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-sm text-muted-foreground", children: footer })
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  children,
  hint
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5", children: label }),
    children,
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: hint })
  ] });
}
function Input(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ...props,
      className: "w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 outline-none transition " + (props.className ?? "")
    }
  );
}
function PrimaryButton({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ...props,
      className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium shadow-elegant hover:shadow-glow transition-all disabled:opacity-50 " + (props.className ?? ""),
      children
    }
  );
}
export {
  AuthShell as A,
  Field as F,
  Input as I,
  PrimaryButton as P
};
