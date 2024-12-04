import {
  require_auth
} from "/build/_shared/chunk-2ECIRKNT.js";
import {
  Editor,
  usePageTitle
} from "/build/_shared/chunk-V7UCO6WB.js";
import {
  Layout,
  usePageEmoji
} from "/build/_shared/chunk-RLMXWHHF.js";
import "/build/_shared/chunk-6W4A6LHK.js";
import "/build/_shared/chunk-UE3OXSCW.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import "/build/_shared/chunk-XJ2E5TH5.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
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

// app/routes/pages.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\pages.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\pages.$id.tsx"
  );
  import.meta.hot.lastModified = "1733136384547.9314";
}
function DocumentPage() {
  _s();
  const {
    document
  } = useLoaderData();
  const {
    title,
    setTitle
  } = usePageTitle(document.id);
  const {
    emoji,
    setEmoji
  } = usePageEmoji(document.id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { title: title || document.title, emoji: emoji || document.emoji, onTitleChange: setTitle, onEmojiChange: setEmoji, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Editor, { title: title || document.title, onTitleChange: setTitle }, void 0, false, {
    fileName: "app/routes/pages.$id.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/pages.$id.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(DocumentPage, "nMwLavrTyKiEzmrsGB+bsAxSEPs=", false, function() {
  return [useLoaderData, usePageTitle, usePageEmoji];
});
_c = DocumentPage;
var _c;
$RefreshReg$(_c, "DocumentPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DocumentPage as default
};
//# sourceMappingURL=/build/routes/pages.$id-GUW22MZU.js.map
