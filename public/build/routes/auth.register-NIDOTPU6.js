import {
  require_dist
} from "/build/_shared/chunk-6YFM57I6.js";
import "/build/_shared/chunk-LFAKDRIB.js";
import {
  Button,
  Input,
  Label
} from "/build/_shared/chunk-6W4A6LHK.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import "/build/_shared/chunk-XJ2E5TH5.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Form,
  Link,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-A7JXTRIT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-JSRQUTTN.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/auth.register.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_helpers_remix = __toESM(require_dist(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.register.tsx"
  );
  import.meta.hot.lastModified = "1733294237688.0447";
}
function RegisterPage() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center min-h-screen bg-muted/40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-[350px] space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-2 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold tracking-tight", children: "Create an account" }, void 0, false, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Enter your information to get started" }, void 0, false, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "provider", value: "google" }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", className: "w-full bg-background", disabled: isSubmitting, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 mr-2", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 140,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 143,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          "Continue with Google"
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-full border-t" }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-background text-muted-foreground", children: "Or continue with" }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 154,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "name", children: "Name" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "name", name: "name", type: "text", autoComplete: "name", required: true }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "email", children: "Email" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "email", name: "email", type: "email", autoCapitalize: "none", autoComplete: "email", autoCorrect: "off", required: true }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "password", children: "Password" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "password", name: "password", type: "password", autoComplete: "new-password", required: true }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-red-500", children: actionData.error }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 176,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Creating account..." : "Create account" }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-center", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", className: "font-medium text-primary hover:underline", children: "Sign in" }, void 0, false, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 184,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 125,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_s(RegisterPage, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = RegisterPage;
var _c;
$RefreshReg$(_c, "RegisterPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RegisterPage as default
};
//# sourceMappingURL=/build/routes/auth.register-NIDOTPU6.js.map
