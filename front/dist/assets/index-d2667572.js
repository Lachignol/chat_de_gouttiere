function kv(e, t) {
  for (var i = 0; i < t.length; i++) {
    const o = t[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(o, s);
          l &&
            Object.defineProperty(
              e,
              s,
              l.get ? l : { enumerable: !0, get: () => o[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const l = {};
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const l = i(s);
    fetch(s.href, l);
  }
})();
var Cv =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Tv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ef = { exports: {} },
  Ps = {},
  tf = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
  Ov = Symbol.for("react.portal"),
  Nv = Symbol.for("react.fragment"),
  zv = Symbol.for("react.strict_mode"),
  Mv = Symbol.for("react.profiler"),
  Rv = Symbol.for("react.provider"),
  Iv = Symbol.for("react.context"),
  Av = Symbol.for("react.forward_ref"),
  jv = Symbol.for("react.suspense"),
  Bv = Symbol.for("react.memo"),
  Dv = Symbol.for("react.lazy"),
  Ch = Symbol.iterator;
function Fv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ch && e[Ch]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rf = Object.assign,
  of = {};
function Ii(e, t, i) {
  (this.props = e),
    (this.context = t),
    (this.refs = of),
    (this.updater = i || nf);
}
Ii.prototype.isReactComponent = {};
Ii.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ii.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sf() {}
sf.prototype = Ii.prototype;
function lu(e, t, i) {
  (this.props = e),
    (this.context = t),
    (this.refs = of),
    (this.updater = i || nf);
}
var uu = (lu.prototype = new sf());
uu.constructor = lu;
rf(uu, Ii.prototype);
uu.isPureReactComponent = !0;
var Th = Array.isArray,
  af = Object.prototype.hasOwnProperty,
  cu = { current: null },
  lf = { key: !0, ref: !0, __self: !0, __source: !0 };
function uf(e, t, i) {
  var o,
    s = {},
    l = null,
    c = null;
  if (t != null)
    for (o in (t.ref !== void 0 && (c = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      af.call(t, o) && !lf.hasOwnProperty(o) && (s[o] = t[o]);
  var d = arguments.length - 2;
  if (d === 1) s.children = i;
  else if (1 < d) {
    for (var f = Array(d), m = 0; m < d; m++) f[m] = arguments[m + 2];
    s.children = f;
  }
  if (e && e.defaultProps)
    for (o in ((d = e.defaultProps), d)) s[o] === void 0 && (s[o] = d[o]);
  return {
    $$typeof: br,
    type: e,
    key: l,
    ref: c,
    props: s,
    _owner: cu.current,
  };
}
function Zv(e, t) {
  return {
    $$typeof: br,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function Uv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (i) {
      return t[i];
    })
  );
}
var Oh = /\/+/g;
function Ta(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Uv("" + e.key)
    : t.toString(36);
}
function Io(e, t, i, o, s) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var c = !1;
  if (e === null) c = !0;
  else
    switch (l) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case br:
          case Ov:
            c = !0;
        }
    }
  if (c)
    return (
      (c = e),
      (s = s(c)),
      (e = o === "" ? "." + Ta(c, 0) : o),
      Th(s)
        ? ((i = ""),
          e != null && (i = e.replace(Oh, "$&/") + "/"),
          Io(s, t, i, "", function (m) {
            return m;
          }))
        : s != null &&
          (hu(s) &&
            (s = Zv(
              s,
              i +
                (!s.key || (c && c.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Oh, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((c = 0), (o = o === "" ? "." : o + ":"), Th(e)))
    for (var d = 0; d < e.length; d++) {
      l = e[d];
      var f = o + Ta(l, d);
      c += Io(l, t, i, f, s);
    }
  else if (((f = Fv(e)), typeof f == "function"))
    for (e = f.call(e), d = 0; !(l = e.next()).done; )
      (l = l.value), (f = o + Ta(l, d++)), (c += Io(l, t, i, f, s));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return c;
}
function vo(e, t, i) {
  if (e == null) return e;
  var o = [],
    s = 0;
  return (
    Io(e, o, "", "", function (l) {
      return t.call(i, l, s++);
    }),
    o
  );
}
function bv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = i));
        },
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = i));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var qe = { current: null },
  Ao = { transition: null },
  Hv = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: Ao,
    ReactCurrentOwner: cu,
  };
Y.Children = {
  map: vo,
  forEach: function (e, t, i) {
    vo(
      e,
      function () {
        t.apply(this, arguments);
      },
      i
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = Ii;
Y.Fragment = Nv;
Y.Profiler = Mv;
Y.PureComponent = lu;
Y.StrictMode = zv;
Y.Suspense = jv;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hv;
Y.cloneElement = function (e, t, i) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var o = rf({}, e.props),
    s = e.key,
    l = e.ref,
    c = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (c = cu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps;
    for (f in t)
      af.call(t, f) &&
        !lf.hasOwnProperty(f) &&
        (o[f] = t[f] === void 0 && d !== void 0 ? d[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) o.children = i;
  else if (1 < f) {
    d = Array(f);
    for (var m = 0; m < f; m++) d[m] = arguments[m + 2];
    o.children = d;
  }
  return { $$typeof: br, type: e.type, key: s, ref: l, props: o, _owner: c };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Iv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rv, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = uf;
Y.createFactory = function (e) {
  var t = uf.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Av, render: e };
};
Y.isValidElement = hu;
Y.lazy = function (e) {
  return { $$typeof: Dv, _payload: { _status: -1, _result: e }, _init: bv };
};
Y.memo = function (e, t) {
  return { $$typeof: Bv, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Ao.transition;
  Ao.transition = {};
  try {
    e();
  } finally {
    Ao.transition = t;
  }
};
Y.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Y.useCallback = function (e, t) {
  return qe.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return qe.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return qe.current.useEffect(e, t);
};
Y.useId = function () {
  return qe.current.useId();
};
Y.useImperativeHandle = function (e, t, i) {
  return qe.current.useImperativeHandle(e, t, i);
};
Y.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return qe.current.useMemo(e, t);
};
Y.useReducer = function (e, t, i) {
  return qe.current.useReducer(e, t, i);
};
Y.useRef = function (e) {
  return qe.current.useRef(e);
};
Y.useState = function (e) {
  return qe.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, i) {
  return qe.current.useSyncExternalStore(e, t, i);
};
Y.useTransition = function () {
  return qe.current.useTransition();
};
Y.version = "18.2.0";
tf.exports = Y;
var N = tf.exports;
const Sr = Tv(N),
  Wv = kv({ __proto__: null, default: Sr }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $v = N,
  Vv = Symbol.for("react.element"),
  qv = Symbol.for("react.fragment"),
  Kv = Object.prototype.hasOwnProperty,
  Gv = $v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qv = { key: !0, ref: !0, __self: !0, __source: !0 };
function cf(e, t, i) {
  var o,
    s = {},
    l = null,
    c = null;
  i !== void 0 && (l = "" + i),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (c = t.ref);
  for (o in t) Kv.call(t, o) && !Qv.hasOwnProperty(o) && (s[o] = t[o]);
  if (e && e.defaultProps)
    for (o in ((t = e.defaultProps), t)) s[o] === void 0 && (s[o] = t[o]);
  return {
    $$typeof: Vv,
    type: e,
    key: l,
    ref: c,
    props: s,
    _owner: Gv.current,
  };
}
Ps.Fragment = qv;
Ps.jsx = cf;
Ps.jsxs = cf;
ef.exports = Ps;
var v = ef.exports,
  ol = {},
  hf = { exports: {} },
  lt = {},
  df = { exports: {} },
  ff = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, q) {
    var B = R.length;
    R.push(q);
    e: for (; 0 < B; ) {
      var V = (B - 1) >>> 1,
        ne = R[V];
      if (0 < s(ne, q)) (R[V] = q), (R[B] = ne), (B = V);
      else break e;
    }
  }
  function i(R) {
    return R.length === 0 ? null : R[0];
  }
  function o(R) {
    if (R.length === 0) return null;
    var q = R[0],
      B = R.pop();
    if (B !== q) {
      R[0] = B;
      e: for (var V = 0, ne = R.length, Te = ne >>> 1; V < Te; ) {
        var ae = 2 * (V + 1) - 1,
          re = R[ae],
          K = ae + 1,
          Ge = R[K];
        if (0 > s(re, B))
          K < ne && 0 > s(Ge, re)
            ? ((R[V] = Ge), (R[K] = B), (V = K))
            : ((R[V] = re), (R[ae] = B), (V = ae));
        else if (K < ne && 0 > s(Ge, B)) (R[V] = Ge), (R[K] = B), (V = K);
        else break e;
      }
    }
    return q;
  }
  function s(R, q) {
    var B = R.sortIndex - q.sortIndex;
    return B !== 0 ? B : R.id - q.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var c = Date,
      d = c.now();
    e.unstable_now = function () {
      return c.now() - d;
    };
  }
  var f = [],
    m = [],
    g = 1,
    _ = null,
    E = 3,
    C = !1,
    S = !1,
    x = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    P = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function k(R) {
    for (var q = i(m); q !== null; ) {
      if (q.callback === null) o(m);
      else if (q.startTime <= R)
        o(m), (q.sortIndex = q.expirationTime), t(f, q);
      else break;
      q = i(m);
    }
  }
  function M(R) {
    if (((x = !1), k(R), !S))
      if (i(f) !== null) (S = !0), Ae(D);
      else {
        var q = i(m);
        q !== null && Ut(M, q.startTime - R);
      }
  }
  function D(R, q) {
    (S = !1), x && ((x = !1), P(H), (H = -1)), (C = !0);
    var B = E;
    try {
      for (
        k(q), _ = i(f);
        _ !== null && (!(_.expirationTime > q) || (R && !le()));

      ) {
        var V = _.callback;
        if (typeof V == "function") {
          (_.callback = null), (E = _.priorityLevel);
          var ne = V(_.expirationTime <= q);
          (q = e.unstable_now()),
            typeof ne == "function" ? (_.callback = ne) : _ === i(f) && o(f),
            k(q);
        } else o(f);
        _ = i(f);
      }
      if (_ !== null) var Te = !0;
      else {
        var ae = i(m);
        ae !== null && Ut(M, ae.startTime - q), (Te = !1);
      }
      return Te;
    } finally {
      (_ = null), (E = B), (C = !1);
    }
  }
  var U = !1,
    b = null,
    H = -1,
    he = 5,
    J = -1;
  function le() {
    return !(e.unstable_now() - J < he);
  }
  function ze() {
    if (b !== null) {
      var R = e.unstable_now();
      J = R;
      var q = !0;
      try {
        q = b(!0, R);
      } finally {
        q ? zn() : ((U = !1), (b = null));
      }
    } else U = !1;
  }
  var zn;
  if (typeof y == "function")
    zn = function () {
      y(ze);
    };
  else if (typeof MessageChannel < "u") {
    var ct = new MessageChannel(),
      qs = ct.port2;
    (ct.port1.onmessage = ze),
      (zn = function () {
        qs.postMessage(null);
      });
  } else
    zn = function () {
      A(ze, 0);
    };
  function Ae(R) {
    (b = R), U || ((U = !0), zn());
  }
  function Ut(R, q) {
    H = A(function () {
      R(e.unstable_now());
    }, q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || C || ((S = !0), Ae(D));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (he = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return E;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return i(f);
    }),
    (e.unstable_next = function (R) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = E;
      }
      var B = E;
      E = q;
      try {
        return R();
      } finally {
        E = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, q) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var B = E;
      E = R;
      try {
        return q();
      } finally {
        E = B;
      }
    }),
    (e.unstable_scheduleCallback = function (R, q, B) {
      var V = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? V + B : V))
          : (B = V),
        R)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = B + ne),
        (R = {
          id: g++,
          callback: q,
          priorityLevel: R,
          startTime: B,
          expirationTime: ne,
          sortIndex: -1,
        }),
        B > V
          ? ((R.sortIndex = B),
            t(m, R),
            i(f) === null &&
              R === i(m) &&
              (x ? (P(H), (H = -1)) : (x = !0), Ut(M, B - V)))
          : ((R.sortIndex = ne), t(f, R), S || C || ((S = !0), Ae(D))),
        R
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (R) {
      var q = E;
      return function () {
        var B = E;
        E = q;
        try {
          return R.apply(this, arguments);
        } finally {
          E = B;
        }
      };
    });
})(ff);
df.exports = ff;
var Jv = df.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = N,
  at = Jv;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1;
    i < arguments.length;
    i++
  )
    t += "&args[]=" + encodeURIComponent(arguments[i]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mf = new Set(),
  Pr = {};
function Gn(e, t) {
  ki(e, t), ki(e + "Capture", t);
}
function ki(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) mf.add(t[e]);
}
var Xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  sl = Object.prototype.hasOwnProperty,
  Xv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Nh = {},
  zh = {};
function Yv(e) {
  return sl.call(zh, e)
    ? !0
    : sl.call(Nh, e)
    ? !1
    : Xv.test(e)
    ? (zh[e] = !0)
    : ((Nh[e] = !0), !1);
}
function eg(e, t, i, o) {
  if (i !== null && i.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o
        ? !1
        : i !== null
        ? !i.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tg(e, t, i, o) {
  if (t === null || typeof t > "u" || eg(e, t, i, o)) return !0;
  if (o) return !1;
  if (i !== null)
    switch (i.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, i, o, s, l, c) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = o),
    (this.attributeNamespace = s),
    (this.mustUseProperty = i),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = c);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var du = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(du, fu);
    Fe[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(du, fu);
    Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(du, fu);
  Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pu(e, t, i, o) {
  var s = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (s !== null
    ? s.type !== 0
    : o ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tg(t, i, s, o) && (i = null),
    o || s === null
      ? Yv(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
      : s.mustUseProperty
      ? (e[s.propertyName] = i === null ? (s.type === 3 ? !1 : "") : i)
      : ((t = s.attributeName),
        (o = s.attributeNamespace),
        i === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (i = s === 3 || (s === 4 && i === !0) ? "" : "" + i),
            o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))));
}
var nn = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  go = Symbol.for("react.element"),
  ai = Symbol.for("react.portal"),
  li = Symbol.for("react.fragment"),
  mu = Symbol.for("react.strict_mode"),
  al = Symbol.for("react.profiler"),
  _f = Symbol.for("react.provider"),
  vf = Symbol.for("react.context"),
  _u = Symbol.for("react.forward_ref"),
  ll = Symbol.for("react.suspense"),
  ul = Symbol.for("react.suspense_list"),
  vu = Symbol.for("react.memo"),
  un = Symbol.for("react.lazy"),
  gf = Symbol.for("react.offscreen"),
  Mh = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mh && e[Mh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ye = Object.assign,
  Oa;
function ur(e) {
  if (Oa === void 0)
    try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      Oa = (t && t[1]) || "";
    }
  return (
    `
` +
    Oa +
    e
  );
}
var Na = !1;
function za(e, t) {
  if (!e || Na) return "";
  Na = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var o = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          o = m;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (m) {
        o = m;
      }
      e();
    }
  } catch (m) {
    if (m && o && typeof m.stack == "string") {
      for (
        var s = m.stack.split(`
`),
          l = o.stack.split(`
`),
          c = s.length - 1,
          d = l.length - 1;
        1 <= c && 0 <= d && s[c] !== l[d];

      )
        d--;
      for (; 1 <= c && 0 <= d; c--, d--)
        if (s[c] !== l[d]) {
          if (c !== 1 || d !== 1)
            do
              if ((c--, d--, 0 > d || s[c] !== l[d])) {
                var f =
                  `
` + s[c].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    f.includes("<anonymous>") &&
                    (f = f.replace("<anonymous>", e.displayName)),
                  f
                );
              }
            while (1 <= c && 0 <= d);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = i);
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : "";
}
function ng(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = za(e.type, !1)), e;
    case 11:
      return (e = za(e.type.render, !1)), e;
    case 1:
      return (e = za(e.type, !0)), e;
    default:
      return "";
  }
}
function cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case li:
      return "Fragment";
    case ai:
      return "Portal";
    case al:
      return "Profiler";
    case mu:
      return "StrictMode";
    case ll:
      return "Suspense";
    case ul:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vf:
        return (e.displayName || "Context") + ".Consumer";
      case _f:
        return (e._context.displayName || "Context") + ".Provider";
      case _u:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vu:
        return (
          (t = e.displayName || null), t !== null ? t : cl(e.type) || "Memo"
        );
      case un:
        (t = e._payload), (e = e._init);
        try {
          return cl(e(t));
        } catch {}
    }
  return null;
}
function ig(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return cl(t);
    case 8:
      return t === mu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rg(e) {
  var t = yf(e) ? "checked" : "value",
    i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    o = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof i < "u" &&
    typeof i.get == "function" &&
    typeof i.set == "function"
  ) {
    var s = i.get,
      l = i.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (c) {
          (o = "" + c), l.call(this, c);
        },
      }),
      Object.defineProperty(e, t, { enumerable: i.enumerable }),
      {
        getValue: function () {
          return o;
        },
        setValue: function (c) {
          o = "" + c;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yo(e) {
  e._valueTracker || (e._valueTracker = rg(e));
}
function wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var i = t.getValue(),
    o = "";
  return (
    e && (o = yf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = o),
    e !== i ? (t.setValue(e), !0) : !1
  );
}
function Go(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hl(e, t) {
  var i = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i ?? e._wrapperState.initialChecked,
  });
}
function Rh(e, t) {
  var i = t.defaultValue == null ? "" : t.defaultValue,
    o = t.checked != null ? t.checked : t.defaultChecked;
  (i = Ln(t.value != null ? t.value : i)),
    (e._wrapperState = {
      initialChecked: o,
      initialValue: i,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xf(e, t) {
  (t = t.checked), t != null && pu(e, "checked", t, !1);
}
function dl(e, t) {
  xf(e, t);
  var i = Ln(t.value),
    o = t.type;
  if (i != null)
    o === "number"
      ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
      : e.value !== "" + i && (e.value = "" + i);
  else if (o === "submit" || o === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fl(e, t.type, i)
    : t.hasOwnProperty("defaultValue") && fl(e, t.type, Ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ih(e, t, i) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var o = t.type;
    if (
      !(
        (o !== "submit" && o !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      i || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (i = e.name),
    i !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    i !== "" && (e.name = i);
}
function fl(e, t, i) {
  (t !== "number" || Go(e.ownerDocument) !== e) &&
    (i == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
}
var cr = Array.isArray;
function wi(e, t, i, o) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < i.length; s++) t["$" + i[s]] = !0;
    for (i = 0; i < e.length; i++)
      (s = t.hasOwnProperty("$" + e[i].value)),
        e[i].selected !== s && (e[i].selected = s),
        s && o && (e[i].defaultSelected = !0);
  } else {
    for (i = "" + Ln(i), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === i) {
        (e[s].selected = !0), o && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ah(e, t) {
  var i = t.value;
  if (i == null) {
    if (((i = t.children), (t = t.defaultValue), i != null)) {
      if (t != null) throw Error(j(92));
      if (cr(i)) {
        if (1 < i.length) throw Error(j(93));
        i = i[0];
      }
      t = i;
    }
    t == null && (t = ""), (i = t);
  }
  e._wrapperState = { initialValue: Ln(i) };
}
function Sf(e, t) {
  var i = Ln(t.value),
    o = Ln(t.defaultValue);
  i != null &&
    ((i = "" + i),
    i !== e.value && (e.value = i),
    t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
    o != null && (e.defaultValue = "" + o);
}
function jh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ml(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Pf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wo,
  Ef = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, i, o, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, i, o, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wo = wo || document.createElement("div"),
          wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Er(e, t) {
  if (t) {
    var i = e.firstChild;
    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  og = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function (e) {
  og.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e]);
  });
});
function Lf(e, t, i) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : i || typeof t != "number" || t === 0 || (fr.hasOwnProperty(e) && fr[e])
    ? ("" + t).trim()
    : t + "px";
}
function kf(e, t) {
  e = e.style;
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      var o = i.indexOf("--") === 0,
        s = Lf(i, t[i], o);
      i === "float" && (i = "cssFloat"), o ? e.setProperty(i, s) : (e[i] = s);
    }
}
var sg = ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _l(e, t) {
  if (t) {
    if (sg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function vl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gl = null;
function gu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yl = null,
  xi = null,
  Si = null;
function Bh(e) {
  if ((e = $r(e))) {
    if (typeof yl != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Ts(t)), yl(e.stateNode, e.type, t));
  }
}
function Cf(e) {
  xi ? (Si ? Si.push(e) : (Si = [e])) : (xi = e);
}
function Tf() {
  if (xi) {
    var e = xi,
      t = Si;
    if (((Si = xi = null), Bh(e), t)) for (e = 0; e < t.length; e++) Bh(t[e]);
  }
}
function Of(e, t) {
  return e(t);
}
function Nf() {}
var Ma = !1;
function zf(e, t, i) {
  if (Ma) return e(t, i);
  Ma = !0;
  try {
    return Of(e, t, i);
  } finally {
    (Ma = !1), (xi !== null || Si !== null) && (Nf(), Tf());
  }
}
function Lr(e, t) {
  var i = e.stateNode;
  if (i === null) return null;
  var o = Ts(i);
  if (o === null) return null;
  i = o[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (o = !o.disabled) ||
        ((e = e.type),
        (o = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !o);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (i && typeof i != "function") throw Error(j(231, t, typeof i));
  return i;
}
var wl = !1;
if (Xt)
  try {
    var tr = {};
    Object.defineProperty(tr, "passive", {
      get: function () {
        wl = !0;
      },
    }),
      window.addEventListener("test", tr, tr),
      window.removeEventListener("test", tr, tr);
  } catch {
    wl = !1;
  }
function ag(e, t, i, o, s, l, c, d, f) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(i, m);
  } catch (g) {
    this.onError(g);
  }
}
var pr = !1,
  Qo = null,
  Jo = !1,
  xl = null,
  lg = {
    onError: function (e) {
      (pr = !0), (Qo = e);
    },
  };
function ug(e, t, i, o, s, l, c, d, f) {
  (pr = !1), (Qo = null), ag.apply(lg, arguments);
}
function cg(e, t, i, o, s, l, c, d, f) {
  if ((ug.apply(this, arguments), pr)) {
    if (pr) {
      var m = Qo;
      (pr = !1), (Qo = null);
    } else throw Error(j(198));
    Jo || ((Jo = !0), (xl = m));
  }
}
function Qn(e) {
  var t = e,
    i = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (i = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? i : null;
}
function Mf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Dh(e) {
  if (Qn(e) !== e) throw Error(j(188));
}
function hg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var i = e, o = t; ; ) {
    var s = i.return;
    if (s === null) break;
    var l = s.alternate;
    if (l === null) {
      if (((o = s.return), o !== null)) {
        i = o;
        continue;
      }
      break;
    }
    if (s.child === l.child) {
      for (l = s.child; l; ) {
        if (l === i) return Dh(s), e;
        if (l === o) return Dh(s), t;
        l = l.sibling;
      }
      throw Error(j(188));
    }
    if (i.return !== o.return) (i = s), (o = l);
    else {
      for (var c = !1, d = s.child; d; ) {
        if (d === i) {
          (c = !0), (i = s), (o = l);
          break;
        }
        if (d === o) {
          (c = !0), (o = s), (i = l);
          break;
        }
        d = d.sibling;
      }
      if (!c) {
        for (d = l.child; d; ) {
          if (d === i) {
            (c = !0), (i = l), (o = s);
            break;
          }
          if (d === o) {
            (c = !0), (o = l), (i = s);
            break;
          }
          d = d.sibling;
        }
        if (!c) throw Error(j(189));
      }
    }
    if (i.alternate !== o) throw Error(j(190));
  }
  if (i.tag !== 3) throw Error(j(188));
  return i.stateNode.current === i ? e : t;
}
function Rf(e) {
  return (e = hg(e)), e !== null ? If(e) : null;
}
function If(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = If(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Af = at.unstable_scheduleCallback,
  Fh = at.unstable_cancelCallback,
  dg = at.unstable_shouldYield,
  fg = at.unstable_requestPaint,
  Se = at.unstable_now,
  pg = at.unstable_getCurrentPriorityLevel,
  yu = at.unstable_ImmediatePriority,
  jf = at.unstable_UserBlockingPriority,
  Xo = at.unstable_NormalPriority,
  mg = at.unstable_LowPriority,
  Bf = at.unstable_IdlePriority,
  Es = null,
  Dt = null;
function _g(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function")
    try {
      Dt.onCommitFiberRoot(Es, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : yg,
  vg = Math.log,
  gg = Math.LN2;
function yg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vg(e) / gg) | 0)) | 0;
}
var xo = 64,
  So = 4194304;
function hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yo(e, t) {
  var i = e.pendingLanes;
  if (i === 0) return 0;
  var o = 0,
    s = e.suspendedLanes,
    l = e.pingedLanes,
    c = i & 268435455;
  if (c !== 0) {
    var d = c & ~s;
    d !== 0 ? (o = hr(d)) : ((l &= c), l !== 0 && (o = hr(l)));
  } else (c = i & ~s), c !== 0 ? (o = hr(c)) : l !== 0 && (o = hr(l));
  if (o === 0) return 0;
  if (
    t !== 0 &&
    t !== o &&
    !(t & s) &&
    ((s = o & -o), (l = t & -t), s >= l || (s === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((o & 4 && (o |= i & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= o; 0 < t; )
      (i = 31 - Ct(t)), (s = 1 << i), (o |= e[i]), (t &= ~s);
  return o;
}
function wg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xg(e, t) {
  for (
    var i = e.suspendedLanes,
      o = e.pingedLanes,
      s = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var c = 31 - Ct(l),
      d = 1 << c,
      f = s[c];
    f === -1
      ? (!(d & i) || d & o) && (s[c] = wg(d, t))
      : f <= t && (e.expiredLanes |= d),
      (l &= ~d);
  }
}
function Sl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Df() {
  var e = xo;
  return (xo <<= 1), !(xo & 4194240) && (xo = 64), e;
}
function Ra(e) {
  for (var t = [], i = 0; 31 > i; i++) t.push(e);
  return t;
}
function Hr(e, t, i) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ct(t)),
    (e[t] = i);
}
function Sg(e, t) {
  var i = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var o = e.eventTimes;
  for (e = e.expirationTimes; 0 < i; ) {
    var s = 31 - Ct(i),
      l = 1 << s;
    (t[s] = 0), (o[s] = -1), (e[s] = -1), (i &= ~l);
  }
}
function wu(e, t) {
  var i = (e.entangledLanes |= t);
  for (e = e.entanglements; i; ) {
    var o = 31 - Ct(i),
      s = 1 << o;
    (s & t) | (e[o] & t) && (e[o] |= t), (i &= ~s);
  }
}
var se = 0;
function Ff(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zf,
  xu,
  Uf,
  bf,
  Hf,
  Pl = !1,
  Po = [],
  _n = null,
  vn = null,
  gn = null,
  kr = new Map(),
  Cr = new Map(),
  hn = [],
  Pg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _n = null;
      break;
    case "dragenter":
    case "dragleave":
      vn = null;
      break;
    case "mouseover":
    case "mouseout":
      gn = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function nr(e, t, i, o, s, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: i,
        eventSystemFlags: o,
        nativeEvent: l,
        targetContainers: [s],
      }),
      t !== null && ((t = $r(t)), t !== null && xu(t)),
      e)
    : ((e.eventSystemFlags |= o),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Eg(e, t, i, o, s) {
  switch (t) {
    case "focusin":
      return (_n = nr(_n, e, t, i, o, s)), !0;
    case "dragenter":
      return (vn = nr(vn, e, t, i, o, s)), !0;
    case "mouseover":
      return (gn = nr(gn, e, t, i, o, s)), !0;
    case "pointerover":
      var l = s.pointerId;
      return kr.set(l, nr(kr.get(l) || null, e, t, i, o, s)), !0;
    case "gotpointercapture":
      return (
        (l = s.pointerId), Cr.set(l, nr(Cr.get(l) || null, e, t, i, o, s)), !0
      );
  }
  return !1;
}
function Wf(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var i = Qn(t);
    if (i !== null) {
      if (((t = i.tag), t === 13)) {
        if (((t = Mf(i)), t !== null)) {
          (e.blockedOn = t),
            Hf(e.priority, function () {
              Uf(i);
            });
          return;
        }
      } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var i = El(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (i === null) {
      i = e.nativeEvent;
      var o = new i.constructor(i.type, i);
      (gl = o), i.target.dispatchEvent(o), (gl = null);
    } else return (t = $r(i)), t !== null && xu(t), (e.blockedOn = i), !1;
    t.shift();
  }
  return !0;
}
function Uh(e, t, i) {
  jo(e) && i.delete(t);
}
function Lg() {
  (Pl = !1),
    _n !== null && jo(_n) && (_n = null),
    vn !== null && jo(vn) && (vn = null),
    gn !== null && jo(gn) && (gn = null),
    kr.forEach(Uh),
    Cr.forEach(Uh);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Pl ||
      ((Pl = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, Lg)));
}
function Tr(e) {
  function t(s) {
    return ir(s, e);
  }
  if (0 < Po.length) {
    ir(Po[0], e);
    for (var i = 1; i < Po.length; i++) {
      var o = Po[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
  }
  for (
    _n !== null && ir(_n, e),
      vn !== null && ir(vn, e),
      gn !== null && ir(gn, e),
      kr.forEach(t),
      Cr.forEach(t),
      i = 0;
    i < hn.length;
    i++
  )
    (o = hn[i]), o.blockedOn === e && (o.blockedOn = null);
  for (; 0 < hn.length && ((i = hn[0]), i.blockedOn === null); )
    Wf(i), i.blockedOn === null && hn.shift();
}
var Pi = nn.ReactCurrentBatchConfig,
  es = !0;
function kg(e, t, i, o) {
  var s = se,
    l = Pi.transition;
  Pi.transition = null;
  try {
    (se = 1), Su(e, t, i, o);
  } finally {
    (se = s), (Pi.transition = l);
  }
}
function Cg(e, t, i, o) {
  var s = se,
    l = Pi.transition;
  Pi.transition = null;
  try {
    (se = 4), Su(e, t, i, o);
  } finally {
    (se = s), (Pi.transition = l);
  }
}
function Su(e, t, i, o) {
  if (es) {
    var s = El(e, t, i, o);
    if (s === null) Ha(e, t, o, ts, i), Zh(e, o);
    else if (Eg(s, e, t, i, o)) o.stopPropagation();
    else if ((Zh(e, o), t & 4 && -1 < Pg.indexOf(e))) {
      for (; s !== null; ) {
        var l = $r(s);
        if (
          (l !== null && Zf(l),
          (l = El(e, t, i, o)),
          l === null && Ha(e, t, o, ts, i),
          l === s)
        )
          break;
        s = l;
      }
      s !== null && o.stopPropagation();
    } else Ha(e, t, o, null, i);
  }
}
var ts = null;
function El(e, t, i, o) {
  if (((ts = null), (e = gu(o)), (e = Fn(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null;
    else if (((i = t.tag), i === 13)) {
      if (((e = Mf(t)), e !== null)) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ts = e), null;
}
function $f(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (pg()) {
        case yu:
          return 1;
        case jf:
          return 4;
        case Xo:
        case mg:
          return 16;
        case Bf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fn = null,
  Pu = null,
  Bo = null;
function Vf() {
  if (Bo) return Bo;
  var e,
    t = Pu,
    i = t.length,
    o,
    s = "value" in fn ? fn.value : fn.textContent,
    l = s.length;
  for (e = 0; e < i && t[e] === s[e]; e++);
  var c = i - e;
  for (o = 1; o <= c && t[i - o] === s[l - o]; o++);
  return (Bo = s.slice(e, 1 < o ? 1 - o : void 0));
}
function Do(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Eo() {
  return !0;
}
function bh() {
  return !1;
}
function ut(e) {
  function t(i, o, s, l, c) {
    (this._reactName = i),
      (this._targetInst = s),
      (this.type = o),
      (this.nativeEvent = l),
      (this.target = c),
      (this.currentTarget = null);
    for (var d in e)
      e.hasOwnProperty(d) && ((i = e[d]), (this[d] = i ? i(l) : l[d]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Eo
        : bh),
      (this.isPropagationStopped = bh),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i &&
          (i.preventDefault
            ? i.preventDefault()
            : typeof i.returnValue != "unknown" && (i.returnValue = !1),
          (this.isDefaultPrevented = Eo));
      },
      stopPropagation: function () {
        var i = this.nativeEvent;
        i &&
          (i.stopPropagation
            ? i.stopPropagation()
            : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
          (this.isPropagationStopped = Eo));
      },
      persist: function () {},
      isPersistent: Eo,
    }),
    t
  );
}
var Ai = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Eu = ut(Ai),
  Wr = ye({}, Ai, { view: 0, detail: 0 }),
  Tg = ut(Wr),
  Ia,
  Aa,
  rr,
  Ls = ye({}, Wr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== rr &&
            (rr && e.type === "mousemove"
              ? ((Ia = e.screenX - rr.screenX), (Aa = e.screenY - rr.screenY))
              : (Aa = Ia = 0),
            (rr = e)),
          Ia);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Aa;
    },
  }),
  Hh = ut(Ls),
  Og = ye({}, Ls, { dataTransfer: 0 }),
  Ng = ut(Og),
  zg = ye({}, Wr, { relatedTarget: 0 }),
  ja = ut(zg),
  Mg = ye({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rg = ut(Mg),
  Ig = ye({}, Ai, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ag = ut(Ig),
  jg = ye({}, Ai, { data: 0 }),
  Wh = ut(jg),
  Bg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Dg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fg[e]) ? !!t[e] : !1;
}
function Lu() {
  return Zg;
}
var Ug = ye({}, Wr, {
    key: function (e) {
      if (e.key) {
        var t = Bg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Do(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Dg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lu,
    charCode: function (e) {
      return e.type === "keypress" ? Do(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Do(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  bg = ut(Ug),
  Hg = ye({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $h = ut(Hg),
  Wg = ye({}, Wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lu,
  }),
  $g = ut(Wg),
  Vg = ye({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qg = ut(Vg),
  Kg = ye({}, Ls, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Gg = ut(Kg),
  Qg = [9, 13, 27, 32],
  ku = Xt && "CompositionEvent" in window,
  mr = null;
Xt && "documentMode" in document && (mr = document.documentMode);
var Jg = Xt && "TextEvent" in window && !mr,
  qf = Xt && (!ku || (mr && 8 < mr && 11 >= mr)),
  Vh = String.fromCharCode(32),
  qh = !1;
function Kf(e, t) {
  switch (e) {
    case "keyup":
      return Qg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ui = !1;
function Xg(e, t) {
  switch (e) {
    case "compositionend":
      return Gf(t);
    case "keypress":
      return t.which !== 32 ? null : ((qh = !0), Vh);
    case "textInput":
      return (e = t.data), e === Vh && qh ? null : e;
    default:
      return null;
  }
}
function Yg(e, t) {
  if (ui)
    return e === "compositionend" || (!ku && Kf(e, t))
      ? ((e = Vf()), (Bo = Pu = fn = null), (ui = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return qf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ey = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Kh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ey[e.type] : t === "textarea";
}
function Qf(e, t, i, o) {
  Cf(o),
    (t = ns(t, "onChange")),
    0 < t.length &&
      ((i = new Eu("onChange", "change", null, i, o)),
      e.push({ event: i, listeners: t }));
}
var _r = null,
  Or = null;
function ty(e) {
  ap(e, 0);
}
function ks(e) {
  var t = di(e);
  if (wf(t)) return e;
}
function ny(e, t) {
  if (e === "change") return t;
}
var Jf = !1;
if (Xt) {
  var Ba;
  if (Xt) {
    var Da = "oninput" in document;
    if (!Da) {
      var Gh = document.createElement("div");
      Gh.setAttribute("oninput", "return;"),
        (Da = typeof Gh.oninput == "function");
    }
    Ba = Da;
  } else Ba = !1;
  Jf = Ba && (!document.documentMode || 9 < document.documentMode);
}
function Qh() {
  _r && (_r.detachEvent("onpropertychange", Xf), (Or = _r = null));
}
function Xf(e) {
  if (e.propertyName === "value" && ks(Or)) {
    var t = [];
    Qf(t, Or, e, gu(e)), zf(ty, t);
  }
}
function iy(e, t, i) {
  e === "focusin"
    ? (Qh(), (_r = t), (Or = i), _r.attachEvent("onpropertychange", Xf))
    : e === "focusout" && Qh();
}
function ry(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ks(Or);
}
function oy(e, t) {
  if (e === "click") return ks(t);
}
function sy(e, t) {
  if (e === "input" || e === "change") return ks(t);
}
function ay(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == "function" ? Object.is : ay;
function Nr(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var i = Object.keys(e),
    o = Object.keys(t);
  if (i.length !== o.length) return !1;
  for (o = 0; o < i.length; o++) {
    var s = i[o];
    if (!sl.call(t, s) || !Ot(e[s], t[s])) return !1;
  }
  return !0;
}
function Jh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xh(e, t) {
  var i = Jh(e);
  e = 0;
  for (var o; i; ) {
    if (i.nodeType === 3) {
      if (((o = e + i.textContent.length), e <= t && o >= t))
        return { node: i, offset: t - e };
      e = o;
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = Jh(i);
  }
}
function Yf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Yf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ep() {
  for (var e = window, t = Go(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var i = typeof t.contentWindow.location.href == "string";
    } catch {
      i = !1;
    }
    if (i) e = t.contentWindow;
    else break;
    t = Go(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ly(e) {
  var t = ep(),
    i = e.focusedElem,
    o = e.selectionRange;
  if (
    t !== i &&
    i &&
    i.ownerDocument &&
    Yf(i.ownerDocument.documentElement, i)
  ) {
    if (o !== null && Cu(i)) {
      if (
        ((t = o.start),
        (e = o.end),
        e === void 0 && (e = t),
        "selectionStart" in i)
      )
        (i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length));
      else if (
        ((e = ((t = i.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = i.textContent.length,
          l = Math.min(o.start, s);
        (o = o.end === void 0 ? l : Math.min(o.end, s)),
          !e.extend && l > o && ((s = o), (o = l), (l = s)),
          (s = Xh(i, l));
        var c = Xh(i, o);
        s &&
          c &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== c.node ||
            e.focusOffset !== c.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          l > o
            ? (e.addRange(t), e.extend(c.node, c.offset))
            : (t.setEnd(c.node, c.offset), e.addRange(t)));
      }
    }
    for (t = [], e = i; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
      (e = t[i]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var uy = Xt && "documentMode" in document && 11 >= document.documentMode,
  ci = null,
  Ll = null,
  vr = null,
  kl = !1;
function Yh(e, t, i) {
  var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  kl ||
    ci == null ||
    ci !== Go(o) ||
    ((o = ci),
    "selectionStart" in o && Cu(o)
      ? (o = { start: o.selectionStart, end: o.selectionEnd })
      : ((o = (
          (o.ownerDocument && o.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset,
        })),
    (vr && Nr(vr, o)) ||
      ((vr = o),
      (o = ns(Ll, "onSelect")),
      0 < o.length &&
        ((t = new Eu("onSelect", "select", null, t, i)),
        e.push({ event: t, listeners: o }),
        (t.target = ci))));
}
function Lo(e, t) {
  var i = {};
  return (
    (i[e.toLowerCase()] = t.toLowerCase()),
    (i["Webkit" + e] = "webkit" + t),
    (i["Moz" + e] = "moz" + t),
    i
  );
}
var hi = {
    animationend: Lo("Animation", "AnimationEnd"),
    animationiteration: Lo("Animation", "AnimationIteration"),
    animationstart: Lo("Animation", "AnimationStart"),
    transitionend: Lo("Transition", "TransitionEnd"),
  },
  Fa = {},
  tp = {};
Xt &&
  ((tp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hi.animationend.animation,
    delete hi.animationiteration.animation,
    delete hi.animationstart.animation),
  "TransitionEvent" in window || delete hi.transitionend.transition);
function Cs(e) {
  if (Fa[e]) return Fa[e];
  if (!hi[e]) return e;
  var t = hi[e],
    i;
  for (i in t) if (t.hasOwnProperty(i) && i in tp) return (Fa[e] = t[i]);
  return e;
}
var np = Cs("animationend"),
  ip = Cs("animationiteration"),
  rp = Cs("animationstart"),
  op = Cs("transitionend"),
  sp = new Map(),
  ed =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Cn(e, t) {
  sp.set(e, t), Gn(t, [e]);
}
for (var Za = 0; Za < ed.length; Za++) {
  var Ua = ed[Za],
    cy = Ua.toLowerCase(),
    hy = Ua[0].toUpperCase() + Ua.slice(1);
  Cn(cy, "on" + hy);
}
Cn(np, "onAnimationEnd");
Cn(ip, "onAnimationIteration");
Cn(rp, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(op, "onTransitionEnd");
ki("onMouseEnter", ["mouseout", "mouseover"]);
ki("onMouseLeave", ["mouseout", "mouseover"]);
ki("onPointerEnter", ["pointerout", "pointerover"]);
ki("onPointerLeave", ["pointerout", "pointerover"]);
Gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dy = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function td(e, t, i) {
  var o = e.type || "unknown-event";
  (e.currentTarget = i), cg(o, t, void 0, e), (e.currentTarget = null);
}
function ap(e, t) {
  t = (t & 4) !== 0;
  for (var i = 0; i < e.length; i++) {
    var o = e[i],
      s = o.event;
    o = o.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var c = o.length - 1; 0 <= c; c--) {
          var d = o[c],
            f = d.instance,
            m = d.currentTarget;
          if (((d = d.listener), f !== l && s.isPropagationStopped())) break e;
          td(s, d, m), (l = f);
        }
      else
        for (c = 0; c < o.length; c++) {
          if (
            ((d = o[c]),
            (f = d.instance),
            (m = d.currentTarget),
            (d = d.listener),
            f !== l && s.isPropagationStopped())
          )
            break e;
          td(s, d, m), (l = f);
        }
    }
  }
  if (Jo) throw ((e = xl), (Jo = !1), (xl = null), e);
}
function de(e, t) {
  var i = t[zl];
  i === void 0 && (i = t[zl] = new Set());
  var o = e + "__bubble";
  i.has(o) || (lp(t, e, 2, !1), i.add(o));
}
function ba(e, t, i) {
  var o = 0;
  t && (o |= 4), lp(i, e, o, t);
}
var ko = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[ko]) {
    (e[ko] = !0),
      mf.forEach(function (i) {
        i !== "selectionchange" && (dy.has(i) || ba(i, !1, e), ba(i, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ko] || ((t[ko] = !0), ba("selectionchange", !1, t));
  }
}
function lp(e, t, i, o) {
  switch ($f(t)) {
    case 1:
      var s = kg;
      break;
    case 4:
      s = Cg;
      break;
    default:
      s = Su;
  }
  (i = s.bind(null, t, i, e)),
    (s = void 0),
    !wl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    o
      ? s !== void 0
        ? e.addEventListener(t, i, { capture: !0, passive: s })
        : e.addEventListener(t, i, !0)
      : s !== void 0
      ? e.addEventListener(t, i, { passive: s })
      : e.addEventListener(t, i, !1);
}
function Ha(e, t, i, o, s) {
  var l = o;
  if (!(t & 1) && !(t & 2) && o !== null)
    e: for (;;) {
      if (o === null) return;
      var c = o.tag;
      if (c === 3 || c === 4) {
        var d = o.stateNode.containerInfo;
        if (d === s || (d.nodeType === 8 && d.parentNode === s)) break;
        if (c === 4)
          for (c = o.return; c !== null; ) {
            var f = c.tag;
            if (
              (f === 3 || f === 4) &&
              ((f = c.stateNode.containerInfo),
              f === s || (f.nodeType === 8 && f.parentNode === s))
            )
              return;
            c = c.return;
          }
        for (; d !== null; ) {
          if (((c = Fn(d)), c === null)) return;
          if (((f = c.tag), f === 5 || f === 6)) {
            o = l = c;
            continue e;
          }
          d = d.parentNode;
        }
      }
      o = o.return;
    }
  zf(function () {
    var m = l,
      g = gu(i),
      _ = [];
    e: {
      var E = sp.get(e);
      if (E !== void 0) {
        var C = Eu,
          S = e;
        switch (e) {
          case "keypress":
            if (Do(i) === 0) break e;
          case "keydown":
          case "keyup":
            C = bg;
            break;
          case "focusin":
            (S = "focus"), (C = ja);
            break;
          case "focusout":
            (S = "blur"), (C = ja);
            break;
          case "beforeblur":
          case "afterblur":
            C = ja;
            break;
          case "click":
            if (i.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Hh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Ng;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = $g;
            break;
          case np:
          case ip:
          case rp:
            C = Rg;
            break;
          case op:
            C = qg;
            break;
          case "scroll":
            C = Tg;
            break;
          case "wheel":
            C = Gg;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Ag;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = $h;
        }
        var x = (t & 4) !== 0,
          A = !x && e === "scroll",
          P = x ? (E !== null ? E + "Capture" : null) : E;
        x = [];
        for (var y = m, k; y !== null; ) {
          k = y;
          var M = k.stateNode;
          if (
            (k.tag === 5 &&
              M !== null &&
              ((k = M),
              P !== null && ((M = Lr(y, P)), M != null && x.push(Mr(y, M, k)))),
            A)
          )
            break;
          y = y.return;
        }
        0 < x.length &&
          ((E = new C(E, S, null, i, g)), _.push({ event: E, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((E = e === "mouseover" || e === "pointerover"),
          (C = e === "mouseout" || e === "pointerout"),
          E &&
            i !== gl &&
            (S = i.relatedTarget || i.fromElement) &&
            (Fn(S) || S[Yt]))
        )
          break e;
        if (
          (C || E) &&
          ((E =
            g.window === g
              ? g
              : (E = g.ownerDocument)
              ? E.defaultView || E.parentWindow
              : window),
          C
            ? ((S = i.relatedTarget || i.toElement),
              (C = m),
              (S = S ? Fn(S) : null),
              S !== null &&
                ((A = Qn(S)), S !== A || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((C = null), (S = m)),
          C !== S)
        ) {
          if (
            ((x = Hh),
            (M = "onMouseLeave"),
            (P = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = $h),
              (M = "onPointerLeave"),
              (P = "onPointerEnter"),
              (y = "pointer")),
            (A = C == null ? E : di(C)),
            (k = S == null ? E : di(S)),
            (E = new x(M, y + "leave", C, i, g)),
            (E.target = A),
            (E.relatedTarget = k),
            (M = null),
            Fn(g) === m &&
              ((x = new x(P, y + "enter", S, i, g)),
              (x.target = k),
              (x.relatedTarget = A),
              (M = x)),
            (A = M),
            C && S)
          )
            t: {
              for (x = C, P = S, y = 0, k = x; k; k = si(k)) y++;
              for (k = 0, M = P; M; M = si(M)) k++;
              for (; 0 < y - k; ) (x = si(x)), y--;
              for (; 0 < k - y; ) (P = si(P)), k--;
              for (; y--; ) {
                if (x === P || (P !== null && x === P.alternate)) break t;
                (x = si(x)), (P = si(P));
              }
              x = null;
            }
          else x = null;
          C !== null && nd(_, E, C, x, !1),
            S !== null && A !== null && nd(_, A, S, x, !0);
        }
      }
      e: {
        if (
          ((E = m ? di(m) : window),
          (C = E.nodeName && E.nodeName.toLowerCase()),
          C === "select" || (C === "input" && E.type === "file"))
        )
          var D = ny;
        else if (Kh(E))
          if (Jf) D = sy;
          else {
            D = ry;
            var U = iy;
          }
        else
          (C = E.nodeName) &&
            C.toLowerCase() === "input" &&
            (E.type === "checkbox" || E.type === "radio") &&
            (D = oy);
        if (D && (D = D(e, m))) {
          Qf(_, D, i, g);
          break e;
        }
        U && U(e, E, m),
          e === "focusout" &&
            (U = E._wrapperState) &&
            U.controlled &&
            E.type === "number" &&
            fl(E, "number", E.value);
      }
      switch (((U = m ? di(m) : window), e)) {
        case "focusin":
          (Kh(U) || U.contentEditable === "true") &&
            ((ci = U), (Ll = m), (vr = null));
          break;
        case "focusout":
          vr = Ll = ci = null;
          break;
        case "mousedown":
          kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (kl = !1), Yh(_, i, g);
          break;
        case "selectionchange":
          if (uy) break;
        case "keydown":
        case "keyup":
          Yh(_, i, g);
      }
      var b;
      if (ku)
        e: {
          switch (e) {
            case "compositionstart":
              var H = "onCompositionStart";
              break e;
            case "compositionend":
              H = "onCompositionEnd";
              break e;
            case "compositionupdate":
              H = "onCompositionUpdate";
              break e;
          }
          H = void 0;
        }
      else
        ui
          ? Kf(e, i) && (H = "onCompositionEnd")
          : e === "keydown" && i.keyCode === 229 && (H = "onCompositionStart");
      H &&
        (qf &&
          i.locale !== "ko" &&
          (ui || H !== "onCompositionStart"
            ? H === "onCompositionEnd" && ui && (b = Vf())
            : ((fn = g),
              (Pu = "value" in fn ? fn.value : fn.textContent),
              (ui = !0))),
        (U = ns(m, H)),
        0 < U.length &&
          ((H = new Wh(H, e, null, i, g)),
          _.push({ event: H, listeners: U }),
          b ? (H.data = b) : ((b = Gf(i)), b !== null && (H.data = b)))),
        (b = Jg ? Xg(e, i) : Yg(e, i)) &&
          ((m = ns(m, "onBeforeInput")),
          0 < m.length &&
            ((g = new Wh("onBeforeInput", "beforeinput", null, i, g)),
            _.push({ event: g, listeners: m }),
            (g.data = b)));
    }
    ap(_, t);
  });
}
function Mr(e, t, i) {
  return { instance: e, listener: t, currentTarget: i };
}
function ns(e, t) {
  for (var i = t + "Capture", o = []; e !== null; ) {
    var s = e,
      l = s.stateNode;
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      (l = Lr(e, i)),
      l != null && o.unshift(Mr(e, l, s)),
      (l = Lr(e, t)),
      l != null && o.push(Mr(e, l, s))),
      (e = e.return);
  }
  return o;
}
function si(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nd(e, t, i, o, s) {
  for (var l = t._reactName, c = []; i !== null && i !== o; ) {
    var d = i,
      f = d.alternate,
      m = d.stateNode;
    if (f !== null && f === o) break;
    d.tag === 5 &&
      m !== null &&
      ((d = m),
      s
        ? ((f = Lr(i, l)), f != null && c.unshift(Mr(i, f, d)))
        : s || ((f = Lr(i, l)), f != null && c.push(Mr(i, f, d)))),
      (i = i.return);
  }
  c.length !== 0 && e.push({ event: t, listeners: c });
}
var fy = /\r\n?/g,
  py = /\u0000|\uFFFD/g;
function id(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fy,
      `
`
    )
    .replace(py, "");
}
function Co(e, t, i) {
  if (((t = id(t)), id(e) !== t && i)) throw Error(j(425));
}
function is() {}
var Cl = null,
  Tl = null;
function Ol(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Nl = typeof setTimeout == "function" ? setTimeout : void 0,
  my = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rd = typeof Promise == "function" ? Promise : void 0,
  _y =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rd < "u"
      ? function (e) {
          return rd.resolve(null).then(e).catch(vy);
        }
      : Nl;
function vy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wa(e, t) {
  var i = t,
    o = 0;
  do {
    var s = i.nextSibling;
    if ((e.removeChild(i), s && s.nodeType === 8))
      if (((i = s.data), i === "/$")) {
        if (o === 0) {
          e.removeChild(s), Tr(t);
          return;
        }
        o--;
      } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
    i = s;
  } while (i);
  Tr(t);
}
function yn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function od(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var i = e.data;
      if (i === "$" || i === "$!" || i === "$?") {
        if (t === 0) return e;
        t--;
      } else i === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + ji,
  Rr = "__reactProps$" + ji,
  Yt = "__reactContainer$" + ji,
  zl = "__reactEvents$" + ji,
  gy = "__reactListeners$" + ji,
  yy = "__reactHandles$" + ji;
function Fn(e) {
  var t = e[jt];
  if (t) return t;
  for (var i = e.parentNode; i; ) {
    if ((t = i[Yt] || i[jt])) {
      if (
        ((i = t.alternate),
        t.child !== null || (i !== null && i.child !== null))
      )
        for (e = od(e); e !== null; ) {
          if ((i = e[jt])) return i;
          e = od(e);
        }
      return t;
    }
    (e = i), (i = e.parentNode);
  }
  return null;
}
function $r(e) {
  return (
    (e = e[jt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function di(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Ts(e) {
  return e[Rr] || null;
}
var Ml = [],
  fi = -1;
function Tn(e) {
  return { current: e };
}
function fe(e) {
  0 > fi || ((e.current = Ml[fi]), (Ml[fi] = null), fi--);
}
function ce(e, t) {
  fi++, (Ml[fi] = e.current), (e.current = t);
}
var kn = {},
  He = Tn(kn),
  Ye = Tn(!1),
  Wn = kn;
function Ci(e, t) {
  var i = e.type.contextTypes;
  if (!i) return kn;
  var o = e.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
    return o.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    l;
  for (l in i) s[l] = t[l];
  return (
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function et(e) {
  return (e = e.childContextTypes), e != null;
}
function rs() {
  fe(Ye), fe(He);
}
function sd(e, t, i) {
  if (He.current !== kn) throw Error(j(168));
  ce(He, t), ce(Ye, i);
}
function up(e, t, i) {
  var o = e.stateNode;
  if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
    return i;
  o = o.getChildContext();
  for (var s in o) if (!(s in t)) throw Error(j(108, ig(e) || "Unknown", s));
  return ye({}, i, o);
}
function os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kn),
    (Wn = He.current),
    ce(He, e),
    ce(Ye, Ye.current),
    !0
  );
}
function ad(e, t, i) {
  var o = e.stateNode;
  if (!o) throw Error(j(169));
  i
    ? ((e = up(e, t, Wn)),
      (o.__reactInternalMemoizedMergedChildContext = e),
      fe(Ye),
      fe(He),
      ce(He, e))
    : fe(Ye),
    ce(Ye, i);
}
var qt = null,
  Os = !1,
  $a = !1;
function cp(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function wy(e) {
  (Os = !0), cp(e);
}
function On() {
  if (!$a && qt !== null) {
    $a = !0;
    var e = 0,
      t = se;
    try {
      var i = qt;
      for (se = 1; e < i.length; e++) {
        var o = i[e];
        do o = o(!0);
        while (o !== null);
      }
      (qt = null), (Os = !1);
    } catch (s) {
      throw (qt !== null && (qt = qt.slice(e + 1)), Af(yu, On), s);
    } finally {
      (se = t), ($a = !1);
    }
  }
  return null;
}
var pi = [],
  mi = 0,
  ss = null,
  as = 0,
  pt = [],
  mt = 0,
  $n = null,
  Kt = 1,
  Gt = "";
function Bn(e, t) {
  (pi[mi++] = as), (pi[mi++] = ss), (ss = e), (as = t);
}
function hp(e, t, i) {
  (pt[mt++] = Kt), (pt[mt++] = Gt), (pt[mt++] = $n), ($n = e);
  var o = Kt;
  e = Gt;
  var s = 32 - Ct(o) - 1;
  (o &= ~(1 << s)), (i += 1);
  var l = 32 - Ct(t) + s;
  if (30 < l) {
    var c = s - (s % 5);
    (l = (o & ((1 << c) - 1)).toString(32)),
      (o >>= c),
      (s -= c),
      (Kt = (1 << (32 - Ct(t) + s)) | (i << s) | o),
      (Gt = l + e);
  } else (Kt = (1 << l) | (i << s) | o), (Gt = e);
}
function Tu(e) {
  e.return !== null && (Bn(e, 1), hp(e, 1, 0));
}
function Ou(e) {
  for (; e === ss; )
    (ss = pi[--mi]), (pi[mi] = null), (as = pi[--mi]), (pi[mi] = null);
  for (; e === $n; )
    ($n = pt[--mt]),
      (pt[mt] = null),
      (Gt = pt[--mt]),
      (pt[mt] = null),
      (Kt = pt[--mt]),
      (pt[mt] = null);
}
var st = null,
  ot = null,
  pe = !1,
  kt = null;
function dp(e, t) {
  var i = _t(5, null, null, 0);
  (i.elementType = "DELETED"),
    (i.stateNode = t),
    (i.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i);
}
function ld(e, t) {
  switch (e.tag) {
    case 5:
      var i = e.type;
      return (
        (t =
          t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (ot = yn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((i = $n !== null ? { id: Kt, overflow: Gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: i,
              retryLane: 1073741824,
            }),
            (i = _t(18, null, null, 0)),
            (i.stateNode = t),
            (i.return = e),
            (e.child = i),
            (st = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Il(e) {
  if (pe) {
    var t = ot;
    if (t) {
      var i = t;
      if (!ld(e, t)) {
        if (Rl(e)) throw Error(j(418));
        t = yn(i.nextSibling);
        var o = st;
        t && ld(e, t)
          ? dp(o, i)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (st = e));
      }
    } else {
      if (Rl(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (st = e);
    }
  }
}
function ud(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function To(e) {
  if (e !== st) return !1;
  if (!pe) return ud(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ol(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (Rl(e)) throw (fp(), Error(j(418)));
    for (; t; ) dp(e, t), (t = yn(t.nextSibling));
  }
  if ((ud(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var i = e.data;
          if (i === "/$") {
            if (t === 0) {
              ot = yn(e.nextSibling);
              break e;
            }
            t--;
          } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = st ? yn(e.stateNode.nextSibling) : null;
  return !0;
}
function fp() {
  for (var e = ot; e; ) e = yn(e.nextSibling);
}
function Ti() {
  (ot = st = null), (pe = !1);
}
function Nu(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var xy = nn.ReactCurrentBatchConfig;
function Et(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var i in e) t[i] === void 0 && (t[i] = e[i]);
    return t;
  }
  return t;
}
var ls = Tn(null),
  us = null,
  _i = null,
  zu = null;
function Mu() {
  zu = _i = us = null;
}
function Ru(e) {
  var t = ls.current;
  fe(ls), (e._currentValue = t);
}
function Al(e, t, i) {
  for (; e !== null; ) {
    var o = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
        : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
      e === i)
    )
      break;
    e = e.return;
  }
}
function Ei(e, t) {
  (us = e),
    (zu = _i = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function yt(e) {
  var t = e._currentValue;
  if (zu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _i === null)) {
      if (us === null) throw Error(j(308));
      (_i = e), (us.dependencies = { lanes: 0, firstContext: e });
    } else _i = _i.next = e;
  return t;
}
var Zn = null;
function Iu(e) {
  Zn === null ? (Zn = [e]) : Zn.push(e);
}
function pp(e, t, i, o) {
  var s = t.interleaved;
  return (
    s === null ? ((i.next = i), Iu(t)) : ((i.next = s.next), (s.next = i)),
    (t.interleaved = i),
    en(e, o)
  );
}
function en(e, t) {
  e.lanes |= t;
  var i = e.alternate;
  for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (i = e.alternate),
      i !== null && (i.childLanes |= t),
      (i = e),
      (e = e.return);
  return i.tag === 3 ? i.stateNode : null;
}
var cn = !1;
function Au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function mp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wn(e, t, i) {
  var o = e.updateQueue;
  if (o === null) return null;
  if (((o = o.shared), ie & 2)) {
    var s = o.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (o.pending = t),
      en(e, i)
    );
  }
  return (
    (s = o.interleaved),
    s === null ? ((t.next = t), Iu(o)) : ((t.next = s.next), (s.next = t)),
    (o.interleaved = t),
    en(e, i)
  );
}
function Fo(e, t, i) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))
  ) {
    var o = t.lanes;
    (o &= e.pendingLanes), (i |= o), (t.lanes = i), wu(e, i);
  }
}
function cd(e, t) {
  var i = e.updateQueue,
    o = e.alternate;
  if (o !== null && ((o = o.updateQueue), i === o)) {
    var s = null,
      l = null;
    if (((i = i.firstBaseUpdate), i !== null)) {
      do {
        var c = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        };
        l === null ? (s = l = c) : (l = l.next = c), (i = i.next);
      } while (i !== null);
      l === null ? (s = l = t) : (l = l.next = t);
    } else s = l = t;
    (i = {
      baseState: o.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: l,
      shared: o.shared,
      effects: o.effects,
    }),
      (e.updateQueue = i);
    return;
  }
  (e = i.lastBaseUpdate),
    e === null ? (i.firstBaseUpdate = t) : (e.next = t),
    (i.lastBaseUpdate = t);
}
function cs(e, t, i, o) {
  var s = e.updateQueue;
  cn = !1;
  var l = s.firstBaseUpdate,
    c = s.lastBaseUpdate,
    d = s.shared.pending;
  if (d !== null) {
    s.shared.pending = null;
    var f = d,
      m = f.next;
    (f.next = null), c === null ? (l = m) : (c.next = m), (c = f);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (d = g.lastBaseUpdate),
      d !== c &&
        (d === null ? (g.firstBaseUpdate = m) : (d.next = m),
        (g.lastBaseUpdate = f)));
  }
  if (l !== null) {
    var _ = s.baseState;
    (c = 0), (g = m = f = null), (d = l);
    do {
      var E = d.lane,
        C = d.eventTime;
      if ((o & E) === E) {
        g !== null &&
          (g = g.next =
            {
              eventTime: C,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            });
        e: {
          var S = e,
            x = d;
          switch (((E = t), (C = i), x.tag)) {
            case 1:
              if (((S = x.payload), typeof S == "function")) {
                _ = S.call(C, _, E);
                break e;
              }
              _ = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = x.payload),
                (E = typeof S == "function" ? S.call(C, _, E) : S),
                E == null)
              )
                break e;
              _ = ye({}, _, E);
              break e;
            case 2:
              cn = !0;
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((e.flags |= 64),
          (E = s.effects),
          E === null ? (s.effects = [d]) : E.push(d));
      } else
        (C = {
          eventTime: C,
          lane: E,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          g === null ? ((m = g = C), (f = _)) : (g = g.next = C),
          (c |= E);
      if (((d = d.next), d === null)) {
        if (((d = s.shared.pending), d === null)) break;
        (E = d),
          (d = E.next),
          (E.next = null),
          (s.lastBaseUpdate = E),
          (s.shared.pending = null);
      }
    } while (1);
    if (
      (g === null && (f = _),
      (s.baseState = f),
      (s.firstBaseUpdate = m),
      (s.lastBaseUpdate = g),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (c |= s.lane), (s = s.next);
      while (s !== t);
    } else l === null && (s.shared.lanes = 0);
    (qn |= c), (e.lanes = c), (e.memoizedState = _);
  }
}
function hd(e, t, i) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var o = e[t],
        s = o.callback;
      if (s !== null) {
        if (((o.callback = null), (o = i), typeof s != "function"))
          throw Error(j(191, s));
        s.call(o);
      }
    }
}
var _p = new pf.Component().refs;
function jl(e, t, i, o) {
  (t = e.memoizedState),
    (i = i(o, t)),
    (i = i == null ? t : ye({}, t, i)),
    (e.memoizedState = i),
    e.lanes === 0 && (e.updateQueue.baseState = i);
}
var Ns = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, i) {
    e = e._reactInternals;
    var o = Ve(),
      s = Sn(e),
      l = Qt(o, s);
    (l.payload = t),
      i != null && (l.callback = i),
      (t = wn(e, l, s)),
      t !== null && (Tt(t, e, s, o), Fo(t, e, s));
  },
  enqueueReplaceState: function (e, t, i) {
    e = e._reactInternals;
    var o = Ve(),
      s = Sn(e),
      l = Qt(o, s);
    (l.tag = 1),
      (l.payload = t),
      i != null && (l.callback = i),
      (t = wn(e, l, s)),
      t !== null && (Tt(t, e, s, o), Fo(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var i = Ve(),
      o = Sn(e),
      s = Qt(i, o);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = wn(e, s, o)),
      t !== null && (Tt(t, e, o, i), Fo(t, e, o));
  },
};
function dd(e, t, i, o, s, l, c) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(o, l, c)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Nr(i, o) || !Nr(s, l)
      : !0
  );
}
function vp(e, t, i) {
  var o = !1,
    s = kn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = yt(l))
      : ((s = et(t) ? Wn : He.current),
        (o = t.contextTypes),
        (l = (o = o != null) ? Ci(e, s) : kn)),
    (t = new t(i, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ns),
    (e.stateNode = t),
    (t._reactInternals = e),
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function fd(e, t, i, o) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(i, o),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(i, o),
    t.state !== e && Ns.enqueueReplaceState(t, t.state, null);
}
function Bl(e, t, i, o) {
  var s = e.stateNode;
  (s.props = i), (s.state = e.memoizedState), (s.refs = _p), Au(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (s.context = yt(l))
    : ((l = et(t) ? Wn : He.current), (s.context = Ci(e, l))),
    (s.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (jl(e, t, l, i), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Ns.enqueueReplaceState(s, s.state, null),
      cs(e, i, s, o),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function or(e, t, i) {
  if (
    ((e = i.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (i._owner) {
      if (((i = i._owner), i)) {
        if (i.tag !== 1) throw Error(j(309));
        var o = i.stateNode;
      }
      if (!o) throw Error(j(147, e));
      var s = o,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (c) {
            var d = s.refs;
            d === _p && (d = s.refs = {}),
              c === null ? delete d[l] : (d[l] = c);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!i._owner) throw Error(j(290, e));
  }
  return e;
}
function Oo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function pd(e) {
  var t = e._init;
  return t(e._payload);
}
function gp(e) {
  function t(P, y) {
    if (e) {
      var k = P.deletions;
      k === null ? ((P.deletions = [y]), (P.flags |= 16)) : k.push(y);
    }
  }
  function i(P, y) {
    if (!e) return null;
    for (; y !== null; ) t(P, y), (y = y.sibling);
    return null;
  }
  function o(P, y) {
    for (P = new Map(); y !== null; )
      y.key !== null ? P.set(y.key, y) : P.set(y.index, y), (y = y.sibling);
    return P;
  }
  function s(P, y) {
    return (P = Pn(P, y)), (P.index = 0), (P.sibling = null), P;
  }
  function l(P, y, k) {
    return (
      (P.index = k),
      e
        ? ((k = P.alternate),
          k !== null
            ? ((k = k.index), k < y ? ((P.flags |= 2), y) : k)
            : ((P.flags |= 2), y))
        : ((P.flags |= 1048576), y)
    );
  }
  function c(P) {
    return e && P.alternate === null && (P.flags |= 2), P;
  }
  function d(P, y, k, M) {
    return y === null || y.tag !== 6
      ? ((y = Xa(k, P.mode, M)), (y.return = P), y)
      : ((y = s(y, k)), (y.return = P), y);
  }
  function f(P, y, k, M) {
    var D = k.type;
    return D === li
      ? g(P, y, k.props.children, M, k.key)
      : y !== null &&
        (y.elementType === D ||
          (typeof D == "object" &&
            D !== null &&
            D.$$typeof === un &&
            pd(D) === y.type))
      ? ((M = s(y, k.props)), (M.ref = or(P, y, k)), (M.return = P), M)
      : ((M = $o(k.type, k.key, k.props, null, P.mode, M)),
        (M.ref = or(P, y, k)),
        (M.return = P),
        M);
  }
  function m(P, y, k, M) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== k.containerInfo ||
      y.stateNode.implementation !== k.implementation
      ? ((y = Ya(k, P.mode, M)), (y.return = P), y)
      : ((y = s(y, k.children || [])), (y.return = P), y);
  }
  function g(P, y, k, M, D) {
    return y === null || y.tag !== 7
      ? ((y = Hn(k, P.mode, M, D)), (y.return = P), y)
      : ((y = s(y, k)), (y.return = P), y);
  }
  function _(P, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Xa("" + y, P.mode, k)), (y.return = P), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case go:
          return (
            (k = $o(y.type, y.key, y.props, null, P.mode, k)),
            (k.ref = or(P, null, y)),
            (k.return = P),
            k
          );
        case ai:
          return (y = Ya(y, P.mode, k)), (y.return = P), y;
        case un:
          var M = y._init;
          return _(P, M(y._payload), k);
      }
      if (cr(y) || er(y))
        return (y = Hn(y, P.mode, k, null)), (y.return = P), y;
      Oo(P, y);
    }
    return null;
  }
  function E(P, y, k, M) {
    var D = y !== null ? y.key : null;
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return D !== null ? null : d(P, y, "" + k, M);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case go:
          return k.key === D ? f(P, y, k, M) : null;
        case ai:
          return k.key === D ? m(P, y, k, M) : null;
        case un:
          return (D = k._init), E(P, y, D(k._payload), M);
      }
      if (cr(k) || er(k)) return D !== null ? null : g(P, y, k, M, null);
      Oo(P, k);
    }
    return null;
  }
  function C(P, y, k, M, D) {
    if ((typeof M == "string" && M !== "") || typeof M == "number")
      return (P = P.get(k) || null), d(y, P, "" + M, D);
    if (typeof M == "object" && M !== null) {
      switch (M.$$typeof) {
        case go:
          return (P = P.get(M.key === null ? k : M.key) || null), f(y, P, M, D);
        case ai:
          return (P = P.get(M.key === null ? k : M.key) || null), m(y, P, M, D);
        case un:
          var U = M._init;
          return C(P, y, k, U(M._payload), D);
      }
      if (cr(M) || er(M)) return (P = P.get(k) || null), g(y, P, M, D, null);
      Oo(y, M);
    }
    return null;
  }
  function S(P, y, k, M) {
    for (
      var D = null, U = null, b = y, H = (y = 0), he = null;
      b !== null && H < k.length;
      H++
    ) {
      b.index > H ? ((he = b), (b = null)) : (he = b.sibling);
      var J = E(P, b, k[H], M);
      if (J === null) {
        b === null && (b = he);
        break;
      }
      e && b && J.alternate === null && t(P, b),
        (y = l(J, y, H)),
        U === null ? (D = J) : (U.sibling = J),
        (U = J),
        (b = he);
    }
    if (H === k.length) return i(P, b), pe && Bn(P, H), D;
    if (b === null) {
      for (; H < k.length; H++)
        (b = _(P, k[H], M)),
          b !== null &&
            ((y = l(b, y, H)), U === null ? (D = b) : (U.sibling = b), (U = b));
      return pe && Bn(P, H), D;
    }
    for (b = o(P, b); H < k.length; H++)
      (he = C(b, P, H, k[H], M)),
        he !== null &&
          (e && he.alternate !== null && b.delete(he.key === null ? H : he.key),
          (y = l(he, y, H)),
          U === null ? (D = he) : (U.sibling = he),
          (U = he));
    return (
      e &&
        b.forEach(function (le) {
          return t(P, le);
        }),
      pe && Bn(P, H),
      D
    );
  }
  function x(P, y, k, M) {
    var D = er(k);
    if (typeof D != "function") throw Error(j(150));
    if (((k = D.call(k)), k == null)) throw Error(j(151));
    for (
      var U = (D = null), b = y, H = (y = 0), he = null, J = k.next();
      b !== null && !J.done;
      H++, J = k.next()
    ) {
      b.index > H ? ((he = b), (b = null)) : (he = b.sibling);
      var le = E(P, b, J.value, M);
      if (le === null) {
        b === null && (b = he);
        break;
      }
      e && b && le.alternate === null && t(P, b),
        (y = l(le, y, H)),
        U === null ? (D = le) : (U.sibling = le),
        (U = le),
        (b = he);
    }
    if (J.done) return i(P, b), pe && Bn(P, H), D;
    if (b === null) {
      for (; !J.done; H++, J = k.next())
        (J = _(P, J.value, M)),
          J !== null &&
            ((y = l(J, y, H)), U === null ? (D = J) : (U.sibling = J), (U = J));
      return pe && Bn(P, H), D;
    }
    for (b = o(P, b); !J.done; H++, J = k.next())
      (J = C(b, P, H, J.value, M)),
        J !== null &&
          (e && J.alternate !== null && b.delete(J.key === null ? H : J.key),
          (y = l(J, y, H)),
          U === null ? (D = J) : (U.sibling = J),
          (U = J));
    return (
      e &&
        b.forEach(function (ze) {
          return t(P, ze);
        }),
      pe && Bn(P, H),
      D
    );
  }
  function A(P, y, k, M) {
    if (
      (typeof k == "object" &&
        k !== null &&
        k.type === li &&
        k.key === null &&
        (k = k.props.children),
      typeof k == "object" && k !== null)
    ) {
      switch (k.$$typeof) {
        case go:
          e: {
            for (var D = k.key, U = y; U !== null; ) {
              if (U.key === D) {
                if (((D = k.type), D === li)) {
                  if (U.tag === 7) {
                    i(P, U.sibling),
                      (y = s(U, k.props.children)),
                      (y.return = P),
                      (P = y);
                    break e;
                  }
                } else if (
                  U.elementType === D ||
                  (typeof D == "object" &&
                    D !== null &&
                    D.$$typeof === un &&
                    pd(D) === U.type)
                ) {
                  i(P, U.sibling),
                    (y = s(U, k.props)),
                    (y.ref = or(P, U, k)),
                    (y.return = P),
                    (P = y);
                  break e;
                }
                i(P, U);
                break;
              } else t(P, U);
              U = U.sibling;
            }
            k.type === li
              ? ((y = Hn(k.props.children, P.mode, M, k.key)),
                (y.return = P),
                (P = y))
              : ((M = $o(k.type, k.key, k.props, null, P.mode, M)),
                (M.ref = or(P, y, k)),
                (M.return = P),
                (P = M));
          }
          return c(P);
        case ai:
          e: {
            for (U = k.key; y !== null; ) {
              if (y.key === U)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === k.containerInfo &&
                  y.stateNode.implementation === k.implementation
                ) {
                  i(P, y.sibling),
                    (y = s(y, k.children || [])),
                    (y.return = P),
                    (P = y);
                  break e;
                } else {
                  i(P, y);
                  break;
                }
              else t(P, y);
              y = y.sibling;
            }
            (y = Ya(k, P.mode, M)), (y.return = P), (P = y);
          }
          return c(P);
        case un:
          return (U = k._init), A(P, y, U(k._payload), M);
      }
      if (cr(k)) return S(P, y, k, M);
      if (er(k)) return x(P, y, k, M);
      Oo(P, k);
    }
    return (typeof k == "string" && k !== "") || typeof k == "number"
      ? ((k = "" + k),
        y !== null && y.tag === 6
          ? (i(P, y.sibling), (y = s(y, k)), (y.return = P), (P = y))
          : (i(P, y), (y = Xa(k, P.mode, M)), (y.return = P), (P = y)),
        c(P))
      : i(P, y);
  }
  return A;
}
var Oi = gp(!0),
  yp = gp(!1),
  Vr = {},
  Ft = Tn(Vr),
  Ir = Tn(Vr),
  Ar = Tn(Vr);
function Un(e) {
  if (e === Vr) throw Error(j(174));
  return e;
}
function ju(e, t) {
  switch ((ce(Ar, t), ce(Ir, e), ce(Ft, Vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ml(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ml(t, e));
  }
  fe(Ft), ce(Ft, t);
}
function Ni() {
  fe(Ft), fe(Ir), fe(Ar);
}
function wp(e) {
  Un(Ar.current);
  var t = Un(Ft.current),
    i = ml(t, e.type);
  t !== i && (ce(Ir, e), ce(Ft, i));
}
function Bu(e) {
  Ir.current === e && (fe(Ft), fe(Ir));
}
var _e = Tn(0);
function hs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var i = t.memoizedState;
      if (
        i !== null &&
        ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Va = [];
function Du() {
  for (var e = 0; e < Va.length; e++)
    Va[e]._workInProgressVersionPrimary = null;
  Va.length = 0;
}
var Zo = nn.ReactCurrentDispatcher,
  qa = nn.ReactCurrentBatchConfig,
  Vn = 0,
  ge = null,
  Oe = null,
  Re = null,
  ds = !1,
  gr = !1,
  jr = 0,
  Sy = 0;
function Ze() {
  throw Error(j(321));
}
function Fu(e, t) {
  if (t === null) return !1;
  for (var i = 0; i < t.length && i < e.length; i++)
    if (!Ot(e[i], t[i])) return !1;
  return !0;
}
function Zu(e, t, i, o, s, l) {
  if (
    ((Vn = l),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zo.current = e === null || e.memoizedState === null ? ky : Cy),
    (e = i(o, s)),
    gr)
  ) {
    l = 0;
    do {
      if (((gr = !1), (jr = 0), 25 <= l)) throw Error(j(301));
      (l += 1),
        (Re = Oe = null),
        (t.updateQueue = null),
        (Zo.current = Ty),
        (e = i(o, s));
    } while (gr);
  }
  if (
    ((Zo.current = fs),
    (t = Oe !== null && Oe.next !== null),
    (Vn = 0),
    (Re = Oe = ge = null),
    (ds = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Uu() {
  var e = jr !== 0;
  return (jr = 0), e;
}
function At() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (ge.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function wt() {
  if (Oe === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Re === null ? ge.memoizedState : Re.next;
  if (t !== null) (Re = t), (Oe = e);
  else {
    if (e === null) throw Error(j(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Re === null ? (ge.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function Br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ka(e) {
  var t = wt(),
    i = t.queue;
  if (i === null) throw Error(j(311));
  i.lastRenderedReducer = e;
  var o = Oe,
    s = o.baseQueue,
    l = i.pending;
  if (l !== null) {
    if (s !== null) {
      var c = s.next;
      (s.next = l.next), (l.next = c);
    }
    (o.baseQueue = s = l), (i.pending = null);
  }
  if (s !== null) {
    (l = s.next), (o = o.baseState);
    var d = (c = null),
      f = null,
      m = l;
    do {
      var g = m.lane;
      if ((Vn & g) === g)
        f !== null &&
          (f = f.next =
            {
              lane: 0,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
          (o = m.hasEagerState ? m.eagerState : e(o, m.action));
      else {
        var _ = {
          lane: g,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null,
        };
        f === null ? ((d = f = _), (c = o)) : (f = f.next = _),
          (ge.lanes |= g),
          (qn |= g);
      }
      m = m.next;
    } while (m !== null && m !== l);
    f === null ? (c = o) : (f.next = d),
      Ot(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      (t.baseState = c),
      (t.baseQueue = f),
      (i.lastRenderedState = o);
  }
  if (((e = i.interleaved), e !== null)) {
    s = e;
    do (l = s.lane), (ge.lanes |= l), (qn |= l), (s = s.next);
    while (s !== e);
  } else s === null && (i.lanes = 0);
  return [t.memoizedState, i.dispatch];
}
function Ga(e) {
  var t = wt(),
    i = t.queue;
  if (i === null) throw Error(j(311));
  i.lastRenderedReducer = e;
  var o = i.dispatch,
    s = i.pending,
    l = t.memoizedState;
  if (s !== null) {
    i.pending = null;
    var c = (s = s.next);
    do (l = e(l, c.action)), (c = c.next);
    while (c !== s);
    Ot(l, t.memoizedState) || (Xe = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (i.lastRenderedState = l);
  }
  return [l, o];
}
function xp() {}
function Sp(e, t) {
  var i = ge,
    o = wt(),
    s = t(),
    l = !Ot(o.memoizedState, s);
  if (
    (l && ((o.memoizedState = s), (Xe = !0)),
    (o = o.queue),
    bu(Lp.bind(null, i, o, e), [e]),
    o.getSnapshot !== t || l || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((i.flags |= 2048),
      Dr(9, Ep.bind(null, i, o, s, t), void 0, null),
      Ie === null)
    )
      throw Error(j(349));
    Vn & 30 || Pp(i, t, s);
  }
  return s;
}
function Pp(e, t, i) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: i }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
}
function Ep(e, t, i, o) {
  (t.value = i), (t.getSnapshot = o), kp(t) && Cp(e);
}
function Lp(e, t, i) {
  return i(function () {
    kp(t) && Cp(e);
  });
}
function kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var i = t();
    return !Ot(e, i);
  } catch {
    return !0;
  }
}
function Cp(e) {
  var t = en(e, 1);
  t !== null && Tt(t, e, 1, -1);
}
function md(e) {
  var t = At();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ly.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function Dr(e, t, i, o) {
  return (
    (e = { tag: e, create: t, destroy: i, deps: o, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((i = t.lastEffect),
        i === null
          ? (t.lastEffect = e.next = e)
          : ((o = i.next), (i.next = e), (e.next = o), (t.lastEffect = e))),
    e
  );
}
function Tp() {
  return wt().memoizedState;
}
function Uo(e, t, i, o) {
  var s = At();
  (ge.flags |= e),
    (s.memoizedState = Dr(1 | t, i, void 0, o === void 0 ? null : o));
}
function zs(e, t, i, o) {
  var s = wt();
  o = o === void 0 ? null : o;
  var l = void 0;
  if (Oe !== null) {
    var c = Oe.memoizedState;
    if (((l = c.destroy), o !== null && Fu(o, c.deps))) {
      s.memoizedState = Dr(t, i, l, o);
      return;
    }
  }
  (ge.flags |= e), (s.memoizedState = Dr(1 | t, i, l, o));
}
function _d(e, t) {
  return Uo(8390656, 8, e, t);
}
function bu(e, t) {
  return zs(2048, 8, e, t);
}
function Op(e, t) {
  return zs(4, 2, e, t);
}
function Np(e, t) {
  return zs(4, 4, e, t);
}
function zp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Mp(e, t, i) {
  return (
    (i = i != null ? i.concat([e]) : null), zs(4, 4, zp.bind(null, t, e), i)
  );
}
function Hu() {}
function Rp(e, t) {
  var i = wt();
  t = t === void 0 ? null : t;
  var o = i.memoizedState;
  return o !== null && t !== null && Fu(t, o[1])
    ? o[0]
    : ((i.memoizedState = [e, t]), e);
}
function Ip(e, t) {
  var i = wt();
  t = t === void 0 ? null : t;
  var o = i.memoizedState;
  return o !== null && t !== null && Fu(t, o[1])
    ? o[0]
    : ((e = e()), (i.memoizedState = [e, t]), e);
}
function Ap(e, t, i) {
  return Vn & 21
    ? (Ot(i, t) || ((i = Df()), (ge.lanes |= i), (qn |= i), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = i));
}
function Py(e, t) {
  var i = se;
  (se = i !== 0 && 4 > i ? i : 4), e(!0);
  var o = qa.transition;
  qa.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = i), (qa.transition = o);
  }
}
function jp() {
  return wt().memoizedState;
}
function Ey(e, t, i) {
  var o = Sn(e);
  if (
    ((i = {
      lane: o,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Bp(e))
  )
    Dp(t, i);
  else if (((i = pp(e, t, i, o)), i !== null)) {
    var s = Ve();
    Tt(i, e, o, s), Fp(i, t, o);
  }
}
function Ly(e, t, i) {
  var o = Sn(e),
    s = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (Bp(e)) Dp(t, s);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var c = t.lastRenderedState,
          d = l(c, i);
        if (((s.hasEagerState = !0), (s.eagerState = d), Ot(d, c))) {
          var f = t.interleaved;
          f === null
            ? ((s.next = s), Iu(t))
            : ((s.next = f.next), (f.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (i = pp(e, t, s, o)),
      i !== null && ((s = Ve()), Tt(i, e, o, s), Fp(i, t, o));
  }
}
function Bp(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function Dp(e, t) {
  gr = ds = !0;
  var i = e.pending;
  i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
    (e.pending = t);
}
function Fp(e, t, i) {
  if (i & 4194240) {
    var o = t.lanes;
    (o &= e.pendingLanes), (i |= o), (t.lanes = i), wu(e, i);
  }
}
var fs = {
    readContext: yt,
    useCallback: Ze,
    useContext: Ze,
    useEffect: Ze,
    useImperativeHandle: Ze,
    useInsertionEffect: Ze,
    useLayoutEffect: Ze,
    useMemo: Ze,
    useReducer: Ze,
    useRef: Ze,
    useState: Ze,
    useDebugValue: Ze,
    useDeferredValue: Ze,
    useTransition: Ze,
    useMutableSource: Ze,
    useSyncExternalStore: Ze,
    useId: Ze,
    unstable_isNewReconciler: !1,
  },
  ky = {
    readContext: yt,
    useCallback: function (e, t) {
      return (At().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: yt,
    useEffect: _d,
    useImperativeHandle: function (e, t, i) {
      return (
        (i = i != null ? i.concat([e]) : null),
        Uo(4194308, 4, zp.bind(null, t, e), i)
      );
    },
    useLayoutEffect: function (e, t) {
      return Uo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Uo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var i = At();
      return (
        (t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, i) {
      var o = At();
      return (
        (t = i !== void 0 ? i(t) : t),
        (o.memoizedState = o.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (o.queue = e),
        (e = e.dispatch = Ey.bind(null, ge, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = At();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: md,
    useDebugValue: Hu,
    useDeferredValue: function (e) {
      return (At().memoizedState = e);
    },
    useTransition: function () {
      var e = md(!1),
        t = e[0];
      return (e = Py.bind(null, e[1])), (At().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, i) {
      var o = ge,
        s = At();
      if (pe) {
        if (i === void 0) throw Error(j(407));
        i = i();
      } else {
        if (((i = t()), Ie === null)) throw Error(j(349));
        Vn & 30 || Pp(o, t, i);
      }
      s.memoizedState = i;
      var l = { value: i, getSnapshot: t };
      return (
        (s.queue = l),
        _d(Lp.bind(null, o, l, e), [e]),
        (o.flags |= 2048),
        Dr(9, Ep.bind(null, o, l, i, t), void 0, null),
        i
      );
    },
    useId: function () {
      var e = At(),
        t = Ie.identifierPrefix;
      if (pe) {
        var i = Gt,
          o = Kt;
        (i = (o & ~(1 << (32 - Ct(o) - 1))).toString(32) + i),
          (t = ":" + t + "R" + i),
          (i = jr++),
          0 < i && (t += "H" + i.toString(32)),
          (t += ":");
      } else (i = Sy++), (t = ":" + t + "r" + i.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cy = {
    readContext: yt,
    useCallback: Rp,
    useContext: yt,
    useEffect: bu,
    useImperativeHandle: Mp,
    useInsertionEffect: Op,
    useLayoutEffect: Np,
    useMemo: Ip,
    useReducer: Ka,
    useRef: Tp,
    useState: function () {
      return Ka(Br);
    },
    useDebugValue: Hu,
    useDeferredValue: function (e) {
      var t = wt();
      return Ap(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ka(Br)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: xp,
    useSyncExternalStore: Sp,
    useId: jp,
    unstable_isNewReconciler: !1,
  },
  Ty = {
    readContext: yt,
    useCallback: Rp,
    useContext: yt,
    useEffect: bu,
    useImperativeHandle: Mp,
    useInsertionEffect: Op,
    useLayoutEffect: Np,
    useMemo: Ip,
    useReducer: Ga,
    useRef: Tp,
    useState: function () {
      return Ga(Br);
    },
    useDebugValue: Hu,
    useDeferredValue: function (e) {
      var t = wt();
      return Oe === null ? (t.memoizedState = e) : Ap(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ga(Br)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: xp,
    useSyncExternalStore: Sp,
    useId: jp,
    unstable_isNewReconciler: !1,
  };
function zi(e, t) {
  try {
    var i = "",
      o = t;
    do (i += ng(o)), (o = o.return);
    while (o);
    var s = i;
  } catch (l) {
    s =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Qa(e, t, i) {
  return { value: e, source: null, stack: i ?? null, digest: t ?? null };
}
function Dl(e, t) {
  try {
    console.error(t.value);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
var Oy = typeof WeakMap == "function" ? WeakMap : Map;
function Zp(e, t, i) {
  (i = Qt(-1, i)), (i.tag = 3), (i.payload = { element: null });
  var o = t.value;
  return (
    (i.callback = function () {
      ms || ((ms = !0), (Kl = o)), Dl(e, t);
    }),
    i
  );
}
function Up(e, t, i) {
  (i = Qt(-1, i)), (i.tag = 3);
  var o = e.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var s = t.value;
    (i.payload = function () {
      return o(s);
    }),
      (i.callback = function () {
        Dl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (i.callback = function () {
        Dl(e, t),
          typeof o != "function" &&
            (xn === null ? (xn = new Set([this])) : xn.add(this));
        var c = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: c !== null ? c : "",
        });
      }),
    i
  );
}
function vd(e, t, i) {
  var o = e.pingCache;
  if (o === null) {
    o = e.pingCache = new Oy();
    var s = new Set();
    o.set(t, s);
  } else (s = o.get(t)), s === void 0 && ((s = new Set()), o.set(t, s));
  s.has(i) || (s.add(i), (e = Hy.bind(null, e, t, i)), t.then(e, e));
}
function gd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yd(e, t, i, o, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (i.flags |= 131072),
          (i.flags &= -52805),
          i.tag === 1 &&
            (i.alternate === null
              ? (i.tag = 17)
              : ((t = Qt(-1, 1)), (t.tag = 2), wn(i, t, 1))),
          (i.lanes |= 1)),
      e);
}
var Ny = nn.ReactCurrentOwner,
  Xe = !1;
function $e(e, t, i, o) {
  t.child = e === null ? yp(t, null, i, o) : Oi(t, e.child, i, o);
}
function wd(e, t, i, o, s) {
  i = i.render;
  var l = t.ref;
  return (
    Ei(t, s),
    (o = Zu(e, t, i, o, l, s)),
    (i = Uu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        tn(e, t, s))
      : (pe && i && Tu(t), (t.flags |= 1), $e(e, t, o, s), t.child)
  );
}
function xd(e, t, i, o, s) {
  if (e === null) {
    var l = i.type;
    return typeof l == "function" &&
      !Ju(l) &&
      l.defaultProps === void 0 &&
      i.compare === null &&
      i.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), bp(e, t, l, o, s))
      : ((e = $o(i.type, null, o, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & s))) {
    var c = l.memoizedProps;
    if (
      ((i = i.compare), (i = i !== null ? i : Nr), i(c, o) && e.ref === t.ref)
    )
      return tn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Pn(l, o)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function bp(e, t, i, o, s) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Nr(l, o) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = o = l), (e.lanes & s) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), tn(e, t, s);
  }
  return Fl(e, t, i, o, s);
}
function Hp(e, t, i) {
  var o = t.pendingProps,
    s = o.children,
    l = e !== null ? e.memoizedState : null;
  if (o.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(gi, rt),
        (rt |= i);
    else {
      if (!(i & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | i : i),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(gi, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (o = l !== null ? l.baseLanes : i),
        ce(gi, rt),
        (rt |= o);
    }
  else
    l !== null ? ((o = l.baseLanes | i), (t.memoizedState = null)) : (o = i),
      ce(gi, rt),
      (rt |= o);
  return $e(e, t, s, i), t.child;
}
function Wp(e, t) {
  var i = t.ref;
  ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fl(e, t, i, o, s) {
  var l = et(i) ? Wn : He.current;
  return (
    (l = Ci(t, l)),
    Ei(t, s),
    (i = Zu(e, t, i, o, l, s)),
    (o = Uu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        tn(e, t, s))
      : (pe && o && Tu(t), (t.flags |= 1), $e(e, t, i, s), t.child)
  );
}
function Sd(e, t, i, o, s) {
  if (et(i)) {
    var l = !0;
    os(t);
  } else l = !1;
  if ((Ei(t, s), t.stateNode === null))
    bo(e, t), vp(t, i, o), Bl(t, i, o, s), (o = !0);
  else if (e === null) {
    var c = t.stateNode,
      d = t.memoizedProps;
    c.props = d;
    var f = c.context,
      m = i.contextType;
    typeof m == "object" && m !== null
      ? (m = yt(m))
      : ((m = et(i) ? Wn : He.current), (m = Ci(t, m)));
    var g = i.getDerivedStateFromProps,
      _ =
        typeof g == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function";
    _ ||
      (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
        typeof c.componentWillReceiveProps != "function") ||
      ((d !== o || f !== m) && fd(t, c, o, m)),
      (cn = !1);
    var E = t.memoizedState;
    (c.state = E),
      cs(t, o, c, s),
      (f = t.memoizedState),
      d !== o || E !== f || Ye.current || cn
        ? (typeof g == "function" && (jl(t, i, g, o), (f = t.memoizedState)),
          (d = cn || dd(t, i, d, o, E, f, m))
            ? (_ ||
                (typeof c.UNSAFE_componentWillMount != "function" &&
                  typeof c.componentWillMount != "function") ||
                (typeof c.componentWillMount == "function" &&
                  c.componentWillMount(),
                typeof c.UNSAFE_componentWillMount == "function" &&
                  c.UNSAFE_componentWillMount()),
              typeof c.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = o),
              (t.memoizedState = f)),
          (c.props = o),
          (c.state = f),
          (c.context = m),
          (o = d))
        : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
          (o = !1));
  } else {
    (c = t.stateNode),
      mp(e, t),
      (d = t.memoizedProps),
      (m = t.type === t.elementType ? d : Et(t.type, d)),
      (c.props = m),
      (_ = t.pendingProps),
      (E = c.context),
      (f = i.contextType),
      typeof f == "object" && f !== null
        ? (f = yt(f))
        : ((f = et(i) ? Wn : He.current), (f = Ci(t, f)));
    var C = i.getDerivedStateFromProps;
    (g =
      typeof C == "function" ||
      typeof c.getSnapshotBeforeUpdate == "function") ||
      (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
        typeof c.componentWillReceiveProps != "function") ||
      ((d !== _ || E !== f) && fd(t, c, o, f)),
      (cn = !1),
      (E = t.memoizedState),
      (c.state = E),
      cs(t, o, c, s);
    var S = t.memoizedState;
    d !== _ || E !== S || Ye.current || cn
      ? (typeof C == "function" && (jl(t, i, C, o), (S = t.memoizedState)),
        (m = cn || dd(t, i, m, o, E, S, f) || !1)
          ? (g ||
              (typeof c.UNSAFE_componentWillUpdate != "function" &&
                typeof c.componentWillUpdate != "function") ||
              (typeof c.componentWillUpdate == "function" &&
                c.componentWillUpdate(o, S, f),
              typeof c.UNSAFE_componentWillUpdate == "function" &&
                c.UNSAFE_componentWillUpdate(o, S, f)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof c.componentDidUpdate != "function" ||
              (d === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" ||
              (d === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = o),
            (t.memoizedState = S)),
        (c.props = o),
        (c.state = S),
        (c.context = f),
        (o = m))
      : (typeof c.componentDidUpdate != "function" ||
          (d === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 4),
        typeof c.getSnapshotBeforeUpdate != "function" ||
          (d === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 1024),
        (o = !1));
  }
  return Zl(e, t, i, o, l, s);
}
function Zl(e, t, i, o, s, l) {
  Wp(e, t);
  var c = (t.flags & 128) !== 0;
  if (!o && !c) return s && ad(t, i, !1), tn(e, t, l);
  (o = t.stateNode), (Ny.current = t);
  var d =
    c && typeof i.getDerivedStateFromError != "function" ? null : o.render();
  return (
    (t.flags |= 1),
    e !== null && c
      ? ((t.child = Oi(t, e.child, null, l)), (t.child = Oi(t, null, d, l)))
      : $e(e, t, d, l),
    (t.memoizedState = o.state),
    s && ad(t, i, !0),
    t.child
  );
}
function $p(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sd(e, t.context, !1),
    ju(e, t.containerInfo);
}
function Pd(e, t, i, o, s) {
  return Ti(), Nu(s), (t.flags |= 256), $e(e, t, i, o), t.child;
}
var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function bl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vp(e, t, i) {
  var o = t.pendingProps,
    s = _e.current,
    l = !1,
    c = (t.flags & 128) !== 0,
    d;
  if (
    ((d = c) ||
      (d = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    d
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ce(_e, s & 1),
    e === null)
  )
    return (
      Il(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((c = o.children),
          (e = o.fallback),
          l
            ? ((o = t.mode),
              (l = t.child),
              (c = { mode: "hidden", children: c }),
              !(o & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = c))
                : (l = Is(c, o, 0, null)),
              (e = Hn(e, o, i, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = bl(i)),
              (t.memoizedState = Ul),
              e)
            : Wu(t, c))
    );
  if (((s = e.memoizedState), s !== null && ((d = s.dehydrated), d !== null)))
    return zy(e, t, c, o, d, s, i);
  if (l) {
    (l = o.fallback), (c = t.mode), (s = e.child), (d = s.sibling);
    var f = { mode: "hidden", children: o.children };
    return (
      !(c & 1) && t.child !== s
        ? ((o = t.child),
          (o.childLanes = 0),
          (o.pendingProps = f),
          (t.deletions = null))
        : ((o = Pn(s, f)), (o.subtreeFlags = s.subtreeFlags & 14680064)),
      d !== null ? (l = Pn(d, l)) : ((l = Hn(l, c, i, null)), (l.flags |= 2)),
      (l.return = t),
      (o.return = t),
      (o.sibling = l),
      (t.child = o),
      (o = l),
      (l = t.child),
      (c = e.child.memoizedState),
      (c =
        c === null
          ? bl(i)
          : {
              baseLanes: c.baseLanes | i,
              cachePool: null,
              transitions: c.transitions,
            }),
      (l.memoizedState = c),
      (l.childLanes = e.childLanes & ~i),
      (t.memoizedState = Ul),
      o
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (o = Pn(l, { mode: "visible", children: o.children })),
    !(t.mode & 1) && (o.lanes = i),
    (o.return = t),
    (o.sibling = null),
    e !== null &&
      ((i = t.deletions),
      i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
    (t.child = o),
    (t.memoizedState = null),
    o
  );
}
function Wu(e, t) {
  return (
    (t = Is({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function No(e, t, i, o) {
  return (
    o !== null && Nu(o),
    Oi(t, e.child, null, i),
    (e = Wu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function zy(e, t, i, o, s, l, c) {
  if (i)
    return t.flags & 256
      ? ((t.flags &= -257), (o = Qa(Error(j(422)))), No(e, t, c, o))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = o.fallback),
        (s = t.mode),
        (o = Is({ mode: "visible", children: o.children }, s, 0, null)),
        (l = Hn(l, s, c, null)),
        (l.flags |= 2),
        (o.return = t),
        (l.return = t),
        (o.sibling = l),
        (t.child = o),
        t.mode & 1 && Oi(t, e.child, null, c),
        (t.child.memoizedState = bl(c)),
        (t.memoizedState = Ul),
        l);
  if (!(t.mode & 1)) return No(e, t, c, null);
  if (s.data === "$!") {
    if (((o = s.nextSibling && s.nextSibling.dataset), o)) var d = o.dgst;
    return (o = d), (l = Error(j(419))), (o = Qa(l, o, void 0)), No(e, t, c, o);
  }
  if (((d = (c & e.childLanes) !== 0), Xe || d)) {
    if (((o = Ie), o !== null)) {
      switch (c & -c) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (o.suspendedLanes | c) ? 0 : s),
        s !== 0 &&
          s !== l.retryLane &&
          ((l.retryLane = s), en(e, s), Tt(o, e, s, -1));
    }
    return Qu(), (o = Qa(Error(j(421)))), No(e, t, c, o);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Wy.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ot = yn(s.nextSibling)),
      (st = t),
      (pe = !0),
      (kt = null),
      e !== null &&
        ((pt[mt++] = Kt),
        (pt[mt++] = Gt),
        (pt[mt++] = $n),
        (Kt = e.id),
        (Gt = e.overflow),
        ($n = t)),
      (t = Wu(t, o.children)),
      (t.flags |= 4096),
      t);
}
function Ed(e, t, i) {
  e.lanes |= t;
  var o = e.alternate;
  o !== null && (o.lanes |= t), Al(e.return, t, i);
}
function Ja(e, t, i, o, s) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: i,
        tailMode: s,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = o),
      (l.tail = i),
      (l.tailMode = s));
}
function qp(e, t, i) {
  var o = t.pendingProps,
    s = o.revealOrder,
    l = o.tail;
  if (($e(e, t, o.children, i), (o = _e.current), o & 2))
    (o = (o & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ed(e, i, t);
        else if (e.tag === 19) Ed(e, i, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    o &= 1;
  }
  if ((ce(_e, o), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (i = t.child, s = null; i !== null; )
          (e = i.alternate),
            e !== null && hs(e) === null && (s = i),
            (i = i.sibling);
        (i = s),
          i === null
            ? ((s = t.child), (t.child = null))
            : ((s = i.sibling), (i.sibling = null)),
          Ja(t, !1, s, i, l);
        break;
      case "backwards":
        for (i = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && hs(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = i), (i = s), (s = e);
        }
        Ja(t, !0, i, null, l);
        break;
      case "together":
        Ja(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, i) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qn |= t.lanes),
    !(i & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, i = Pn(e, e.pendingProps), t.child = i, i.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (i = i.sibling = Pn(e, e.pendingProps)), (i.return = t);
    i.sibling = null;
  }
  return t.child;
}
function My(e, t, i) {
  switch (t.tag) {
    case 3:
      $p(t), Ti();
      break;
    case 5:
      wp(t);
      break;
    case 1:
      et(t.type) && os(t);
      break;
    case 4:
      ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var o = t.type._context,
        s = t.memoizedProps.value;
      ce(ls, o._currentValue), (o._currentValue = s);
      break;
    case 13:
      if (((o = t.memoizedState), o !== null))
        return o.dehydrated !== null
          ? (ce(_e, _e.current & 1), (t.flags |= 128), null)
          : i & t.child.childLanes
          ? Vp(e, t, i)
          : (ce(_e, _e.current & 1),
            (e = tn(e, t, i)),
            e !== null ? e.sibling : null);
      ce(_e, _e.current & 1);
      break;
    case 19:
      if (((o = (i & t.childLanes) !== 0), e.flags & 128)) {
        if (o) return qp(e, t, i);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ce(_e, _e.current),
        o)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hp(e, t, i);
  }
  return tn(e, t, i);
}
var Kp, Hl, Gp, Qp;
Kp = function (e, t) {
  for (var i = t.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
      (i.child.return = i), (i = i.child);
      continue;
    }
    if (i === t) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === t) return;
      i = i.return;
    }
    (i.sibling.return = i.return), (i = i.sibling);
  }
};
Hl = function () {};
Gp = function (e, t, i, o) {
  var s = e.memoizedProps;
  if (s !== o) {
    (e = t.stateNode), Un(Ft.current);
    var l = null;
    switch (i) {
      case "input":
        (s = hl(e, s)), (o = hl(e, o)), (l = []);
        break;
      case "select":
        (s = ye({}, s, { value: void 0 })),
          (o = ye({}, o, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (s = pl(e, s)), (o = pl(e, o)), (l = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof o.onClick == "function" &&
          (e.onclick = is);
    }
    _l(i, o);
    var c;
    i = null;
    for (m in s)
      if (!o.hasOwnProperty(m) && s.hasOwnProperty(m) && s[m] != null)
        if (m === "style") {
          var d = s[m];
          for (c in d) d.hasOwnProperty(c) && (i || (i = {}), (i[c] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (Pr.hasOwnProperty(m)
              ? l || (l = [])
              : (l = l || []).push(m, null));
    for (m in o) {
      var f = o[m];
      if (
        ((d = s != null ? s[m] : void 0),
        o.hasOwnProperty(m) && f !== d && (f != null || d != null))
      )
        if (m === "style")
          if (d) {
            for (c in d)
              !d.hasOwnProperty(c) ||
                (f && f.hasOwnProperty(c)) ||
                (i || (i = {}), (i[c] = ""));
            for (c in f)
              f.hasOwnProperty(c) &&
                d[c] !== f[c] &&
                (i || (i = {}), (i[c] = f[c]));
          } else i || (l || (l = []), l.push(m, i)), (i = f);
        else
          m === "dangerouslySetInnerHTML"
            ? ((f = f ? f.__html : void 0),
              (d = d ? d.__html : void 0),
              f != null && d !== f && (l = l || []).push(m, f))
            : m === "children"
            ? (typeof f != "string" && typeof f != "number") ||
              (l = l || []).push(m, "" + f)
            : m !== "suppressContentEditableWarning" &&
              m !== "suppressHydrationWarning" &&
              (Pr.hasOwnProperty(m)
                ? (f != null && m === "onScroll" && de("scroll", e),
                  l || d === f || (l = []))
                : (l = l || []).push(m, f));
    }
    i && (l = l || []).push("style", i);
    var m = l;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Qp = function (e, t, i, o) {
  i !== o && (t.flags |= 4);
};
function sr(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var i = null; t !== null; )
          t.alternate !== null && (i = t), (t = t.sibling);
        i === null ? (e.tail = null) : (i.sibling = null);
        break;
      case "collapsed":
        i = e.tail;
        for (var o = null; i !== null; )
          i.alternate !== null && (o = i), (i = i.sibling);
        o === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (o.sibling = null);
    }
}
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    i = 0,
    o = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (i |= s.lanes | s.childLanes),
        (o |= s.subtreeFlags & 14680064),
        (o |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (i |= s.lanes | s.childLanes),
        (o |= s.subtreeFlags),
        (o |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= o), (e.childLanes = i), t;
}
function Ry(e, t, i) {
  var o = t.pendingProps;
  switch ((Ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ue(t), null;
    case 1:
      return et(t.type) && rs(), Ue(t), null;
    case 3:
      return (
        (o = t.stateNode),
        Ni(),
        fe(Ye),
        fe(He),
        Du(),
        o.pendingContext &&
          ((o.context = o.pendingContext), (o.pendingContext = null)),
        (e === null || e.child === null) &&
          (To(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (Jl(kt), (kt = null)))),
        Hl(e, t),
        Ue(t),
        null
      );
    case 5:
      Bu(t);
      var s = Un(Ar.current);
      if (((i = t.type), e !== null && t.stateNode != null))
        Gp(e, t, i, o, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!o) {
          if (t.stateNode === null) throw Error(j(166));
          return Ue(t), null;
        }
        if (((e = Un(Ft.current)), To(t))) {
          (o = t.stateNode), (i = t.type);
          var l = t.memoizedProps;
          switch (((o[jt] = t), (o[Rr] = l), (e = (t.mode & 1) !== 0), i)) {
            case "dialog":
              de("cancel", o), de("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", o);
              break;
            case "video":
            case "audio":
              for (s = 0; s < dr.length; s++) de(dr[s], o);
              break;
            case "source":
              de("error", o);
              break;
            case "img":
            case "image":
            case "link":
              de("error", o), de("load", o);
              break;
            case "details":
              de("toggle", o);
              break;
            case "input":
              Rh(o, l), de("invalid", o);
              break;
            case "select":
              (o._wrapperState = { wasMultiple: !!l.multiple }),
                de("invalid", o);
              break;
            case "textarea":
              Ah(o, l), de("invalid", o);
          }
          _l(i, l), (s = null);
          for (var c in l)
            if (l.hasOwnProperty(c)) {
              var d = l[c];
              c === "children"
                ? typeof d == "string"
                  ? o.textContent !== d &&
                    (l.suppressHydrationWarning !== !0 &&
                      Co(o.textContent, d, e),
                    (s = ["children", d]))
                  : typeof d == "number" &&
                    o.textContent !== "" + d &&
                    (l.suppressHydrationWarning !== !0 &&
                      Co(o.textContent, d, e),
                    (s = ["children", "" + d]))
                : Pr.hasOwnProperty(c) &&
                  d != null &&
                  c === "onScroll" &&
                  de("scroll", o);
            }
          switch (i) {
            case "input":
              yo(o), Ih(o, l, !0);
              break;
            case "textarea":
              yo(o), jh(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (o.onclick = is);
          }
          (o = s), (t.updateQueue = o), o !== null && (t.flags |= 4);
        } else {
          (c = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Pf(i)),
            e === "http://www.w3.org/1999/xhtml"
              ? i === "script"
                ? ((e = c.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof o.is == "string"
                ? (e = c.createElement(i, { is: o.is }))
                : ((e = c.createElement(i)),
                  i === "select" &&
                    ((c = e),
                    o.multiple
                      ? (c.multiple = !0)
                      : o.size && (c.size = o.size)))
              : (e = c.createElementNS(e, i)),
            (e[jt] = t),
            (e[Rr] = o),
            Kp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((c = vl(i, o)), i)) {
              case "dialog":
                de("cancel", e), de("close", e), (s = o);
                break;
              case "iframe":
              case "object":
              case "embed":
                de("load", e), (s = o);
                break;
              case "video":
              case "audio":
                for (s = 0; s < dr.length; s++) de(dr[s], e);
                s = o;
                break;
              case "source":
                de("error", e), (s = o);
                break;
              case "img":
              case "image":
              case "link":
                de("error", e), de("load", e), (s = o);
                break;
              case "details":
                de("toggle", e), (s = o);
                break;
              case "input":
                Rh(e, o), (s = hl(e, o)), de("invalid", e);
                break;
              case "option":
                s = o;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!o.multiple }),
                  (s = ye({}, o, { value: void 0 })),
                  de("invalid", e);
                break;
              case "textarea":
                Ah(e, o), (s = pl(e, o)), de("invalid", e);
                break;
              default:
                s = o;
            }
            _l(i, s), (d = s);
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var f = d[l];
                l === "style"
                  ? kf(e, f)
                  : l === "dangerouslySetInnerHTML"
                  ? ((f = f ? f.__html : void 0), f != null && Ef(e, f))
                  : l === "children"
                  ? typeof f == "string"
                    ? (i !== "textarea" || f !== "") && Er(e, f)
                    : typeof f == "number" && Er(e, "" + f)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Pr.hasOwnProperty(l)
                      ? f != null && l === "onScroll" && de("scroll", e)
                      : f != null && pu(e, l, f, c));
              }
            switch (i) {
              case "input":
                yo(e), Ih(e, o, !1);
                break;
              case "textarea":
                yo(e), jh(e);
                break;
              case "option":
                o.value != null && e.setAttribute("value", "" + Ln(o.value));
                break;
              case "select":
                (e.multiple = !!o.multiple),
                  (l = o.value),
                  l != null
                    ? wi(e, !!o.multiple, l, !1)
                    : o.defaultValue != null &&
                      wi(e, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = is);
            }
            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
          }
          o && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ue(t), null;
    case 6:
      if (e && t.stateNode != null) Qp(e, t, e.memoizedProps, o);
      else {
        if (typeof o != "string" && t.stateNode === null) throw Error(j(166));
        if (((i = Un(Ar.current)), Un(Ft.current), To(t))) {
          if (
            ((o = t.stateNode),
            (i = t.memoizedProps),
            (o[jt] = t),
            (l = o.nodeValue !== i) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Co(o.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Co(o.nodeValue, i, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)),
            (o[jt] = t),
            (t.stateNode = o);
      }
      return Ue(t), null;
    case 13:
      if (
        (fe(_e),
        (o = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && ot !== null && t.mode & 1 && !(t.flags & 128))
          fp(), Ti(), (t.flags |= 98560), (l = !1);
        else if (((l = To(t)), o !== null && o.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(j(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(j(317));
            l[jt] = t;
          } else
            Ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ue(t), (l = !1);
        } else kt !== null && (Jl(kt), (kt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = i), t)
        : ((o = o !== null),
          o !== (e !== null && e.memoizedState !== null) &&
            o &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || _e.current & 1 ? Ne === 0 && (Ne = 3) : Qu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ue(t),
          null);
    case 4:
      return (
        Ni(), Hl(e, t), e === null && zr(t.stateNode.containerInfo), Ue(t), null
      );
    case 10:
      return Ru(t.type._context), Ue(t), null;
    case 17:
      return et(t.type) && rs(), Ue(t), null;
    case 19:
      if ((fe(_e), (l = t.memoizedState), l === null)) return Ue(t), null;
      if (((o = (t.flags & 128) !== 0), (c = l.rendering), c === null))
        if (o) sr(l, !1);
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((c = hs(e)), c !== null)) {
                for (
                  t.flags |= 128,
                    sr(l, !1),
                    o = c.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    o = i,
                    i = t.child;
                  i !== null;

                )
                  (l = i),
                    (e = o),
                    (l.flags &= 14680066),
                    (c = l.alternate),
                    c === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = c.childLanes),
                        (l.lanes = c.lanes),
                        (l.child = c.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = c.memoizedProps),
                        (l.memoizedState = c.memoizedState),
                        (l.updateQueue = c.updateQueue),
                        (l.type = c.type),
                        (e = c.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (i = i.sibling);
                return ce(_e, (_e.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Se() > Mi &&
            ((t.flags |= 128), (o = !0), sr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!o)
          if (((e = hs(c)), e !== null)) {
            if (
              ((t.flags |= 128),
              (o = !0),
              (i = e.updateQueue),
              i !== null && ((t.updateQueue = i), (t.flags |= 4)),
              sr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !c.alternate && !pe)
            )
              return Ue(t), null;
          } else
            2 * Se() - l.renderingStartTime > Mi &&
              i !== 1073741824 &&
              ((t.flags |= 128), (o = !0), sr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((c.sibling = t.child), (t.child = c))
          : ((i = l.last),
            i !== null ? (i.sibling = c) : (t.child = c),
            (l.last = c));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Se()),
          (t.sibling = null),
          (i = _e.current),
          ce(_e, o ? (i & 1) | 2 : i & 1),
          t)
        : (Ue(t), null);
    case 22:
    case 23:
      return (
        Gu(),
        (o = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
        o && t.mode & 1
          ? rt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Iy(e, t) {
  switch ((Ou(t), t.tag)) {
    case 1:
      return (
        et(t.type) && rs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ni(),
        fe(Ye),
        fe(He),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Bu(t), null;
    case 13:
      if (
        (fe(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Ti();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(_e), null;
    case 4:
      return Ni(), null;
    case 10:
      return Ru(t.type._context), null;
    case 22:
    case 23:
      return Gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zo = !1,
  be = !1,
  Ay = typeof WeakSet == "function" ? WeakSet : Set,
  Z = null;
function vi(e, t) {
  var i = e.ref;
  if (i !== null)
    if (typeof i == "function")
      try {
        i(null);
      } catch (o) {
        we(e, t, o);
      }
    else i.current = null;
}
function Wl(e, t, i) {
  try {
    i();
  } catch (o) {
    we(e, t, o);
  }
}
var Ld = !1;
function jy(e, t) {
  if (((Cl = es), (e = ep()), Cu(e))) {
    if ("selectionStart" in e)
      var i = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        i = ((i = e.ownerDocument) && i.defaultView) || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var s = o.anchorOffset,
            l = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, l.nodeType;
          } catch {
            i = null;
            break e;
          }
          var c = 0,
            d = -1,
            f = -1,
            m = 0,
            g = 0,
            _ = e,
            E = null;
          t: for (;;) {
            for (
              var C;
              _ !== i || (s !== 0 && _.nodeType !== 3) || (d = c + s),
                _ !== l || (o !== 0 && _.nodeType !== 3) || (f = c + o),
                _.nodeType === 3 && (c += _.nodeValue.length),
                (C = _.firstChild) !== null;

            )
              (E = _), (_ = C);
            for (;;) {
              if (_ === e) break t;
              if (
                (E === i && ++m === s && (d = c),
                E === l && ++g === o && (f = c),
                (C = _.nextSibling) !== null)
              )
                break;
              (_ = E), (E = _.parentNode);
            }
            _ = C;
          }
          i = d === -1 || f === -1 ? null : { start: d, end: f };
        } else i = null;
      }
    i = i || { start: 0, end: 0 };
  } else i = null;
  for (Tl = { focusedElem: e, selectionRange: i }, es = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Z = e);
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps,
                    A = S.memoizedState,
                    P = t.stateNode,
                    y = P.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Et(t.type, x),
                      A
                    );
                  P.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var k = t.stateNode.containerInfo;
                k.nodeType === 1
                  ? (k.textContent = "")
                  : k.nodeType === 9 &&
                    k.documentElement &&
                    k.removeChild(k.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (M) {
          we(t, t.return, M);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Z = e);
          break;
        }
        Z = t.return;
      }
  return (S = Ld), (Ld = !1), S;
}
function yr(e, t, i) {
  var o = t.updateQueue;
  if (((o = o !== null ? o.lastEffect : null), o !== null)) {
    var s = (o = o.next);
    do {
      if ((s.tag & e) === e) {
        var l = s.destroy;
        (s.destroy = void 0), l !== void 0 && Wl(t, i, l);
      }
      s = s.next;
    } while (s !== o);
  }
}
function Ms(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var i = (t = t.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.create;
        i.destroy = o();
      }
      i = i.next;
    } while (i !== t);
  }
}
function $l(e) {
  var t = e.ref;
  if (t !== null) {
    var i = e.stateNode;
    switch (e.tag) {
      case 5:
        e = i;
        break;
      default:
        e = i;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[jt], delete t[Rr], delete t[zl], delete t[gy], delete t[yy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vl(e, t, i) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode),
      t
        ? i.nodeType === 8
          ? i.parentNode.insertBefore(e, t)
          : i.insertBefore(e, t)
        : (i.nodeType === 8
            ? ((t = i.parentNode), t.insertBefore(e, i))
            : ((t = i), t.appendChild(e)),
          (i = i._reactRootContainer),
          i != null || t.onclick !== null || (t.onclick = is));
  else if (o !== 4 && ((e = e.child), e !== null))
    for (Vl(e, t, i), e = e.sibling; e !== null; ) Vl(e, t, i), (e = e.sibling);
}
function ql(e, t, i) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
  else if (o !== 4 && ((e = e.child), e !== null))
    for (ql(e, t, i), e = e.sibling; e !== null; ) ql(e, t, i), (e = e.sibling);
}
var Be = null,
  Lt = !1;
function an(e, t, i) {
  for (i = i.child; i !== null; ) Yp(e, t, i), (i = i.sibling);
}
function Yp(e, t, i) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function")
    try {
      Dt.onCommitFiberUnmount(Es, i);
    } catch {}
  switch (i.tag) {
    case 5:
      be || vi(i, t);
    case 6:
      var o = Be,
        s = Lt;
      (Be = null),
        an(e, t, i),
        (Be = o),
        (Lt = s),
        Be !== null &&
          (Lt
            ? ((e = Be),
              (i = i.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
            : Be.removeChild(i.stateNode));
      break;
    case 18:
      Be !== null &&
        (Lt
          ? ((e = Be),
            (i = i.stateNode),
            e.nodeType === 8
              ? Wa(e.parentNode, i)
              : e.nodeType === 1 && Wa(e, i),
            Tr(e))
          : Wa(Be, i.stateNode));
      break;
    case 4:
      (o = Be),
        (s = Lt),
        (Be = i.stateNode.containerInfo),
        (Lt = !0),
        an(e, t, i),
        (Be = o),
        (Lt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !be &&
        ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
      ) {
        s = o = o.next;
        do {
          var l = s,
            c = l.destroy;
          (l = l.tag),
            c !== void 0 && (l & 2 || l & 4) && Wl(i, t, c),
            (s = s.next);
        } while (s !== o);
      }
      an(e, t, i);
      break;
    case 1:
      if (
        !be &&
        (vi(i, t),
        (o = i.stateNode),
        typeof o.componentWillUnmount == "function")
      )
        try {
          (o.props = i.memoizedProps),
            (o.state = i.memoizedState),
            o.componentWillUnmount();
        } catch (d) {
          we(i, t, d);
        }
      an(e, t, i);
      break;
    case 21:
      an(e, t, i);
      break;
    case 22:
      i.mode & 1
        ? ((be = (o = be) || i.memoizedState !== null), an(e, t, i), (be = o))
        : an(e, t, i);
      break;
    default:
      an(e, t, i);
  }
}
function Cd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new Ay()),
      t.forEach(function (o) {
        var s = $y.bind(null, e, o);
        i.has(o) || (i.add(o), o.then(s, s));
      });
  }
}
function Pt(e, t) {
  var i = t.deletions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var s = i[o];
      try {
        var l = e,
          c = t,
          d = c;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              (Be = d.stateNode), (Lt = !1);
              break e;
            case 3:
              (Be = d.stateNode.containerInfo), (Lt = !0);
              break e;
            case 4:
              (Be = d.stateNode.containerInfo), (Lt = !0);
              break e;
          }
          d = d.return;
        }
        if (Be === null) throw Error(j(160));
        Yp(l, c, s), (Be = null), (Lt = !1);
        var f = s.alternate;
        f !== null && (f.return = null), (s.return = null);
      } catch (m) {
        we(s, t, m);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) em(t, e), (t = t.sibling);
}
function em(e, t) {
  var i = e.alternate,
    o = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pt(t, e), It(e), o & 4)) {
        try {
          yr(3, e, e.return), Ms(3, e);
        } catch (x) {
          we(e, e.return, x);
        }
        try {
          yr(5, e, e.return);
        } catch (x) {
          we(e, e.return, x);
        }
      }
      break;
    case 1:
      Pt(t, e), It(e), o & 512 && i !== null && vi(i, i.return);
      break;
    case 5:
      if (
        (Pt(t, e),
        It(e),
        o & 512 && i !== null && vi(i, i.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Er(s, "");
        } catch (x) {
          we(e, e.return, x);
        }
      }
      if (o & 4 && ((s = e.stateNode), s != null)) {
        var l = e.memoizedProps,
          c = i !== null ? i.memoizedProps : l,
          d = e.type,
          f = e.updateQueue;
        if (((e.updateQueue = null), f !== null))
          try {
            d === "input" && l.type === "radio" && l.name != null && xf(s, l),
              vl(d, c);
            var m = vl(d, l);
            for (c = 0; c < f.length; c += 2) {
              var g = f[c],
                _ = f[c + 1];
              g === "style"
                ? kf(s, _)
                : g === "dangerouslySetInnerHTML"
                ? Ef(s, _)
                : g === "children"
                ? Er(s, _)
                : pu(s, g, _, m);
            }
            switch (d) {
              case "input":
                dl(s, l);
                break;
              case "textarea":
                Sf(s, l);
                break;
              case "select":
                var E = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!l.multiple;
                var C = l.value;
                C != null
                  ? wi(s, !!l.multiple, C, !1)
                  : E !== !!l.multiple &&
                    (l.defaultValue != null
                      ? wi(s, !!l.multiple, l.defaultValue, !0)
                      : wi(s, !!l.multiple, l.multiple ? [] : "", !1));
            }
            s[Rr] = l;
          } catch (x) {
            we(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Pt(t, e), It(e), o & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (s = e.stateNode), (l = e.memoizedProps);
        try {
          s.nodeValue = l;
        } catch (x) {
          we(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Pt(t, e), It(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
      )
        try {
          Tr(t.containerInfo);
        } catch (x) {
          we(e, e.return, x);
        }
      break;
    case 4:
      Pt(t, e), It(e);
      break;
    case 13:
      Pt(t, e),
        It(e),
        (s = e.child),
        s.flags & 8192 &&
          ((l = s.memoizedState !== null),
          (s.stateNode.isHidden = l),
          !l ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (qu = Se())),
        o & 4 && Cd(e);
      break;
    case 22:
      if (
        ((g = i !== null && i.memoizedState !== null),
        e.mode & 1 ? ((be = (m = be) || g), Pt(t, e), (be = m)) : Pt(t, e),
        It(e),
        o & 8192)
      ) {
        if (
          ((m = e.memoizedState !== null),
          (e.stateNode.isHidden = m) && !g && e.mode & 1)
        )
          for (Z = e, g = e.child; g !== null; ) {
            for (_ = Z = g; Z !== null; ) {
              switch (((E = Z), (C = E.child), E.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yr(4, E, E.return);
                  break;
                case 1:
                  vi(E, E.return);
                  var S = E.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (o = E), (i = E.return);
                    try {
                      (t = o),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (x) {
                      we(o, i, x);
                    }
                  }
                  break;
                case 5:
                  vi(E, E.return);
                  break;
                case 22:
                  if (E.memoizedState !== null) {
                    Od(_);
                    continue;
                  }
              }
              C !== null ? ((C.return = E), (Z = C)) : Od(_);
            }
            g = g.sibling;
          }
        e: for (g = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (g === null) {
              g = _;
              try {
                (s = _.stateNode),
                  m
                    ? ((l = s.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((d = _.stateNode),
                      (f = _.memoizedProps.style),
                      (c =
                        f != null && f.hasOwnProperty("display")
                          ? f.display
                          : null),
                      (d.style.display = Lf("display", c)));
              } catch (x) {
                we(e, e.return, x);
              }
            }
          } else if (_.tag === 6) {
            if (g === null)
              try {
                _.stateNode.nodeValue = m ? "" : _.memoizedProps;
              } catch (x) {
                we(e, e.return, x);
              }
          } else if (
            ((_.tag !== 22 && _.tag !== 23) ||
              _.memoizedState === null ||
              _ === e) &&
            _.child !== null
          ) {
            (_.child.return = _), (_ = _.child);
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            g === _ && (g = null), (_ = _.return);
          }
          g === _ && (g = null), (_.sibling.return = _.return), (_ = _.sibling);
        }
      }
      break;
    case 19:
      Pt(t, e), It(e), o & 4 && Cd(e);
      break;
    case 21:
      break;
    default:
      Pt(t, e), It(e);
  }
}
function It(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var i = e.return; i !== null; ) {
          if (Xp(i)) {
            var o = i;
            break e;
          }
          i = i.return;
        }
        throw Error(j(160));
      }
      switch (o.tag) {
        case 5:
          var s = o.stateNode;
          o.flags & 32 && (Er(s, ""), (o.flags &= -33));
          var l = kd(e);
          ql(e, l, s);
          break;
        case 3:
        case 4:
          var c = o.stateNode.containerInfo,
            d = kd(e);
          Vl(e, d, c);
          break;
        default:
          throw Error(j(161));
      }
    } catch (f) {
      we(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function By(e, t, i) {
  (Z = e), tm(e);
}
function tm(e, t, i) {
  for (var o = (e.mode & 1) !== 0; Z !== null; ) {
    var s = Z,
      l = s.child;
    if (s.tag === 22 && o) {
      var c = s.memoizedState !== null || zo;
      if (!c) {
        var d = s.alternate,
          f = (d !== null && d.memoizedState !== null) || be;
        d = zo;
        var m = be;
        if (((zo = c), (be = f) && !m))
          for (Z = s; Z !== null; )
            (c = Z),
              (f = c.child),
              c.tag === 22 && c.memoizedState !== null
                ? Nd(s)
                : f !== null
                ? ((f.return = c), (Z = f))
                : Nd(s);
        for (; l !== null; ) (Z = l), tm(l), (l = l.sibling);
        (Z = s), (zo = d), (be = m);
      }
      Td(e);
    } else
      s.subtreeFlags & 8772 && l !== null ? ((l.return = s), (Z = l)) : Td(e);
  }
}
function Td(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var i = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              be || Ms(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !be)
                if (i === null) o.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? i.memoizedProps
                      : Et(t.type, i.memoizedProps);
                  o.componentDidUpdate(
                    s,
                    i.memoizedState,
                    o.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && hd(t, l, o);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (((i = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      i = t.child.stateNode;
                      break;
                    case 1:
                      i = t.child.stateNode;
                  }
                hd(t, c, i);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (i === null && t.flags & 4) {
                i = d;
                var f = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && i.focus();
                    break;
                  case "img":
                    f.src && (i.src = f.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var g = m.memoizedState;
                  if (g !== null) {
                    var _ = g.dehydrated;
                    _ !== null && Tr(_);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        be || (t.flags & 512 && $l(t));
      } catch (E) {
        we(t, t.return, E);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((i = t.sibling), i !== null)) {
      (i.return = t.return), (Z = i);
      break;
    }
    Z = t.return;
  }
}
function Od(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (Z = i);
      break;
    }
    Z = t.return;
  }
}
function Nd(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var i = t.return;
          try {
            Ms(4, t);
          } catch (f) {
            we(t, i, f);
          }
          break;
        case 1:
          var o = t.stateNode;
          if (typeof o.componentDidMount == "function") {
            var s = t.return;
            try {
              o.componentDidMount();
            } catch (f) {
              we(t, s, f);
            }
          }
          var l = t.return;
          try {
            $l(t);
          } catch (f) {
            we(t, l, f);
          }
          break;
        case 5:
          var c = t.return;
          try {
            $l(t);
          } catch (f) {
            we(t, c, f);
          }
      }
    } catch (f) {
      we(t, t.return, f);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var d = t.sibling;
    if (d !== null) {
      (d.return = t.return), (Z = d);
      break;
    }
    Z = t.return;
  }
}
var Dy = Math.ceil,
  ps = nn.ReactCurrentDispatcher,
  $u = nn.ReactCurrentOwner,
  vt = nn.ReactCurrentBatchConfig,
  ie = 0,
  Ie = null,
  Le = null,
  De = 0,
  rt = 0,
  gi = Tn(0),
  Ne = 0,
  Fr = null,
  qn = 0,
  Rs = 0,
  Vu = 0,
  wr = null,
  Je = null,
  qu = 0,
  Mi = 1 / 0,
  Vt = null,
  ms = !1,
  Kl = null,
  xn = null,
  Mo = !1,
  pn = null,
  _s = 0,
  xr = 0,
  Gl = null,
  Ho = -1,
  Wo = 0;
function Ve() {
  return ie & 6 ? Se() : Ho !== -1 ? Ho : (Ho = Se());
}
function Sn(e) {
  return e.mode & 1
    ? ie & 2 && De !== 0
      ? De & -De
      : xy.transition !== null
      ? (Wo === 0 && (Wo = Df()), Wo)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $f(e.type))),
        e)
    : 1;
}
function Tt(e, t, i, o) {
  if (50 < xr) throw ((xr = 0), (Gl = null), Error(j(185)));
  Hr(e, i, o),
    (!(ie & 2) || e !== Ie) &&
      (e === Ie && (!(ie & 2) && (Rs |= i), Ne === 4 && dn(e, De)),
      tt(e, o),
      i === 1 && ie === 0 && !(t.mode & 1) && ((Mi = Se() + 500), Os && On()));
}
function tt(e, t) {
  var i = e.callbackNode;
  xg(e, t);
  var o = Yo(e, e === Ie ? De : 0);
  if (o === 0)
    i !== null && Fh(i), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = o & -o), e.callbackPriority !== t)) {
    if ((i != null && Fh(i), t === 1))
      e.tag === 0 ? wy(zd.bind(null, e)) : cp(zd.bind(null, e)),
        _y(function () {
          !(ie & 6) && On();
        }),
        (i = null);
    else {
      switch (Ff(o)) {
        case 1:
          i = yu;
          break;
        case 4:
          i = jf;
          break;
        case 16:
          i = Xo;
          break;
        case 536870912:
          i = Bf;
          break;
        default:
          i = Xo;
      }
      i = um(i, nm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = i);
  }
}
function nm(e, t) {
  if (((Ho = -1), (Wo = 0), ie & 6)) throw Error(j(327));
  var i = e.callbackNode;
  if (Li() && e.callbackNode !== i) return null;
  var o = Yo(e, e === Ie ? De : 0);
  if (o === 0) return null;
  if (o & 30 || o & e.expiredLanes || t) t = vs(e, o);
  else {
    t = o;
    var s = ie;
    ie |= 2;
    var l = rm();
    (Ie !== e || De !== t) && ((Vt = null), (Mi = Se() + 500), bn(e, t));
    do
      try {
        Uy();
        break;
      } catch (d) {
        im(e, d);
      }
    while (1);
    Mu(),
      (ps.current = l),
      (ie = s),
      Le !== null ? (t = 0) : ((Ie = null), (De = 0), (t = Ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Sl(e)), s !== 0 && ((o = s), (t = Ql(e, s)))), t === 1)
    )
      throw ((i = Fr), bn(e, 0), dn(e, o), tt(e, Se()), i);
    if (t === 6) dn(e, o);
    else {
      if (
        ((s = e.current.alternate),
        !(o & 30) &&
          !Fy(s) &&
          ((t = vs(e, o)),
          t === 2 && ((l = Sl(e)), l !== 0 && ((o = l), (t = Ql(e, l)))),
          t === 1))
      )
        throw ((i = Fr), bn(e, 0), dn(e, o), tt(e, Se()), i);
      switch (((e.finishedWork = s), (e.finishedLanes = o), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Dn(e, Je, Vt);
          break;
        case 3:
          if (
            (dn(e, o), (o & 130023424) === o && ((t = qu + 500 - Se()), 10 < t))
          ) {
            if (Yo(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & o) !== o)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Nl(Dn.bind(null, e, Je, Vt), t);
            break;
          }
          Dn(e, Je, Vt);
          break;
        case 4:
          if ((dn(e, o), (o & 4194240) === o)) break;
          for (t = e.eventTimes, s = -1; 0 < o; ) {
            var c = 31 - Ct(o);
            (l = 1 << c), (c = t[c]), c > s && (s = c), (o &= ~l);
          }
          if (
            ((o = s),
            (o = Se() - o),
            (o =
              (120 > o
                ? 120
                : 480 > o
                ? 480
                : 1080 > o
                ? 1080
                : 1920 > o
                ? 1920
                : 3e3 > o
                ? 3e3
                : 4320 > o
                ? 4320
                : 1960 * Dy(o / 1960)) - o),
            10 < o)
          ) {
            e.timeoutHandle = Nl(Dn.bind(null, e, Je, Vt), o);
            break;
          }
          Dn(e, Je, Vt);
          break;
        case 5:
          Dn(e, Je, Vt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return tt(e, Se()), e.callbackNode === i ? nm.bind(null, e) : null;
}
function Ql(e, t) {
  var i = wr;
  return (
    e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
    (e = vs(e, t)),
    e !== 2 && ((t = Je), (Je = i), t !== null && Jl(t)),
    e
  );
}
function Jl(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function Fy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var i = t.updateQueue;
      if (i !== null && ((i = i.stores), i !== null))
        for (var o = 0; o < i.length; o++) {
          var s = i[o],
            l = s.getSnapshot;
          s = s.value;
          try {
            if (!Ot(l(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
      (i.return = t), (t = i);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function dn(e, t) {
  for (
    t &= ~Vu,
      t &= ~Rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var i = 31 - Ct(t),
      o = 1 << i;
    (e[i] = -1), (t &= ~o);
  }
}
function zd(e) {
  if (ie & 6) throw Error(j(327));
  Li();
  var t = Yo(e, 0);
  if (!(t & 1)) return tt(e, Se()), null;
  var i = vs(e, t);
  if (e.tag !== 0 && i === 2) {
    var o = Sl(e);
    o !== 0 && ((t = o), (i = Ql(e, o)));
  }
  if (i === 1) throw ((i = Fr), bn(e, 0), dn(e, t), tt(e, Se()), i);
  if (i === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dn(e, Je, Vt),
    tt(e, Se()),
    null
  );
}
function Ku(e, t) {
  var i = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = i), ie === 0 && ((Mi = Se() + 500), Os && On());
  }
}
function Kn(e) {
  pn !== null && pn.tag === 0 && !(ie & 6) && Li();
  var t = ie;
  ie |= 1;
  var i = vt.transition,
    o = se;
  try {
    if (((vt.transition = null), (se = 1), e)) return e();
  } finally {
    (se = o), (vt.transition = i), (ie = t), !(ie & 6) && On();
  }
}
function Gu() {
  (rt = gi.current), fe(gi);
}
function bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var i = e.timeoutHandle;
  if ((i !== -1 && ((e.timeoutHandle = -1), my(i)), Le !== null))
    for (i = Le.return; i !== null; ) {
      var o = i;
      switch ((Ou(o), o.tag)) {
        case 1:
          (o = o.type.childContextTypes), o != null && rs();
          break;
        case 3:
          Ni(), fe(Ye), fe(He), Du();
          break;
        case 5:
          Bu(o);
          break;
        case 4:
          Ni();
          break;
        case 13:
          fe(_e);
          break;
        case 19:
          fe(_e);
          break;
        case 10:
          Ru(o.type._context);
          break;
        case 22:
        case 23:
          Gu();
      }
      i = i.return;
    }
  if (
    ((Ie = e),
    (Le = e = Pn(e.current, null)),
    (De = rt = t),
    (Ne = 0),
    (Fr = null),
    (Vu = Rs = qn = 0),
    (Je = wr = null),
    Zn !== null)
  ) {
    for (t = 0; t < Zn.length; t++)
      if (((i = Zn[t]), (o = i.interleaved), o !== null)) {
        i.interleaved = null;
        var s = o.next,
          l = i.pending;
        if (l !== null) {
          var c = l.next;
          (l.next = s), (o.next = c);
        }
        i.pending = o;
      }
    Zn = null;
  }
  return e;
}
function im(e, t) {
  do {
    var i = Le;
    try {
      if ((Mu(), (Zo.current = fs), ds)) {
        for (var o = ge.memoizedState; o !== null; ) {
          var s = o.queue;
          s !== null && (s.pending = null), (o = o.next);
        }
        ds = !1;
      }
      if (
        ((Vn = 0),
        (Re = Oe = ge = null),
        (gr = !1),
        (jr = 0),
        ($u.current = null),
        i === null || i.return === null)
      ) {
        (Ne = 1), (Fr = t), (Le = null);
        break;
      }
      e: {
        var l = e,
          c = i.return,
          d = i,
          f = t;
        if (
          ((t = De),
          (d.flags |= 32768),
          f !== null && typeof f == "object" && typeof f.then == "function")
        ) {
          var m = f,
            g = d,
            _ = g.tag;
          if (!(g.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
            var E = g.alternate;
            E
              ? ((g.updateQueue = E.updateQueue),
                (g.memoizedState = E.memoizedState),
                (g.lanes = E.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var C = gd(c);
          if (C !== null) {
            (C.flags &= -257),
              yd(C, c, d, l, t),
              C.mode & 1 && vd(l, m, t),
              (t = C),
              (f = m);
            var S = t.updateQueue;
            if (S === null) {
              var x = new Set();
              x.add(f), (t.updateQueue = x);
            } else S.add(f);
            break e;
          } else {
            if (!(t & 1)) {
              vd(l, m, t), Qu();
              break e;
            }
            f = Error(j(426));
          }
        } else if (pe && d.mode & 1) {
          var A = gd(c);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              yd(A, c, d, l, t),
              Nu(zi(f, d));
            break e;
          }
        }
        (l = f = zi(f, d)),
          Ne !== 4 && (Ne = 2),
          wr === null ? (wr = [l]) : wr.push(l),
          (l = c);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var P = Zp(l, f, t);
              cd(l, P);
              break e;
            case 1:
              d = f;
              var y = l.type,
                k = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (k !== null &&
                    typeof k.componentDidCatch == "function" &&
                    (xn === null || !xn.has(k))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var M = Up(l, d, t);
                cd(l, M);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      sm(i);
    } catch (D) {
      (t = D), Le === i && i !== null && (Le = i = i.return);
      continue;
    }
    break;
  } while (1);
}
function rm() {
  var e = ps.current;
  return (ps.current = fs), e === null ? fs : e;
}
function Qu() {
  (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Ie === null || (!(qn & 268435455) && !(Rs & 268435455)) || dn(Ie, De);
}
function vs(e, t) {
  var i = ie;
  ie |= 2;
  var o = rm();
  (Ie !== e || De !== t) && ((Vt = null), bn(e, t));
  do
    try {
      Zy();
      break;
    } catch (s) {
      im(e, s);
    }
  while (1);
  if ((Mu(), (ie = i), (ps.current = o), Le !== null)) throw Error(j(261));
  return (Ie = null), (De = 0), Ne;
}
function Zy() {
  for (; Le !== null; ) om(Le);
}
function Uy() {
  for (; Le !== null && !dg(); ) om(Le);
}
function om(e) {
  var t = lm(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? sm(e) : (Le = t),
    ($u.current = null);
}
function sm(e) {
  var t = e;
  do {
    var i = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((i = Iy(i, t)), i !== null)) {
        (i.flags &= 32767), (Le = i);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ne = 6), (Le = null);
        return;
      }
    } else if (((i = Ry(i, t, rt)), i !== null)) {
      Le = i;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function Dn(e, t, i) {
  var o = se,
    s = vt.transition;
  try {
    (vt.transition = null), (se = 1), by(e, t, i, o);
  } finally {
    (vt.transition = s), (se = o);
  }
  return null;
}
function by(e, t, i, o) {
  do Li();
  while (pn !== null);
  if (ie & 6) throw Error(j(327));
  i = e.finishedWork;
  var s = e.finishedLanes;
  if (i === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = i.lanes | i.childLanes;
  if (
    (Sg(e, l),
    e === Ie && ((Le = Ie = null), (De = 0)),
    (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
      Mo ||
      ((Mo = !0),
      um(Xo, function () {
        return Li(), null;
      })),
    (l = (i.flags & 15990) !== 0),
    i.subtreeFlags & 15990 || l)
  ) {
    (l = vt.transition), (vt.transition = null);
    var c = se;
    se = 1;
    var d = ie;
    (ie |= 4),
      ($u.current = null),
      jy(e, i),
      em(i, e),
      ly(Tl),
      (es = !!Cl),
      (Tl = Cl = null),
      (e.current = i),
      By(i),
      fg(),
      (ie = d),
      (se = c),
      (vt.transition = l);
  } else e.current = i;
  if (
    (Mo && ((Mo = !1), (pn = e), (_s = s)),
    (l = e.pendingLanes),
    l === 0 && (xn = null),
    _g(i.stateNode),
    tt(e, Se()),
    t !== null)
  )
    for (o = e.onRecoverableError, i = 0; i < t.length; i++)
      (s = t[i]), o(s.value, { componentStack: s.stack, digest: s.digest });
  if (ms) throw ((ms = !1), (e = Kl), (Kl = null), e);
  return (
    _s & 1 && e.tag !== 0 && Li(),
    (l = e.pendingLanes),
    l & 1 ? (e === Gl ? xr++ : ((xr = 0), (Gl = e))) : (xr = 0),
    On(),
    null
  );
}
function Li() {
  if (pn !== null) {
    var e = Ff(_s),
      t = vt.transition,
      i = se;
    try {
      if (((vt.transition = null), (se = 16 > e ? 16 : e), pn === null))
        var o = !1;
      else {
        if (((e = pn), (pn = null), (_s = 0), ie & 6)) throw Error(j(331));
        var s = ie;
        for (ie |= 4, Z = e.current; Z !== null; ) {
          var l = Z,
            c = l.child;
          if (Z.flags & 16) {
            var d = l.deletions;
            if (d !== null) {
              for (var f = 0; f < d.length; f++) {
                var m = d[f];
                for (Z = m; Z !== null; ) {
                  var g = Z;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, g, l);
                  }
                  var _ = g.child;
                  if (_ !== null) (_.return = g), (Z = _);
                  else
                    for (; Z !== null; ) {
                      g = Z;
                      var E = g.sibling,
                        C = g.return;
                      if ((Jp(g), g === m)) {
                        Z = null;
                        break;
                      }
                      if (E !== null) {
                        (E.return = C), (Z = E);
                        break;
                      }
                      Z = C;
                    }
                }
              }
              var S = l.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var A = x.sibling;
                    (x.sibling = null), (x = A);
                  } while (x !== null);
                }
              }
              Z = l;
            }
          }
          if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (Z = c);
          else
            e: for (; Z !== null; ) {
              if (((l = Z), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yr(9, l, l.return);
                }
              var P = l.sibling;
              if (P !== null) {
                (P.return = l.return), (Z = P);
                break e;
              }
              Z = l.return;
            }
        }
        var y = e.current;
        for (Z = y; Z !== null; ) {
          c = Z;
          var k = c.child;
          if (c.subtreeFlags & 2064 && k !== null) (k.return = c), (Z = k);
          else
            e: for (c = y; Z !== null; ) {
              if (((d = Z), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ms(9, d);
                  }
                } catch (D) {
                  we(d, d.return, D);
                }
              if (d === c) {
                Z = null;
                break e;
              }
              var M = d.sibling;
              if (M !== null) {
                (M.return = d.return), (Z = M);
                break e;
              }
              Z = d.return;
            }
        }
        if (
          ((ie = s), On(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        )
          try {
            Dt.onPostCommitFiberRoot(Es, e);
          } catch {}
        o = !0;
      }
      return o;
    } finally {
      (se = i), (vt.transition = t);
    }
  }
  return !1;
}
function Md(e, t, i) {
  (t = zi(i, t)),
    (t = Zp(e, t, 1)),
    (e = wn(e, t, 1)),
    (t = Ve()),
    e !== null && (Hr(e, 1, t), tt(e, t));
}
function we(e, t, i) {
  if (e.tag === 3) Md(e, e, i);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Md(t, e, i);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof o.componentDidCatch == "function" &&
            (xn === null || !xn.has(o)))
        ) {
          (e = zi(i, e)),
            (e = Up(t, e, 1)),
            (t = wn(t, e, 1)),
            (e = Ve()),
            t !== null && (Hr(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hy(e, t, i) {
  var o = e.pingCache;
  o !== null && o.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & i),
    Ie === e &&
      (De & i) === i &&
      (Ne === 4 || (Ne === 3 && (De & 130023424) === De && 500 > Se() - qu)
        ? bn(e, 0)
        : (Vu |= i)),
    tt(e, t);
}
function am(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = So), (So <<= 1), !(So & 130023424) && (So = 4194304))
      : (t = 1));
  var i = Ve();
  (e = en(e, t)), e !== null && (Hr(e, t, i), tt(e, i));
}
function Wy(e) {
  var t = e.memoizedState,
    i = 0;
  t !== null && (i = t.retryLane), am(e, i);
}
function $y(e, t) {
  var i = 0;
  switch (e.tag) {
    case 13:
      var o = e.stateNode,
        s = e.memoizedState;
      s !== null && (i = s.retryLane);
      break;
    case 19:
      o = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  o !== null && o.delete(t), am(e, i);
}
var lm;
lm = function (e, t, i) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Xe = !0;
    else {
      if (!(e.lanes & i) && !(t.flags & 128)) return (Xe = !1), My(e, t, i);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), pe && t.flags & 1048576 && hp(t, as, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var o = t.type;
      bo(e, t), (e = t.pendingProps);
      var s = Ci(t, He.current);
      Ei(t, i), (s = Zu(null, t, o, e, s, i));
      var l = Uu();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(o) ? ((l = !0), os(t)) : (l = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Au(t),
            (s.updater = Ns),
            (t.stateNode = s),
            (s._reactInternals = t),
            Bl(t, o, e, i),
            (t = Zl(null, t, o, !0, l, i)))
          : ((t.tag = 0), pe && l && Tu(t), $e(null, t, s, i), (t = t.child)),
        t
      );
    case 16:
      o = t.elementType;
      e: {
        switch (
          (bo(e, t),
          (e = t.pendingProps),
          (s = o._init),
          (o = s(o._payload)),
          (t.type = o),
          (s = t.tag = qy(o)),
          (e = Et(o, e)),
          s)
        ) {
          case 0:
            t = Fl(null, t, o, e, i);
            break e;
          case 1:
            t = Sd(null, t, o, e, i);
            break e;
          case 11:
            t = wd(null, t, o, e, i);
            break e;
          case 14:
            t = xd(null, t, o, Et(o.type, e), i);
            break e;
        }
        throw Error(j(306, o, ""));
      }
      return t;
    case 0:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Et(o, s)),
        Fl(e, t, o, s, i)
      );
    case 1:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Et(o, s)),
        Sd(e, t, o, s, i)
      );
    case 3:
      e: {
        if (($p(t), e === null)) throw Error(j(387));
        (o = t.pendingProps),
          (l = t.memoizedState),
          (s = l.element),
          mp(e, t),
          cs(t, o, null, i);
        var c = t.memoizedState;
        if (((o = c.element), l.isDehydrated))
          if (
            ((l = {
              element: o,
              isDehydrated: !1,
              cache: c.cache,
              pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
              transitions: c.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (s = zi(Error(j(423)), t)), (t = Pd(e, t, o, i, s));
            break e;
          } else if (o !== s) {
            (s = zi(Error(j(424)), t)), (t = Pd(e, t, o, i, s));
            break e;
          } else
            for (
              ot = yn(t.stateNode.containerInfo.firstChild),
                st = t,
                pe = !0,
                kt = null,
                i = yp(t, null, o, i),
                t.child = i;
              i;

            )
              (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
        else {
          if ((Ti(), o === s)) {
            t = tn(e, t, i);
            break e;
          }
          $e(e, t, o, i);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wp(t),
        e === null && Il(t),
        (o = t.type),
        (s = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (c = s.children),
        Ol(o, s) ? (c = null) : l !== null && Ol(o, l) && (t.flags |= 32),
        Wp(e, t),
        $e(e, t, c, i),
        t.child
      );
    case 6:
      return e === null && Il(t), null;
    case 13:
      return Vp(e, t, i);
    case 4:
      return (
        ju(t, t.stateNode.containerInfo),
        (o = t.pendingProps),
        e === null ? (t.child = Oi(t, null, o, i)) : $e(e, t, o, i),
        t.child
      );
    case 11:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Et(o, s)),
        wd(e, t, o, s, i)
      );
    case 7:
      return $e(e, t, t.pendingProps, i), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, i), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, i), t.child;
    case 10:
      e: {
        if (
          ((o = t.type._context),
          (s = t.pendingProps),
          (l = t.memoizedProps),
          (c = s.value),
          ce(ls, o._currentValue),
          (o._currentValue = c),
          l !== null)
        )
          if (Ot(l.value, c)) {
            if (l.children === s.children && !Ye.current) {
              t = tn(e, t, i);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var d = l.dependencies;
              if (d !== null) {
                c = l.child;
                for (var f = d.firstContext; f !== null; ) {
                  if (f.context === o) {
                    if (l.tag === 1) {
                      (f = Qt(-1, i & -i)), (f.tag = 2);
                      var m = l.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var g = m.pending;
                        g === null
                          ? (f.next = f)
                          : ((f.next = g.next), (g.next = f)),
                          (m.pending = f);
                      }
                    }
                    (l.lanes |= i),
                      (f = l.alternate),
                      f !== null && (f.lanes |= i),
                      Al(l.return, i, t),
                      (d.lanes |= i);
                    break;
                  }
                  f = f.next;
                }
              } else if (l.tag === 10) c = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((c = l.return), c === null)) throw Error(j(341));
                (c.lanes |= i),
                  (d = c.alternate),
                  d !== null && (d.lanes |= i),
                  Al(c, i, t),
                  (c = l.sibling);
              } else c = l.child;
              if (c !== null) c.return = l;
              else
                for (c = l; c !== null; ) {
                  if (c === t) {
                    c = null;
                    break;
                  }
                  if (((l = c.sibling), l !== null)) {
                    (l.return = c.return), (c = l);
                    break;
                  }
                  c = c.return;
                }
              l = c;
            }
        $e(e, t, s.children, i), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (o = t.pendingProps.children),
        Ei(t, i),
        (s = yt(s)),
        (o = o(s)),
        (t.flags |= 1),
        $e(e, t, o, i),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (s = Et(o, t.pendingProps)),
        (s = Et(o.type, s)),
        xd(e, t, o, s, i)
      );
    case 15:
      return bp(e, t, t.type, t.pendingProps, i);
    case 17:
      return (
        (o = t.type),
        (s = t.pendingProps),
        (s = t.elementType === o ? s : Et(o, s)),
        bo(e, t),
        (t.tag = 1),
        et(o) ? ((e = !0), os(t)) : (e = !1),
        Ei(t, i),
        vp(t, o, s),
        Bl(t, o, s, i),
        Zl(null, t, o, !0, e, i)
      );
    case 19:
      return qp(e, t, i);
    case 22:
      return Hp(e, t, i);
  }
  throw Error(j(156, t.tag));
};
function um(e, t) {
  return Af(e, t);
}
function Vy(e, t, i, o) {
  (this.tag = e),
    (this.key = i),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = o),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _t(e, t, i, o) {
  return new Vy(e, t, i, o);
}
function Ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qy(e) {
  if (typeof e == "function") return Ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _u)) return 11;
    if (e === vu) return 14;
  }
  return 2;
}
function Pn(e, t) {
  var i = e.alternate;
  return (
    i === null
      ? ((i = _t(e.tag, t, e.key, e.mode)),
        (i.elementType = e.elementType),
        (i.type = e.type),
        (i.stateNode = e.stateNode),
        (i.alternate = e),
        (e.alternate = i))
      : ((i.pendingProps = t),
        (i.type = e.type),
        (i.flags = 0),
        (i.subtreeFlags = 0),
        (i.deletions = null)),
    (i.flags = e.flags & 14680064),
    (i.childLanes = e.childLanes),
    (i.lanes = e.lanes),
    (i.child = e.child),
    (i.memoizedProps = e.memoizedProps),
    (i.memoizedState = e.memoizedState),
    (i.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (i.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (i.sibling = e.sibling),
    (i.index = e.index),
    (i.ref = e.ref),
    i
  );
}
function $o(e, t, i, o, s, l) {
  var c = 2;
  if (((o = e), typeof e == "function")) Ju(e) && (c = 1);
  else if (typeof e == "string") c = 5;
  else
    e: switch (e) {
      case li:
        return Hn(i.children, s, l, t);
      case mu:
        (c = 8), (s |= 8);
        break;
      case al:
        return (
          (e = _t(12, i, t, s | 2)), (e.elementType = al), (e.lanes = l), e
        );
      case ll:
        return (e = _t(13, i, t, s)), (e.elementType = ll), (e.lanes = l), e;
      case ul:
        return (e = _t(19, i, t, s)), (e.elementType = ul), (e.lanes = l), e;
      case gf:
        return Is(i, s, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case _f:
              c = 10;
              break e;
            case vf:
              c = 9;
              break e;
            case _u:
              c = 11;
              break e;
            case vu:
              c = 14;
              break e;
            case un:
              (c = 16), (o = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _t(c, i, t, s)), (t.elementType = e), (t.type = o), (t.lanes = l), t
  );
}
function Hn(e, t, i, o) {
  return (e = _t(7, e, o, t)), (e.lanes = i), e;
}
function Is(e, t, i, o) {
  return (
    (e = _t(22, e, o, t)),
    (e.elementType = gf),
    (e.lanes = i),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xa(e, t, i) {
  return (e = _t(6, e, null, t)), (e.lanes = i), e;
}
function Ya(e, t, i) {
  return (
    (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = i),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ky(e, t, i, o, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ra(0)),
    (this.expirationTimes = Ra(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ra(0)),
    (this.identifierPrefix = o),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Xu(e, t, i, o, s, l, c, d, f) {
  return (
    (e = new Ky(e, t, i, d, f)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = _t(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Au(l),
    e
  );
}
function Gy(e, t, i) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ai,
    key: o == null ? null : "" + o,
    children: e,
    containerInfo: t,
    implementation: i,
  };
}
function cm(e) {
  if (!e) return kn;
  e = e._reactInternals;
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var i = e.type;
    if (et(i)) return up(e, i, t);
  }
  return t;
}
function hm(e, t, i, o, s, l, c, d, f) {
  return (
    (e = Xu(i, o, !0, e, s, l, c, d, f)),
    (e.context = cm(null)),
    (i = e.current),
    (o = Ve()),
    (s = Sn(i)),
    (l = Qt(o, s)),
    (l.callback = t ?? null),
    wn(i, l, s),
    (e.current.lanes = s),
    Hr(e, s, o),
    tt(e, o),
    e
  );
}
function As(e, t, i, o) {
  var s = t.current,
    l = Ve(),
    c = Sn(s);
  return (
    (i = cm(i)),
    t.context === null ? (t.context = i) : (t.pendingContext = i),
    (t = Qt(l, c)),
    (t.payload = { element: e }),
    (o = o === void 0 ? null : o),
    o !== null && (t.callback = o),
    (e = wn(s, t, c)),
    e !== null && (Tt(e, s, c, l), Fo(e, s, c)),
    c
  );
}
function gs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < t ? i : t;
  }
}
function Yu(e, t) {
  Rd(e, t), (e = e.alternate) && Rd(e, t);
}
function Qy() {
  return null;
}
var dm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ec(e) {
  this._internalRoot = e;
}
js.prototype.render = ec.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  As(e, t, null, null);
};
js.prototype.unmount = ec.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kn(function () {
      As(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function js(e) {
  this._internalRoot = e;
}
js.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bf();
    e = { blockedOn: null, target: e, priority: t };
    for (var i = 0; i < hn.length && t !== 0 && t < hn[i].priority; i++);
    hn.splice(i, 0, e), i === 0 && Wf(e);
  }
};
function tc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Id() {}
function Jy(e, t, i, o, s) {
  if (s) {
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var m = gs(c);
        l.call(m);
      };
    }
    var c = hm(t, o, e, 0, null, !1, !1, "", Id);
    return (
      (e._reactRootContainer = c),
      (e[Yt] = c.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      Kn(),
      c
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof o == "function") {
    var d = o;
    o = function () {
      var m = gs(f);
      d.call(m);
    };
  }
  var f = Xu(e, 0, !1, null, null, !1, !1, "", Id);
  return (
    (e._reactRootContainer = f),
    (e[Yt] = f.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    Kn(function () {
      As(t, f, i, o);
    }),
    f
  );
}
function Ds(e, t, i, o, s) {
  var l = i._reactRootContainer;
  if (l) {
    var c = l;
    if (typeof s == "function") {
      var d = s;
      s = function () {
        var f = gs(c);
        d.call(f);
      };
    }
    As(t, c, e, s);
  } else c = Jy(i, t, e, s, o);
  return gs(c);
}
Zf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var i = hr(t.pendingLanes);
        i !== 0 &&
          (wu(t, i | 1), tt(t, Se()), !(ie & 6) && ((Mi = Se() + 500), On()));
      }
      break;
    case 13:
      Kn(function () {
        var o = en(e, 1);
        if (o !== null) {
          var s = Ve();
          Tt(o, e, 1, s);
        }
      }),
        Yu(e, 1);
  }
};
xu = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var i = Ve();
      Tt(t, e, 134217728, i);
    }
    Yu(e, 134217728);
  }
};
Uf = function (e) {
  if (e.tag === 13) {
    var t = Sn(e),
      i = en(e, t);
    if (i !== null) {
      var o = Ve();
      Tt(i, e, t, o);
    }
    Yu(e, t);
  }
};
bf = function () {
  return se;
};
Hf = function (e, t) {
  var i = se;
  try {
    return (se = e), t();
  } finally {
    se = i;
  }
};
yl = function (e, t, i) {
  switch (t) {
    case "input":
      if ((dl(e, i), (t = i.name), i.type === "radio" && t != null)) {
        for (i = e; i.parentNode; ) i = i.parentNode;
        for (
          i = i.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < i.length;
          t++
        ) {
          var o = i[t];
          if (o !== e && o.form === e.form) {
            var s = Ts(o);
            if (!s) throw Error(j(90));
            wf(o), dl(o, s);
          }
        }
      }
      break;
    case "textarea":
      Sf(e, i);
      break;
    case "select":
      (t = i.value), t != null && wi(e, !!i.multiple, t, !1);
  }
};
Of = Ku;
Nf = Kn;
var Xy = { usingClientEntryPoint: !1, Events: [$r, di, Ts, Cf, Tf, Ku] },
  ar = {
    findFiberByHostInstance: Fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Yy = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || Qy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber)
    try {
      (Es = Ro.inject(Yy)), (Dt = Ro);
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xy;
lt.createPortal = function (e, t) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tc(t)) throw Error(j(200));
  return Gy(e, t, null, i);
};
lt.createRoot = function (e, t) {
  if (!tc(e)) throw Error(j(299));
  var i = !1,
    o = "",
    s = dm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (i = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Xu(e, 1, !1, null, null, i, !1, o, s)),
    (e[Yt] = t.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    new ec(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = Rf(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
  return Kn(e);
};
lt.hydrate = function (e, t, i) {
  if (!Bs(t)) throw Error(j(200));
  return Ds(null, e, t, !0, i);
};
lt.hydrateRoot = function (e, t, i) {
  if (!tc(e)) throw Error(j(405));
  var o = (i != null && i.hydratedSources) || null,
    s = !1,
    l = "",
    c = dm;
  if (
    (i != null &&
      (i.unstable_strictMode === !0 && (s = !0),
      i.identifierPrefix !== void 0 && (l = i.identifierPrefix),
      i.onRecoverableError !== void 0 && (c = i.onRecoverableError)),
    (t = hm(t, null, e, 1, i ?? null, s, !1, l, c)),
    (e[Yt] = t.current),
    zr(e),
    o)
  )
    for (e = 0; e < o.length; e++)
      (i = o[e]),
        (s = i._getVersion),
        (s = s(i._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [i, s])
          : t.mutableSourceEagerHydrationData.push(i, s);
  return new js(t);
};
lt.render = function (e, t, i) {
  if (!Bs(t)) throw Error(j(200));
  return Ds(null, e, t, !1, i);
};
lt.unmountComponentAtNode = function (e) {
  if (!Bs(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Kn(function () {
        Ds(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = Ku;
lt.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
  if (!Bs(i)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Ds(e, t, i, !1, o);
};
lt.version = "18.2.0-next-9e3b772b8-20220608";
function fm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm);
    } catch (e) {
      console.error(e);
    }
}
fm(), (hf.exports = lt);
var pm = hf.exports,
  Ad = pm;
(ol.createRoot = Ad.createRoot), (ol.hydrateRoot = Ad.hydrateRoot);
/**
 * @remix-run/router v1.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zr() {
  return (
    (Zr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    Zr.apply(this, arguments)
  );
}
var mn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(mn || (mn = {}));
const jd = "popstate";
function e0(e) {
  e === void 0 && (e = {});
  function t(o, s) {
    let { pathname: l, search: c, hash: d } = o.location;
    return Xl(
      "",
      { pathname: l, search: c, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function i(o, s) {
    return typeof s == "string" ? s : ys(s);
  }
  return n0(t, i, null, e);
}
function ke(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function nc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function t0() {
  return Math.random().toString(36).substr(2, 8);
}
function Bd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Xl(e, t, i, o) {
  return (
    i === void 0 && (i = null),
    Zr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Bi(t) : t,
      { state: i, key: (t && t.key) || o || t0() }
    )
  );
}
function ys(e) {
  let { pathname: t = "/", search: i = "", hash: o = "" } = e;
  return (
    i && i !== "?" && (t += i.charAt(0) === "?" ? i : "?" + i),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
  );
}
function Bi(e) {
  let t = {};
  if (e) {
    let i = e.indexOf("#");
    i >= 0 && ((t.hash = e.substr(i)), (e = e.substr(0, i)));
    let o = e.indexOf("?");
    o >= 0 && ((t.search = e.substr(o)), (e = e.substr(0, o))),
      e && (t.pathname = e);
  }
  return t;
}
function n0(e, t, i, o) {
  o === void 0 && (o = {});
  let { window: s = document.defaultView, v5Compat: l = !1 } = o,
    c = s.history,
    d = mn.Pop,
    f = null,
    m = g();
  m == null && ((m = 0), c.replaceState(Zr({}, c.state, { idx: m }), ""));
  function g() {
    return (c.state || { idx: null }).idx;
  }
  function _() {
    d = mn.Pop;
    let A = g(),
      P = A == null ? null : A - m;
    (m = A), f && f({ action: d, location: x.location, delta: P });
  }
  function E(A, P) {
    d = mn.Push;
    let y = Xl(x.location, A, P);
    i && i(y, A), (m = g() + 1);
    let k = Bd(y, m),
      M = x.createHref(y);
    try {
      c.pushState(k, "", M);
    } catch (D) {
      if (D instanceof DOMException && D.name === "DataCloneError") throw D;
      s.location.assign(M);
    }
    l && f && f({ action: d, location: x.location, delta: 1 });
  }
  function C(A, P) {
    d = mn.Replace;
    let y = Xl(x.location, A, P);
    i && i(y, A), (m = g());
    let k = Bd(y, m),
      M = x.createHref(y);
    c.replaceState(k, "", M),
      l && f && f({ action: d, location: x.location, delta: 0 });
  }
  function S(A) {
    let P = s.location.origin !== "null" ? s.location.origin : s.location.href,
      y = typeof A == "string" ? A : ys(A);
    return (
      ke(
        P,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, P)
    );
  }
  let x = {
    get action() {
      return d;
    },
    get location() {
      return e(s, c);
    },
    listen(A) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(jd, _),
        (f = A),
        () => {
          s.removeEventListener(jd, _), (f = null);
        }
      );
    },
    createHref(A) {
      return t(s, A);
    },
    createURL: S,
    encodeLocation(A) {
      let P = S(A);
      return { pathname: P.pathname, search: P.search, hash: P.hash };
    },
    push: E,
    replace: C,
    go(A) {
      return c.go(A);
    },
  };
  return x;
}
var Dd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Dd || (Dd = {}));
function i0(e, t, i) {
  i === void 0 && (i = "/");
  let o = typeof t == "string" ? Bi(t) : t,
    s = ic(o.pathname || "/", i);
  if (s == null) return null;
  let l = mm(e);
  r0(l);
  let c = null;
  for (let d = 0; c == null && d < l.length; ++d) c = f0(l[d], _0(s));
  return c;
}
function mm(e, t, i, o) {
  t === void 0 && (t = []), i === void 0 && (i = []), o === void 0 && (o = "");
  let s = (l, c, d) => {
    let f = {
      relativePath: d === void 0 ? l.path || "" : d,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: c,
      route: l,
    };
    f.relativePath.startsWith("/") &&
      (ke(
        f.relativePath.startsWith(o),
        'Absolute route path "' +
          f.relativePath +
          '" nested under path ' +
          ('"' + o + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (f.relativePath = f.relativePath.slice(o.length)));
    let m = En([o, f.relativePath]),
      g = i.concat(f);
    l.children &&
      l.children.length > 0 &&
      (ke(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      mm(l.children, t, g, m)),
      !(l.path == null && !l.index) &&
        t.push({ path: m, score: h0(m, l.index), routesMeta: g });
  };
  return (
    e.forEach((l, c) => {
      var d;
      if (l.path === "" || !((d = l.path) != null && d.includes("?"))) s(l, c);
      else for (let f of _m(l.path)) s(l, c, f);
    }),
    t
  );
}
function _m(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [i, ...o] = t,
    s = i.endsWith("?"),
    l = i.replace(/\?$/, "");
  if (o.length === 0) return s ? [l, ""] : [l];
  let c = _m(o.join("/")),
    d = [];
  return (
    d.push(...c.map((f) => (f === "" ? l : [l, f].join("/")))),
    s && d.push(...c),
    d.map((f) => (e.startsWith("/") && f === "" ? "/" : f))
  );
}
function r0(e) {
  e.sort((t, i) =>
    t.score !== i.score
      ? i.score - t.score
      : d0(
          t.routesMeta.map((o) => o.childrenIndex),
          i.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
const o0 = /^:\w+$/,
  s0 = 3,
  a0 = 2,
  l0 = 1,
  u0 = 10,
  c0 = -2,
  Fd = (e) => e === "*";
function h0(e, t) {
  let i = e.split("/"),
    o = i.length;
  return (
    i.some(Fd) && (o += c0),
    t && (o += a0),
    i
      .filter((s) => !Fd(s))
      .reduce((s, l) => s + (o0.test(l) ? s0 : l === "" ? l0 : u0), o)
  );
}
function d0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((o, s) => o === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function f0(e, t) {
  let { routesMeta: i } = e,
    o = {},
    s = "/",
    l = [];
  for (let c = 0; c < i.length; ++c) {
    let d = i[c],
      f = c === i.length - 1,
      m = s === "/" ? t : t.slice(s.length) || "/",
      g = p0(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: f },
        m
      );
    if (!g) return null;
    Object.assign(o, g.params);
    let _ = d.route;
    l.push({
      params: o,
      pathname: En([s, g.pathname]),
      pathnameBase: w0(En([s, g.pathnameBase])),
      route: _,
    }),
      g.pathnameBase !== "/" && (s = En([s, g.pathnameBase]));
  }
  return l;
}
function p0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [i, o] = m0(e.path, e.caseSensitive, e.end),
    s = t.match(i);
  if (!s) return null;
  let l = s[0],
    c = l.replace(/(.)\/+$/, "$1"),
    d = s.slice(1);
  return {
    params: o.reduce((m, g, _) => {
      let { paramName: E, isOptional: C } = g;
      if (E === "*") {
        let x = d[_] || "";
        c = l.slice(0, l.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const S = d[_];
      return C && !S ? (m[E] = void 0) : (m[E] = v0(S || "", E)), m;
    }, {}),
    pathname: l,
    pathnameBase: c,
    pattern: e,
  };
}
function m0(e, t, i) {
  t === void 0 && (t = !1),
    i === void 0 && (i = !0),
    nc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let o = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (c, d, f) => (
            o.push({ paramName: d, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), o]
  );
}
function _0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      nc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function v0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (i) {
    return (
      nc(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + i + ").")
      ),
      e
    );
  }
}
function ic(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let i = t.endsWith("/") ? t.length - 1 : t.length,
    o = e.charAt(i);
  return o && o !== "/" ? null : e.slice(i) || "/";
}
function g0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: i,
    search: o = "",
    hash: s = "",
  } = typeof e == "string" ? Bi(e) : e;
  return {
    pathname: i ? (i.startsWith("/") ? i : y0(i, t)) : t,
    search: x0(o),
    hash: S0(s),
  };
}
function y0(e, t) {
  let i = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function el(e, t, i, o) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(o) +
      "].  Please separate it out to the ") +
    ("`to." + i + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function vm(e) {
  return e.filter(
    (t, i) => i === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function gm(e, t, i, o) {
  o === void 0 && (o = !1);
  let s;
  typeof e == "string"
    ? (s = Bi(e))
    : ((s = Zr({}, e)),
      ke(
        !s.pathname || !s.pathname.includes("?"),
        el("?", "pathname", "search", s)
      ),
      ke(
        !s.pathname || !s.pathname.includes("#"),
        el("#", "pathname", "hash", s)
      ),
      ke(!s.search || !s.search.includes("#"), el("#", "search", "hash", s)));
  let l = e === "" || s.pathname === "",
    c = l ? "/" : s.pathname,
    d;
  if (c == null) d = i;
  else if (o) {
    let _ = t[t.length - 1].replace(/^\//, "").split("/");
    if (c.startsWith("..")) {
      let E = c.split("/");
      for (; E[0] === ".."; ) E.shift(), _.pop();
      s.pathname = E.join("/");
    }
    d = "/" + _.join("/");
  } else {
    let _ = t.length - 1;
    if (c.startsWith("..")) {
      let E = c.split("/");
      for (; E[0] === ".."; ) E.shift(), (_ -= 1);
      s.pathname = E.join("/");
    }
    d = _ >= 0 ? t[_] : "/";
  }
  let f = g0(s, d),
    m = c && c !== "/" && c.endsWith("/"),
    g = (l || c === ".") && i.endsWith("/");
  return !f.pathname.endsWith("/") && (m || g) && (f.pathname += "/"), f;
}
const En = (e) => e.join("/").replace(/\/\/+/g, "/"),
  w0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  x0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  S0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function P0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ym = ["post", "put", "patch", "delete"];
new Set(ym);
const E0 = ["get", ...ym];
new Set(E0);
/**
 * React Router v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ws() {
  return (
    (ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    ws.apply(this, arguments)
  );
}
const rc = N.createContext(null),
  L0 = N.createContext(null),
  Di = N.createContext(null),
  Fs = N.createContext(null),
  Nn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  wm = N.createContext(null);
function k0(e, t) {
  let { relative: i } = t === void 0 ? {} : t;
  qr() || ke(!1);
  let { basename: o, navigator: s } = N.useContext(Di),
    { hash: l, pathname: c, search: d } = Sm(e, { relative: i }),
    f = c;
  return (
    o !== "/" && (f = c === "/" ? o : En([o, c])),
    s.createHref({ pathname: f, search: d, hash: l })
  );
}
function qr() {
  return N.useContext(Fs) != null;
}
function Zs() {
  return qr() || ke(!1), N.useContext(Fs).location;
}
function xm(e) {
  N.useContext(Di).static || N.useLayoutEffect(e);
}
function Kr() {
  let { isDataRoute: e } = N.useContext(Nn);
  return e ? F0() : C0();
}
function C0() {
  qr() || ke(!1);
  let e = N.useContext(rc),
    { basename: t, navigator: i } = N.useContext(Di),
    { matches: o } = N.useContext(Nn),
    { pathname: s } = Zs(),
    l = JSON.stringify(vm(o).map((f) => f.pathnameBase)),
    c = N.useRef(!1);
  return (
    xm(() => {
      c.current = !0;
    }),
    N.useCallback(
      function (f, m) {
        if ((m === void 0 && (m = {}), !c.current)) return;
        if (typeof f == "number") {
          i.go(f);
          return;
        }
        let g = gm(f, JSON.parse(l), s, m.relative === "path");
        e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : En([t, g.pathname])),
          (m.replace ? i.replace : i.push)(g, m.state, m);
      },
      [t, i, l, s, e]
    )
  );
}
function oc() {
  let { matches: e } = N.useContext(Nn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Sm(e, t) {
  let { relative: i } = t === void 0 ? {} : t,
    { matches: o } = N.useContext(Nn),
    { pathname: s } = Zs(),
    l = JSON.stringify(
      vm(o).map((c, d) => (d === o.length - 1 ? c.pathname : c.pathnameBase))
    );
  return N.useMemo(() => gm(e, JSON.parse(l), s, i === "path"), [e, l, s, i]);
}
function T0(e, t) {
  return O0(e, t);
}
function O0(e, t, i) {
  qr() || ke(!1);
  let { navigator: o } = N.useContext(Di),
    { matches: s } = N.useContext(Nn),
    l = s[s.length - 1],
    c = l ? l.params : {};
  l && l.pathname;
  let d = l ? l.pathnameBase : "/";
  l && l.route;
  let f = Zs(),
    m;
  if (t) {
    var g;
    let x = typeof t == "string" ? Bi(t) : t;
    d === "/" || ((g = x.pathname) != null && g.startsWith(d)) || ke(!1),
      (m = x);
  } else m = f;
  let _ = m.pathname || "/",
    E = d === "/" ? _ : _.slice(d.length) || "/",
    C = i0(e, { pathname: E }),
    S = I0(
      C &&
        C.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, c, x.params),
            pathname: En([
              d,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? d
                : En([
                    d,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      s,
      i
    );
  return t && S
    ? N.createElement(
        Fs.Provider,
        {
          value: {
            location: ws(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: mn.Pop,
          },
        },
        S
      )
    : S;
}
function N0() {
  let e = D0(),
    t = P0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    i = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    i ? N.createElement("pre", { style: s }, i) : null,
    l
  );
}
const z0 = N.createElement(N0, null);
class M0 extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, i) {
    return i.location !== t.location ||
      (i.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || i.error,
          location: i.location,
          revalidation: t.revalidation || i.revalidation,
        };
  }
  componentDidCatch(t, i) {
    console.error(
      "React Router caught the following error during render",
      t,
      i
    );
  }
  render() {
    return this.state.error
      ? N.createElement(
          Nn.Provider,
          { value: this.props.routeContext },
          N.createElement(wm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function R0(e) {
  let { routeContext: t, match: i, children: o } = e,
    s = N.useContext(rc);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    N.createElement(Nn.Provider, { value: t }, o)
  );
}
function I0(e, t, i) {
  var o;
  if ((t === void 0 && (t = []), i === void 0 && (i = null), e == null)) {
    var s;
    if ((s = i) != null && s.errors) e = i.matches;
    else return null;
  }
  let l = e,
    c = (o = i) == null ? void 0 : o.errors;
  if (c != null) {
    let d = l.findIndex(
      (f) => f.route.id && (c == null ? void 0 : c[f.route.id])
    );
    d >= 0 || ke(!1), (l = l.slice(0, Math.min(l.length, d + 1)));
  }
  return l.reduceRight((d, f, m) => {
    let g = f.route.id ? (c == null ? void 0 : c[f.route.id]) : null,
      _ = null;
    i && (_ = f.route.errorElement || z0);
    let E = t.concat(l.slice(0, m + 1)),
      C = () => {
        let S;
        return (
          g
            ? (S = _)
            : f.route.Component
            ? (S = N.createElement(f.route.Component, null))
            : f.route.element
            ? (S = f.route.element)
            : (S = d),
          N.createElement(R0, {
            match: f,
            routeContext: { outlet: d, matches: E, isDataRoute: i != null },
            children: S,
          })
        );
      };
    return i && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? N.createElement(M0, {
          location: i.location,
          revalidation: i.revalidation,
          component: _,
          error: g,
          children: C(),
          routeContext: { outlet: null, matches: E, isDataRoute: !0 },
        })
      : C();
  }, null);
}
var Pm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Pm || {}),
  xs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(xs || {});
function A0(e) {
  let t = N.useContext(rc);
  return t || ke(!1), t;
}
function j0(e) {
  let t = N.useContext(L0);
  return t || ke(!1), t;
}
function B0(e) {
  let t = N.useContext(Nn);
  return t || ke(!1), t;
}
function Em(e) {
  let t = B0(),
    i = t.matches[t.matches.length - 1];
  return i.route.id || ke(!1), i.route.id;
}
function D0() {
  var e;
  let t = N.useContext(wm),
    i = j0(xs.UseRouteError),
    o = Em(xs.UseRouteError);
  return t || ((e = i.errors) == null ? void 0 : e[o]);
}
function F0() {
  let { router: e } = A0(Pm.UseNavigateStable),
    t = Em(xs.UseNavigateStable),
    i = N.useRef(!1);
  return (
    xm(() => {
      i.current = !0;
    }),
    N.useCallback(
      function (s, l) {
        l === void 0 && (l = {}),
          i.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, ws({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
function nt(e) {
  ke(!1);
}
function Z0(e) {
  let {
    basename: t = "/",
    children: i = null,
    location: o,
    navigationType: s = mn.Pop,
    navigator: l,
    static: c = !1,
  } = e;
  qr() && ke(!1);
  let d = t.replace(/^\/*/, "/"),
    f = N.useMemo(() => ({ basename: d, navigator: l, static: c }), [d, l, c]);
  typeof o == "string" && (o = Bi(o));
  let {
      pathname: m = "/",
      search: g = "",
      hash: _ = "",
      state: E = null,
      key: C = "default",
    } = o,
    S = N.useMemo(() => {
      let x = ic(m, d);
      return x == null
        ? null
        : {
            location: { pathname: x, search: g, hash: _, state: E, key: C },
            navigationType: s,
          };
    }, [d, m, g, _, E, C, s]);
  return S == null
    ? null
    : N.createElement(
        Di.Provider,
        { value: f },
        N.createElement(Fs.Provider, { children: i, value: S })
      );
}
function U0(e) {
  let { children: t, location: i } = e;
  return T0(Yl(t), i);
}
new Promise(() => {});
function Yl(e, t) {
  t === void 0 && (t = []);
  let i = [];
  return (
    N.Children.forEach(e, (o, s) => {
      if (!N.isValidElement(o)) return;
      let l = [...t, s];
      if (o.type === N.Fragment) {
        i.push.apply(i, Yl(o.props.children, l));
        return;
      }
      o.type !== nt && ke(!1), !o.props.index || !o.props.children || ke(!1);
      let c = {
        id: o.props.id || l.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.ErrorBoundary != null || o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (c.children = Yl(o.props.children, l)), i.push(c);
    }),
    i
  );
}
/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function eu() {
  return (
    (eu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    eu.apply(this, arguments)
  );
}
function b0(e, t) {
  if (e == null) return {};
  var i = {},
    o = Object.keys(e),
    s,
    l;
  for (l = 0; l < o.length; l++)
    (s = o[l]), !(t.indexOf(s) >= 0) && (i[s] = e[s]);
  return i;
}
function H0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function W0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !H0(e);
}
const $0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  V0 = "startTransition",
  Zd = Wv[V0];
function q0(e) {
  let { basename: t, children: i, future: o, window: s } = e,
    l = N.useRef();
  l.current == null && (l.current = e0({ window: s, v5Compat: !0 }));
  let c = l.current,
    [d, f] = N.useState({ action: c.action, location: c.location }),
    { v7_startTransition: m } = o || {},
    g = N.useCallback(
      (_) => {
        m && Zd ? Zd(() => f(_)) : f(_);
      },
      [f, m]
    );
  return (
    N.useLayoutEffect(() => c.listen(g), [c, g]),
    N.createElement(Z0, {
      basename: t,
      children: i,
      location: d.location,
      navigationType: d.action,
      navigator: c,
    })
  );
}
const K0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  G0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  yi = N.forwardRef(function (t, i) {
    let {
        onClick: o,
        relative: s,
        reloadDocument: l,
        replace: c,
        state: d,
        target: f,
        to: m,
        preventScrollReset: g,
        unstable_viewTransition: _,
      } = t,
      E = b0(t, $0),
      { basename: C } = N.useContext(Di),
      S,
      x = !1;
    if (typeof m == "string" && G0.test(m) && ((S = m), K0))
      try {
        let k = new URL(window.location.href),
          M = m.startsWith("//") ? new URL(k.protocol + m) : new URL(m),
          D = ic(M.pathname, C);
        M.origin === k.origin && D != null
          ? (m = D + M.search + M.hash)
          : (x = !0);
      } catch {}
    let A = k0(m, { relative: s }),
      P = Q0(m, {
        replace: c,
        state: d,
        target: f,
        preventScrollReset: g,
        relative: s,
        unstable_viewTransition: _,
      });
    function y(k) {
      o && o(k), k.defaultPrevented || P(k);
    }
    return N.createElement(
      "a",
      eu({}, E, { href: S || A, onClick: x || l ? o : y, ref: i, target: f })
    );
  });
var Ud;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ud || (Ud = {}));
var bd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(bd || (bd = {}));
function Q0(e, t) {
  let {
      target: i,
      replace: o,
      state: s,
      preventScrollReset: l,
      relative: c,
      unstable_viewTransition: d,
    } = t === void 0 ? {} : t,
    f = Kr(),
    m = Zs(),
    g = Sm(e, { relative: c });
  return N.useCallback(
    (_) => {
      if (W0(_, i)) {
        _.preventDefault();
        let E = o !== void 0 ? o : ys(m) === ys(g);
        f(e, {
          replace: E,
          state: s,
          preventScrollReset: l,
          relative: c,
          unstable_viewTransition: d,
        });
      }
    },
    [m, f, g, o, s, i, e, l, c, d]
  );
}
function Lm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: J0 } = Object.prototype,
  { getPrototypeOf: sc } = Object,
  Us = ((e) => (t) => {
    const i = J0.call(t);
    return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Zt = (e) => ((e = e.toLowerCase()), (t) => Us(t) === e),
  bs = (e) => (t) => typeof t === e,
  { isArray: Fi } = Array,
  Ur = bs("undefined");
function X0(e) {
  return (
    e !== null &&
    !Ur(e) &&
    e.constructor !== null &&
    !Ur(e.constructor) &&
    gt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const km = Zt("ArrayBuffer");
function Y0(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && km(e.buffer)),
    t
  );
}
const ew = bs("string"),
  gt = bs("function"),
  Cm = bs("number"),
  Hs = (e) => e !== null && typeof e == "object",
  tw = (e) => e === !0 || e === !1,
  Vo = (e) => {
    if (Us(e) !== "object") return !1;
    const t = sc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  nw = Zt("Date"),
  iw = Zt("File"),
  rw = Zt("Blob"),
  ow = Zt("FileList"),
  sw = (e) => Hs(e) && gt(e.pipe),
  aw = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (gt(e.append) &&
          ((t = Us(e)) === "formdata" ||
            (t === "object" &&
              gt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lw = Zt("URLSearchParams"),
  uw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gr(e, t, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let o, s;
  if ((typeof e != "object" && (e = [e]), Fi(e)))
    for (o = 0, s = e.length; o < s; o++) t.call(null, e[o], o, e);
  else {
    const l = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
      c = l.length;
    let d;
    for (o = 0; o < c; o++) (d = l[o]), t.call(null, e[d], d, e);
  }
}
function Tm(e, t) {
  t = t.toLowerCase();
  const i = Object.keys(e);
  let o = i.length,
    s;
  for (; o-- > 0; ) if (((s = i[o]), t === s.toLowerCase())) return s;
  return null;
}
const Om = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Nm = (e) => !Ur(e) && e !== Om;
function tu() {
  const { caseless: e } = (Nm(this) && this) || {},
    t = {},
    i = (o, s) => {
      const l = (e && Tm(t, s)) || s;
      Vo(t[l]) && Vo(o)
        ? (t[l] = tu(t[l], o))
        : Vo(o)
        ? (t[l] = tu({}, o))
        : Fi(o)
        ? (t[l] = o.slice())
        : (t[l] = o);
    };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Gr(arguments[o], i);
  return t;
}
const cw = (e, t, i, { allOwnKeys: o } = {}) => (
    Gr(
      t,
      (s, l) => {
        i && gt(s) ? (e[l] = Lm(s, i)) : (e[l] = s);
      },
      { allOwnKeys: o }
    ),
    e
  ),
  hw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  dw = (e, t, i, o) => {
    (e.prototype = Object.create(t.prototype, o)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      i && Object.assign(e.prototype, i);
  },
  fw = (e, t, i, o) => {
    let s, l, c;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), l = s.length; l-- > 0; )
        (c = s[l]), (!o || o(c, e, t)) && !d[c] && ((t[c] = e[c]), (d[c] = !0));
      e = i !== !1 && sc(e);
    } while (e && (!i || i(e, t)) && e !== Object.prototype);
    return t;
  },
  pw = (e, t, i) => {
    (e = String(e)),
      (i === void 0 || i > e.length) && (i = e.length),
      (i -= t.length);
    const o = e.indexOf(t, i);
    return o !== -1 && o === i;
  },
  mw = (e) => {
    if (!e) return null;
    if (Fi(e)) return e;
    let t = e.length;
    if (!Cm(t)) return null;
    const i = new Array(t);
    for (; t-- > 0; ) i[t] = e[t];
    return i;
  },
  _w = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && sc(Uint8Array)),
  vw = (e, t) => {
    const o = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = o.next()) && !s.done; ) {
      const l = s.value;
      t.call(e, l[0], l[1]);
    }
  },
  gw = (e, t) => {
    let i;
    const o = [];
    for (; (i = e.exec(t)) !== null; ) o.push(i);
    return o;
  },
  yw = Zt("HTMLFormElement"),
  ww = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, o, s) {
      return o.toUpperCase() + s;
    }),
  Hd = (
    ({ hasOwnProperty: e }) =>
    (t, i) =>
      e.call(t, i)
  )(Object.prototype),
  xw = Zt("RegExp"),
  zm = (e, t) => {
    const i = Object.getOwnPropertyDescriptors(e),
      o = {};
    Gr(i, (s, l) => {
      let c;
      (c = t(s, l, e)) !== !1 && (o[l] = c || s);
    }),
      Object.defineProperties(e, o);
  },
  Sw = (e) => {
    zm(e, (t, i) => {
      if (gt(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
        return !1;
      const o = e[i];
      if (gt(o)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + i + "'");
          });
      }
    });
  },
  Pw = (e, t) => {
    const i = {},
      o = (s) => {
        s.forEach((l) => {
          i[l] = !0;
        });
      };
    return Fi(e) ? o(e) : o(String(e).split(t)), i;
  },
  Ew = () => {},
  Lw = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  tl = "abcdefghijklmnopqrstuvwxyz",
  Wd = "0123456789",
  Mm = { DIGIT: Wd, ALPHA: tl, ALPHA_DIGIT: tl + tl.toUpperCase() + Wd },
  kw = (e = 16, t = Mm.ALPHA_DIGIT) => {
    let i = "";
    const { length: o } = t;
    for (; e--; ) i += t[(Math.random() * o) | 0];
    return i;
  };
function Cw(e) {
  return !!(
    e &&
    gt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Tw = (e) => {
    const t = new Array(10),
      i = (o, s) => {
        if (Hs(o)) {
          if (t.indexOf(o) >= 0) return;
          if (!("toJSON" in o)) {
            t[s] = o;
            const l = Fi(o) ? [] : {};
            return (
              Gr(o, (c, d) => {
                const f = i(c, s + 1);
                !Ur(f) && (l[d] = f);
              }),
              (t[s] = void 0),
              l
            );
          }
        }
        return o;
      };
    return i(e, 0);
  },
  Ow = Zt("AsyncFunction"),
  Nw = (e) => e && (Hs(e) || gt(e)) && gt(e.then) && gt(e.catch),
  z = {
    isArray: Fi,
    isArrayBuffer: km,
    isBuffer: X0,
    isFormData: aw,
    isArrayBufferView: Y0,
    isString: ew,
    isNumber: Cm,
    isBoolean: tw,
    isObject: Hs,
    isPlainObject: Vo,
    isUndefined: Ur,
    isDate: nw,
    isFile: iw,
    isBlob: rw,
    isRegExp: xw,
    isFunction: gt,
    isStream: sw,
    isURLSearchParams: lw,
    isTypedArray: _w,
    isFileList: ow,
    forEach: Gr,
    merge: tu,
    extend: cw,
    trim: uw,
    stripBOM: hw,
    inherits: dw,
    toFlatObject: fw,
    kindOf: Us,
    kindOfTest: Zt,
    endsWith: pw,
    toArray: mw,
    forEachEntry: vw,
    matchAll: gw,
    isHTMLForm: yw,
    hasOwnProperty: Hd,
    hasOwnProp: Hd,
    reduceDescriptors: zm,
    freezeMethods: Sw,
    toObjectSet: Pw,
    toCamelCase: ww,
    noop: Ew,
    toFiniteNumber: Lw,
    findKey: Tm,
    global: Om,
    isContextDefined: Nm,
    ALPHABET: Mm,
    generateString: kw,
    isSpecCompliantForm: Cw,
    toJSONObject: Tw,
    isAsyncFn: Ow,
    isThenable: Nw,
  };
function te(e, t, i, o, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    i && (this.config = i),
    o && (this.request = o),
    s && (this.response = s);
}
z.inherits(te, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: z.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Rm = te.prototype,
  Im = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Im[e] = { value: e };
});
Object.defineProperties(te, Im);
Object.defineProperty(Rm, "isAxiosError", { value: !0 });
te.from = (e, t, i, o, s, l) => {
  const c = Object.create(Rm);
  return (
    z.toFlatObject(
      e,
      c,
      function (f) {
        return f !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    te.call(c, e.message, t, i, o, s),
    (c.cause = e),
    (c.name = e.name),
    l && Object.assign(c, l),
    c
  );
};
const zw = null;
function nu(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function Am(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function $d(e, t, i) {
  return e
    ? e
        .concat(t)
        .map(function (s, l) {
          return (s = Am(s)), !i && l ? "[" + s + "]" : s;
        })
        .join(i ? "." : "")
    : t;
}
function Mw(e) {
  return z.isArray(e) && !e.some(nu);
}
const Rw = z.toFlatObject(z, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ws(e, t, i) {
  if (!z.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (i = z.toFlatObject(
      i,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, A) {
        return !z.isUndefined(A[x]);
      }
    ));
  const o = i.metaTokens,
    s = i.visitor || g,
    l = i.dots,
    c = i.indexes,
    f = (i.Blob || (typeof Blob < "u" && Blob)) && z.isSpecCompliantForm(t);
  if (!z.isFunction(s)) throw new TypeError("visitor must be a function");
  function m(S) {
    if (S === null) return "";
    if (z.isDate(S)) return S.toISOString();
    if (!f && z.isBlob(S))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(S) || z.isTypedArray(S)
      ? f && typeof Blob == "function"
        ? new Blob([S])
        : Buffer.from(S)
      : S;
  }
  function g(S, x, A) {
    let P = S;
    if (S && !A && typeof S == "object") {
      if (z.endsWith(x, "{}"))
        (x = o ? x : x.slice(0, -2)), (S = JSON.stringify(S));
      else if (
        (z.isArray(S) && Mw(S)) ||
        ((z.isFileList(S) || z.endsWith(x, "[]")) && (P = z.toArray(S)))
      )
        return (
          (x = Am(x)),
          P.forEach(function (k, M) {
            !(z.isUndefined(k) || k === null) &&
              t.append(
                c === !0 ? $d([x], M, l) : c === null ? x : x + "[]",
                m(k)
              );
          }),
          !1
        );
    }
    return nu(S) ? !0 : (t.append($d(A, x, l), m(S)), !1);
  }
  const _ = [],
    E = Object.assign(Rw, {
      defaultVisitor: g,
      convertValue: m,
      isVisitable: nu,
    });
  function C(S, x) {
    if (!z.isUndefined(S)) {
      if (_.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      _.push(S),
        z.forEach(S, function (P, y) {
          (!(z.isUndefined(P) || P === null) &&
            s.call(t, P, z.isString(y) ? y.trim() : y, x, E)) === !0 &&
            C(P, x ? x.concat(y) : [y]);
        }),
        _.pop();
    }
  }
  if (!z.isObject(e)) throw new TypeError("data must be an object");
  return C(e), t;
}
function Vd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (o) {
    return t[o];
  });
}
function ac(e, t) {
  (this._pairs = []), e && Ws(e, this, t);
}
const jm = ac.prototype;
jm.append = function (t, i) {
  this._pairs.push([t, i]);
};
jm.toString = function (t) {
  const i = t
    ? function (o) {
        return t.call(this, o, Vd);
      }
    : Vd;
  return this._pairs
    .map(function (s) {
      return i(s[0]) + "=" + i(s[1]);
    }, "")
    .join("&");
};
function Iw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Bm(e, t, i) {
  if (!t) return e;
  const o = (i && i.encode) || Iw,
    s = i && i.serialize;
  let l;
  if (
    (s
      ? (l = s(t, i))
      : (l = z.isURLSearchParams(t) ? t.toString() : new ac(t, i).toString(o)),
    l)
  ) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class Aw {
  constructor() {
    this.handlers = [];
  }
  use(t, i, o) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: i,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    z.forEach(this.handlers, function (o) {
      o !== null && t(o);
    });
  }
}
const qd = Aw,
  Dm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  jw = typeof URLSearchParams < "u" ? URLSearchParams : ac,
  Bw = typeof FormData < "u" ? FormData : null,
  Dw = typeof Blob < "u" ? Blob : null,
  Fw = {
    isBrowser: !0,
    classes: { URLSearchParams: jw, FormData: Bw, Blob: Dw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Fm = typeof window < "u" && typeof document < "u",
  Zw = ((e) => Fm && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Uw = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  bw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Fm,
        hasStandardBrowserEnv: Zw,
        hasStandardBrowserWebWorkerEnv: Uw,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bt = { ...bw, ...Fw };
function Hw(e, t) {
  return Ws(
    e,
    new Bt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (i, o, s, l) {
          return Bt.isNode && z.isBuffer(i)
            ? (this.append(o, i.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ww(e) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function $w(e) {
  const t = {},
    i = Object.keys(e);
  let o;
  const s = i.length;
  let l;
  for (o = 0; o < s; o++) (l = i[o]), (t[l] = e[l]);
  return t;
}
function Zm(e) {
  function t(i, o, s, l) {
    let c = i[l++];
    const d = Number.isFinite(+c),
      f = l >= i.length;
    return (
      (c = !c && z.isArray(s) ? s.length : c),
      f
        ? (z.hasOwnProp(s, c) ? (s[c] = [s[c], o]) : (s[c] = o), !d)
        : ((!s[c] || !z.isObject(s[c])) && (s[c] = []),
          t(i, o, s[c], l) && z.isArray(s[c]) && (s[c] = $w(s[c])),
          !d)
    );
  }
  if (z.isFormData(e) && z.isFunction(e.entries)) {
    const i = {};
    return (
      z.forEachEntry(e, (o, s) => {
        t(Ww(o), s, i, 0);
      }),
      i
    );
  }
  return null;
}
function Vw(e, t, i) {
  if (z.isString(e))
    try {
      return (t || JSON.parse)(e), z.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (i || JSON.stringify)(e);
}
const lc = {
  transitional: Dm,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, i) {
      const o = i.getContentType() || "",
        s = o.indexOf("application/json") > -1,
        l = z.isObject(t);
      if ((l && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t)))
        return s && s ? JSON.stringify(Zm(t)) : t;
      if (
        z.isArrayBuffer(t) ||
        z.isBuffer(t) ||
        z.isStream(t) ||
        z.isFile(t) ||
        z.isBlob(t)
      )
        return t;
      if (z.isArrayBufferView(t)) return t.buffer;
      if (z.isURLSearchParams(t))
        return (
          i.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let d;
      if (l) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return Hw(t, this.formSerializer).toString();
        if ((d = z.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return Ws(
            d ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return l || s ? (i.setContentType("application/json", !1), Vw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const i = this.transitional || lc.transitional,
        o = i && i.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && z.isString(t) && ((o && !this.responseType) || s)) {
        const c = !(i && i.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (d) {
          if (c)
            throw d.name === "SyntaxError"
              ? te.from(d, te.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Bt.classes.FormData, Blob: Bt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  lc.headers[e] = {};
});
const uc = lc,
  qw = z.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Kw = (e) => {
    const t = {};
    let i, o, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (c) {
            (s = c.indexOf(":")),
              (i = c.substring(0, s).trim().toLowerCase()),
              (o = c.substring(s + 1).trim()),
              !(!i || (t[i] && qw[i])) &&
                (i === "set-cookie"
                  ? t[i]
                    ? t[i].push(o)
                    : (t[i] = [o])
                  : (t[i] = t[i] ? t[i] + ", " + o : o));
          }),
      t
    );
  },
  Kd = Symbol("internals");
function lr(e) {
  return e && String(e).trim().toLowerCase();
}
function qo(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(qo) : String(e);
}
function Gw(e) {
  const t = Object.create(null),
    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = i.exec(e)); ) t[o[1]] = o[2];
  return t;
}
const Qw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function nl(e, t, i, o, s) {
  if (z.isFunction(o)) return o.call(this, t, i);
  if ((s && (t = i), !!z.isString(t))) {
    if (z.isString(o)) return t.indexOf(o) !== -1;
    if (z.isRegExp(o)) return o.test(t);
  }
}
function Jw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, i, o) => i.toUpperCase() + o);
}
function Xw(e, t) {
  const i = z.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + i, {
      value: function (s, l, c) {
        return this[o].call(this, t, s, l, c);
      },
      configurable: !0,
    });
  });
}
class $s {
  constructor(t) {
    t && this.set(t);
  }
  set(t, i, o) {
    const s = this;
    function l(d, f, m) {
      const g = lr(f);
      if (!g) throw new Error("header name must be a non-empty string");
      const _ = z.findKey(s, g);
      (!_ || s[_] === void 0 || m === !0 || (m === void 0 && s[_] !== !1)) &&
        (s[_ || f] = qo(d));
    }
    const c = (d, f) => z.forEach(d, (m, g) => l(m, g, f));
    return (
      z.isPlainObject(t) || t instanceof this.constructor
        ? c(t, i)
        : z.isString(t) && (t = t.trim()) && !Qw(t)
        ? c(Kw(t), i)
        : t != null && l(i, t, o),
      this
    );
  }
  get(t, i) {
    if (((t = lr(t)), t)) {
      const o = z.findKey(this, t);
      if (o) {
        const s = this[o];
        if (!i) return s;
        if (i === !0) return Gw(s);
        if (z.isFunction(i)) return i.call(this, s, o);
        if (z.isRegExp(i)) return i.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, i) {
    if (((t = lr(t)), t)) {
      const o = z.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!i || nl(this, this[o], o, i)));
    }
    return !1;
  }
  delete(t, i) {
    const o = this;
    let s = !1;
    function l(c) {
      if (((c = lr(c)), c)) {
        const d = z.findKey(o, c);
        d && (!i || nl(o, o[d], d, i)) && (delete o[d], (s = !0));
      }
    }
    return z.isArray(t) ? t.forEach(l) : l(t), s;
  }
  clear(t) {
    const i = Object.keys(this);
    let o = i.length,
      s = !1;
    for (; o--; ) {
      const l = i[o];
      (!t || nl(this, this[l], l, t, !0)) && (delete this[l], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const i = this,
      o = {};
    return (
      z.forEach(this, (s, l) => {
        const c = z.findKey(o, l);
        if (c) {
          (i[c] = qo(s)), delete i[l];
          return;
        }
        const d = t ? Jw(l) : String(l).trim();
        d !== l && delete i[l], (i[d] = qo(s)), (o[d] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const i = Object.create(null);
    return (
      z.forEach(this, (o, s) => {
        o != null && o !== !1 && (i[s] = t && z.isArray(o) ? o.join(", ") : o);
      }),
      i
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...i) {
    const o = new this(t);
    return i.forEach((s) => o.set(s)), o;
  }
  static accessor(t) {
    const o = (this[Kd] = this[Kd] = { accessors: {} }).accessors,
      s = this.prototype;
    function l(c) {
      const d = lr(c);
      o[d] || (Xw(s, c), (o[d] = !0));
    }
    return z.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
$s.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
z.reduceDescriptors($s.prototype, ({ value: e }, t) => {
  let i = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[i] = o;
    },
  };
});
z.freezeMethods($s);
const Jt = $s;
function il(e, t) {
  const i = this || uc,
    o = t || i,
    s = Jt.from(o.headers);
  let l = o.data;
  return (
    z.forEach(e, function (d) {
      l = d.call(i, l, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    l
  );
}
function Um(e) {
  return !!(e && e.__CANCEL__);
}
function Qr(e, t, i) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, i),
    (this.name = "CanceledError");
}
z.inherits(Qr, te, { __CANCEL__: !0 });
function Yw(e, t, i) {
  const o = i.config.validateStatus;
  !i.status || !o || o(i.status)
    ? e(i)
    : t(
        new te(
          "Request failed with status code " + i.status,
          [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][
            Math.floor(i.status / 100) - 4
          ],
          i.config,
          i.request,
          i
        )
      );
}
const e1 = Bt.hasStandardBrowserEnv
  ? {
      write(e, t, i, o, s, l) {
        const c = [e + "=" + encodeURIComponent(t)];
        z.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()),
          z.isString(o) && c.push("path=" + o),
          z.isString(s) && c.push("domain=" + s),
          l === !0 && c.push("secure"),
          (document.cookie = c.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function t1(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function n1(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function bm(e, t) {
  return e && !t1(t) ? n1(e, t) : t;
}
const i1 = Bt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        i = document.createElement("a");
      let o;
      function s(l) {
        let c = l;
        return (
          t && (i.setAttribute("href", c), (c = i.href)),
          i.setAttribute("href", c),
          {
            href: i.href,
            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
            host: i.host,
            search: i.search ? i.search.replace(/^\?/, "") : "",
            hash: i.hash ? i.hash.replace(/^#/, "") : "",
            hostname: i.hostname,
            port: i.port,
            pathname:
              i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname,
          }
        );
      }
      return (
        (o = s(window.location.href)),
        function (c) {
          const d = z.isString(c) ? s(c) : c;
          return d.protocol === o.protocol && d.host === o.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function r1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function o1(e, t) {
  e = e || 10;
  const i = new Array(e),
    o = new Array(e);
  let s = 0,
    l = 0,
    c;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const m = Date.now(),
        g = o[l];
      c || (c = m), (i[s] = f), (o[s] = m);
      let _ = l,
        E = 0;
      for (; _ !== s; ) (E += i[_++]), (_ = _ % e);
      if (((s = (s + 1) % e), s === l && (l = (l + 1) % e), m - c < t)) return;
      const C = g && m - g;
      return C ? Math.round((E * 1e3) / C) : void 0;
    }
  );
}
function Gd(e, t) {
  let i = 0;
  const o = o1(50, 250);
  return (s) => {
    const l = s.loaded,
      c = s.lengthComputable ? s.total : void 0,
      d = l - i,
      f = o(d),
      m = l <= c;
    i = l;
    const g = {
      loaded: l,
      total: c,
      progress: c ? l / c : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && c && m ? (c - l) / f : void 0,
      event: s,
    };
    (g[t ? "download" : "upload"] = !0), e(g);
  };
}
const s1 = typeof XMLHttpRequest < "u",
  a1 =
    s1 &&
    function (e) {
      return new Promise(function (i, o) {
        let s = e.data;
        const l = Jt.from(e.headers).normalize();
        let { responseType: c, withXSRFToken: d } = e,
          f;
        function m() {
          e.cancelToken && e.cancelToken.unsubscribe(f),
            e.signal && e.signal.removeEventListener("abort", f);
        }
        let g;
        if (z.isFormData(s)) {
          if (Bt.hasStandardBrowserEnv || Bt.hasStandardBrowserWebWorkerEnv)
            l.setContentType(!1);
          else if ((g = l.getContentType()) !== !1) {
            const [x, ...A] = g
              ? g
                  .split(";")
                  .map((P) => P.trim())
                  .filter(Boolean)
              : [];
            l.setContentType([x || "multipart/form-data", ...A].join("; "));
          }
        }
        let _ = new XMLHttpRequest();
        if (e.auth) {
          const x = e.auth.username || "",
            A = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          l.set("Authorization", "Basic " + btoa(x + ":" + A));
        }
        const E = bm(e.baseURL, e.url);
        _.open(e.method.toUpperCase(), Bm(E, e.params, e.paramsSerializer), !0),
          (_.timeout = e.timeout);
        function C() {
          if (!_) return;
          const x = Jt.from(
              "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
            ),
            P = {
              data:
                !c || c === "text" || c === "json"
                  ? _.responseText
                  : _.response,
              status: _.status,
              statusText: _.statusText,
              headers: x,
              config: e,
              request: _,
            };
          Yw(
            function (k) {
              i(k), m();
            },
            function (k) {
              o(k), m();
            },
            P
          ),
            (_ = null);
        }
        if (
          ("onloadend" in _
            ? (_.onloadend = C)
            : (_.onreadystatechange = function () {
                !_ ||
                  _.readyState !== 4 ||
                  (_.status === 0 &&
                    !(_.responseURL && _.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(C);
              }),
          (_.onabort = function () {
            _ &&
              (o(new te("Request aborted", te.ECONNABORTED, e, _)), (_ = null));
          }),
          (_.onerror = function () {
            o(new te("Network Error", te.ERR_NETWORK, e, _)), (_ = null);
          }),
          (_.ontimeout = function () {
            let A = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const P = e.transitional || Dm;
            e.timeoutErrorMessage && (A = e.timeoutErrorMessage),
              o(
                new te(
                  A,
                  P.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
                  e,
                  _
                )
              ),
              (_ = null);
          }),
          Bt.hasStandardBrowserEnv &&
            (d && z.isFunction(d) && (d = d(e)), d || (d !== !1 && i1(E))))
        ) {
          const x =
            e.xsrfHeaderName && e.xsrfCookieName && e1.read(e.xsrfCookieName);
          x && l.set(e.xsrfHeaderName, x);
        }
        s === void 0 && l.setContentType(null),
          "setRequestHeader" in _ &&
            z.forEach(l.toJSON(), function (A, P) {
              _.setRequestHeader(P, A);
            }),
          z.isUndefined(e.withCredentials) ||
            (_.withCredentials = !!e.withCredentials),
          c && c !== "json" && (_.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            _.addEventListener("progress", Gd(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            _.upload &&
            _.upload.addEventListener("progress", Gd(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((f = (x) => {
              _ &&
                (o(!x || x.type ? new Qr(null, e, _) : x),
                _.abort(),
                (_ = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(f),
            e.signal &&
              (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
        const S = r1(E);
        if (S && Bt.protocols.indexOf(S) === -1) {
          o(new te("Unsupported protocol " + S + ":", te.ERR_BAD_REQUEST, e));
          return;
        }
        _.send(s || null);
      });
    },
  iu = { http: zw, xhr: a1 };
z.forEach(iu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qd = (e) => `- ${e}`,
  l1 = (e) => z.isFunction(e) || e === null || e === !1,
  Hm = {
    getAdapter: (e) => {
      e = z.isArray(e) ? e : [e];
      const { length: t } = e;
      let i, o;
      const s = {};
      for (let l = 0; l < t; l++) {
        i = e[l];
        let c;
        if (
          ((o = i),
          !l1(i) && ((o = iu[(c = String(i)).toLowerCase()]), o === void 0))
        )
          throw new te(`Unknown adapter '${c}'`);
        if (o) break;
        s[c || "#" + l] = o;
      }
      if (!o) {
        const l = Object.entries(s).map(
          ([d, f]) =>
            `adapter ${d} ` +
            (f === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let c = t
          ? l.length > 1
            ? `since :
` +
              l.map(Qd).join(`
`)
            : " " + Qd(l[0])
          : "as no adapter specified";
        throw new te(
          "There is no suitable adapter to dispatch the request " + c,
          "ERR_NOT_SUPPORT"
        );
      }
      return o;
    },
    adapters: iu,
  };
function rl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Qr(null, e);
}
function Jd(e) {
  return (
    rl(e),
    (e.headers = Jt.from(e.headers)),
    (e.data = il.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Hm.getAdapter(e.adapter || uc.adapter)(e).then(
      function (o) {
        return (
          rl(e),
          (o.data = il.call(e, e.transformResponse, o)),
          (o.headers = Jt.from(o.headers)),
          o
        );
      },
      function (o) {
        return (
          Um(o) ||
            (rl(e),
            o &&
              o.response &&
              ((o.response.data = il.call(e, e.transformResponse, o.response)),
              (o.response.headers = Jt.from(o.response.headers)))),
          Promise.reject(o)
        );
      }
    )
  );
}
const Xd = (e) => (e instanceof Jt ? e.toJSON() : e);
function Ri(e, t) {
  t = t || {};
  const i = {};
  function o(m, g, _) {
    return z.isPlainObject(m) && z.isPlainObject(g)
      ? z.merge.call({ caseless: _ }, m, g)
      : z.isPlainObject(g)
      ? z.merge({}, g)
      : z.isArray(g)
      ? g.slice()
      : g;
  }
  function s(m, g, _) {
    if (z.isUndefined(g)) {
      if (!z.isUndefined(m)) return o(void 0, m, _);
    } else return o(m, g, _);
  }
  function l(m, g) {
    if (!z.isUndefined(g)) return o(void 0, g);
  }
  function c(m, g) {
    if (z.isUndefined(g)) {
      if (!z.isUndefined(m)) return o(void 0, m);
    } else return o(void 0, g);
  }
  function d(m, g, _) {
    if (_ in t) return o(m, g);
    if (_ in e) return o(void 0, m);
  }
  const f = {
    url: l,
    method: l,
    data: l,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: d,
    headers: (m, g) => s(Xd(m), Xd(g), !0),
  };
  return (
    z.forEach(Object.keys(Object.assign({}, e, t)), function (g) {
      const _ = f[g] || s,
        E = _(e[g], t[g], g);
      (z.isUndefined(E) && _ !== d) || (i[g] = E);
    }),
    i
  );
}
const Wm = "1.6.2",
  cc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    cc[e] = function (o) {
      return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Yd = {};
cc.transitional = function (t, i, o) {
  function s(l, c) {
    return (
      "[Axios v" +
      Wm +
      "] Transitional option '" +
      l +
      "'" +
      c +
      (o ? ". " + o : "")
    );
  }
  return (l, c, d) => {
    if (t === !1)
      throw new te(
        s(c, " has been removed" + (i ? " in " + i : "")),
        te.ERR_DEPRECATED
      );
    return (
      i &&
        !Yd[c] &&
        ((Yd[c] = !0),
        console.warn(
          s(
            c,
            " has been deprecated since v" +
              i +
              " and will be removed in the near future"
          )
        )),
      t ? t(l, c, d) : !0
    );
  };
};
function u1(e, t, i) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let s = o.length;
  for (; s-- > 0; ) {
    const l = o[s],
      c = t[l];
    if (c) {
      const d = e[l],
        f = d === void 0 || c(d, l, e);
      if (f !== !0)
        throw new te("option " + l + " must be " + f, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new te("Unknown option " + l, te.ERR_BAD_OPTION);
  }
}
const ru = { assertOptions: u1, validators: cc },
  ln = ru.validators;
class Ss {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new qd(), response: new qd() });
  }
  request(t, i) {
    typeof t == "string" ? ((i = i || {}), (i.url = t)) : (i = t || {}),
      (i = Ri(this.defaults, i));
    const { transitional: o, paramsSerializer: s, headers: l } = i;
    o !== void 0 &&
      ru.assertOptions(
        o,
        {
          silentJSONParsing: ln.transitional(ln.boolean),
          forcedJSONParsing: ln.transitional(ln.boolean),
          clarifyTimeoutError: ln.transitional(ln.boolean),
        },
        !1
      ),
      s != null &&
        (z.isFunction(s)
          ? (i.paramsSerializer = { serialize: s })
          : ru.assertOptions(
              s,
              { encode: ln.function, serialize: ln.function },
              !0
            )),
      (i.method = (i.method || this.defaults.method || "get").toLowerCase());
    let c = l && z.merge(l.common, l[i.method]);
    l &&
      z.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (S) => {
          delete l[S];
        }
      ),
      (i.headers = Jt.concat(c, l));
    const d = [];
    let f = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(i) === !1) ||
        ((f = f && x.synchronous), d.unshift(x.fulfilled, x.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (x) {
      m.push(x.fulfilled, x.rejected);
    });
    let g,
      _ = 0,
      E;
    if (!f) {
      const S = [Jd.bind(this), void 0];
      for (
        S.unshift.apply(S, d),
          S.push.apply(S, m),
          E = S.length,
          g = Promise.resolve(i);
        _ < E;

      )
        g = g.then(S[_++], S[_++]);
      return g;
    }
    E = d.length;
    let C = i;
    for (_ = 0; _ < E; ) {
      const S = d[_++],
        x = d[_++];
      try {
        C = S(C);
      } catch (A) {
        x.call(this, A);
        break;
      }
    }
    try {
      g = Jd.call(this, C);
    } catch (S) {
      return Promise.reject(S);
    }
    for (_ = 0, E = m.length; _ < E; ) g = g.then(m[_++], m[_++]);
    return g;
  }
  getUri(t) {
    t = Ri(this.defaults, t);
    const i = bm(t.baseURL, t.url);
    return Bm(i, t.params, t.paramsSerializer);
  }
}
z.forEach(["delete", "get", "head", "options"], function (t) {
  Ss.prototype[t] = function (i, o) {
    return this.request(
      Ri(o || {}, { method: t, url: i, data: (o || {}).data })
    );
  };
});
z.forEach(["post", "put", "patch"], function (t) {
  function i(o) {
    return function (l, c, d) {
      return this.request(
        Ri(d || {}, {
          method: t,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: c,
        })
      );
    };
  }
  (Ss.prototype[t] = i()), (Ss.prototype[t + "Form"] = i(!0));
});
const Ko = Ss;
class hc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function (l) {
      i = l;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let l = o._listeners.length;
      for (; l-- > 0; ) o._listeners[l](s);
      o._listeners = null;
    }),
      (this.promise.then = (s) => {
        let l;
        const c = new Promise((d) => {
          o.subscribe(d), (l = d);
        }).then(s);
        return (
          (c.cancel = function () {
            o.unsubscribe(l);
          }),
          c
        );
      }),
      t(function (l, c, d) {
        o.reason || ((o.reason = new Qr(l, c, d)), i(o.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const i = this._listeners.indexOf(t);
    i !== -1 && this._listeners.splice(i, 1);
  }
  static source() {
    let t;
    return {
      token: new hc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const c1 = hc;
function h1(e) {
  return function (i) {
    return e.apply(null, i);
  };
}
function d1(e) {
  return z.isObject(e) && e.isAxiosError === !0;
}
const ou = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ou).forEach(([e, t]) => {
  ou[t] = e;
});
const f1 = ou;
function $m(e) {
  const t = new Ko(e),
    i = Lm(Ko.prototype.request, t);
  return (
    z.extend(i, Ko.prototype, t, { allOwnKeys: !0 }),
    z.extend(i, t, null, { allOwnKeys: !0 }),
    (i.create = function (s) {
      return $m(Ri(e, s));
    }),
    i
  );
}
const Ce = $m(uc);
Ce.Axios = Ko;
Ce.CanceledError = Qr;
Ce.CancelToken = c1;
Ce.isCancel = Um;
Ce.VERSION = Wm;
Ce.toFormData = Ws;
Ce.AxiosError = te;
Ce.Cancel = Ce.CanceledError;
Ce.all = function (t) {
  return Promise.all(t);
};
Ce.spread = h1;
Ce.isAxiosError = d1;
Ce.mergeConfig = Ri;
Ce.AxiosHeaders = Jt;
Ce.formToJSON = (e) => Zm(z.isHTMLForm(e) ? new FormData(e) : e);
Ce.getAdapter = Hm.getAdapter;
Ce.HttpStatusCode = f1;
Ce.default = Ce;
const ve = Ce;
function Vm(e, t) {
  const i = N.useRef(t);
  N.useEffect(
    function () {
      t !== i.current &&
        e.attributionControl != null &&
        (i.current != null && e.attributionControl.removeAttribution(i.current),
        t != null && e.attributionControl.addAttribution(t)),
        (i.current = t);
    },
    [e, t]
  );
}
const p1 = 1;
function m1(e) {
  return Object.freeze({ __version: p1, map: e });
}
function _1(e, t) {
  return Object.freeze({ ...e, ...t });
}
const qm = N.createContext(null),
  Km = qm.Provider;
function dc() {
  const e = N.useContext(qm);
  if (e == null)
    throw new Error(
      "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
    );
  return e;
}
function v1(e) {
  function t(i, o) {
    const { instance: s, context: l } = e(i).current;
    return (
      N.useImperativeHandle(o, () => s),
      i.children == null ? null : Sr.createElement(Km, { value: l }, i.children)
    );
  }
  return N.forwardRef(t);
}
function g1(e) {
  function t(i, o) {
    const [s, l] = N.useState(!1),
      { instance: c } = e(i, l).current;
    N.useImperativeHandle(o, () => c),
      N.useEffect(
        function () {
          s && c.update();
        },
        [c, s, i.children]
      );
    const d = c._contentNode;
    return d ? pm.createPortal(i.children, d) : null;
  }
  return N.forwardRef(t);
}
function y1(e) {
  function t(i, o) {
    const { instance: s } = e(i).current;
    return N.useImperativeHandle(o, () => s), null;
  }
  return N.forwardRef(t);
}
function Gm(e, t) {
  const i = N.useRef();
  N.useEffect(
    function () {
      return (
        t != null && e.instance.on(t),
        (i.current = t),
        function () {
          i.current != null && e.instance.off(i.current), (i.current = null);
        }
      );
    },
    [e, t]
  );
}
function fc(e, t) {
  const i = e.pane ?? t.pane;
  return i ? { ...e, pane: i } : e;
}
function w1(e, t) {
  return function (o, s) {
    const l = dc(),
      c = e(fc(o, l), l);
    return (
      Vm(l.map, o.attribution),
      Gm(c.current, o.eventHandlers),
      t(c.current, l, o, s),
      c
    );
  };
}
var su = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (e, t) {
  (function (i, o) {
    o(t);
  })(Cv, function (i) {
    var o = "1.9.4";
    function s(n) {
      var r, a, u, h;
      for (a = 1, u = arguments.length; a < u; a++) {
        h = arguments[a];
        for (r in h) n[r] = h[r];
      }
      return n;
    }
    var l =
      Object.create ||
      (function () {
        function n() {}
        return function (r) {
          return (n.prototype = r), new n();
        };
      })();
    function c(n, r) {
      var a = Array.prototype.slice;
      if (n.bind) return n.bind.apply(n, a.call(arguments, 1));
      var u = a.call(arguments, 2);
      return function () {
        return n.apply(r, u.length ? u.concat(a.call(arguments)) : arguments);
      };
    }
    var d = 0;
    function f(n) {
      return "_leaflet_id" in n || (n._leaflet_id = ++d), n._leaflet_id;
    }
    function m(n, r, a) {
      var u, h, p, w;
      return (
        (w = function () {
          (u = !1), h && (p.apply(a, h), (h = !1));
        }),
        (p = function () {
          u
            ? (h = arguments)
            : (n.apply(a, arguments), setTimeout(w, r), (u = !0));
        }),
        p
      );
    }
    function g(n, r, a) {
      var u = r[1],
        h = r[0],
        p = u - h;
      return n === u && a ? n : ((((n - h) % p) + p) % p) + h;
    }
    function _() {
      return !1;
    }
    function E(n, r) {
      if (r === !1) return n;
      var a = Math.pow(10, r === void 0 ? 6 : r);
      return Math.round(n * a) / a;
    }
    function C(n) {
      return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
    }
    function S(n) {
      return C(n).split(/\s+/);
    }
    function x(n, r) {
      Object.prototype.hasOwnProperty.call(n, "options") ||
        (n.options = n.options ? l(n.options) : {});
      for (var a in r) n.options[a] = r[a];
      return n.options;
    }
    function A(n, r, a) {
      var u = [];
      for (var h in n)
        u.push(
          encodeURIComponent(a ? h.toUpperCase() : h) +
            "=" +
            encodeURIComponent(n[h])
        );
      return (!r || r.indexOf("?") === -1 ? "?" : "&") + u.join("&");
    }
    var P = /\{ *([\w_ -]+) *\}/g;
    function y(n, r) {
      return n.replace(P, function (a, u) {
        var h = r[u];
        if (h === void 0)
          throw new Error("No value provided for variable " + a);
        return typeof h == "function" && (h = h(r)), h;
      });
    }
    var k =
      Array.isArray ||
      function (n) {
        return Object.prototype.toString.call(n) === "[object Array]";
      };
    function M(n, r) {
      for (var a = 0; a < n.length; a++) if (n[a] === r) return a;
      return -1;
    }
    var D = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function U(n) {
      return window["webkit" + n] || window["moz" + n] || window["ms" + n];
    }
    var b = 0;
    function H(n) {
      var r = +new Date(),
        a = Math.max(0, 16 - (r - b));
      return (b = r + a), window.setTimeout(n, a);
    }
    var he = window.requestAnimationFrame || U("RequestAnimationFrame") || H,
      J =
        window.cancelAnimationFrame ||
        U("CancelAnimationFrame") ||
        U("CancelRequestAnimationFrame") ||
        function (n) {
          window.clearTimeout(n);
        };
    function le(n, r, a) {
      if (a && he === H) n.call(r);
      else return he.call(window, c(n, r));
    }
    function ze(n) {
      n && J.call(window, n);
    }
    var zn = {
      __proto__: null,
      extend: s,
      create: l,
      bind: c,
      get lastId() {
        return d;
      },
      stamp: f,
      throttle: m,
      wrapNum: g,
      falseFn: _,
      formatNum: E,
      trim: C,
      splitWords: S,
      setOptions: x,
      getParamString: A,
      template: y,
      isArray: k,
      indexOf: M,
      emptyImageUrl: D,
      requestFn: he,
      cancelFn: J,
      requestAnimFrame: le,
      cancelAnimFrame: ze,
    };
    function ct() {}
    (ct.extend = function (n) {
      var r = function () {
          x(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        a = (r.__super__ = this.prototype),
        u = l(a);
      (u.constructor = r), (r.prototype = u);
      for (var h in this)
        Object.prototype.hasOwnProperty.call(this, h) &&
          h !== "prototype" &&
          h !== "__super__" &&
          (r[h] = this[h]);
      return (
        n.statics && s(r, n.statics),
        n.includes && (qs(n.includes), s.apply(null, [u].concat(n.includes))),
        s(u, n),
        delete u.statics,
        delete u.includes,
        u.options &&
          ((u.options = a.options ? l(a.options) : {}),
          s(u.options, n.options)),
        (u._initHooks = []),
        (u.callInitHooks = function () {
          if (!this._initHooksCalled) {
            a.callInitHooks && a.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var p = 0, w = u._initHooks.length; p < w; p++)
              u._initHooks[p].call(this);
          }
        }),
        r
      );
    }),
      (ct.include = function (n) {
        var r = this.prototype.options;
        return (
          s(this.prototype, n),
          n.options &&
            ((this.prototype.options = r), this.mergeOptions(n.options)),
          this
        );
      }),
      (ct.mergeOptions = function (n) {
        return s(this.prototype.options, n), this;
      }),
      (ct.addInitHook = function (n) {
        var r = Array.prototype.slice.call(arguments, 1),
          a =
            typeof n == "function"
              ? n
              : function () {
                  this[n].apply(this, r);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(a),
          this
        );
      });
    function qs(n) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        n = k(n) ? n : [n];
        for (var r = 0; r < n.length; r++)
          n[r] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack
            );
      }
    }
    var Ae = {
      on: function (n, r, a) {
        if (typeof n == "object") for (var u in n) this._on(u, n[u], r);
        else {
          n = S(n);
          for (var h = 0, p = n.length; h < p; h++) this._on(n[h], r, a);
        }
        return this;
      },
      off: function (n, r, a) {
        if (!arguments.length) delete this._events;
        else if (typeof n == "object") for (var u in n) this._off(u, n[u], r);
        else {
          n = S(n);
          for (var h = arguments.length === 1, p = 0, w = n.length; p < w; p++)
            h ? this._off(n[p]) : this._off(n[p], r, a);
        }
        return this;
      },
      _on: function (n, r, a, u) {
        if (typeof r != "function") {
          console.warn("wrong listener type: " + typeof r);
          return;
        }
        if (this._listens(n, r, a) === !1) {
          a === this && (a = void 0);
          var h = { fn: r, ctx: a };
          u && (h.once = !0),
            (this._events = this._events || {}),
            (this._events[n] = this._events[n] || []),
            this._events[n].push(h);
        }
      },
      _off: function (n, r, a) {
        var u, h, p;
        if (this._events && ((u = this._events[n]), !!u)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (h = 0, p = u.length; h < p; h++) u[h].fn = _;
            delete this._events[n];
            return;
          }
          if (typeof r != "function") {
            console.warn("wrong listener type: " + typeof r);
            return;
          }
          var w = this._listens(n, r, a);
          if (w !== !1) {
            var T = u[w];
            this._firingCount &&
              ((T.fn = _), (this._events[n] = u = u.slice())),
              u.splice(w, 1);
          }
        }
      },
      fire: function (n, r, a) {
        if (!this.listens(n, a)) return this;
        var u = s({}, r, {
          type: n,
          target: this,
          sourceTarget: (r && r.sourceTarget) || this,
        });
        if (this._events) {
          var h = this._events[n];
          if (h) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var p = 0, w = h.length; p < w; p++) {
              var T = h[p],
                O = T.fn;
              T.once && this.off(n, O, T.ctx), O.call(T.ctx || this, u);
            }
            this._firingCount--;
          }
        }
        return a && this._propagateEvent(u), this;
      },
      listens: function (n, r, a, u) {
        typeof n != "string" && console.warn('"string" type argument expected');
        var h = r;
        typeof r != "function" && ((u = !!r), (h = void 0), (a = void 0));
        var p = this._events && this._events[n];
        if (p && p.length && this._listens(n, h, a) !== !1) return !0;
        if (u) {
          for (var w in this._eventParents)
            if (this._eventParents[w].listens(n, r, a, u)) return !0;
        }
        return !1;
      },
      _listens: function (n, r, a) {
        if (!this._events) return !1;
        var u = this._events[n] || [];
        if (!r) return !!u.length;
        a === this && (a = void 0);
        for (var h = 0, p = u.length; h < p; h++)
          if (u[h].fn === r && u[h].ctx === a) return h;
        return !1;
      },
      once: function (n, r, a) {
        if (typeof n == "object") for (var u in n) this._on(u, n[u], r, !0);
        else {
          n = S(n);
          for (var h = 0, p = n.length; h < p; h++) this._on(n[h], r, a, !0);
        }
        return this;
      },
      addEventParent: function (n) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[f(n)] = n),
          this
        );
      },
      removeEventParent: function (n) {
        return this._eventParents && delete this._eventParents[f(n)], this;
      },
      _propagateEvent: function (n) {
        for (var r in this._eventParents)
          this._eventParents[r].fire(
            n.type,
            s({ layer: n.target, propagatedFrom: n.target }, n),
            !0
          );
      },
    };
    (Ae.addEventListener = Ae.on),
      (Ae.removeEventListener = Ae.clearAllEventListeners = Ae.off),
      (Ae.addOneTimeEventListener = Ae.once),
      (Ae.fireEvent = Ae.fire),
      (Ae.hasEventListeners = Ae.listens);
    var Ut = ct.extend(Ae);
    function R(n, r, a) {
      (this.x = a ? Math.round(n) : n), (this.y = a ? Math.round(r) : r);
    }
    var q =
      Math.trunc ||
      function (n) {
        return n > 0 ? Math.floor(n) : Math.ceil(n);
      };
    R.prototype = {
      clone: function () {
        return new R(this.x, this.y);
      },
      add: function (n) {
        return this.clone()._add(B(n));
      },
      _add: function (n) {
        return (this.x += n.x), (this.y += n.y), this;
      },
      subtract: function (n) {
        return this.clone()._subtract(B(n));
      },
      _subtract: function (n) {
        return (this.x -= n.x), (this.y -= n.y), this;
      },
      divideBy: function (n) {
        return this.clone()._divideBy(n);
      },
      _divideBy: function (n) {
        return (this.x /= n), (this.y /= n), this;
      },
      multiplyBy: function (n) {
        return this.clone()._multiplyBy(n);
      },
      _multiplyBy: function (n) {
        return (this.x *= n), (this.y *= n), this;
      },
      scaleBy: function (n) {
        return new R(this.x * n.x, this.y * n.y);
      },
      unscaleBy: function (n) {
        return new R(this.x / n.x, this.y / n.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = q(this.x)), (this.y = q(this.y)), this;
      },
      distanceTo: function (n) {
        n = B(n);
        var r = n.x - this.x,
          a = n.y - this.y;
        return Math.sqrt(r * r + a * a);
      },
      equals: function (n) {
        return (n = B(n)), n.x === this.x && n.y === this.y;
      },
      contains: function (n) {
        return (
          (n = B(n)),
          Math.abs(n.x) <= Math.abs(this.x) && Math.abs(n.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + E(this.x) + ", " + E(this.y) + ")";
      },
    };
    function B(n, r, a) {
      return n instanceof R
        ? n
        : k(n)
        ? new R(n[0], n[1])
        : n == null
        ? n
        : typeof n == "object" && "x" in n && "y" in n
        ? new R(n.x, n.y)
        : new R(n, r, a);
    }
    function V(n, r) {
      if (n)
        for (var a = r ? [n, r] : n, u = 0, h = a.length; u < h; u++)
          this.extend(a[u]);
    }
    V.prototype = {
      extend: function (n) {
        var r, a;
        if (!n) return this;
        if (n instanceof R || typeof n[0] == "number" || "x" in n) r = a = B(n);
        else if (((n = ne(n)), (r = n.min), (a = n.max), !r || !a)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = r.clone()), (this.max = a.clone()))
            : ((this.min.x = Math.min(r.x, this.min.x)),
              (this.max.x = Math.max(a.x, this.max.x)),
              (this.min.y = Math.min(r.y, this.min.y)),
              (this.max.y = Math.max(a.y, this.max.y))),
          this
        );
      },
      getCenter: function (n) {
        return B(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          n
        );
      },
      getBottomLeft: function () {
        return B(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return B(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (n) {
        var r, a;
        return (
          typeof n[0] == "number" || n instanceof R ? (n = B(n)) : (n = ne(n)),
          n instanceof V ? ((r = n.min), (a = n.max)) : (r = a = n),
          r.x >= this.min.x &&
            a.x <= this.max.x &&
            r.y >= this.min.y &&
            a.y <= this.max.y
        );
      },
      intersects: function (n) {
        n = ne(n);
        var r = this.min,
          a = this.max,
          u = n.min,
          h = n.max,
          p = h.x >= r.x && u.x <= a.x,
          w = h.y >= r.y && u.y <= a.y;
        return p && w;
      },
      overlaps: function (n) {
        n = ne(n);
        var r = this.min,
          a = this.max,
          u = n.min,
          h = n.max,
          p = h.x > r.x && u.x < a.x,
          w = h.y > r.y && u.y < a.y;
        return p && w;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (n) {
        var r = this.min,
          a = this.max,
          u = Math.abs(r.x - a.x) * n,
          h = Math.abs(r.y - a.y) * n;
        return ne(B(r.x - u, r.y - h), B(a.x + u, a.y + h));
      },
      equals: function (n) {
        return n
          ? ((n = ne(n)),
            this.min.equals(n.getTopLeft()) &&
              this.max.equals(n.getBottomRight()))
          : !1;
      },
    };
    function ne(n, r) {
      return !n || n instanceof V ? n : new V(n, r);
    }
    function Te(n, r) {
      if (n)
        for (var a = r ? [n, r] : n, u = 0, h = a.length; u < h; u++)
          this.extend(a[u]);
    }
    Te.prototype = {
      extend: function (n) {
        var r = this._southWest,
          a = this._northEast,
          u,
          h;
        if (n instanceof re) (u = n), (h = n);
        else if (n instanceof Te) {
          if (((u = n._southWest), (h = n._northEast), !u || !h)) return this;
        } else return n ? this.extend(K(n) || ae(n)) : this;
        return (
          !r && !a
            ? ((this._southWest = new re(u.lat, u.lng)),
              (this._northEast = new re(h.lat, h.lng)))
            : ((r.lat = Math.min(u.lat, r.lat)),
              (r.lng = Math.min(u.lng, r.lng)),
              (a.lat = Math.max(h.lat, a.lat)),
              (a.lng = Math.max(h.lng, a.lng))),
          this
        );
      },
      pad: function (n) {
        var r = this._southWest,
          a = this._northEast,
          u = Math.abs(r.lat - a.lat) * n,
          h = Math.abs(r.lng - a.lng) * n;
        return new Te(
          new re(r.lat - u, r.lng - h),
          new re(a.lat + u, a.lng + h)
        );
      },
      getCenter: function () {
        return new re(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new re(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new re(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (n) {
        typeof n[0] == "number" || n instanceof re || "lat" in n
          ? (n = K(n))
          : (n = ae(n));
        var r = this._southWest,
          a = this._northEast,
          u,
          h;
        return (
          n instanceof Te
            ? ((u = n.getSouthWest()), (h = n.getNorthEast()))
            : (u = h = n),
          u.lat >= r.lat && h.lat <= a.lat && u.lng >= r.lng && h.lng <= a.lng
        );
      },
      intersects: function (n) {
        n = ae(n);
        var r = this._southWest,
          a = this._northEast,
          u = n.getSouthWest(),
          h = n.getNorthEast(),
          p = h.lat >= r.lat && u.lat <= a.lat,
          w = h.lng >= r.lng && u.lng <= a.lng;
        return p && w;
      },
      overlaps: function (n) {
        n = ae(n);
        var r = this._southWest,
          a = this._northEast,
          u = n.getSouthWest(),
          h = n.getNorthEast(),
          p = h.lat > r.lat && u.lat < a.lat,
          w = h.lng > r.lng && u.lng < a.lng;
        return p && w;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (n, r) {
        return n
          ? ((n = ae(n)),
            this._southWest.equals(n.getSouthWest(), r) &&
              this._northEast.equals(n.getNorthEast(), r))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function ae(n, r) {
      return n instanceof Te ? n : new Te(n, r);
    }
    function re(n, r, a) {
      if (isNaN(n) || isNaN(r))
        throw new Error("Invalid LatLng object: (" + n + ", " + r + ")");
      (this.lat = +n), (this.lng = +r), a !== void 0 && (this.alt = +a);
    }
    re.prototype = {
      equals: function (n, r) {
        if (!n) return !1;
        n = K(n);
        var a = Math.max(
          Math.abs(this.lat - n.lat),
          Math.abs(this.lng - n.lng)
        );
        return a <= (r === void 0 ? 1e-9 : r);
      },
      toString: function (n) {
        return "LatLng(" + E(this.lat, n) + ", " + E(this.lng, n) + ")";
      },
      distanceTo: function (n) {
        return rn.distance(this, K(n));
      },
      wrap: function () {
        return rn.wrapLatLng(this);
      },
      toBounds: function (n) {
        var r = (180 * n) / 40075017,
          a = r / Math.cos((Math.PI / 180) * this.lat);
        return ae([this.lat - r, this.lng - a], [this.lat + r, this.lng + a]);
      },
      clone: function () {
        return new re(this.lat, this.lng, this.alt);
      },
    };
    function K(n, r, a) {
      return n instanceof re
        ? n
        : k(n) && typeof n[0] != "object"
        ? n.length === 3
          ? new re(n[0], n[1], n[2])
          : n.length === 2
          ? new re(n[0], n[1])
          : null
        : n == null
        ? n
        : typeof n == "object" && "lat" in n
        ? new re(n.lat, "lng" in n ? n.lng : n.lon, n.alt)
        : r === void 0
        ? null
        : new re(n, r, a);
    }
    var Ge = {
        latLngToPoint: function (n, r) {
          var a = this.projection.project(n),
            u = this.scale(r);
          return this.transformation._transform(a, u);
        },
        pointToLatLng: function (n, r) {
          var a = this.scale(r),
            u = this.transformation.untransform(n, a);
          return this.projection.unproject(u);
        },
        project: function (n) {
          return this.projection.project(n);
        },
        unproject: function (n) {
          return this.projection.unproject(n);
        },
        scale: function (n) {
          return 256 * Math.pow(2, n);
        },
        zoom: function (n) {
          return Math.log(n / 256) / Math.LN2;
        },
        getProjectedBounds: function (n) {
          if (this.infinite) return null;
          var r = this.projection.bounds,
            a = this.scale(n),
            u = this.transformation.transform(r.min, a),
            h = this.transformation.transform(r.max, a);
          return new V(u, h);
        },
        infinite: !1,
        wrapLatLng: function (n) {
          var r = this.wrapLng ? g(n.lng, this.wrapLng, !0) : n.lng,
            a = this.wrapLat ? g(n.lat, this.wrapLat, !0) : n.lat,
            u = n.alt;
          return new re(a, r, u);
        },
        wrapLatLngBounds: function (n) {
          var r = n.getCenter(),
            a = this.wrapLatLng(r),
            u = r.lat - a.lat,
            h = r.lng - a.lng;
          if (u === 0 && h === 0) return n;
          var p = n.getSouthWest(),
            w = n.getNorthEast(),
            T = new re(p.lat - u, p.lng - h),
            O = new re(w.lat - u, w.lng - h);
          return new Te(T, O);
        },
      },
      rn = s({}, Ge, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (n, r) {
          var a = Math.PI / 180,
            u = n.lat * a,
            h = r.lat * a,
            p = Math.sin(((r.lat - n.lat) * a) / 2),
            w = Math.sin(((r.lng - n.lng) * a) / 2),
            T = p * p + Math.cos(u) * Math.cos(h) * w * w,
            O = 2 * Math.atan2(Math.sqrt(T), Math.sqrt(1 - T));
          return this.R * O;
        },
      }),
      vc = 6378137,
      Ks = {
        R: vc,
        MAX_LATITUDE: 85.0511287798,
        project: function (n) {
          var r = Math.PI / 180,
            a = this.MAX_LATITUDE,
            u = Math.max(Math.min(a, n.lat), -a),
            h = Math.sin(u * r);
          return new R(
            this.R * n.lng * r,
            (this.R * Math.log((1 + h) / (1 - h))) / 2
          );
        },
        unproject: function (n) {
          var r = 180 / Math.PI;
          return new re(
            (2 * Math.atan(Math.exp(n.y / this.R)) - Math.PI / 2) * r,
            (n.x * r) / this.R
          );
        },
        bounds: (function () {
          var n = vc * Math.PI;
          return new V([-n, -n], [n, n]);
        })(),
      };
    function Gs(n, r, a, u) {
      if (k(n)) {
        (this._a = n[0]), (this._b = n[1]), (this._c = n[2]), (this._d = n[3]);
        return;
      }
      (this._a = n), (this._b = r), (this._c = a), (this._d = u);
    }
    Gs.prototype = {
      transform: function (n, r) {
        return this._transform(n.clone(), r);
      },
      _transform: function (n, r) {
        return (
          (r = r || 1),
          (n.x = r * (this._a * n.x + this._b)),
          (n.y = r * (this._c * n.y + this._d)),
          n
        );
      },
      untransform: function (n, r) {
        return (
          (r = r || 1),
          new R((n.x / r - this._b) / this._a, (n.y / r - this._d) / this._c)
        );
      },
    };
    function Zi(n, r, a, u) {
      return new Gs(n, r, a, u);
    }
    var Qs = s({}, rn, {
        code: "EPSG:3857",
        projection: Ks,
        transformation: (function () {
          var n = 0.5 / (Math.PI * Ks.R);
          return Zi(n, 0.5, -n, 0.5);
        })(),
      }),
      n_ = s({}, Qs, { code: "EPSG:900913" });
    function gc(n) {
      return document.createElementNS("http://www.w3.org/2000/svg", n);
    }
    function yc(n, r) {
      var a = "",
        u,
        h,
        p,
        w,
        T,
        O;
      for (u = 0, p = n.length; u < p; u++) {
        for (T = n[u], h = 0, w = T.length; h < w; h++)
          (O = T[h]), (a += (h ? "L" : "M") + O.x + " " + O.y);
        a += r ? (W.svg ? "z" : "x") : "";
      }
      return a || "M0 0";
    }
    var Js = document.documentElement.style,
      Jr = "ActiveXObject" in window,
      i_ = Jr && !document.addEventListener,
      wc = "msLaunchUri" in navigator && !("documentMode" in document),
      Xs = Nt("webkit"),
      xc = Nt("android"),
      Sc = Nt("android 2") || Nt("android 3"),
      r_ = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      o_ = xc && Nt("Google") && r_ < 537 && !("AudioNode" in window),
      Ys = !!window.opera,
      Pc = !wc && Nt("chrome"),
      Ec = Nt("gecko") && !Xs && !Ys && !Jr,
      s_ = !Pc && Nt("safari"),
      Lc = Nt("phantom"),
      kc = "OTransition" in Js,
      a_ = navigator.platform.indexOf("Win") === 0,
      Cc = Jr && "transition" in Js,
      ea =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !Sc,
      Tc = "MozPerspective" in Js,
      l_ = !window.L_DISABLE_3D && (Cc || ea || Tc) && !kc && !Lc,
      Ui = typeof orientation < "u" || Nt("mobile"),
      u_ = Ui && Xs,
      c_ = Ui && ea,
      Oc = !window.PointerEvent && window.MSPointerEvent,
      Nc = !!(window.PointerEvent || Oc),
      zc = "ontouchstart" in window || !!window.TouchEvent,
      h_ = !window.L_NO_TOUCH && (zc || Nc),
      d_ = Ui && Ys,
      f_ = Ui && Ec,
      p_ =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      m_ = (function () {
        var n = !1;
        try {
          var r = Object.defineProperty({}, "passive", {
            get: function () {
              n = !0;
            },
          });
          window.addEventListener("testPassiveEventSupport", _, r),
            window.removeEventListener("testPassiveEventSupport", _, r);
        } catch {}
        return n;
      })(),
      __ = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      ta = !!(document.createElementNS && gc("svg").createSVGRect),
      v_ =
        !!ta &&
        (function () {
          var n = document.createElement("div");
          return (
            (n.innerHTML = "<svg/>"),
            (n.firstChild && n.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      g_ =
        !ta &&
        (function () {
          try {
            var n = document.createElement("div");
            n.innerHTML = '<v:shape adj="1"/>';
            var r = n.firstChild;
            return (
              (r.style.behavior = "url(#default#VML)"),
              r && typeof r.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      y_ = navigator.platform.indexOf("Mac") === 0,
      w_ = navigator.platform.indexOf("Linux") === 0;
    function Nt(n) {
      return navigator.userAgent.toLowerCase().indexOf(n) >= 0;
    }
    var W = {
        ie: Jr,
        ielt9: i_,
        edge: wc,
        webkit: Xs,
        android: xc,
        android23: Sc,
        androidStock: o_,
        opera: Ys,
        chrome: Pc,
        gecko: Ec,
        safari: s_,
        phantom: Lc,
        opera12: kc,
        win: a_,
        ie3d: Cc,
        webkit3d: ea,
        gecko3d: Tc,
        any3d: l_,
        mobile: Ui,
        mobileWebkit: u_,
        mobileWebkit3d: c_,
        msPointer: Oc,
        pointer: Nc,
        touch: h_,
        touchNative: zc,
        mobileOpera: d_,
        mobileGecko: f_,
        retina: p_,
        passiveEvents: m_,
        canvas: __,
        svg: ta,
        vml: g_,
        inlineSvg: v_,
        mac: y_,
        linux: w_,
      },
      Mc = W.msPointer ? "MSPointerDown" : "pointerdown",
      Rc = W.msPointer ? "MSPointerMove" : "pointermove",
      Ic = W.msPointer ? "MSPointerUp" : "pointerup",
      Ac = W.msPointer ? "MSPointerCancel" : "pointercancel",
      na = { touchstart: Mc, touchmove: Rc, touchend: Ic, touchcancel: Ac },
      jc = { touchstart: k_, touchmove: Xr, touchend: Xr, touchcancel: Xr },
      Jn = {},
      Bc = !1;
    function x_(n, r, a) {
      return (
        r === "touchstart" && L_(),
        jc[r]
          ? ((a = jc[r].bind(this, a)), n.addEventListener(na[r], a, !1), a)
          : (console.warn("wrong event specified:", r), _)
      );
    }
    function S_(n, r, a) {
      if (!na[r]) {
        console.warn("wrong event specified:", r);
        return;
      }
      n.removeEventListener(na[r], a, !1);
    }
    function P_(n) {
      Jn[n.pointerId] = n;
    }
    function E_(n) {
      Jn[n.pointerId] && (Jn[n.pointerId] = n);
    }
    function Dc(n) {
      delete Jn[n.pointerId];
    }
    function L_() {
      Bc ||
        (document.addEventListener(Mc, P_, !0),
        document.addEventListener(Rc, E_, !0),
        document.addEventListener(Ic, Dc, !0),
        document.addEventListener(Ac, Dc, !0),
        (Bc = !0));
    }
    function Xr(n, r) {
      if (r.pointerType !== (r.MSPOINTER_TYPE_MOUSE || "mouse")) {
        r.touches = [];
        for (var a in Jn) r.touches.push(Jn[a]);
        (r.changedTouches = [r]), n(r);
      }
    }
    function k_(n, r) {
      r.MSPOINTER_TYPE_TOUCH &&
        r.pointerType === r.MSPOINTER_TYPE_TOUCH &&
        je(r),
        Xr(n, r);
    }
    function C_(n) {
      var r = {},
        a,
        u;
      for (u in n) (a = n[u]), (r[u] = a && a.bind ? a.bind(n) : a);
      return (
        (n = r),
        (r.type = "dblclick"),
        (r.detail = 2),
        (r.isTrusted = !1),
        (r._simulated = !0),
        r
      );
    }
    var T_ = 200;
    function O_(n, r) {
      n.addEventListener("dblclick", r);
      var a = 0,
        u;
      function h(p) {
        if (p.detail !== 1) {
          u = p.detail;
          return;
        }
        if (
          !(
            p.pointerType === "mouse" ||
            (p.sourceCapabilities && !p.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var w = Hc(p);
          if (
            !(
              w.some(function (O) {
                return O instanceof HTMLLabelElement && O.attributes.for;
              }) &&
              !w.some(function (O) {
                return (
                  O instanceof HTMLInputElement ||
                  O instanceof HTMLSelectElement
                );
              })
            )
          ) {
            var T = Date.now();
            T - a <= T_ ? (u++, u === 2 && r(C_(p))) : (u = 1), (a = T);
          }
        }
      }
      return n.addEventListener("click", h), { dblclick: r, simDblclick: h };
    }
    function N_(n, r) {
      n.removeEventListener("dblclick", r.dblclick),
        n.removeEventListener("click", r.simDblclick);
    }
    var ia = to([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      bi = to([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      Fc =
        bi === "webkitTransition" || bi === "OTransition"
          ? bi + "End"
          : "transitionend";
    function Zc(n) {
      return typeof n == "string" ? document.getElementById(n) : n;
    }
    function Hi(n, r) {
      var a = n.style[r] || (n.currentStyle && n.currentStyle[r]);
      if ((!a || a === "auto") && document.defaultView) {
        var u = document.defaultView.getComputedStyle(n, null);
        a = u ? u[r] : null;
      }
      return a === "auto" ? null : a;
    }
    function oe(n, r, a) {
      var u = document.createElement(n);
      return (u.className = r || ""), a && a.appendChild(u), u;
    }
    function me(n) {
      var r = n.parentNode;
      r && r.removeChild(n);
    }
    function Yr(n) {
      for (; n.firstChild; ) n.removeChild(n.firstChild);
    }
    function Xn(n) {
      var r = n.parentNode;
      r && r.lastChild !== n && r.appendChild(n);
    }
    function Yn(n) {
      var r = n.parentNode;
      r && r.firstChild !== n && r.insertBefore(n, r.firstChild);
    }
    function ra(n, r) {
      if (n.classList !== void 0) return n.classList.contains(r);
      var a = eo(n);
      return a.length > 0 && new RegExp("(^|\\s)" + r + "(\\s|$)").test(a);
    }
    function Q(n, r) {
      if (n.classList !== void 0)
        for (var a = S(r), u = 0, h = a.length; u < h; u++)
          n.classList.add(a[u]);
      else if (!ra(n, r)) {
        var p = eo(n);
        oa(n, (p ? p + " " : "") + r);
      }
    }
    function xe(n, r) {
      n.classList !== void 0
        ? n.classList.remove(r)
        : oa(n, C((" " + eo(n) + " ").replace(" " + r + " ", " ")));
    }
    function oa(n, r) {
      n.className.baseVal === void 0
        ? (n.className = r)
        : (n.className.baseVal = r);
    }
    function eo(n) {
      return (
        n.correspondingElement && (n = n.correspondingElement),
        n.className.baseVal === void 0 ? n.className : n.className.baseVal
      );
    }
    function ht(n, r) {
      "opacity" in n.style
        ? (n.style.opacity = r)
        : "filter" in n.style && z_(n, r);
    }
    function z_(n, r) {
      var a = !1,
        u = "DXImageTransform.Microsoft.Alpha";
      try {
        a = n.filters.item(u);
      } catch {
        if (r === 1) return;
      }
      (r = Math.round(r * 100)),
        a
          ? ((a.Enabled = r !== 100), (a.Opacity = r))
          : (n.style.filter += " progid:" + u + "(opacity=" + r + ")");
    }
    function to(n) {
      for (var r = document.documentElement.style, a = 0; a < n.length; a++)
        if (n[a] in r) return n[a];
      return !1;
    }
    function Mn(n, r, a) {
      var u = r || new R(0, 0);
      n.style[ia] =
        (W.ie3d
          ? "translate(" + u.x + "px," + u.y + "px)"
          : "translate3d(" + u.x + "px," + u.y + "px,0)") +
        (a ? " scale(" + a + ")" : "");
    }
    function Pe(n, r) {
      (n._leaflet_pos = r),
        W.any3d
          ? Mn(n, r)
          : ((n.style.left = r.x + "px"), (n.style.top = r.y + "px"));
    }
    function Rn(n) {
      return n._leaflet_pos || new R(0, 0);
    }
    var Wi, $i, sa;
    if ("onselectstart" in document)
      (Wi = function () {
        G(window, "selectstart", je);
      }),
        ($i = function () {
          ue(window, "selectstart", je);
        });
    else {
      var Vi = to([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      (Wi = function () {
        if (Vi) {
          var n = document.documentElement.style;
          (sa = n[Vi]), (n[Vi] = "none");
        }
      }),
        ($i = function () {
          Vi && ((document.documentElement.style[Vi] = sa), (sa = void 0));
        });
    }
    function aa() {
      G(window, "dragstart", je);
    }
    function la() {
      ue(window, "dragstart", je);
    }
    var no, ua;
    function ca(n) {
      for (; n.tabIndex === -1; ) n = n.parentNode;
      n.style &&
        (io(),
        (no = n),
        (ua = n.style.outlineStyle),
        (n.style.outlineStyle = "none"),
        G(window, "keydown", io));
    }
    function io() {
      no &&
        ((no.style.outlineStyle = ua),
        (no = void 0),
        (ua = void 0),
        ue(window, "keydown", io));
    }
    function Uc(n) {
      do n = n.parentNode;
      while ((!n.offsetWidth || !n.offsetHeight) && n !== document.body);
      return n;
    }
    function ha(n) {
      var r = n.getBoundingClientRect();
      return {
        x: r.width / n.offsetWidth || 1,
        y: r.height / n.offsetHeight || 1,
        boundingClientRect: r,
      };
    }
    var M_ = {
      __proto__: null,
      TRANSFORM: ia,
      TRANSITION: bi,
      TRANSITION_END: Fc,
      get: Zc,
      getStyle: Hi,
      create: oe,
      remove: me,
      empty: Yr,
      toFront: Xn,
      toBack: Yn,
      hasClass: ra,
      addClass: Q,
      removeClass: xe,
      setClass: oa,
      getClass: eo,
      setOpacity: ht,
      testProp: to,
      setTransform: Mn,
      setPosition: Pe,
      getPosition: Rn,
      get disableTextSelection() {
        return Wi;
      },
      get enableTextSelection() {
        return $i;
      },
      disableImageDrag: aa,
      enableImageDrag: la,
      preventOutline: ca,
      restoreOutline: io,
      getSizedParentNode: Uc,
      getScale: ha,
    };
    function G(n, r, a, u) {
      if (r && typeof r == "object") for (var h in r) fa(n, h, r[h], a);
      else {
        r = S(r);
        for (var p = 0, w = r.length; p < w; p++) fa(n, r[p], a, u);
      }
      return this;
    }
    var zt = "_leaflet_events";
    function ue(n, r, a, u) {
      if (arguments.length === 1) bc(n), delete n[zt];
      else if (r && typeof r == "object") for (var h in r) pa(n, h, r[h], a);
      else if (((r = S(r)), arguments.length === 2))
        bc(n, function (T) {
          return M(r, T) !== -1;
        });
      else for (var p = 0, w = r.length; p < w; p++) pa(n, r[p], a, u);
      return this;
    }
    function bc(n, r) {
      for (var a in n[zt]) {
        var u = a.split(/\d/)[0];
        (!r || r(u)) && pa(n, u, null, null, a);
      }
    }
    var da = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function fa(n, r, a, u) {
      var h = r + f(a) + (u ? "_" + f(u) : "");
      if (n[zt] && n[zt][h]) return this;
      var p = function (T) {
          return a.call(u || n, T || window.event);
        },
        w = p;
      !W.touchNative && W.pointer && r.indexOf("touch") === 0
        ? (p = x_(n, r, p))
        : W.touch && r === "dblclick"
        ? (p = O_(n, p))
        : "addEventListener" in n
        ? r === "touchstart" ||
          r === "touchmove" ||
          r === "wheel" ||
          r === "mousewheel"
          ? n.addEventListener(
              da[r] || r,
              p,
              W.passiveEvents ? { passive: !1 } : !1
            )
          : r === "mouseenter" || r === "mouseleave"
          ? ((p = function (T) {
              (T = T || window.event), _a(n, T) && w(T);
            }),
            n.addEventListener(da[r], p, !1))
          : n.addEventListener(r, w, !1)
        : n.attachEvent("on" + r, p),
        (n[zt] = n[zt] || {}),
        (n[zt][h] = p);
    }
    function pa(n, r, a, u, h) {
      h = h || r + f(a) + (u ? "_" + f(u) : "");
      var p = n[zt] && n[zt][h];
      if (!p) return this;
      !W.touchNative && W.pointer && r.indexOf("touch") === 0
        ? S_(n, r, p)
        : W.touch && r === "dblclick"
        ? N_(n, p)
        : "removeEventListener" in n
        ? n.removeEventListener(da[r] || r, p, !1)
        : n.detachEvent("on" + r, p),
        (n[zt][h] = null);
    }
    function In(n) {
      return (
        n.stopPropagation
          ? n.stopPropagation()
          : n.originalEvent
          ? (n.originalEvent._stopped = !0)
          : (n.cancelBubble = !0),
        this
      );
    }
    function ma(n) {
      return fa(n, "wheel", In), this;
    }
    function qi(n) {
      return (
        G(n, "mousedown touchstart dblclick contextmenu", In),
        (n._leaflet_disable_click = !0),
        this
      );
    }
    function je(n) {
      return n.preventDefault ? n.preventDefault() : (n.returnValue = !1), this;
    }
    function An(n) {
      return je(n), In(n), this;
    }
    function Hc(n) {
      if (n.composedPath) return n.composedPath();
      for (var r = [], a = n.target; a; ) r.push(a), (a = a.parentNode);
      return r;
    }
    function Wc(n, r) {
      if (!r) return new R(n.clientX, n.clientY);
      var a = ha(r),
        u = a.boundingClientRect;
      return new R(
        (n.clientX - u.left) / a.x - r.clientLeft,
        (n.clientY - u.top) / a.y - r.clientTop
      );
    }
    var R_ =
      W.linux && W.chrome
        ? window.devicePixelRatio
        : W.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function $c(n) {
      return W.edge
        ? n.wheelDeltaY / 2
        : n.deltaY && n.deltaMode === 0
        ? -n.deltaY / R_
        : n.deltaY && n.deltaMode === 1
        ? -n.deltaY * 20
        : n.deltaY && n.deltaMode === 2
        ? -n.deltaY * 60
        : n.deltaX || n.deltaZ
        ? 0
        : n.wheelDelta
        ? (n.wheelDeltaY || n.wheelDelta) / 2
        : n.detail && Math.abs(n.detail) < 32765
        ? -n.detail * 20
        : n.detail
        ? (n.detail / -32765) * 60
        : 0;
    }
    function _a(n, r) {
      var a = r.relatedTarget;
      if (!a) return !0;
      try {
        for (; a && a !== n; ) a = a.parentNode;
      } catch {
        return !1;
      }
      return a !== n;
    }
    var I_ = {
        __proto__: null,
        on: G,
        off: ue,
        stopPropagation: In,
        disableScrollPropagation: ma,
        disableClickPropagation: qi,
        preventDefault: je,
        stop: An,
        getPropagationPath: Hc,
        getMousePosition: Wc,
        getWheelDelta: $c,
        isExternalTarget: _a,
        addListener: G,
        removeListener: ue,
      },
      Vc = Ut.extend({
        run: function (n, r, a, u) {
          this.stop(),
            (this._el = n),
            (this._inProgress = !0),
            (this._duration = a || 0.25),
            (this._easeOutPower = 1 / Math.max(u || 0.5, 0.2)),
            (this._startPos = Rn(n)),
            (this._offset = r.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = le(this._animate, this)), this._step();
        },
        _step: function (n) {
          var r = +new Date() - this._startTime,
            a = this._duration * 1e3;
          r < a
            ? this._runFrame(this._easeOut(r / a), n)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (n, r) {
          var a = this._startPos.add(this._offset.multiplyBy(n));
          r && a._round(), Pe(this._el, a), this.fire("step");
        },
        _complete: function () {
          ze(this._animId), (this._inProgress = !1), this.fire("end");
        },
        _easeOut: function (n) {
          return 1 - Math.pow(1 - n, this._easeOutPower);
        },
      }),
      ee = Ut.extend({
        options: {
          crs: Qs,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (n, r) {
          (r = x(this, r)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(n),
            this._initLayout(),
            (this._onResize = c(this._onResize, this)),
            this._initEvents(),
            r.maxBounds && this.setMaxBounds(r.maxBounds),
            r.zoom !== void 0 && (this._zoom = this._limitZoom(r.zoom)),
            r.center &&
              r.zoom !== void 0 &&
              this.setView(K(r.center), r.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              bi && W.any3d && !W.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              G(this._proxy, Fc, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (n, r, a) {
          if (
            ((r = r === void 0 ? this._zoom : this._limitZoom(r)),
            (n = this._limitCenter(K(n), r, this.options.maxBounds)),
            (a = a || {}),
            this._stop(),
            this._loaded && !a.reset && a !== !0)
          ) {
            a.animate !== void 0 &&
              ((a.zoom = s({ animate: a.animate }, a.zoom)),
              (a.pan = s({ animate: a.animate, duration: a.duration }, a.pan)));
            var u =
              this._zoom !== r
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(n, r, a.zoom)
                : this._tryAnimatedPan(n, a.pan);
            if (u) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(n, r, a.pan && a.pan.noMoveStart), this;
        },
        setZoom: function (n, r) {
          return this._loaded
            ? this.setView(this.getCenter(), n, { zoom: r })
            : ((this._zoom = n), this);
        },
        zoomIn: function (n, r) {
          return (
            (n = n || (W.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + n, r)
          );
        },
        zoomOut: function (n, r) {
          return (
            (n = n || (W.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - n, r)
          );
        },
        setZoomAround: function (n, r, a) {
          var u = this.getZoomScale(r),
            h = this.getSize().divideBy(2),
            p = n instanceof R ? n : this.latLngToContainerPoint(n),
            w = p.subtract(h).multiplyBy(1 - 1 / u),
            T = this.containerPointToLatLng(h.add(w));
          return this.setView(T, r, { zoom: a });
        },
        _getBoundsCenterZoom: function (n, r) {
          (r = r || {}), (n = n.getBounds ? n.getBounds() : ae(n));
          var a = B(r.paddingTopLeft || r.padding || [0, 0]),
            u = B(r.paddingBottomRight || r.padding || [0, 0]),
            h = this.getBoundsZoom(n, !1, a.add(u));
          if (
            ((h = typeof r.maxZoom == "number" ? Math.min(r.maxZoom, h) : h),
            h === 1 / 0)
          )
            return { center: n.getCenter(), zoom: h };
          var p = u.subtract(a).divideBy(2),
            w = this.project(n.getSouthWest(), h),
            T = this.project(n.getNorthEast(), h),
            O = this.unproject(w.add(T).divideBy(2).add(p), h);
          return { center: O, zoom: h };
        },
        fitBounds: function (n, r) {
          if (((n = ae(n)), !n.isValid()))
            throw new Error("Bounds are not valid.");
          var a = this._getBoundsCenterZoom(n, r);
          return this.setView(a.center, a.zoom, r);
        },
        fitWorld: function (n) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            n
          );
        },
        panTo: function (n, r) {
          return this.setView(n, this._zoom, { pan: r });
        },
        panBy: function (n, r) {
          if (((n = B(n).round()), (r = r || {}), !n.x && !n.y))
            return this.fire("moveend");
          if (r.animate !== !0 && !this.getSize().contains(n))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(n)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Vc()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this
              )),
            r.noMoveStart || this.fire("movestart"),
            r.animate !== !1)
          ) {
            Q(this._mapPane, "leaflet-pan-anim");
            var a = this._getMapPanePos().subtract(n).round();
            this._panAnim.run(
              this._mapPane,
              a,
              r.duration || 0.25,
              r.easeLinearity
            );
          } else this._rawPanBy(n), this.fire("move").fire("moveend");
          return this;
        },
        flyTo: function (n, r, a) {
          if (((a = a || {}), a.animate === !1 || !W.any3d))
            return this.setView(n, r, a);
          this._stop();
          var u = this.project(this.getCenter()),
            h = this.project(n),
            p = this.getSize(),
            w = this._zoom;
          (n = K(n)), (r = r === void 0 ? w : r);
          var T = Math.max(p.x, p.y),
            O = T * this.getZoomScale(w, r),
            I = h.distanceTo(u) || 1,
            F = 1.42,
            $ = F * F;
          function X(Ee) {
            var _o = Ee ? -1 : 1,
              Sv = Ee ? O : T,
              Pv = O * O - T * T + _o * $ * $ * I * I,
              Ev = 2 * Sv * $ * I,
              Ca = Pv / Ev,
              kh = Math.sqrt(Ca * Ca + 1) - Ca,
              Lv = kh < 1e-9 ? -18 : Math.log(kh);
            return Lv;
          }
          function We(Ee) {
            return (Math.exp(Ee) - Math.exp(-Ee)) / 2;
          }
          function Me(Ee) {
            return (Math.exp(Ee) + Math.exp(-Ee)) / 2;
          }
          function ft(Ee) {
            return We(Ee) / Me(Ee);
          }
          var Qe = X(0);
          function oi(Ee) {
            return T * (Me(Qe) / Me(Qe + F * Ee));
          }
          function gv(Ee) {
            return (T * (Me(Qe) * ft(Qe + F * Ee) - We(Qe))) / $;
          }
          function yv(Ee) {
            return 1 - Math.pow(1 - Ee, 1.5);
          }
          var wv = Date.now(),
            Eh = (X(1) - Qe) / F,
            xv = a.duration ? 1e3 * a.duration : 1e3 * Eh * 0.8;
          function Lh() {
            var Ee = (Date.now() - wv) / xv,
              _o = yv(Ee) * Eh;
            Ee <= 1
              ? ((this._flyToFrame = le(Lh, this)),
                this._move(
                  this.unproject(
                    u.add(h.subtract(u).multiplyBy(gv(_o) / I)),
                    w
                  ),
                  this.getScaleZoom(T / oi(_o), w),
                  { flyTo: !0 }
                ))
              : this._move(n, r)._moveEnd(!0);
          }
          return this._moveStart(!0, a.noMoveStart), Lh.call(this), this;
        },
        flyToBounds: function (n, r) {
          var a = this._getBoundsCenterZoom(n, r);
          return this.flyTo(a.center, a.zoom, r);
        },
        setMaxBounds: function (n) {
          return (
            (n = ae(n)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            n.isValid()
              ? ((this.options.maxBounds = n),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (n) {
          var r = this.options.minZoom;
          return (
            (this.options.minZoom = n),
            this._loaded &&
            r !== n &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(n)
              : this
          );
        },
        setMaxZoom: function (n) {
          var r = this.options.maxZoom;
          return (
            (this.options.maxZoom = n),
            this._loaded &&
            r !== n &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(n)
              : this
          );
        },
        panInsideBounds: function (n, r) {
          this._enforcingBounds = !0;
          var a = this.getCenter(),
            u = this._limitCenter(a, this._zoom, ae(n));
          return (
            a.equals(u) || this.panTo(u, r), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (n, r) {
          r = r || {};
          var a = B(r.paddingTopLeft || r.padding || [0, 0]),
            u = B(r.paddingBottomRight || r.padding || [0, 0]),
            h = this.project(this.getCenter()),
            p = this.project(n),
            w = this.getPixelBounds(),
            T = ne([w.min.add(a), w.max.subtract(u)]),
            O = T.getSize();
          if (!T.contains(p)) {
            this._enforcingBounds = !0;
            var I = p.subtract(T.getCenter()),
              F = T.extend(p).getSize().subtract(O);
            (h.x += I.x < 0 ? -F.x : F.x),
              (h.y += I.y < 0 ? -F.y : F.y),
              this.panTo(this.unproject(h), r),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (n) {
          if (!this._loaded) return this;
          n = s({ animate: !1, pan: !0 }, n === !0 ? { animate: !0 } : n);
          var r = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var a = this.getSize(),
            u = r.divideBy(2).round(),
            h = a.divideBy(2).round(),
            p = u.subtract(h);
          return !p.x && !p.y
            ? this
            : (n.animate && n.pan
                ? this.panBy(p)
                : (n.pan && this._rawPanBy(p),
                  this.fire("move"),
                  n.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        c(this.fire, this, "moveend"),
                        200
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: r, newSize: a }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (n) {
          if (
            ((n = this._locateOptions = s({ timeout: 1e4, watch: !1 }, n)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var r = c(this._handleGeolocationResponse, this),
            a = c(this._handleGeolocationError, this);
          return (
            n.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  r,
                  a,
                  n
                ))
              : navigator.geolocation.getCurrentPosition(r, a, n),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (n) {
          if (this._container._leaflet_id) {
            var r = n.code,
              a =
                n.message ||
                (r === 1
                  ? "permission denied"
                  : r === 2
                  ? "position unavailable"
                  : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: r,
                message: "Geolocation error: " + a + ".",
              });
          }
        },
        _handleGeolocationResponse: function (n) {
          if (this._container._leaflet_id) {
            var r = n.coords.latitude,
              a = n.coords.longitude,
              u = new re(r, a),
              h = u.toBounds(n.coords.accuracy * 2),
              p = this._locateOptions;
            if (p.setView) {
              var w = this.getBoundsZoom(h);
              this.setView(u, p.maxZoom ? Math.min(w, p.maxZoom) : w);
            }
            var T = { latlng: u, bounds: h, timestamp: n.timestamp };
            for (var O in n.coords)
              typeof n.coords[O] == "number" && (T[O] = n.coords[O]);
            this.fire("locationfound", T);
          }
        },
        addHandler: function (n, r) {
          if (!r) return this;
          var a = (this[n] = new r(this));
          return this._handlers.push(a), this.options[n] && a.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance"
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            me(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (ze(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload");
          var n;
          for (n in this._layers) this._layers[n].remove();
          for (n in this._panes) me(this._panes[n]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (n, r) {
          var a =
              "leaflet-pane" +
              (n ? " leaflet-" + n.replace("Pane", "") + "-pane" : ""),
            u = oe("div", a, r || this._mapPane);
          return n && (this._panes[n] = u), u;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var n = this.getPixelBounds(),
            r = this.unproject(n.getBottomLeft()),
            a = this.unproject(n.getTopRight());
          return new Te(r, a);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (n, r, a) {
          (n = ae(n)), (a = B(a || [0, 0]));
          var u = this.getZoom() || 0,
            h = this.getMinZoom(),
            p = this.getMaxZoom(),
            w = n.getNorthWest(),
            T = n.getSouthEast(),
            O = this.getSize().subtract(a),
            I = ne(this.project(T, u), this.project(w, u)).getSize(),
            F = W.any3d ? this.options.zoomSnap : 1,
            $ = O.x / I.x,
            X = O.y / I.y,
            We = r ? Math.max($, X) : Math.min($, X);
          return (
            (u = this.getScaleZoom(We, u)),
            F &&
              ((u = Math.round(u / (F / 100)) * (F / 100)),
              (u = r ? Math.ceil(u / F) * F : Math.floor(u / F) * F)),
            Math.max(h, Math.min(p, u))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new R(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (n, r) {
          var a = this._getTopLeftPoint(n, r);
          return new V(a, a.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (n) {
          return this.options.crs.getProjectedBounds(
            n === void 0 ? this.getZoom() : n
          );
        },
        getPane: function (n) {
          return typeof n == "string" ? this._panes[n] : n;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (n, r) {
          var a = this.options.crs;
          return (r = r === void 0 ? this._zoom : r), a.scale(n) / a.scale(r);
        },
        getScaleZoom: function (n, r) {
          var a = this.options.crs;
          r = r === void 0 ? this._zoom : r;
          var u = a.zoom(n * a.scale(r));
          return isNaN(u) ? 1 / 0 : u;
        },
        project: function (n, r) {
          return (
            (r = r === void 0 ? this._zoom : r),
            this.options.crs.latLngToPoint(K(n), r)
          );
        },
        unproject: function (n, r) {
          return (
            (r = r === void 0 ? this._zoom : r),
            this.options.crs.pointToLatLng(B(n), r)
          );
        },
        layerPointToLatLng: function (n) {
          var r = B(n).add(this.getPixelOrigin());
          return this.unproject(r);
        },
        latLngToLayerPoint: function (n) {
          var r = this.project(K(n))._round();
          return r._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (n) {
          return this.options.crs.wrapLatLng(K(n));
        },
        wrapLatLngBounds: function (n) {
          return this.options.crs.wrapLatLngBounds(ae(n));
        },
        distance: function (n, r) {
          return this.options.crs.distance(K(n), K(r));
        },
        containerPointToLayerPoint: function (n) {
          return B(n).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (n) {
          return B(n).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (n) {
          var r = this.containerPointToLayerPoint(B(n));
          return this.layerPointToLatLng(r);
        },
        latLngToContainerPoint: function (n) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(K(n)));
        },
        mouseEventToContainerPoint: function (n) {
          return Wc(n, this._container);
        },
        mouseEventToLayerPoint: function (n) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(n)
          );
        },
        mouseEventToLatLng: function (n) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(n));
        },
        _initContainer: function (n) {
          var r = (this._container = Zc(n));
          if (r) {
            if (r._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          G(r, "scroll", this._onScroll, this), (this._containerId = f(r));
        },
        _initLayout: function () {
          var n = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && W.any3d),
            Q(
              n,
              "leaflet-container" +
                (W.touch ? " leaflet-touch" : "") +
                (W.retina ? " leaflet-retina" : "") +
                (W.ielt9 ? " leaflet-oldie" : "") +
                (W.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : "")
            );
          var r = Hi(n, "position");
          r !== "absolute" &&
            r !== "relative" &&
            r !== "fixed" &&
            r !== "sticky" &&
            (n.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var n = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            Pe(this._mapPane, new R(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (Q(n.markerPane, "leaflet-zoom-hide"),
              Q(n.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function (n, r, a) {
          Pe(this._mapPane, new R(0, 0));
          var u = !this._loaded;
          (this._loaded = !0),
            (r = this._limitZoom(r)),
            this.fire("viewprereset");
          var h = this._zoom !== r;
          this._moveStart(h, a)._move(n, r)._moveEnd(h),
            this.fire("viewreset"),
            u && this.fire("load");
        },
        _moveStart: function (n, r) {
          return n && this.fire("zoomstart"), r || this.fire("movestart"), this;
        },
        _move: function (n, r, a, u) {
          r === void 0 && (r = this._zoom);
          var h = this._zoom !== r;
          return (
            (this._zoom = r),
            (this._lastCenter = n),
            (this._pixelOrigin = this._getNewPixelOrigin(n)),
            u
              ? a && a.pinch && this.fire("zoom", a)
              : ((h || (a && a.pinch)) && this.fire("zoom", a),
                this.fire("move", a)),
            this
          );
        },
        _moveEnd: function (n) {
          return n && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function () {
          return (
            ze(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (n) {
          Pe(this._mapPane, this._getMapPanePos().subtract(n));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (n) {
          (this._targets = {}), (this._targets[f(this._container)] = this);
          var r = n ? ue : G;
          r(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              r(window, "resize", this._onResize, this),
            W.any3d &&
              this.options.transform3DLimit &&
              (n ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function () {
          ze(this._resizeRequest),
            (this._resizeRequest = le(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var n = this._getMapPanePos();
          Math.max(Math.abs(n.x), Math.abs(n.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (n, r) {
          for (
            var a = [],
              u,
              h = r === "mouseout" || r === "mouseover",
              p = n.target || n.srcElement,
              w = !1;
            p;

          ) {
            if (
              ((u = this._targets[f(p)]),
              u &&
                (r === "click" || r === "preclick") &&
                this._draggableMoved(u))
            ) {
              w = !0;
              break;
            }
            if (
              (u && u.listens(r, !0) && ((h && !_a(p, n)) || (a.push(u), h))) ||
              p === this._container
            )
              break;
            p = p.parentNode;
          }
          return (
            !a.length && !w && !h && this.listens(r, !0) && (a = [this]), a
          );
        },
        _isClickDisabled: function (n) {
          for (; n && n !== this._container; ) {
            if (n._leaflet_disable_click) return !0;
            n = n.parentNode;
          }
        },
        _handleDOMEvent: function (n) {
          var r = n.target || n.srcElement;
          if (
            !(
              !this._loaded ||
              r._leaflet_disable_events ||
              (n.type === "click" && this._isClickDisabled(r))
            )
          ) {
            var a = n.type;
            a === "mousedown" && ca(r), this._fireDOMEvent(n, a);
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (n, r, a) {
          if (n.type === "click") {
            var u = s({}, n);
            (u.type = "preclick"), this._fireDOMEvent(u, u.type, a);
          }
          var h = this._findEventTargets(n, r);
          if (a) {
            for (var p = [], w = 0; w < a.length; w++)
              a[w].listens(r, !0) && p.push(a[w]);
            h = p.concat(h);
          }
          if (h.length) {
            r === "contextmenu" && je(n);
            var T = h[0],
              O = { originalEvent: n };
            if (
              n.type !== "keypress" &&
              n.type !== "keydown" &&
              n.type !== "keyup"
            ) {
              var I = T.getLatLng && (!T._radius || T._radius <= 10);
              (O.containerPoint = I
                ? this.latLngToContainerPoint(T.getLatLng())
                : this.mouseEventToContainerPoint(n)),
                (O.layerPoint = this.containerPointToLayerPoint(
                  O.containerPoint
                )),
                (O.latlng = I
                  ? T.getLatLng()
                  : this.layerPointToLatLng(O.layerPoint));
            }
            for (w = 0; w < h.length; w++)
              if (
                (h[w].fire(r, O, !0),
                O.originalEvent._stopped ||
                  (h[w].options.bubblingMouseEvents === !1 &&
                    M(this._mouseEvents, r) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (n) {
          return (
            (n = n.dragging && n.dragging.enabled() ? n : this),
            (n.dragging && n.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var n = 0, r = this._handlers.length; n < r; n++)
            this._handlers[n].disable();
        },
        whenReady: function (n, r) {
          return (
            this._loaded
              ? n.call(r || this, { target: this })
              : this.on("load", n, r),
            this
          );
        },
        _getMapPanePos: function () {
          return Rn(this._mapPane) || new R(0, 0);
        },
        _moved: function () {
          var n = this._getMapPanePos();
          return n && !n.equals([0, 0]);
        },
        _getTopLeftPoint: function (n, r) {
          var a =
            n && r !== void 0
              ? this._getNewPixelOrigin(n, r)
              : this.getPixelOrigin();
          return a.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (n, r) {
          var a = this.getSize()._divideBy(2);
          return this.project(n, r)
            ._subtract(a)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (n, r, a) {
          var u = this._getNewPixelOrigin(a, r);
          return this.project(n, r)._subtract(u);
        },
        _latLngBoundsToNewLayerBounds: function (n, r, a) {
          var u = this._getNewPixelOrigin(a, r);
          return ne([
            this.project(n.getSouthWest(), r)._subtract(u),
            this.project(n.getNorthWest(), r)._subtract(u),
            this.project(n.getSouthEast(), r)._subtract(u),
            this.project(n.getNorthEast(), r)._subtract(u),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (n) {
          return this.latLngToLayerPoint(n).subtract(
            this._getCenterLayerPoint()
          );
        },
        _limitCenter: function (n, r, a) {
          if (!a) return n;
          var u = this.project(n, r),
            h = this.getSize().divideBy(2),
            p = new V(u.subtract(h), u.add(h)),
            w = this._getBoundsOffset(p, a, r);
          return Math.abs(w.x) <= 1 && Math.abs(w.y) <= 1
            ? n
            : this.unproject(u.add(w), r);
        },
        _limitOffset: function (n, r) {
          if (!r) return n;
          var a = this.getPixelBounds(),
            u = new V(a.min.add(n), a.max.add(n));
          return n.add(this._getBoundsOffset(u, r));
        },
        _getBoundsOffset: function (n, r, a) {
          var u = ne(
              this.project(r.getNorthEast(), a),
              this.project(r.getSouthWest(), a)
            ),
            h = u.min.subtract(n.min),
            p = u.max.subtract(n.max),
            w = this._rebound(h.x, -p.x),
            T = this._rebound(h.y, -p.y);
          return new R(w, T);
        },
        _rebound: function (n, r) {
          return n + r > 0
            ? Math.round(n - r) / 2
            : Math.max(0, Math.ceil(n)) - Math.max(0, Math.floor(r));
        },
        _limitZoom: function (n) {
          var r = this.getMinZoom(),
            a = this.getMaxZoom(),
            u = W.any3d ? this.options.zoomSnap : 1;
          return u && (n = Math.round(n / u) * u), Math.max(r, Math.min(a, n));
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          xe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function (n, r) {
          var a = this._getCenterOffset(n)._trunc();
          return (r && r.animate) !== !0 && !this.getSize().contains(a)
            ? !1
            : (this.panBy(a, r), !0);
        },
        _createAnimProxy: function () {
          var n = (this._proxy = oe(
            "div",
            "leaflet-proxy leaflet-zoom-animated"
          ));
          this._panes.mapPane.appendChild(n),
            this.on(
              "zoomanim",
              function (r) {
                var a = ia,
                  u = this._proxy.style[a];
                Mn(
                  this._proxy,
                  this.project(r.center, r.zoom),
                  this.getZoomScale(r.zoom, 1)
                ),
                  u === this._proxy.style[a] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          me(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var n = this.getCenter(),
            r = this.getZoom();
          Mn(this._proxy, this.project(n, r), this.getZoomScale(r, 1));
        },
        _catchTransitionEnd: function (n) {
          this._animatingZoom &&
            n.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated"
          ).length;
        },
        _tryAnimatedZoom: function (n, r, a) {
          if (this._animatingZoom) return !0;
          if (
            ((a = a || {}),
            !this._zoomAnimated ||
              a.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(r - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var u = this.getZoomScale(r),
            h = this._getCenterOffset(n)._divideBy(1 - 1 / u);
          return a.animate !== !0 && !this.getSize().contains(h)
            ? !1
            : (le(function () {
                this._moveStart(!0, a.noMoveStart || !1)._animateZoom(n, r, !0);
              }, this),
              !0);
        },
        _animateZoom: function (n, r, a, u) {
          this._mapPane &&
            (a &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = n),
              (this._animateToZoom = r),
              Q(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: n, zoom: r, noUpdate: u }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(c(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && xe(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function A_(n, r) {
      return new ee(n, r);
    }
    var xt = ct.extend({
        options: { position: "topright" },
        initialize: function (n) {
          x(this, n);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (n) {
          var r = this._map;
          return (
            r && r.removeControl(this),
            (this.options.position = n),
            r && r.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (n) {
          this.remove(), (this._map = n);
          var r = (this._container = this.onAdd(n)),
            a = this.getPosition(),
            u = n._controlCorners[a];
          return (
            Q(r, "leaflet-control"),
            a.indexOf("bottom") !== -1
              ? u.insertBefore(r, u.firstChild)
              : u.appendChild(r),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (me(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (n) {
          this._map &&
            n &&
            n.screenX > 0 &&
            n.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      Ki = function (n) {
        return new xt(n);
      };
    ee.include({
      addControl: function (n) {
        return n.addTo(this), this;
      },
      removeControl: function (n) {
        return n.remove(), this;
      },
      _initControlPos: function () {
        var n = (this._controlCorners = {}),
          r = "leaflet-",
          a = (this._controlContainer = oe(
            "div",
            r + "control-container",
            this._container
          ));
        function u(h, p) {
          var w = r + h + " " + r + p;
          n[h + p] = oe("div", w, a);
        }
        u("top", "left"),
          u("top", "right"),
          u("bottom", "left"),
          u("bottom", "right");
      },
      _clearControlPos: function () {
        for (var n in this._controlCorners) me(this._controlCorners[n]);
        me(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var qc = xt.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (n, r, a, u) {
            return a < u ? -1 : u < a ? 1 : 0;
          },
        },
        initialize: function (n, r, a) {
          x(this, a),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1);
          for (var u in n) this._addLayer(n[u], u);
          for (u in r) this._addLayer(r[u], u, !0);
        },
        onAdd: function (n) {
          this._initLayout(),
            this._update(),
            (this._map = n),
            n.on("zoomend", this._checkDisabledLayers, this);
          for (var r = 0; r < this._layers.length; r++)
            this._layers[r].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (n) {
          return xt.prototype.addTo.call(this, n), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var n = 0; n < this._layers.length; n++)
            this._layers[n].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (n, r) {
          return this._addLayer(n, r), this._map ? this._update() : this;
        },
        addOverlay: function (n, r) {
          return this._addLayer(n, r, !0), this._map ? this._update() : this;
        },
        removeLayer: function (n) {
          n.off("add remove", this._onLayerChange, this);
          var r = this._getLayer(f(n));
          return (
            r && this._layers.splice(this._layers.indexOf(r), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          Q(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null);
          var n = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            n < this._section.clientHeight
              ? (Q(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = n + "px"))
              : xe(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return xe(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function () {
          var n = "leaflet-control-layers",
            r = (this._container = oe("div", n)),
            a = this.options.collapsed;
          r.setAttribute("aria-haspopup", !0), qi(r), ma(r);
          var u = (this._section = oe("section", n + "-list"));
          a &&
            (this._map.on("click", this.collapse, this),
            G(
              r,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this
            ));
          var h = (this._layersLink = oe("a", n + "-toggle", r));
          (h.href = "#"),
            (h.title = "Layers"),
            h.setAttribute("role", "button"),
            G(
              h,
              {
                keydown: function (p) {
                  p.keyCode === 13 && this._expandSafely();
                },
                click: function (p) {
                  je(p), this._expandSafely();
                },
              },
              this
            ),
            a || this.expand(),
            (this._baseLayersList = oe("div", n + "-base", u)),
            (this._separator = oe("div", n + "-separator", u)),
            (this._overlaysList = oe("div", n + "-overlays", u)),
            r.appendChild(u);
        },
        _getLayer: function (n) {
          for (var r = 0; r < this._layers.length; r++)
            if (this._layers[r] && f(this._layers[r].layer) === n)
              return this._layers[r];
        },
        _addLayer: function (n, r, a) {
          this._map && n.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: n, name: r, overlay: a }),
            this.options.sortLayers &&
              this._layers.sort(
                c(function (u, h) {
                  return this.options.sortFunction(
                    u.layer,
                    h.layer,
                    u.name,
                    h.name
                  );
                }, this)
              ),
            this.options.autoZIndex &&
              n.setZIndex &&
              (this._lastZIndex++, n.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          Yr(this._baseLayersList),
            Yr(this._overlaysList),
            (this._layerControlInputs = []);
          var n,
            r,
            a,
            u,
            h = 0;
          for (a = 0; a < this._layers.length; a++)
            (u = this._layers[a]),
              this._addItem(u),
              (r = r || u.overlay),
              (n = n || !u.overlay),
              (h += u.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((n = n && h > 1),
              (this._baseLayersList.style.display = n ? "" : "none")),
            (this._separator.style.display = r && n ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (n) {
          this._handlingClick || this._update();
          var r = this._getLayer(f(n.target)),
            a = r.overlay
              ? n.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : n.type === "add"
              ? "baselayerchange"
              : null;
          a && this._map.fire(a, r);
        },
        _createRadioElement: function (n, r) {
          var a =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              n +
              '"' +
              (r ? ' checked="checked"' : "") +
              "/>",
            u = document.createElement("div");
          return (u.innerHTML = a), u.firstChild;
        },
        _addItem: function (n) {
          var r = document.createElement("label"),
            a = this._map.hasLayer(n.layer),
            u;
          n.overlay
            ? ((u = document.createElement("input")),
              (u.type = "checkbox"),
              (u.className = "leaflet-control-layers-selector"),
              (u.defaultChecked = a))
            : (u = this._createRadioElement(
                "leaflet-base-layers_" + f(this),
                a
              )),
            this._layerControlInputs.push(u),
            (u.layerId = f(n.layer)),
            G(u, "click", this._onInputClick, this);
          var h = document.createElement("span");
          h.innerHTML = " " + n.name;
          var p = document.createElement("span");
          r.appendChild(p), p.appendChild(u), p.appendChild(h);
          var w = n.overlay ? this._overlaysList : this._baseLayersList;
          return w.appendChild(r), this._checkDisabledLayers(), r;
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var n = this._layerControlInputs,
              r,
              a,
              u = [],
              h = [];
            this._handlingClick = !0;
            for (var p = n.length - 1; p >= 0; p--)
              (r = n[p]),
                (a = this._getLayer(r.layerId).layer),
                r.checked ? u.push(a) : r.checked || h.push(a);
            for (p = 0; p < h.length; p++)
              this._map.hasLayer(h[p]) && this._map.removeLayer(h[p]);
            for (p = 0; p < u.length; p++)
              this._map.hasLayer(u[p]) || this._map.addLayer(u[p]);
            (this._handlingClick = !1), this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function () {
          for (
            var n = this._layerControlInputs,
              r,
              a,
              u = this._map.getZoom(),
              h = n.length - 1;
            h >= 0;
            h--
          )
            (r = n[h]),
              (a = this._getLayer(r.layerId).layer),
              (r.disabled =
                (a.options.minZoom !== void 0 && u < a.options.minZoom) ||
                (a.options.maxZoom !== void 0 && u > a.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var n = this._section;
          (this._preventClick = !0), G(n, "click", je), this.expand();
          var r = this;
          setTimeout(function () {
            ue(n, "click", je), (r._preventClick = !1);
          });
        },
      }),
      j_ = function (n, r, a) {
        return new qc(n, r, a);
      },
      va = xt.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (n) {
          var r = "leaflet-control-zoom",
            a = oe("div", r + " leaflet-bar"),
            u = this.options;
          return (
            (this._zoomInButton = this._createButton(
              u.zoomInText,
              u.zoomInTitle,
              r + "-in",
              a,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              u.zoomOutText,
              u.zoomOutTitle,
              r + "-out",
              a,
              this._zoomOut
            )),
            this._updateDisabled(),
            n.on("zoomend zoomlevelschange", this._updateDisabled, this),
            a
          );
        },
        onRemove: function (n) {
          n.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (n) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (n.shiftKey ? 3 : 1)
            );
        },
        _zoomOut: function (n) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (n.shiftKey ? 3 : 1)
            );
        },
        _createButton: function (n, r, a, u, h) {
          var p = oe("a", a, u);
          return (
            (p.innerHTML = n),
            (p.href = "#"),
            (p.title = r),
            p.setAttribute("role", "button"),
            p.setAttribute("aria-label", r),
            qi(p),
            G(p, "click", An),
            G(p, "click", h, this),
            G(p, "click", this._refocusOnMap, this),
            p
          );
        },
        _updateDisabled: function () {
          var n = this._map,
            r = "leaflet-disabled";
          xe(this._zoomInButton, r),
            xe(this._zoomOutButton, r),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || n._zoom === n.getMinZoom()) &&
              (Q(this._zoomOutButton, r),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || n._zoom === n.getMaxZoom()) &&
              (Q(this._zoomInButton, r),
              this._zoomInButton.setAttribute("aria-disabled", "true"));
        },
      });
    ee.mergeOptions({ zoomControl: !0 }),
      ee.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new va()), this.addControl(this.zoomControl));
      });
    var B_ = function (n) {
        return new va(n);
      },
      Kc = xt.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (n) {
          var r = "leaflet-control-scale",
            a = oe("div", r),
            u = this.options;
          return (
            this._addScales(u, r + "-line", a),
            n.on(u.updateWhenIdle ? "moveend" : "move", this._update, this),
            n.whenReady(this._update, this),
            a
          );
        },
        onRemove: function (n) {
          n.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this
          );
        },
        _addScales: function (n, r, a) {
          n.metric && (this._mScale = oe("div", r, a)),
            n.imperial && (this._iScale = oe("div", r, a));
        },
        _update: function () {
          var n = this._map,
            r = n.getSize().y / 2,
            a = n.distance(
              n.containerPointToLatLng([0, r]),
              n.containerPointToLatLng([this.options.maxWidth, r])
            );
          this._updateScales(a);
        },
        _updateScales: function (n) {
          this.options.metric && n && this._updateMetric(n),
            this.options.imperial && n && this._updateImperial(n);
        },
        _updateMetric: function (n) {
          var r = this._getRoundNum(n),
            a = r < 1e3 ? r + " m" : r / 1e3 + " km";
          this._updateScale(this._mScale, a, r / n);
        },
        _updateImperial: function (n) {
          var r = n * 3.2808399,
            a,
            u,
            h;
          r > 5280
            ? ((a = r / 5280),
              (u = this._getRoundNum(a)),
              this._updateScale(this._iScale, u + " mi", u / a))
            : ((h = this._getRoundNum(r)),
              this._updateScale(this._iScale, h + " ft", h / r));
        },
        _updateScale: function (n, r, a) {
          (n.style.width = Math.round(this.options.maxWidth * a) + "px"),
            (n.innerHTML = r);
        },
        _getRoundNum: function (n) {
          var r = Math.pow(10, (Math.floor(n) + "").length - 1),
            a = n / r;
          return (
            (a = a >= 10 ? 10 : a >= 5 ? 5 : a >= 3 ? 3 : a >= 2 ? 2 : 1), r * a
          );
        },
      }),
      D_ = function (n) {
        return new Kc(n);
      },
      F_ =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      ga = xt.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (W.inlineSvg ? F_ + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (n) {
          x(this, n), (this._attributions = {});
        },
        onAdd: function (n) {
          (n.attributionControl = this),
            (this._container = oe("div", "leaflet-control-attribution")),
            qi(this._container);
          for (var r in n._layers)
            n._layers[r].getAttribution &&
              this.addAttribution(n._layers[r].getAttribution());
          return (
            this._update(),
            n.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (n) {
          n.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (n) {
          n.layer.getAttribution &&
            (this.addAttribution(n.layer.getAttribution()),
            n.layer.once(
              "remove",
              function () {
                this.removeAttribution(n.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (n) {
          return (this.options.prefix = n), this._update(), this;
        },
        addAttribution: function (n) {
          return n
            ? (this._attributions[n] || (this._attributions[n] = 0),
              this._attributions[n]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (n) {
          return n
            ? (this._attributions[n] &&
                (this._attributions[n]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var n = [];
            for (var r in this._attributions)
              this._attributions[r] && n.push(r);
            var a = [];
            this.options.prefix && a.push(this.options.prefix),
              n.length && a.push(n.join(", ")),
              (this._container.innerHTML = a.join(
                ' <span aria-hidden="true">|</span> '
              ));
          }
        },
      });
    ee.mergeOptions({ attributionControl: !0 }),
      ee.addInitHook(function () {
        this.options.attributionControl && new ga().addTo(this);
      });
    var Z_ = function (n) {
      return new ga(n);
    };
    (xt.Layers = qc),
      (xt.Zoom = va),
      (xt.Scale = Kc),
      (xt.Attribution = ga),
      (Ki.layers = j_),
      (Ki.zoom = B_),
      (Ki.scale = D_),
      (Ki.attribution = Z_);
    var Mt = ct.extend({
      initialize: function (n) {
        this._map = n;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    Mt.addTo = function (n, r) {
      return n.addHandler(r, this), this;
    };
    var U_ = { Events: Ae },
      Gc = W.touch ? "touchstart mousedown" : "mousedown",
      on = Ut.extend({
        options: { clickTolerance: 3 },
        initialize: function (n, r, a, u) {
          x(this, u),
            (this._element = n),
            (this._dragStartTarget = r || n),
            (this._preventOutline = a);
        },
        enable: function () {
          this._enabled ||
            (G(this._dragStartTarget, Gc, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (on._dragging === this && this.finishDrag(!0),
            ue(this._dragStartTarget, Gc, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (n) {
          if (
            this._enabled &&
            ((this._moved = !1), !ra(this._element, "leaflet-zoom-anim"))
          ) {
            if (n.touches && n.touches.length !== 1) {
              on._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                on._dragging ||
                n.shiftKey ||
                (n.which !== 1 && n.button !== 1 && !n.touches)
              ) &&
              ((on._dragging = this),
              this._preventOutline && ca(this._element),
              aa(),
              Wi(),
              !this._moving)
            ) {
              this.fire("down");
              var r = n.touches ? n.touches[0] : n,
                a = Uc(this._element);
              (this._startPoint = new R(r.clientX, r.clientY)),
                (this._startPos = Rn(this._element)),
                (this._parentScale = ha(a));
              var u = n.type === "mousedown";
              G(document, u ? "mousemove" : "touchmove", this._onMove, this),
                G(
                  document,
                  u ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this
                );
            }
          }
        },
        _onMove: function (n) {
          if (this._enabled) {
            if (n.touches && n.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var r = n.touches && n.touches.length === 1 ? n.touches[0] : n,
              a = new R(r.clientX, r.clientY)._subtract(this._startPoint);
            (!a.x && !a.y) ||
              Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance ||
              ((a.x /= this._parentScale.x),
              (a.y /= this._parentScale.y),
              je(n),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                Q(document.body, "leaflet-dragging"),
                (this._lastTarget = n.target || n.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                Q(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(a)),
              (this._moving = !0),
              (this._lastEvent = n),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var n = { originalEvent: this._lastEvent };
          this.fire("predrag", n),
            Pe(this._element, this._newPos),
            this.fire("drag", n);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (n) {
          xe(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (xe(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            ue(document, "mousemove touchmove", this._onMove, this),
            ue(document, "mouseup touchend touchcancel", this._onUp, this),
            la(),
            $i();
          var r = this._moved && this._moving;
          (this._moving = !1),
            (on._dragging = !1),
            r &&
              this.fire("dragend", {
                noInertia: n,
                distance: this._newPos.distanceTo(this._startPos),
              });
        },
      });
    function Qc(n, r, a) {
      var u,
        h = [1, 4, 2, 8],
        p,
        w,
        T,
        O,
        I,
        F,
        $,
        X;
      for (p = 0, F = n.length; p < F; p++) n[p]._code = jn(n[p], r);
      for (T = 0; T < 4; T++) {
        for ($ = h[T], u = [], p = 0, F = n.length, w = F - 1; p < F; w = p++)
          (O = n[p]),
            (I = n[w]),
            O._code & $
              ? I._code & $ ||
                ((X = ro(I, O, $, r, a)), (X._code = jn(X, r)), u.push(X))
              : (I._code & $ &&
                  ((X = ro(I, O, $, r, a)), (X._code = jn(X, r)), u.push(X)),
                u.push(O));
        n = u;
      }
      return n;
    }
    function Jc(n, r) {
      var a, u, h, p, w, T, O, I, F;
      if (!n || n.length === 0) throw new Error("latlngs not passed");
      dt(n) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (n = n[0]));
      var $ = K([0, 0]),
        X = ae(n),
        We =
          X.getNorthWest().distanceTo(X.getSouthWest()) *
          X.getNorthEast().distanceTo(X.getNorthWest());
      We < 1700 && ($ = ya(n));
      var Me = n.length,
        ft = [];
      for (a = 0; a < Me; a++) {
        var Qe = K(n[a]);
        ft.push(r.project(K([Qe.lat - $.lat, Qe.lng - $.lng])));
      }
      for (T = O = I = 0, a = 0, u = Me - 1; a < Me; u = a++)
        (h = ft[a]),
          (p = ft[u]),
          (w = h.y * p.x - p.y * h.x),
          (O += (h.x + p.x) * w),
          (I += (h.y + p.y) * w),
          (T += w * 3);
      T === 0 ? (F = ft[0]) : (F = [O / T, I / T]);
      var oi = r.unproject(B(F));
      return K([oi.lat + $.lat, oi.lng + $.lng]);
    }
    function ya(n) {
      for (var r = 0, a = 0, u = 0, h = 0; h < n.length; h++) {
        var p = K(n[h]);
        (r += p.lat), (a += p.lng), u++;
      }
      return K([r / u, a / u]);
    }
    var b_ = {
      __proto__: null,
      clipPolygon: Qc,
      polygonCenter: Jc,
      centroid: ya,
    };
    function Xc(n, r) {
      if (!r || !n.length) return n.slice();
      var a = r * r;
      return (n = $_(n, a)), (n = W_(n, a)), n;
    }
    function Yc(n, r, a) {
      return Math.sqrt(Gi(n, r, a, !0));
    }
    function H_(n, r, a) {
      return Gi(n, r, a);
    }
    function W_(n, r) {
      var a = n.length,
        u = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
        h = new u(a);
      (h[0] = h[a - 1] = 1), wa(n, h, r, 0, a - 1);
      var p,
        w = [];
      for (p = 0; p < a; p++) h[p] && w.push(n[p]);
      return w;
    }
    function wa(n, r, a, u, h) {
      var p = 0,
        w,
        T,
        O;
      for (T = u + 1; T <= h - 1; T++)
        (O = Gi(n[T], n[u], n[h], !0)), O > p && ((w = T), (p = O));
      p > a && ((r[w] = 1), wa(n, r, a, u, w), wa(n, r, a, w, h));
    }
    function $_(n, r) {
      for (var a = [n[0]], u = 1, h = 0, p = n.length; u < p; u++)
        V_(n[u], n[h]) > r && (a.push(n[u]), (h = u));
      return h < p - 1 && a.push(n[p - 1]), a;
    }
    var eh;
    function th(n, r, a, u, h) {
      var p = u ? eh : jn(n, a),
        w = jn(r, a),
        T,
        O,
        I;
      for (eh = w; ; ) {
        if (!(p | w)) return [n, r];
        if (p & w) return !1;
        (T = p || w),
          (O = ro(n, r, T, a, h)),
          (I = jn(O, a)),
          T === p ? ((n = O), (p = I)) : ((r = O), (w = I));
      }
    }
    function ro(n, r, a, u, h) {
      var p = r.x - n.x,
        w = r.y - n.y,
        T = u.min,
        O = u.max,
        I,
        F;
      return (
        a & 8
          ? ((I = n.x + (p * (O.y - n.y)) / w), (F = O.y))
          : a & 4
          ? ((I = n.x + (p * (T.y - n.y)) / w), (F = T.y))
          : a & 2
          ? ((I = O.x), (F = n.y + (w * (O.x - n.x)) / p))
          : a & 1 && ((I = T.x), (F = n.y + (w * (T.x - n.x)) / p)),
        new R(I, F, h)
      );
    }
    function jn(n, r) {
      var a = 0;
      return (
        n.x < r.min.x ? (a |= 1) : n.x > r.max.x && (a |= 2),
        n.y < r.min.y ? (a |= 4) : n.y > r.max.y && (a |= 8),
        a
      );
    }
    function V_(n, r) {
      var a = r.x - n.x,
        u = r.y - n.y;
      return a * a + u * u;
    }
    function Gi(n, r, a, u) {
      var h = r.x,
        p = r.y,
        w = a.x - h,
        T = a.y - p,
        O = w * w + T * T,
        I;
      return (
        O > 0 &&
          ((I = ((n.x - h) * w + (n.y - p) * T) / O),
          I > 1
            ? ((h = a.x), (p = a.y))
            : I > 0 && ((h += w * I), (p += T * I))),
        (w = n.x - h),
        (T = n.y - p),
        u ? w * w + T * T : new R(h, p)
      );
    }
    function dt(n) {
      return !k(n[0]) || (typeof n[0][0] != "object" && typeof n[0][0] < "u");
    }
    function nh(n) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
        ),
        dt(n)
      );
    }
    function ih(n, r) {
      var a, u, h, p, w, T, O, I;
      if (!n || n.length === 0) throw new Error("latlngs not passed");
      dt(n) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (n = n[0]));
      var F = K([0, 0]),
        $ = ae(n),
        X =
          $.getNorthWest().distanceTo($.getSouthWest()) *
          $.getNorthEast().distanceTo($.getNorthWest());
      X < 1700 && (F = ya(n));
      var We = n.length,
        Me = [];
      for (a = 0; a < We; a++) {
        var ft = K(n[a]);
        Me.push(r.project(K([ft.lat - F.lat, ft.lng - F.lng])));
      }
      for (a = 0, u = 0; a < We - 1; a++) u += Me[a].distanceTo(Me[a + 1]) / 2;
      if (u === 0) I = Me[0];
      else
        for (a = 0, p = 0; a < We - 1; a++)
          if (
            ((w = Me[a]),
            (T = Me[a + 1]),
            (h = w.distanceTo(T)),
            (p += h),
            p > u)
          ) {
            (O = (p - u) / h),
              (I = [T.x - O * (T.x - w.x), T.y - O * (T.y - w.y)]);
            break;
          }
      var Qe = r.unproject(B(I));
      return K([Qe.lat + F.lat, Qe.lng + F.lng]);
    }
    var q_ = {
        __proto__: null,
        simplify: Xc,
        pointToSegmentDistance: Yc,
        closestPointOnSegment: H_,
        clipSegment: th,
        _getEdgeIntersection: ro,
        _getBitCode: jn,
        _sqClosestPointOnSegment: Gi,
        isFlat: dt,
        _flat: nh,
        polylineCenter: ih,
      },
      xa = {
        project: function (n) {
          return new R(n.lng, n.lat);
        },
        unproject: function (n) {
          return new re(n.y, n.x);
        },
        bounds: new V([-180, -90], [180, 90]),
      },
      Sa = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new V(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (n) {
          var r = Math.PI / 180,
            a = this.R,
            u = n.lat * r,
            h = this.R_MINOR / a,
            p = Math.sqrt(1 - h * h),
            w = p * Math.sin(u),
            T =
              Math.tan(Math.PI / 4 - u / 2) /
              Math.pow((1 - w) / (1 + w), p / 2);
          return (
            (u = -a * Math.log(Math.max(T, 1e-10))), new R(n.lng * r * a, u)
          );
        },
        unproject: function (n) {
          for (
            var r = 180 / Math.PI,
              a = this.R,
              u = this.R_MINOR / a,
              h = Math.sqrt(1 - u * u),
              p = Math.exp(-n.y / a),
              w = Math.PI / 2 - 2 * Math.atan(p),
              T = 0,
              O = 0.1,
              I;
            T < 15 && Math.abs(O) > 1e-7;
            T++
          )
            (I = h * Math.sin(w)),
              (I = Math.pow((1 - I) / (1 + I), h / 2)),
              (O = Math.PI / 2 - 2 * Math.atan(p * I) - w),
              (w += O);
          return new re(w * r, (n.x * r) / a);
        },
      },
      K_ = { __proto__: null, LonLat: xa, Mercator: Sa, SphericalMercator: Ks },
      G_ = s({}, rn, {
        code: "EPSG:3395",
        projection: Sa,
        transformation: (function () {
          var n = 0.5 / (Math.PI * Sa.R);
          return Zi(n, 0.5, -n, 0.5);
        })(),
      }),
      rh = s({}, rn, {
        code: "EPSG:4326",
        projection: xa,
        transformation: Zi(1 / 180, 1, -1 / 180, 0.5),
      }),
      Q_ = s({}, Ge, {
        projection: xa,
        transformation: Zi(1, 0, -1, 0),
        scale: function (n) {
          return Math.pow(2, n);
        },
        zoom: function (n) {
          return Math.log(n) / Math.LN2;
        },
        distance: function (n, r) {
          var a = r.lng - n.lng,
            u = r.lat - n.lat;
          return Math.sqrt(a * a + u * u);
        },
        infinite: !0,
      });
    (Ge.Earth = rn),
      (Ge.EPSG3395 = G_),
      (Ge.EPSG3857 = Qs),
      (Ge.EPSG900913 = n_),
      (Ge.EPSG4326 = rh),
      (Ge.Simple = Q_);
    var St = Ut.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (n) {
        return n.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (n) {
        return n && n.removeLayer(this), this;
      },
      getPane: function (n) {
        return this._map.getPane(n ? this.options[n] || n : this.options.pane);
      },
      addInteractiveTarget: function (n) {
        return (this._map._targets[f(n)] = this), this;
      },
      removeInteractiveTarget: function (n) {
        return delete this._map._targets[f(n)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (n) {
        var r = n.target;
        if (r.hasLayer(this)) {
          if (
            ((this._map = r),
            (this._zoomAnimated = r._zoomAnimated),
            this.getEvents)
          ) {
            var a = this.getEvents();
            r.on(a, this),
              this.once(
                "remove",
                function () {
                  r.off(a, this);
                },
                this
              );
          }
          this.onAdd(r), this.fire("add"), r.fire("layeradd", { layer: this });
        }
      },
    });
    ee.include({
      addLayer: function (n) {
        if (!n._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var r = f(n);
        return this._layers[r]
          ? this
          : ((this._layers[r] = n),
            (n._mapToAdd = this),
            n.beforeAdd && n.beforeAdd(this),
            this.whenReady(n._layerAdd, n),
            this);
      },
      removeLayer: function (n) {
        var r = f(n);
        return this._layers[r]
          ? (this._loaded && n.onRemove(this),
            delete this._layers[r],
            this._loaded &&
              (this.fire("layerremove", { layer: n }), n.fire("remove")),
            (n._map = n._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (n) {
        return f(n) in this._layers;
      },
      eachLayer: function (n, r) {
        for (var a in this._layers) n.call(r, this._layers[a]);
        return this;
      },
      _addLayers: function (n) {
        n = n ? (k(n) ? n : [n]) : [];
        for (var r = 0, a = n.length; r < a; r++) this.addLayer(n[r]);
      },
      _addZoomLimit: function (n) {
        (!isNaN(n.options.maxZoom) || !isNaN(n.options.minZoom)) &&
          ((this._zoomBoundLayers[f(n)] = n), this._updateZoomLevels());
      },
      _removeZoomLimit: function (n) {
        var r = f(n);
        this._zoomBoundLayers[r] &&
          (delete this._zoomBoundLayers[r], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var n = 1 / 0,
          r = -1 / 0,
          a = this._getZoomSpan();
        for (var u in this._zoomBoundLayers) {
          var h = this._zoomBoundLayers[u].options;
          (n = h.minZoom === void 0 ? n : Math.min(n, h.minZoom)),
            (r = h.maxZoom === void 0 ? r : Math.max(r, h.maxZoom));
        }
        (this._layersMaxZoom = r === -1 / 0 ? void 0 : r),
          (this._layersMinZoom = n === 1 / 0 ? void 0 : n),
          a !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var ei = St.extend({
        initialize: function (n, r) {
          x(this, r), (this._layers = {});
          var a, u;
          if (n) for (a = 0, u = n.length; a < u; a++) this.addLayer(n[a]);
        },
        addLayer: function (n) {
          var r = this.getLayerId(n);
          return (
            (this._layers[r] = n), this._map && this._map.addLayer(n), this
          );
        },
        removeLayer: function (n) {
          var r = n in this._layers ? n : this.getLayerId(n);
          return (
            this._map &&
              this._layers[r] &&
              this._map.removeLayer(this._layers[r]),
            delete this._layers[r],
            this
          );
        },
        hasLayer: function (n) {
          var r = typeof n == "number" ? n : this.getLayerId(n);
          return r in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (n) {
          var r = Array.prototype.slice.call(arguments, 1),
            a,
            u;
          for (a in this._layers)
            (u = this._layers[a]), u[n] && u[n].apply(u, r);
          return this;
        },
        onAdd: function (n) {
          this.eachLayer(n.addLayer, n);
        },
        onRemove: function (n) {
          this.eachLayer(n.removeLayer, n);
        },
        eachLayer: function (n, r) {
          for (var a in this._layers) n.call(r, this._layers[a]);
          return this;
        },
        getLayer: function (n) {
          return this._layers[n];
        },
        getLayers: function () {
          var n = [];
          return this.eachLayer(n.push, n), n;
        },
        setZIndex: function (n) {
          return this.invoke("setZIndex", n);
        },
        getLayerId: function (n) {
          return f(n);
        },
      }),
      J_ = function (n, r) {
        return new ei(n, r);
      },
      bt = ei.extend({
        addLayer: function (n) {
          return this.hasLayer(n)
            ? this
            : (n.addEventParent(this),
              ei.prototype.addLayer.call(this, n),
              this.fire("layeradd", { layer: n }));
        },
        removeLayer: function (n) {
          return this.hasLayer(n)
            ? (n in this._layers && (n = this._layers[n]),
              n.removeEventParent(this),
              ei.prototype.removeLayer.call(this, n),
              this.fire("layerremove", { layer: n }))
            : this;
        },
        setStyle: function (n) {
          return this.invoke("setStyle", n);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var n = new Te();
          for (var r in this._layers) {
            var a = this._layers[r];
            n.extend(a.getBounds ? a.getBounds() : a.getLatLng());
          }
          return n;
        },
      }),
      X_ = function (n, r) {
        return new bt(n, r);
      },
      ti = ct.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (n) {
          x(this, n);
        },
        createIcon: function (n) {
          return this._createIcon("icon", n);
        },
        createShadow: function (n) {
          return this._createIcon("shadow", n);
        },
        _createIcon: function (n, r) {
          var a = this._getIconUrl(n);
          if (!a) {
            if (n === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs)."
              );
            return null;
          }
          var u = this._createImg(a, r && r.tagName === "IMG" ? r : null);
          return (
            this._setIconStyles(u, n),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (u.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            u
          );
        },
        _setIconStyles: function (n, r) {
          var a = this.options,
            u = a[r + "Size"];
          typeof u == "number" && (u = [u, u]);
          var h = B(u),
            p = B(
              (r === "shadow" && a.shadowAnchor) ||
                a.iconAnchor ||
                (h && h.divideBy(2, !0))
            );
          (n.className = "leaflet-marker-" + r + " " + (a.className || "")),
            p &&
              ((n.style.marginLeft = -p.x + "px"),
              (n.style.marginTop = -p.y + "px")),
            h && ((n.style.width = h.x + "px"), (n.style.height = h.y + "px"));
        },
        _createImg: function (n, r) {
          return (r = r || document.createElement("img")), (r.src = n), r;
        },
        _getIconUrl: function (n) {
          return (
            (W.retina && this.options[n + "RetinaUrl"]) ||
            this.options[n + "Url"]
          );
        },
      });
    function Y_(n) {
      return new ti(n);
    }
    var Qi = ti.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (n) {
          return (
            typeof Qi.imagePath != "string" &&
              (Qi.imagePath = this._detectIconPath()),
            (this.options.imagePath || Qi.imagePath) +
              ti.prototype._getIconUrl.call(this, n)
          );
        },
        _stripUrl: function (n) {
          var r = function (a, u, h) {
            var p = u.exec(a);
            return p && p[h];
          };
          return (
            (n = r(n, /^url\((['"])?(.+)\1\)$/, 2)),
            n && r(n, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var n = oe("div", "leaflet-default-icon-path", document.body),
            r = Hi(n, "background-image") || Hi(n, "backgroundImage");
          if ((document.body.removeChild(n), (r = this._stripUrl(r)), r))
            return r;
          var a = document.querySelector('link[href$="leaflet.css"]');
          return a ? a.href.substring(0, a.href.length - 11 - 1) : "";
        },
      }),
      oh = Mt.extend({
        initialize: function (n) {
          this._marker = n;
        },
        addHooks: function () {
          var n = this._marker._icon;
          this._draggable || (this._draggable = new on(n, n, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            Q(n, "leaflet-marker-draggable");
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon &&
              xe(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (n) {
          var r = this._marker,
            a = r._map,
            u = this._marker.options.autoPanSpeed,
            h = this._marker.options.autoPanPadding,
            p = Rn(r._icon),
            w = a.getPixelBounds(),
            T = a.getPixelOrigin(),
            O = ne(w.min._subtract(T).add(h), w.max._subtract(T).subtract(h));
          if (!O.contains(p)) {
            var I = B(
              (Math.max(O.max.x, p.x) - O.max.x) / (w.max.x - O.max.x) -
                (Math.min(O.min.x, p.x) - O.min.x) / (w.min.x - O.min.x),
              (Math.max(O.max.y, p.y) - O.max.y) / (w.max.y - O.max.y) -
                (Math.min(O.min.y, p.y) - O.min.y) / (w.min.y - O.min.y)
            ).multiplyBy(u);
            a.panBy(I, { animate: !1 }),
              this._draggable._newPos._add(I),
              this._draggable._startPos._add(I),
              Pe(r._icon, this._draggable._newPos),
              this._onDrag(n),
              (this._panRequest = le(this._adjustPan.bind(this, n)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function (n) {
          this._marker.options.autoPan &&
            (ze(this._panRequest),
            (this._panRequest = le(this._adjustPan.bind(this, n))));
        },
        _onDrag: function (n) {
          var r = this._marker,
            a = r._shadow,
            u = Rn(r._icon),
            h = r._map.layerPointToLatLng(u);
          a && Pe(a, u),
            (r._latlng = h),
            (n.latlng = h),
            (n.oldLatLng = this._oldLatLng),
            r.fire("move", n).fire("drag", n);
        },
        _onDragEnd: function (n) {
          ze(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", n);
        },
      }),
      oo = St.extend({
        options: {
          icon: new Qi(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (n, r) {
          x(this, r), (this._latlng = K(n));
        },
        onAdd: function (n) {
          (this._zoomAnimated =
            this._zoomAnimated && n.options.markerZoomAnimation),
            this._zoomAnimated && n.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (n) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && n.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (n) {
          var r = this._latlng;
          return (
            (this._latlng = K(n)),
            this.update(),
            this.fire("move", { oldLatLng: r, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (n) {
          return (this.options.zIndexOffset = n), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (n) {
          return (
            (this.options.icon = n),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var n = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(n);
          }
          return this;
        },
        _initIcon: function () {
          var n = this.options,
            r = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            a = n.icon.createIcon(this._icon),
            u = !1;
          a !== this._icon &&
            (this._icon && this._removeIcon(),
            (u = !0),
            n.title && (a.title = n.title),
            a.tagName === "IMG" && (a.alt = n.alt || "")),
            Q(a, r),
            n.keyboard &&
              ((a.tabIndex = "0"), a.setAttribute("role", "button")),
            (this._icon = a),
            n.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              G(a, "focus", this._panOnFocus, this);
          var h = n.icon.createShadow(this._shadow),
            p = !1;
          h !== this._shadow && (this._removeShadow(), (p = !0)),
            h && (Q(h, r), (h.alt = "")),
            (this._shadow = h),
            n.opacity < 1 && this._updateOpacity(),
            u && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            h && p && this.getPane(n.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              ue(this._icon, "focus", this._panOnFocus, this),
            me(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && me(this._shadow), (this._shadow = null);
        },
        _setPos: function (n) {
          this._icon && Pe(this._icon, n),
            this._shadow && Pe(this._shadow, n),
            (this._zIndex = n.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (n) {
          this._icon && (this._icon.style.zIndex = this._zIndex + n);
        },
        _animateZoom: function (n) {
          var r = this._map
            ._latLngToNewLayerPoint(this._latlng, n.zoom, n.center)
            .round();
          this._setPos(r);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (Q(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            oh)
          ) {
            var n = this.options.draggable;
            this.dragging &&
              ((n = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new oh(this)),
              n && this.dragging.enable();
          }
        },
        setOpacity: function (n) {
          return (
            (this.options.opacity = n), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var n = this.options.opacity;
          this._icon && ht(this._icon, n), this._shadow && ht(this._shadow, n);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var n = this._map;
          if (n) {
            var r = this.options.icon.options,
              a = r.iconSize ? B(r.iconSize) : B(0, 0),
              u = r.iconAnchor ? B(r.iconAnchor) : B(0, 0);
            n.panInside(this._latlng, {
              paddingTopLeft: u,
              paddingBottomRight: a.subtract(u),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function ev(n, r) {
      return new oo(n, r);
    }
    var sn = St.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (n) {
          this._renderer = n.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (n) {
          return (
            x(this, n),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                n &&
                Object.prototype.hasOwnProperty.call(n, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      so = sn.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (n, r) {
          x(this, r),
            (this._latlng = K(n)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (n) {
          var r = this._latlng;
          return (
            (this._latlng = K(n)),
            this.redraw(),
            this.fire("move", { oldLatLng: r, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (n) {
          return (this.options.radius = this._radius = n), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (n) {
          var r = (n && n.radius) || this._radius;
          return sn.prototype.setStyle.call(this, n), this.setRadius(r), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var n = this._radius,
            r = this._radiusY || n,
            a = this._clickTolerance(),
            u = [n + a, r + a];
          this._pxBounds = new V(this._point.subtract(u), this._point.add(u));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (n) {
          return (
            n.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function tv(n, r) {
      return new so(n, r);
    }
    var Pa = so.extend({
      initialize: function (n, r, a) {
        if (
          (typeof r == "number" && (r = s({}, a, { radius: r })),
          x(this, r),
          (this._latlng = K(n)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (n) {
        return (this._mRadius = n), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var n = [this._radius, this._radiusY || this._radius];
        return new Te(
          this._map.layerPointToLatLng(this._point.subtract(n)),
          this._map.layerPointToLatLng(this._point.add(n))
        );
      },
      setStyle: sn.prototype.setStyle,
      _project: function () {
        var n = this._latlng.lng,
          r = this._latlng.lat,
          a = this._map,
          u = a.options.crs;
        if (u.distance === rn.distance) {
          var h = Math.PI / 180,
            p = this._mRadius / rn.R / h,
            w = a.project([r + p, n]),
            T = a.project([r - p, n]),
            O = w.add(T).divideBy(2),
            I = a.unproject(O).lat,
            F =
              Math.acos(
                (Math.cos(p * h) - Math.sin(r * h) * Math.sin(I * h)) /
                  (Math.cos(r * h) * Math.cos(I * h))
              ) / h;
          (isNaN(F) || F === 0) && (F = p / Math.cos((Math.PI / 180) * r)),
            (this._point = O.subtract(a.getPixelOrigin())),
            (this._radius = isNaN(F) ? 0 : O.x - a.project([I, n - F]).x),
            (this._radiusY = O.y - w.y);
        } else {
          var $ = u.unproject(
            u.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = a.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - a.latLngToLayerPoint($).x);
        }
        this._updateBounds();
      },
    });
    function nv(n, r, a) {
      return new Pa(n, r, a);
    }
    var Ht = sn.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (n, r) {
        x(this, r), this._setLatLngs(n);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (n) {
        return this._setLatLngs(n), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (n) {
        for (
          var r = 1 / 0, a = null, u = Gi, h, p, w = 0, T = this._parts.length;
          w < T;
          w++
        )
          for (var O = this._parts[w], I = 1, F = O.length; I < F; I++) {
            (h = O[I - 1]), (p = O[I]);
            var $ = u(n, h, p, !0);
            $ < r && ((r = $), (a = u(n, h, p)));
          }
        return a && (a.distance = Math.sqrt(r)), a;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return ih(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (n, r) {
        return (
          (r = r || this._defaultShape()),
          (n = K(n)),
          r.push(n),
          this._bounds.extend(n),
          this.redraw()
        );
      },
      _setLatLngs: function (n) {
        (this._bounds = new Te()), (this._latlngs = this._convertLatLngs(n));
      },
      _defaultShape: function () {
        return dt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (n) {
        for (var r = [], a = dt(n), u = 0, h = n.length; u < h; u++)
          a
            ? ((r[u] = K(n[u])), this._bounds.extend(r[u]))
            : (r[u] = this._convertLatLngs(n[u]));
        return r;
      },
      _project: function () {
        var n = new V();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, n),
          this._bounds.isValid() &&
            n.isValid() &&
            ((this._rawPxBounds = n), this._updateBounds());
      },
      _updateBounds: function () {
        var n = this._clickTolerance(),
          r = new R(n, n);
        this._rawPxBounds &&
          (this._pxBounds = new V([
            this._rawPxBounds.min.subtract(r),
            this._rawPxBounds.max.add(r),
          ]));
      },
      _projectLatlngs: function (n, r, a) {
        var u = n[0] instanceof re,
          h = n.length,
          p,
          w;
        if (u) {
          for (w = [], p = 0; p < h; p++)
            (w[p] = this._map.latLngToLayerPoint(n[p])), a.extend(w[p]);
          r.push(w);
        } else for (p = 0; p < h; p++) this._projectLatlngs(n[p], r, a);
      },
      _clipPoints: function () {
        var n = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(n)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var r = this._parts,
            a,
            u,
            h,
            p,
            w,
            T,
            O;
          for (a = 0, h = 0, p = this._rings.length; a < p; a++)
            for (O = this._rings[a], u = 0, w = O.length; u < w - 1; u++)
              (T = th(O[u], O[u + 1], n, u, !0)),
                T &&
                  ((r[h] = r[h] || []),
                  r[h].push(T[0]),
                  (T[1] !== O[u + 1] || u === w - 2) && (r[h].push(T[1]), h++));
        }
      },
      _simplifyPoints: function () {
        for (
          var n = this._parts,
            r = this.options.smoothFactor,
            a = 0,
            u = n.length;
          a < u;
          a++
        )
          n[a] = Xc(n[a], r);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (n, r) {
        var a,
          u,
          h,
          p,
          w,
          T,
          O = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
        for (a = 0, p = this._parts.length; a < p; a++)
          for (
            T = this._parts[a], u = 0, w = T.length, h = w - 1;
            u < w;
            h = u++
          )
            if (!(!r && u === 0) && Yc(n, T[h], T[u]) <= O) return !0;
        return !1;
      },
    });
    function iv(n, r) {
      return new Ht(n, r);
    }
    Ht._flat = nh;
    var ni = Ht.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Jc(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (n) {
        var r = Ht.prototype._convertLatLngs.call(this, n),
          a = r.length;
        return (
          a >= 2 && r[0] instanceof re && r[0].equals(r[a - 1]) && r.pop(), r
        );
      },
      _setLatLngs: function (n) {
        Ht.prototype._setLatLngs.call(this, n),
          dt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return dt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var n = this._renderer._bounds,
          r = this.options.weight,
          a = new R(r, r);
        if (
          ((n = new V(n.min.subtract(a), n.max.add(a))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(n)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var u = 0, h = this._rings.length, p; u < h; u++)
            (p = Qc(this._rings[u], n, !0)), p.length && this._parts.push(p);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (n) {
        var r = !1,
          a,
          u,
          h,
          p,
          w,
          T,
          O,
          I;
        if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
        for (p = 0, O = this._parts.length; p < O; p++)
          for (
            a = this._parts[p], w = 0, I = a.length, T = I - 1;
            w < I;
            T = w++
          )
            (u = a[w]),
              (h = a[T]),
              u.y > n.y != h.y > n.y &&
                n.x < ((h.x - u.x) * (n.y - u.y)) / (h.y - u.y) + u.x &&
                (r = !r);
        return r || Ht.prototype._containsPoint.call(this, n, !0);
      },
    });
    function rv(n, r) {
      return new ni(n, r);
    }
    var Wt = bt.extend({
      initialize: function (n, r) {
        x(this, r), (this._layers = {}), n && this.addData(n);
      },
      addData: function (n) {
        var r = k(n) ? n : n.features,
          a,
          u,
          h;
        if (r) {
          for (a = 0, u = r.length; a < u; a++)
            (h = r[a]),
              (h.geometries || h.geometry || h.features || h.coordinates) &&
                this.addData(h);
          return this;
        }
        var p = this.options;
        if (p.filter && !p.filter(n)) return this;
        var w = ao(n, p);
        return w
          ? ((w.feature = co(n)),
            (w.defaultOptions = w.options),
            this.resetStyle(w),
            p.onEachFeature && p.onEachFeature(n, w),
            this.addLayer(w))
          : this;
      },
      resetStyle: function (n) {
        return n === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((n.options = s({}, n.defaultOptions)),
            this._setLayerStyle(n, this.options.style),
            this);
      },
      setStyle: function (n) {
        return this.eachLayer(function (r) {
          this._setLayerStyle(r, n);
        }, this);
      },
      _setLayerStyle: function (n, r) {
        n.setStyle &&
          (typeof r == "function" && (r = r(n.feature)), n.setStyle(r));
      },
    });
    function ao(n, r) {
      var a = n.type === "Feature" ? n.geometry : n,
        u = a ? a.coordinates : null,
        h = [],
        p = r && r.pointToLayer,
        w = (r && r.coordsToLatLng) || Ea,
        T,
        O,
        I,
        F;
      if (!u && !a) return null;
      switch (a.type) {
        case "Point":
          return (T = w(u)), sh(p, n, T, r);
        case "MultiPoint":
          for (I = 0, F = u.length; I < F; I++)
            (T = w(u[I])), h.push(sh(p, n, T, r));
          return new bt(h);
        case "LineString":
        case "MultiLineString":
          return (O = lo(u, a.type === "LineString" ? 0 : 1, w)), new Ht(O, r);
        case "Polygon":
        case "MultiPolygon":
          return (O = lo(u, a.type === "Polygon" ? 1 : 2, w)), new ni(O, r);
        case "GeometryCollection":
          for (I = 0, F = a.geometries.length; I < F; I++) {
            var $ = ao(
              {
                geometry: a.geometries[I],
                type: "Feature",
                properties: n.properties,
              },
              r
            );
            $ && h.push($);
          }
          return new bt(h);
        case "FeatureCollection":
          for (I = 0, F = a.features.length; I < F; I++) {
            var X = ao(a.features[I], r);
            X && h.push(X);
          }
          return new bt(h);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function sh(n, r, a, u) {
      return n ? n(r, a) : new oo(a, u && u.markersInheritOptions && u);
    }
    function Ea(n) {
      return new re(n[1], n[0], n[2]);
    }
    function lo(n, r, a) {
      for (var u = [], h = 0, p = n.length, w; h < p; h++)
        (w = r ? lo(n[h], r - 1, a) : (a || Ea)(n[h])), u.push(w);
      return u;
    }
    function La(n, r) {
      return (
        (n = K(n)),
        n.alt !== void 0
          ? [E(n.lng, r), E(n.lat, r), E(n.alt, r)]
          : [E(n.lng, r), E(n.lat, r)]
      );
    }
    function uo(n, r, a, u) {
      for (var h = [], p = 0, w = n.length; p < w; p++)
        h.push(r ? uo(n[p], dt(n[p]) ? 0 : r - 1, a, u) : La(n[p], u));
      return !r && a && h.length > 0 && h.push(h[0].slice()), h;
    }
    function ii(n, r) {
      return n.feature ? s({}, n.feature, { geometry: r }) : co(r);
    }
    function co(n) {
      return n.type === "Feature" || n.type === "FeatureCollection"
        ? n
        : { type: "Feature", properties: {}, geometry: n };
    }
    var ka = {
      toGeoJSON: function (n) {
        return ii(this, {
          type: "Point",
          coordinates: La(this.getLatLng(), n),
        });
      },
    };
    oo.include(ka),
      Pa.include(ka),
      so.include(ka),
      Ht.include({
        toGeoJSON: function (n) {
          var r = !dt(this._latlngs),
            a = uo(this._latlngs, r ? 1 : 0, !1, n);
          return ii(this, {
            type: (r ? "Multi" : "") + "LineString",
            coordinates: a,
          });
        },
      }),
      ni.include({
        toGeoJSON: function (n) {
          var r = !dt(this._latlngs),
            a = r && !dt(this._latlngs[0]),
            u = uo(this._latlngs, a ? 2 : r ? 1 : 0, !0, n);
          return (
            r || (u = [u]),
            ii(this, { type: (a ? "Multi" : "") + "Polygon", coordinates: u })
          );
        },
      }),
      ei.include({
        toMultiPoint: function (n) {
          var r = [];
          return (
            this.eachLayer(function (a) {
              r.push(a.toGeoJSON(n).geometry.coordinates);
            }),
            ii(this, { type: "MultiPoint", coordinates: r })
          );
        },
        toGeoJSON: function (n) {
          var r =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (r === "MultiPoint") return this.toMultiPoint(n);
          var a = r === "GeometryCollection",
            u = [];
          return (
            this.eachLayer(function (h) {
              if (h.toGeoJSON) {
                var p = h.toGeoJSON(n);
                if (a) u.push(p.geometry);
                else {
                  var w = co(p);
                  w.type === "FeatureCollection"
                    ? u.push.apply(u, w.features)
                    : u.push(w);
                }
              }
            }),
            a
              ? ii(this, { geometries: u, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: u }
          );
        },
      });
    function ah(n, r) {
      return new Wt(n, r);
    }
    var ov = ah,
      ho = St.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (n, r, a) {
          (this._url = n), (this._bounds = ae(r)), x(this, a);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (Q(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          me(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (n) {
          return (
            (this.options.opacity = n),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (n) {
          return n.opacity && this.setOpacity(n.opacity), this;
        },
        bringToFront: function () {
          return this._map && Xn(this._image), this;
        },
        bringToBack: function () {
          return this._map && Yn(this._image), this;
        },
        setUrl: function (n) {
          return (this._url = n), this._image && (this._image.src = n), this;
        },
        setBounds: function (n) {
          return (this._bounds = ae(n)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var n = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
        },
        setZIndex: function (n) {
          return (this.options.zIndex = n), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var n = this._url.tagName === "IMG",
            r = (this._image = n ? this._url : oe("img"));
          if (
            (Q(r, "leaflet-image-layer"),
            this._zoomAnimated && Q(r, "leaflet-zoom-animated"),
            this.options.className && Q(r, this.options.className),
            (r.onselectstart = _),
            (r.onmousemove = _),
            (r.onload = c(this.fire, this, "load")),
            (r.onerror = c(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (r.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            n)
          ) {
            this._url = r.src;
            return;
          }
          (r.src = this._url), (r.alt = this.options.alt);
        },
        _animateZoom: function (n) {
          var r = this._map.getZoomScale(n.zoom),
            a = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              n.zoom,
              n.center
            ).min;
          Mn(this._image, a, r);
        },
        _reset: function () {
          var n = this._image,
            r = new V(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            a = r.getSize();
          Pe(n, r.min),
            (n.style.width = a.x + "px"),
            (n.style.height = a.y + "px");
        },
        _updateOpacity: function () {
          ht(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var n = this.options.errorOverlayUrl;
          n && this._url !== n && ((this._url = n), (this._image.src = n));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      sv = function (n, r, a) {
        return new ho(n, r, a);
      },
      lh = ho.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var n = this._url.tagName === "VIDEO",
            r = (this._image = n ? this._url : oe("video"));
          if (
            (Q(r, "leaflet-image-layer"),
            this._zoomAnimated && Q(r, "leaflet-zoom-animated"),
            this.options.className && Q(r, this.options.className),
            (r.onselectstart = _),
            (r.onmousemove = _),
            (r.onloadeddata = c(this.fire, this, "load")),
            n)
          ) {
            for (
              var a = r.getElementsByTagName("source"), u = [], h = 0;
              h < a.length;
              h++
            )
              u.push(a[h].src);
            this._url = a.length > 0 ? u : [r.src];
            return;
          }
          k(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(r.style, "objectFit") &&
              (r.style.objectFit = "fill"),
            (r.autoplay = !!this.options.autoplay),
            (r.loop = !!this.options.loop),
            (r.muted = !!this.options.muted),
            (r.playsInline = !!this.options.playsInline);
          for (var p = 0; p < this._url.length; p++) {
            var w = oe("source");
            (w.src = this._url[p]), r.appendChild(w);
          }
        },
      });
    function av(n, r, a) {
      return new lh(n, r, a);
    }
    var uh = ho.extend({
      _initImage: function () {
        var n = (this._image = this._url);
        Q(n, "leaflet-image-layer"),
          this._zoomAnimated && Q(n, "leaflet-zoom-animated"),
          this.options.className && Q(n, this.options.className),
          (n.onselectstart = _),
          (n.onmousemove = _);
      },
    });
    function lv(n, r, a) {
      return new uh(n, r, a);
    }
    var Rt = St.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (n, r) {
        n && (n instanceof re || k(n))
          ? ((this._latlng = K(n)), x(this, r))
          : (x(this, n), (this._source = r)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (n) {
        return (
          (n = arguments.length ? n : this._source._map),
          n.hasLayer(this) || n.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (n) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = n) : (n = this._source),
              this._prepareOpen(),
              this.openOn(n._map)),
          this
        );
      },
      onAdd: function (n) {
        (this._zoomAnimated = n._zoomAnimated),
          this._container || this._initLayout(),
          n._fadeAnimated && ht(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          n._fadeAnimated && ht(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (Q(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (n) {
        n._fadeAnimated
          ? (ht(this._container, 0),
            (this._removeTimeout = setTimeout(
              c(me, void 0, this._container),
              200
            )))
          : me(this._container),
          this.options.interactive &&
            (xe(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (n) {
        return (
          (this._latlng = K(n)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (n) {
        return (this._content = n), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var n = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && Xn(this._container), this;
      },
      bringToBack: function () {
        return this._map && Yn(this._container), this;
      },
      _prepareOpen: function (n) {
        var r = this._source;
        if (!r._map) return !1;
        if (r instanceof bt) {
          r = null;
          var a = this._source._layers;
          for (var u in a)
            if (a[u]._map) {
              r = a[u];
              break;
            }
          if (!r) return !1;
          this._source = r;
        }
        if (!n)
          if (r.getCenter) n = r.getCenter();
          else if (r.getLatLng) n = r.getLatLng();
          else if (r.getBounds) n = r.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(n), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var n = this._contentNode,
            r =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof r == "string") n.innerHTML = r;
          else {
            for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
            n.appendChild(r);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var n = this._map.latLngToLayerPoint(this._latlng),
            r = B(this.options.offset),
            a = this._getAnchor();
          this._zoomAnimated
            ? Pe(this._container, n.add(a))
            : (r = r.add(n).add(a));
          var u = (this._containerBottom = -r.y),
            h = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + r.x);
          (this._container.style.bottom = u + "px"),
            (this._container.style.left = h + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    ee.include({
      _initOverlay: function (n, r, a, u) {
        var h = r;
        return (
          h instanceof n || (h = new n(u).setContent(r)), a && h.setLatLng(a), h
        );
      },
    }),
      St.include({
        _initOverlay: function (n, r, a, u) {
          var h = a;
          return (
            h instanceof n
              ? (x(h, u), (h._source = this))
              : ((h = r && !u ? r : new n(u, this)), h.setContent(a)),
            h
          );
        },
      });
    var fo = Rt.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (n) {
          return (
            (n = arguments.length ? n : this._source._map),
            !n.hasLayer(this) &&
              n._popup &&
              n._popup.options.autoClose &&
              n.removeLayer(n._popup),
            (n._popup = this),
            Rt.prototype.openOn.call(this, n)
          );
        },
        onAdd: function (n) {
          Rt.prototype.onAdd.call(this, n),
            n.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof sn || this._source.on("preclick", In));
        },
        onRemove: function (n) {
          Rt.prototype.onRemove.call(this, n),
            n.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof sn || this._source.off("preclick", In));
        },
        getEvents: function () {
          var n = Rt.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (n.preclick = this.close),
            this.options.keepInView && (n.moveend = this._adjustPan),
            n
          );
        },
        _initLayout: function () {
          var n = "leaflet-popup",
            r = (this._container = oe(
              "div",
              n +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated"
            )),
            a = (this._wrapper = oe("div", n + "-content-wrapper", r));
          if (
            ((this._contentNode = oe("div", n + "-content", a)),
            qi(r),
            ma(this._contentNode),
            G(r, "contextmenu", In),
            (this._tipContainer = oe("div", n + "-tip-container", r)),
            (this._tip = oe("div", n + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var u = (this._closeButton = oe("a", n + "-close-button", r));
            u.setAttribute("role", "button"),
              u.setAttribute("aria-label", "Close popup"),
              (u.href = "#close"),
              (u.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              G(
                u,
                "click",
                function (h) {
                  je(h), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var n = this._contentNode,
            r = n.style;
          (r.width = ""), (r.whiteSpace = "nowrap");
          var a = n.offsetWidth;
          (a = Math.min(a, this.options.maxWidth)),
            (a = Math.max(a, this.options.minWidth)),
            (r.width = a + 1 + "px"),
            (r.whiteSpace = ""),
            (r.height = "");
          var u = n.offsetHeight,
            h = this.options.maxHeight,
            p = "leaflet-popup-scrolled";
          h && u > h ? ((r.height = h + "px"), Q(n, p)) : xe(n, p),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (n) {
          var r = this._map._latLngToNewLayerPoint(
              this._latlng,
              n.zoom,
              n.center
            ),
            a = this._getAnchor();
          Pe(this._container, r.add(a));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1;
              return;
            }
            var n = this._map,
              r = parseInt(Hi(this._container, "marginBottom"), 10) || 0,
              a = this._container.offsetHeight + r,
              u = this._containerWidth,
              h = new R(this._containerLeft, -a - this._containerBottom);
            h._add(Rn(this._container));
            var p = n.layerPointToContainerPoint(h),
              w = B(this.options.autoPanPadding),
              T = B(this.options.autoPanPaddingTopLeft || w),
              O = B(this.options.autoPanPaddingBottomRight || w),
              I = n.getSize(),
              F = 0,
              $ = 0;
            p.x + u + O.x > I.x && (F = p.x + u - I.x + O.x),
              p.x - F - T.x < 0 && (F = p.x - T.x),
              p.y + a + O.y > I.y && ($ = p.y + a - I.y + O.y),
              p.y - $ - T.y < 0 && ($ = p.y - T.y),
              (F || $) &&
                (this.options.keepInView && (this._autopanning = !0),
                n.fire("autopanstart").panBy([F, $]));
          }
        },
        _getAnchor: function () {
          return B(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      uv = function (n, r) {
        return new fo(n, r);
      };
    ee.mergeOptions({ closePopupOnClick: !0 }),
      ee.include({
        openPopup: function (n, r, a) {
          return this._initOverlay(fo, n, r, a).openOn(this), this;
        },
        closePopup: function (n) {
          return (n = arguments.length ? n : this._popup), n && n.close(), this;
        },
      }),
      St.include({
        bindPopup: function (n, r) {
          return (
            (this._popup = this._initOverlay(fo, this._popup, n, r)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (n) {
          return (
            this._popup &&
              (this instanceof bt || (this._popup._source = this),
              this._popup._prepareOpen(n || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (n) {
          return this._popup && this._popup.setContent(n), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (n) {
          if (!(!this._popup || !this._map)) {
            An(n);
            var r = n.layer || n.target;
            if (this._popup._source === r && !(r instanceof sn)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(n.latlng);
              return;
            }
            (this._popup._source = r), this.openPopup(n.latlng);
          }
        },
        _movePopup: function (n) {
          this._popup.setLatLng(n.latlng);
        },
        _onKeyPress: function (n) {
          n.originalEvent.keyCode === 13 && this._openPopup(n);
        },
      });
    var po = Rt.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (n) {
          Rt.prototype.onAdd.call(this, n),
            this.setOpacity(this.options.opacity),
            n.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function (n) {
          Rt.prototype.onRemove.call(this, n),
            n.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function () {
          var n = Rt.prototype.getEvents.call(this);
          return this.options.permanent || (n.preclick = this.close), n;
        },
        _initLayout: function () {
          var n = "leaflet-tooltip",
            r =
              n +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          (this._contentNode = this._container = oe("div", r)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (n) {
          var r,
            a,
            u = this._map,
            h = this._container,
            p = u.latLngToContainerPoint(u.getCenter()),
            w = u.layerPointToContainerPoint(n),
            T = this.options.direction,
            O = h.offsetWidth,
            I = h.offsetHeight,
            F = B(this.options.offset),
            $ = this._getAnchor();
          T === "top"
            ? ((r = O / 2), (a = I))
            : T === "bottom"
            ? ((r = O / 2), (a = 0))
            : T === "center"
            ? ((r = O / 2), (a = I / 2))
            : T === "right"
            ? ((r = 0), (a = I / 2))
            : T === "left"
            ? ((r = O), (a = I / 2))
            : w.x < p.x
            ? ((T = "right"), (r = 0), (a = I / 2))
            : ((T = "left"), (r = O + (F.x + $.x) * 2), (a = I / 2)),
            (n = n.subtract(B(r, a, !0)).add(F).add($)),
            xe(h, "leaflet-tooltip-right"),
            xe(h, "leaflet-tooltip-left"),
            xe(h, "leaflet-tooltip-top"),
            xe(h, "leaflet-tooltip-bottom"),
            Q(h, "leaflet-tooltip-" + T),
            Pe(h, n);
        },
        _updatePosition: function () {
          var n = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(n);
        },
        setOpacity: function (n) {
          (this.options.opacity = n), this._container && ht(this._container, n);
        },
        _animateZoom: function (n) {
          var r = this._map._latLngToNewLayerPoint(
            this._latlng,
            n.zoom,
            n.center
          );
          this._setPosition(r);
        },
        _getAnchor: function () {
          return B(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      cv = function (n, r) {
        return new po(n, r);
      };
    ee.include({
      openTooltip: function (n, r, a) {
        return this._initOverlay(po, n, r, a).openOn(this), this;
      },
      closeTooltip: function (n) {
        return n.close(), this;
      },
    }),
      St.include({
        bindTooltip: function (n, r) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(po, this._tooltip, n, r)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (n) {
          if (!(!n && this._tooltipHandlersAdded)) {
            var r = n ? "off" : "on",
              a = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (a.add = this._openTooltip)
              : ((a.mouseover = this._openTooltip),
                (a.mouseout = this.closeTooltip),
                (a.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (a.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (a.mousemove = this._moveTooltip),
              this[r](a),
              (this._tooltipHandlersAdded = !n);
          }
        },
        openTooltip: function (n) {
          return (
            this._tooltip &&
              (this instanceof bt || (this._tooltip._source = this),
              this._tooltip._prepareOpen(n) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (n) {
          return this._tooltip && this._tooltip.setContent(n), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (n) {
          var r = typeof n.getElement == "function" && n.getElement();
          r &&
            (G(
              r,
              "focus",
              function () {
                (this._tooltip._source = n), this.openTooltip();
              },
              this
            ),
            G(r, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (n) {
          var r = typeof n.getElement == "function" && n.getElement();
          r && r.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (n) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0;
              var r = this;
              this._map.once("moveend", function () {
                (r._openOnceFlag = !1), r._openTooltip(n);
              });
              return;
            }
            (this._tooltip._source = n.layer || n.target),
              this.openTooltip(
                this._tooltip.options.sticky ? n.latlng : void 0
              );
          }
        },
        _moveTooltip: function (n) {
          var r = n.latlng,
            a,
            u;
          this._tooltip.options.sticky &&
            n.originalEvent &&
            ((a = this._map.mouseEventToContainerPoint(n.originalEvent)),
            (u = this._map.containerPointToLayerPoint(a)),
            (r = this._map.layerPointToLatLng(u))),
            this._tooltip.setLatLng(r);
        },
      });
    var ch = ti.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (n) {
        var r = n && n.tagName === "DIV" ? n : document.createElement("div"),
          a = this.options;
        if (
          (a.html instanceof Element
            ? (Yr(r), r.appendChild(a.html))
            : (r.innerHTML = a.html !== !1 ? a.html : ""),
          a.bgPos)
        ) {
          var u = B(a.bgPos);
          r.style.backgroundPosition = -u.x + "px " + -u.y + "px";
        }
        return this._setIconStyles(r, "icon"), r;
      },
      createShadow: function () {
        return null;
      },
    });
    function hv(n) {
      return new ch(n);
    }
    ti.Default = Qi;
    var Ji = St.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: W.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (n) {
        x(this, n);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (n) {
        n._addZoomLimit(this);
      },
      onRemove: function (n) {
        this._removeAllTiles(),
          me(this._container),
          n._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (Xn(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (Yn(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (n) {
        return (this.options.opacity = n), this._updateOpacity(), this;
      },
      setZIndex: function (n) {
        return (this.options.zIndex = n), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var n = this._clampZoom(this._map.getZoom());
          n !== this._tileZoom && ((this._tileZoom = n), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var n = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = m(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (n.move = this._onMove)),
          this._zoomAnimated && (n.zoomanim = this._animateZoom),
          n
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var n = this.options.tileSize;
        return n instanceof R ? n : new R(n, n);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (n) {
        for (
          var r = this.getPane().children,
            a = -n(-1 / 0, 1 / 0),
            u = 0,
            h = r.length,
            p;
          u < h;
          u++
        )
          (p = r[u].style.zIndex),
            r[u] !== this._container && p && (a = n(a, +p));
        isFinite(a) &&
          ((this.options.zIndex = a + n(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !W.ielt9) {
          ht(this._container, this.options.opacity);
          var n = +new Date(),
            r = !1,
            a = !1;
          for (var u in this._tiles) {
            var h = this._tiles[u];
            if (!(!h.current || !h.loaded)) {
              var p = Math.min(1, (n - h.loaded) / 200);
              ht(h.el, p),
                p < 1
                  ? (r = !0)
                  : (h.active ? (a = !0) : this._onOpaqueTile(h),
                    (h.active = !0));
            }
          }
          a && !this._noPrune && this._pruneTiles(),
            r &&
              (ze(this._fadeFrame),
              (this._fadeFrame = le(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: _,
      _initContainer: function () {
        this._container ||
          ((this._container = oe(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var n = this._tileZoom,
          r = this.options.maxZoom;
        if (n !== void 0) {
          for (var a in this._levels)
            (a = Number(a)),
              this._levels[a].el.children.length || a === n
                ? ((this._levels[a].el.style.zIndex = r - Math.abs(n - a)),
                  this._onUpdateLevel(a))
                : (me(this._levels[a].el),
                  this._removeTilesAtZoom(a),
                  this._onRemoveLevel(a),
                  delete this._levels[a]);
          var u = this._levels[n],
            h = this._map;
          return (
            u ||
              ((u = this._levels[n] = {}),
              (u.el = oe(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (u.el.style.zIndex = r),
              (u.origin = h
                .project(h.unproject(h.getPixelOrigin()), n)
                .round()),
              (u.zoom = n),
              this._setZoomTransform(u, h.getCenter(), h.getZoom()),
              _(u.el.offsetWidth),
              this._onCreateLevel(u)),
            (this._level = u),
            u
          );
        }
      },
      _onUpdateLevel: _,
      _onRemoveLevel: _,
      _onCreateLevel: _,
      _pruneTiles: function () {
        if (this._map) {
          var n,
            r,
            a = this._map.getZoom();
          if (a > this.options.maxZoom || a < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (n in this._tiles) (r = this._tiles[n]), (r.retain = r.current);
          for (n in this._tiles)
            if (((r = this._tiles[n]), r.current && !r.active)) {
              var u = r.coords;
              this._retainParent(u.x, u.y, u.z, u.z - 5) ||
                this._retainChildren(u.x, u.y, u.z, u.z + 2);
            }
          for (n in this._tiles) this._tiles[n].retain || this._removeTile(n);
        }
      },
      _removeTilesAtZoom: function (n) {
        for (var r in this._tiles)
          this._tiles[r].coords.z === n && this._removeTile(r);
      },
      _removeAllTiles: function () {
        for (var n in this._tiles) this._removeTile(n);
      },
      _invalidateAll: function () {
        for (var n in this._levels)
          me(this._levels[n].el),
            this._onRemoveLevel(Number(n)),
            delete this._levels[n];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (n, r, a, u) {
        var h = Math.floor(n / 2),
          p = Math.floor(r / 2),
          w = a - 1,
          T = new R(+h, +p);
        T.z = +w;
        var O = this._tileCoordsToKey(T),
          I = this._tiles[O];
        return I && I.active
          ? ((I.retain = !0), !0)
          : (I && I.loaded && (I.retain = !0),
            w > u ? this._retainParent(h, p, w, u) : !1);
      },
      _retainChildren: function (n, r, a, u) {
        for (var h = 2 * n; h < 2 * n + 2; h++)
          for (var p = 2 * r; p < 2 * r + 2; p++) {
            var w = new R(h, p);
            w.z = a + 1;
            var T = this._tileCoordsToKey(w),
              O = this._tiles[T];
            if (O && O.active) {
              O.retain = !0;
              continue;
            } else O && O.loaded && (O.retain = !0);
            a + 1 < u && this._retainChildren(h, p, a + 1, u);
          }
      },
      _resetView: function (n) {
        var r = n && (n.pinch || n.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), r, r);
      },
      _animateZoom: function (n) {
        this._setView(n.center, n.zoom, !0, n.noUpdate);
      },
      _clampZoom: function (n) {
        var r = this.options;
        return r.minNativeZoom !== void 0 && n < r.minNativeZoom
          ? r.minNativeZoom
          : r.maxNativeZoom !== void 0 && r.maxNativeZoom < n
          ? r.maxNativeZoom
          : n;
      },
      _setView: function (n, r, a, u) {
        var h = Math.round(r);
        (this.options.maxZoom !== void 0 && h > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && h < this.options.minZoom)
          ? (h = void 0)
          : (h = this._clampZoom(h));
        var p = this.options.updateWhenZooming && h !== this._tileZoom;
        (!u || p) &&
          ((this._tileZoom = h),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          h !== void 0 && this._update(n),
          a || this._pruneTiles(),
          (this._noPrune = !!a)),
          this._setZoomTransforms(n, r);
      },
      _setZoomTransforms: function (n, r) {
        for (var a in this._levels)
          this._setZoomTransform(this._levels[a], n, r);
      },
      _setZoomTransform: function (n, r, a) {
        var u = this._map.getZoomScale(a, n.zoom),
          h = n.origin
            .multiplyBy(u)
            .subtract(this._map._getNewPixelOrigin(r, a))
            .round();
        W.any3d ? Mn(n.el, h, u) : Pe(n.el, h);
      },
      _resetGrid: function () {
        var n = this._map,
          r = n.options.crs,
          a = (this._tileSize = this.getTileSize()),
          u = this._tileZoom,
          h = this._map.getPixelWorldBounds(this._tileZoom);
        h && (this._globalTileRange = this._pxBoundsToTileRange(h)),
          (this._wrapX = r.wrapLng &&
            !this.options.noWrap && [
              Math.floor(n.project([0, r.wrapLng[0]], u).x / a.x),
              Math.ceil(n.project([0, r.wrapLng[1]], u).x / a.y),
            ]),
          (this._wrapY = r.wrapLat &&
            !this.options.noWrap && [
              Math.floor(n.project([r.wrapLat[0], 0], u).y / a.x),
              Math.ceil(n.project([r.wrapLat[1], 0], u).y / a.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (n) {
        var r = this._map,
          a = r._animatingZoom
            ? Math.max(r._animateToZoom, r.getZoom())
            : r.getZoom(),
          u = r.getZoomScale(a, this._tileZoom),
          h = r.project(n, this._tileZoom).floor(),
          p = r.getSize().divideBy(u * 2);
        return new V(h.subtract(p), h.add(p));
      },
      _update: function (n) {
        var r = this._map;
        if (r) {
          var a = this._clampZoom(r.getZoom());
          if (
            (n === void 0 && (n = r.getCenter()), this._tileZoom !== void 0)
          ) {
            var u = this._getTiledPixelBounds(n),
              h = this._pxBoundsToTileRange(u),
              p = h.getCenter(),
              w = [],
              T = this.options.keepBuffer,
              O = new V(
                h.getBottomLeft().subtract([T, -T]),
                h.getTopRight().add([T, -T])
              );
            if (
              !(
                isFinite(h.min.x) &&
                isFinite(h.min.y) &&
                isFinite(h.max.x) &&
                isFinite(h.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var I in this._tiles) {
              var F = this._tiles[I].coords;
              (F.z !== this._tileZoom || !O.contains(new R(F.x, F.y))) &&
                (this._tiles[I].current = !1);
            }
            if (Math.abs(a - this._tileZoom) > 1) {
              this._setView(n, a);
              return;
            }
            for (var $ = h.min.y; $ <= h.max.y; $++)
              for (var X = h.min.x; X <= h.max.x; X++) {
                var We = new R(X, $);
                if (((We.z = this._tileZoom), !!this._isValidTile(We))) {
                  var Me = this._tiles[this._tileCoordsToKey(We)];
                  Me ? (Me.current = !0) : w.push(We);
                }
              }
            if (
              (w.sort(function (Qe, oi) {
                return Qe.distanceTo(p) - oi.distanceTo(p);
              }),
              w.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var ft = document.createDocumentFragment();
              for (X = 0; X < w.length; X++) this._addTile(w[X], ft);
              this._level.el.appendChild(ft);
            }
          }
        }
      },
      _isValidTile: function (n) {
        var r = this._map.options.crs;
        if (!r.infinite) {
          var a = this._globalTileRange;
          if (
            (!r.wrapLng && (n.x < a.min.x || n.x > a.max.x)) ||
            (!r.wrapLat && (n.y < a.min.y || n.y > a.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var u = this._tileCoordsToBounds(n);
        return ae(this.options.bounds).overlaps(u);
      },
      _keyToBounds: function (n) {
        return this._tileCoordsToBounds(this._keyToTileCoords(n));
      },
      _tileCoordsToNwSe: function (n) {
        var r = this._map,
          a = this.getTileSize(),
          u = n.scaleBy(a),
          h = u.add(a),
          p = r.unproject(u, n.z),
          w = r.unproject(h, n.z);
        return [p, w];
      },
      _tileCoordsToBounds: function (n) {
        var r = this._tileCoordsToNwSe(n),
          a = new Te(r[0], r[1]);
        return this.options.noWrap || (a = this._map.wrapLatLngBounds(a)), a;
      },
      _tileCoordsToKey: function (n) {
        return n.x + ":" + n.y + ":" + n.z;
      },
      _keyToTileCoords: function (n) {
        var r = n.split(":"),
          a = new R(+r[0], +r[1]);
        return (a.z = +r[2]), a;
      },
      _removeTile: function (n) {
        var r = this._tiles[n];
        r &&
          (me(r.el),
          delete this._tiles[n],
          this.fire("tileunload", {
            tile: r.el,
            coords: this._keyToTileCoords(n),
          }));
      },
      _initTile: function (n) {
        Q(n, "leaflet-tile");
        var r = this.getTileSize();
        (n.style.width = r.x + "px"),
          (n.style.height = r.y + "px"),
          (n.onselectstart = _),
          (n.onmousemove = _),
          W.ielt9 && this.options.opacity < 1 && ht(n, this.options.opacity);
      },
      _addTile: function (n, r) {
        var a = this._getTilePos(n),
          u = this._tileCoordsToKey(n),
          h = this.createTile(this._wrapCoords(n), c(this._tileReady, this, n));
        this._initTile(h),
          this.createTile.length < 2 &&
            le(c(this._tileReady, this, n, null, h)),
          Pe(h, a),
          (this._tiles[u] = { el: h, coords: n, current: !0 }),
          r.appendChild(h),
          this.fire("tileloadstart", { tile: h, coords: n });
      },
      _tileReady: function (n, r, a) {
        r && this.fire("tileerror", { error: r, tile: a, coords: n });
        var u = this._tileCoordsToKey(n);
        (a = this._tiles[u]),
          a &&
            ((a.loaded = +new Date()),
            this._map._fadeAnimated
              ? (ht(a.el, 0),
                ze(this._fadeFrame),
                (this._fadeFrame = le(this._updateOpacity, this)))
              : ((a.active = !0), this._pruneTiles()),
            r ||
              (Q(a.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: a.el, coords: n })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              W.ielt9 || !this._map._fadeAnimated
                ? le(this._pruneTiles, this)
                : setTimeout(c(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (n) {
        return n.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (n) {
        var r = new R(
          this._wrapX ? g(n.x, this._wrapX) : n.x,
          this._wrapY ? g(n.y, this._wrapY) : n.y
        );
        return (r.z = n.z), r;
      },
      _pxBoundsToTileRange: function (n) {
        var r = this.getTileSize();
        return new V(
          n.min.unscaleBy(r).floor(),
          n.max.unscaleBy(r).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var n in this._tiles) if (!this._tiles[n].loaded) return !1;
        return !0;
      },
    });
    function dv(n) {
      return new Ji(n);
    }
    var ri = Ji.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (n, r) {
        (this._url = n),
          (r = x(this, r)),
          r.detectRetina && W.retina && r.maxZoom > 0
            ? ((r.tileSize = Math.floor(r.tileSize / 2)),
              r.zoomReverse
                ? (r.zoomOffset--,
                  (r.minZoom = Math.min(r.maxZoom, r.minZoom + 1)))
                : (r.zoomOffset++,
                  (r.maxZoom = Math.max(r.minZoom, r.maxZoom - 1))),
              (r.minZoom = Math.max(0, r.minZoom)))
            : r.zoomReverse
            ? (r.minZoom = Math.min(r.maxZoom, r.minZoom))
            : (r.maxZoom = Math.max(r.minZoom, r.maxZoom)),
          typeof r.subdomains == "string" &&
            (r.subdomains = r.subdomains.split("")),
          this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (n, r) {
        return (
          this._url === n && r === void 0 && (r = !0),
          (this._url = n),
          r || this.redraw(),
          this
        );
      },
      createTile: function (n, r) {
        var a = document.createElement("img");
        return (
          G(a, "load", c(this._tileOnLoad, this, r, a)),
          G(a, "error", c(this._tileOnError, this, r, a)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (a.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (a.referrerPolicy = this.options.referrerPolicy),
          (a.alt = ""),
          (a.src = this.getTileUrl(n)),
          a
        );
      },
      getTileUrl: function (n) {
        var r = {
          r: W.retina ? "@2x" : "",
          s: this._getSubdomain(n),
          x: n.x,
          y: n.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var a = this._globalTileRange.max.y - n.y;
          this.options.tms && (r.y = a), (r["-y"] = a);
        }
        return y(this._url, s(r, this.options));
      },
      _tileOnLoad: function (n, r) {
        W.ielt9 ? setTimeout(c(n, this, null, r), 0) : n(null, r);
      },
      _tileOnError: function (n, r, a) {
        var u = this.options.errorTileUrl;
        u && r.getAttribute("src") !== u && (r.src = u), n(a, r);
      },
      _onTileRemove: function (n) {
        n.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var n = this._tileZoom,
          r = this.options.maxZoom,
          a = this.options.zoomReverse,
          u = this.options.zoomOffset;
        return a && (n = r - n), n + u;
      },
      _getSubdomain: function (n) {
        var r = Math.abs(n.x + n.y) % this.options.subdomains.length;
        return this.options.subdomains[r];
      },
      _abortLoading: function () {
        var n, r;
        for (n in this._tiles)
          if (
            this._tiles[n].coords.z !== this._tileZoom &&
            ((r = this._tiles[n].el),
            (r.onload = _),
            (r.onerror = _),
            !r.complete)
          ) {
            r.src = D;
            var a = this._tiles[n].coords;
            me(r),
              delete this._tiles[n],
              this.fire("tileabort", { tile: r, coords: a });
          }
      },
      _removeTile: function (n) {
        var r = this._tiles[n];
        if (r)
          return (
            r.el.setAttribute("src", D), Ji.prototype._removeTile.call(this, n)
          );
      },
      _tileReady: function (n, r, a) {
        if (!(!this._map || (a && a.getAttribute("src") === D)))
          return Ji.prototype._tileReady.call(this, n, r, a);
      },
    });
    function hh(n, r) {
      return new ri(n, r);
    }
    var dh = ri.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (n, r) {
        this._url = n;
        var a = s({}, this.defaultWmsParams);
        for (var u in r) u in this.options || (a[u] = r[u]);
        r = x(this, r);
        var h = r.detectRetina && W.retina ? 2 : 1,
          p = this.getTileSize();
        (a.width = p.x * h), (a.height = p.y * h), (this.wmsParams = a);
      },
      onAdd: function (n) {
        (this._crs = this.options.crs || n.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var r = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[r] = this._crs.code), ri.prototype.onAdd.call(this, n);
      },
      getTileUrl: function (n) {
        var r = this._tileCoordsToNwSe(n),
          a = this._crs,
          u = ne(a.project(r[0]), a.project(r[1])),
          h = u.min,
          p = u.max,
          w = (
            this._wmsVersion >= 1.3 && this._crs === rh
              ? [h.y, h.x, p.y, p.x]
              : [h.x, h.y, p.x, p.y]
          ).join(","),
          T = ri.prototype.getTileUrl.call(this, n);
        return (
          T +
          A(this.wmsParams, T, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          w
        );
      },
      setParams: function (n, r) {
        return s(this.wmsParams, n), r || this.redraw(), this;
      },
    });
    function fv(n, r) {
      return new dh(n, r);
    }
    (ri.WMS = dh), (hh.wms = fv);
    var $t = St.extend({
        options: { padding: 0.1 },
        initialize: function (n) {
          x(this, n), f(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            Q(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this);
        },
        onRemove: function () {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var n = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (n.zoomanim = this._onAnimZoom), n;
        },
        _onAnimZoom: function (n) {
          this._updateTransform(n.center, n.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (n, r) {
          var a = this._map.getZoomScale(r, this._zoom),
            u = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            h = this._map.project(this._center, r),
            p = u
              .multiplyBy(-a)
              .add(h)
              .subtract(this._map._getNewPixelOrigin(n, r));
          W.any3d ? Mn(this._container, p, a) : Pe(this._container, p);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var n in this._layers) this._layers[n]._reset();
        },
        _onZoomEnd: function () {
          for (var n in this._layers) this._layers[n]._project();
        },
        _updatePaths: function () {
          for (var n in this._layers) this._layers[n]._update();
        },
        _update: function () {
          var n = this.options.padding,
            r = this._map.getSize(),
            a = this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();
          (this._bounds = new V(a, a.add(r.multiplyBy(1 + n * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      fh = $t.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var n = $t.prototype.getEvents.call(this);
          return (n.viewprereset = this._onViewPreReset), n;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          $t.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var n = (this._container = document.createElement("canvas"));
          G(n, "mousemove", this._onMouseMove, this),
            G(
              n,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this
            ),
            G(n, "mouseout", this._handleMouseOut, this),
            (n._leaflet_disable_events = !0),
            (this._ctx = n.getContext("2d"));
        },
        _destroyContainer: function () {
          ze(this._redrawRequest),
            delete this._ctx,
            me(this._container),
            ue(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var n;
            this._redrawBounds = null;
            for (var r in this._layers) (n = this._layers[r]), n._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            $t.prototype._update.call(this);
            var n = this._bounds,
              r = this._container,
              a = n.getSize(),
              u = W.retina ? 2 : 1;
            Pe(r, n.min),
              (r.width = u * a.x),
              (r.height = u * a.y),
              (r.style.width = a.x + "px"),
              (r.style.height = a.y + "px"),
              W.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-n.min.x, -n.min.y),
              this.fire("update");
          }
        },
        _reset: function () {
          $t.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (n) {
          this._updateDashArray(n), (this._layers[f(n)] = n);
          var r = (n._order = { layer: n, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = r),
            (this._drawLast = r),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (n) {
          this._requestRedraw(n);
        },
        _removePath: function (n) {
          var r = n._order,
            a = r.next,
            u = r.prev;
          a ? (a.prev = u) : (this._drawLast = u),
            u ? (u.next = a) : (this._drawFirst = a),
            delete n._order,
            delete this._layers[f(n)],
            this._requestRedraw(n);
        },
        _updatePath: function (n) {
          this._extendRedrawBounds(n),
            n._project(),
            n._update(),
            this._requestRedraw(n);
        },
        _updateStyle: function (n) {
          this._updateDashArray(n), this._requestRedraw(n);
        },
        _updateDashArray: function (n) {
          if (typeof n.options.dashArray == "string") {
            var r = n.options.dashArray.split(/[, ]+/),
              a = [],
              u,
              h;
            for (h = 0; h < r.length; h++) {
              if (((u = Number(r[h])), isNaN(u))) return;
              a.push(u);
            }
            n.options._dashArray = a;
          } else n.options._dashArray = n.options.dashArray;
        },
        _requestRedraw: function (n) {
          this._map &&
            (this._extendRedrawBounds(n),
            (this._redrawRequest =
              this._redrawRequest || le(this._redraw, this)));
        },
        _extendRedrawBounds: function (n) {
          if (n._pxBounds) {
            var r = (n.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new V()),
              this._redrawBounds.extend(n._pxBounds.min.subtract([r, r])),
              this._redrawBounds.extend(n._pxBounds.max.add([r, r]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var n = this._redrawBounds;
          if (n) {
            var r = n.getSize();
            this._ctx.clearRect(n.min.x, n.min.y, r.x, r.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var n,
            r = this._redrawBounds;
          if ((this._ctx.save(), r)) {
            var a = r.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(r.min.x, r.min.y, a.x, a.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var u = this._drawFirst; u; u = u.next)
            (n = u.layer),
              (!r || (n._pxBounds && n._pxBounds.intersects(r))) &&
                n._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (n, r) {
          if (this._drawing) {
            var a,
              u,
              h,
              p,
              w = n._parts,
              T = w.length,
              O = this._ctx;
            if (T) {
              for (O.beginPath(), a = 0; a < T; a++) {
                for (u = 0, h = w[a].length; u < h; u++)
                  (p = w[a][u]), O[u ? "lineTo" : "moveTo"](p.x, p.y);
                r && O.closePath();
              }
              this._fillStroke(O, n);
            }
          }
        },
        _updateCircle: function (n) {
          if (!(!this._drawing || n._empty())) {
            var r = n._point,
              a = this._ctx,
              u = Math.max(Math.round(n._radius), 1),
              h = (Math.max(Math.round(n._radiusY), 1) || u) / u;
            h !== 1 && (a.save(), a.scale(1, h)),
              a.beginPath(),
              a.arc(r.x, r.y / h, u, 0, Math.PI * 2, !1),
              h !== 1 && a.restore(),
              this._fillStroke(a, n);
          }
        },
        _fillStroke: function (n, r) {
          var a = r.options;
          a.fill &&
            ((n.globalAlpha = a.fillOpacity),
            (n.fillStyle = a.fillColor || a.color),
            n.fill(a.fillRule || "evenodd")),
            a.stroke &&
              a.weight !== 0 &&
              (n.setLineDash &&
                n.setLineDash((r.options && r.options._dashArray) || []),
              (n.globalAlpha = a.opacity),
              (n.lineWidth = a.weight),
              (n.strokeStyle = a.color),
              (n.lineCap = a.lineCap),
              (n.lineJoin = a.lineJoin),
              n.stroke());
        },
        _onClick: function (n) {
          for (
            var r = this._map.mouseEventToLayerPoint(n),
              a,
              u,
              h = this._drawFirst;
            h;
            h = h.next
          )
            (a = h.layer),
              a.options.interactive &&
                a._containsPoint(r) &&
                (!(n.type === "click" || n.type === "preclick") ||
                  !this._map._draggableMoved(a)) &&
                (u = a);
          this._fireEvent(u ? [u] : !1, n);
        },
        _onMouseMove: function (n) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var r = this._map.mouseEventToLayerPoint(n);
            this._handleMouseHover(n, r);
          }
        },
        _handleMouseOut: function (n) {
          var r = this._hoveredLayer;
          r &&
            (xe(this._container, "leaflet-interactive"),
            this._fireEvent([r], n, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (n, r) {
          if (!this._mouseHoverThrottled) {
            for (var a, u, h = this._drawFirst; h; h = h.next)
              (a = h.layer),
                a.options.interactive && a._containsPoint(r) && (u = a);
            u !== this._hoveredLayer &&
              (this._handleMouseOut(n),
              u &&
                (Q(this._container, "leaflet-interactive"),
                this._fireEvent([u], n, "mouseover"),
                (this._hoveredLayer = u))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                n
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                c(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (n, r, a) {
          this._map._fireDOMEvent(r, a || r.type, n);
        },
        _bringToFront: function (n) {
          var r = n._order;
          if (r) {
            var a = r.next,
              u = r.prev;
            if (a) a.prev = u;
            else return;
            u ? (u.next = a) : a && (this._drawFirst = a),
              (r.prev = this._drawLast),
              (this._drawLast.next = r),
              (r.next = null),
              (this._drawLast = r),
              this._requestRedraw(n);
          }
        },
        _bringToBack: function (n) {
          var r = n._order;
          if (r) {
            var a = r.next,
              u = r.prev;
            if (u) u.next = a;
            else return;
            a ? (a.prev = u) : u && (this._drawLast = u),
              (r.prev = null),
              (r.next = this._drawFirst),
              (this._drawFirst.prev = r),
              (this._drawFirst = r),
              this._requestRedraw(n);
          }
        },
      });
    function ph(n) {
      return W.canvas ? new fh(n) : null;
    }
    var Xi = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (n) {
              return document.createElement("<lvml:" + n + ' class="lvml">');
            }
          );
        } catch {}
        return function (n) {
          return document.createElement(
            "<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      pv = {
        _initContainer: function () {
          this._container = oe("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            ($t.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (n) {
          var r = (n._container = Xi("shape"));
          Q(r, "leaflet-vml-shape " + (this.options.className || "")),
            (r.coordsize = "1 1"),
            (n._path = Xi("path")),
            r.appendChild(n._path),
            this._updateStyle(n),
            (this._layers[f(n)] = n);
        },
        _addPath: function (n) {
          var r = n._container;
          this._container.appendChild(r),
            n.options.interactive && n.addInteractiveTarget(r);
        },
        _removePath: function (n) {
          var r = n._container;
          me(r), n.removeInteractiveTarget(r), delete this._layers[f(n)];
        },
        _updateStyle: function (n) {
          var r = n._stroke,
            a = n._fill,
            u = n.options,
            h = n._container;
          (h.stroked = !!u.stroke),
            (h.filled = !!u.fill),
            u.stroke
              ? (r || (r = n._stroke = Xi("stroke")),
                h.appendChild(r),
                (r.weight = u.weight + "px"),
                (r.color = u.color),
                (r.opacity = u.opacity),
                u.dashArray
                  ? (r.dashStyle = k(u.dashArray)
                      ? u.dashArray.join(" ")
                      : u.dashArray.replace(/( *, *)/g, " "))
                  : (r.dashStyle = ""),
                (r.endcap = u.lineCap.replace("butt", "flat")),
                (r.joinstyle = u.lineJoin))
              : r && (h.removeChild(r), (n._stroke = null)),
            u.fill
              ? (a || (a = n._fill = Xi("fill")),
                h.appendChild(a),
                (a.color = u.fillColor || u.color),
                (a.opacity = u.fillOpacity))
              : a && (h.removeChild(a), (n._fill = null));
        },
        _updateCircle: function (n) {
          var r = n._point.round(),
            a = Math.round(n._radius),
            u = Math.round(n._radiusY || a);
          this._setPath(
            n,
            n._empty()
              ? "M0 0"
              : "AL " +
                  r.x +
                  "," +
                  r.y +
                  " " +
                  a +
                  "," +
                  u +
                  " 0," +
                  65535 * 360
          );
        },
        _setPath: function (n, r) {
          n._path.v = r;
        },
        _bringToFront: function (n) {
          Xn(n._container);
        },
        _bringToBack: function (n) {
          Yn(n._container);
        },
      },
      mo = W.vml ? Xi : gc,
      Yi = $t.extend({
        _initContainer: function () {
          (this._container = mo("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = mo("g")),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          me(this._container),
            ue(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            $t.prototype._update.call(this);
            var n = this._bounds,
              r = n.getSize(),
              a = this._container;
            (!this._svgSize || !this._svgSize.equals(r)) &&
              ((this._svgSize = r),
              a.setAttribute("width", r.x),
              a.setAttribute("height", r.y)),
              Pe(a, n.min),
              a.setAttribute("viewBox", [n.min.x, n.min.y, r.x, r.y].join(" ")),
              this.fire("update");
          }
        },
        _initPath: function (n) {
          var r = (n._path = mo("path"));
          n.options.className && Q(r, n.options.className),
            n.options.interactive && Q(r, "leaflet-interactive"),
            this._updateStyle(n),
            (this._layers[f(n)] = n);
        },
        _addPath: function (n) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(n._path),
            n.addInteractiveTarget(n._path);
        },
        _removePath: function (n) {
          me(n._path),
            n.removeInteractiveTarget(n._path),
            delete this._layers[f(n)];
        },
        _updatePath: function (n) {
          n._project(), n._update();
        },
        _updateStyle: function (n) {
          var r = n._path,
            a = n.options;
          r &&
            (a.stroke
              ? (r.setAttribute("stroke", a.color),
                r.setAttribute("stroke-opacity", a.opacity),
                r.setAttribute("stroke-width", a.weight),
                r.setAttribute("stroke-linecap", a.lineCap),
                r.setAttribute("stroke-linejoin", a.lineJoin),
                a.dashArray
                  ? r.setAttribute("stroke-dasharray", a.dashArray)
                  : r.removeAttribute("stroke-dasharray"),
                a.dashOffset
                  ? r.setAttribute("stroke-dashoffset", a.dashOffset)
                  : r.removeAttribute("stroke-dashoffset"))
              : r.setAttribute("stroke", "none"),
            a.fill
              ? (r.setAttribute("fill", a.fillColor || a.color),
                r.setAttribute("fill-opacity", a.fillOpacity),
                r.setAttribute("fill-rule", a.fillRule || "evenodd"))
              : r.setAttribute("fill", "none"));
        },
        _updatePoly: function (n, r) {
          this._setPath(n, yc(n._parts, r));
        },
        _updateCircle: function (n) {
          var r = n._point,
            a = Math.max(Math.round(n._radius), 1),
            u = Math.max(Math.round(n._radiusY), 1) || a,
            h = "a" + a + "," + u + " 0 1,0 ",
            p = n._empty()
              ? "M0 0"
              : "M" +
                (r.x - a) +
                "," +
                r.y +
                h +
                a * 2 +
                ",0 " +
                h +
                -a * 2 +
                ",0 ";
          this._setPath(n, p);
        },
        _setPath: function (n, r) {
          n._path.setAttribute("d", r);
        },
        _bringToFront: function (n) {
          Xn(n._path);
        },
        _bringToBack: function (n) {
          Yn(n._path);
        },
      });
    W.vml && Yi.include(pv);
    function mh(n) {
      return W.svg || W.vml ? new Yi(n) : null;
    }
    ee.include({
      getRenderer: function (n) {
        var r =
          n.options.renderer ||
          this._getPaneRenderer(n.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          r || (r = this._renderer = this._createRenderer()),
          this.hasLayer(r) || this.addLayer(r),
          r
        );
      },
      _getPaneRenderer: function (n) {
        if (n === "overlayPane" || n === void 0) return !1;
        var r = this._paneRenderers[n];
        return (
          r === void 0 &&
            ((r = this._createRenderer({ pane: n })),
            (this._paneRenderers[n] = r)),
          r
        );
      },
      _createRenderer: function (n) {
        return (this.options.preferCanvas && ph(n)) || mh(n);
      },
    });
    var _h = ni.extend({
      initialize: function (n, r) {
        ni.prototype.initialize.call(this, this._boundsToLatLngs(n), r);
      },
      setBounds: function (n) {
        return this.setLatLngs(this._boundsToLatLngs(n));
      },
      _boundsToLatLngs: function (n) {
        return (
          (n = ae(n)),
          [
            n.getSouthWest(),
            n.getNorthWest(),
            n.getNorthEast(),
            n.getSouthEast(),
          ]
        );
      },
    });
    function mv(n, r) {
      return new _h(n, r);
    }
    (Yi.create = mo),
      (Yi.pointsToPath = yc),
      (Wt.geometryToLayer = ao),
      (Wt.coordsToLatLng = Ea),
      (Wt.coordsToLatLngs = lo),
      (Wt.latLngToCoords = La),
      (Wt.latLngsToCoords = uo),
      (Wt.getFeature = ii),
      (Wt.asFeature = co),
      ee.mergeOptions({ boxZoom: !0 });
    var vh = Mt.extend({
      initialize: function (n) {
        (this._map = n),
          (this._container = n._container),
          (this._pane = n._panes.overlayPane),
          (this._resetStateTimeout = 0),
          n.on("unload", this._destroy, this);
      },
      addHooks: function () {
        G(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        ue(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        me(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (n) {
        if (!n.shiftKey || (n.which !== 1 && n.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          Wi(),
          aa(),
          (this._startPoint = this._map.mouseEventToContainerPoint(n)),
          G(
            document,
            {
              contextmenu: An,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (n) {
        this._moved ||
          ((this._moved = !0),
          (this._box = oe("div", "leaflet-zoom-box", this._container)),
          Q(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(n));
        var r = new V(this._point, this._startPoint),
          a = r.getSize();
        Pe(this._box, r.min),
          (this._box.style.width = a.x + "px"),
          (this._box.style.height = a.y + "px");
      },
      _finish: function () {
        this._moved &&
          (me(this._box), xe(this._container, "leaflet-crosshair")),
          $i(),
          la(),
          ue(
            document,
            {
              contextmenu: An,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (n) {
        if (
          !(n.which !== 1 && n.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              c(this._resetState, this),
              0
            ));
          var r = new Te(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(r).fire("boxzoomend", { boxZoomBounds: r });
        }
      },
      _onKeyDown: function (n) {
        n.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    ee.addInitHook("addHandler", "boxZoom", vh),
      ee.mergeOptions({ doubleClickZoom: !0 });
    var gh = Mt.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (n) {
        var r = this._map,
          a = r.getZoom(),
          u = r.options.zoomDelta,
          h = n.originalEvent.shiftKey ? a - u : a + u;
        r.options.doubleClickZoom === "center"
          ? r.setZoom(h)
          : r.setZoomAround(n.containerPoint, h);
      },
    });
    ee.addInitHook("addHandler", "doubleClickZoom", gh),
      ee.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var yh = Mt.extend({
      addHooks: function () {
        if (!this._draggable) {
          var n = this._map;
          (this._draggable = new on(n._mapPane, n._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            n.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              n.on("zoomend", this._onZoomEnd, this),
              n.whenReady(this._onZoomEnd, this));
        }
        Q(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        xe(this._map._container, "leaflet-grab"),
          xe(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var n = this._map;
        if (
          (n._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var r = ae(this._map.options.maxBounds);
          (this._offsetLimit = ne(
            this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(r.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        n.fire("movestart").fire("dragstart"),
          n.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (n) {
        if (this._map.options.inertia) {
          var r = (this._lastTime = +new Date()),
            a = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(a), this._times.push(r), this._prunePositions(r);
        }
        this._map.fire("move", n).fire("drag", n);
      },
      _prunePositions: function (n) {
        for (; this._positions.length > 1 && n - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var n = this._map.getSize().divideBy(2),
          r = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = r.subtract(n).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (n, r) {
        return n - (n - r) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var n = this._draggable._newPos.subtract(this._draggable._startPos),
            r = this._offsetLimit;
          n.x < r.min.x && (n.x = this._viscousLimit(n.x, r.min.x)),
            n.y < r.min.y && (n.y = this._viscousLimit(n.y, r.min.y)),
            n.x > r.max.x && (n.x = this._viscousLimit(n.x, r.max.x)),
            n.y > r.max.y && (n.y = this._viscousLimit(n.y, r.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(n));
        }
      },
      _onPreDragWrap: function () {
        var n = this._worldWidth,
          r = Math.round(n / 2),
          a = this._initialWorldOffset,
          u = this._draggable._newPos.x,
          h = ((u - r + a) % n) + r - a,
          p = ((u + r + a) % n) - r - a,
          w = Math.abs(h + a) < Math.abs(p + a) ? h : p;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = w);
      },
      _onDragEnd: function (n) {
        var r = this._map,
          a = r.options,
          u = !a.inertia || n.noInertia || this._times.length < 2;
        if ((r.fire("dragend", n), u)) r.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var h = this._lastPos.subtract(this._positions[0]),
            p = (this._lastTime - this._times[0]) / 1e3,
            w = a.easeLinearity,
            T = h.multiplyBy(w / p),
            O = T.distanceTo([0, 0]),
            I = Math.min(a.inertiaMaxSpeed, O),
            F = T.multiplyBy(I / O),
            $ = I / (a.inertiaDeceleration * w),
            X = F.multiplyBy(-$ / 2).round();
          !X.x && !X.y
            ? r.fire("moveend")
            : ((X = r._limitOffset(X, r.options.maxBounds)),
              le(function () {
                r.panBy(X, {
                  duration: $,
                  easeLinearity: w,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    ee.addInitHook("addHandler", "dragging", yh),
      ee.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var wh = Mt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (n) {
        (this._map = n),
          this._setPanDelta(n.options.keyboardPanDelta),
          this._setZoomDelta(n.options.zoomDelta);
      },
      addHooks: function () {
        var n = this._map._container;
        n.tabIndex <= 0 && (n.tabIndex = "0"),
          G(
            n,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          ue(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var n = document.body,
            r = document.documentElement,
            a = n.scrollTop || r.scrollTop,
            u = n.scrollLeft || r.scrollLeft;
          this._map._container.focus(), window.scrollTo(u, a);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire("focus");
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire("blur");
      },
      _setPanDelta: function (n) {
        var r = (this._panKeys = {}),
          a = this.keyCodes,
          u,
          h;
        for (u = 0, h = a.left.length; u < h; u++) r[a.left[u]] = [-1 * n, 0];
        for (u = 0, h = a.right.length; u < h; u++) r[a.right[u]] = [n, 0];
        for (u = 0, h = a.down.length; u < h; u++) r[a.down[u]] = [0, n];
        for (u = 0, h = a.up.length; u < h; u++) r[a.up[u]] = [0, -1 * n];
      },
      _setZoomDelta: function (n) {
        var r = (this._zoomKeys = {}),
          a = this.keyCodes,
          u,
          h;
        for (u = 0, h = a.zoomIn.length; u < h; u++) r[a.zoomIn[u]] = n;
        for (u = 0, h = a.zoomOut.length; u < h; u++) r[a.zoomOut[u]] = -n;
      },
      _addHooks: function () {
        G(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        ue(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (n) {
        if (!(n.altKey || n.ctrlKey || n.metaKey)) {
          var r = n.keyCode,
            a = this._map,
            u;
          if (r in this._panKeys) {
            if (!a._panAnim || !a._panAnim._inProgress)
              if (
                ((u = this._panKeys[r]),
                n.shiftKey && (u = B(u).multiplyBy(3)),
                a.options.maxBounds &&
                  (u = a._limitOffset(B(u), a.options.maxBounds)),
                a.options.worldCopyJump)
              ) {
                var h = a.wrapLatLng(
                  a.unproject(a.project(a.getCenter()).add(u))
                );
                a.panTo(h);
              } else a.panBy(u);
          } else if (r in this._zoomKeys)
            a.setZoom(a.getZoom() + (n.shiftKey ? 3 : 1) * this._zoomKeys[r]);
          else if (r === 27 && a._popup && a._popup.options.closeOnEscapeKey)
            a.closePopup();
          else return;
          An(n);
        }
      },
    });
    ee.addInitHook("addHandler", "keyboard", wh),
      ee.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var xh = Mt.extend({
      addHooks: function () {
        G(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        ue(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (n) {
        var r = $c(n),
          a = this._map.options.wheelDebounceTime;
        (this._delta += r),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(n)),
          this._startTime || (this._startTime = +new Date());
        var u = Math.max(a - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(c(this._performZoom, this), u)),
          An(n);
      },
      _performZoom: function () {
        var n = this._map,
          r = n.getZoom(),
          a = this._map.options.zoomSnap || 0;
        n._stop();
        var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          h = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(u))))) / Math.LN2,
          p = a ? Math.ceil(h / a) * a : h,
          w = n._limitZoom(r + (this._delta > 0 ? p : -p)) - r;
        (this._delta = 0),
          (this._startTime = null),
          w &&
            (n.options.scrollWheelZoom === "center"
              ? n.setZoom(r + w)
              : n.setZoomAround(this._lastMousePos, r + w));
      },
    });
    ee.addInitHook("addHandler", "scrollWheelZoom", xh);
    var _v = 600;
    ee.mergeOptions({
      tapHold: W.touchNative && W.safari && W.mobile,
      tapTolerance: 15,
    });
    var Sh = Mt.extend({
      addHooks: function () {
        G(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        ue(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (n) {
        if ((clearTimeout(this._holdTimeout), n.touches.length === 1)) {
          var r = n.touches[0];
          (this._startPos = this._newPos = new R(r.clientX, r.clientY)),
            (this._holdTimeout = setTimeout(
              c(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (G(document, "touchend", je),
                    G(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent("contextmenu", r));
              }, this),
              _v
            )),
            G(document, "touchend touchcancel contextmenu", this._cancel, this),
            G(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function n() {
        ue(document, "touchend", je), ue(document, "touchend touchcancel", n);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          ue(document, "touchend touchcancel contextmenu", this._cancel, this),
          ue(document, "touchmove", this._onMove, this);
      },
      _onMove: function (n) {
        var r = n.touches[0];
        this._newPos = new R(r.clientX, r.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (n, r) {
        var a = new MouseEvent(n, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: r.screenX,
          screenY: r.screenY,
          clientX: r.clientX,
          clientY: r.clientY,
        });
        (a._simulated = !0), r.target.dispatchEvent(a);
      },
    });
    ee.addInitHook("addHandler", "tapHold", Sh),
      ee.mergeOptions({ touchZoom: W.touch, bounceAtZoomLimits: !0 });
    var Ph = Mt.extend({
      addHooks: function () {
        Q(this._map._container, "leaflet-touch-zoom"),
          G(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function () {
        xe(this._map._container, "leaflet-touch-zoom"),
          ue(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function (n) {
        var r = this._map;
        if (
          !(
            !n.touches ||
            n.touches.length !== 2 ||
            r._animatingZoom ||
            this._zooming
          )
        ) {
          var a = r.mouseEventToContainerPoint(n.touches[0]),
            u = r.mouseEventToContainerPoint(n.touches[1]);
          (this._centerPoint = r.getSize()._divideBy(2)),
            (this._startLatLng = r.containerPointToLatLng(this._centerPoint)),
            r.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = r.containerPointToLatLng(
                a.add(u)._divideBy(2)
              )),
            (this._startDist = a.distanceTo(u)),
            (this._startZoom = r.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            r._stop(),
            G(document, "touchmove", this._onTouchMove, this),
            G(document, "touchend touchcancel", this._onTouchEnd, this),
            je(n);
        }
      },
      _onTouchMove: function (n) {
        if (!(!n.touches || n.touches.length !== 2 || !this._zooming)) {
          var r = this._map,
            a = r.mouseEventToContainerPoint(n.touches[0]),
            u = r.mouseEventToContainerPoint(n.touches[1]),
            h = a.distanceTo(u) / this._startDist;
          if (
            ((this._zoom = r.getScaleZoom(h, this._startZoom)),
            !r.options.bounceAtZoomLimits &&
              ((this._zoom < r.getMinZoom() && h < 1) ||
                (this._zoom > r.getMaxZoom() && h > 1)) &&
              (this._zoom = r._limitZoom(this._zoom)),
            r.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), h === 1)) return;
          } else {
            var p = a._add(u)._divideBy(2)._subtract(this._centerPoint);
            if (h === 1 && p.x === 0 && p.y === 0) return;
            this._center = r.unproject(
              r.project(this._pinchStartLatLng, this._zoom).subtract(p),
              this._zoom
            );
          }
          this._moved || (r._moveStart(!0, !1), (this._moved = !0)),
            ze(this._animRequest);
          var w = c(
            r._move,
            r,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          );
          (this._animRequest = le(w, this, !0)), je(n);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          ze(this._animRequest),
          ue(document, "touchmove", this._onTouchMove, this),
          ue(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              );
      },
    });
    ee.addInitHook("addHandler", "touchZoom", Ph),
      (ee.BoxZoom = vh),
      (ee.DoubleClickZoom = gh),
      (ee.Drag = yh),
      (ee.Keyboard = wh),
      (ee.ScrollWheelZoom = xh),
      (ee.TapHold = Sh),
      (ee.TouchZoom = Ph),
      (i.Bounds = V),
      (i.Browser = W),
      (i.CRS = Ge),
      (i.Canvas = fh),
      (i.Circle = Pa),
      (i.CircleMarker = so),
      (i.Class = ct),
      (i.Control = xt),
      (i.DivIcon = ch),
      (i.DivOverlay = Rt),
      (i.DomEvent = I_),
      (i.DomUtil = M_),
      (i.Draggable = on),
      (i.Evented = Ut),
      (i.FeatureGroup = bt),
      (i.GeoJSON = Wt),
      (i.GridLayer = Ji),
      (i.Handler = Mt),
      (i.Icon = ti),
      (i.ImageOverlay = ho),
      (i.LatLng = re),
      (i.LatLngBounds = Te),
      (i.Layer = St),
      (i.LayerGroup = ei),
      (i.LineUtil = q_),
      (i.Map = ee),
      (i.Marker = oo),
      (i.Mixin = U_),
      (i.Path = sn),
      (i.Point = R),
      (i.PolyUtil = b_),
      (i.Polygon = ni),
      (i.Polyline = Ht),
      (i.Popup = fo),
      (i.PosAnimation = Vc),
      (i.Projection = K_),
      (i.Rectangle = _h),
      (i.Renderer = $t),
      (i.SVG = Yi),
      (i.SVGOverlay = uh),
      (i.TileLayer = ri),
      (i.Tooltip = po),
      (i.Transformation = Gs),
      (i.Util = zn),
      (i.VideoOverlay = lh),
      (i.bind = c),
      (i.bounds = ne),
      (i.canvas = ph),
      (i.circle = nv),
      (i.circleMarker = tv),
      (i.control = Ki),
      (i.divIcon = hv),
      (i.extend = s),
      (i.featureGroup = X_),
      (i.geoJSON = ah),
      (i.geoJson = ov),
      (i.gridLayer = dv),
      (i.icon = Y_),
      (i.imageOverlay = sv),
      (i.latLng = K),
      (i.latLngBounds = ae),
      (i.layerGroup = J_),
      (i.map = A_),
      (i.marker = ev),
      (i.point = B),
      (i.polygon = rv),
      (i.polyline = iv),
      (i.popup = uv),
      (i.rectangle = mv),
      (i.setOptions = x),
      (i.stamp = f),
      (i.svg = mh),
      (i.svgOverlay = lv),
      (i.tileLayer = hh),
      (i.tooltip = cv),
      (i.transformation = Zi),
      (i.version = o),
      (i.videoOverlay = av);
    var vv = window.L;
    (i.noConflict = function () {
      return (window.L = vv), this;
    }),
      (window.L = i);
  });
})(su, su.exports);
var it = su.exports;
function pc(e, t, i) {
  return Object.freeze({ instance: e, context: t, container: i });
}
function mc(e, t) {
  return t == null
    ? function (o, s) {
        const l = N.useRef();
        return l.current || (l.current = e(o, s)), l;
      }
    : function (o, s) {
        const l = N.useRef();
        l.current || (l.current = e(o, s));
        const c = N.useRef(o),
          { instance: d } = l.current;
        return (
          N.useEffect(
            function () {
              c.current !== o && (t(d, o, c.current), (c.current = o));
            },
            [d, o, s]
          ),
          l
        );
      };
}
function x1(e, t) {
  N.useEffect(
    function () {
      return (
        (t.layerContainer ?? t.map).addLayer(e.instance),
        function () {
          var l;
          (l = t.layerContainer) == null || l.removeLayer(e.instance),
            t.map.removeLayer(e.instance);
        }
      );
    },
    [t, e]
  );
}
function Qm(e) {
  return function (i) {
    const o = dc(),
      s = e(fc(i, o), o);
    return (
      Vm(o.map, i.attribution),
      Gm(s.current, i.eventHandlers),
      x1(s.current, o),
      s
    );
  };
}
function S1(e, t) {
  const i = mc(e, t),
    o = Qm(i);
  return v1(o);
}
function P1(e, t) {
  const i = mc(e),
    o = w1(i, t);
  return g1(o);
}
function E1(e, t) {
  const i = mc(e, t),
    o = Qm(i);
  return y1(o);
}
function L1(e, t, i) {
  const { opacity: o, zIndex: s } = t;
  o != null && o !== i.opacity && e.setOpacity(o),
    s != null && s !== i.zIndex && e.setZIndex(s);
}
function k1() {
  return dc().map;
}
function C1(e) {
  const t = k1();
  return (
    N.useEffect(
      function () {
        return (
          t.on(e),
          function () {
            t.off(e);
          }
        );
      },
      [t, e]
    ),
    t
  );
}
function au() {
  return (
    (au =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var o in i)
            Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
        }
        return e;
      }),
    au.apply(this, arguments)
  );
}
function T1(
  {
    bounds: e,
    boundsOptions: t,
    center: i,
    children: o,
    className: s,
    id: l,
    placeholder: c,
    style: d,
    whenReady: f,
    zoom: m,
    ...g
  },
  _
) {
  const [E] = N.useState({ className: s, id: l, style: d }),
    [C, S] = N.useState(null);
  N.useImperativeHandle(_, () => (C == null ? void 0 : C.map) ?? null, [C]);
  const x = N.useCallback((P) => {
    if (P !== null && C === null) {
      const y = new it.Map(P, g);
      i != null && m != null ? y.setView(i, m) : e != null && y.fitBounds(e, t),
        f != null && y.whenReady(f),
        S(m1(y));
    }
  }, []);
  N.useEffect(
    () => () => {
      C == null || C.map.remove();
    },
    [C]
  );
  const A = C ? Sr.createElement(Km, { value: C }, o) : c ?? null;
  return Sr.createElement("div", au({}, E, { ref: x }), A);
}
const Jm = N.forwardRef(T1),
  Xm = S1(
    function ({ position: t, ...i }, o) {
      const s = new it.Marker(t, i);
      return pc(s, _1(o, { overlayContainer: s }));
    },
    function (t, i, o) {
      i.position !== o.position && t.setLatLng(i.position),
        i.icon != null && i.icon !== o.icon && t.setIcon(i.icon),
        i.zIndexOffset != null &&
          i.zIndexOffset !== o.zIndexOffset &&
          t.setZIndexOffset(i.zIndexOffset),
        i.opacity != null && i.opacity !== o.opacity && t.setOpacity(i.opacity),
        t.dragging != null &&
          i.draggable !== o.draggable &&
          (i.draggable === !0 ? t.dragging.enable() : t.dragging.disable());
    }
  ),
  Ym = P1(
    function (t, i) {
      const o = new it.Popup(t, i.overlayContainer);
      return pc(o, i);
    },
    function (t, i, { position: o }, s) {
      N.useEffect(
        function () {
          const { instance: c } = t;
          function d(m) {
            m.popup === c && (c.update(), s(!0));
          }
          function f(m) {
            m.popup === c && s(!1);
          }
          return (
            i.map.on({ popupopen: d, popupclose: f }),
            i.overlayContainer == null
              ? (o != null && c.setLatLng(o), c.openOn(i.map))
              : i.overlayContainer.bindPopup(c),
            function () {
              var g;
              i.map.off({ popupopen: d, popupclose: f }),
                (g = i.overlayContainer) == null || g.unbindPopup(),
                i.map.removeLayer(c);
            }
          );
        },
        [t, i, s, o]
      );
    }
  ),
  e_ = E1(
    function ({ url: t, ...i }, o) {
      const s = new it.TileLayer(t, fc(i, o));
      return pc(s, o);
    },
    function (t, i, o) {
      L1(t, i, o);
      const { url: s } = i;
      s != null && s !== o.url && t.setUrl(s);
    }
  );
function Vs(e) {
  console.log(e.longitude), console.log(e.latitude);
  function t() {
    N.useState(null);
    const i = C1({
      dblclick(o) {
        i.flyTo([e.longitude, e.latitude], i.getZoom())();
      },
    });
  }
  return v.jsx("div", {
    children:
      e.longitude &&
      v.jsxs(Jm, {
        center: [e.longitude, e.latitude],
        zoom: 13,
        scrollWheelZoom: !1,
        children: [
          v.jsx(e_, {
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
          v.jsx(Xm, {
            position: [e.longitude, e.latitude],
            children: v.jsx(Ym, {
              children: v.jsx("h2", { children: "adress a ajouté" }),
            }),
          }),
          v.jsx(t, {}),
        ],
      }),
  });
}
function O1() {
  const [e, t] = N.useState(null),
    [i, o] = N.useState(null),
    [s, l] = N.useState(null),
    c = Kr(),
    d = async (m) => {
      m.preventDefault(), console.log(m.target[0].value);
      try {
        const g = await ve.get(
          `https://api-adresse.data.gouv.fr/search/?q=${m.target[0].value}`
        );
        console.log(g.data),
          l(g.data.features[0].properties.label),
          t(g.data.features[0].geometry.coordinates[0]),
          o(g.data.features[0].geometry.coordinates[1]);
      } catch {}
    },
    f = async (m) => {
      m.preventDefault(), console.log(m.target[4].value);
      const g = new FormData();
      g.set("titre", m.target[0].value),
        g.set("date", m.target[1].value),
        g.set("hdd", m.target[2].value),
        g.set("description", m.target[3].value),
        g.set("longitude", i),
        g.set("latitude", e),
        g.set("flyer", m.target[4].files[0]),
        console.log(g);
      try {
        (await ve.post("http://localhost:3000/api/add-course/", g, {
          headers: { Authorization: localStorage.getItem("token") },
        })) && (console.log("course ajouté:"), c("/admin/all-courses"));
      } catch (_) {
        console.log(_);
      }
    };
  return v.jsx(v.Fragment, {
    children: v.jsx("div", {
      className: "admin-page",
      children: v.jsxs("div", {
        className: "admin-title",
        children: [
          v.jsx("h2", { children: "Espace administration" }),
          v.jsxs("div", {
            children: [
              v.jsx("div", {
                className: "add-title",
                children: v.jsx("h2", { children: "Ajouter une course" }),
              }),
              v.jsxs("form", {
                className: "add-form",
                onSubmit: f,
                children: [
                  v.jsx("input", {
                    className: "add-input",
                    type: "text",
                    placeholder: "titre",
                    name: "titre",
                    required: !0,
                  }),
                  v.jsx("input", {
                    className: "add-input",
                    type: "text",
                    placeholder: "date",
                    name: "date",
                    required: !0,
                  }),
                  v.jsxs("div", {
                    className: "add-form-inputs",
                    children: [
                      v.jsx("input", {
                        className: "add-input",
                        type: "text",
                        placeholder: "heure de départ",
                        name: "hdd",
                        required: !0,
                      }),
                      v.jsx("input", {
                        className: "add-input",
                        type: "text",
                        placeholder: "description",
                        name: "description",
                        required: !0,
                      }),
                    ],
                  }),
                  v.jsx("input", { type: "file", name: "flyer", required: !0 }),
                  v.jsx("button", {
                    type: "submit",
                    children: "Ajouter course",
                  }),
                ],
              }),
              v.jsxs("form", {
                className: "add-form",
                onSubmit: d,
                children: [
                  v.jsx("input", {
                    className: "adress",
                    type: "text",
                    placeholder: "tape une adresse",
                    name: "adress",
                  }),
                  v.jsxs("button", {
                    type: "submit",
                    children: [
                      "Valider l'adresse ",
                      v.jsx("br", {}),
                      " (cliqué 2 fois sur la carte pour recentrer sur l'adresse)",
                    ],
                  }),
                ],
              }),
            ],
          }),
          s && v.jsx(Vs, { longitude: i, latitude: e }),
        ],
      }),
    }),
  });
}
function N1() {
  const [e, t] = N.useState(!0),
    [i, o] = N.useState([]),
    s = Kr();
  N.useEffect(() => {
    (async () => {
      t(!0);
      try {
        let d = await ve.get("http://localhost:3000/api/get-all-courses/");
        d.data && o(d.data);
      } catch (d) {
        console.log(d);
      }
      t(!1);
    })();
  }, []);
  const l = async (c) => {
    try {
      await ve.delete(`http://localhost:3000/api/delete-course/${c}`, {
        headers: { Authorization: localStorage.getItem("token") },
      }),
        console.log(`${c} supprimé`),
        o(i.filter((d) => d._id !== c));
    } catch (d) {
      console.error("Erreur lors de la suppression de la course:", d);
    }
  };
  return v.jsxs("div", {
    children: [
      e && v.jsx("div", { children: "Loading" }),
      !e &&
        v.jsx("div", {
          className: "admin-page",
          children: v.jsxs("div", {
            className: "admin-title",
            children: [
              v.jsx("h2", { children: "Espace administration" }),
              v.jsxs("table", {
                className: "admin-table",
                children: [
                  v.jsx("thead", {
                    children: v.jsxs("tr", {
                      children: [
                        v.jsx("th", { children: "Nom de courses" }),
                        v.jsx("th", { children: "date" }),
                        v.jsx("th", { children: "Actions" }),
                      ],
                    }),
                  }),
                  v.jsx("tbody", {
                    children: i.map((c, d) =>
                      v.jsxs(
                        "tr",
                        {
                          children: [
                            v.jsx("td", {
                              className: "admin-table-td",
                              children: c.titre,
                            }),
                            v.jsx("td", {
                              className: "admin-table-td",
                              children: c.date,
                            }),
                            v.jsxs("td", {
                              className: "admin-table-td",
                              children: [
                                v.jsx("button", {
                                  className: "link-button",
                                  onClick: () => s(`/add-checkpoint/${c._id}`),
                                  children: "ajout de checkpoint",
                                }),
                                v.jsx("button", {
                                  className: "link-button",
                                  onClick: () => s(`/update-course/${c._id}`),
                                  children: "modifier course",
                                }),
                                v.jsx("button", {
                                  className: "link-button",
                                  onClick: () => s(`/add-time-user/${c._id}`),
                                  children: "Ajouter des temps",
                                }),
                                v.jsx("button", {
                                  className: "delete-button",
                                  onClick: () => l(c._id),
                                  children: "Supprimer",
                                }),
                              ],
                            }),
                          ],
                        },
                        d
                      )
                    ),
                  }),
                ],
              }),
              v.jsx("div", {
                children: v.jsx(yi, {
                  to: "/create-course",
                  children: "crée une nouvelle course",
                }),
              }),
              v.jsx("div", {
                children: v.jsx(yi, {
                  to: "/home-page",
                  children: "Allez a la page principal",
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
function z1() {
  const [e, t] = N.useState(null),
    [i, o] = N.useState(null),
    [s, l] = N.useState(null),
    [c, d] = N.useState(!0),
    [f, m] = N.useState([]),
    g = Kr(),
    _ = oc();
  N.useEffect(() => {
    (async () => {
      d(!0);
      try {
        let A = await ve.get(
          `http://localhost:3000/api/get-one-course/${_.id}`
        );
        A.data && m(A.data);
      } catch (A) {
        console.log(A);
      }
      d(!1);
    })();
  }, []);
  const E = async (x) => {
      m({ ...f, [x.target.name]: x.target.value });
    },
    C = async (x) => {
      x.preventDefault(), console.log(x.target[0].value);
      try {
        const A = await ve.get(
          `https://api-adresse.data.gouv.fr/search/?q=${x.target[0].value}`
        );
        console.log(A.data),
          l(A.data.features[0].properties.label),
          t(A.data.features[0].geometry.coordinates[0]),
          o(A.data.features[0].geometry.coordinates[1]);
      } catch {}
    },
    S = async (x) => {
      x.preventDefault();
      const A = new FormData();
      A.set("titre", x.target[0].value),
        A.set("date", x.target[1].value),
        A.set("hdd", x.target[2].value),
        A.set("longitude", i),
        A.set("latitude", e),
        A.set("description", x.target[3].value),
        A.set("flyer", x.target[4].files[0]);
      try {
        (await ve.post(`http://localhost:3000/api/update-course/${_.id}`, A, {
          headers: { Authorization: localStorage.getItem("token") },
        })) && (console.log("course modifié:"), g("/admin/all-courses"));
      } catch (P) {
        console.log(P);
      }
    };
  return v.jsxs("div", {
    children: [
      c && v.jsx("div", { children: "Loading" }),
      !c &&
        v.jsx("div", {
          children: v.jsx("div", {
            className: "admin-page",
            children: v.jsxs("div", {
              className: "admin-title",
              children: [
                v.jsx("h2", { children: "Espace administration" }),
                v.jsxs("div", {
                  children: [
                    v.jsx("div", {
                      className: "add-title",
                      children: v.jsx("h2", {
                        children: "Modifier une course",
                      }),
                    }),
                    v.jsxs("form", {
                      className: "add-form",
                      onSubmit: S,
                      children: [
                        v.jsx("input", {
                          className: "add-input",
                          type: "text",
                          placeholder: "titre",
                          value: `${f.titre}`,
                          name: "titre",
                          onChange: E,
                          required: !0,
                        }),
                        v.jsx("input", {
                          className: "add-input",
                          type: "text",
                          placeholder: "date",
                          value: `${f.date}`,
                          onChange: E,
                          name: "date",
                          required: !0,
                        }),
                        v.jsxs("div", {
                          className: "add-form-inputs",
                          children: [
                            v.jsx("input", {
                              className: "add-input",
                              type: "text",
                              placeholder: "heure de départ",
                              value: `${f.hdd}`,
                              onChange: E,
                              name: "hdd",
                              required: !0,
                            }),
                            v.jsx("input", {
                              className: "add-input",
                              type: "text",
                              placeholder: "description",
                              value: `${f.description}`,
                              onChange: E,
                              name: "description",
                              required: !0,
                            }),
                          ],
                        }),
                        v.jsx("input", {
                          type: "file",
                          name: "flyer",
                          required: !0,
                        }),
                        v.jsx("button", {
                          type: "submit",
                          children: "Modifier course",
                        }),
                      ],
                    }),
                    v.jsxs("form", {
                      className: "add-form",
                      onSubmit: C,
                      children: [
                        v.jsx("input", {
                          className: "adress",
                          type: "text",
                          placeholder: "tape une adresse",
                          name: "adress",
                        }),
                        v.jsxs("button", {
                          type: "submit",
                          children: [
                            "Valider l'adresse ",
                            v.jsx("br", {}),
                            " (cliqué 2 fois sur la carte pour recentrer sur l'adresse)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s && v.jsx(Vs, { longitude: i, latitude: e }),
              ],
            }),
          }),
        }),
    ],
  });
}
const M1 = () => {
    const [e, t] = N.useState(null),
      [i, o] = N.useState(null),
      [s, l] = N.useState(null),
      [c, d] = N.useState(!0),
      [f, m] = N.useState([]),
      g = oc();
    N.useEffect(() => {
      (async () => {
        d(!0);
        try {
          let x = await ve.get(
            `http://localhost:3000/api/get-checkpoint/${g.id}`
          );
          x.data && m(x.data);
        } catch (x) {
          console.log(x);
        }
        d(!1);
      })();
    }, []);
    const _ = async (S) => {
        S.preventDefault(), console.log(S.target[0].value);
        try {
          const x = await ve.get(
            `https://api-adresse.data.gouv.fr/search/?q=${S.target[0].value}`
          );
          console.log(x.data),
            l(x.data.features[0].properties.label),
            t(x.data.features[0].geometry.coordinates[0]),
            o(x.data.features[0].geometry.coordinates[1]);
        } catch {}
      },
      E = async (S) => {
        try {
          console.log(S),
            await ve.delete(
              `http://localhost:3000/api/delete-checkpoint/${g.id}/${S}`,
              { headers: { Authorization: localStorage.getItem("token") } }
            ),
            console.log("checkpoint supprimé"),
            m(f.filter((x) => x.name !== S));
        } catch (x) {
          console.error("Erreur lors de la suppression du checkpoint", x);
        }
      },
      C = async (S) => {
        S.preventDefault(), console.log(S.target[1].value);
        const x = { name: S.target[0].value, longitude: i, latitude: e };
        try {
          (await ve.post(
            `http://localhost:3000/api/add-checkpoint/${g.id}`,
            x,
            { headers: { Authorization: localStorage.getItem("token") } }
          )) && (console.log("checkpoint ajouté:"), m([...f, x]));
        } catch (A) {
          console.log(A);
        }
      };
    return v.jsxs(v.Fragment, {
      children: [
        c && v.jsx("div", { children: "Loading" }),
        !c &&
          v.jsx("div", {
            className: "admin-page",
            children: v.jsxs("div", {
              className: "admin-title",
              children: [
                v.jsx("h2", { children: "Espace administration" }),
                v.jsxs("table", {
                  className: "admin-table",
                  children: [
                    v.jsx("thead", {
                      children: v.jsxs("tr", {
                        children: [
                          v.jsx("th", { children: "Name" }),
                          v.jsx("th", { children: "Longitude" }),
                          v.jsx("th", { children: "Latitude" }),
                        ],
                      }),
                    }),
                    v.jsx("tbody", {
                      children: f.map((S, x) =>
                        v.jsxs(
                          "tr",
                          {
                            children: [
                              v.jsx("td", {
                                className: "admin-table-td",
                                children: S.name,
                              }),
                              v.jsx("td", {
                                className: "admin-table-td",
                                children: S.longitude,
                              }),
                              v.jsx("td", {
                                className: "admin-table-td",
                                children: S.latitude,
                              }),
                              v.jsx("td", {
                                className: "admin-table-td",
                                children: v.jsx("button", {
                                  className: "delete-button",
                                  onClick: () => E(S.name),
                                  children: "Supprimer",
                                }),
                              }),
                            ],
                          },
                          x
                        )
                      ),
                    }),
                  ],
                }),
                v.jsx("div", {}),
              ],
            }),
          }),
        v.jsx("div", {
          className: "admin-page",
          children: v.jsxs("div", {
            className: "admin-title",
            children: [
              v.jsx("h2", { children: "Espace administration" }),
              v.jsxs("div", {
                children: [
                  v.jsx("div", {
                    className: "add-title",
                    children: v.jsx("h2", { children: "Ajout de checkpoint" }),
                  }),
                  v.jsxs("form", {
                    className: "add-form",
                    onSubmit: C,
                    children: [
                      v.jsx("input", {
                        className: "add-input",
                        type: "text",
                        placeholder: "name",
                        name: "name",
                        required: !0,
                      }),
                      v.jsx("button", {
                        type: "submit",
                        children: "Ajout de checkpoint",
                      }),
                    ],
                  }),
                  v.jsxs("form", {
                    className: "add-form",
                    onSubmit: _,
                    children: [
                      v.jsx("input", {
                        className: "adress",
                        type: "text",
                        placeholder: "tape une adresse",
                        name: "adress",
                      }),
                      v.jsxs("button", {
                        type: "submit",
                        children: [
                          "Valider l'adresse ",
                          v.jsx("br", {}),
                          " (cliqué 2 fois sur la carte pour recentrer sur l'adresse)",
                        ],
                      }),
                    ],
                  }),
                  s && v.jsx(Vs, { longitude: i, latitude: e }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  R1 = () => {
    const [e, t] = N.useState(!0),
      [i, o] = N.useState([]),
      [s, l] = N.useState([]),
      [c, d] = N.useState([]),
      f = oc();
    N.useEffect(() => {
      (async () => {
        t(!0);
        try {
          let S = await ve.get("http://localhost:3000/api/get-all-users/", {
              headers: { Authorization: localStorage.getItem("token") },
            }),
            x = await ve.get(
              `http://localhost:3000/api/get-chrono-users/${f.id}`
            );
          S.data && d(S.data[0]), o(S.data), l(x.data);
        } catch (S) {
          console.log(S);
        }
        t(!1);
      })();
    }, []);
    const m = async (C) => {
        d({ ...c, [C.target.name]: C.target.value });
      },
      g = async (C) => {
        C.preventDefault(), console.log(C.target.value);
        const S = {
          userId: C.target[0].value,
          userName: C.target[1].value,
          checkpointsOrder: C.target[2].value,
          finaleTime: C.target[3].value,
        };
        try {
          S.userId && S.userName != "undefined"
            ? (await ve.post(
                `http://localhost:3000/api/add-chrono-user/${f.id}`,
                S,
                { headers: { Authorization: localStorage.getItem("token") } }
              )) && (console.log("chrono ajouté:"), l([...s, S]))
            : console.log("ajouté un utilisateur avant de valider");
        } catch (x) {
          console.log(x);
        }
      },
      _ = async (C) => {
        C.preventDefault();
        const S = C.target[0].value;
        try {
          const x = await ve.get(
            `http://localhost:3000/api/get-one-user/${S}`,
            { headers: { Authorization: localStorage.getItem("token") } }
          );
          x && (console.log("utlisateur trouvé"), d(x.data));
        } catch (x) {
          console.log(x);
        }
      },
      E = async (C) => {
        try {
          console.log(C),
            await ve.delete(
              `http://localhost:3000/api/delete-chrono-user/${f.id}/${C}`,
              { headers: { Authorization: localStorage.getItem("token") } }
            ),
            l(s.filter((S) => S.userName !== C));
        } catch (S) {
          console.error("Erreur lors de la suppression de la course:", S);
        }
      };
    return v.jsxs("div", {
      children: [
        e && v.jsx("div", { children: "Loading" }),
        !e &&
          v.jsx("div", {
            children: v.jsxs("div", {
              className: "admin-page",
              children: [
                v.jsxs("div", {
                  className: "admin-title",
                  children: [
                    v.jsx("h2", { children: "Espace administration" }),
                    v.jsxs("div", {
                      children: [
                        v.jsxs("table", {
                          className: "admin-table",
                          children: [
                            v.jsx("thead", {
                              children: v.jsxs("tr", {
                                children: [
                                  v.jsx("th", { children: "Name" }),
                                  v.jsx("th", { children: "Finale time" }),
                                ],
                              }),
                            }),
                            v.jsx("tbody", {
                              children: s.map((C, S) =>
                                v.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      v.jsx("td", {
                                        className: "admin-table-td",
                                        children: C.userName,
                                      }),
                                      v.jsx("td", {
                                        className: "admin-table-td",
                                        children: C.finaleTime,
                                      }),
                                      v.jsx("td", {
                                        className: "admin-table-td",
                                        children: v.jsx("button", {
                                          className: "delete-button",
                                          onClick: () => E(C.userName),
                                          children: "Supprimer",
                                        }),
                                      }),
                                    ],
                                  },
                                  S
                                )
                              ),
                            }),
                          ],
                        }),
                        v.jsx("div", {}),
                      ],
                    }),
                  ],
                }),
                v.jsx("div", {
                  className: "add-title",
                  children: v.jsx("h2", { children: "Ajouter un temps" }),
                }),
                v.jsxs("form", {
                  className: "add-form",
                  onSubmit: _,
                  children: [
                    v.jsx("select", {
                      children: i.map((C, S) =>
                        v.jsx("option", { value: C._id, children: C.pseudo }, S)
                      ),
                    }),
                    v.jsx("button", {
                      type: "submit",
                      children: "Choisir un utilisateur",
                    }),
                  ],
                }),
                v.jsxs("form", {
                  className: "add-form",
                  onSubmit: g,
                  children: [
                    v.jsx("input", {
                      className: "add-input",
                      type: "text",
                      placeholder: "userId",
                      value: `${c._id}`,
                      name: "userId",
                      onChange: m,
                      required: !0,
                    }),
                    v.jsx("input", {
                      className: "add-input",
                      type: "text",
                      placeholder: "pseudo",
                      value: `${c.pseudo}`,
                      onChange: m,
                      name: "userName",
                      required: !0,
                    }),
                    v.jsxs("div", {
                      className: "add-form-inputs",
                      children: [
                        v.jsx("input", {
                          className: "add-input",
                          type: "text",
                          placeholder: "ordre des checkpoints",
                          onChange: m,
                          name: "checkpointsOrder",
                          required: !0,
                        }),
                        v.jsx("input", {
                          className: "add-input",
                          type: "text",
                          placeholder: "temps final",
                          onChange: m,
                          name: "finaleTime",
                          required: !0,
                        }),
                      ],
                    }),
                    v.jsx("button", {
                      type: "submit",
                      children: "Ajouter chrono",
                    }),
                  ],
                }),
                v.jsx("div", {}),
              ],
            }),
          }),
      ],
    });
  },
  I1 = () => {
    const e = async (t) => {
      t.preventDefault(),
        console.log(t.target[0].value),
        console.log(t.target[1].value);
      const i = {
        pseudo: t.target[0].value,
        age: t.target[1].value,
        mail: t.target[2].value,
        password: t.target[3].value,
      };
      try {
        const o = await ve.post("http://localhost:3000/api/subscription", i);
        console.log(o),
          console.log(o ? "Utilisateur inscrit" : "inscription non effectué");
      } catch (o) {
        console.log(o);
      }
    };
    return v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "subscription-page",
        children: v.jsxs("div", {
          className: "subscription-title",
          children: [
            v.jsx("h2", { children: "page d'inscription" }),
            v.jsxs("div", {
              children: [
                v.jsx("div", {
                  className: "add-title",
                  children: v.jsx("h2", {
                    children: "Formulaire d'inscription",
                  }),
                }),
                v.jsxs("form", {
                  className: "add-form",
                  onSubmit: e,
                  children: [
                    v.jsx("input", {
                      className: "add-input",
                      type: "text",
                      placeholder: "pseudo",
                      name: "pseudo",
                      required: !0,
                    }),
                    v.jsx("input", {
                      className: "add-input",
                      type: "text",
                      placeholder: "age",
                      name: "age",
                      required: !0,
                    }),
                    v.jsx("input", {
                      className: "add-input",
                      type: "text",
                      placeholder: "mail",
                      name: "mail",
                      required: !0,
                    }),
                    v.jsx("input", {
                      className: "add-input",
                      type: "text",
                      placeholder: "password",
                      name: "password",
                      required: !0,
                    }),
                    v.jsx("button", {
                      type: "submit",
                      children: "Inscription",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  A1 = () => {
    const e = Kr(),
      t = async (i) => {
        i.preventDefault();
        const o = { pseudo: i.target[0].value, password: i.target[1].value };
        try {
          const s = await ve.post("http://localhost:3000/api/login/", o);
          s
            ? (console.log("User connecté"),
              localStorage.setItem("token", s.data.token),
              localStorage.setItem("userId", s.data.userId),
              localStorage.setItem("userRole", s.data.userRole),
              s.data.userRole === "Admin" && e("/admin/all-courses"),
              s.data.userRole === "User" && e("/home-page"))
            : console.log("utilisateur introuvable");
        } catch (s) {
          s.response.status == 400 && console.log("mdp invalide"),
            console.log(s);
        }
      };
    return v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "login-page",
        children: v.jsxs("div", {
          className: "login-title",
          children: [
            v.jsx("h2", { children: "Page de login" }),
            v.jsxs("div", {
              children: [
                v.jsx("div", {
                  className: "add-title",
                  children: v.jsx("h2", {
                    children: "Formulaire de connexion",
                  }),
                }),
                v.jsxs("form", {
                  className: "add-form",
                  onSubmit: t,
                  children: [
                    v.jsx("input", {
                      className: "add-input",
                      type: "text",
                      placeholder: "pseudo",
                      name: "pseudo",
                      required: !0,
                    }),
                    v.jsx("input", {
                      className: "add-input",
                      type: "password",
                      placeholder: "password",
                      name: "password",
                      required: !0,
                    }),
                    v.jsx("button", { type: "submit", children: "Connexion" }),
                  ],
                }),
              ],
            }),
            v.jsx("button", {
              className: "link-button",
              onClick: () => e("/subscription-page/"),
              children: "Toujours pas inscrit ? clique ici",
            }),
          ],
        }),
      }),
    });
  };
const j1 = () => {
    localStorage.removeItem("token"),
      localStorage.removeItem("userId"),
      localStorage.removeItem("userRole"),
      console.log("utilisateur déconnecté"),
      window.location.replace("/login-page/");
  },
  _c = () => {
    const e = localStorage.getItem("token");
    localStorage.getItem("userId");
    const t = localStorage.getItem("userRole");
    return v.jsxs("div", {
      className: "navBar",
      children: [
        v.jsxs("ul", {
          className: "navBar",
          children: [
            v.jsx("li", {
              className: "navBar",
              children: v.jsx(yi, {
                to: "/prochaine-course/",
                children: "ProchaineCourse",
              }),
            }),
            v.jsx("li", {
              className: "navBar",
              children: v.jsx(yi, {
                to: "/derniere-course/",
                children: "DerniereCourse",
              }),
            }),
            !e &&
              v.jsxs("li", {
                className: "navBar",
                children: [
                  " ",
                  v.jsx(yi, { to: "/login-page/", children: "login Page" }),
                ],
              }),
            t == "Admin" &&
              v.jsxs("li", {
                className: "navBar",
                children: [
                  " ",
                  v.jsx(yi, {
                    to: "/admin/all-courses",
                    children: "Admin Page",
                  }),
                ],
              }),
          ],
        }),
        v.jsx("div", {
          children:
            e &&
            v.jsx("button", {
              className: "navBar",
              onClick: () => j1(),
              children: "Deconnexion",
            }),
        }),
      ],
    });
  },
  B1 = () => {
    const [e, t] = N.useState(!0),
      [i, o] = N.useState([]);
    return (
      N.useEffect(() => {
        (async () => {
          t(!0);
          try {
            let l = await ve.get("http://localhost:3000/api/get-all-courses/");
            l.data[0] && o(l.data[0]);
          } catch (l) {
            console.log(l);
          }
          t(!1);
        })();
      }, []),
      v.jsxs("div", {
        children: [
          v.jsx(_c, {}),
          e && v.jsx("div", { children: "Loading" }),
          !e &&
            v.jsxs("div", {
              children: [
                v.jsx("h1", { children: i.titre }),
                v.jsx("img", { src: `http://localhost:3000/${i.flyer.src}` }),
                v.jsx("p", { children: i.description }),
                v.jsxs("ul", {
                  children: [
                    v.jsx("li", { children: i.date }),
                    v.jsx("li", { children: i.hdd }),
                    v.jsx("li", { children: i.localisation.longitude }),
                    v.jsx("li", { children: i.localisation.latitude }),
                  ],
                }),
              ],
            }),
        ],
      })
    );
  };
function t_(e) {
  const [t, i] = N.useState([]);
  N.useEffect(() => {
    i([o, s, l, c, d, f, m, g, _]);
  }, []);
  const o = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-one.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    s = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-two.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    l = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-three.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    c = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-four.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    d = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-five.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    f = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-six.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    m = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-seven.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    g = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-eight.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    }),
    _ = new it.Icon({
      iconUrl: "http://localhost:5173/svg-check/number-nine.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    });
  return v.jsx("div", {
    children:
      e.checkpoint.checkpointsInfo &&
      v.jsxs(Jm, {
        center: [
          e.checkpoint.checkpointsInfo[0].longitude,
          e.checkpoint.checkpointsInfo[0].latitude,
        ],
        zoom: 13,
        scrollWheelZoom: !1,
        children: [
          v.jsx(e_, {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
              '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }),
          e.checkpoint.checkpointsInfo.map((E, C) =>
            v.jsx(
              Xm,
              {
                position: [E.longitude, E.latitude],
                icon: t[C],
                children: v.jsxs(Ym, {
                  children: [
                    v.jsxs("h2", { children: ["checkpoint n°", C + 1] }),
                    v.jsx("h2", { children: E.name }),
                  ],
                }),
              },
              C
            )
          ),
        ],
      }),
  });
}
const D1 = () => {
  const [e, t] = N.useState(!0),
    [i, o] = N.useState([]),
    [s, l] = N.useState([]),
    [c, d] = N.useState([]),
    [f, m] = N.useState([]),
    [g, _] = N.useState([]);
  N.useEffect(() => {
    (async () => {
      t(!0);
      try {
        let S = await ve.get("http://localhost:3000/api/get-all-courses/");
        if (S.data[1]) {
          o(S.data[1]);
          let x = await ve.get(
            `http://localhost:3000/api/get-checkpoint/${S.data[1]._id}`
          );
          if (x) {
            d(x.data);
            let A = await ve.get(
              `http://localhost:3000/api/get-classement/${S.data[1]._id}`
            );
            if (A) {
              l(A.data);
              let P = await ve.get(
                `http://localhost:3000/api/get-checkpoint-info/${S.data[1]._id}`
              );
              P && (console.log(P.data), m(P.data));
            }
          }
        }
      } catch (S) {
        console.log(S);
      }
      t(!1);
    })();
  }, []);
  const E = async (C) => {
    try {
      _(), console.log(C), console.log(f);
      let S = f.filter((x, A) => x.userId == C);
      console.log(S), _(...S), console.log(g);
    } catch (S) {
      console.error(
        "Erreur lors l'afficha de l'ordre de passage des checkpoint:",
        S
      );
    }
  };
  return v.jsxs("div", {
    children: [
      v.jsx(_c, {}),
      e && v.jsx("div", { children: "Loading" }),
      !e &&
        v.jsxs("div", {
          children: [
            v.jsx("h2", { children: "Info de la course" }),
            v.jsx("h1", { children: i.titre }),
            v.jsx("img", { src: `http://localhost:3000/${i.flyer.src}` }),
            v.jsx("p", { children: i.description }),
            v.jsxs("ul", {
              children: [
                v.jsx("li", { children: i.date }),
                v.jsx("li", { children: i.hdd }),
                v.jsx("li", { children: i.localisation.longitude }),
                v.jsx("li", { children: i.localisation.latitude }),
                v.jsx("h2", { children: "checkpoints de la course" }),
                c.map((C, S) =>
                  v.jsx(
                    "li",
                    {
                      children: `checkpoint : ${C.name}(longitude : ${C.longitude}  latitude : ${C.latitude})`,
                    },
                    S
                  )
                ),
                v.jsx("h2", { children: "classement" }),
                s.map((C, S) =>
                  v.jsxs(
                    "li",
                    {
                      children: [
                        `Nom du coureur n°${S + 1}: ${
                          C.userName
                        }   heure d'arrivé : ${C.finaleTime}`,
                        " ",
                        v.jsx("button", {
                          className: "handle-button",
                          onClick: () => E(C.userId),
                          children: "afficher ordre checkpoint de ce coureur",
                        }),
                      ],
                    },
                    S
                  )
                ),
                v.jsxs("h2", {
                  children: [
                    "Ordre de passage  ",
                    g.userName ? `de ${g.userName}` : " du coureur",
                    " ",
                  ],
                }),
                g.userName &&
                  g.checkpointsInfo.map((C, S) =>
                    v.jsx(
                      "li",
                      {
                        children: `Nom du checkpoint :${C.name} longitude : ${C.longitude} latitude: ${C.latitude}`,
                      },
                      S
                    )
                  ),
              ],
            }),
            v.jsx(t_, { checkpoint: g }),
          ],
        }),
    ],
  });
};
const F1 = () => v.jsx("div", { children: v.jsx(_c, {}) });
function Z1() {
  return v.jsx(v.Fragment, {
    children: v.jsx(q0, {
      children: v.jsxs(U0, {
        children: [
          v.jsx(nt, { path: "/home-page", element: v.jsx(F1, {}) }),
          v.jsx(nt, { path: "/admin/all-courses", element: v.jsx(N1, {}) }),
          v.jsx(nt, { path: "/create-course", element: v.jsx(O1, {}) }),
          v.jsx(nt, { path: "/update-course/:id", element: v.jsx(z1, {}) }),
          v.jsx(nt, { path: "/add-checkpoint/:id", element: v.jsx(M1, {}) }),
          v.jsx(nt, { path: "/add-time-user/:id", element: v.jsx(R1, {}) }),
          v.jsx(nt, { path: "/login-page/", element: v.jsx(A1, {}) }),
          v.jsx(nt, { path: "/subscription-page/", element: v.jsx(I1, {}) }),
          v.jsx(nt, { path: "/prochaine-course/", element: v.jsx(B1, {}) }),
          v.jsx(nt, { path: "/derniere-course/", element: v.jsx(D1, {}) }),
          v.jsx(nt, { path: "/map/", element: v.jsx(t_, {}) }),
          v.jsx(nt, { path: "/map-location", element: v.jsx(Vs, {}) }),
        ],
      }),
    }),
  });
}
ol.createRoot(document.getElementById("root")).render(
  v.jsx(Sr.StrictMode, { children: v.jsx(Z1, {}) })
);
