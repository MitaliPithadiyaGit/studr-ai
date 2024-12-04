import {
  AnimatePresence,
  Layout,
  ScrollArea,
  motion
} from "/build/_shared/chunk-RLMXWHHF.js";
import {
  Button,
  Input
} from "/build/_shared/chunk-6W4A6LHK.js";
import {
  Bot,
  Send,
  Sparkles,
  User
} from "/build/_shared/chunk-UE3OXSCW.js";
import "/build/_shared/chunk-XJ2E5TH5.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-A7JXTRIT.js";
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

// app/components/ai-chat.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ai-chat.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ai-chat.tsx"
  );
  import.meta.hot.lastModified = "1733136384528.9414";
}
function AiChat() {
  _s();
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [isExpanded, setIsExpanded] = React.useState(false);
  const scrollAreaRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const formRef = React.useRef(null);
  const handleSend = () => {
    if (!input.trim())
      return;
    const newMessage = {
      id: String(Date.now()),
      content: input,
      role: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsExpanded(true);
    setTimeout(() => {
      const aiResponse = {
        id: String(Date.now() + 1),
        content: "This is a simulated AI response. In a real implementation, this would be connected to an AI service.",
        role: "assistant",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1e3);
  };
  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
    if (!isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isExpanded]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-[calc(100vh-3.5rem)] flex-col overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { mode: "wait", children: isExpanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "flex-1 overflow-hidden", initial: {
      opacity: 0,
      y: -20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -20
    }, transition: {
      duration: 0.3
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, { ref: scrollAreaRef, className: "h-full px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl space-y-4", children: messages.map((message) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: `flex gap-3 ${message.role === "assistant" ? "justify-start" : "justify-end"}`, initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.2
    }, children: [
      message.role === "assistant" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bot, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 93,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 92,
        columnNumber: 54
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `group relative flex max-w-xl rounded-lg px-3 py-2 text-sm ${message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-sm dark:prose-invert", children: message.content }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 96,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute -top-5 right-0 hidden whitespace-nowrap text-xs text-muted-foreground group-hover:block`, children: message.timestamp.toLocaleTimeString() }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 99,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this),
      message.role === "user" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 104,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 103,
        columnNumber: 49
      }, this)
    ] }, message.id, true, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 83,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 82,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this) }, "chat", false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 69,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "flex flex-1 items-center justify-center p-4", initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: 20
    }, transition: {
      duration: 0.3
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-2xl px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-6 w-6 text-primary" }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 124,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tight mb-2", children: "How can I help you today?" }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 126,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-muted-foreground", children: "Ask me anything - I'm here to assist with your questions" }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 122,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl -z-10" }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { ref: formRef, onSubmit: (e) => {
          e.preventDefault();
          handleSend();
        }, className: "relative flex gap-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1 rounded-lg border shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { ref: inputRef, placeholder: "Type your message...", value: input, onChange: (e) => setInput(e.target.value), className: "flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" }, void 0, false, {
            fileName: "app/components/ai-chat.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/components/ai-chat.tsx",
              lineNumber: 139,
              columnNumber: 21
            }, this),
            "Send"
          ] }, void 0, true, {
            fileName: "app/components/ai-chat.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this) }, "input", false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 109,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: isExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: 20
    }, transition: {
      duration: 0.3
    }, className: "border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: (e) => {
      e.preventDefault();
      handleSend();
    }, className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { ref: inputRef, placeholder: "Type your message...", value: input, onChange: (e) => setInput(e.target.value), className: "flex-1" }, void 0, false, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 166,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 168,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Send message" }, void 0, false, {
          fileName: "app/components/ai-chat.tsx",
          lineNumber: 169,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ai-chat.tsx",
        lineNumber: 167,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 162,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 161,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 149,
      columnNumber: 24
    }, this) }, void 0, false, {
      fileName: "app/components/ai-chat.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ai-chat.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_s(AiChat, "RbYjLVjf6CgZ8PA6p5DTCN9YKk4=");
_c = AiChat;
var _c;
$RefreshReg$(_c, "AiChat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/askai.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\askai.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\askai.tsx"
  );
  import.meta.hot.lastModified = "1733136384546.9321";
}
function AskAiPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { minimal: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-[calc(100vh-3.5rem)] overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiChat, {}, void 0, false, {
    fileName: "app/routes/askai.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/askai.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/askai.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = AskAiPage;
var _c2;
$RefreshReg$(_c2, "AskAiPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AskAiPage as default
};
//# sourceMappingURL=/build/routes/askai-MACKNK6R.js.map
