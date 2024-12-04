import {
  require_auth
} from "/build/_shared/chunk-2ECIRKNT.js";
import {
  Layout,
  ScrollArea,
  Separator
} from "/build/_shared/chunk-RLMXWHHF.js";
import {
  Button
} from "/build/_shared/chunk-6W4A6LHK.js";
import {
  ArrowRight,
  Clock,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Plus,
  Star
} from "/build/_shared/chunk-UE3OXSCW.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import "/build/_shared/chunk-XJ2E5TH5.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Link,
  useLoaderData
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);

// app/components/pages/home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\pages\\\\home.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\pages\\home.tsx"
  );
  import.meta.hot.lastModified = "1733136384532.9392";
}
function HomePage({
  recentDocuments,
  starredDocuments
}) {
  const quickActions = [{
    name: "New Page",
    description: "Create a blank page",
    icon: FileText,
    href: "#"
  }, {
    name: "New Folder",
    description: "Create a new folder",
    icon: FolderOpen,
    href: "#"
  }, {
    name: "New Dashboard",
    description: "Create a dashboard",
    icon: LayoutDashboard,
    href: "#"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { minimal: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Welcome back!" }, void 0, false, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-muted-foreground", children: "Here's what's been happening in your workspace." }, void 0, false, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/home.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold", children: "Quick Actions" }, void 0, false, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: quickActions.map((action) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "h-auto flex-col items-start gap-2 p-4 hover:bg-muted", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: action.href, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(action.icon, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 64,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: action.name }, void 0, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 65,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-auto h-4 w-4" }, void 0, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 63,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "line-clamp-1 text-sm text-muted-foreground", children: action.description }, void 0, false, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 68,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this) }, action.name, false, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 61,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/home.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold", children: "Recent Pages" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", size: "sm", children: [
            "View All",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 86,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { className: "h-[280px] rounded-lg border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 p-4", children: [
          recentDocuments.map((doc) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/pages/${doc.id}`, className: "block space-y-1 rounded-lg p-2 hover:bg-muted", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl", children: doc.emoji }, void 0, false, {
                fileName: "app/components/pages/home.tsx",
                lineNumber: 93,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: doc.title }, void 0, false, {
                fileName: "app/components/pages/home.tsx",
                lineNumber: 94,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 92,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: [
              "Updated ",
              new Date(doc.updated_at).toLocaleDateString()
            ] }, void 0, true, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 96,
              columnNumber: 21
            }, this)
          ] }, doc.id, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 91,
            columnNumber: 45
          }, this)),
          recentDocuments.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm text-muted-foreground", children: "No recent pages" }, void 0, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 100,
            columnNumber: 50
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold", children: "Starred Pages" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 112,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", size: "sm", children: [
            "View All",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { className: "h-[280px] rounded-lg border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 p-4", children: [
          (starredDocuments || []).map((doc) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/pages/${doc.id}`, className: "block space-y-1 rounded-lg p-2 hover:bg-muted", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl", children: doc.emoji }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 123,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: doc.title }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 124,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 122,
            columnNumber: 21
          }, this) }, doc.id, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 121,
            columnNumber: 54
          }, this)),
          (starredDocuments || []).length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm text-muted-foreground", children: "No starred pages" }, void 0, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 127,
            columnNumber: 59
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full justify-start gap-2", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this),
            "Add to starred"
          ] }, void 0, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/home.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold", children: "Recent Activity" }, void 0, false, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", size: "sm", children: [
          "View All",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        recentDocuments.slice(0, 2).map((doc, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 154,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 153,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: [
                "You updated",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/pages/${doc.id}`, className: "font-medium underline-offset-4 hover:underline", children: doc.title }, void 0, false, {
                  fileName: "app/components/pages/home.tsx",
                  lineNumber: 159,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.tsx",
                lineNumber: 157,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: new Date(doc.updated_at).toLocaleDateString() }, void 0, false, {
                fileName: "app/components/pages/home.tsx",
                lineNumber: 163,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.tsx",
              lineNumber: 156,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 152,
            columnNumber: 21
          }, this),
          i < recentDocuments.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { className: "my-4" }, void 0, false, {
            fileName: "app/components/pages/home.tsx",
            lineNumber: 168,
            columnNumber: 56
          }, this)
        ] }, doc.id, true, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 151,
          columnNumber: 62
        }, this)),
        recentDocuments.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm text-muted-foreground", children: "No recent activity" }, void 0, false, {
          fileName: "app/components/pages/home.tsx",
          lineNumber: 170,
          columnNumber: 50
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 150,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/home.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/home.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/home.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_c = HomePage;
var _c;
$RefreshReg$(_c, "HomePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1733136384544.932";
}
function Index() {
  _s();
  const {
    recentDocuments,
    starredDocuments
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HomePage, { recentDocuments, starredDocuments }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(Index, "lWcK6Y/Ez3+ZSznyP/kfyDOtmOs=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-3HFRX3GK.js.map
