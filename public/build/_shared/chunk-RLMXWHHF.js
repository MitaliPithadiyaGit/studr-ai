import {
  Button,
  Input,
  Label
} from "/build/_shared/chunk-6W4A6LHK.js";
import {
  Archive,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  BookmarkX,
  Bot,
  Calendar,
  Check,
  ChevronRight,
  ChevronsUpDown,
  Circle,
  CircleArrowUp,
  CircleUser,
  Clock,
  Copy,
  CornerUpLeft,
  CreditCard,
  Crown,
  DismissableLayer,
  Download,
  Ellipsis,
  FileChartColumn,
  FileText,
  FileUp,
  Folder,
  FolderPlus,
  FolderTree,
  GalleryVerticalEnd,
  Globe,
  GraduationCap,
  Hash,
  House,
  Infinity as Infinity2,
  Info,
  KeyRound,
  Link as Link2,
  LogOut,
  MessageSquareQuote,
  Package,
  PanelLeft,
  Plus,
  Portal,
  Presence,
  Root2 as Root,
  RotateCcw,
  Search,
  Send,
  Settings,
  Share2,
  Smile,
  Sparkles,
  Star,
  Tags,
  Trash2,
  Upload,
  User,
  X,
  composeEventHandlers,
  createCollection,
  createContext2,
  createContextScope,
  useCallbackRef,
  useControllableState,
  useLayoutEffect2,
  useToast
} from "/build/_shared/chunk-UE3OXSCW.js";
import {
  Primitive,
  Slot,
  Slottable,
  cn,
  composeRefs,
  cva,
  dispatchDiscreteCustomEvent,
  useComposedRefs
} from "/build/_shared/chunk-XJ2E5TH5.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Link,
  useLocation,
  useNavigate,
  useParams
} from "/build/_shared/chunk-A7JXTRIT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-JSRQUTTN.js";
import {
  require_react_dom
} from "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __require,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/hooks/use-page-emoji.tsx
var React = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\use-page-emoji.tsx"
  );
  import.meta.hot.lastModified = "1733136384541.9343";
}
var pageEmojis = {};
var listeners = /* @__PURE__ */ new Set();
function usePageEmoji(id3) {
  const [emoji, setEmojiState] = React.useState(pageEmojis[id3] || "\u{1F4C4}");
  React.useEffect(() => {
    const updateEmoji = () => {
      setEmojiState(pageEmojis[id3] || "\u{1F4C4}");
    };
    listeners.add(updateEmoji);
    return () => {
      listeners.delete(updateEmoji);
    };
  }, [id3]);
  const setEmoji = React.useCallback((newEmoji) => {
    pageEmojis[id3] = newEmoji;
    listeners.forEach((listener) => listener());
  }, [id3]);
  const getEmoji = React.useCallback((pageId) => {
    return pageEmojis[pageId] || "\u{1F4C4}";
  }, []);
  return {
    emoji,
    setEmoji,
    getEmoji
  };
}

// app/components/ui/dropdown-menu.tsx
var React22 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var React21 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-menu/dist/index.mjs
var React20 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var DirectionContext = React2.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React2.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React3 = __toESM(require_react(), 1);
"use client";
var count = 0;
function useFocusGuards() {
  React3.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React4 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React4.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React4.useState(null);
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React4.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React4.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React4.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0)
            focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container)
        mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React4.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React4.useCallback(
    (event) => {
      if (!loop && !trapped)
        return;
      if (focusScope.paused)
        return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2)
            event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop)
              focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop)
              focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container }))
      return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items2) {
  return items2.filter((item) => item.tagName !== "A");
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var React5 = __toESM(require_react(), 1);
var useReactId = React5["useId".toString()] || (() => void 0);
var count2 = 0;
function useId(deterministicId) {
  const [id3, setId] = React5.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId)
      setId((reactId) => reactId ?? String(count2++));
  }, [deterministicId]);
  return deterministicId || (id3 ? `radix-${id3}` : "");
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var React10 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data: data3,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data3
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale2 = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale2 = getScale(offsetParent);
      }
    } else {
      scale2 = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale2.x;
  let y = (clientRect.top + visualOffsets.y) / scale2.y;
  let width = clientRect.width / scale2.x;
  let height = clientRect.height / scale2.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale2 = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale2 = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale2.x,
    height: rect.height * scale2.y,
    x: rect.x * scale2.x - scroll.scrollLeft * scale2.x + offsets.x + htmlOffset.x,
    y: rect.y * scale2.y - scroll.scrollTop * scale2.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale2 = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale2.x;
  const height = element.clientHeight * scale2.y;
  const x = left * scale2.x;
  const y = top * scale2.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data3) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data3.floating);
  return {
    reference: getRectRelativeToOffsetParent(data3.reference, await getOffsetParentFn(data3.floating), data3.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React6 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function deepEqual(a2, b) {
  if (a2 === b) {
    return true;
  }
  if (typeof a2 !== typeof b) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a2 && b && typeof a2 === "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a2[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React6.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data3, setData] = React6.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React6.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React6.useState(null);
  const [_floating, _setFloating] = React6.useState(null);
  const setReference = React6.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React6.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React6.useRef(null);
  const floatingRef = React6.useRef(null);
  const dataRef = React6.useRef(data3);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React6.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data4) => {
      const fullData = {
        ...data4,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data4) => ({
        ...data4,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React6.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React6.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React6.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React6.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data3.x);
    const y = roundByDPR(elements.floating, data3.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data3.x, data3.y]);
  return React6.useMemo(() => ({
    ...data3,
    update,
    refs,
    elements,
    floatingStyles
  }), [data3, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var React7 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var NAME = "Arrow";
var Arrow = React7.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME;
var Root2 = Arrow;

// node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-context/dist/index.mjs
var React8 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function createContextScope2(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React8.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName][index2] || BaseContext;
      const value = React8.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = scope?.[scopeName][index2] || BaseContext;
      const context = React8.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React8.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React8.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React8.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var React9 = __toESM(require_react(), 1);
function useSize(element) {
  const [size4, setSize] = React9.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
"use client";
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope2(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React10.useState(null);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React10.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React10.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React10.useEffect(() => {
      context.onAnchorChange(virtualRef?.current || ref.current);
    });
    return virtualRef ? null : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = React10.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = React10.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow4, setArrow] = React10.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift3() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced?.();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = React10.useState();
    useLayoutEffect2(() => {
      if (content)
        setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            middlewareData.transformOrigin?.x,
            middlewareData.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...middlewareData.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React10.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Root2,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data3) {
    const { placement, rects, middlewareData } = data3;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root22 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow2 = PopperArrow;

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var React12 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-context/dist/index.mjs
var React11 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function createContextScope3(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React11.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName][index2] || BaseContext;
      const value = React11.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = scope?.[scopeName][index2] || BaseContext;
      const context = React11.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React11.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React11.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes2(createScope, ...createContextScopeDeps)];
}
function composeContextScopes2(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React11.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
"use client";
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope3(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React12.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React12.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React12.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React12.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React12.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React12.useState(0);
  React12.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React12.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React12.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React12.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React12.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS2);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items2 = getItems().filter((item) => item.focusable);
                const activeItem = items2.find((item) => item.active);
                const currentItem = items2.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items2].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst2(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React12.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = useId();
    const id3 = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id3;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React12.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id: id3,
        focusable,
        active,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable)
                event.preventDefault();
              else
                context.onItemFocus(id3);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id3)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget)
                return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)
                  return;
                event.preventDefault();
                const items2 = getItems().filter((item) => item.focusable);
                let candidateNodes = items2.map((item) => item.ref.current);
                if (focusIntent === "last")
                  candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev")
                    candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst2(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key))
    return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key))
    return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst2(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_2, index2) => array[(startIndex + index2) % array.length]);
}
var Root3 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React19 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React15 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react2 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react2.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React13 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React13.useLayoutEffect : React13.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a2) {
  return a2;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data3) {
      var item = middleware(data3, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter2) {
          pendingQueue = pendingQueue.filter(filter2);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
var React14 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React14.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React15.forwardRef(function(props, parentRef) {
  var ref = React15.useRef(null);
  var _a = React15.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React15.createElement(
    React15.Fragment,
    null,
    enabled && React15.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React15.cloneElement(React15.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React15.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React18 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React17 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React16 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React16.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle2 = styleHookSingleton();
  var Sheet2 = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle2(styles, dynamic);
    return null;
  };
  return Sheet2;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React17.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React17.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React17.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id3) {
  return "\n  .block-interactivity-".concat(id3, " {pointer-events: none;}\n  .allow-interactivity-").concat(id3, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React18.useRef([]);
  var touchStartRef = React18.useRef([0, 0]);
  var activeAxis = React18.useRef();
  var id3 = React18.useState(idCounter++)[0];
  var Style2 = React18.useState(styleSingleton)[0];
  var lastProps = React18.useRef(props);
  React18.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React18.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id3));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id3));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id3));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id3));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React18.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React18.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React18.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React18.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React18.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React18.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React18.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React18.createElement(
    React18.Fragment,
    null,
    inert ? React18.createElement(Style2, { styles: generateStyle(id3) }) : null,
    removeScrollBar ? React18.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React19.forwardRef(function(props, ref) {
  return React19.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@radix-ui/react-menu/dist/index.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
"use client";
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection2, useCollection2, createCollectionScope2] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope2,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = React20.useState(null);
  const isUsingKeyboardRef = React20.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React20.useEffect(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Root22, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: React20.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME2 = "MenuAnchor";
var MenuAnchor = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
MenuAnchor.displayName = ANCHOR_NAME2;
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
  forceMount: void 0
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Portal, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME2 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME2);
var MenuContent = React20.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, props.__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Collection2.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }
);
var MenuRootContentModal = React20.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const ref = React20.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React20.useEffect(() => {
      const content = ref.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }
);
var MenuRootContentNonModal = React20.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
});
var MenuContentImpl = React20.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME2, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection2(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React20.useState(null);
    const contentRef = React20.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = React20.useRef(0);
    const searchRef = React20.useRef("");
    const pointerGraceTimerRef = React20.useRef(0);
    const pointerGraceIntentRef = React20.useRef(null);
    const pointerDirRef = React20.useRef("right");
    const lastPointerXRef = React20.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React20.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot, allowPinchZoom: true } : void 0;
    const handleTypeaheadSearch = (key) => {
      const search = searchRef.current + key;
      const items2 = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = items2.find((item) => item.ref.current === currentItem)?.textValue;
      const values = items2.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = items2.find((item) => item.textValue === nextMatch)?.ref.current;
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "")
          timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    };
    React20.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = React20.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: React20.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event))
              event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: React20.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event))
              return;
            contentRef.current?.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: React20.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event))
              event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React20.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
              event.preventDefault();
              contentRef.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  Root3,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current)
                        event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                      Content,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab")
                              event.preventDefault();
                            if (!isModifierKey && isCharacterKey)
                              handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content)
                            return;
                          if (!FIRST_LAST_KEYS.includes(event.key))
                            return;
                          event.preventDefault();
                          const items2 = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items2.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key))
                            candidateNodes.reverse();
                          focusFirst3(candidateNodes);
                        }),
                        onBlur: composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
MenuContent.displayName = CONTENT_NAME2;
var GROUP_NAME2 = "MenuGroup";
var MenuGroup = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }
);
MenuGroup.displayName = GROUP_NAME2;
var LABEL_NAME = "MenuLabel";
var MenuLabel = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Primitive.div, { ...labelProps, ref: forwardedRef });
  }
);
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = React20.forwardRef(
  (props, forwardedRef) => {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React20.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME2, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME2, props.__scopeMenu);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = React20.useRef(false);
    const handleSelect = () => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
        dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          props.onPointerDown?.(event);
          isPointerDownRef.current = true;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          if (!isPointerDownRef.current)
            event.currentTarget?.click();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (disabled || isTypingAhead && event.key === " ")
            return;
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }
);
MenuItem.displayName = ITEM_NAME2;
var MenuItemImpl = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME2, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = React20.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = React20.useState(false);
    const [textContent, setTextContent] = React20.useState("");
    React20.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Collection2.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }
);
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = React20.forwardRef(
  (props, forwardedRef) => {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MenuItem,
      {
        role: "menuitemcheckbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          checkboxItemProps.onSelect,
          () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME,
  { value: void 0, onValueChange: () => {
  } }
);
var MenuRadioGroup = React20.forwardRef(
  (props, forwardedRef) => {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = useCallbackRef(onValueChange);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }
);
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = React20.forwardRef(
  (props, forwardedRef) => {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MenuItem,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          radioItemProps.onSelect,
          () => context.onValueChange?.(value),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Presence,
      {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }
);
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }
);
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME2 = "MenuArrow";
var MenuArrow = React20.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
MenuArrow.displayName = ARROW_NAME2;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
  const popperScope = usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = React20.useState(null);
  const [content, setContent] = React20.useState(null);
  const handleOpenChange = useCallbackRef(onOpenChange);
  React20.useEffect(() => {
    if (parentMenuContext.open === false)
      handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [parentMenuContext.open, handleOpenChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Root22, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        MenuSubProvider,
        {
          scope: __scopeMenu,
          contentId: useId(),
          triggerId: useId(),
          trigger,
          onTriggerChange: setTrigger,
          children
        }
      )
    }
  ) });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = React20.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = React20.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = { __scopeMenu: props.__scopeMenu };
    const clearOpenTimer = React20.useCallback(() => {
      if (openTimerRef.current)
        window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    React20.useEffect(() => clearOpenTimer, [clearOpenTimer]);
    React20.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MenuItemImpl,
      {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": getOpenState(context.open),
        ...props,
        ref: composeRefs(forwardedRef, subContext.onTriggerChange),
        onClick: (event) => {
          props.onClick?.(event);
          if (props.disabled || event.defaultPrevented)
            return;
          event.currentTarget.focus();
          if (!context.open)
            context.onOpenChange(true);
        },
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse((event) => {
            contentContext.onItemEnter(event);
            if (event.defaultPrevented)
              return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
              contentContext.onPointerGraceIntentChange(null);
              openTimerRef.current = window.setTimeout(() => {
                context.onOpenChange(true);
                clearOpenTimer();
              }, 100);
            }
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse((event) => {
            clearOpenTimer();
            const contentRect = context.content?.getBoundingClientRect();
            if (contentRect) {
              const side = context.content?.dataset.side;
              const rightSide = side === "right";
              const bleed = rightSide ? -5 : 5;
              const contentNearEdge = contentRect[rightSide ? "left" : "right"];
              const contentFarEdge = contentRect[rightSide ? "right" : "left"];
              contentContext.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: event.clientX + bleed, y: event.clientY },
                  { x: contentNearEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.bottom },
                  { x: contentNearEdge, y: contentRect.bottom }
                ],
                side
              });
              window.clearTimeout(pointerGraceTimerRef.current);
              pointerGraceTimerRef.current = window.setTimeout(
                () => contentContext.onPointerGraceIntentChange(null),
                300
              );
            } else {
              contentContext.onTriggerLeave(event);
              if (event.defaultPrevented)
                return;
              contentContext.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (props.disabled || isTypingAhead && event.key === " ")
            return;
          if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
            context.onOpenChange(true);
            context.content?.focus();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = React20.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = React20.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Collection2.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MenuContentImpl,
      {
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId,
        ...subContentProps,
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event) => {
          if (rootContext.isUsingKeyboardRef.current)
            ref.current?.focus();
          event.preventDefault();
        },
        onCloseAutoFocus: (event) => event.preventDefault(),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
          if (event.target !== subContext.trigger)
            context.onOpenChange(false);
        }),
        onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
          rootContext.onClose();
          event.preventDefault();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isKeyDownInside = event.currentTarget.contains(event.target);
          const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
          if (isKeyDownInside && isCloseKey) {
            context.onOpenChange(false);
            subContext.trigger?.focus();
            event.preventDefault();
          }
        })
      }
    ) }) }) });
  }
);
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst3(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray2(array, startIndex) {
  return array.map((_2, index2) => array[(startIndex + index2) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray2(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root32 = Menu;
var Anchor2 = MenuAnchor;
var Portal2 = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label2 = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow22 = MenuArrow;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
"use client";
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = React21.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React21.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Root32, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = React21.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open)
              event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled)
            return;
          if (["Enter", " "].includes(event.key))
            context.onOpenToggle();
          if (event.key === "ArrowDown")
            context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key))
            event.preventDefault();
        })
      }
    ) });
  }
);
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Portal2, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME3 = "DropdownMenuContent";
var DropdownMenuContent = React21.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME3, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React21.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Content2,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current)
            context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick)
            hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
DropdownMenuContent.displayName = CONTENT_NAME3;
var GROUP_NAME3 = "DropdownMenuGroup";
var DropdownMenuGroup = React21.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
DropdownMenuGroup.displayName = GROUP_NAME3;
var LABEL_NAME2 = "DropdownMenuLabel";
var DropdownMenuLabel = React21.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Label2, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
DropdownMenuLabel.displayName = LABEL_NAME2;
var ITEM_NAME3 = "DropdownMenuItem";
var DropdownMenuItem = React21.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
DropdownMenuItem.displayName = ITEM_NAME3;
var CHECKBOX_ITEM_NAME2 = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = React21.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME2;
var RADIO_GROUP_NAME2 = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = React21.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME2;
var RADIO_ITEM_NAME2 = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = React21.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME2;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = React21.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME2 = "DropdownMenuSeparator";
var DropdownMenuSeparator = React21.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME2;
var ARROW_NAME3 = "DropdownMenuArrow";
var DropdownMenuArrow = React21.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Arrow22, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
DropdownMenuArrow.displayName = ARROW_NAME3;
var SUB_TRIGGER_NAME2 = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = React21.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME2;
var SUB_CONTENT_NAME2 = "DropdownMenuSubContent";
var DropdownMenuSubContent = React21.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME2;
var Root23 = DropdownMenu;
var Trigger = DropdownMenuTrigger;
var Portal22 = DropdownMenuPortal;
var Content22 = DropdownMenuContent;
var Group2 = DropdownMenuGroup;
var Label22 = DropdownMenuLabel;
var Item22 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;

// app/components/ui/dropdown-menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\dropdown-menu.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\dropdown-menu.tsx"
  );
  import.meta.hot.lastModified = "1733136384536.9373";
}
var DropdownMenu2 = Root23;
var DropdownMenuTrigger2 = Trigger;
var DropdownMenuGroup2 = Group2;
var DropdownMenuSubTrigger2 = React22.forwardRef(_c = ({
  className,
  inset,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubTrigger2, { ref, className: cn("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto" }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 36,
  columnNumber: 12
}, this));
_c2 = DropdownMenuSubTrigger2;
DropdownMenuSubTrigger2.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent2 = React22.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubContent2, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 45,
  columnNumber: 12
}, this));
_c4 = DropdownMenuSubContent2;
DropdownMenuSubContent2.displayName = SubContent2.displayName;
var DropdownMenuContent2 = React22.forwardRef(_c5 = ({
  className,
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal22, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content22, { ref, sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 53,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 52,
  columnNumber: 12
}, this));
_c6 = DropdownMenuContent2;
DropdownMenuContent2.displayName = Content22.displayName;
var DropdownMenuItem2 = React22.forwardRef(_c7 = ({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item22, { ref, className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 61,
  columnNumber: 12
}, this));
_c8 = DropdownMenuItem2;
DropdownMenuItem2.displayName = Item22.displayName;
var DropdownMenuCheckboxItem2 = React22.forwardRef(_c9 = ({
  className,
  children,
  checked,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem2, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked, ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this),
  children
] }, void 0, true, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 69,
  columnNumber: 12
}, this));
_c10 = DropdownMenuCheckboxItem2;
DropdownMenuCheckboxItem2.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem2 = React22.forwardRef(_c11 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem2, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this),
  children
] }, void 0, true, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 83,
  columnNumber: 12
}, this));
_c12 = DropdownMenuRadioItem2;
DropdownMenuRadioItem2.displayName = RadioItem2.displayName;
var DropdownMenuLabel2 = React22.forwardRef(_c13 = ({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label22, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 97,
  columnNumber: 12
}, this));
_c14 = DropdownMenuLabel2;
DropdownMenuLabel2.displayName = Label22.displayName;
var DropdownMenuSeparator2 = React22.forwardRef(_c15 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator2, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 103,
  columnNumber: 12
}, this));
_c16 = DropdownMenuSeparator2;
DropdownMenuSeparator2.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
};
_c17 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
var _c15;
var _c16;
var _c17;
$RefreshReg$(_c, "DropdownMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c2, "DropdownMenuSubTrigger");
$RefreshReg$(_c3, "DropdownMenuSubContent$React.forwardRef");
$RefreshReg$(_c4, "DropdownMenuSubContent");
$RefreshReg$(_c5, "DropdownMenuContent$React.forwardRef");
$RefreshReg$(_c6, "DropdownMenuContent");
$RefreshReg$(_c7, "DropdownMenuItem$React.forwardRef");
$RefreshReg$(_c8, "DropdownMenuItem");
$RefreshReg$(_c9, "DropdownMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c10, "DropdownMenuCheckboxItem");
$RefreshReg$(_c11, "DropdownMenuRadioItem$React.forwardRef");
$RefreshReg$(_c12, "DropdownMenuRadioItem");
$RefreshReg$(_c13, "DropdownMenuLabel$React.forwardRef");
$RefreshReg$(_c14, "DropdownMenuLabel");
$RefreshReg$(_c15, "DropdownMenuSeparator$React.forwardRef");
$RefreshReg$(_c16, "DropdownMenuSeparator");
$RefreshReg$(_c17, "DropdownMenuShortcut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/sidebar.tsx
var React30 = __toESM(require_react(), 1);

// app/hooks/use-mobile.tsx
var React23 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\use-mobile.tsx"
  );
  import.meta.hot.lastModified = "1733136384540.9348";
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React23.useState(void 0);
  React23.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// app/components/ui/separator.tsx
var React25 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-separator/dist/index.mjs
var React24 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var NAME2 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator3 = React24.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator3.displayName = NAME2;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root4 = Separator3;

// app/components/ui/separator.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\separator.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\separator.tsx"
  );
  import.meta.hot.lastModified = "1733136384537.936";
}
var Separator4 = React25.forwardRef(_c18 = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Root4, { ref, decorative, orientation, className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/separator.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Separator4;
Separator4.displayName = Root4.displayName;
var _c18;
var _c22;
$RefreshReg$(_c18, "Separator$React.forwardRef");
$RefreshReg$(_c22, "Separator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/sheet.tsx
var React27 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var React26 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
"use client";
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React26.useRef(null);
  const contentRef = React26.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React26.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME2 = "DialogTrigger";
var DialogTrigger = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME2, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME3 = "DialogPortal";
var [PortalProvider2, usePortalContext2] = createDialogContext(PORTAL_NAME3, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME3, __scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PortalProvider2, { scope: __scopeDialog, forceMount, children: React26.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME3;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React26.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext2(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME4 = "DialogContent";
var DialogContent = React26.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext2(CONTENT_NAME4, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME4;
var DialogContentModal = React26.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
    const contentRef = React26.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React26.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick)
            event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React26.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
    const hasInteractedOutsideRef = React26.useRef(false);
    const hasPointerDownOutsideRef = React26.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current)
              context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME4, __scopeDialog);
    const contentRef = React26.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React26.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME4,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React26.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle)
        console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React26.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription)
        console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root5 = Dialog;
var Portal3 = DialogPortal;
var Overlay = DialogOverlay;
var Content3 = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;

// app/components/ui/sheet.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\sheet.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\sheet.tsx"
  );
  import.meta.hot.lastModified = "1733136384537.936";
}
var Sheet = Root5;
var SheetPortal = Portal3;
var SheetOverlay = React27.forwardRef(_c19 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Overlay, { className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c23 = SheetOverlay;
SheetOverlay.displayName = Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
var SheetContent = React27.forwardRef(_c32 = ({
  side = "right",
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SheetPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SheetOverlay, {}, void 0, false, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Content3, { ref, className: cn(sheetVariants({
    side
  }), className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ui/sheet.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "app/components/ui/sheet.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 55,
  columnNumber: 12
}, this));
_c42 = SheetContent;
SheetContent.displayName = Content3.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 72,
  columnNumber: 7
}, this);
_c52 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 78,
  columnNumber: 7
}, this);
_c62 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React27.forwardRef(_c72 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 84,
  columnNumber: 12
}, this));
_c82 = SheetTitle;
SheetTitle.displayName = Title.displayName;
var SheetDescription = React27.forwardRef(_c92 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 90,
  columnNumber: 12
}, this));
_c102 = SheetDescription;
SheetDescription.displayName = Description.displayName;
var _c19;
var _c23;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c102;
$RefreshReg$(_c19, "SheetOverlay$React.forwardRef");
$RefreshReg$(_c23, "SheetOverlay");
$RefreshReg$(_c32, "SheetContent$React.forwardRef");
$RefreshReg$(_c42, "SheetContent");
$RefreshReg$(_c52, "SheetHeader");
$RefreshReg$(_c62, "SheetFooter");
$RefreshReg$(_c72, "SheetTitle$React.forwardRef");
$RefreshReg$(_c82, "SheetTitle");
$RefreshReg$(_c92, "SheetDescription$React.forwardRef");
$RefreshReg$(_c102, "SheetDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/skeleton.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\skeleton.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\skeleton.tsx"
  );
  import.meta.hot.lastModified = "1733136384538.9355";
}
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props }, void 0, false, {
    fileName: "app/components/ui/skeleton.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c20 = Skeleton;
var _c20;
$RefreshReg$(_c20, "Skeleton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/tooltip.tsx
var React29 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var React28 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
"use client";
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope2 = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const [isOpenDelayed, setIsOpenDelayed] = React28.useState(true);
  const isPointerInTransitRef = React28.useRef(false);
  const skipDelayTimerRef = React28.useRef(0);
  React28.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayed,
      delayDuration,
      onOpen: React28.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        setIsOpenDelayed(false);
      }, []),
      onClose: React28.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: React28.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope2(__scopeTooltip);
  const [trigger, setTrigger] = React28.useState(null);
  const contentId = useId();
  const openTimerRef = React28.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React28.useRef(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange?.(open2);
    }
  });
  const stateAttribute = React28.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React28.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React28.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React28.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React28.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Root22, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: React28.useCallback(() => {
        if (providerContext.isOpenDelayed)
          handleDelayedOpen();
        else
          handleOpen();
      }, [providerContext.isOpenDelayed, handleDelayedOpen, handleOpen]),
      onTriggerLeave: React28.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME3 = "TooltipTrigger";
var TooltipTrigger = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME3, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME3, __scopeTooltip);
    const popperScope = usePopperScope2(__scopeTooltip);
    const ref = React28.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = React28.useRef(false);
    const hasPointerMoveOpenedRef = React28.useRef(false);
    const handlePointerUp = React28.useCallback(() => isPointerDownRef.current = false, []);
    React28.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch")
            return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current)
            context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }
);
TooltipTrigger.displayName = TRIGGER_NAME3;
var PORTAL_NAME4 = "TooltipPortal";
var [PortalProvider3, usePortalContext3] = createTooltipContext(PORTAL_NAME4, {
  forceMount: void 0
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME4, __scopeTooltip);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalProvider3, { scope: __scopeTooltip, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME4;
var CONTENT_NAME5 = "TooltipContent";
var TooltipContent = React28.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext3(CONTENT_NAME5, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME5, props.__scopeTooltip);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }
);
var TooltipContentHoverable = React28.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME5, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME5, props.__scopeTooltip);
  const ref = React28.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React28.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React28.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React28.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  React28.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React28.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React28.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon2(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var TooltipContentImpl = React28.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME5, __scopeTooltip);
    const popperScope = usePopperScope2(__scopeTooltip);
    const { onClose } = context;
    React28.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    React28.useEffect(() => {
      if (context.trigger) {
        const handleScroll3 = (event) => {
          const target = event.target;
          if (target?.contains(context.trigger))
            onClose();
        };
        window.addEventListener("scroll", handleScroll3, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll3, { capture: true });
      }
    }, [context.trigger, onClose]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          Content,
          {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Slottable, { children }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Root, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          }
        )
      }
    );
  }
);
TooltipContent.displayName = CONTENT_NAME5;
var ARROW_NAME4 = "TooltipArrow";
var TooltipArrow = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope2(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME4,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
TooltipArrow.displayName = ARROW_NAME4;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon2(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a2, b) => {
    if (a2.x < b.x)
      return -1;
    else if (a2.x > b.x)
      return 1;
    else if (a2.y < b.y)
      return -1;
    else if (a2.y > b.y)
      return 1;
    else
      return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p2 = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p2.y - r.y) >= (q.y - r.y) * (p2.x - r.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p2);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p2 = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p2.y - r.y) >= (q.y - r.y) * (p2.x - r.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p2);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider;
var Root33 = Tooltip;
var Trigger3 = TooltipTrigger;
var Portal4 = TooltipPortal;
var Content23 = TooltipContent;

// app/components/ui/tooltip.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\tooltip.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\tooltip.tsx"
  );
  import.meta.hot.lastModified = "1733136384539.9348";
}
var TooltipProvider2 = Provider;
var Tooltip2 = Root33;
var TooltipTrigger2 = Trigger3;
var TooltipContent2 = React29.forwardRef(_c21 = ({
  className,
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Portal4, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Content23, { ref, sideOffset, className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/tooltip.tsx",
  lineNumber: 32,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/tooltip.tsx",
  lineNumber: 31,
  columnNumber: 12
}, this));
_c24 = TooltipContent2;
TooltipContent2.displayName = Content23.displayName;
var _c21;
var _c24;
$RefreshReg$(_c21, "TooltipContent$React.forwardRef");
$RefreshReg$(_c24, "TooltipContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/sidebar.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\sidebar.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
var _s5 = $RefreshSig$();
var _s6 = $RefreshSig$();
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\sidebar.tsx"
  );
  import.meta.hot.lastModified = "1733136384538.9355";
}
var SIDEBAR_COOKIE_NAME = "sidebar:state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React30.createContext(null);
function useSidebar() {
  _s();
  const context = React30.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var SidebarProvider = _s2(React30.forwardRef(_c25 = _s2(({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}, ref) => {
  _s2();
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React30.useState(false);
  const [_open, _setOpen] = React30.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React30.useCallback((value) => {
    const openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);
  const toggleSidebar = React30.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React30.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React30.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TooltipProvider2, { delayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
    "--sidebar-width": SIDEBAR_WIDTH,
    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
    ...style
  }, className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className), ref, ...props, children }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 117,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 116,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}, "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
  return [useIsMobile];
})), "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
  return [useIsMobile];
});
_c26 = SidebarProvider;
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = _s3(React30.forwardRef(_c33 = _s3(({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}, ref) => {
  _s3();
  const {
    isMobile,
    state,
    openMobile,
    setOpenMobile
  } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className), ref, ...props, children }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 149,
      columnNumber: 12
    }, this);
  }
  if (isMobile) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SheetContent, { "data-sidebar": "sidebar", "data-mobile": "true", className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden", style: {
      "--sidebar-width": SIDEBAR_WIDTH_MOBILE
    }, side, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex h-full w-full flex-col", children }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 158,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 155,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 154,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, className: "group peer hidden md:block text-sidebar-foreground", "data-state": state, "data-collapsible": state === "collapsed" ? collapsible : "", "data-variant": variant, "data-side": side, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: cn("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]") }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: cn(
      "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
      side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
      // Adjust the padding for floating and inset variants.
      variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
      className
    ), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { "data-sidebar": "sidebar", className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow", children }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 168,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
}, "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
  return [useSidebar];
})), "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
  return [useSidebar];
});
_c43 = Sidebar;
Sidebar.displayName = "Sidebar";
var SidebarTrigger = _s4(React30.forwardRef(_c53 = _s4(({
  className,
  onClick,
  ...props
}, ref) => {
  _s4();
  const {
    toggleSidebar
  } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { ref, "data-sidebar": "trigger", variant: "ghost", size: "icon", className: cn("h-7 w-7", className), onClick: (event) => {
    onClick?.(event);
    toggleSidebar();
  }, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PanelLeft, {}, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "sr-only", children: "Toggle Sidebar" }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 189,
    columnNumber: 10
  }, this);
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
  return [useSidebar];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
  return [useSidebar];
});
_c63 = SidebarTrigger;
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = _s5(React30.forwardRef(_c73 = _s5(({
  className,
  ...props
}, ref) => {
  _s5();
  const {
    toggleSidebar
  } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { ref, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: toggleSidebar, title: "Toggle Sidebar", className: cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 211,
    columnNumber: 10
  }, this);
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
  return [useSidebar];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
  return [useSidebar];
});
_c83 = SidebarRail;
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React30.forwardRef(_c93 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { ref, className: cn("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 223,
    columnNumber: 10
  }, this);
});
_c103 = SidebarInset;
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React30.forwardRef(_c112 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { ref, "data-sidebar": "input", className: cn("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 231,
    columnNumber: 10
  }, this);
});
_c122 = SidebarInput;
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React30.forwardRef(_c132 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, "data-sidebar": "header", className: cn("flex flex-col gap-2 p-2", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 239,
    columnNumber: 10
  }, this);
});
_c142 = SidebarHeader;
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React30.forwardRef(_c152 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, "data-sidebar": "footer", className: cn("flex flex-col gap-2 p-2", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 247,
    columnNumber: 10
  }, this);
});
_c162 = SidebarFooter;
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React30.forwardRef(_c172 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Separator4, { ref, "data-sidebar": "separator", className: cn("mx-2 w-auto bg-sidebar-border", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 255,
    columnNumber: 10
  }, this);
});
_c182 = SidebarSeparator;
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React30.forwardRef(_c192 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, "data-sidebar": "content", className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 263,
    columnNumber: 10
  }, this);
});
_c202 = SidebarContent;
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React30.forwardRef(_c212 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, "data-sidebar": "group", className: cn("relative flex w-full min-w-0 flex-col p-2", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 271,
    columnNumber: 10
  }, this);
});
_c222 = SidebarGroup;
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React30.forwardRef(_c232 = ({
  className,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Comp, { ref, "data-sidebar": "group-label", className: cn("duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 281,
    columnNumber: 10
  }, this);
});
_c242 = SidebarGroupLabel;
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React30.forwardRef(_c252 = ({
  className,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Comp, { ref, "data-sidebar": "group-action", className: cn(
    "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
    // Increases the hit area of the button on mobile.
    "after:absolute after:-inset-2 after:md:hidden",
    "group-data-[collapsible=icon]:hidden",
    className
  ), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 291,
    columnNumber: 10
  }, this);
});
_c262 = SidebarGroupAction;
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React30.forwardRef(_c27 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, "data-sidebar": "group-content", className: cn("w-full text-sm", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sidebar.tsx",
  lineNumber: 300,
  columnNumber: 12
}, this));
_c28 = SidebarGroupContent;
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React30.forwardRef(_c29 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { ref, "data-sidebar": "menu", className: cn("flex w-full min-w-0 flex-col gap-1", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sidebar.tsx",
  lineNumber: 306,
  columnNumber: 12
}, this));
_c30 = SidebarMenu;
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React30.forwardRef(_c31 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { ref, "data-sidebar": "menu-item", className: cn("group/menu-item relative", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sidebar.tsx",
  lineNumber: 312,
  columnNumber: 12
}, this));
_c322 = SidebarMenuItem;
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var SidebarMenuButton = _s6(React30.forwardRef(_c332 = _s6(({
  asChild = false,
  isActive = false,
  variant = "default",
  size: size4 = "default",
  tooltip,
  className,
  ...props
}, ref) => {
  _s6();
  const Comp = asChild ? Slot : "button";
  const {
    isMobile,
    state
  } = useSidebar();
  const button = /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Comp, { ref, "data-sidebar": "menu-button", "data-size": size4, "data-active": isActive, className: cn(sidebarMenuButtonVariants({
    variant,
    size: size4
  }), className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 347,
    columnNumber: 18
  }, this);
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Tooltip2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TooltipTrigger2, { asChild: true, children: button }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 360,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TooltipContent2, { side: "right", align: "center", hidden: state !== "collapsed" || isMobile, ...tooltip }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 361,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 359,
    columnNumber: 10
  }, this);
}, "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
  return [useSidebar];
})), "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
  return [useSidebar];
});
_c34 = SidebarMenuButton;
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React30.forwardRef(_c35 = ({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Comp, { ref, "data-sidebar": "menu-action", className: cn(
    "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
    // Increases the hit area of the button on mobile.
    "after:absolute after:-inset-2 after:md:hidden",
    "peer-data-[size=sm]/menu-button:top-1",
    "peer-data-[size=default]/menu-button:top-1.5",
    "peer-data-[size=lg]/menu-button:top-2.5",
    "group-data-[collapsible=icon]:hidden",
    showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
    className
  ), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 377,
    columnNumber: 10
  }, this);
});
_c36 = SidebarMenuAction;
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React30.forwardRef(_c37 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, "data-sidebar": "menu-badge", className: cn("absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sidebar.tsx",
  lineNumber: 386,
  columnNumber: 12
}, this));
_c38 = SidebarMenuBadge;
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = _s7(React30.forwardRef(_c39 = _s7(({
  className,
  showIcon = false,
  ...props
}, ref) => {
  _s7();
  const width = React30.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, "data-sidebar": "menu-skeleton", className: cn("rounded-md h-8 flex gap-2 px-2 items-center", className), ...props, children: [
    showIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 400,
      columnNumber: 20
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Skeleton, { className: "h-4 flex-1 max-w-[--skeleton-width]", "data-sidebar": "menu-skeleton-text", style: {
      "--skeleton-width": width
    } }, void 0, false, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 401,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 399,
    columnNumber: 10
  }, this);
}, "nKFjX4dxbYo91VAj5VdWQ1XUe3I=")), "nKFjX4dxbYo91VAj5VdWQ1XUe3I=");
_c40 = SidebarMenuSkeleton;
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React30.forwardRef(_c41 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { ref, "data-sidebar": "menu-sub", className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sidebar.tsx",
  lineNumber: 411,
  columnNumber: 12
}, this));
_c422 = SidebarMenuSub;
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React30.forwardRef(_c432 = ({
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { ref, ...props }, void 0, false, {
  fileName: "app/components/ui/sidebar.tsx",
  lineNumber: 416,
  columnNumber: 12
}, this));
_c44 = SidebarMenuSubItem;
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React30.forwardRef(_c45 = ({
  asChild = false,
  size: size4 = "md",
  isActive,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Comp, { ref, "data-sidebar": "menu-sub-button", "data-size": size4, "data-active": isActive, className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size4 === "sm" && "text-xs", size4 === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className), ...props }, void 0, false, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 427,
    columnNumber: 10
  }, this);
});
_c46 = SidebarMenuSubButton;
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
var _c25;
var _c26;
var _c33;
var _c43;
var _c53;
var _c63;
var _c73;
var _c83;
var _c93;
var _c103;
var _c112;
var _c122;
var _c132;
var _c142;
var _c152;
var _c162;
var _c172;
var _c182;
var _c192;
var _c202;
var _c212;
var _c222;
var _c232;
var _c242;
var _c252;
var _c262;
var _c27;
var _c28;
var _c29;
var _c30;
var _c31;
var _c322;
var _c332;
var _c34;
var _c35;
var _c36;
var _c37;
var _c38;
var _c39;
var _c40;
var _c41;
var _c422;
var _c432;
var _c44;
var _c45;
var _c46;
$RefreshReg$(_c25, "SidebarProvider$React.forwardRef");
$RefreshReg$(_c26, "SidebarProvider");
$RefreshReg$(_c33, "Sidebar$React.forwardRef");
$RefreshReg$(_c43, "Sidebar");
$RefreshReg$(_c53, "SidebarTrigger$React.forwardRef");
$RefreshReg$(_c63, "SidebarTrigger");
$RefreshReg$(_c73, "SidebarRail$React.forwardRef");
$RefreshReg$(_c83, "SidebarRail");
$RefreshReg$(_c93, "SidebarInset$React.forwardRef");
$RefreshReg$(_c103, "SidebarInset");
$RefreshReg$(_c112, "SidebarInput$React.forwardRef");
$RefreshReg$(_c122, "SidebarInput");
$RefreshReg$(_c132, "SidebarHeader$React.forwardRef");
$RefreshReg$(_c142, "SidebarHeader");
$RefreshReg$(_c152, "SidebarFooter$React.forwardRef");
$RefreshReg$(_c162, "SidebarFooter");
$RefreshReg$(_c172, "SidebarSeparator$React.forwardRef");
$RefreshReg$(_c182, "SidebarSeparator");
$RefreshReg$(_c192, "SidebarContent$React.forwardRef");
$RefreshReg$(_c202, "SidebarContent");
$RefreshReg$(_c212, "SidebarGroup$React.forwardRef");
$RefreshReg$(_c222, "SidebarGroup");
$RefreshReg$(_c232, "SidebarGroupLabel$React.forwardRef");
$RefreshReg$(_c242, "SidebarGroupLabel");
$RefreshReg$(_c252, "SidebarGroupAction$React.forwardRef");
$RefreshReg$(_c262, "SidebarGroupAction");
$RefreshReg$(_c27, "SidebarGroupContent$React.forwardRef");
$RefreshReg$(_c28, "SidebarGroupContent");
$RefreshReg$(_c29, "SidebarMenu$React.forwardRef");
$RefreshReg$(_c30, "SidebarMenu");
$RefreshReg$(_c31, "SidebarMenuItem$React.forwardRef");
$RefreshReg$(_c322, "SidebarMenuItem");
$RefreshReg$(_c332, "SidebarMenuButton$React.forwardRef");
$RefreshReg$(_c34, "SidebarMenuButton");
$RefreshReg$(_c35, "SidebarMenuAction$React.forwardRef");
$RefreshReg$(_c36, "SidebarMenuAction");
$RefreshReg$(_c37, "SidebarMenuBadge$React.forwardRef");
$RefreshReg$(_c38, "SidebarMenuBadge");
$RefreshReg$(_c39, "SidebarMenuSkeleton$React.forwardRef");
$RefreshReg$(_c40, "SidebarMenuSkeleton");
$RefreshReg$(_c41, "SidebarMenuSub$React.forwardRef");
$RefreshReg$(_c422, "SidebarMenuSub");
$RefreshReg$(_c432, "SidebarMenuSubItem$React.forwardRef");
$RefreshReg$(_c44, "SidebarMenuSubItem");
$RefreshReg$(_c45, "SidebarMenuSubButton$React.forwardRef");
$RefreshReg$(_c46, "SidebarMenuSubButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/use-bookmarks.tsx
var React32 = __toESM(require_react(), 1);

// app/hooks/use-page-titles.tsx
var React31 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\use-page-titles.tsx"
  );
  import.meta.hot.lastModified = "1733136384541.9343";
}
var pageTitles = {};
var listeners2 = /* @__PURE__ */ new Set();
function usePageTitles() {
  const [titles, setTitles] = React31.useState(pageTitles);
  React31.useEffect(() => {
    const updateTitles = () => {
      setTitles({ ...pageTitles });
    };
    listeners2.add(updateTitles);
    return () => {
      listeners2.delete(updateTitles);
    };
  }, []);
  const setPageTitle = React31.useCallback((id3, title) => {
    pageTitles[id3] = title;
    listeners2.forEach((listener) => listener());
  }, []);
  const getPageTitle = React31.useCallback((id3, defaultTitle) => {
    return titles[id3] || defaultTitle;
  }, [titles]);
  return {
    setPageTitle,
    getPageTitle
  };
}

// app/hooks/use-bookmarks.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\use-bookmarks.tsx"
  );
  import.meta.hot.lastModified = "1733136384540.9348";
}
var bookmarks = [];
var listeners3 = /* @__PURE__ */ new Set();
function useBookmarks() {
  const [items2, setItems] = React32.useState(bookmarks);
  const { getPageTitle } = usePageTitles();
  const { getEmoji } = usePageEmoji();
  React32.useEffect(() => {
    const updateBookmarks = () => {
      bookmarks.forEach((bookmark) => {
        bookmark.name = getPageTitle(bookmark.id, bookmark.name);
        bookmark.emoji = getEmoji(bookmark.id) || bookmark.emoji;
      });
      setItems([...bookmarks]);
    };
    listeners3.add(updateBookmarks);
    updateBookmarks();
    return () => {
      listeners3.delete(updateBookmarks);
    };
  }, [getPageTitle, getEmoji]);
  const addBookmark = React32.useCallback((id3) => {
    const title = getPageTitle(id3, "Untitled");
    const emoji = getEmoji(id3) || "\u{1F4C4}";
    const bookmark = {
      id: id3,
      name: title,
      emoji,
      url: `/pages/${id3}`
    };
    const existingIndex = bookmarks.findIndex((b) => b.id === id3);
    if (existingIndex === -1) {
      bookmarks.push(bookmark);
    } else {
      bookmarks[existingIndex] = bookmark;
    }
    setItems([...bookmarks]);
    listeners3.forEach((listener) => listener());
  }, [getPageTitle, getEmoji]);
  const removeBookmark = React32.useCallback((id3) => {
    const index2 = bookmarks.findIndex((b) => b.id === id3);
    if (index2 !== -1) {
      bookmarks.splice(index2, 1);
      setItems([...bookmarks]);
      listeners3.forEach((listener) => listener());
    }
  }, []);
  const isBookmarked = React32.useCallback((id3) => {
    return bookmarks.some((b) => b.id === id3);
  }, []);
  return {
    bookmarks: items2,
    addBookmark,
    removeBookmark,
    isBookmarked
  };
}

// app/components/nav-favorites.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\nav-favorites.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\nav-favorites.tsx"
  );
  import.meta.hot.lastModified = "1733136384531.9402";
}
function NavFavorites() {
  _s8();
  const {
    isMobile
  } = useSidebar();
  const {
    bookmarks: bookmarks2,
    removeBookmark
  } = useBookmarks();
  const {
    getEmoji
  } = usePageEmoji("");
  const sortedBookmarks = [...bookmarks2].sort((a2, b) => a2.name.localeCompare(b.name));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarGroup, { className: "group-data-[collapsible=icon]:hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarGroupLabel, { children: "Bookmarks" }, void 0, false, {
      fileName: "app/components/nav-favorites.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarMenu, { children: sortedBookmarks.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarMenuItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: item.url, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: getEmoji(item.id) }, void 0, false, {
          fileName: "app/components/nav-favorites.tsx",
          lineNumber: 51,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: item.name }, void 0, false, {
          fileName: "app/components/nav-favorites.tsx",
          lineNumber: 52,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/nav-favorites.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/nav-favorites.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenu2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarMenuAction, { showOnHover: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Ellipsis, {}, void 0, false, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 58,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sr-only", children: "More" }, void 0, false, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 59,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-favorites.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/nav-favorites.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuContent2, { align: isMobile ? "center" : "start", className: "w-48", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuItem2, { onClick: () => removeBookmark(item.id), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BookmarkX, { className: "text-muted-foreground" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 64,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Remove from Bookmarks" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 65,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 63,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuItem2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: item.url, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link2, { className: "text-muted-foreground" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 70,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Copy Link" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 71,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 69,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuItem2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ArrowUpRight, { className: "text-muted-foreground" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 76,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Open in New Tab" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 77,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuItem2, { className: "text-destructive focus:text-destructive", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Trash2, { className: "text-muted-foreground" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 82,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Delete" }, void 0, false, {
              fileName: "app/components/nav-favorites.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/nav-favorites.tsx",
            lineNumber: 81,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-favorites.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/nav-favorites.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)
    ] }, item.id, true, {
      fileName: "app/components/nav-favorites.tsx",
      lineNumber: 48,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/components/nav-favorites.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/nav-favorites.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav-favorites.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s8(NavFavorites, "k4KtQ5ba7Yts8BO82TLQIboFd9I=", false, function() {
  return [useSidebar, useBookmarks, usePageEmoji];
});
_c47 = NavFavorites;
var _c47;
$RefreshReg$(_c47, "NavFavorites");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav-main.tsx
var React41 = __toESM(require_react(), 1);

// app/components/archive-command.tsx
var React34 = __toESM(require_react(), 1);

// app/components/ui/dialog.tsx
var React33 = __toESM(require_react(), 1);
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384536.9373";
}
var Dialog2 = Root5;
var DialogPortal2 = Portal3;
var DialogOverlay2 = React33.forwardRef(_c48 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Overlay, { ref, className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c210 = DialogOverlay2;
DialogOverlay2.displayName = Overlay.displayName;
var DialogContent2 = React33.forwardRef(_c310 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogPortal2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogOverlay2, {}, void 0, false, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Content3, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ui/dialog.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "app/components/ui/dialog.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c49 = DialogContent2;
DialogContent2.displayName = Content3.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 54,
  columnNumber: 7
}, this);
_c54 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 60,
  columnNumber: 7
}, this);
_c64 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
var DialogTitle2 = React33.forwardRef(_c74 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Title, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c84 = DialogTitle2;
DialogTitle2.displayName = Title.displayName;
var DialogDescription2 = React33.forwardRef(_c94 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c104 = DialogDescription2;
DialogDescription2.displayName = Description.displayName;
var _c48;
var _c210;
var _c310;
var _c49;
var _c54;
var _c64;
var _c74;
var _c84;
var _c94;
var _c104;
$RefreshReg$(_c48, "DialogOverlay$React.forwardRef");
$RefreshReg$(_c210, "DialogOverlay");
$RefreshReg$(_c310, "DialogContent$React.forwardRef");
$RefreshReg$(_c49, "DialogContent");
$RefreshReg$(_c54, "DialogHeader");
$RefreshReg$(_c64, "DialogFooter");
$RefreshReg$(_c74, "DialogTitle$React.forwardRef");
$RefreshReg$(_c84, "DialogTitle");
$RefreshReg$(_c94, "DialogDescription$React.forwardRef");
$RefreshReg$(_c104, "DialogDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/archive-command.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\archive-command.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\archive-command.tsx"
  );
  import.meta.hot.lastModified = "1733136384529.9412";
}
var archivedItems = [{
  id: 1,
  name: "Project Documentation",
  type: "document",
  date: "2024-03-10",
  icon: FileText,
  tags: ["Important", "Work"]
}, {
  id: 2,
  name: "Design Assets",
  type: "folder",
  date: "2024-03-09",
  icon: Folder,
  tags: ["Design", "Assets"]
}, {
  id: 3,
  name: "Meeting Notes",
  type: "document",
  date: "2024-03-08",
  icon: FileText,
  tags: ["Work", "Notes"]
}, {
  id: 4,
  name: "Research Papers",
  type: "folder",
  date: "2024-03-07",
  icon: Folder,
  tags: ["Research"]
}, {
  id: 5,
  name: "Product Roadmap",
  type: "document",
  date: "2024-03-06",
  icon: FileText,
  tags: ["Product", "Planning"]
}];
var filters = [{
  id: "all",
  name: "All Items",
  icon: Archive
}, {
  id: "recent",
  name: "Recent",
  icon: Clock
}, {
  id: "starred",
  name: "Starred",
  icon: Star
}, {
  id: "trash",
  name: "Trash",
  icon: Trash2
}];
function ArchiveCommand({
  open,
  onOpenChange
}) {
  _s9();
  const [activeFilter, setActiveFilter] = React34.useState("all");
  const [searchQuery, setSearchQuery] = React34.useState("");
  React34.useEffect(() => {
    const down = (e) => {
      if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange?.(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);
  const filteredItems = archivedItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const activeTitle = filters.find((f) => f.id === activeFilter)?.name || "Archive";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DialogContent2, { className: "max-w-4xl h-[85vh] p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DialogHeader, { className: "sr-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DialogTitle2, { children: activeTitle }, void 0, false, {
      fileName: "app/components/archive-command.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/archive-command.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-64 border-r p-4 flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Archive, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-lg font-semibold", children: "Archive" }, void 0, false, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 112,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Search, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Input, { placeholder: "Search archives...", className: "pl-8", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }, void 0, false, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Separator4, {}, void 0, false, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("nav", { className: "space-y-1", children: filters.map((filter2) => {
          const Icon = filter2.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => setActiveFilter(filter2.id), className: `w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-lg transition-colors ${activeFilter === filter2.id ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-secondary/50"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 124,
              columnNumber: 21
            }, this),
            filter2.name
          ] }, filter2.id, true, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 123,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/archive-command.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-1 flex flex-col min-h-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "border-b p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-sm font-medium", children: activeFilter === "all" ? "All Archives" : filters.find((f) => f.id === activeFilter)?.name }, void 0, false, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 135,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Tags, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this),
            "Manage Tags"
          ] }, void 0, true, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 138,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-4 overflow-auto flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid gap-2", children: filteredItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Archive, { className: "h-12 w-12 mx-auto text-muted-foreground" }, void 0, false, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 147,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "mt-4 text-lg font-medium", children: "No items found" }, void 0, false, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 148,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Try adjusting your search or filters" }, void 0, false, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 149,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 146,
          columnNumber: 47
        }, this) : filteredItems.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { className: "h-5 w-5 text-muted-foreground" }, void 0, false, {
                fileName: "app/components/archive-command.tsx",
                lineNumber: 156,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "text-sm font-medium", children: item.name }, void 0, false, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 158,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-2 mt-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-muted-foreground", children: item.date }, void 0, false, {
                    fileName: "app/components/archive-command.tsx",
                    lineNumber: 160,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-xs text-muted-foreground", children: "\u2022" }, void 0, false, {
                    fileName: "app/components/archive-command.tsx",
                    lineNumber: 163,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-1", children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded-md text-xs font-medium bg-secondary", children: tag }, tag, false, {
                    fileName: "app/components/archive-command.tsx",
                    lineNumber: 165,
                    columnNumber: 55
                  }, this)) }, void 0, false, {
                    fileName: "app/components/archive-command.tsx",
                    lineNumber: 164,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 159,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/archive-command.tsx",
                lineNumber: 157,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 155,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenu2, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 175,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 176,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/archive-command.tsx",
                lineNumber: 174,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/components/archive-command.tsx",
                lineNumber: 173,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuContent2, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem2, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ArrowUpRight, { className: "h-4 w-4 mr-2" }, void 0, false, {
                    fileName: "app/components/archive-command.tsx",
                    lineNumber: 181,
                    columnNumber: 31
                  }, this),
                  "Open"
                ] }, void 0, true, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 180,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem2, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Star, { className: "h-4 w-4 mr-2" }, void 0, false, {
                    fileName: "app/components/archive-command.tsx",
                    lineNumber: 185,
                    columnNumber: 31
                  }, this),
                  "Star"
                ] }, void 0, true, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 184,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 188,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem2, { className: "text-destructive focus:text-destructive", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Trash2, { className: "h-4 w-4 mr-2" }, void 0, false, {
                    fileName: "app/components/archive-command.tsx",
                    lineNumber: 190,
                    columnNumber: 31
                  }, this),
                  "Delete"
                ] }, void 0, true, {
                  fileName: "app/components/archive-command.tsx",
                  lineNumber: 189,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/archive-command.tsx",
                lineNumber: 179,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/archive-command.tsx",
              lineNumber: 172,
              columnNumber: 25
            }, this)
          ] }, item.id, true, {
            fileName: "app/components/archive-command.tsx",
            lineNumber: 154,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/archive-command.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/archive-command.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/archive-command.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/archive-command.tsx",
    lineNumber: 102,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/archive-command.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_s9(ArchiveCommand, "vEUZgh0B0aT/gAbusDsD3ui2ZcM=");
_c50 = ArchiveCommand;
var _c50;
$RefreshReg$(_c50, "ArchiveCommand");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/search-command.tsx
var React39 = __toESM(require_react(), 1);

// app/components/ui/command.tsx
var React38 = __toESM(require_react(), 1);

// node_modules/cmdk/dist/chunk-XJATAMEX.mjs
var U = 1;
var Y = 0.9;
var a = 0.8;
var H = 0.17;
var p = 0.1;
var u = 0.999;
var J = 0.9999;
var k = 0.99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B = /[\\\/_+.#"@\[\(\{&]/g;
var K = /[\s-]/;
var X2 = /[\s-]/g;
function G(c, f, P, C, h, A2, O2) {
  if (A2 === f.length)
    return h === c.length ? U : k;
  var T = `${h},${A2}`;
  if (O2[T] !== void 0)
    return O2[T];
  for (var L2 = C.charAt(A2), E = P.indexOf(L2, h), S2 = 0, _2, N, R, M; E >= 0; )
    _2 = G(c, f, P, C, E + 1, A2 + 1, O2), _2 > S2 && (E === h ? _2 *= U : m.test(c.charAt(E - 1)) ? (_2 *= a, R = c.slice(h, E - 1).match(B), R && h > 0 && (_2 *= Math.pow(u, R.length))) : K.test(c.charAt(E - 1)) ? (_2 *= Y, M = c.slice(h, E - 1).match(X2), M && h > 0 && (_2 *= Math.pow(u, M.length))) : (_2 *= H, h > 0 && (_2 *= Math.pow(u, E - h))), c.charAt(E) !== f.charAt(A2) && (_2 *= J)), (_2 < p && P.charAt(E - 1) === C.charAt(A2 + 1) || C.charAt(A2 + 1) === C.charAt(A2) && P.charAt(E - 1) !== C.charAt(A2)) && (N = G(c, f, P, C, E + 1, A2 + 2, O2), N * p > _2 && (_2 = N * p)), _2 > S2 && (S2 = _2), E = P.indexOf(L2, E + 1);
  return O2[T] = S2, S2;
}
function D(c) {
  return c.toLowerCase().replace(X2, " ");
}
function W(c, f) {
  return G(c, f, D(c), D(f), 0, 0, {});
}

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r in t2)
        ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var import_react17 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
var import_react4 = __toESM(require_react());
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react4.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/cmdk/node_modules/@radix-ui/react-context/dist/index.module.js
var import_react5 = __toESM(require_react());
function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
  const Context = /* @__PURE__ */ (0, import_react5.createContext)(defaultContext);
  function Provider2(props) {
    const { children, ...context } = props;
    const value = (0, import_react5.useMemo)(
      () => context,
      Object.values(context)
    );
    return /* @__PURE__ */ (0, import_react5.createElement)(Context.Provider, {
      value
    }, children);
  }
  function useContext14(consumerName) {
    const context = (0, import_react5.useContext)(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider2.displayName = rootComponentName + "Provider";
  return [
    Provider2,
    useContext14
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react5.createContext)(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = (0, import_react5.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react5.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext14(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = (0, import_react5.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [
      Provider2,
      useContext14
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react5.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react5.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11092,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react5.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $2AODx$react = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
var import_react6 = __toESM(require_react());
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react6.useLayoutEffect : () => {
};

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id3, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id3 ? `radix-${id3}` : "");
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var import_react8 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
var import_react7 = __toESM(require_react());
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react7.useRef)(callback);
  (0, import_react7.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react7.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react8.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react8.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react8.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react8.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var import_react12 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var import_react10 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/cmdk/node_modules/@radix-ui/react-slot/dist/index.module.js
var import_react9 = __toESM(require_react());
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react9.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react9.Children.count(newElement) > 1)
          return import_react9.Children.only(null);
        return /* @__PURE__ */ (0, import_react9.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react9.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react9.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react9.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react9.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react9.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react9.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
  return import_react9.Children.count(children) > 1 ? import_react9.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react9.createElement)(import_react9.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react9.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler)
      overrideProps[propName] = (...args) => {
        childPropValue === null || childPropValue === void 0 || childPropValue(...args);
        slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
      };
    else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = /* @__PURE__ */ (0, import_react10.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react10.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react10.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node2
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom2.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
var import_react11 = __toESM(require_react());
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react11.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown
  ]);
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react12.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react12.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react12.useState)(null);
  const [, force] = (0, import_react12.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  });
  (0, import_react12.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        document.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react12.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react12.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react12.useRef)(false);
  const handleClickRef = (0, import_react12.useRef)(() => {
  });
  (0, import_react12.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          document.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          document.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("click", handleClickRef.current);
    };
  }, [
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react12.useRef)(false);
  (0, import_react12.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-scope/dist/index.module.js
var import_react13 = __toESM(require_react());
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ (0, import_react13.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react13.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react13.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react13.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react13.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        if (!container1.contains(event.relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react13.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react13.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react13.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items2) {
  return items2.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react14 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom3.default.createPortal(/* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/cmdk/node_modules/@radix-ui/react-presence/dist/index.module.js
var import_react15 = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react15.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react15.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react15.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react15.useState)();
  const stylesRef = (0, import_react15.useRef)({});
  const prevPresentRef = (0, import_react15.useRef)(present);
  const prevAnimationNameRef = (0, import_react15.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react15.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom4.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react15.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-guards/dist/index.module.js
var import_react16 = __toESM(require_react());
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react16.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React37 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var React35 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar2 = createSidecarMedium();

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing2 = function() {
  return;
};
var RemoveScroll2 = React35.forwardRef(function(props, parentRef) {
  var ref = React35.useRef(null);
  var _a = React35.useState({
    onScrollCapture: nothing2,
    onWheelCapture: nothing2,
    onTouchMoveCapture: nothing2
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React35.createElement(
    React35.Fragment,
    null,
    enabled && React35.createElement(SideCar2, { sideCar: effectCar2, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React35.cloneElement(React35.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React35.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll2.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll2.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React36 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported2 = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported2 = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported2 = false;
  }
}
var options;
var nonPassive2 = passiveSupported2 ? { passive: false } : false;

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var elementCouldBeVScrolled2 = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowY !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowY === "visible");
};
var elementCouldBeHScrolled2 = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowX !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowX === "visible");
};
var locationCouldBeScrolled2 = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled2(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables2(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables2 = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables2 = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled2 = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled2(node) : elementCouldBeHScrolled2(node);
};
var getScrollVariables2 = function(axis, node) {
  return axis === "v" ? getVScrollVariables2(node) : getHScrollVariables2(node);
};
var getDirectionFactor2 = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll2 = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor2(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables2(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled2(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY2 = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY2 = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef2 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare2 = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle2 = function(id3) {
  return "\n  .block-interactivity-".concat(id3, " {pointer-events: none;}\n  .allow-interactivity-").concat(id3, " {pointer-events: all;}\n");
};
var idCounter2 = 0;
var lockStack2 = [];
function RemoveScrollSideCar2(props) {
  var shouldPreventQueue = React36.useRef([]);
  var touchStartRef = React36.useRef([0, 0]);
  var activeAxis = React36.useRef();
  var id3 = React36.useState(idCounter2++)[0];
  var Style2 = React36.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React36.useRef(props);
  React36.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React36.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id3));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef2), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id3));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id3));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id3));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React36.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY2(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled2(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled2(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll2(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React36.useCallback(function(_event) {
    var event = _event;
    if (!lockStack2.length || lockStack2[lockStack2.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY2(event) : getTouchXY2(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare2(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef2).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React36.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React36.useCallback(function(event) {
    touchStartRef.current = getTouchXY2(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React36.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY2(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React36.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY2(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React36.useEffect(function() {
    lockStack2.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive2);
    document.addEventListener("touchmove", shouldPrevent, nonPassive2);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive2);
    return function() {
      lockStack2 = lockStack2.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive2);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive2);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive2);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React36.createElement(
    React36.Fragment,
    null,
    inert ? React36.createElement(Style2, { styles: generateStyle2(id3) }) : null,
    removeScrollBar ? React36.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default2 = exportSidecar(effectCar2, RemoveScrollSideCar2);

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll2 = React37.forwardRef(function(props, ref) {
  return React37.createElement(RemoveScroll2, __assign({}, props, { ref, sideCar: sidecar_default2 }));
});
ReactRemoveScroll2.classNames = RemoveScroll2.classNames;
var Combination_default2 = ReactRemoveScroll2;

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react17.useRef)(null);
  const contentRef = (0, import_react17.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react17.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react17.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react17.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react17.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react17.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react17.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react17.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react17.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react17.createElement)(Combination_default2, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react17.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react17.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react17.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react17.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react17.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react17.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react17.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react17.useRef)(false);
  return /* @__PURE__ */ (0, import_react17.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented)
        hasInteractedOutsideRef.current = true;
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react17.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react17.createElement)(import_react17.Fragment, null, /* @__PURE__ */ (0, import_react17.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react17.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;

// node_modules/cmdk/dist/index.mjs
var t = __toESM(require_react(), 1);
var fe = '[cmdk-list-sizer=""]';
var O = '[cmdk-group=""]';
var U2 = '[cmdk-group-items=""]';
var me = '[cmdk-group-heading=""]';
var W2 = '[cmdk-item=""]';
var ae = `${W2}:not([aria-disabled="true"])`;
var B2 = "cmdk-item-select";
var S = "data-value";
var pe = (r, c) => W(r, c);
var se = t.createContext(void 0);
var A = () => t.useContext(se);
var ie = t.createContext(void 0);
var J2 = () => t.useContext(ie);
var ce = t.createContext(void 0);
var le = t.forwardRef((r, c) => {
  let n = t.useRef(null), o = w(() => {
    var e, s, a2;
    return { search: "", value: (a2 = (s = r.value) != null ? s : (e = r.defaultValue) == null ? void 0 : e.toLowerCase()) != null ? a2 : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), l = w(() => /* @__PURE__ */ new Set()), d = w(() => /* @__PURE__ */ new Map()), f = w(() => /* @__PURE__ */ new Map()), g = w(() => /* @__PURE__ */ new Set()), u2 = ue(r), { label: b, children: p2, value: R, onValueChange: T, filter: I, shouldFilter: C, vimBindings: F = true, ...P } = r, Q = t.useId(), K2 = t.useId(), V = t.useId(), E = Le();
  D2(() => {
    if (R !== void 0) {
      let e = R.trim().toLowerCase();
      o.current.value = e, E(6, Y2), m2.emit();
    }
  }, [R]);
  let m2 = t.useMemo(() => ({ subscribe: (e) => (g.current.add(e), () => g.current.delete(e)), snapshot: () => o.current, setState: (e, s, a2) => {
    var i, v, h;
    if (!Object.is(o.current[e], s)) {
      if (o.current[e] = s, e === "search")
        $(), N(), E(1, j);
      else if (e === "value")
        if (((i = u2.current) == null ? void 0 : i.value) !== void 0) {
          let x = s != null ? s : "";
          (h = (v = u2.current).onValueChange) == null || h.call(v, x);
          return;
        } else
          a2 || E(5, Y2);
      m2.emit();
    }
  }, emit: () => {
    g.current.forEach((e) => e());
  } }), []), M = t.useMemo(() => ({ value: (e, s) => {
    s !== f.current.get(e) && (f.current.set(e, s), o.current.filtered.items.set(e, X3(s)), E(2, () => {
      N(), m2.emit();
    }));
  }, item: (e, s) => (l.current.add(e), s && (d.current.has(s) ? d.current.get(s).add(e) : d.current.set(s, /* @__PURE__ */ new Set([e]))), E(3, () => {
    $(), N(), o.current.value || j(), m2.emit();
  }), () => {
    f.current.delete(e), l.current.delete(e), o.current.filtered.items.delete(e);
    let a2 = k2();
    E(4, () => {
      $(), (a2 == null ? void 0 : a2.getAttribute("id")) === e && j(), m2.emit();
    });
  }), group: (e) => (d.current.has(e) || d.current.set(e, /* @__PURE__ */ new Set()), () => {
    f.current.delete(e), d.current.delete(e);
  }), filter: () => u2.current.shouldFilter, label: b || r["aria-label"], commandRef: n, listId: Q, inputId: V, labelId: K2 }), []);
  function X3(e) {
    var a2, i;
    let s = (i = (a2 = u2.current) == null ? void 0 : a2.filter) != null ? i : pe;
    return e ? s(e, o.current.search) : 0;
  }
  function N() {
    if (!n.current || !o.current.search || u2.current.shouldFilter === false)
      return;
    let e = o.current.filtered.items, s = [];
    o.current.filtered.groups.forEach((i) => {
      let v = d.current.get(i), h = 0;
      v.forEach((x) => {
        let G2 = e.get(x);
        h = Math.max(G2, h);
      }), s.push([i, h]);
    });
    let a2 = n.current.querySelector(fe);
    H2().sort((i, v) => {
      var G2, re;
      let h = i.getAttribute(S), x = v.getAttribute(S);
      return ((G2 = e.get(x)) != null ? G2 : 0) - ((re = e.get(h)) != null ? re : 0);
    }).forEach((i) => {
      let v = i.closest(U2);
      v ? v.appendChild(i.parentElement === v ? i : i.closest(`${U2} > *`)) : a2.appendChild(i.parentElement === a2 ? i : i.closest(`${U2} > *`));
    }), s.sort((i, v) => v[1] - i[1]).forEach((i) => {
      let v = n.current.querySelector(`${O}[${S}="${i[0]}"]`);
      v == null || v.parentElement.appendChild(v);
    });
  }
  function j() {
    let e = H2().find((a2) => !a2.ariaDisabled), s = e == null ? void 0 : e.getAttribute(S);
    m2.setState("value", s || void 0);
  }
  function $() {
    if (!o.current.search || u2.current.shouldFilter === false) {
      o.current.filtered.count = l.current.size;
      return;
    }
    o.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let s of l.current) {
      let a2 = f.current.get(s), i = X3(a2);
      o.current.filtered.items.set(s, i), i > 0 && e++;
    }
    for (let [s, a2] of d.current)
      for (let i of a2)
        if (o.current.filtered.items.get(i) > 0) {
          o.current.filtered.groups.add(s);
          break;
        }
    o.current.filtered.count = e;
  }
  function Y2() {
    var s, a2, i;
    let e = k2();
    e && (((s = e.parentElement) == null ? void 0 : s.firstChild) === e && ((i = (a2 = e.closest(O)) == null ? void 0 : a2.querySelector(me)) == null || i.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function k2() {
    var e;
    return (e = n.current) == null ? void 0 : e.querySelector(`${W2}[aria-selected="true"]`);
  }
  function H2() {
    return Array.from(n.current.querySelectorAll(ae));
  }
  function q(e) {
    let a2 = H2()[e];
    a2 && m2.setState("value", a2.getAttribute(S));
  }
  function z(e) {
    var h;
    let s = k2(), a2 = H2(), i = a2.findIndex((x) => x === s), v = a2[i + e];
    (h = u2.current) != null && h.loop && (v = i + e < 0 ? a2[a2.length - 1] : i + e === a2.length ? a2[0] : a2[i + e]), v && m2.setState("value", v.getAttribute(S));
  }
  function Z(e) {
    let s = k2(), a2 = s == null ? void 0 : s.closest(O), i;
    for (; a2 && !i; )
      a2 = e > 0 ? ye(a2, O) : xe(a2, O), i = a2 == null ? void 0 : a2.querySelector(ae);
    i ? m2.setState("value", i.getAttribute(S)) : z(e);
  }
  let ee = () => q(H2().length - 1), te = (e) => {
    e.preventDefault(), e.metaKey ? ee() : e.altKey ? Z(1) : z(1);
  }, ne = (e) => {
    e.preventDefault(), e.metaKey ? q(0) : e.altKey ? Z(-1) : z(-1);
  };
  return t.createElement("div", { ref: _([n, c]), ...P, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    if ((s = P.onKeyDown) == null || s.call(P, e), !e.defaultPrevented)
      switch (e.key) {
        case "n":
        case "j": {
          F && e.ctrlKey && te(e);
          break;
        }
        case "ArrowDown": {
          te(e);
          break;
        }
        case "p":
        case "k": {
          F && e.ctrlKey && ne(e);
          break;
        }
        case "ArrowUp": {
          ne(e);
          break;
        }
        case "Home": {
          e.preventDefault(), q(0);
          break;
        }
        case "End": {
          e.preventDefault(), ee();
          break;
        }
        case "Enter":
          if (!e.nativeEvent.isComposing) {
            e.preventDefault();
            let a2 = k2();
            if (a2) {
              let i = new Event(B2);
              a2.dispatchEvent(i);
            }
          }
      }
  } }, t.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: Te }, b), t.createElement(ie.Provider, { value: m2 }, t.createElement(se.Provider, { value: M }, p2)));
});
var ve = t.forwardRef((r, c) => {
  var V, E;
  let n = t.useId(), o = t.useRef(null), l = t.useContext(ce), d = A(), f = ue(r), g = (E = (V = f.current) == null ? void 0 : V.forceMount) != null ? E : l == null ? void 0 : l.forceMount;
  D2(() => d.item(n, l == null ? void 0 : l.id), []);
  let u2 = de(n, o, [r.value, r.children, o]), b = J2(), p2 = L((m2) => m2.value && m2.value === u2.current), R = L((m2) => g || d.filter() === false ? true : m2.search ? m2.filtered.items.get(n) > 0 : true);
  t.useEffect(() => {
    let m2 = o.current;
    if (!(!m2 || r.disabled))
      return m2.addEventListener(B2, T), () => m2.removeEventListener(B2, T);
  }, [R, r.onSelect, r.disabled]);
  function T() {
    var m2, M;
    I(), (M = (m2 = f.current).onSelect) == null || M.call(m2, u2.current);
  }
  function I() {
    b.setState("value", u2.current, true);
  }
  if (!R)
    return null;
  let { disabled: C, value: F, onSelect: P, forceMount: Q, ...K2 } = r;
  return t.createElement("div", { ref: _([o, c]), ...K2, id: n, "cmdk-item": "", role: "option", "aria-disabled": C || void 0, "aria-selected": p2 || void 0, "data-disabled": C || void 0, "data-selected": p2 || void 0, onPointerMove: C ? void 0 : I, onClick: C ? void 0 : T }, r.children);
});
var ge = t.forwardRef((r, c) => {
  let { heading: n, children: o, forceMount: l, ...d } = r, f = t.useId(), g = t.useRef(null), u2 = t.useRef(null), b = t.useId(), p2 = A(), R = L((C) => l || p2.filter() === false ? true : C.search ? C.filtered.groups.has(f) : true);
  D2(() => p2.group(f), []), de(f, g, [r.value, r.heading, u2]);
  let T = t.useMemo(() => ({ id: f, forceMount: l }), [l]), I = t.createElement(ce.Provider, { value: T }, o);
  return t.createElement("div", { ref: _([g, c]), ...d, "cmdk-group": "", role: "presentation", hidden: R ? void 0 : true }, n && t.createElement("div", { ref: u2, "cmdk-group-heading": "", "aria-hidden": true, id: b }, n), t.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? b : void 0 }, I));
});
var Re = t.forwardRef((r, c) => {
  let { alwaysRender: n, ...o } = r, l = t.useRef(null), d = L((f) => !f.search);
  return !n && !d ? null : t.createElement("div", { ref: _([l, c]), ...o, "cmdk-separator": "", role: "separator" });
});
var be = t.forwardRef((r, c) => {
  let { onValueChange: n, ...o } = r, l = r.value != null, d = J2(), f = L((p2) => p2.search), g = L((p2) => p2.value), u2 = A(), b = t.useMemo(() => {
    var R;
    let p2 = (R = u2.commandRef.current) == null ? void 0 : R.querySelector(`${W2}[${S}="${g}"]`);
    return p2 == null ? void 0 : p2.getAttribute("id");
  }, [g, u2.commandRef]);
  return t.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), t.createElement("input", { ref: c, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": u2.listId, "aria-labelledby": u2.labelId, "aria-activedescendant": b, id: u2.inputId, type: "text", value: l ? r.value : f, onChange: (p2) => {
    l || d.setState("search", p2.target.value), n == null || n(p2.target.value);
  } });
});
var he = t.forwardRef((r, c) => {
  let { children: n, ...o } = r, l = t.useRef(null), d = t.useRef(null), f = A();
  return t.useEffect(() => {
    if (d.current && l.current) {
      let g = d.current, u2 = l.current, b, p2 = new ResizeObserver(() => {
        b = requestAnimationFrame(() => {
          let R = g.offsetHeight;
          u2.style.setProperty("--cmdk-list-height", R.toFixed(1) + "px");
        });
      });
      return p2.observe(g), () => {
        cancelAnimationFrame(b), p2.unobserve(g);
      };
    }
  }, []), t.createElement("div", { ref: _([l, c]), ...o, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: f.listId, "aria-labelledby": f.inputId }, t.createElement("div", { ref: d, "cmdk-list-sizer": "" }, n));
});
var Ee = t.forwardRef((r, c) => {
  let { open: n, onOpenChange: o, overlayClassName: l, contentClassName: d, container: f, ...g } = r;
  return t.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: n, onOpenChange: o }, t.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: f }, t.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { "cmdk-overlay": "", className: l }), t.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { "aria-label": r.label, "cmdk-dialog": "", className: d }, t.createElement(le, { ref: c, ...g }))));
});
var Se = t.forwardRef((r, c) => {
  let n = t.useRef(true), o = L((l) => l.filtered.count === 0);
  return t.useEffect(() => {
    n.current = false;
  }, []), n.current || !o ? null : t.createElement("div", { ref: c, ...r, "cmdk-empty": "", role: "presentation" });
});
var Ce = t.forwardRef((r, c) => {
  let { progress: n, children: o, ...l } = r;
  return t.createElement("div", { ref: c, ...l, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, t.createElement("div", { "aria-hidden": true }, o));
});
var we = Object.assign(le, { List: he, Item: ve, Input: be, Group: ge, Separator: Re, Dialog: Ee, Empty: Se, Loading: Ce });
function ye(r, c) {
  let n = r.nextElementSibling;
  for (; n; ) {
    if (n.matches(c))
      return n;
    n = n.nextElementSibling;
  }
}
function xe(r, c) {
  let n = r.previousElementSibling;
  for (; n; ) {
    if (n.matches(c))
      return n;
    n = n.previousElementSibling;
  }
}
function ue(r) {
  let c = t.useRef(r);
  return D2(() => {
    c.current = r;
  }), c;
}
var D2 = typeof window == "undefined" ? t.useEffect : t.useLayoutEffect;
function w(r) {
  let c = t.useRef();
  return c.current === void 0 && (c.current = r()), c;
}
function _(r) {
  return (c) => {
    r.forEach((n) => {
      typeof n == "function" ? n(c) : n != null && (n.current = c);
    });
  };
}
function L(r) {
  let c = J2(), n = () => r(c.snapshot());
  return t.useSyncExternalStore(c.subscribe, n, n);
}
function de(r, c, n) {
  let o = t.useRef(), l = A();
  return D2(() => {
    var f;
    let d = (() => {
      var g;
      for (let u2 of n) {
        if (typeof u2 == "string")
          return u2.trim().toLowerCase();
        if (typeof u2 == "object" && "current" in u2)
          return u2.current ? (g = u2.current.textContent) == null ? void 0 : g.trim().toLowerCase() : o.current;
      }
    })();
    l.value(r, d), (f = c.current) == null || f.setAttribute(S, d), o.current = d;
  }), o;
}
var Le = () => {
  let [r, c] = t.useState(), n = w(() => /* @__PURE__ */ new Map());
  return D2(() => {
    n.current.forEach((o) => o()), n.current = /* @__PURE__ */ new Map();
  }, [r]), (o, l) => {
    n.current.set(o, l), c({});
  };
};
var Te = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// app/components/ui/command.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\command.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\command.tsx"
  );
  import.meta.hot.lastModified = "1733136384535.9375";
}
var Command = React38.forwardRef(_c51 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we, { ref, className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c211 = Command;
Command.displayName = we.displayName;
var CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Dialog2, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DialogContent2, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c311 = CommandDialog;
var CommandInput = React38.forwardRef(_c410 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Input, { ref, className: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className), ...props }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c55 = CommandInput;
CommandInput.displayName = we.Input.displayName;
var CommandList = React38.forwardRef(_c65 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.List, { ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c75 = CommandList;
CommandList.displayName = we.List.displayName;
var CommandEmpty = React38.forwardRef(_c85 = (props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Empty, { ref, className: "py-6 text-center text-sm", ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 60,
  columnNumber: 61
}, this));
_c95 = CommandEmpty;
CommandEmpty.displayName = we.Empty.displayName;
var CommandGroup = React38.forwardRef(_c105 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Group, { ref, className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c113 = CommandGroup;
CommandGroup.displayName = we.Group.displayName;
var CommandSeparator = React38.forwardRef(_c123 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c133 = CommandSeparator;
CommandSeparator.displayName = we.Separator.displayName;
var CommandItem = React38.forwardRef(_c143 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(we.Item, { ref, className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 78,
  columnNumber: 12
}, this));
_c153 = CommandItem;
CommandItem.displayName = we.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
};
_c163 = CommandShortcut;
CommandShortcut.displayName = "CommandShortcut";
var _c51;
var _c211;
var _c311;
var _c410;
var _c55;
var _c65;
var _c75;
var _c85;
var _c95;
var _c105;
var _c113;
var _c123;
var _c133;
var _c143;
var _c153;
var _c163;
$RefreshReg$(_c51, "Command$React.forwardRef");
$RefreshReg$(_c211, "Command");
$RefreshReg$(_c311, "CommandDialog");
$RefreshReg$(_c410, "CommandInput$React.forwardRef");
$RefreshReg$(_c55, "CommandInput");
$RefreshReg$(_c65, "CommandList$React.forwardRef");
$RefreshReg$(_c75, "CommandList");
$RefreshReg$(_c85, "CommandEmpty$React.forwardRef");
$RefreshReg$(_c95, "CommandEmpty");
$RefreshReg$(_c105, "CommandGroup$React.forwardRef");
$RefreshReg$(_c113, "CommandGroup");
$RefreshReg$(_c123, "CommandSeparator$React.forwardRef");
$RefreshReg$(_c133, "CommandSeparator");
$RefreshReg$(_c143, "CommandItem$React.forwardRef");
$RefreshReg$(_c153, "CommandItem");
$RefreshReg$(_c163, "CommandShortcut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/search-command.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\search-command.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\search-command.tsx"
  );
  import.meta.hot.lastModified = "1733136384532.9392";
}
function SearchCommand() {
  _s10();
  const [open, setOpen] = React39.useState(false);
  React39.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open2) => !open2);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DialogTitle2, { className: "sr-only", children: "Search Commands" }, void 0, false, {
      fileName: "app/components/search-command.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Command, { className: "rounded-lg border shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandInput, { placeholder: "Type a command or search..." }, void 0, false, {
        fileName: "app/components/search-command.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandList, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandEmpty, { children: "No results found." }, void 0, false, {
          fileName: "app/components/search-command.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandGroup, { heading: "Suggestions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Calendar, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Calendar" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FolderPlus, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "New Project" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 52,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandShortcut, { children: "\u2318N" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FileText, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "New Document" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandShortcut, { children: "\u2318D" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/search-command.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandSeparator, {}, void 0, false, {
          fileName: "app/components/search-command.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandGroup, { heading: "Settings", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(User, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Profile" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandShortcut, { children: "\u2318P" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CreditCard, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Billing" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandShortcut, { children: "\u2318B" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Settings, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Settings" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandShortcut, { children: "\u2318S" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/search-command.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandSeparator, {}, void 0, false, {
          fileName: "app/components/search-command.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandGroup, { heading: "Quick Actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Hash, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Add Tag" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandShortcut, { children: "\u2318T" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Tags, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Add Label" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CommandShortcut, { children: "\u2318L" }, void 0, false, {
              fileName: "app/components/search-command.tsx",
              lineNumber: 89,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/search-command.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/search-command.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/search-command.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/search-command.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/search-command.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s10(SearchCommand, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c56 = SearchCommand;
var _c56;
$RefreshReg$(_c56, "SearchCommand");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/settings-command.tsx
var React40 = __toESM(require_react(), 1);

// app/components/settings/account-settings.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\settings\\\\account-settings.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\settings\\account-settings.tsx"
  );
  import.meta.hot.lastModified = "1733136384533.9395";
}
function AccountSettings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-lg font-medium", children: "Account Settings" }, void 0, false, {
        fileName: "app/components/settings/account-settings.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Manage your account settings and preferences." }, void 0, false, {
        fileName: "app/components/settings/account-settings.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/account-settings.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Separator4, {}, void 0, false, {
      fileName: "app/components/settings/account-settings.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "name", className: "text-sm font-medium", children: "Name" }, void 0, false, {
          fileName: "app/components/settings/account-settings.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Input, { id: "name", defaultValue: "John Doe" }, void 0, false, {
          fileName: "app/components/settings/account-settings.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/account-settings.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }, void 0, false, {
          fileName: "app/components/settings/account-settings.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Input, { id: "email", type: "email", defaultValue: "john@example.com" }, void 0, false, {
          fileName: "app/components/settings/account-settings.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/account-settings.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { children: "Save Changes" }, void 0, false, {
        fileName: "app/components/settings/account-settings.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/account-settings.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/settings/account-settings.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c57 = AccountSettings;
var _c57;
$RefreshReg$(_c57, "AccountSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/settings/app-settings.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\settings\\\\app-settings.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\settings\\app-settings.tsx"
  );
  import.meta.hot.lastModified = "1733136384533.9395";
}
function AppSettings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "text-lg font-medium", children: "App Settings" }, void 0, false, {
        fileName: "app/components/settings/app-settings.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Customize your app experience." }, void 0, false, {
        fileName: "app/components/settings/app-settings.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/app-settings.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Separator4, {}, void 0, false, {
      fileName: "app/components/settings/app-settings.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "font-medium", children: "Dark Mode" }, void 0, false, {
            fileName: "app/components/settings/app-settings.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Toggle dark mode on or off" }, void 0, false, {
            fileName: "app/components/settings/app-settings.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/settings/app-settings.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { variant: "outline", children: "Toggle" }, void 0, false, {
          fileName: "app/components/settings/app-settings.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/app-settings.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "font-medium", children: "Compact Mode" }, void 0, false, {
            fileName: "app/components/settings/app-settings.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Make the UI more compact" }, void 0, false, {
            fileName: "app/components/settings/app-settings.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/settings/app-settings.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { variant: "outline", children: "Toggle" }, void 0, false, {
          fileName: "app/components/settings/app-settings.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/app-settings.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/app-settings.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/settings/app-settings.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c58 = AppSettings;
var _c58;
$RefreshReg$(_c58, "AppSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/settings/notification-settings.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\settings\\\\notification-settings.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\settings\\notification-settings.tsx"
  );
  import.meta.hot.lastModified = "1733136384533.9395";
}
function NotificationSettings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-lg font-medium", children: "Notification Settings" }, void 0, false, {
        fileName: "app/components/settings/notification-settings.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Manage how you receive notifications." }, void 0, false, {
        fileName: "app/components/settings/notification-settings.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/notification-settings.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Separator4, {}, void 0, false, {
      fileName: "app/components/settings/notification-settings.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "font-medium", children: "Email Notifications" }, void 0, false, {
            fileName: "app/components/settings/notification-settings.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Receive notifications via email" }, void 0, false, {
            fileName: "app/components/settings/notification-settings.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/settings/notification-settings.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Button, { variant: "outline", children: "Enable" }, void 0, false, {
          fileName: "app/components/settings/notification-settings.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/notification-settings.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "font-medium", children: "Push Notifications" }, void 0, false, {
            fileName: "app/components/settings/notification-settings.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Receive push notifications" }, void 0, false, {
            fileName: "app/components/settings/notification-settings.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/settings/notification-settings.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Button, { variant: "outline", children: "Enable" }, void 0, false, {
          fileName: "app/components/settings/notification-settings.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/notification-settings.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/notification-settings.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/settings/notification-settings.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c59 = NotificationSettings;
var _c59;
$RefreshReg$(_c59, "NotificationSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/settings/security-settings.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\settings\\\\security-settings.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\settings\\security-settings.tsx"
  );
  import.meta.hot.lastModified = "1733136384534.938";
}
function SecuritySettings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "text-lg font-medium", children: "Security Settings" }, void 0, false, {
        fileName: "app/components/settings/security-settings.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Manage your security preferences." }, void 0, false, {
        fileName: "app/components/settings/security-settings.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/security-settings.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Separator4, {}, void 0, false, {
      fileName: "app/components/settings/security-settings.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "current-password", className: "text-sm font-medium", children: "Current Password" }, void 0, false, {
          fileName: "app/components/settings/security-settings.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Input, { id: "current-password", type: "password" }, void 0, false, {
          fileName: "app/components/settings/security-settings.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/security-settings.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "new-password", className: "text-sm font-medium", children: "New Password" }, void 0, false, {
          fileName: "app/components/settings/security-settings.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Input, { id: "new-password", type: "password" }, void 0, false, {
          fileName: "app/components/settings/security-settings.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/security-settings.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "confirm-password", className: "text-sm font-medium", children: "Confirm New Password" }, void 0, false, {
          fileName: "app/components/settings/security-settings.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Input, { id: "confirm-password", type: "password" }, void 0, false, {
          fileName: "app/components/settings/security-settings.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/security-settings.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { children: "Update Password" }, void 0, false, {
        fileName: "app/components/settings/security-settings.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/security-settings.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/settings/security-settings.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c60 = SecuritySettings;
var _c60;
$RefreshReg$(_c60, "SecuritySettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/settings-command.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\settings-command.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\settings-command.tsx"
  );
  import.meta.hot.lastModified = "1733136384533.9395";
}
var personalSections = [{
  id: "account",
  label: "My Account",
  icon: CircleUser,
  component: AccountSettings
}, {
  id: "settings",
  label: "My Settings",
  icon: Settings,
  component: AppSettings
}, {
  id: "notifications",
  label: "My Notifications",
  icon: Bell,
  component: NotificationSettings
}, {
  id: "security",
  label: "Security & Data",
  icon: KeyRound,
  component: SecuritySettings
}];
function SettingsCommand({
  open,
  onOpenChange
}) {
  _s11();
  const [activeSection, setActiveSection] = React40.useState("account");
  React40.useEffect(() => {
    const down = (e) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange?.(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);
  const ActiveComponent = personalSections.find((s) => s.id === activeSection)?.component || AccountSettings;
  const activeTitle = personalSections.find((s) => s.id === activeSection)?.label || "Settings";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DialogContent2, { className: "max-w-[1200px] h-[85vh] p-0 gap-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DialogHeader, { className: "sr-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DialogTitle2, { children: activeTitle }, void 0, false, {
      fileName: "app/components/settings-command.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/settings-command.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex h-full overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-60 bg-muted/50 overflow-y-auto flex-shrink-0 rounded-l-xl border-r", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-2 pt-4 pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-[11px] font-semibold text-muted-foreground mb-1.5", children: "SETTINGS" }, void 0, false, {
          fileName: "app/components/settings-command.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("nav", { className: "mt-4 space-y-0.5 px-1", children: personalSections.map((section) => {
          const Icon = section.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { className: `w-full flex items-center px-2 py-1.5 h-8 text-sm font-medium rounded-lg transition-colors ${activeSection === section.id ? "bg-background text-foreground hover:bg-background" : "text-muted-foreground hover:bg-background/50 hover:text-foreground"}`, onClick: () => setActiveSection(section.id), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { className: "h-4 w-4 mr-2 shrink-0" }, void 0, false, {
              fileName: "app/components/settings-command.tsx",
              lineNumber: 85,
              columnNumber: 25
            }, this),
            section.label
          ] }, section.id, true, {
            fileName: "app/components/settings-command.tsx",
            lineNumber: 84,
            columnNumber: 26
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/settings-command.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings-command.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/settings-command.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/settings-command.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex-1 min-h-0 bg-background rounded-r-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "max-w-3xl mx-auto p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ActiveComponent, {}, void 0, false, {
        fileName: "app/components/settings-command.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/settings-command.tsx",
        lineNumber: 97,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/settings-command.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/settings-command.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings-command.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/settings-command.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/settings-command.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s11(SettingsCommand, "JI2F+SRGsOcU3nN56s5uiWCx03w=");
_c61 = SettingsCommand;
var _c61;
$RefreshReg$(_c61, "SettingsCommand");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav-main.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\nav-main.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s12 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\nav-main.tsx"
  );
  import.meta.hot.lastModified = "1733136384531.9402";
}
var items = [{
  title: "Search",
  url: "#",
  icon: Search,
  isSearch: true
}, {
  title: "Ask AI",
  url: "/askai",
  icon: Sparkles
}, {
  title: "Home",
  url: "/",
  icon: House
}, {
  title: "Archive",
  url: "#",
  icon: Archive,
  isArchive: true
}, {
  title: "Settings",
  url: "#",
  icon: Settings,
  isSettings: true
}];
function NavMain() {
  _s12();
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = React41.useState(false);
  const [archiveOpen, setArchiveOpen] = React41.useState(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SearchCommand, {}, void 0, false, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ArchiveCommand, { open: archiveOpen, onOpenChange: setArchiveOpen }, void 0, false, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SettingsCommand, { open: settingsOpen, onOpenChange: setSettingsOpen }, void 0, false, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarMenuItem, { children: item.isSearch ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarMenuButton, { onClick: () => {
      const event = new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true
      });
      document.dispatchEvent(event);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(item.icon, {}, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: item.title }, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 64,
      columnNumber: 30
    }, this) : item.isArchive ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarMenuButton, { onClick: () => setArchiveOpen(true), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(item.icon, {}, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: item.title }, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 73,
      columnNumber: 55
    }, this) : item.isSettings ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarMenuButton, { onClick: () => setSettingsOpen(true), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(item.icon, {}, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: item.title }, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 76,
      columnNumber: 56
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Link, { to: item.url, className: location.pathname === item.url ? "data-[active=true]" : "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(item.icon, {}, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 81,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: item.title }, void 0, false, {
        fileName: "app/components/nav-main.tsx",
        lineNumber: 82,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 79,
      columnNumber: 38
    }, this) }, item.title, false, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 63,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/components/nav-main.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav-main.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s12(NavMain, "lgC9bBeQ7Cl31rEmBU1KmAhmu0Y=", false, function() {
  return [useLocation];
});
_c66 = NavMain;
var _c66;
$RefreshReg$(_c66, "NavMain");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav-workspaces.tsx
var React47 = __toESM(require_react(), 1);

// app/components/add-library-item.tsx
var React44 = __toESM(require_react(), 1);

// app/components/ui/tabs.tsx
var React43 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var React42 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
"use client";
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = React42.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = React42.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeTabs);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Root3,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME4 = "TabsTrigger";
var TabsTrigger = React42.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME4, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key))
                context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger.displayName = TRIGGER_NAME4;
var CONTENT_NAME6 = "TabsContent";
var TabsContent = React42.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME6, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React42.useRef(isSelected);
    React42.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent.displayName = CONTENT_NAME6;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root24 = Tabs;
var List = TabsList;
var Trigger4 = TabsTrigger;
var Content4 = TabsContent;

// app/components/ui/tabs.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\tabs.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\tabs.tsx"
  );
  import.meta.hot.lastModified = "1733136384538.9355";
}
var Tabs2 = Root24;
var TabsList2 = React43.forwardRef(_c67 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(List, { ref, className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/tabs.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c213 = TabsList2;
TabsList2.displayName = List.displayName;
var TabsTrigger2 = React43.forwardRef(_c312 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Trigger4, { ref, className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className), ...props }, void 0, false, {
  fileName: "app/components/ui/tabs.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c411 = TabsTrigger2;
TabsTrigger2.displayName = Trigger4.displayName;
var TabsContent2 = React43.forwardRef(_c510 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Content4, { ref, className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/tabs.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c68 = TabsContent2;
TabsContent2.displayName = Content4.displayName;
var _c67;
var _c213;
var _c312;
var _c411;
var _c510;
var _c68;
$RefreshReg$(_c67, "TabsList$React.forwardRef");
$RefreshReg$(_c213, "TabsList");
$RefreshReg$(_c312, "TabsTrigger$React.forwardRef");
$RefreshReg$(_c411, "TabsTrigger");
$RefreshReg$(_c510, "TabsContent$React.forwardRef");
$RefreshReg$(_c68, "TabsContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/add-library-item.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\add-library-item.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s13 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\add-library-item.tsx"
  );
  import.meta.hot.lastModified = "1733136384528.9414";
}
function AddLibraryItem({
  open,
  onOpenChange,
  onAdd
}) {
  _s13();
  const [url, setUrl] = React44.useState("");
  const [dragActive, setDragActive] = React44.useState(false);
  const inputFileRef = React44.useRef(null);
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  const handleFile = (file) => {
    onAdd?.({
      type: "file",
      data: file
    });
    onOpenChange(false);
  };
  const handleUrl = (e) => {
    e.preventDefault();
    if (url) {
      onAdd?.({
        type: "url",
        data: url
      });
      setUrl("");
      onOpenChange(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DialogContent2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DialogTitle2, { children: "Add to Library" }, void 0, false, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(DialogDescription2, { children: "Add files or URLs to your library for easy access." }, void 0, false, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/add-library-item.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Tabs2, { defaultValue: "file", className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabsList2, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabsTrigger2, { value: "file", children: "File Upload" }, void 0, false, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabsTrigger2, { value: "url", children: "URL" }, void 0, false, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabsContent2, { value: "file", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: `relative grid gap-4 ${dragActive ? "cursor-copy" : "cursor-pointer"}`, onClick: () => inputFileRef.current?.click(), onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: `flex min-h-[150px] flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${dragActive ? "border-primary/50 bg-primary/5" : "border-muted-foreground/25"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FileUp, { className: "mb-4 h-8 w-8 text-muted-foreground" }, void 0, false, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mb-2 text-sm font-medium", children: "Drag & drop files here or click to browse" }, void 0, false, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "Supported file types: PDF, DOC, DOCX, TXT" }, void 0, false, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { ref: inputFileRef, type: "file", className: "hidden", accept: ".pdf,.doc,.docx,.txt", onChange: handleChange }, void 0, false, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabsContent2, { value: "url", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("form", { onSubmit: handleUrl, className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Label, { htmlFor: "url", children: "URL" }, void 0, false, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Globe, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "app/components/add-library-item.tsx",
              lineNumber: 113,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Input, { id: "url", type: "url", placeholder: "https://example.com", className: "pl-8", value: url, onChange: (e) => setUrl(e.target.value) }, void 0, false, {
              fileName: "app/components/add-library-item.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/add-library-item.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Button, { type: "submit", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Upload, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/add-library-item.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "sr-only", children: "Add URL" }, void 0, false, {
              fileName: "app/components/add-library-item.tsx",
              lineNumber: 118,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/add-library-item.tsx",
            lineNumber: 116,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/add-library-item.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 109,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/add-library-item.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/add-library-item.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Separator4, {}, void 0, false, {
      fileName: "app/components/add-library-item.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-xs text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "By adding items to the library, you agree to our terms of service." }, void 0, false, {
      fileName: "app/components/add-library-item.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/add-library-item.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/add-library-item.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/add-library-item.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s13(AddLibraryItem, "LLIkczHH2lrLQqF478w7/3/XEsg=");
_c69 = AddLibraryItem;
var _c69;
$RefreshReg$(_c69, "AddLibraryItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/use-workspaces.tsx
var React45 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\use-workspaces.tsx"
  );
  import.meta.hot.lastModified = "1733136384541.9343";
}
function sortByName(items2) {
  return [...items2].sort((a2, b) => a2.name.localeCompare(b.name));
}
var workspaces = [
  {
    id: "daily-journal",
    name: "Daily Journal & Reflection",
    emoji: "\u{1F4D4}",
    pages: [
      {
        id: "journal-2024",
        name: "2024 Entries",
        emoji: "\u{1F4C5}",
        pages: [
          {
            id: "march-2024",
            name: "March 2024",
            emoji: "\u{1F338}"
          }
        ]
      }
    ]
  },
  {
    id: "health-tracker",
    name: "Health & Wellness Tracker",
    emoji: "\u{1F34F}",
    pages: [
      {
        id: "workout-log",
        name: "Workout Log",
        emoji: "\u{1F4AA}"
      },
      {
        id: "meal-planning",
        name: "Meal Planning",
        emoji: "\u{1F957}"
      }
    ]
  },
  {
    id: "project-notes",
    name: "Project Notes",
    emoji: "\u{1F4DD}",
    pages: [
      {
        id: "active-projects",
        name: "Active Projects",
        emoji: "\u{1F3AF}"
      },
      {
        id: "archived-projects",
        name: "Archived Projects",
        emoji: "\u{1F4E6}"
      }
    ]
  }
];
var listeners4 = /* @__PURE__ */ new Set();
function generateId() {
  return `page-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
function sortPagesRecursively(pages) {
  return sortByName(pages).map((page) => ({
    ...page,
    pages: page.pages ? sortPagesRecursively(page.pages) : void 0
  }));
}
function getSortedWorkspaces() {
  return sortByName(workspaces).map((workspace) => ({
    ...workspace,
    pages: sortPagesRecursively(workspace.pages)
  }));
}
function findAndUpdate(items2, parentId, update) {
  for (const item of items2) {
    if (item.id === parentId) {
      update(item);
      return true;
    }
    if (item.pages) {
      if (findAndUpdate(item.pages, parentId, update)) {
        return true;
      }
    }
  }
  return false;
}
function useWorkspaces() {
  const [data3, setData] = React45.useState(getSortedWorkspaces());
  const { setPageTitle } = usePageTitles();
  const { setEmoji } = usePageEmoji(data3[0]?.id || "");
  React45.useEffect(() => {
    const updateWorkspaces = () => {
      setData(getSortedWorkspaces());
    };
    listeners4.add(updateWorkspaces);
    return () => {
      listeners4.delete(updateWorkspaces);
    };
  }, []);
  const addPage = React45.useCallback((parentId) => {
    const newPage = {
      id: generateId(),
      name: "Untitled",
      emoji: "\u{1F4C4}",
      pages: []
    };
    if (parentId) {
      findAndUpdate(workspaces, parentId, (parent) => {
        if (!parent.pages) {
          parent.pages = [];
        }
        parent.pages.push(newPage);
      });
    } else {
      workspaces.push({
        ...newPage,
        pages: []
      });
    }
    setPageTitle(newPage.id, newPage.name);
    setEmoji(newPage.emoji);
    listeners4.forEach((listener) => listener());
    return newPage;
  }, [setPageTitle, setEmoji]);
  return {
    workspaces: data3,
    addPage
  };
}

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var React46 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
"use client";
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = React46.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open = false, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: React46.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Primitive.div,
          {
            "data-state": getState2(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME5 = "CollapsibleTrigger";
var CollapsibleTrigger = React46.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME5, __scopeCollapsible);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState2(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME5;
var CONTENT_NAME7 = "CollapsibleContent";
var CollapsibleContent = React46.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME7, props.__scopeCollapsible);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME7;
var CollapsibleContentImpl = React46.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME7, __scopeCollapsible);
  const [isPresent, setIsPresent] = React46.useState(present);
  const ref = React46.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = React46.useRef(0);
  const height = heightRef.current;
  const widthRef = React46.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = React46.useRef(isOpen);
  const originalStylesRef = React46.useRef();
  React46.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    Primitive.div,
    {
      "data-state": getState2(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState2(open) {
  return open ? "open" : "closed";
}
var Root6 = Collapsible;

// app/components/ui/collapsible.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\collapsible.tsx"
  );
  import.meta.hot.lastModified = "1733136384535.9375";
}
var Collapsible2 = Root6;
var CollapsibleTrigger2 = CollapsibleTrigger;
var CollapsibleContent2 = CollapsibleContent;

// app/components/nav-workspaces.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\nav-workspaces.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s14 = $RefreshSig$();
var _s22 = $RefreshSig$();
var _s32 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\nav-workspaces.tsx"
  );
  import.meta.hot.lastModified = "1733136384532.9392";
}
var ITEMS_PER_PAGE = 5;
function PageItem({
  page,
  onPageTitleChange,
  basePath = "/pages"
}) {
  _s14();
  const navigate = useNavigate();
  const {
    getPageTitle
  } = usePageTitles();
  const {
    getEmoji
  } = usePageEmoji(page.id);
  const {
    addPage
  } = useWorkspaces();
  const [isPending, startTransition] = React47.useTransition();
  const [isOpen, setIsOpen] = React47.useState(false);
  const hasChildren = page.pages && page.pages.length > 0;
  const title = getPageTitle(page.id, page.name);
  const emoji = getEmoji(page.id) || page.emoji;
  const handleAddPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    startTransition(() => {
      const newPage = addPage(page.id);
      setIsOpen(true);
      navigate(`${basePath}/${newPage.id}`);
    });
  };
  if (!hasChildren) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Link, { to: `${basePath}/${page.id}`, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuSubButton, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: emoji }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: title }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 65,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Collapsible2, { open: isOpen, onOpenChange: setIsOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuItem, { className: "pl-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Link, { to: `${basePath}/${page.id}`, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuButton, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: emoji }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: title }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuAction, { className: "left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90", showOnHover: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ChevronRight, {}, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuAction, { showOnHover: true, onClick: handleAddPage, disabled: isPending, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Plus, {}, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(CollapsibleContent2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuSub, { children: page.pages?.map((subPage) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PageItem, { page: subPage, onPageTitleChange, basePath }, subPage.id, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 92,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav-workspaces.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/nav-workspaces.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s14(PageItem, "IvM9Gur/62WdXnd05sdWN8Xx4lU=", false, function() {
  return [useNavigate, usePageTitles, usePageEmoji, useWorkspaces, React47.useTransition];
});
_c70 = PageItem;
function WorkspaceItem({
  workspace,
  onPageTitleChange,
  basePath = "/pages",
  isExpanded = false
}) {
  _s22();
  const navigate = useNavigate();
  const {
    getPageTitle
  } = usePageTitles();
  const {
    getEmoji
  } = usePageEmoji(workspace.id);
  const {
    addPage
  } = useWorkspaces();
  const [isPending, startTransition] = React47.useTransition();
  const [isOpen, setIsOpen] = React47.useState(isExpanded);
  const title = getPageTitle(workspace.id, workspace.name);
  const emoji = getEmoji(workspace.id) || workspace.emoji;
  React47.useEffect(() => {
    if (isExpanded) {
      setIsOpen(true);
    }
  }, [isExpanded]);
  const handleAddPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    startTransition(() => {
      const newPage = addPage(workspace.id);
      setIsOpen(true);
      navigate(`${basePath}/${newPage.id}`);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Collapsible2, { open: isOpen, onOpenChange: setIsOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuItem, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Link, { to: `${basePath}/${workspace.id}`, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuButton, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: emoji }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: title }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 140,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    workspace.pages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuAction, { className: "left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90", showOnHover: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ChevronRight, {}, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 147,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 146,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 145,
      columnNumber: 40
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuAction, { showOnHover: true, onClick: handleAddPage, disabled: isPending, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Plus, {}, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 151,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(CollapsibleContent2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuSub, { children: workspace.pages.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PageItem, { page, onPageTitleChange, basePath }, page.id, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 155,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 154,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav-workspaces.tsx",
    lineNumber: 138,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/nav-workspaces.tsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s22(WorkspaceItem, "WfBWQ/KipuFkzHwtZqSiugKfDCY=", false, function() {
  return [useNavigate, usePageTitles, usePageEmoji, useWorkspaces, React47.useTransition];
});
_c214 = WorkspaceItem;
function NavWorkspaces({
  onPageTitleChange
}) {
  _s32();
  const {
    isMobile
  } = useSidebar();
  const navigate = useNavigate();
  const [addLibraryOpen, setAddLibraryOpen] = React47.useState(false);
  const {
    workspaces: workspaces2,
    addPage
  } = useWorkspaces();
  const [isPending, startTransition] = React47.useTransition();
  const [visibleItems, setVisibleItems] = React47.useState(ITEMS_PER_PAGE);
  const handleAddLibraryItem = (item) => {
    console.log("Adding library item:", item);
  };
  const handleCreatePage = React47.useCallback(() => {
    startTransition(() => {
      const newPage = addPage();
      navigate(`/pages/${newPage.id}`);
    });
  }, [addPage, navigate]);
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };
  const visibleWorkspaces = workspaces2.slice(0, visibleItems);
  const hasMore = visibleItems < workspaces2.length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AddLibraryItem, { open: addLibraryOpen, onOpenChange: setAddLibraryOpen, onAdd: handleAddLibraryItem }, void 0, false, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarGroupLabel, { children: "Pages" }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenu, { children: [
        visibleWorkspaces.map((workspace) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(WorkspaceItem, { workspace, onPageTitleChange }, workspace.id, false, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 203,
          columnNumber: 49
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuItem, { children: hasMore ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuButton, { className: "text-sidebar-foreground/70", onClick: handleLoadMore, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 206,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: [
            "Show More (",
            workspaces2.length - visibleItems,
            " remaining)"
          ] }, void 0, true, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 207,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 205,
          columnNumber: 26
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuButton, { className: "text-sidebar-foreground/70", onClick: handleCreatePage, disabled: isPending, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 209,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: isPending ? "Creating..." : "Add Page" }, void 0, false, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 210,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 208,
          columnNumber: 40
        }, this) }, void 0, false, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarGroupLabel, { children: "Library" }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenu, { children: [
        visibleWorkspaces.map((workspace) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(WorkspaceItem, { workspace, onPageTitleChange, basePath: "/library" }, workspace.id, false, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 221,
          columnNumber: 49
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuItem, { children: hasMore ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuButton, { className: "text-sidebar-foreground/70", onClick: handleLoadMore, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 224,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: [
            "Show More (",
            workspaces2.length - visibleItems,
            " remaining)"
          ] }, void 0, true, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 225,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 223,
          columnNumber: 26
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SidebarMenuButton, { className: "text-sidebar-foreground/70", onClick: () => setAddLibraryOpen(true), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 227,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: "Add to Library" }, void 0, false, {
            fileName: "app/components/nav-workspaces.tsx",
            lineNumber: 228,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 226,
          columnNumber: 40
        }, this) }, void 0, false, {
          fileName: "app/components/nav-workspaces.tsx",
          lineNumber: 222,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/nav-workspaces.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-workspaces.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav-workspaces.tsx",
    lineNumber: 196,
    columnNumber: 10
  }, this);
}
_s32(NavWorkspaces, "gNde3B/C9IjZyKOTUnCD8VZXYR8=", false, function() {
  return [useSidebar, useNavigate, useWorkspaces, React47.useTransition];
});
_c313 = NavWorkspaces;
var _c70;
var _c214;
var _c313;
$RefreshReg$(_c70, "PageItem");
$RefreshReg$(_c214, "WorkspaceItem");
$RefreshReg$(_c313, "NavWorkspaces");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/token-usage.tsx
var React49 = __toESM(require_react(), 1);

// app/components/upgrade-dialog.tsx
var React48 = __toESM(require_react(), 1);
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\upgrade-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s15 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\upgrade-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384539.9348";
}
var plans = [{
  id: "monthly",
  name: "Monthly",
  price: 21,
  interval: "month",
  tokens: "Unlimited"
}, {
  id: "yearly",
  name: "Yearly",
  price: 17,
  interval: "year",
  tokens: "Unlimited",
  featured: true,
  savings: "Save 20%"
}];
var features = {
  free: ["50K AI tokens per month", "Basic AI assistance", "Standard response time", "Community support"],
  pro: ["Unlimited AI tokens", "Advanced AI models & features", "Priority response time", "Real-time AI analysis", "Custom AI training", "Priority support", "Early access to new features", "API access"]
};
function UpgradeDialog({
  open,
  onOpenChange
}) {
  _s15();
  const [selectedPlan, setSelectedPlan] = React48.useState("yearly");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DialogContent2, { className: "max-w-3xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DialogTitle2, { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Sparkles, { className: "h-6 w-6 text-primary" }, void 0, false, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-2xl font-bold", children: "Upgrade to Pro" }, void 0, false, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-base font-normal text-muted-foreground", children: "Unlock unlimited AI capabilities and take your work to the next level" }, void 0, false, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/upgrade-dialog.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/upgrade-dialog.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-8 flex justify-center gap-4", children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { onClick: () => setSelectedPlan(plan.id), className: cn("group relative rounded-xl border px-6 py-3 text-left transition-all hover:border-primary/50", selectedPlan === plan.id ? "border-primary bg-primary/5" : "border-border", plan.featured && "border-primary"), children: [
        plan.featured && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute -top-2.5 right-4 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: plan.savings }, void 0, false, {
          fileName: "app/components/upgrade-dialog.tsx",
          lineNumber: 70,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-lg font-medium", children: plan.name }, void 0, false, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: [
            "$",
            plan.price,
            "/",
            plan.interval
          ] }, void 0, true, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/upgrade-dialog.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, plan.id, true, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 69,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-8 grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "rounded-xl border border-border p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-lg font-medium", children: "Free" }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-3xl font-bold", children: "$0" }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-sm text-muted-foreground", children: "For individuals just getting started" }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "space-y-4", children: features.free.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Check, { className: "mt-0.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-sm", children: feature }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 96,
              columnNumber: 21
            }, this)
          ] }, feature, true, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 94,
            columnNumber: 47
          }, this)) }, void 0, false, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/upgrade-dialog.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative rounded-xl border border-primary bg-primary/5 p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute -top-3 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground", children: "Most Popular" }, void 0, false, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-lg font-medium", children: "Pro" }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 107,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 flex items-baseline gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-3xl font-bold", children: [
                "$",
                selectedPlan === "yearly" ? "17" : "21"
              ] }, void 0, true, {
                fileName: "app/components/upgrade-dialog.tsx",
                lineNumber: 109,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: [
                "per ",
                selectedPlan === "yearly" ? "year" : "month"
              ] }, void 0, true, {
                fileName: "app/components/upgrade-dialog.tsx",
                lineNumber: 112,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-sm text-muted-foreground", children: "Everything in Free, plus..." }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "space-y-4", children: features.pro.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-0.5 rounded-full bg-primary/10 p-0.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Check, { className: "h-3 w-3 text-primary" }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 123,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 122,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-sm font-medium", children: feature }, void 0, false, {
              fileName: "app/components/upgrade-dialog.tsx",
              lineNumber: 125,
              columnNumber: 21
            }, this)
          ] }, feature, true, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 121,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/upgrade-dialog.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Button, { className: "w-full", size: "lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CreditCard, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          "Upgrade to Pro"
        ] }, void 0, true, {
          fileName: "app/components/upgrade-dialog.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center justify-center gap-2 text-center text-xs text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Infinity2, { className: "h-3 w-3" }, void 0, false, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: "Unlimited AI tokens with Pro plan" }, void 0, false, {
            fileName: "app/components/upgrade-dialog.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/upgrade-dialog.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/upgrade-dialog.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/upgrade-dialog.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/upgrade-dialog.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/upgrade-dialog.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s15(UpgradeDialog, "/gO18ISW+aAap0ciTJG6G2IL4bw=");
_c71 = UpgradeDialog;
var _c71;
$RefreshReg$(_c71, "UpgradeDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/token-usage.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\token-usage.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s16 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\token-usage.tsx"
  );
  import.meta.hot.lastModified = "1733136384534.938";
}
function TokenUsage({
  totalTokens,
  usedTokens
}) {
  _s16();
  const [upgradeOpen, setUpgradeOpen] = React49.useState(false);
  const percentage = Math.round(usedTokens / totalTokens * 100);
  const remaining = totalTokens - usedTokens;
  const isLow = percentage > 80;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(UpgradeDialog, { open: upgradeOpen, onOpenChange: setUpgradeOpen }, void 0, false, {
      fileName: "app/components/token-usage.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "border-t border-sidebar-border bg-sidebar p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center justify-between text-[11px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "font-medium uppercase tracking-wide text-sidebar-foreground/70", children: "Token Usage" }, void 0, false, {
          fileName: "app/components/token-usage.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: `font-medium ${isLow ? "text-red-500" : "text-sidebar-foreground/70"}`, children: [
          percentage,
          "%"
        ] }, void 0, true, {
          fileName: "app/components/token-usage.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/token-usage.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "relative h-1 overflow-hidden rounded-full bg-sidebar-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: `absolute left-0 top-0 h-full rounded-full transition-all duration-300 ${isLow ? "bg-red-500" : "bg-blue-500"}`, style: {
        width: `${percentage}%`
      } }, void 0, false, {
        fileName: "app/components/token-usage.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/token-usage.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center justify-between text-[11px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-sidebar-foreground/70", children: [
          remaining.toLocaleString(),
          " tokens remaining"
        ] }, void 0, true, {
          fileName: "app/components/token-usage.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { variant: "ghost", size: "sm", className: "h-auto p-0 text-[11px] font-medium text-blue-500 hover:text-blue-600", onClick: () => setUpgradeOpen(true), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CircleArrowUp, { className: "mr-1 h-3 w-3" }, void 0, false, {
            fileName: "app/components/token-usage.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          "Upgrade"
        ] }, void 0, true, {
          fileName: "app/components/token-usage.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/token-usage.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/token-usage.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/token-usage.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/token-usage.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s16(TokenUsage, "DyxlkJY/ojEzl7jO6SBLtR8O6F4=");
_c76 = TokenUsage;
var _c76;
$RefreshReg$(_c76, "TokenUsage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/user-switcher.tsx
var React53 = __toESM(require_react(), 1);

// app/components/settings-dialog.tsx
var React50 = __toESM(require_react(), 1);

// app/components/settings/billing-settings.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\settings\\\\billing-settings.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\settings\\billing-settings.tsx"
  );
  import.meta.hot.lastModified = "1733136384533.9395";
}
var billingInfo = {
  plan: "Free",
  nextBilling: "No billing scheduled",
  paymentMethod: {
    type: "None",
    last4: "",
    expiry: ""
  },
  tokens: {
    used: 25e3,
    total: 5e4
  }
};
function BillingSettings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "text-lg font-medium", children: "Billing & Subscription" }, void 0, false, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Manage your billing information and subscription plan" }, void 0, false, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/billing-settings.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Separator4, {}, void 0, false, {
      fileName: "app/components/settings/billing-settings.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h4", { className: "text-sm font-medium", children: "Current Plan" }, void 0, false, {
            fileName: "app/components/settings/billing-settings.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Package, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "app/components/settings/billing-settings.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: billingInfo.plan }, void 0, false, {
              fileName: "app/components/settings/billing-settings.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/settings/billing-settings.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/settings/billing-settings.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Button, { children: "Upgrade Plan" }, void 0, false, {
          fileName: "app/components/settings/billing-settings.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "rounded-lg border p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h4", { className: "text-sm font-medium mb-3", children: "AI Token Usage" }, void 0, false, {
          fileName: "app/components/settings/billing-settings.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: [
            billingInfo.tokens.used.toLocaleString(),
            " / ",
            billingInfo.tokens.total.toLocaleString(),
            " tokens used"
          ] }, void 0, true, {
            fileName: "app/components/settings/billing-settings.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "h-full bg-primary transition-all duration-500", style: {
            width: `${billingInfo.tokens.used / billingInfo.tokens.total * 100}%`
          } }, void 0, false, {
            fileName: "app/components/settings/billing-settings.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/settings/billing-settings.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "Resets on the 1st of each month" }, void 0, false, {
            fileName: "app/components/settings/billing-settings.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/settings/billing-settings.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/billing-settings.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h4", { className: "text-sm font-medium mb-1", children: "Payment Method" }, void 0, false, {
          fileName: "app/components/settings/billing-settings.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: billingInfo.paymentMethod.type === "None" ? "No payment method added" : `${billingInfo.paymentMethod.type} ending in ${billingInfo.paymentMethod.last4}` }, void 0, false, {
          fileName: "app/components/settings/billing-settings.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Button, { variant: "outline", className: "gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(CreditCard, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/settings/billing-settings.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        "Add Payment Method"
      ] }, void 0, true, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/billing-settings.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h4", { className: "text-sm font-medium", children: "Billing History" }, void 0, false, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "rounded-lg border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "p-4 text-center text-sm text-muted-foreground", children: "No billing history available" }, void 0, false, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/settings/billing-settings.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings/billing-settings.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/settings/billing-settings.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c77 = BillingSettings;
var _c77;
$RefreshReg$(_c77, "BillingSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/settings-dialog.tsx
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\settings-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s17 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\settings-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384533.9395";
}
var personalSections2 = [{
  id: "account",
  label: "My Account",
  icon: CircleUser,
  component: AccountSettings
}, {
  id: "settings",
  label: "My Settings",
  icon: Settings,
  component: AppSettings
}, {
  id: "billing",
  label: "Billing",
  icon: CreditCard,
  component: BillingSettings
}, {
  id: "notifications",
  label: "My Notifications",
  icon: Bell,
  component: NotificationSettings
}, {
  id: "security",
  label: "Security & Data",
  icon: KeyRound,
  component: SecuritySettings
}];
function SettingsDialog({
  open,
  onOpenChange,
  defaultSection = "account"
}) {
  _s17();
  const [activeSection, setActiveSection] = React50.useState(defaultSection);
  React50.useEffect(() => {
    if (defaultSection) {
      setActiveSection(defaultSection);
    }
  }, [defaultSection]);
  const ActiveComponent = personalSections2.find((s) => s.id === activeSection)?.component || AccountSettings;
  const activeTitle = personalSections2.find((s) => s.id === activeSection)?.label || "Settings";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(DialogContent2, { className: "max-w-[1200px] h-[85vh] p-0 gap-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(DialogHeader, { className: "sr-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(DialogTitle2, { children: activeTitle }, void 0, false, {
      fileName: "app/components/settings-dialog.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/settings-dialog.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex h-full overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-60 bg-muted/50 overflow-y-auto flex-shrink-0 rounded-l-xl border-r", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "px-2 pt-4 pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-[11px] font-semibold text-muted-foreground mb-1.5", children: "SETTINGS" }, void 0, false, {
          fileName: "app/components/settings-dialog.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("nav", { className: "mt-4 space-y-0.5 px-1", children: personalSections2.map((section) => {
          const Icon = section.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { className: `w-full flex items-center px-2 py-1.5 h-8 text-sm font-medium rounded-lg transition-colors ${activeSection === section.id ? "bg-background text-foreground hover:bg-background" : "text-muted-foreground hover:bg-background/50 hover:text-foreground"}`, onClick: () => setActiveSection(section.id), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Icon, { className: "h-4 w-4 mr-2 shrink-0" }, void 0, false, {
              fileName: "app/components/settings-dialog.tsx",
              lineNumber: 87,
              columnNumber: 25
            }, this),
            section.label
          ] }, section.id, true, {
            fileName: "app/components/settings-dialog.tsx",
            lineNumber: 86,
            columnNumber: 26
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/settings-dialog.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/settings-dialog.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/settings-dialog.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/settings-dialog.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex-1 min-h-0 bg-background rounded-r-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "max-w-3xl mx-auto p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ActiveComponent, {}, void 0, false, {
        fileName: "app/components/settings-dialog.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/settings-dialog.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/settings-dialog.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/settings-dialog.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/settings-dialog.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/settings-dialog.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/settings-dialog.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s17(SettingsDialog, "6RHtOpgpnqzyp8NxJdj6ehCRqB8=");
_c78 = SettingsDialog;
var _c78;
$RefreshReg$(_c78, "SettingsDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/avatar.tsx
var React52 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var React51 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
"use client";
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = React51.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = React51.useState("idle");
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Primitive.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }
);
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React51.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, src, onLoadingStatusChange = () => {
    }, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps.referrerPolicy);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = React51.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = React51.useState(delayMs === void 0);
    React51.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }
);
AvatarFallback.displayName = FALLBACK_NAME;
function useImageLoadingStatus(src, referrerPolicy) {
  const [loadingStatus, setLoadingStatus] = React51.useState("idle");
  useLayoutEffect2(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    return () => {
      isMounted = false;
    };
  }, [src, referrerPolicy]);
  return loadingStatus;
}
var Root7 = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;

// app/components/ui/avatar.tsx
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\avatar.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\avatar.tsx"
  );
  import.meta.hot.lastModified = "1733136384535.9375";
}
var Avatar2 = React52.forwardRef(_c79 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Root7, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c215 = Avatar2;
Avatar2.displayName = Root7.displayName;
var AvatarImage2 = React52.forwardRef(_c314 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 33,
  columnNumber: 12
}, this));
_c412 = AvatarImage2;
AvatarImage2.displayName = Image.displayName;
var AvatarFallback2 = React52.forwardRef(_c511 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Fallback, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c610 = AvatarFallback2;
AvatarFallback2.displayName = Fallback.displayName;
var _c79;
var _c215;
var _c314;
var _c412;
var _c511;
var _c610;
$RefreshReg$(_c79, "Avatar$React.forwardRef");
$RefreshReg$(_c215, "Avatar");
$RefreshReg$(_c314, "AvatarImage$React.forwardRef");
$RefreshReg$(_c412, "AvatarImage");
$RefreshReg$(_c511, "AvatarFallback$React.forwardRef");
$RefreshReg$(_c610, "AvatarFallback");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/user-switcher.tsx
var import_jsx_dev_runtime26 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\user-switcher.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s18 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\user-switcher.tsx"
  );
  import.meta.hot.lastModified = "1733136384539.9348";
}
function UserSwitcher({
  user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png"
  }
}) {
  _s18();
  const {
    isMobile
  } = useSidebar();
  const [upgradeOpen, setUpgradeOpen] = React53.useState(false);
  const [settingsOpen, setSettingsOpen] = React53.useState(false);
  const [activeSection, setActiveSection] = React53.useState("account");
  const openNotificationSettings = () => {
    setActiveSection("notifications");
    setSettingsOpen(true);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(UpgradeDialog, { open: upgradeOpen, onOpenChange: setUpgradeOpen }, void 0, false, {
      fileName: "app/components/user-switcher.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(SettingsDialog, { open: settingsOpen, onOpenChange: setSettingsOpen, defaultSection: activeSection }, void 0, false, {
      fileName: "app/components/user-switcher.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenu2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(SidebarMenuButton, { size: "lg", className: "cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Avatar2, { className: "h-8 w-8 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(AvatarImage2, { src: user.avatar, alt: user.name }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(AvatarFallback2, { className: "rounded-lg", children: user.name.split(" ").map((n) => n[0]).join("") }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 57,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "truncate font-semibold", children: user.name }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "truncate text-xs", children: user.email }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 63,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ChevronsUpDown, { className: "ml-auto size-4" }, void 0, false, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-switcher.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/user-switcher.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuContent2, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: isMobile ? "bottom" : "right", align: "start", sideOffset: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuLabel2, { className: "p-0 font-normal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Avatar2, { className: "h-8 w-8 rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(AvatarImage2, { src: user.avatar, alt: user.name }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 72,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(AvatarFallback2, { className: "rounded-lg", children: user.name.split(" ").map((n) => n[0]).join("") }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 73,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "truncate font-semibold", children: user.name }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 78,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "truncate text-xs", children: user.email }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 79,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuGroup2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuItem2, { onClick: () => setUpgradeOpen(true), className: "text-blue-500 dark:text-blue-400 cursor-pointer", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Sparkles, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { children: "Upgrade to Pro" }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuGroup2, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuItem2, { onClick: () => {
            setActiveSection("account");
            setSettingsOpen(true);
          }, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(BadgeCheck, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 96,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { children: "Account" }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuItem2, { onClick: () => {
            setActiveSection("billing");
            setSettingsOpen(true);
          }, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(CreditCard, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 103,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { children: "Billing" }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuItem2, { onClick: openNotificationSettings, className: "cursor-pointer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Bell, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { children: "Notifications" }, void 0, false, {
              fileName: "app/components/user-switcher.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DropdownMenuItem2, { className: "cursor-pointer text-red-600 dark:text-red-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(LogOut, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { children: "Log out" }, void 0, false, {
            fileName: "app/components/user-switcher.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-switcher.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-switcher.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-switcher.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/user-switcher.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/user-switcher.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-switcher.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s18(UserSwitcher, "OFTgd84URL7t1V1S9ZQo+fIA9J4=", false, function() {
  return [useSidebar];
});
_c80 = UserSwitcher;
var _c80;
$RefreshReg$(_c80, "UserSwitcher");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/app-sidebar.tsx
var import_jsx_dev_runtime27 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\app-sidebar.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\app-sidebar.tsx"
  );
  import.meta.hot.lastModified = "1733136384528.9414";
}
var data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png"
  }
};
function AppSidebar({
  onPageTitleChange,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Sidebar, { className: "border-r-0", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SidebarHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(UserSwitcher, { user: data.user }, void 0, false, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(NavMain, {}, void 0, false, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SidebarContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(NavFavorites, {}, void 0, false, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(NavWorkspaces, { onPageTitleChange }, void 0, false, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TokenUsage, { totalTokens: 5e4, usedTokens: 25e3 }, void 0, false, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SidebarRail, {}, void 0, false, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/app-sidebar.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c81 = AppSidebar;
var _c81;
$RefreshReg$(_c81, "AppSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/popover.tsx
var React55 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popover/dist/index.mjs
var React54 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
"use client";
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope3 = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope3(__scopePopover);
  const triggerRef = React54.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = React54.useState(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Root22, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React54.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: React54.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React54.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME3 = "PopoverAnchor";
var PopoverAnchor = React54.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME3, __scopePopover);
    const popperScope = usePopperScope3(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    React54.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME3;
var TRIGGER_NAME6 = "PopoverTrigger";
var PopoverTrigger = React54.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME6, __scopePopover);
    const popperScope = usePopperScope3(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState3(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger.displayName = TRIGGER_NAME6;
var PORTAL_NAME5 = "PopoverPortal";
var [PortalProvider4, usePortalContext4] = createPopoverContext(PORTAL_NAME5, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME5, __scopePopover);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PortalProvider4, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Portal, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME5;
var CONTENT_NAME8 = "PopoverContent";
var PopoverContent = React54.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext4(CONTENT_NAME8, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME8, props.__scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent.displayName = CONTENT_NAME8;
var PopoverContentModal = React54.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME8, props.__scopePopover);
    const contentRef = React54.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = React54.useRef(false);
    React54.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          if (!isRightClickOutsideRef.current)
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = React54.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME8, props.__scopePopover);
    const hasInteractedOutsideRef = React54.useRef(false);
    const hasPointerDownOutsideRef = React54.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current)
              context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = React54.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME8, __scopePopover);
    const popperScope = usePopperScope3(__scopePopover);
    useFocusGuards();
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              Content,
              {
                "data-state": getState3(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME2 = "PopoverClose";
var PopoverClose = React54.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME2, __scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME2;
var ARROW_NAME5 = "PopoverArrow";
var PopoverArrow = React54.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope3(__scopePopover);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME5;
function getState3(open) {
  return open ? "open" : "closed";
}
var Root25 = Popover;
var Trigger5 = PopoverTrigger;
var Portal5 = PopoverPortal;
var Content24 = PopoverContent;

// app/components/ui/popover.tsx
var import_jsx_dev_runtime28 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\popover.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\popover.tsx"
  );
  import.meta.hot.lastModified = "1733136384537.936";
}
var Popover2 = Root25;
var PopoverTrigger2 = Trigger5;
var PopoverContent2 = React55.forwardRef(_c86 = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Portal5, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Content24, { ref, align, sideOffset, className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c216 = PopoverContent2;
PopoverContent2.displayName = Content24.displayName;
var _c86;
var _c216;
$RefreshReg$(_c86, "PopoverContent$React.forwardRef");
$RefreshReg$(_c216, "PopoverContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/emoji-picker.tsx
var import_jsx_dev_runtime29 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\emoji-picker.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\emoji-picker.tsx"
  );
  import.meta.hot.lastModified = "1733136384530.9407";
}
var EMOJI_CATEGORIES = [{
  name: "Smileys",
  emojis: ["\u{1F600}", "\u{1F603}", "\u{1F604}", "\u{1F601}", "\u{1F605}", "\u{1F602}", "\u{1F923}", "\u{1F60A}", "\u{1F607}", "\u{1F642}", "\u{1F609}", "\u{1F60C}", "\u{1F60D}", "\u{1F970}", "\u{1F618}"]
}, {
  name: "Objects",
  emojis: ["\u{1F4DD}", "\u{1F4DA}", "\u{1F4D6}", "\u{1F4D3}", "\u{1F4D4}", "\u{1F4D2}", "\u{1F4D5}", "\u{1F4D7}", "\u{1F4D8}", "\u{1F4D9}", "\u{1F4CC}", "\u{1F4CD}", "\u{1F4CE}", "\u{1F50D}", "\u{1F4A1}"]
}, {
  name: "Symbols",
  emojis: ["\u2764\uFE0F", "\u{1F4AB}", "\u2B50", "\u{1F31F}", "\u2728", "\u{1F4A5}", "\u{1F4A2}", "\u{1F4A6}", "\u{1F4A8}", "\u{1F54A}\uFE0F", "\u{1F525}", "\u2705", "\u274C", "\u2753", "\u2757"]
}];
function EmojiPicker({
  value = "\u{1F4C4}",
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Popover2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(PopoverTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button, { variant: "ghost", size: "sm", className: "h-auto p-0 text-xl hover:bg-transparent focus-visible:ring-0", children: value || /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Smile, { className: "h-4 w-4" }, void 0, false, {
      fileName: "app/components/emoji-picker.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/emoji-picker.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/emoji-picker.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(PopoverContent2, { className: "w-[280px] p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grid gap-4 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h4", { className: "text-sm font-semibold", children: "Pick an emoji" }, void 0, false, {
          fileName: "app/components/emoji-picker.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "Select an emoji to represent this page" }, void 0, false, {
          fileName: "app/components/emoji-picker.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/emoji-picker.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grid gap-2", children: EMOJI_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-xs text-muted-foreground", children: category.name }, void 0, false, {
          fileName: "app/components/emoji-picker.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grid grid-cols-8 gap-2", children: category.emojis.map((emoji) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button, { variant: "outline", className: "h-8 w-8 p-0 text-lg", onClick: () => onChange?.(emoji), children: emoji }, emoji, false, {
          fileName: "app/components/emoji-picker.tsx",
          lineNumber: 59,
          columnNumber: 49
        }, this)) }, void 0, false, {
          fileName: "app/components/emoji-picker.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)
      ] }, category.name, true, {
        fileName: "app/components/emoji-picker.tsx",
        lineNumber: 54,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/emoji-picker.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/emoji-picker.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/emoji-picker.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/emoji-picker.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c87 = EmojiPicker;
var _c87;
$RefreshReg$(_c87, "EmojiPicker");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav-actions.tsx
var React66 = __toESM(require_react(), 1);

// app/components/document-ai-chat.tsx
var React60 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createDOMMotionComponentProxy(componentFactory) {
  if (typeof Proxy === "undefined") {
    return componentFactory;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const deprecatedFactoryFunction = (...args) => {
    if (true) {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return componentFactory(...args);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return componentFactory;
      if (!componentCache.has(key)) {
        componentCache.set(key, componentFactory(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
  const state = [{}, {}];
  visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
    state[0][key] = value.get();
    state[1][key] = value.getVelocity();
  });
  return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  return definition;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = new Set(transformPropOrder);

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = (seconds) => seconds * 1e3;
var millisecondsToSeconds = (milliseconds) => milliseconds / 1e3;

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/framer-motion/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
  return transition ? transition[key] || transition["default"] || transition : void 0;
}

// node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: false,
  useManualTiming: false
};

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var isNotNull2 = (value) => value !== null;
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe) {
  const resolvedKeyframes = keyframes2.filter(isNotNull2);
  const index2 = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
  return !index2 || finalKeyframe === void 0 ? resolvedKeyframes[index2] : finalKeyframe;
}

// node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = (any) => any;

// node_modules/framer-motion/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
  let thisFrame = /* @__PURE__ */ new Set();
  let nextFrame = /* @__PURE__ */ new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      step.schedule(callback);
      runNextFrame();
    }
    callback(latestFrameData);
  }
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (!queue.has(callback))
        queue.add(callback);
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      nextFrame.clear();
      thisFrame.forEach(triggerCallback);
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const flagRunNextFrame = () => runNextFrame = true;
  const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
  const processBatch = () => {
    const timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    state.timestamp = timestamp;
    state.isProcessing = true;
    read.process(state);
    resolveKeyframes.process(state);
    update.process(state);
    preRender.process(state);
    render.process(state);
    postRender.process(state);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps[stepsOrder[i]].cancel(process2);
    }
  };
  return { schedule, cancel, state, steps };
}

// node_modules/framer-motion/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

// node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t2, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t2 + (3 * a2 - 6 * a1)) * t2 + 3 * a1) * t2;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
}

// node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;

// node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = (easing) => (p2) => 1 - easing(1 - p2);

// node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = /* @__PURE__ */ reverseEasing(backOut);
var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

// node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = (p2) => (p2 *= 2) < 1 ? 0.5 * backIn(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));

// node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = (p2) => 1 - Math.sin(Math.acos(p2));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

// node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop;
var invariant = noop;
if (true) {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp2 = (min2, max2, v) => {
  if (v > max2)
    return max2;
  if (v < min2)
    return min2;
  return v;
};

// node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp2(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = /* @__PURE__ */ createUnitType("deg");
var percent = /* @__PURE__ */ createUnitType("%");
var px = /* @__PURE__ */ createUnitType("px");
var vh = /* @__PURE__ */ createUnitType("vh");
var vw = /* @__PURE__ */ createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
};

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]);
var isNumOrPxType = (v) => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
  if (transform === "none" || !transform)
    return 0;
  const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform.match(/^matrix\((.+)\)$/u);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
    const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
    const transformsToRestore = /* @__PURE__ */ new Map();
    elementsToMeasure.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          var _a;
          (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete());
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  readAllKeyframes();
  measureAllKeyframes();
}
var KeyframeResolver = class {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.isComplete = false;
    this.isAsync = false;
    this.needsMeasurement = false;
    this.isScheduled = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.isScheduled = true;
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null) {
        if (i === 0) {
          const currentValue = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.get();
          const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
          if (currentValue !== void 0) {
            unresolvedKeyframes[0] = currentValue;
          } else if (element && name) {
            const valueAsRead = element.readValue(name, finalKeyframe);
            if (valueAsRead !== void 0 && valueAsRead !== null) {
              unresolvedKeyframes[0] = valueAsRead;
            }
          }
          if (unresolvedKeyframes[0] === void 0) {
            unresolvedKeyframes[0] = finalKeyframe;
          }
          if (motionValue2 && currentValue === void 0) {
            motionValue2.set(unresolvedKeyframes[0]);
          }
        } else {
          unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
      }
    }
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = true;
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
    toResolve.delete(this);
  }
  cancel() {
    if (!this.isComplete) {
      this.isScheduled = false;
      toResolve.delete(this);
    }
  }
  resume() {
    if (!this.isComplete)
      this.scheduleResolve();
  }
};

// node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;

// node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

// node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
  return v == null;
}

// node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

// node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (typeof v !== "string")
    return v;
  const [a2, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp2(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: /* @__PURE__ */ isColorString("rgb", "red"),
  parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a2 = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a2 = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a2 = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a2 += a2;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
var hex = {
  test: /* @__PURE__ */ isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: /* @__PURE__ */ isColorString("hsl", "hue"),
  parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

// node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
  var _a, _b;
  return isNaN(v) && typeof v === "string" && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const { split, types } = analyseComplexValue(source);
  const numSections = split.length;
  return (v) => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs
var browserNumberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Misc
  backgroundPositionX: px,
  backgroundPositionY: px
};

// node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs
var transformValueTypes = {
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  ...browserNumberValueTypes,
  ...transformValueTypes,
  zIndex: int,
  size: px,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes, element, name } = this;
    if (!element || !element.current)
      return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== void 0) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    if (originType === targetType)
      return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes, name } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measureInitialState() {
    const { element, unresolvedKeyframes, name } = this;
    if (!element || !element.current)
      return;
    if (name === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    var _a;
    const { element, name, unresolvedKeyframes } = this;
    if (!element || !element.current)
      return;
    const value = element.getValue(name);
    value && value.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    if (finalKeyframe !== null && this.finalKeyframe === void 0) {
      this.finalKeyframe = finalKeyframe;
    }
    if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
      this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
        element.getValue(unsetTransformName).set(unsetTransformValue);
      });
    }
    this.resolveNoneKeyframes();
  }
};

// node_modules/framer-motion/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
  return typeof type === "function";
}

// node_modules/framer-motion/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = void 0;
}
var time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  (complex.test(value) || value === "0") && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null)
    return false;
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}

// node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var MAX_RESOLVE_DELAY = 40;
var BaseAnimation = class {
  constructor({ autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }) {
    this.isStopped = false;
    this.hasAttemptedResolve = false;
    this.createdAt = time.now();
    this.options = {
      autoplay,
      delay: delay2,
      type,
      repeat,
      repeatDelay,
      repeatType,
      ...options
    };
    this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    if (!this.resolvedAt)
      return this.createdAt;
    return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    if (!this._resolved && !this.hasAttemptedResolve) {
      flushKeyframeResolvers();
    }
    return this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(keyframes2, finalKeyframe) {
    this.resolvedAt = time.now();
    this.hasAttemptedResolve = true;
    const { name, type, velocity, delay: delay2, onComplete, onUpdate, isGenerator: isGenerator2 } = this.options;
    if (!isGenerator2 && !canAnimate(keyframes2, name, type, velocity)) {
      if (instantAnimationState.current || !delay2) {
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
        this.resolveFinishedPromise();
        return;
      } else {
        this.options.duration = 0;
      }
    }
    const resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
    if (resolvedAnimation === false)
      return;
    this._resolved = {
      keyframes: keyframes2,
      finalKeyframe,
      ...resolvedAnimation
    };
    this.onPostResolved();
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  flatten() {
    this.options.type = "keyframes";
    this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((resolve) => {
      this.resolveFinishedPromise = resolve;
    });
  }
};

// node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += easing(progress(0, numPoints - 1, i)) + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};

// node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t2, current) {
  const prevT = Math.max(t2 - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t2 - prevT);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/defaults.mjs
var springDefaults = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};

// node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
  let envelope;
  let derivative;
  warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp2(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
  duration = clamp2(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a2 / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: springDefaults.velocity,
    stiffness: springDefaults.stiffness,
    damping: springDefaults.damping,
    mass: springDefaults.mass,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    if (options.visualDuration) {
      const visualDuration = options.visualDuration;
      const root = 2 * Math.PI / (visualDuration * 1.2);
      const stiffness = root * root;
      const damping = 2 * clamp2(0.05, 1, 1 - options.bounce) * Math.sqrt(stiffness);
      springOptions = {
        ...springOptions,
        mass: springDefaults.mass,
        stiffness,
        damping
      };
    } else {
      const derived = findSpring(options);
      springOptions = {
        ...springOptions,
        ...derived,
        mass: springDefaults.mass
      };
      springOptions.isResolvedFromDuration = true;
    }
  }
  return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  let { restSpeed, restDelta } = options;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
  restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = (t2) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t2) => target - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t2);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t2) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
      const freqForT = Math.min(dampedAngularFreq * t2, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  const generator = {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: (t2) => {
      const current = resolveSpring(t2);
      if (!isResolvedFromDuration) {
        let currentVelocity = 0;
        if (dampingRatio < 1) {
          currentVelocity = t2 === 0 ? secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t2, current);
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t2 >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    },
    toString: () => {
      const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
      return calculatedDuration + "ms " + easing;
    }
  };
  return generator;
}

// node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min: min2, max: max2, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => min2 !== void 0 && v < min2 || max2 !== void 0 && v > max2;
  const nearestBoundary = (v) => {
    if (min2 === void 0)
      return max2;
    if (max2 === void 0)
      return min2;
    return Math.abs(min2 - v) < Math.abs(max2 - v) ? min2 : max2;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t2) => -amplitude * Math.exp(-t2 / timeConstant);
  const calcLatest = (t2) => target + calcDelta(t2);
  const applyFriction = (t2) => {
    const delta = calcDelta(t2);
    const latest = calcLatest(t2);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t2) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t2;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t2, state.value),
      // TODO: This should be passing * 1000
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t2) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t2);
        checkCatchBoundary(t2);
      }
      if (timeReachedBoundary !== void 0 && t2 >= timeReachedBoundary) {
        return spring$1.next(t2 - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t2);
        return state;
      }
    }
  };
}

// node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

// node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = (definition) => {
  if (isBezierDefinition(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a2, b) => (v) => b(a2(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/framer-motion/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress2) => {
  return from + (to - from) * progress2;
};

// node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p2, q, t2) {
  if (t2 < 0)
    t2 += 1;
  if (t2 > 1)
    t2 -= 1;
  if (t2 < 1 / 6)
    return p2 + (q - p2) * 6 * t2;
  if (t2 < 1 / 2)
    return q;
  if (t2 < 2 / 3)
    return p2 + (q - p2) * (2 / 3 - t2) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q;
    red = hueToRgb(p2, q, hue + 1 / 3);
    green = hueToRgb(p2, q, hue);
    blue = hueToRgb(p2, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/framer-motion/dist/es/utils/mix/immediate.mjs
function mixImmediate(a2, b) {
  return (p2) => p2 > 0 ? b : a2;
}

// node_modules/framer-motion/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  if (!Boolean(type))
    return false;
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/framer-motion/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p2) => p2 <= 0 ? origin : target;
  } else {
    return (p2) => p2 >= 1 ? target : origin;
  }
}

// node_modules/framer-motion/dist/es/utils/mix/complex.mjs
function mixNumber2(a2, b) {
  return (p2) => mixNumber(a2, b, p2);
}
function getMixer(a2) {
  if (typeof a2 === "number") {
    return mixNumber2;
  } else if (typeof a2 === "string") {
    return isCSSVariableToken(a2) ? mixImmediate : color.test(a2) ? mixColor : mixComplex;
  } else if (Array.isArray(a2)) {
    return mixArray;
  } else if (typeof a2 === "object") {
    return color.test(a2) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a2, b) {
  const output = [...a2];
  const numValues = output.length;
  const blendValue = a2.map((v, i) => getMixer(v)(v, b[i]));
  return (p2) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p2);
    }
    return output;
  };
}
function mixObject(a2, b) {
  const output = { ...a2, ...b };
  const blendValue = {};
  for (const key in output) {
    if (a2[key] !== void 0 && b[key] !== void 0) {
      blendValue[key] = getMixer(a2[key])(a2[key], b[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  var _a;
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return mixImmediate(origin, target);
  }
};

// node_modules/framer-motion/dist/es/utils/mix/index.mjs
function mix(from, to, p2) {
  if (typeof from === "number" && typeof to === "number" && typeof p2 === "number") {
    return mixNumber(from, to, p2);
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/framer-motion/dist/es/utils/interpolate.mjs
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && input[0] === input[1])
    return () => output[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp2(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset4, remaining) {
  const min2 = offset4[offset4.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset4.push(mixNumber(min2, 1, offsetProgress));
  }
}

// node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  const offset4 = [0];
  fillOffset(offset4, arr.length - 1);
  return offset4;
}

// node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset4, duration) {
  return offset4.map((o) => o * duration);
}

// node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t2) => {
      state.value = mapTimeToKeyframe(t2);
      state.done = t2 >= duration;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs
var generators = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
var percentToProgress = (percent2) => percent2 / 100;
var MainThreadAnimation = class extends BaseAnimation {
  constructor(options) {
    super(options);
    this.holdTime = null;
    this.cancelTime = null;
    this.currentTime = 0;
    this.playbackSpeed = 1;
    this.pendingPlayState = "running";
    this.startTime = null;
    this.state = "idle";
    this.stop = () => {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      const { onStop } = this.options;
      onStop && onStop();
    };
    const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
    const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || KeyframeResolver;
    const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
    this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten();
    if (this._resolved) {
      Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
  }
  initPlayback(keyframes$1) {
    const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
    const generatorFactory = isGenerator(type) ? type : generators[type] || keyframes;
    let mapPercentToKeyframes;
    let mirroredGenerator;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      if (true) {
        invariant(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
      }
      mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...this.options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      mirroredGenerator = generatorFactory({
        ...this.options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    const resolvedDuration = calculatedDuration + repeatDelay;
    const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    return {
      generator,
      mirroredGenerator,
      mapPercentToKeyframes,
      calculatedDuration,
      resolvedDuration,
      totalDuration
    };
  }
  onPostResolved() {
    const { autoplay = true } = this.options;
    this.play();
    if (this.pendingPlayState === "paused" || !autoplay) {
      this.pause();
    } else {
      this.state = this.pendingPlayState;
    }
  }
  tick(timestamp, sample = false) {
    const { resolved } = this;
    if (!resolved) {
      const { keyframes: keyframes3 } = this.options;
      return { done: true, value: keyframes3[keyframes3.length - 1] };
    }
    const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes: keyframes2, calculatedDuration, totalDuration, resolvedDuration } = resolved;
    if (this.startTime === null)
      return generator.next(0);
    const { delay: delay2, repeat, repeatType, repeatDelay, onUpdate } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
    const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp2(0, 1, iterationProgress) * resolvedDuration;
    }
    const state = isInDelayPhase ? { done: false, value: keyframes2[0] } : frameGenerator.next(elapsed);
    if (mapPercentToKeyframes) {
      state.value = mapPercentToKeyframes(state.value);
    }
    let { done } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && finalKeyframe !== void 0) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  get duration() {
    const { resolved } = this;
    return resolved ? millisecondsToSeconds(resolved.calculatedDuration) : 0;
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.holdTime !== null || this.speed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.speed;
    }
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    this.playbackSpeed = newSpeed;
    if (hasChanged) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (!this.resolver.isScheduled) {
      this.resolver.resume();
    }
    if (!this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, onPlay, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    onPlay && onPlay();
    const now2 = this.driver.now();
    if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime;
    } else if (!this.startTime) {
      this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    } else if (this.state === "finished") {
      this.startTime = now2;
    }
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    this.cancelTime = this.startTime;
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    var _a;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused";
    this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.pendingPlayState = this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.teardown();
    this.state = "finished";
    const { onComplete } = this.options;
    onComplete && onComplete();
  }
  cancel() {
    if (this.cancelTime !== null) {
      this.tick(this.cancelTime);
    }
    this.teardown();
    this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    this.startTime = this.cancelTime = null;
    this.resolver.cancel();
  }
  stopDriver() {
    if (!this.driver)
      return;
    this.driver.stop();
    this.driver = void 0;
  }
  sample(time2) {
    this.startTime = 0;
    return this.tick(time2, true);
  }
};

// node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs
var acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);

// node_modules/framer-motion/dist/es/utils/memo.mjs
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs
var supportsFlags = {
  linearEasing: void 0
};

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs
function memoSupports(callback, supportsFlag) {
  const memoized = memo(callback);
  return () => {
    var _a;
    return (_a = supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
  };
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");

// node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a2, b, c, d]) => `cubic-bezier(${a2}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function" && supportsLinearEasing()) {
    return generateLinearEasing(easing, duration);
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeInOut", times } = {}) {
  const keyframeOptions = { [valueName]: keyframes2 };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs
function attachTimeline(animation, timeline) {
  animation.timeline = timeline;
  animation.onfinish = null;
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
var supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

// node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs
var sampleDelta = 10;
var maxDuration = 2e4;
function requiresPregeneratedKeyframes(options) {
  return isGenerator(options.type) || options.type === "spring" || !isWaapiSupportedEasing(options.ease);
}
function pregenerateKeyframes(keyframes2, options) {
  const sampleAnimation = new MainThreadAnimation({
    ...options,
    keyframes: keyframes2,
    repeat: 0,
    delay: 0,
    isGenerator: true
  });
  let state = { done: false, value: keyframes2[0] };
  const pregeneratedKeyframes = [];
  let t2 = 0;
  while (!state.done && t2 < maxDuration) {
    state = sampleAnimation.sample(t2);
    pregeneratedKeyframes.push(state.value);
    t2 += sampleDelta;
  }
  return {
    times: void 0,
    keyframes: pregeneratedKeyframes,
    duration: t2 - sampleDelta,
    ease: "linear"
  };
}
var unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
var AcceleratedAnimation = class extends BaseAnimation {
  constructor(options) {
    super(options);
    const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
    this.resolver = new DOMKeyframesResolver(keyframes2, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  initPlayback(keyframes2, finalKeyframe) {
    var _a;
    let { duration = 300, times, ease: ease2, type, motionValue: motionValue2, name, startTime } = this.options;
    if (!((_a = motionValue2.owner) === null || _a === void 0 ? void 0 : _a.current)) {
      return false;
    }
    if (typeof ease2 === "string" && supportsLinearEasing() && isUnsupportedEase(ease2)) {
      ease2 = unsupportedEasingFunctions[ease2];
    }
    if (requiresPregeneratedKeyframes(this.options)) {
      const { onComplete, onUpdate, motionValue: motionValue3, element, ...options } = this.options;
      const pregeneratedAnimation = pregenerateKeyframes(keyframes2, options);
      keyframes2 = pregeneratedAnimation.keyframes;
      if (keyframes2.length === 1) {
        keyframes2[1] = keyframes2[0];
      }
      duration = pregeneratedAnimation.duration;
      times = pregeneratedAnimation.times;
      ease2 = pregeneratedAnimation.ease;
      type = "keyframes";
    }
    const animation = startWaapiAnimation(motionValue2.owner.current, name, keyframes2, { ...this.options, duration, times, ease: ease2 });
    animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    if (this.pendingTimeline) {
      attachTimeline(animation, this.pendingTimeline);
      this.pendingTimeline = void 0;
    } else {
      animation.onfinish = () => {
        const { onComplete } = this.options;
        motionValue2.set(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.cancel();
        this.resolveFinishedPromise();
      };
    }
    return {
      animation,
      duration,
      times,
      type,
      ease: ease2,
      keyframes: keyframes2
    };
  }
  get duration() {
    const { resolved } = this;
    if (!resolved)
      return 0;
    const { duration } = resolved;
    return millisecondsToSeconds(duration);
  }
  get time() {
    const { resolved } = this;
    if (!resolved)
      return 0;
    const { animation } = resolved;
    return millisecondsToSeconds(animation.currentTime || 0);
  }
  set time(newTime) {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.currentTime = secondsToMilliseconds(newTime);
  }
  get speed() {
    const { resolved } = this;
    if (!resolved)
      return 1;
    const { animation } = resolved;
    return animation.playbackRate;
  }
  set speed(newSpeed) {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.playbackRate = newSpeed;
  }
  get state() {
    const { resolved } = this;
    if (!resolved)
      return "idle";
    const { animation } = resolved;
    return animation.playState;
  }
  get startTime() {
    const { resolved } = this;
    if (!resolved)
      return null;
    const { animation } = resolved;
    return animation.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(timeline) {
    if (!this._resolved) {
      this.pendingTimeline = timeline;
    } else {
      const { resolved } = this;
      if (!resolved)
        return noop;
      const { animation } = resolved;
      attachTimeline(animation, timeline);
    }
    return noop;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    if (animation.playState === "finished") {
      this.updateFinishedPromise();
    }
    animation.play();
  }
  pause() {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.pause();
  }
  stop() {
    this.resolver.cancel();
    this.isStopped = true;
    if (this.state === "idle")
      return;
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation, keyframes: keyframes2, duration, type, ease: ease2, times } = resolved;
    if (animation.playState === "idle" || animation.playState === "finished") {
      return;
    }
    if (this.time) {
      const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
      const sampleAnimation = new MainThreadAnimation({
        ...options,
        keyframes: keyframes2,
        duration,
        type,
        ease: ease2,
        times,
        isGenerator: true
      });
      const sampleTime = secondsToMilliseconds(this.time);
      motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
    }
    const { onStop } = this.options;
    onStop && onStop();
    this.cancel();
  }
  complete() {
    const { resolved } = this;
    if (!resolved)
      return;
    resolved.animation.finish();
  }
  cancel() {
    const { resolved } = this;
    if (!resolved)
      return;
    resolved.animation.cancel();
  }
  static supports(options) {
    const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type } = options;
    return supportsWaapi() && name && acceleratedValues.has(name) && motionValue2 && motionValue2.owner && motionValue2.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !motionValue2.owner.getProps().onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }
};

// node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs
var supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0);

// node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs
var GroupPlaybackControls = class {
  constructor(animations2) {
    this.stop = () => this.runAll("stop");
    this.animations = animations2.filter(Boolean);
  }
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline, fallback) {
    const subscriptions = this.animations.map((animation) => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        return animation.attachTimeline(timeline);
      } else {
        return fallback(animation);
      }
    });
    return () => {
      subscriptions.forEach((cancel, i) => {
        cancel && cancel();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time2) {
    this.setAll("time", time2);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let max2 = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max2 = Math.max(max2, this.animations[i].duration);
    }
    return max2;
  }
  runAll(methodName) {
    this.animations.forEach((controls) => controls[methodName]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};

// node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
  return !!Object.keys(transition).length;
}

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay2);
  let options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v) => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element
  };
  if (!isTransitionDefined(valueTransition)) {
    options = {
      ...options,
      ...getDefaultTransition(name, options)
    };
  }
  if (options.duration) {
    options.duration = secondsToMilliseconds(options.duration);
  }
  if (options.repeatDelay) {
    options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
  }
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    options.duration = 0;
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (instantAnimationState.current || MotionGlobalConfig.skipAnimations) {
    shouldSkip = true;
    options.duration = 0;
    options.delay = 0;
  }
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return new GroupPlaybackControls([]);
    }
  }
  if (!isHandoff && AcceleratedAnimation.supports(options)) {
    return new AcceleratedAnimation(options);
  } else {
    return new MainThreadAnimation(options);
  }
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = (v) => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index2 = arr.indexOf(item);
  if (index2 > -1)
    arr.splice(index2, 1);
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a2, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a2, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/framer-motion/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(init, options = {}) {
    this.version = "11.12.0";
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v, endAnimation = true) {
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    endAnimation && this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  }
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  var _a;
  let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...getValueTransition(transition || {}, key)
    };
    let isHandoff = false;
    if (window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    });
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
  let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b) {
  return a2.sortNodePosition(b);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}

// node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
  if (!visualElement)
    return void 0;
  if (!visualElement.isControllingVariants) {
    const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
    if (visualElement.props.initial !== void 0) {
      context2.initial = visualElement.props.initial;
    }
    return context2;
  }
  const context = {};
  for (let i = 0; i < numVariantProps; i++) {
    const name = variantProps[i];
    const prop = visualElement.props[name];
    if (isVariantLabel(prop) || prop === false) {
      context[name] = prop;
    }
  }
  return context;
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate = animateList(visualElement);
  let state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (type) => (acc, definition) => {
    var _a;
    const resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
    if (resolved) {
      const { transition, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  function animateChanges(changedActiveType) {
    const { props } = visualElement;
    const context = getVariantContext(visualElement.parent) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = false;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0 && next !== null) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      const willAnimateViaParent = isInherited && variantDidChange;
      const needsAnimating = !willAnimateViaParent || handledRemovedValues;
      if (shouldAnimateType && needsAnimating) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: { type }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state,
    reset: () => {
      state = createState();
      isInitialRender = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var _a;
    this.node.animationState.reset();
    (_a = this.unmountControls) === null || _a === void 0 ? void 0 : _a.call(this);
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent, onExitComplete } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[`${pointType}X`],
      y: event[`${pointType}Y`]
    }
  };
}
var addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a2, b) => Math.abs(a2 - b);
function distance2D(a2, b) {
  const xDelta = distance(a2.x, b.x);
  const yDelta = distance(a2.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin)
        resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b) {
  return { x: a2.x - b.x, y: a2.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal)
        openHorizontal();
      if (openVertical)
        openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 1e-4;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min: min2, max: max2 }, elastic) {
  if (min2 !== void 0 && point < min2) {
    point = elastic ? mixNumber(min2, point, elastic.min) : Math.max(point, min2);
  } else if (max2 !== void 0 && point > max2) {
    point = elastic ? mixNumber(max2, point, elastic.max) : Math.min(point, max2);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min2, max2) {
  return {
    min: min2 !== void 0 ? axis.min + min2 : void 0,
    max: max2 !== void 0 ? axis.max + max2 - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min2 = constraintsAxis.min - layoutAxis.min;
  let max2 = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min2, max2] = [max2, min2];
  }
  return { min: min2, max: max2 };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp2(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX, scaleY }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const { visualElement } = node.options;
    if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function transformBox(box, transform) {
  transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
  transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll } = rootProjectionNode2;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => {
  return current ? current.ownerDocument.defaultView : null;
};

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      const { dragSnapToOrigin: dragSnapToOrigin2 } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock)
          this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock)
          return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.postRender(() => onDragStart(event, info));
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock)
        return;
      const { offset: offset4 } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset4);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset4);
      this.updateAxis("y", info.point, offset4);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    const resumeAnimation = () => eachAxis((axis) => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    });
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    const { velocity } = info;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset4) {
    const { drag: drag2 } = this.getProps();
    if (!offset4 || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset4[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const { dragConstraints, dragElastic } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis((axis) => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min: min2, max: max2 } = projection.layout.layoutBox[axis];
        axisValue.set(point[axis] - mixNumber(min2, max2, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min: min2, max: max2 } = this.constraints[axis];
      axisValue.set(mixNumber(min2, max2, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset4, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset4.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset4.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.postRender(() => handler(event, info));
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react24 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react21 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react20 = __toESM(require_react(), 1);
"use client";
var PresenceContext = (0, import_react20.createContext)(null);

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function usePresence() {
  const context = (0, import_react21.useContext)(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id3 = (0, import_react21.useId)();
  (0, import_react21.useEffect)(() => register(id3), []);
  const safeToRemove = (0, import_react21.useCallback)(() => onExitComplete && onExitComplete(id3), [id3, onExitComplete]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react22 = __toESM(require_react(), 1);
"use client";
var LayoutGroupContext = (0, import_react22.createContext)({});

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react23 = __toESM(require_react(), 1);
"use client";
var SwitchLayoutGroupContext = (0, import_react23.createContext)({});

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset4 = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset4] /= xScale;
    shadow[1 + offset4] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset4] === "number")
      shadow[2 + offset4] /= averageScale;
    if (typeof shadow[3 + offset4] === "number")
      shadow[3 + offset4] /= averageScale;
    return template(shadow);
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = createRenderBatcher(queueMicrotask, false);

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
"use client";
var MeasureLayoutWithContext = class extends import_react24.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
    const projection = visualElement.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = (0, import_react24.useContext)(LayoutGroupContext);
  return (0, import_jsx_runtime17.jsx)(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: (0, import_react24.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(
      0,
      // TODO Reinstate this if only child
      lead.opacity !== void 0 ? lead.opacity : 1,
      easeCrossfadeIn(progress2)
    );
    target.opacityExit = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min2, max2, easing) {
  return (p2) => {
    if (p2 < min2)
      return 0;
    if (p2 > max2)
      return 1;
    return easing(progress(min2, max2, p2));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a2, b) {
  return a2.min === b.min && a2.max === b.max;
}
function boxEquals(a2, b) {
  return axisEquals(a2.x, b.x) && axisEquals(a2.y, b.y);
}
function axisEqualsRounded(a2, b) {
  return Math.round(a2.min) === Math.round(b.min) && Math.round(a2.max) === Math.round(b.max);
}
function boxEqualsRounded(a2, b) {
  return axisEqualsRounded(a2.x, b.x) && axisEqualsRounded(a2.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a2, b) {
  return a2.translate === b.translate && a2.scale === b.scale && a2.originPoint === b.originPoint;
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const { crossfade } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      const { options, resumingFrom } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(false);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
    if (transformPerspective)
      transform = `perspective(${transformPerspective}px) ${transform}`;
    if (rotate)
      transform += `rotate(${rotate}deg) `;
    if (rotateX)
      transform += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform += `rotateY(${rotateY}deg) `;
    if (skewX)
      transform += `skewX(${skewX}deg) `;
    if (skewY)
      transform += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform || "none";
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a2, b) => a2.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = time.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var metrics = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
var isDebug = typeof window !== "undefined" && window.MotionDebug !== void 0;
var transformAxes = ["", "X", "Y", "Z"];
var hiddenVisibility = { visibility: "hidden" };
var animationTarget = 1e3;
var id2 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id2++;
      this.animationId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        if (isDebug) {
          metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0;
        }
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        if (isDebug) {
          window.MotionDebug.record(metrics);
        }
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp2(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        const isRoot = checkIsScrollRoot(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot,
          offset: measureScroll(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var _a;
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll } = this.root;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      var _a;
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (isDebug) {
        metrics.resolvedTargetDeltas++;
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      if (isDebug) {
        metrics.recalculatedProjection++;
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll = true) {
      var _a;
      (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.scheduleRender();
      if (notifyAll) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasDistortingTransform = false;
      const { latestValues } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform)
        return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG)
        return void 0;
      if (!this.isVisible) {
        return hiddenVisibility;
      }
      const styles = {
        visibility: ""
      };
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const { x, y } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const { onExitComplete } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  if (isDebug) {
    metrics.totalNodes++;
  }
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p2) {
  output.translate = mixNumber(delta.translate, 0, p2);
  output.scale = mixNumber(delta.scale, 1, p2);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p2) {
  output.min = mixNumber(from.min, to.min, p2);
  output.max = mixNumber(from.max, to.max, p2);
}
function mixBox(output, from, to, p2) {
  mixAxis(output.x, from.x, to.x, p2);
  mixAxis(output.y, from.y, to.y, p2);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  var _a;
  return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function addHoverEvent(node, isActive) {
  const eventName = isActive ? "pointerenter" : "pointerleave";
  const callbackName = isActive ? "onHoverStart" : "onHoverEnd";
  const handleEvent = (event, info) => {
    if (event.pointerType === "touch" || isDragActive())
      return;
    const props = node.getProps();
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", isActive);
    }
    const callback = props[callbackName];
    if (callback) {
      frame.postRender(() => callback(event, info));
    }
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
var HoverGesture = class extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
function fireSyntheticPointerEvent(name, handler) {
  if (!handler)
    return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removeStartListeners = noop;
    this.removeEndListeners = noop;
    this.removeAccessibleListeners = noop;
    this.startPointerPress = (startEvent, startInfo) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const props = this.node.getProps();
      const endPointerPress = (endEvent, endInfo) => {
        if (!this.checkPressEnd())
          return;
        const { onTap, onTapCancel, globalTapTarget } = this.node.getProps();
        const handler = !globalTapTarget && !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel : onTap;
        if (handler) {
          frame.update(() => handler(endEvent, endInfo));
        }
      };
      const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, {
        passive: !(props.onTap || props["onPointerUp"])
      });
      const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), {
        passive: !(props.onTapCancel || props["onPointerCancel"])
      });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      this.startPress(startEvent, startInfo);
    };
    this.startAccessiblePress = () => {
      const handleKeydown = (keydownEvent) => {
        if (keydownEvent.key !== "Enter" || this.isPressing)
          return;
        const handleKeyup = (keyupEvent) => {
          if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
            return;
          fireSyntheticPointerEvent("up", (event, info) => {
            const { onTap } = this.node.getProps();
            if (onTap) {
              frame.postRender(() => onTap(event, info));
            }
          });
        };
        this.removeEndListeners();
        this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      };
      const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
      const handleBlur = () => {
        if (!this.isPressing)
          return;
        fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      };
      const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = true;
    const { onTapStart, whileTap } = this.node.getProps();
    if (whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", true);
    }
    if (onTapStart) {
      frame.postRender(() => onTapStart(event, info));
    }
  }
  checkPressEnd() {
    this.removeEndListeners();
    this.isPressing = false;
    const props = this.node.getProps();
    if (props.whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", false);
    }
    return !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel } = this.node.getProps();
    if (onTapCancel) {
      frame.postRender(() => onTapCancel(event, info));
    }
  }
  mount() {
    const props = this.node.getProps();
    const removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(props.onTapStart || props["onPointerStart"])
    });
    const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners();
    this.removeEndListeners();
    this.removeAccessibleListeners();
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
  }
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/motion/index.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var import_react32 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react25 = __toESM(require_react(), 1);
"use client";
var MotionConfigContext = (0, import_react25.createContext)({
  transformPagePoint: (p2) => p2,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react26 = __toESM(require_react(), 1);
"use client";
var MotionContext = (0, import_react26.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect2 = isBrowser ? import_react27.useLayoutEffect : import_react27.useEffect;

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react28 = __toESM(require_react(), 1);
"use client";
var LazyContext = (0, import_react28.createContext)({ strict: false });

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component3, visualState, props, createVisualElement, ProjectionNodeConstructor) {
  var _a, _b;
  const { visualElement: parent } = (0, import_react29.useContext)(MotionContext);
  const lazyContext = (0, import_react29.useContext)(LazyContext);
  const presenceContext = (0, import_react29.useContext)(PresenceContext);
  const reducedMotionConfig = (0, import_react29.useContext)(MotionConfigContext).reducedMotion;
  const visualElementRef = (0, import_react29.useRef)();
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component3, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = (0, import_react29.useContext)(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    createProjectionNode2(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
  }
  const isMounted = (0, import_react29.useRef)(false);
  (0, import_react29.useInsertionEffect)(() => {
    if (visualElement && isMounted.current) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = (0, import_react29.useRef)(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
  useIsomorphicLayoutEffect2(() => {
    if (!visualElement)
      return;
    isMounted.current = true;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    microtask.render(visualElement.render);
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  (0, import_react29.useEffect)(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        var _a2;
        (_a2 = window.MotionHandoffMarkAsComplete) === null || _a2 === void 0 ? void 0 : _a2.call(window, optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
  });
  return visualElement;
}
function createProjectionNode2(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
  const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = props;
  visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
  visualElement.projection.setOptions({
    layoutId,
    layout: layout2,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof layout2 === "string" ? layout2 : "both",
    initialPromotionConfig,
    layoutScroll,
    layoutRoot
  });
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react30 = __toESM(require_react(), 1);
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react30.useCallback)(
    (instance) => {
      instance && visualState.mount && visualState.mount(instance);
      if (visualElement) {
        if (instance) {
          visualElement.mount(instance);
        } else {
          visualElement.unmount();
        }
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]
  );
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react31 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, (0, import_react31.useContext)(MotionContext));
  return (0, import_react31.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: (props) => featureProps[key].some((name) => !!props[name])
  };
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features2) {
  for (const key in features2) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features2[key]
    };
  }
}

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/index.mjs
"use client";
function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component: Component3 }) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...(0, import_react32.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout2 = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component3, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
    }
    return (0, import_jsx_runtime18.jsxs)(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? (0, import_jsx_runtime18.jsx)(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component3, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)] });
  }
  const ForwardRefMotionComponent = (0, import_react32.forwardRef)(MotionComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component3;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = (0, import_react32.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = (0, import_react32.useContext)(LazyContext).strict;
  if (preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    configAndProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
  }
}
function getProjectionFunctionality(props) {
  const { drag: drag2, layout: layout2 } = featureDefinitions;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: (drag2 === null || drag2 === void 0 ? void 0 : drag2.isEnabled(props)) || (layout2 === null || layout2 === void 0 ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
    ProjectionNode: combined.ProjectionNode
  };
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component3) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component3 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component3.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component3) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component3)
  ) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  var _a;
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react34 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react33 = __toESM(require_react(), 1);
function useConstant(init) {
  const ref = (0, import_react33.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onMount }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = (instance) => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = (0, import_react34.useContext)(MotionContext);
  const presenceContext = (0, import_react34.useContext)(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate === void 0)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index2 = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index2];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform, transformTemplate) {
  let transformString = "";
  let transformIsDefault = true;
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0)
      continue;
    let valueIsDefault = true;
    if (typeof value === "number") {
      valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
    } else {
      valueIsDefault = parseFloat(value) === 0;
    }
    if (!valueIsDefault || transformTemplate) {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (!valueIsDefault) {
        transformIsDefault = false;
        const transformName = translateAlias[key] || key;
        transformString += `${transformName}(${valueAsType}) `;
      }
      if (transformTemplate) {
        transform[key] = valueAsType;
      }
    }
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
  const { style, vars, transformOrigin: transformOrigin2 } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin2[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin2;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin2(origin, offset4, size4) {
  return typeof origin === "string" ? origin : px.transform(offset4 + size4 * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin2(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin2(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset4 = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset4);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state, latest, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style, dimensions } = state;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, { renderState, latestValues }) => {
      frame.read(() => {
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      });
      frame.render(() => {
        buildSVGAttrs(renderState, latestValues, isSVGTag(instance.tagName), props.transformTemplate);
        renderSVG(instance, renderState);
      });
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react37 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react35 = __toESM(require_react(), 1);
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return (0, import_react35.useMemo)(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(__require("@emotion/is-prop-valid").default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react36 = __toESM(require_react(), 1);
function useSVGProps(props, visualState, _isStatic, Component3) {
  const visualProps = (0, import_react36.useMemo)(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component3), props.transformTemplate);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component3, props, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component3) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component3);
    const filteredProps = filterProps(props, typeof Component3 === "string", forwardMotionProps);
    const elementProps = Component3 !== import_react37.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
    const { children } = props;
    const renderedChildren = (0, import_react37.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react37.createElement)(Component3, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/components/create-factory.mjs
function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
  return function createMotionComponent2(Component3, { forwardMotionProps } = { forwardMotionProps: false }) {
    const baseConfig = isSVGComponent(Component3) ? svgMotionConfig : htmlMotionConfig;
    const config = {
      ...baseConfig,
      preloadedFeatures,
      useRender: createUseRender(forwardMotionProps),
      createVisualElement,
      Component: Component3
    };
    return createRendererMotionComponent(config);
  };
}

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var import_react38 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (true) {
        warnOnce(nextValue.version === "11.12.0", `Attempting to mix Motion versions ${nextValue.version} with 11.12.0 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var VisualElement = class {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */ new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent)
      this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    if (this.valueSubscriptions.has(key)) {
      this.valueSubscriptions.get(key)();
    }
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    let removeSyncCheck;
    if (window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
      if (removeSyncCheck)
        removeSyncCheck();
      if (value.owner)
        value.stop();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      this.latestValues[key] = value.get();
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key, target) {
    var _a;
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(target)) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    var _a;
    const { initial } = this.props;
    let valueFromInitial;
    if (typeof initial === "string" || typeof initial === "object") {
      const variant = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
      if (variant) {
        valueFromInitial = variant[key];
      }
    }
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a2, b) {
    return a2.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
};

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle3(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle3(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current)
          this.current.textContent = `${latest}`;
      });
    }
  }
};

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component3, options) => {
  return isSVGComponent(Component3) ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component3 !== import_react38.Fragment
  });
};

// node_modules/framer-motion/dist/es/render/components/motion/create.mjs
var createMotionComponent = /* @__PURE__ */ createMotionComponentFactory({
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
}, createDomVisualElement);

// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /* @__PURE__ */ createDOMMotionComponentProxy(createMotionComponent);

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var import_react42 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var React57 = __toESM(require_react(), 1);
var import_react40 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var React56 = __toESM(require_react(), 1);
var import_react39 = __toESM(require_react(), 1);
"use client";
var PopChildMeasure = class extends React56.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size4 = this.props.sizeRef.current;
      size4.height = element.offsetHeight || 0;
      size4.width = element.offsetWidth || 0;
      size4.top = element.offsetTop;
      size4.left = element.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent }) {
  const id3 = (0, import_react39.useId)();
  const ref = (0, import_react39.useRef)(null);
  const size4 = (0, import_react39.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const { nonce } = (0, import_react39.useContext)(MotionConfigContext);
  (0, import_react39.useInsertionEffect)(() => {
    const { width, height, top, left } = size4.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id3;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id3}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent]);
  return (0, import_jsx_runtime19.jsx)(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size4, children: React56.cloneElement(children, { ref }) });
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
"use client";
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id3 = (0, import_react40.useId)();
  const memoizedOnExitComplete = (0, import_react40.useCallback)((childId) => {
    presenceChildren.set(childId, true);
    for (const isComplete of presenceChildren.values()) {
      if (!isComplete)
        return;
    }
    onExitComplete && onExitComplete();
  }, [presenceChildren, onExitComplete]);
  const context = (0, import_react40.useMemo)(
    () => ({
      id: id3,
      initial,
      isPresent,
      custom,
      onExitComplete: memoizedOnExitComplete,
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent, memoizedOnExitComplete]
  );
  (0, import_react40.useMemo)(() => {
    presenceChildren.forEach((_2, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  React57.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  if (mode === "popLayout") {
    children = (0, import_jsx_runtime20.jsx)(PopChild, { isPresent, children });
  }
  return (0, import_jsx_runtime20.jsx)(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var import_react41 = __toESM(require_react(), 1);
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  import_react41.Children.forEach(children, (child) => {
    if ((0, import_react41.isValidElement)(child))
      filtered.push(child);
  });
  return filtered;
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
"use client";
var AnimatePresence = ({ children, exitBeforeEnter, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync" }) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  const presentChildren = (0, import_react42.useMemo)(() => onlyElements(children), [children]);
  const presentKeys = presentChildren.map(getChildKey);
  const isInitialRender = (0, import_react42.useRef)(true);
  const pendingPresentChildren = (0, import_react42.useRef)(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const [diffedChildren, setDiffedChildren] = (0, import_react42.useState)(presentChildren);
  const [renderedChildren, setRenderedChildren] = (0, import_react42.useState)(presentChildren);
  useIsomorphicLayoutEffect2(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return;
  }
  if (mode === "wait" && renderedChildren.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  const { forceRender } = (0, import_react42.useContext)(LayoutGroupContext);
  return (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender === null || forceRender === void 0 ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        onExitComplete && onExitComplete();
      }
    };
    return (0, import_jsx_runtime21.jsx)(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom: isPresent ? void 0 : custom, presenceAffectsLayout, mode, onExitComplete: isPresent ? void 0 : onExit, children: child }, key);
  }) });
};

// node_modules/framer-motion/dist/es/index.mjs
"use client";

// app/components/ui/scroll-area.tsx
var React59 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var React210 = __toESM(require_react(), 1);

// node_modules/@radix-ui/number/dist/index.mjs
function clamp3(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var React58 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
"use client";
function useStateMachine(initialState, machine) {
  return React58.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = React210.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = React210.useState(null);
    const [viewport, setViewport] = React210.useState(null);
    const [content, setContent] = React210.useState(null);
    const [scrollbarX, setScrollbarX] = React210.useState(null);
    const [scrollbarY, setScrollbarY] = React210.useState(null);
    const [cornerWidth, setCornerWidth] = React210.useState(0);
    const [cornerHeight, setCornerHeight] = React210.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = React210.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = React210.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
    const direction = useDirection(dir);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
              ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }
);
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = React210.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = React210.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }
);
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = React210.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React210.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React210.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = React210.useState(false);
  React210.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Presence, { present: forceMount || visible, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarScroll = React210.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  React210.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  React210.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll3 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll3);
      return () => viewport.removeEventListener("scroll", handleScroll3);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
});
var ScrollAreaScrollbarAuto = React210.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React210.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Presence, { present: forceMount || visible, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarVisible = React210.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = React210.useRef(null);
  const pointerOffsetRef = React210.useRef(0);
  const [sizes, setSizes] = React210.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset4}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset4}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport)
            context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});
var ScrollAreaScrollbarX = React210.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React210.useState();
  const ref = React210.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  React210.useEffect(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
});
var ScrollAreaScrollbarY = React210.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React210.useState();
  const ref = React210.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  React210.useEffect(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = React210.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = React210.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
  const rectRef = React210.useRef(null);
  const prevWebkitUserSelectRef = React210.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  React210.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React210.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef(onThumbChange),
      onThumbPointerUp: useCallbackRef(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef(onThumbPointerDown),
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs2,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport)
                context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport)
              context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = React210.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }
);
var ScrollAreaThumbImpl = React210.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = React210.useRef();
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    React210.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll3 = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll3);
        return () => viewport.removeEventListener("scroll", handleScroll3);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }
);
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = React210.forwardRef(
  (props, forwardedRef) => {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }
);
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React210.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = React210.useState(0);
  const [height, setHeight] = React210.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(context.scrollbarX, () => {
    const height2 = context.scrollbarX?.offsetHeight || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    const width2 = context.scrollbarY?.offsetWidth || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset4 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset4;
  const minPointerPos = sizes.scrollbar.paddingStart + offset4;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate2 = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate2(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp3(scrollPos, scrollClampRange);
  const interpolate2 = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate2(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay2) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = React210.useRef(0);
  React210.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React210.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay2);
  }, [handleCallback, delay2]);
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var Root8 = ScrollArea;
var Viewport = ScrollAreaViewport;
var Corner = ScrollAreaCorner;

// app/components/ui/scroll-area.tsx
var import_jsx_dev_runtime30 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\scroll-area.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\scroll-area.tsx"
  );
  import.meta.hot.lastModified = "1733136384537.936";
}
var ScrollArea2 = React59.forwardRef(_c88 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Root8, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Viewport, { className: "h-full w-full rounded-[inherit]", children }, void 0, false, {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ScrollBar, {}, void 0, false, {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Corner, {}, void 0, false, {
    fileName: "app/components/ui/scroll-area.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/scroll-area.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c217 = ScrollArea2;
ScrollArea2.displayName = Root8.displayName;
var ScrollBar = React59.forwardRef(_c315 = ({
  className,
  orientation = "vertical",
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ScrollAreaScrollbar, { ref, orientation, className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, false, {
  fileName: "app/components/ui/scroll-area.tsx",
  lineNumber: 42,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/scroll-area.tsx",
  lineNumber: 41,
  columnNumber: 12
}, this));
_c413 = ScrollBar;
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var _c88;
var _c217;
var _c315;
var _c413;
$RefreshReg$(_c88, "ScrollArea$React.forwardRef");
$RefreshReg$(_c217, "ScrollArea");
$RefreshReg$(_c315, "ScrollBar$React.forwardRef");
$RefreshReg$(_c413, "ScrollBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/document-ai-chat.tsx
var import_jsx_dev_runtime31 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\document-ai-chat.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s19 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\document-ai-chat.tsx"
  );
  import.meta.hot.lastModified = "1733136384529.9412";
}
function DocumentAIChat({
  open,
  onOpenChange,
  documentTitle
}) {
  _s19();
  const [messages, setMessages] = React60.useState([{
    id: "welcome",
    content: `I'm here to help you with "${documentTitle || "this document"}". What would you like to know?`,
    role: "assistant",
    timestamp: /* @__PURE__ */ new Date()
  }]);
  const [input, setInput] = React60.useState("");
  const scrollAreaRef = React60.useRef(null);
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
    setTimeout(() => {
      const aiResponse = {
        id: String(Date.now() + 1),
        content: "This is a simulated AI response about the document. In a real implementation, this would analyze the document content and provide relevant information.",
        role: "assistant",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1e3);
  };
  React60.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Sheet, { open, onOpenChange, modal: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(SheetContent, { side: "right", className: "w-[400px] p-0 border-l shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex h-14 items-center justify-between border-b px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Bot, { className: "h-5 w-5" }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "font-semibold", children: "Document AI Assistant" }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/document-ai-chat.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", onClick: () => onOpenChange?.(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/document-ai-chat.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/document-ai-chat.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ScrollArea2, { ref: scrollAreaRef, className: "flex-1 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(AnimatePresence, { initial: false, children: messages.map((message) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(motion.div, { className: `flex gap-3 ${message.role === "assistant" ? "justify-start" : "justify-end"}`, initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: 20
    }, children: [
      message.role === "assistant" && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Bot, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/document-ai-chat.tsx",
        lineNumber: 100,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/document-ai-chat.tsx",
        lineNumber: 99,
        columnNumber: 54
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: `group relative flex max-w-[85%] rounded-lg px-3 py-2 text-sm ${message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "prose prose-sm dark:prose-invert", children: message.content }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 103,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: `absolute -top-5 right-0 hidden whitespace-nowrap text-xs text-muted-foreground group-hover:block`, children: message.timestamp.toLocaleTimeString() }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 106,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/document-ai-chat.tsx",
        lineNumber: 102,
        columnNumber: 21
      }, this)
    ] }, message.id, true, {
      fileName: "app/components/document-ai-chat.tsx",
      lineNumber: 89,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/document-ai-chat.tsx",
      lineNumber: 88,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/document-ai-chat.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/document-ai-chat.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "border-t bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("form", { onSubmit: (e) => {
      e.preventDefault();
      handleSend();
    }, className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Input, { placeholder: "Ask about this document...", value: input, onChange: (e) => setInput(e.target.value), className: "flex-1" }, void 0, false, {
        fileName: "app/components/document-ai-chat.tsx",
        lineNumber: 121,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Button, { type: "submit", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Send, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "sr-only", children: "Send message" }, void 0, false, {
          fileName: "app/components/document-ai-chat.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/document-ai-chat.tsx",
        lineNumber: 122,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/document-ai-chat.tsx",
      lineNumber: 117,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/document-ai-chat.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/document-ai-chat.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/document-ai-chat.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/document-ai-chat.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s19(DocumentAIChat, "Tn0DebBToq2U7QYMMIRtIEpQ+Bg=");
_c89 = DocumentAIChat;
var _c89;
$RefreshReg$(_c89, "DocumentAIChat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/export-dialog.tsx
var import_jsx_dev_runtime32 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\export-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s20 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\export-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384530.9407";
}
var exportOptions = [{
  id: "pdf",
  name: "PDF",
  icon: FileText,
  action: () => "Document exported as PDF"
}, {
  id: "word",
  name: "Word Document",
  icon: FileText,
  action: () => "Document exported as Word"
}, {
  id: "analysis",
  name: "Analysis Report",
  icon: FileChartColumn,
  action: () => "Analysis report exported"
}, {
  id: "grade",
  name: "Grade Report",
  icon: GraduationCap,
  action: () => "Grade report exported"
}, {
  id: "argue",
  name: "Argumentation",
  icon: MessageSquareQuote,
  action: () => "Argumentation report exported"
}];
function ExportDialog({
  open,
  onOpenChange
}) {
  _s20();
  const {
    toast
  } = useToast();
  const handleExport = async (action) => {
    try {
      const message = action();
      toast({
        description: message
      });
      onOpenChange?.(false);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occurred while exporting."
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DialogContent2, { className: "max-w-xs p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(DialogTitle2, { className: "text-center", children: "Export As" }, void 0, false, {
      fileName: "app/components/export-dialog.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/export-dialog.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt-4", children: exportOptions.map((option) => {
      const Icon = option.icon;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { variant: "ghost", className: "w-full justify-between px-2 py-2 h-10", onClick: () => handleExport(option.action), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Icon, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
            fileName: "app/components/export-dialog.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { children: option.name }, void 0, false, {
            fileName: "app/components/export-dialog.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/export-dialog.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Download, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
          fileName: "app/components/export-dialog.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this)
      ] }, option.id, true, {
        fileName: "app/components/export-dialog.tsx",
        lineNumber: 84,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/export-dialog.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/export-dialog.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/export-dialog.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s20(ExportDialog, "XbQoRqPDPo6PJEzRId7w4FMisDk=", false, function() {
  return [useToast];
});
_c90 = ExportDialog;
var _c90;
$RefreshReg$(_c90, "ExportDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/info-dialog.tsx
var React61 = __toESM(require_react(), 1);
var import_jsx_dev_runtime33 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\info-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s21 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\info-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384530.9407";
}
var scores = [{
  field: "Clarity",
  score: 85,
  color: "bg-green-500"
}, {
  field: "Structure",
  score: 92,
  color: "bg-blue-500"
}, {
  field: "Relevance",
  score: 78,
  color: "bg-yellow-500"
}, {
  field: "Innovation",
  score: 88,
  color: "bg-purple-500"
}];
function InfoDialog({
  open,
  onOpenChange
}) {
  _s21();
  const [files, setFiles] = React61.useState([]);
  const fileInputRef = React61.useRef(null);
  const handleFileChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };
  const overallScore = Math.round(scores.reduce((acc, curr) => acc + curr.score, 0) / scores.length);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(DialogContent2, { className: "max-w-2xl max-h-[85vh]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(DialogTitle2, { children: "Document Information" }, void 0, false, {
      fileName: "app/components/info-dialog.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/info-dialog.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(ScrollArea2, { className: "h-[calc(85vh-8rem)] pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Info" }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Avatar2, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(AvatarImage2, { src: "https://github.com/shadcn.png" }, void 0, false, {
                fileName: "app/components/info-dialog.tsx",
                lineNumber: 74,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(AvatarFallback2, { children: "JD" }, void 0, false, {
                fileName: "app/components/info-dialog.tsx",
                lineNumber: 75,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 73,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "font-medium", children: "Project Documentation" }, void 0, false, {
                fileName: "app/components/info-dialog.tsx",
                lineNumber: 78,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: "Created by John Doe" }, void 0, false, {
                fileName: "app/components/info-dialog.tsx",
                lineNumber: 79,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: "March 15, 2024" }, void 0, false, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/info-dialog.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Purpose" }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Label, { children: "AI Goal" }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("textarea", { className: "w-full min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", placeholder: "Enter the purpose or goal..." }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/info-dialog.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Grading Criteria" }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Button, { variant: "outline", className: "w-full justify-center", onClick: () => fileInputRef.current?.click(), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Upload, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 99,
              columnNumber: 19
            }, this),
            "Upload Documents"
          ] }, void 0, true, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "file", ref: fileInputRef, className: "hidden", onChange: handleFileChange, multiple: true }, void 0, false, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "rounded-lg border p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h4", { className: "text-sm font-medium mb-2", children: "Uploaded Documents" }, void 0, false, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("ul", { className: "space-y-2", children: files.map((file, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("li", { className: "text-sm text-muted-foreground flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { children: file.name }, void 0, false, {
                fileName: "app/components/info-dialog.tsx",
                lineNumber: 108,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Button, { variant: "ghost", size: "sm", className: "h-6 text-destructive hover:text-destructive", onClick: () => setFiles(files.filter((_2, i) => i !== index2)), children: "Remove" }, void 0, false, {
                fileName: "app/components/info-dialog.tsx",
                lineNumber: 109,
                columnNumber: 27
              }, this)
            ] }, index2, true, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 107,
              columnNumber: 51
            }, this)) }, void 0, false, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 106,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 104,
            columnNumber: 38
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/info-dialog.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Overall Score" }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 p-6 text-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-6xl font-bold tracking-tighter mb-2", children: [
            overallScore,
            "%"
          ] }, void 0, true, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: "Overall Performance Score" }, void 0, false, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "space-y-4", children: scores.map((score) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex justify-between text-sm mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { children: score.field }, void 0, false, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 133,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "font-medium", children: [
              score.score,
              "%"
            ] }, void 0, true, {
              fileName: "app/components/info-dialog.tsx",
              lineNumber: 134,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 132,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: `h-full ${score.color} transition-all duration-500`, style: {
            width: `${score.score}%`
          } }, void 0, false, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 137,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/info-dialog.tsx",
            lineNumber: 136,
            columnNumber: 21
          }, this)
        ] }, score.field, true, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 131,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/components/info-dialog.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/info-dialog.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/info-dialog.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/info-dialog.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex justify-end pt-4 border-t", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Button, { className: "w-full justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Download, { className: "mr-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/info-dialog.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      "Download Report"
    ] }, void 0, true, {
      fileName: "app/components/info-dialog.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/info-dialog.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/info-dialog.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/info-dialog.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s21(InfoDialog, "sEIe4SlBgkPO12HR+kC1bRCVuVc=");
_c91 = InfoDialog;
var _c91;
$RefreshReg$(_c91, "InfoDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/link-library-dialog.tsx
var React62 = __toESM(require_react(), 1);
var import_jsx_dev_runtime34 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\link-library-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s23 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\link-library-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384531.9402";
}
var availableLibraries = [{
  id: "ai-research",
  name: "AI Research Papers",
  emoji: "\u{1F916}",
  description: "Collection of AI and ML research papers"
}, {
  id: "web-dev",
  name: "Web Development Resources",
  emoji: "\u{1F310}",
  description: "Frontend and backend development guides"
}, {
  id: "ui-design",
  name: "UI Design Patterns",
  emoji: "\u{1F3A8}",
  description: "Common UI/UX design patterns and examples"
}];
function LinkLibraryDialog({
  open,
  onOpenChange
}) {
  _s23();
  const [searchQuery, setSearchQuery] = React62.useState("");
  const [selectedLibraries, setSelectedLibraries] = React62.useState([]);
  const filteredLibraries = availableLibraries.filter((library) => library.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const toggleLibrary = (libraryId) => {
    setSelectedLibraries((prev) => prev.includes(libraryId) ? prev.filter((id3) => id3 !== libraryId) : [...prev, libraryId]);
  };
  const handleSave = () => {
    console.log("Linking libraries:", selectedLibraries);
    onOpenChange?.(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(DialogContent2, { className: "max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(DialogTitle2, { children: "Link Library" }, void 0, false, {
      fileName: "app/components/link-library-dialog.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/link-library-dialog.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
          fileName: "app/components/link-library-dialog.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Input, { placeholder: "Search libraries...", className: "pl-8", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }, void 0, false, {
          fileName: "app/components/link-library-dialog.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/link-library-dialog.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "space-y-2", children: filteredLibraries.map((library) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("button", { onClick: () => toggleLibrary(library.id), className: `w-full flex items-center gap-3 rounded-lg border p-3 text-left transition-colors hover:bg-accent ${selectedLibraries.includes(library.id) ? "border-primary bg-primary/5" : "border-border"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "text-2xl", children: library.emoji }, void 0, false, {
          fileName: "app/components/link-library-dialog.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "font-medium", children: library.name }, void 0, false, {
            fileName: "app/components/link-library-dialog.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "text-sm text-muted-foreground truncate", children: library.description }, void 0, false, {
            fileName: "app/components/link-library-dialog.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/link-library-dialog.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        selectedLibraries.includes(library.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Check, { className: "h-4 w-4 text-primary" }, void 0, false, {
          fileName: "app/components/link-library-dialog.tsx",
          lineNumber: 80,
          columnNumber: 60
        }, this)
      ] }, library.id, true, {
        fileName: "app/components/link-library-dialog.tsx",
        lineNumber: 72,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/link-library-dialog.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex justify-end gap-2 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Button, { variant: "outline", onClick: () => onOpenChange?.(false), children: "Cancel" }, void 0, false, {
          fileName: "app/components/link-library-dialog.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Button, { onClick: handleSave, children: [
          "Link Selected (",
          selectedLibraries.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/components/link-library-dialog.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/link-library-dialog.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/link-library-dialog.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/link-library-dialog.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/link-library-dialog.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s23(LinkLibraryDialog, "M+8xvk1ceqIXl6yEfz+YEJALyss=");
_c96 = LinkLibraryDialog;
var _c96;
$RefreshReg$(_c96, "LinkLibraryDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/move-to-dialog.tsx
var React63 = __toESM(require_react(), 1);
var import_jsx_dev_runtime35 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\move-to-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s24 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\move-to-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384531.9402";
}
function MoveToDialog({
  open,
  onOpenChange
}) {
  _s24();
  const {
    workspaces: workspaces2,
    addPage
  } = useWorkspaces();
  const {
    toast
  } = useToast();
  const [selectedWorkspace, setSelectedWorkspace] = React63.useState(null);
  const handleMove = () => {
    if (!selectedWorkspace)
      return;
    toast({
      description: "Page moved successfully"
    });
    onOpenChange?.(false);
  };
  const handleCreateWorkspace = () => {
    const newPage = addPage();
    setSelectedWorkspace(newPage.id);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(DialogContent2, { className: "max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(DialogTitle2, { children: "Move to" }, void 0, false, {
      fileName: "app/components/move-to-dialog.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/move-to-dialog.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ScrollArea2, { className: "h-[300px] pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "space-y-2", children: workspaces2.map((workspace) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { onClick: () => setSelectedWorkspace(workspace.id), className: `w-full flex items-center gap-3 rounded-lg border p-3 text-left transition-colors hover:bg-accent ${selectedWorkspace === workspace.id ? "border-primary bg-primary/5" : "border-border"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-2xl", children: workspace.emoji }, void 0, false, {
        fileName: "app/components/move-to-dialog.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "font-medium", children: workspace.name }, void 0, false, {
          fileName: "app/components/move-to-dialog.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-sm text-muted-foreground truncate", children: [
          workspace.pages.length,
          " pages"
        ] }, void 0, true, {
          fileName: "app/components/move-to-dialog.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/move-to-dialog.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ChevronRight, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
        fileName: "app/components/move-to-dialog.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this)
    ] }, workspace.id, true, {
      fileName: "app/components/move-to-dialog.tsx",
      lineNumber: 63,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/move-to-dialog.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/move-to-dialog.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Button, { variant: "outline", className: "w-full justify-start gap-2", onClick: handleCreateWorkspace, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/move-to-dialog.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        "Create New Workspace"
      ] }, void 0, true, {
        fileName: "app/components/move-to-dialog.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Button, { variant: "outline", onClick: () => onOpenChange?.(false), children: "Cancel" }, void 0, false, {
          fileName: "app/components/move-to-dialog.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Button, { onClick: handleMove, disabled: !selectedWorkspace, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(FolderTree, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/move-to-dialog.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          "Move"
        ] }, void 0, true, {
          fileName: "app/components/move-to-dialog.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/move-to-dialog.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/move-to-dialog.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/move-to-dialog.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/move-to-dialog.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s24(MoveToDialog, "SXr6zlR7j8Hd8LmIkSFZtDccmDo=", false, function() {
  return [useWorkspaces, useToast];
});
_c97 = MoveToDialog;
var _c97;
$RefreshReg$(_c97, "MoveToDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/share-dialog.tsx
var React64 = __toESM(require_react(), 1);
var import_jsx_dev_runtime36 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\share-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s25 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\share-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384534.938";
}
var owner = {
  name: "You",
  email: "you@example.com",
  role: "Owner",
  lastActive: "Active now",
  avatar: "https://github.com/shadcn.png"
};
var people = [{
  name: "Lindsay Walton",
  email: "lindsay.walton@example.com",
  role: "Editor",
  lastActive: "2 hours ago",
  avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}, {
  name: "Tom Cook",
  email: "tom.cook@example.com",
  role: "Viewer",
  lastActive: "3 days ago",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}, {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  role: "Editor",
  lastActive: "1 week ago",
  avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}];
function ShareDialog({
  open,
  onOpenChange
}) {
  _s25();
  const [copied, setCopied] = React64.useState(false);
  const [searchQuery, setSearchQuery] = React64.useState("");
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(DialogContent2, { className: "max-w-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(DialogTitle2, { children: "Share Document" }, void 0, false, {
      fileName: "app/components/share-dialog.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/share-dialog.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-4 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "rounded-lg border p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h3", { className: "text-sm font-medium", children: "Share via link" }, void 0, false, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "Anyone with the link can view" }, void 0, false, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/share-dialog.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { variant: "outline", size: "sm", onClick: copyLink, children: copied ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Check, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 81,
            columnNumber: 21
          }, this),
          "Copied!"
        ] }, void 0, true, {
          fileName: "app/components/share-dialog.tsx",
          lineNumber: 80,
          columnNumber: 27
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Copy, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 84,
            columnNumber: 21
          }, this),
          "Copy link"
        ] }, void 0, true, {
          fileName: "app/components/share-dialog.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/share-dialog.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/share-dialog.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/share-dialog.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h3", { className: "text-sm font-medium", children: "Share with people" }, void 0, false, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-2 flex gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 97,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Input, { placeholder: "Search by name or email...", className: "pl-8", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 98,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 101,
                columnNumber: 19
              }, this),
              "Invite people"
            ] }, void 0, true, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/share-dialog.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "rounded-lg border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("table", { className: "min-w-full divide-y divide-border", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-medium text-muted-foreground", children: "Name" }, void 0, false, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 111,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-muted-foreground", children: "Access" }, void 0, false, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-medium text-muted-foreground", children: "Last active" }, void 0, false, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "col", className: "relative py-3.5 pl-3 pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { className: "sr-only", children: "Actions" }, void 0, false, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 121,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 120,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 110,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tbody", { className: "divide-y divide-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { className: "bg-muted/30", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: owner.avatar, alt: "", className: "h-8 w-8 rounded-full" }, void 0, false, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 130,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "font-medium", children: owner.name }, void 0, false, {
                    fileName: "app/components/share-dialog.tsx",
                    lineNumber: 132,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: owner.email }, void 0, false, {
                    fileName: "app/components/share-dialog.tsx",
                    lineNumber: 133,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 131,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 129,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Crown, { className: "h-4 w-4 text-amber-500" }, void 0, false, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 141,
                  columnNumber: 25
                }, this),
                "Owner"
              ] }, void 0, true, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 140,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 139,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-muted-foreground", children: owner.lastActive }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 145,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm" }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this),
            people.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: person.avatar, alt: "", className: "h-8 w-8 rounded-full" }, void 0, false, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 157,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "font-medium", children: person.name }, void 0, false, {
                    fileName: "app/components/share-dialog.tsx",
                    lineNumber: 159,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: person.email }, void 0, false, {
                    fileName: "app/components/share-dialog.tsx",
                    lineNumber: 160,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 158,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 156,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 155,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("select", { className: "w-24 rounded-md border-0 bg-transparent py-1.5 text-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-ring", defaultValue: person.role.toLowerCase(), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "viewer", children: "Viewer" }, void 0, false, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 168,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "editor", children: "Editor" }, void 0, false, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 169,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("option", { value: "admin", children: "Admin" }, void 0, false, {
                  fileName: "app/components/share-dialog.tsx",
                  lineNumber: 170,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 167,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 166,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-muted-foreground", children: person.lastActive }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 173,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { variant: "ghost", size: "sm", className: "text-destructive hover:text-destructive", children: "Remove" }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 177,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/share-dialog.tsx",
                lineNumber: 176,
                columnNumber: 23
              }, this)
            ] }, person.email, true, {
              fileName: "app/components/share-dialog.tsx",
              lineNumber: 154,
              columnNumber: 41
            }, this))
          ] }, void 0, true, {
            fileName: "app/components/share-dialog.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/share-dialog.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/share-dialog.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/share-dialog.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/share-dialog.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/share-dialog.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/share-dialog.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_s25(ShareDialog, "Rxg1kcBSWYnj3KfUStHDXAbQpNE=");
_c98 = ShareDialog;
var _c98;
$RefreshReg$(_c98, "ShareDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/version-history-dialog.tsx
var React65 = __toESM(require_react(), 1);
var import_jsx_dev_runtime37 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\version-history-dialog.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s26 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\version-history-dialog.tsx"
  );
  import.meta.hot.lastModified = "1733136384540.9348";
}
var versions = [{
  id: "v1",
  timestamp: new Date(2024, 2, 15, 14, 30),
  author: {
    name: "John Doe",
    avatar: "https://github.com/shadcn.png"
  },
  changes: ["Updated project documentation", "Added new section on deployment"]
}, {
  id: "v2",
  timestamp: new Date(2024, 2, 15, 10, 15),
  author: {
    name: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  changes: ["Fixed typos in introduction", "Restructured content hierarchy"]
}, {
  id: "v3",
  timestamp: new Date(2024, 2, 14, 16, 45),
  author: {
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  changes: ["Initial document creation", "Added basic structure and content"]
}];
function VersionHistoryDialog({
  open,
  onOpenChange
}) {
  _s26();
  const {
    toast
  } = useToast();
  const [selectedVersion, setSelectedVersion] = React65.useState(null);
  const handleRestore = () => {
    if (!selectedVersion)
      return;
    toast({
      description: "Version restored successfully"
    });
    onOpenChange?.(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Dialog2, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(DialogContent2, { className: "max-w-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(DialogTitle2, { children: "Version History" }, void 0, false, {
      fileName: "app/components/version-history-dialog.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/version-history-dialog.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ScrollArea2, { className: "h-[400px] pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "absolute left-8 top-0 bottom-0 w-px bg-border" }, void 0, false, {
        fileName: "app/components/version-history-dialog.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "space-y-8", children: versions.map((version) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("button", { onClick: () => setSelectedVersion(version.id), className: `w-full group rounded-lg border p-4 text-left transition-colors hover:bg-accent ${selectedVersion === version.id ? "border-primary bg-primary/5" : "border-border"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border bg-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Clock, { className: "h-3 w-3 text-muted-foreground" }, void 0, false, {
          fileName: "app/components/version-history-dialog.tsx",
          lineNumber: 87,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/version-history-dialog.tsx",
          lineNumber: 86,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("img", { src: version.author.avatar, alt: "", className: "h-8 w-8 rounded-full" }, void 0, false, {
              fileName: "app/components/version-history-dialog.tsx",
              lineNumber: 92,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "font-medium", children: version.author.name }, void 0, false, {
                fileName: "app/components/version-history-dialog.tsx",
                lineNumber: 94,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: version.timestamp.toLocaleString() }, void 0, false, {
                fileName: "app/components/version-history-dialog.tsx",
                lineNumber: 95,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/version-history-dialog.tsx",
              lineNumber: 93,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/version-history-dialog.tsx",
            lineNumber: 91,
            columnNumber: 23
          }, this),
          selectedVersion === version.id && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Check, { className: "h-4 w-4 text-primary" }, void 0, false, {
            fileName: "app/components/version-history-dialog.tsx",
            lineNumber: 100,
            columnNumber: 58
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/version-history-dialog.tsx",
          lineNumber: 90,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "mt-2 space-y-1", children: version.changes.map((change, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: [
          "\u2022 ",
          change
        ] }, index2, true, {
          fileName: "app/components/version-history-dialog.tsx",
          lineNumber: 104,
          columnNumber: 63
        }, this)) }, void 0, false, {
          fileName: "app/components/version-history-dialog.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/version-history-dialog.tsx",
        lineNumber: 85,
        columnNumber: 19
      }, this) }, version.id, false, {
        fileName: "app/components/version-history-dialog.tsx",
        lineNumber: 84,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/components/version-history-dialog.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/version-history-dialog.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/version-history-dialog.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { variant: "outline", onClick: () => onOpenChange?.(false), children: "Cancel" }, void 0, false, {
        fileName: "app/components/version-history-dialog.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { onClick: handleRestore, disabled: !selectedVersion, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(RotateCcw, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/version-history-dialog.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        "Restore Version"
      ] }, void 0, true, {
        fileName: "app/components/version-history-dialog.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/version-history-dialog.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/version-history-dialog.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/version-history-dialog.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s26(VersionHistoryDialog, "VKsO8mBLAgdU0wo+3CRAesrblVs=", false, function() {
  return [useToast];
});
_c99 = VersionHistoryDialog;
var _c99;
$RefreshReg$(_c99, "VersionHistoryDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav-actions.tsx
var import_jsx_dev_runtime38 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\nav-actions.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s27 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\nav-actions.tsx"
  );
  import.meta.hot.lastModified = "1733136384531.9402";
}
var linkedLibraries = [{
  id: "react-docs",
  name: "React Documentation",
  emoji: "\u{1F4DA}"
}, {
  id: "design-system",
  name: "Design System Guidelines",
  emoji: "\u{1F3A8}"
}];
var data2 = [[{
  label: "Copy Link",
  icon: Link2,
  action: async () => {
    await navigator.clipboard.writeText(window.location.href);
    return "Link copied to clipboard";
  }
}, {
  label: "Duplicate",
  icon: Copy,
  action: (id3, addPage) => {
    const newPage = addPage();
    return {
      id: newPage.id,
      message: "Page duplicated successfully"
    };
  }
}, {
  label: "Move to",
  icon: FolderTree,
  dialog: "moveTo"
}], [{
  label: "Undo",
  icon: CornerUpLeft,
  action: () => {
    return "Changes undone";
  }
}, {
  label: "Version History",
  icon: GalleryVerticalEnd,
  dialog: "versionHistory"
}, {
  label: "Export",
  icon: Download,
  dialog: "export"
}], [{
  label: "Move to Archive",
  icon: Archive,
  className: "text-destructive hover:text-destructive",
  action: () => {
    return "Page moved to archive";
  }
}]];
function NavActions() {
  _s27();
  const {
    id: id3
  } = useParams();
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    isBookmarked,
    addBookmark,
    removeBookmark
  } = useBookmarks();
  const {
    addPage
  } = useWorkspaces();
  const [isOpen, setIsOpen] = React66.useState(false);
  const [shareOpen, setShareOpen] = React66.useState(false);
  const [infoOpen, setInfoOpen] = React66.useState(false);
  const [aiChatOpen, setAiChatOpen] = React66.useState(false);
  const [linkLibraryOpen, setLinkLibraryOpen] = React66.useState(false);
  const [moveToOpen, setMoveToOpen] = React66.useState(false);
  const [versionHistoryOpen, setVersionHistoryOpen] = React66.useState(false);
  const [exportOpen, setExportOpen] = React66.useState(false);
  const bookmarked = id3 ? isBookmarked(id3) : false;
  const toggleBookmark = React66.useCallback(() => {
    if (!id3)
      return;
    if (bookmarked) {
      removeBookmark(id3);
    } else {
      addBookmark(id3);
    }
  }, [id3, bookmarked, addBookmark, removeBookmark]);
  const handleAction = async (action, dialog) => {
    if (dialog) {
      switch (dialog) {
        case "moveTo":
          setMoveToOpen(true);
          return;
        case "versionHistory":
          setVersionHistoryOpen(true);
          return;
        case "export":
          setExportOpen(true);
          return;
      }
      return;
    }
    if (!action)
      return;
    try {
      if (typeof action === "function") {
        const result = await action(id3, addPage);
        if (typeof result === "string") {
          toast({
            description: result
          });
        } else if (result?.id) {
          navigate(`/pages/${result.id}`);
          toast({
            description: result.message
          });
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occurred while performing this action."
      });
    }
  };
  React66.useEffect(() => {
    setIsOpen(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ShareDialog, { open: shareOpen, onOpenChange: setShareOpen }, void 0, false, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(InfoDialog, { open: infoOpen, onOpenChange: setInfoOpen }, void 0, false, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DocumentAIChat, { open: aiChatOpen, onOpenChange: setAiChatOpen, documentTitle: "Project Documentation" }, void 0, false, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(LinkLibraryDialog, { open: linkLibraryOpen, onOpenChange: setLinkLibraryOpen }, void 0, false, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(MoveToDialog, { open: moveToOpen, onOpenChange: setMoveToOpen }, void 0, false, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(VersionHistoryDialog, { open: versionHistoryOpen, onOpenChange: setVersionHistoryOpen }, void 0, false, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ExportDialog, { open: exportOpen, onOpenChange: setExportOpen }, void 0, false, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "hidden font-medium text-muted-foreground md:inline-block", children: "Edit Oct 08" }, void 0, false, {
        fileName: "app/components/nav-actions.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "hidden md:flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => setInfoOpen(true), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Info, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 181,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Info" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 182,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => setAiChatOpen(true), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Sparkles, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 185,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Ask AI" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DropdownMenu2, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(BookOpen, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 191,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Library" }, void 0, false, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 192,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 190,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 189,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DropdownMenuContent2, { align: "end", className: "w-56", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "px-2 py-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h4", { className: "text-sm font-medium", children: "Linked Libraries" }, void 0, false, {
                fileName: "app/components/nav-actions.tsx",
                lineNumber: 197,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "Libraries connected to this document" }, void 0, false, {
                fileName: "app/components/nav-actions.tsx",
                lineNumber: 198,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 196,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this),
            linkedLibraries.map((library) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DropdownMenuItem2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Link, { to: `/library/${library.id}`, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "text-base", children: library.emoji }, void 0, false, {
                fileName: "app/components/nav-actions.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { children: library.name }, void 0, false, {
                fileName: "app/components/nav-actions.tsx",
                lineNumber: 206,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this) }, library.id, false, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 203,
              columnNumber: 47
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DropdownMenuSeparator2, {}, void 0, false, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 209,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(DropdownMenuItem2, { onSelect: () => setLinkLibraryOpen(true), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Link2, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/components/nav-actions.tsx",
                lineNumber: 211,
                columnNumber: 17
              }, this),
              "Link Library"
            ] }, void 0, true, {
              fileName: "app/components/nav-actions.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => setShareOpen(true), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Share2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 217,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Share" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 218,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/nav-actions.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: toggleBookmark, children: [
        bookmarked ? /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(BookmarkCheck, { className: "h-4 w-4 fill-current" }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 222,
          columnNumber: 25
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Bookmark, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 222,
          columnNumber: 78
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Bookmark" }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 223,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/nav-actions.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Popover2, { open: isOpen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(PopoverTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Button, { variant: "ghost", size: "icon", className: "h-7 w-7 data-[state=open]:bg-accent", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 228,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "More options" }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(PopoverContent2, { className: "w-56 overflow-hidden rounded-lg p-0", align: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Sidebar, { collapsible: "none", className: "bg-transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(SidebarContent, { children: data2.map((group, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(SidebarGroup, { className: "border-b last:border-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(SidebarGroupContent, { className: "gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(SidebarMenu, { children: group.map((item, index3) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(SidebarMenuButton, { className: item.className, onClick: () => handleAction(item.action, item.dialog), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(item.icon, {}, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 240,
            columnNumber: 31
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { children: item.label }, void 0, false, {
            fileName: "app/components/nav-actions.tsx",
            lineNumber: 240,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 239,
          columnNumber: 29
        }, this) }, index3, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 238,
          columnNumber: 53
        }, this)) }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 237,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 236,
          columnNumber: 21
        }, this) }, index2, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 235,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 234,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/nav-actions.tsx",
          lineNumber: 232,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/nav-actions.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav-actions.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav-actions.tsx",
    lineNumber: 167,
    columnNumber: 10
  }, this);
}
_s27(NavActions, "M469MrJYLqptGtNQ9TYLiZ3YLQA=", false, function() {
  return [useParams, useNavigate, useToast, useBookmarks, useWorkspaces];
});
_c100 = NavActions;
var _c100;
$RefreshReg$(_c100, "NavActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/breadcrumb.tsx
var React67 = __toESM(require_react(), 1);
var import_jsx_dev_runtime39 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\breadcrumb.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\breadcrumb.tsx"
  );
  import.meta.hot.lastModified = "1733136384535.9375";
}
var Breadcrumb = React67.forwardRef(_c101 = ({
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("nav", { ref, "aria-label": "breadcrumb", ...props }, void 0, false, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c218 = Breadcrumb;
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React67.forwardRef(_c316 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("ol", { ref, className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className), ...props }, void 0, false, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c414 = BreadcrumbList;
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React67.forwardRef(_c512 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props }, void 0, false, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c611 = BreadcrumbItem;
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React67.forwardRef(_c710 = ({
  asChild,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Comp, { ref, className: cn("transition-colors hover:text-foreground", className), ...props }, void 0, false, {
    fileName: "app/components/ui/breadcrumb.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
});
_c810 = BreadcrumbLink;
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbInput = React67.forwardRef(_c910 = ({
  value,
  onChange
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Input, { ref, value, onChange: (e) => onChange?.(e.target.value), className: "h-auto border-none bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0" }, void 0, false, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 56,
  columnNumber: 12
}, this));
_c106 = BreadcrumbInput;
BreadcrumbInput.displayName = "BreadcrumbInput";
var BreadcrumbPage = React67.forwardRef(_c114 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cn("font-normal text-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 62,
  columnNumber: 12
}, this));
_c124 = BreadcrumbPage;
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className), ...props, children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ChevronRight, {}, void 0, false, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 70,
  columnNumber: 18
}, this) }, void 0, false, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 69,
  columnNumber: 7
}, this);
_c134 = BreadcrumbSeparator;
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { role: "presentation", "aria-hidden": "true", className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
    fileName: "app/components/ui/breadcrumb.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: "sr-only", children: "More" }, void 0, false, {
    fileName: "app/components/ui/breadcrumb.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/breadcrumb.tsx",
  lineNumber: 77,
  columnNumber: 7
}, this);
_c144 = BreadcrumbEllipsis;
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
var _c101;
var _c218;
var _c316;
var _c414;
var _c512;
var _c611;
var _c710;
var _c810;
var _c910;
var _c106;
var _c114;
var _c124;
var _c134;
var _c144;
$RefreshReg$(_c101, "Breadcrumb$React.forwardRef");
$RefreshReg$(_c218, "Breadcrumb");
$RefreshReg$(_c316, "BreadcrumbList$React.forwardRef");
$RefreshReg$(_c414, "BreadcrumbList");
$RefreshReg$(_c512, "BreadcrumbItem$React.forwardRef");
$RefreshReg$(_c611, "BreadcrumbItem");
$RefreshReg$(_c710, "BreadcrumbLink$React.forwardRef");
$RefreshReg$(_c810, "BreadcrumbLink");
$RefreshReg$(_c910, "BreadcrumbInput$React.forwardRef");
$RefreshReg$(_c106, "BreadcrumbInput");
$RefreshReg$(_c114, "BreadcrumbPage$React.forwardRef");
$RefreshReg$(_c124, "BreadcrumbPage");
$RefreshReg$(_c134, "BreadcrumbSeparator");
$RefreshReg$(_c144, "BreadcrumbEllipsis");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout.tsx
var import_jsx_dev_runtime40 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id3) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout.tsx"' + id3);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout.tsx"
  );
  import.meta.hot.lastModified = "1733136384530.9407";
}
function Layout({
  children,
  title,
  emoji = "\u{1F4C4}",
  onTitleChange,
  onEmojiChange,
  minimal = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(SidebarProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(AppSidebar, { onPageTitleChange: onTitleChange }, void 0, false, {
      fileName: "app/components/layout.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(SidebarInset, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("header", { className: "flex h-14 shrink-0 items-center", children: minimal ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(SidebarTrigger, {}, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 40,
        columnNumber: 22
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex flex-1 items-center gap-2 px-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(SidebarTrigger, {}, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Separator4, { orientation: "vertical", className: "mr-2 h-4" }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Breadcrumb, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(BreadcrumbList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(BreadcrumbItem, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(EmojiPicker, { value: emoji, onChange: onEmojiChange }, void 0, false, {
              fileName: "app/components/layout.tsx",
              lineNumber: 49,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(BreadcrumbInput, { value: title, onChange: onTitleChange }, void 0, false, {
              fileName: "app/components/layout.tsx",
              lineNumber: 50,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/layout.tsx",
            lineNumber: 48,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/layout.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "ml-auto px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(NavActions, {}, void 0, false, {
          fileName: "app/components/layout.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/layout.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout.tsx",
        lineNumber: 42,
        columnNumber: 22
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex flex-1 flex-col gap-4 px-4 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto w-full max-w-3xl", children }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layout.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c107 = Layout;
var _c107;
$RefreshReg$(_c107, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  usePageTitles,
  usePageEmoji,
  Separator4 as Separator,
  Collapsible2 as Collapsible,
  CollapsibleTrigger2 as CollapsibleTrigger,
  CollapsibleContent2 as CollapsibleContent,
  motion,
  AnimatePresence,
  ScrollArea2 as ScrollArea,
  Layout
};
//# sourceMappingURL=/build/_shared/chunk-RLMXWHHF.js.map
