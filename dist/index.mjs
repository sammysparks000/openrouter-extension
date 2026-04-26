import Pe, { useState as N, createElement as vr } from "react";
var ne = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function pr() {
  if (Se) return Y;
  Se = 1;
  var p = Pe, y = Symbol.for("react.element"), m = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, C = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(j, u, S) {
    var h, b = {}, R = null, A = null;
    S !== void 0 && (R = "" + S), u.key !== void 0 && (R = "" + u.key), u.ref !== void 0 && (A = u.ref);
    for (h in u) T.call(u, h) && !k.hasOwnProperty(h) && (b[h] = u[h]);
    if (j && j.defaultProps) for (h in u = j.defaultProps, u) b[h] === void 0 && (b[h] = u[h]);
    return { $$typeof: y, type: j, key: R, ref: A, props: b, _owner: C.current };
  }
  return Y.Fragment = m, Y.jsx = x, Y.jsxs = x, Y;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function mr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Pe, y = Symbol.for("react.element"), m = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), j = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), L = Symbol.iterator, q = "@@iterator";
    function v(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[q];
      return typeof r == "function" ? r : null;
    }
    var _ = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = _.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var De = !1, Fe = !1, $e = !1, Ie = !1, Ne = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === k || Ne || e === C || e === S || e === h || Ie || e === A || De || Fe || $e || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === x || e.$$typeof === j || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case m:
          return "Portal";
        case k:
          return "Profiler";
        case C:
          return "StrictMode";
        case S:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return oe(r) + ".Consumer";
          case x:
            var t = e;
            return oe(t._context) + ".Provider";
          case u:
            return We(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case R: {
            var i = e, s = i._payload, o = i._init;
            try {
              return P(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, ie, se, le, ue, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ye() {
      {
        if (M === 0) {
          ie = console.log, se = console.info, le = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ue() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ie
            }),
            info: D({}, e, {
              value: se
            }),
            warn: D({}, e, {
              value: le
            }),
            error: D({}, e, {
              value: ue
            }),
            group: D({}, e, {
              value: ce
            }),
            groupCollapsed: D({}, e, {
              value: fe
            }),
            groupEnd: D({}, e, {
              value: de
            })
          });
        }
        M < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = _.ReactCurrentDispatcher, z;
    function K(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var X = !1, V;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Le();
    }
    function pe(e, r) {
      if (!e || X)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = G.current, G.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), g = n.stack.split(`
`), c = a.length - 1, f = g.length - 1; c >= 1 && f >= 0 && a[c] !== g[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== g[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== g[f]) {
                    var O = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, O), O;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = s, Ue(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", F = I ? K(I) : "";
      return typeof e == "function" && V.set(e, F), F;
    }
    function Ke(e, r, t) {
      return pe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ve(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case S:
          return K("Suspense");
        case h:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ke(e.render);
          case b:
            return B(e.type, r, t);
          case R: {
            var n = e, i = n._payload, s = n._init;
            try {
              return B(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, me = {}, he = _.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (J(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), J(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, J(i), d("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var Je = Array.isArray;
    function H(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ge(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ge(e);
    }
    var be = _.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Ee;
    function Xe(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          Re || (Re = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, g = null;
        t !== void 0 && (ye(t), a = "" + t), He(r) && (ye(r.key), a = "" + r.key), Xe(r) && (g = r.ref, Qe(r, i));
        for (s in r)
          W.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || g) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, f), g && er(o, f);
        }
        return rr(e, a, g, i, n, be.current, o);
      }
    }
    var Q = _.ReactCurrentOwner, _e = _.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Te() {
      {
        if (Q.current) {
          var e = P(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var je = {};
    function ar(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + P(e._owner.type) + "."), $(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && Oe(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = v(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              ee(o.value) && Oe(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = P(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var xe = {};
    function Ce(e, r, t, n, i, s) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = nr();
          g ? a += g : a += Te();
          var c;
          e === null ? c = "null" : H(e) ? c = "array" : e !== void 0 && e.$$typeof === y ? (c = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = tr(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (H(O)) {
                for (var I = 0; I < O.length; I++)
                  ke(O[I], e);
                Object.freeze && Object.freeze(O);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(O, e);
        }
        if (W.call(r, "key")) {
          var F = P(e), E = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), re = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[F + re]) {
            var fr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, F, fr, F), xe[F + re] = !0;
          }
        }
        return e === T ? ir(f) : or(f), f;
      }
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = lr, cr = sr;
    U.Fragment = T, U.jsx = ur, U.jsxs = cr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ne.exports = pr() : ne.exports = mr();
var l = ne.exports;
const te = [
  { id: "anthropic/claude-3.5-haiku", label: "Claude 3.5 Haiku (fast, cheap)" },
  { id: "anthropic/claude-3.5-sonnet", label: "Claude 3.5 Sonnet" },
  { id: "deepseek/deepseek-r1", label: "DeepSeek R1 (reasoning)" },
  { id: "deepseek/deepseek-chat-v3-5", label: "DeepSeek Chat v3.5" },
  { id: "google/gemini-2.0-flash-001", label: "Gemini 2.0 Flash" },
  { id: "google/gemini-2.5-pro-preview", label: "Gemini 2.5 Pro" },
  { id: "meta-llama/llama-4-maverick", label: "Llama 4 Maverick" },
  { id: "mistralai/mistral-small-3.1-24b-instruct", label: "Mistral Small 3.1" },
  { id: "qwen/qwen3-235b-a22b", label: "Qwen3 235B" },
  { id: "custom", label: "Custom model ID…" }
];
function hr({ config: p }) {
  const [y, m] = N(p.apiKey), [T, C] = N(
    te.find((v) => v.id === p.model) ? p.model : "custom"
  ), [k, x] = N(
    te.find((v) => v.id === p.model) ? "" : p.model
  ), [j, u] = N(!1), [S, h] = N(!1), [b, R] = N(null), A = T === "custom" ? k : T;
  function L() {
    p.apiKey = y.trim(), p.model = A.trim(), u(!0), R(null), setTimeout(() => u(!1), 2e3);
  }
  async function q() {
    var v;
    if (!y.trim()) {
      R({ ok: !1, msg: "Enter your API key first." });
      return;
    }
    h(!0), R(null);
    try {
      const _ = await fetch(`${p.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${y.trim()}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://nimbalyst.com",
          "X-Title": "Nimbalyst OpenRouter Extension"
        },
        body: JSON.stringify({
          model: A.trim(),
          messages: [{ role: "user", content: "Reply with just: OK" }],
          max_tokens: 5
        })
      });
      if (_.ok)
        R({ ok: !0, msg: "Connected! Model responded successfully." });
      else {
        const d = await _.json().catch(() => ({}));
        R({
          ok: !1,
          msg: `Error ${_.status}: ${((v = d == null ? void 0 : d.error) == null ? void 0 : v.message) ?? _.statusText}`
        });
      }
    } catch (_) {
      R({ ok: !1, msg: `Network error: ${_.message}` });
    } finally {
      h(!1);
    }
  }
  return /* @__PURE__ */ l.jsxs("div", { className: "or-panel", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "or-header", children: [
      /* @__PURE__ */ l.jsx("span", { className: "or-logo", children: "⚡" }),
      /* @__PURE__ */ l.jsx("h2", { children: "OpenRouter" })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: "or-subtext", children: [
      "Access 300+ models with one API key.",
      " ",
      /* @__PURE__ */ l.jsx("a", { href: "https://openrouter.ai/keys", target: "_blank", rel: "noopener noreferrer", children: "Get a free key →" })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "or-field", children: [
      /* @__PURE__ */ l.jsx("label", { htmlFor: "or-apikey", children: "API Key" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: "or-apikey",
          type: "password",
          placeholder: "sk-or-v1-...",
          value: y,
          onChange: (v) => m(v.target.value),
          autoComplete: "off"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "or-field", children: [
      /* @__PURE__ */ l.jsx("label", { htmlFor: "or-model", children: "Model" }),
      /* @__PURE__ */ l.jsx(
        "select",
        {
          id: "or-model",
          value: T,
          onChange: (v) => C(v.target.value),
          children: te.map((v) => /* @__PURE__ */ l.jsx("option", { value: v.id, children: v.label }, v.id))
        }
      )
    ] }),
    T === "custom" && /* @__PURE__ */ l.jsxs("div", { className: "or-field", children: [
      /* @__PURE__ */ l.jsx("label", { htmlFor: "or-custom-model", children: "Custom Model ID" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: "or-custom-model",
          type: "text",
          placeholder: "e.g. deepseek/deepseek-r1",
          value: k,
          onChange: (v) => x(v.target.value)
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: "or-hint", children: [
        "Find model IDs at",
        " ",
        /* @__PURE__ */ l.jsx("a", { href: "https://openrouter.ai/models", target: "_blank", rel: "noopener noreferrer", children: "openrouter.ai/models" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "or-actions", children: [
      /* @__PURE__ */ l.jsx("button", { className: "or-btn or-btn-primary", onClick: L, children: j ? "✓ Saved!" : "Save" }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "or-btn or-btn-ghost",
          onClick: q,
          disabled: S,
          children: S ? "Testing…" : "Test Connection"
        }
      )
    ] }),
    b && /* @__PURE__ */ l.jsxs("div", { className: `or-result ${b.ok ? "or-result-ok" : "or-result-err"}`, children: [
      b.ok ? "✅" : "❌",
      " ",
      b.msg
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "or-tip", children: [
      /* @__PURE__ */ l.jsx("strong", { children: "Tip:" }),
      " Use ",
      /* @__PURE__ */ l.jsx("code", { children: "/openrouter model <id>" }),
      " in chat to switch models on the fly. Use ",
      /* @__PURE__ */ l.jsx("code", { children: "/openrouter status" }),
      " to confirm active config."
    ] })
  ] });
}
const w = {
  apiKey: "",
  model: "google/gemini-2.0-flash-001",
  baseUrl: "https://openrouter.ai/api/v1"
};
function yr(p) {
  p.registerPanel("openrouter-settings", {
    render: () => vr(hr, { config: w })
  }), p.registerSlashCommand("openrouter", {
    description: "Switch active OpenRouter model or check connection status",
    async execute(y) {
      const m = y.trim();
      return !m || m === "status" ? w.apiKey ? `✅ OpenRouter active
**Model:** \`${w.model}\`` : "⚠️ OpenRouter: No API key set. Open the OpenRouter panel in the sidebar." : m.startsWith("model ") ? (w.model = m.replace("model ", "").trim(), `✅ Model switched to \`${w.model}\``) : "**Commands:**\n- `/openrouter status`\n- `/openrouter model <id>`";
    }
  }), p.registerCompletionProvider("openrouter", {
    name: "OpenRouter",
    async complete(y) {
      var C, k, x, j;
      if (!w.apiKey) throw new Error("OpenRouter API key not set. Configure it in the sidebar panel.");
      const m = await fetch(`${w.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${w.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://nimbalyst.com",
          "X-Title": "Nimbalyst OpenRouter Extension"
        },
        body: JSON.stringify({ model: w.model, messages: y, stream: !1 })
      });
      if (!m.ok) {
        const u = await m.json().catch(() => ({}));
        throw new Error(`OpenRouter error ${m.status}: ${((C = u == null ? void 0 : u.error) == null ? void 0 : C.message) ?? m.statusText}`);
      }
      return ((j = (x = (k = (await m.json()).choices) == null ? void 0 : k[0]) == null ? void 0 : x.message) == null ? void 0 : j.content) ?? "";
    }
  });
}
function br() {
}
export {
  yr as activate,
  w as config,
  br as deactivate
};
