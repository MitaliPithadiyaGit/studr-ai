import {
  Layout
} from "/build/_shared/chunk-RLMXWHHF.js";
import "/build/_shared/chunk-6W4A6LHK.js";
import {
  FileText
} from "/build/_shared/chunk-UE3OXSCW.js";
import "/build/_shared/chunk-XJ2E5TH5.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  useParams
} from "/build/_shared/chunk-A7JXTRIT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-JSRQUTTN.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/library-viewer.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\library-viewer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\library-viewer.tsx"
  );
  import.meta.hot.lastModified = "1733136384530.9407";
}
function LibraryViewer({
  item
}) {
  _s();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [item]);
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-[calc(100vh-3.5rem)] items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border bg-card p-8 text-center shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-spin text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-8 w-8" }, void 0, false, {
        fileName: "app/components/library-viewer.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/library-viewer.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 font-medium", children: "Loading document..." }, void 0, false, {
        fileName: "app/components/library-viewer.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1.5 text-sm text-muted-foreground", children: "Please wait while we prepare your content" }, void 0, false, {
        fileName: "app/components/library-viewer.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/library-viewer.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/library-viewer.tsx",
      lineNumber: 37,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-3xl rounded-lg border bg-card p-8 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-sm sm:prose-base dark:prose-invert", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
    __html: item.content
  } }, void 0, false, {
    fileName: "app/components/library-viewer.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/library-viewer.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/library-viewer.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(LibraryViewer, "J7PPXooW06IQ11rfabbvgk72KFw=");
_c = LibraryViewer;
var _c;
$RefreshReg$(_c, "LibraryViewer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/library.$id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\library.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\library.$id.tsx"
  );
  import.meta.hot.lastModified = "1733136384547.9314";
}
function LibraryRoute() {
  _s2();
  const {
    id
  } = useParams();
  const getLibraryItem = (id2) => {
    const items = {
      "react-docs": {
        name: "React Documentation",
        type: "url",
        content: `
          <h1>React Documentation</h1>
          <p>React is a JavaScript library for building user interfaces.</p>
          <h2>Getting Started</h2>
          <p>To get started with React, you can create a new project using Create React App:</p>
          <pre><code>npx create-react-app my-app</code></pre>
          <h2>Main Concepts</h2>
          <ul>
            <li>Components</li>
            <li>Props</li>
            <li>State</li>
            <li>Lifecycle Methods</li>
          </ul>
          <p>This is a demo document showcasing how library items can be displayed.</p>
        `
      },
      "design-system": {
        name: "Design System Guidelines",
        type: "file",
        content: `
          <h1>Design System Guidelines</h1>
          <h2>Colors</h2>
          <p>Our design system uses a carefully selected color palette:</p>
          <ul>
            <li>Primary: #0066CC</li>
            <li>Secondary: #6B7280</li>
            <li>Accent: #10B981</li>
          </ul>
          <h2>Typography</h2>
          <p>We use Inter as our primary font family across all applications.</p>
          <h3>Font Sizes</h3>
          <ul>
            <li>Heading 1: 2.25rem</li>
            <li>Heading 2: 1.875rem</li>
            <li>Body: 1rem</li>
          </ul>
          <p>This is a demo document showcasing how library items can be displayed.</p>
        `
      },
      "research-paper": {
        name: "Research Paper: AI in 2024",
        type: "file",
        content: `
          <h1>The State of AI in 2024</h1>
          <p class="lead">A comprehensive overview of artificial intelligence developments.</p>
          <h2>Abstract</h2>
          <p>This paper examines the current state of artificial intelligence and its impact on various industries.</p>
          <h2>Introduction</h2>
          <p>Artificial intelligence has seen remarkable progress in recent years, with breakthroughs in:</p>
          <ul>
            <li>Large Language Models</li>
            <li>Computer Vision</li>
            <li>Robotics</li>
            <li>Healthcare Applications</li>
          </ul>
          <h2>Methodology</h2>
          <p>Our research methodology included analyzing data from multiple sources and conducting interviews with industry experts.</p>
          <p>This is a demo document showcasing how library items can be displayed.</p>
        `
      }
    };
    return items[id2] || {
      name: "Unknown Item",
      type: "file",
      content: "<h1>Document Not Found</h1><p>The requested document could not be found in the library.</p>"
    };
  };
  const item = getLibraryItem(id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { minimal: true, title: item.name, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LibraryViewer, { item }, void 0, false, {
    fileName: "app/routes/library.$id.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/library.$id.tsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}
_s2(LibraryRoute, "yQgCIz/jJfqV1l9s2yoba81MT5A=", false, function() {
  return [useParams];
});
_c2 = LibraryRoute;
var _c2;
$RefreshReg$(_c2, "LibraryRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LibraryRoute as default
};
//# sourceMappingURL=/build/routes/library.$id-NNI4NQJF.js.map
