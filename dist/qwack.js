/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _ = globalThis, ie = _.trustedTypes, $e = ie ? ie.createPolicy("lit-html", { createHTML: (p) => p }) : void 0, Ue = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, Ne = "?" + T, Xe = `<${Ne}>`, N = document, Q = () => N.createComment(""), X = (p) => p === null || typeof p != "object" && typeof p != "function", xe = Array.isArray, qe = (p) => xe(p) || typeof (p == null ? void 0 : p[Symbol.iterator]) == "function", ce = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Se = /-->/g, Oe = />/g, L = RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ee = /'/g, Pe = /"/g, ke = /^(?:script|style|textarea|title)$/i, et = (p) => (n, ...t) => ({ _$litType$: p, strings: n, values: t }), De = et(1), R = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), ze = /* @__PURE__ */ new WeakMap(), U = N.createTreeWalker(N, 129);
function Fe(p, n) {
  if (!xe(p) || !p.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return $e !== void 0 ? $e.createHTML(n) : n;
}
const tt = (p, n) => {
  const t = p.length - 1, i = [];
  let e, r = n === 2 ? "<svg>" : n === 3 ? "<math>" : "", o = Y;
  for (let s = 0; s < t; s++) {
    const l = p[s];
    let a, d, c = -1, h = 0;
    for (; h < l.length && (o.lastIndex = h, d = o.exec(l), d !== null); ) h = o.lastIndex, o === Y ? d[1] === "!--" ? o = Se : d[1] !== void 0 ? o = Oe : d[2] !== void 0 ? (ke.test(d[2]) && (e = RegExp("</" + d[2], "g")), o = L) : d[3] !== void 0 && (o = L) : o === L ? d[0] === ">" ? (o = e ?? Y, c = -1) : d[1] === void 0 ? c = -2 : (c = o.lastIndex - d[2].length, a = d[1], o = d[3] === void 0 ? L : d[3] === '"' ? Pe : Ee) : o === Pe || o === Ee ? o = L : o === Se || o === Oe ? o = Y : (o = L, e = void 0);
    const x = o === L && p[s + 1].startsWith("/>") ? " " : "";
    r += o === Y ? l + Xe : c >= 0 ? (i.push(a), l.slice(0, c) + Ue + l.slice(c) + T + x) : l + T + (c === -2 ? s : x);
  }
  return [Fe(p, r + (p[t] || "<?>") + (n === 2 ? "</svg>" : n === 3 ? "</math>" : "")), i];
};
class q {
  constructor({ strings: n, _$litType$: t }, i) {
    let e;
    this.parts = [];
    let r = 0, o = 0;
    const s = n.length - 1, l = this.parts, [a, d] = tt(n, t);
    if (this.el = q.createElement(a, i), U.currentNode = this.el.content, t === 2 || t === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (e = U.nextNode()) !== null && l.length < s; ) {
      if (e.nodeType === 1) {
        if (e.hasAttributes()) for (const c of e.getAttributeNames()) if (c.endsWith(Ue)) {
          const h = d[o++], x = e.getAttribute(c).split(T), u = /([.?@])?(.*)/.exec(h);
          l.push({ type: 1, index: r, name: u[2], strings: x, ctor: u[1] === "." ? rt : u[1] === "?" ? ot : u[1] === "@" ? it : se }), e.removeAttribute(c);
        } else c.startsWith(T) && (l.push({ type: 6, index: r }), e.removeAttribute(c));
        if (ke.test(e.tagName)) {
          const c = e.textContent.split(T), h = c.length - 1;
          if (h > 0) {
            e.textContent = ie ? ie.emptyScript : "";
            for (let x = 0; x < h; x++) e.append(c[x], Q()), U.nextNode(), l.push({ type: 2, index: ++r });
            e.append(c[h], Q());
          }
        }
      } else if (e.nodeType === 8) if (e.data === Ne) l.push({ type: 2, index: r });
      else {
        let c = -1;
        for (; (c = e.data.indexOf(T, c + 1)) !== -1; ) l.push({ type: 7, index: r }), c += T.length - 1;
      }
      r++;
    }
  }
  static createElement(n, t) {
    const i = N.createElement("template");
    return i.innerHTML = n, i;
  }
}
function G(p, n, t = p, i) {
  var o, s;
  if (n === R) return n;
  let e = i !== void 0 ? (o = t._$Co) == null ? void 0 : o[i] : t._$Cl;
  const r = X(n) ? void 0 : n._$litDirective$;
  return (e == null ? void 0 : e.constructor) !== r && ((s = e == null ? void 0 : e._$AO) == null || s.call(e, !1), r === void 0 ? e = void 0 : (e = new r(p), e._$AT(p, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = e : t._$Cl = e), e !== void 0 && (n = G(p, e._$AS(p, n.values), e, i)), n;
}
class nt {
  constructor(n, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = n, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(n) {
    const { el: { content: t }, parts: i } = this._$AD, e = ((n == null ? void 0 : n.creationScope) ?? N).importNode(t, !0);
    U.currentNode = e;
    let r = U.nextNode(), o = 0, s = 0, l = i[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let a;
        l.type === 2 ? a = new ee(r, r.nextSibling, this, n) : l.type === 1 ? a = new l.ctor(r, l.name, l.strings, this, n) : l.type === 6 && (a = new lt(r, this, n)), this._$AV.push(a), l = i[++s];
      }
      o !== (l == null ? void 0 : l.index) && (r = U.nextNode(), o++);
    }
    return U.currentNode = N, e;
  }
  p(n) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(n, i, t), t += i.strings.length - 2) : i._$AI(n[t])), t++;
  }
}
class ee {
  get _$AU() {
    var n;
    return ((n = this._$AM) == null ? void 0 : n._$AU) ?? this._$Cv;
  }
  constructor(n, t, i, e) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = n, this._$AB = t, this._$AM = i, this.options = e, this._$Cv = (e == null ? void 0 : e.isConnected) ?? !0;
  }
  get parentNode() {
    let n = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (n == null ? void 0 : n.nodeType) === 11 && (n = t.parentNode), n;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(n, t = this) {
    n = G(this, n, t), X(n) ? n === A || n == null || n === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : n !== this._$AH && n !== R && this._(n) : n._$litType$ !== void 0 ? this.$(n) : n.nodeType !== void 0 ? this.T(n) : qe(n) ? this.k(n) : this._(n);
  }
  O(n) {
    return this._$AA.parentNode.insertBefore(n, this._$AB);
  }
  T(n) {
    this._$AH !== n && (this._$AR(), this._$AH = this.O(n));
  }
  _(n) {
    this._$AH !== A && X(this._$AH) ? this._$AA.nextSibling.data = n : this.T(N.createTextNode(n)), this._$AH = n;
  }
  $(n) {
    var r;
    const { values: t, _$litType$: i } = n, e = typeof i == "number" ? this._$AC(n) : (i.el === void 0 && (i.el = q.createElement(Fe(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === e) this._$AH.p(t);
    else {
      const o = new nt(e, this), s = o.u(this.options);
      o.p(t), this.T(s), this._$AH = o;
    }
  }
  _$AC(n) {
    let t = ze.get(n.strings);
    return t === void 0 && ze.set(n.strings, t = new q(n)), t;
  }
  k(n) {
    xe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, e = 0;
    for (const r of n) e === t.length ? t.push(i = new ee(this.O(Q()), this.O(Q()), this, this.options)) : i = t[e], i._$AI(r), e++;
    e < t.length && (this._$AR(i && i._$AB.nextSibling, e), t.length = e);
  }
  _$AR(n = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); n && n !== this._$AB; ) {
      const e = n.nextSibling;
      n.remove(), n = e;
    }
  }
  setConnected(n) {
    var t;
    this._$AM === void 0 && (this._$Cv = n, (t = this._$AP) == null || t.call(this, n));
  }
}
class se {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(n, t, i, e, r) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = n, this.name = t, this._$AM = e, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = A;
  }
  _$AI(n, t = this, i, e) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) n = G(this, n, t, 0), o = !X(n) || n !== this._$AH && n !== R, o && (this._$AH = n);
    else {
      const s = n;
      let l, a;
      for (n = r[0], l = 0; l < r.length - 1; l++) a = G(this, s[i + l], t, l), a === R && (a = this._$AH[l]), o || (o = !X(a) || a !== this._$AH[l]), a === A ? n = A : n !== A && (n += (a ?? "") + r[l + 1]), this._$AH[l] = a;
    }
    o && !e && this.j(n);
  }
  j(n) {
    n === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, n ?? "");
  }
}
class rt extends se {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(n) {
    this.element[this.name] = n === A ? void 0 : n;
  }
}
class ot extends se {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(n) {
    this.element.toggleAttribute(this.name, !!n && n !== A);
  }
}
class it extends se {
  constructor(n, t, i, e, r) {
    super(n, t, i, e, r), this.type = 5;
  }
  _$AI(n, t = this) {
    if ((n = G(this, n, t, 0) ?? A) === R) return;
    const i = this._$AH, e = n === A && i !== A || n.capture !== i.capture || n.once !== i.once || n.passive !== i.passive, r = n !== A && (i === A || e);
    e && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, n), this._$AH = n;
  }
  handleEvent(n) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, n) : this._$AH.handleEvent(n);
  }
}
class lt {
  constructor(n, t, i) {
    this.element = n, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(n) {
    G(this, n);
  }
}
const pe = _.litHtmlPolyfillSupport;
pe == null || pe(q, ee), (_.litHtmlVersions ?? (_.litHtmlVersions = [])).push("3.2.1");
const st = (p, n, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? n;
  let e = i._$litPart$;
  if (e === void 0) {
    const r = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = e = new ee(n.insertBefore(Q(), r), r, void 0, t ?? {});
  }
  return e._$AI(p), e;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Be = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Ge = (p) => (...n) => ({ _$litDirective$: p, values: n });
let Ke = class {
  constructor(n) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(n, t, i) {
    this._$Ct = n, this._$AM = t, this._$Ci = i;
  }
  _$AS(n, t) {
    return this.update(n, t);
  }
  update(n, t) {
    return this.render(...t);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = Ge(class extends Ke {
  constructor(p) {
    var n;
    if (super(p), p.type !== Be.ATTRIBUTE || p.name !== "class" || ((n = p.strings) == null ? void 0 : n.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(p) {
    return " " + Object.keys(p).filter((n) => p[n]).join(" ") + " ";
  }
  update(p, [n]) {
    var i, e;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), p.strings !== void 0 && (this.nt = new Set(p.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in n) n[r] && !((i = this.nt) != null && i.has(r)) && this.st.add(r);
      return this.render(n);
    }
    const t = p.element.classList;
    for (const r of this.st) r in n || (t.remove(r), this.st.delete(r));
    for (const r in n) {
      const o = !!n[r];
      o === this.st.has(r) || (e = this.nt) != null && e.has(r) || (o ? (t.add(r), this.st.add(r)) : (t.remove(r), this.st.delete(r)));
    }
    return R;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const We = Symbol.for(""), ct = (p) => {
  if ((p == null ? void 0 : p.r) === We) return p == null ? void 0 : p._$litStatic$;
}, Te = (p, ...n) => ({ _$litStatic$: n.reduce((t, i, e) => t + ((r) => {
  if (r._$litStatic$ !== void 0) return r._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(i) + p[e + 1], p[0]), r: We }), He = /* @__PURE__ */ new Map(), pt = (p) => (n, ...t) => {
  const i = t.length;
  let e, r;
  const o = [], s = [];
  let l, a = 0, d = !1;
  for (; a < i; ) {
    for (l = n[a]; a < i && (r = t[a], (e = ct(r)) !== void 0); ) l += e + n[++a], d = !0;
    a !== i && s.push(r), o.push(l), a++;
  }
  if (a === i && o.push(n[i]), d) {
    const c = o.join("$$lit$$");
    (n = He.get(c)) === void 0 && (o.raw = o, He.set(c, n = o)), t = s;
  }
  return p(n, ...t);
}, de = pt(De);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ye = (p) => (n, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(p, n);
  }) : customElements.define(p, n);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe = globalThis, fe = oe.ShadowRoot && (oe.ShadyCSS === void 0 || oe.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, me = Symbol(), Re = /* @__PURE__ */ new WeakMap();
let _e = class {
  constructor(n, t, i) {
    if (this._$cssResult$ = !0, i !== me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = n, this.t = t;
  }
  get styleSheet() {
    let n = this.o;
    const t = this.t;
    if (fe && n === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (n = Re.get(t)), n === void 0 && ((this.o = n = new CSSStyleSheet()).replaceSync(this.cssText), i && Re.set(t, n));
    }
    return n;
  }
  toString() {
    return this.cssText;
  }
};
const dt = (p) => new _e(typeof p == "string" ? p : p + "", void 0, me), ve = (p, ...n) => {
  const t = p.length === 1 ? p[0] : n.reduce((i, e, r) => i + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(e) + p[r + 1], p[0]);
  return new _e(t, p, me);
}, ht = (p, n) => {
  if (fe) p.adoptedStyleSheets = n.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of n) {
    const i = document.createElement("style"), e = oe.litNonce;
    e !== void 0 && i.setAttribute("nonce", e), i.textContent = t.cssText, p.appendChild(i);
  }
}, Ce = fe ? (p) => p : (p) => p instanceof CSSStyleSheet ? ((n) => {
  let t = "";
  for (const i of n.cssRules) t += i.cssText;
  return dt(t);
})(p) : p;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: yt, defineProperty: ut, getOwnPropertyDescriptor: xt, getOwnPropertyNames: ft, getOwnPropertySymbols: mt, getPrototypeOf: vt } = Object, H = globalThis, Ie = H.trustedTypes, gt = Ie ? Ie.emptyScript : "", he = H.reactiveElementPolyfillSupport, J = (p, n) => p, le = { toAttribute(p, n) {
  switch (n) {
    case Boolean:
      p = p ? gt : null;
      break;
    case Object:
    case Array:
      p = p == null ? p : JSON.stringify(p);
  }
  return p;
}, fromAttribute(p, n) {
  let t = p;
  switch (n) {
    case Boolean:
      t = p !== null;
      break;
    case Number:
      t = p === null ? null : Number(p);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(p);
      } catch {
        t = null;
      }
  }
  return t;
} }, ge = (p, n) => !yt(p, n), Ve = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: ge };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), H.litPropertyMetadata ?? (H.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class B extends HTMLElement {
  static addInitializer(n) {
    this._$Ei(), (this.l ?? (this.l = [])).push(n);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(n, t = Ve) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(n, t), !t.noAccessor) {
      const i = Symbol(), e = this.getPropertyDescriptor(n, i, t);
      e !== void 0 && ut(this.prototype, n, e);
    }
  }
  static getPropertyDescriptor(n, t, i) {
    const { get: e, set: r } = xt(this.prototype, n) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get() {
      return e == null ? void 0 : e.call(this);
    }, set(o) {
      const s = e == null ? void 0 : e.call(this);
      r.call(this, o), this.requestUpdate(n, s, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(n) {
    return this.elementProperties.get(n) ?? Ve;
  }
  static _$Ei() {
    if (this.hasOwnProperty(J("elementProperties"))) return;
    const n = vt(this);
    n.finalize(), n.l !== void 0 && (this.l = [...n.l]), this.elementProperties = new Map(n.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(J("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(J("properties"))) {
      const t = this.properties, i = [...ft(t), ...mt(t)];
      for (const e of i) this.createProperty(e, t[e]);
    }
    const n = this[Symbol.metadata];
    if (n !== null) {
      const t = litPropertyMetadata.get(n);
      if (t !== void 0) for (const [i, e] of t) this.elementProperties.set(i, e);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const e = this._$Eu(t, i);
      e !== void 0 && this._$Eh.set(e, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(n) {
    const t = [];
    if (Array.isArray(n)) {
      const i = new Set(n.flat(1 / 0).reverse());
      for (const e of i) t.unshift(Ce(e));
    } else n !== void 0 && t.push(Ce(n));
    return t;
  }
  static _$Eu(n, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof n == "string" ? n.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var n;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (n = this.constructor.l) == null || n.forEach((t) => t(this));
  }
  addController(n) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(n), this.renderRoot !== void 0 && this.isConnected && ((t = n.hostConnected) == null || t.call(n));
  }
  removeController(n) {
    var t;
    (t = this._$EO) == null || t.delete(n);
  }
  _$E_() {
    const n = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (n.set(i, this[i]), delete this[i]);
    n.size > 0 && (this._$Ep = n);
  }
  createRenderRoot() {
    const n = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ht(n, this.constructor.elementStyles), n;
  }
  connectedCallback() {
    var n;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (n = this._$EO) == null || n.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(n) {
  }
  disconnectedCallback() {
    var n;
    (n = this._$EO) == null || n.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(n, t, i) {
    this._$AK(n, i);
  }
  _$EC(n, t) {
    var r;
    const i = this.constructor.elementProperties.get(n), e = this.constructor._$Eu(n, i);
    if (e !== void 0 && i.reflect === !0) {
      const o = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : le).toAttribute(t, i.type);
      this._$Em = n, o == null ? this.removeAttribute(e) : this.setAttribute(e, o), this._$Em = null;
    }
  }
  _$AK(n, t) {
    var r;
    const i = this.constructor, e = i._$Eh.get(n);
    if (e !== void 0 && this._$Em !== e) {
      const o = i.getPropertyOptions(e), s = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((r = o.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? o.converter : le;
      this._$Em = e, this[e] = s.fromAttribute(t, o.type), this._$Em = null;
    }
  }
  requestUpdate(n, t, i) {
    if (n !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(n)), !(i.hasChanged ?? ge)(this[n], t)) return;
      this.P(n, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(n, t, i) {
    this._$AL.has(n) || this._$AL.set(n, t), i.reflect === !0 && this._$Em !== n && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(n);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const n = this.scheduleUpdate();
    return n != null && await n, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, o] of this._$Ep) this[r] = o;
        this._$Ep = void 0;
      }
      const e = this.constructor.elementProperties;
      if (e.size > 0) for (const [r, o] of e) o.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], o);
    }
    let n = !1;
    const t = this._$AL;
    try {
      n = this.shouldUpdate(t), n ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((e) => {
        var r;
        return (r = e.hostUpdate) == null ? void 0 : r.call(e);
      }), this.update(t)) : this._$EU();
    } catch (e) {
      throw n = !1, this._$EU(), e;
    }
    n && this._$AE(t);
  }
  willUpdate(n) {
  }
  _$AE(n) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var e;
      return (e = i.hostUpdated) == null ? void 0 : e.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(n)), this.updated(n);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(n) {
    return !0;
  }
  update(n) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(n) {
  }
  firstUpdated(n) {
  }
}
B.elementStyles = [], B.shadowRootOptions = { mode: "open" }, B[J("elementProperties")] = /* @__PURE__ */ new Map(), B[J("finalized")] = /* @__PURE__ */ new Map(), he == null || he({ ReactiveElement: B }), (H.reactiveElementVersions ?? (H.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jt = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: ge }, bt = (p = jt, n, t) => {
  const { kind: i, metadata: e } = t;
  let r = globalThis.litPropertyMetadata.get(e);
  if (r === void 0 && globalThis.litPropertyMetadata.set(e, r = /* @__PURE__ */ new Map()), r.set(t.name, p), i === "accessor") {
    const { name: o } = t;
    return { set(s) {
      const l = n.get.call(this);
      n.set.call(this, s), this.requestUpdate(o, l, p);
    }, init(s) {
      return s !== void 0 && this.P(o, void 0, p), s;
    } };
  }
  if (i === "setter") {
    const { name: o } = t;
    return function(s) {
      const l = this[o];
      n.call(this, s), this.requestUpdate(o, l, p);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function S(p) {
  return (n, t) => typeof t == "object" ? bt(p, n, t) : ((i, e, r) => {
    const o = e.hasOwnProperty(r);
    return e.constructor.createProperty(r, o ? { ...i, wrapped: !0 } : i), o ? Object.getOwnPropertyDescriptor(e, r) : void 0;
  })(p, n, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Z extends B {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const n = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = n.firstChild), n;
  }
  update(n) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(n), this._$Do = st(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var n;
    super.connectedCallback(), (n = this._$Do) == null || n.setConnected(!0);
  }
  disconnectedCallback() {
    var n;
    super.disconnectedCallback(), (n = this._$Do) == null || n.setConnected(!1);
  }
  render() {
    return R;
  }
}
var Le;
Z._$litElement$ = !0, Z.finalized = !0, (Le = globalThis.litElementHydrateSupport) == null || Le.call(globalThis, { LitElement: Z });
const ye = globalThis.litElementPolyfillSupport;
ye == null || ye({ LitElement: Z });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
const je = class je extends Z {
};
je.styles = ve`:host, :host * {box-sizing: border-box;}`;
let K = je;
const wt = ve`
  :host {
    display: inline-block;
  }

  

  .button--base {
    color: var(--qwack-foreground);
    display: flex;
    flex-direction: row;
    gap: var(--qwack-space-1);
    align-items: center;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: var(--qwack-font-sans); 
    transition: all var(--qwack-t-duration) ease-in;
  }

  .button--default {
    border: solid var(--qwack-foreground);
    background-color: transparent;
  }

  .button--default:hover {
    background-color: var(--qwack-foreground);
    color: var(--qwack-background);
    transition: all var(--qwack-t-duration) ease-out;
  }

  .button--primary {
    border: solid var(--qwack-accent);  
    color: var(--qwack-accent);  
    background-color: transparent;
  }

  .button--primary:hover {
    background-color: var(--qwack-accent);
    color: var(--qwack-background);
    transition: all var(--qwack-t-duration) ease-out;
  }

  .button--small {
    border-width: 1.5px;
    font-size: var(--qwack-font-sm);
    font-weight: 600;
    padding: var(--qwack-space-1) var(--qwack-space-2);
    border-radius: var(--qwack-rounded-sm);
    letter-spacing: 1px;
  }

  .button--small .button--icon {
    height: var(--qwack-font-sm);
}

.button--regular{
    border-width: 1.5px;
    font-weight: 600;
    font-size: var(--qwack-font-r);
    padding: var(--qwack-space-1) var(--qwack-space-2);
    border-radius: var(--qwack-rounded-sm);
    letter-spacing: 0.5px;
  }

.button--regular .button--icon {
    height: var(--qwack-font-r);
}


  .button--large {
    border-width: 1.5px;
    font-weight: 600;
    font-size: var(--qwack-font-lg);
    padding: var(--qwack-space-2) var(--qwack-space-4);
    border-radius: var(--qwack-rounded-sm);
  }

.button--large .button--icon {
    height: var(--qwack-font-lg);
}


  .button--disabled {
    opacity: 60%;
    pointer-events: none;
  }

  
`;
var Mt = Object.defineProperty, At = Object.getOwnPropertyDescriptor, C = (p, n, t, i) => {
  for (var e = i > 1 ? void 0 : i ? At(n, t) : n, r = p.length - 1, o; r >= 0; r--)
    (o = p[r]) && (e = (i ? o(n, t, e) : o(e)) || e);
  return i && e && Mt(n, t, e), e;
};
let E = class extends K {
  constructor() {
    super(...arguments), this.label = "Button", this.size = "regular", this.primary = !1, this.href = "", this.type = "button", this.disabled = !1, this.suffix = "";
  }
  isLink() {
    return !!this.href;
  }
  render() {
    const p = this.isLink(), n = p ? Te`a` : Te`button`;
    return de`
                <${n}
                class=${at({
      "button--base": !0,
      "button--default": !this.primary,
      "button--primary": this.primary,
      "button--small": this.size == "small",
      "button--regular": this.size == "regular",
      "button--large": this.size == "large",
      "button--disabled": this.disabled
    })} href=${p && !this.disabled ? this.href : void 0}
            >
                                ${this.label} 
${this.suffix ? de`<span class="button--icon"><q-icon fitHeight icon="${this.suffix}"></span>` : de``}

                </${n}>
                `;
  }
};
E.styles = [K.styles, wt];
C([
  S({ reflect: !0 })
], E.prototype, "label", 2);
C([
  S({ reflect: !0 })
], E.prototype, "size", 2);
C([
  S({ type: Boolean, reflect: !0 })
], E.prototype, "primary", 2);
C([
  S({ reflect: !0 })
], E.prototype, "href", 2);
C([
  S({ reflect: !0 })
], E.prototype, "type", 2);
C([
  S({ type: Boolean, reflect: !0 })
], E.prototype, "disabled", 2);
C([
  S({ reflect: !0 })
], E.prototype, "suffix", 2);
E = C([
  Ye("q-button")
], E);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ue extends Ke {
  constructor(n) {
    if (super(n), this.it = A, n.type !== Be.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(n) {
    if (n === A || n == null) return this._t = void 0, this.it = n;
    if (n === R) return n;
    if (typeof n != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (n === this.it) return this._t;
    this.it = n;
    const t = [n];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
ue.directiveName = "unsafeHTML", ue.resultType = 1;
const $t = Ge(ue);
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Je = { exports: {} };
(function(p, n) {
  (function(i, e) {
    p.exports = e();
  })(typeof self < "u" ? self : St, function() {
    return (
      /******/
      function(t) {
        var i = {};
        function e(r) {
          if (i[r])
            return i[r].exports;
          var o = i[r] = {
            /******/
            i: r,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
        }
        return e.m = t, e.c = i, e.d = function(r, o, s) {
          e.o(r, o) || Object.defineProperty(r, o, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: s
            /******/
          });
        }, e.r = function(r) {
          Object.defineProperty(r, "__esModule", { value: !0 });
        }, e.n = function(r) {
          var o = r && r.__esModule ? (
            /******/
            function() {
              return r.default;
            }
          ) : (
            /******/
            function() {
              return r;
            }
          );
          return e.d(o, "a", o), o;
        }, e.o = function(r, o) {
          return Object.prototype.hasOwnProperty.call(r, o);
        }, e.p = "", e(e.s = 0);
      }({
        /***/
        "./dist/icons.json": (
          /*!*************************!*\
            !*** ./dist/icons.json ***!
            \*************************/
          /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
          /***/
          function(t) {
            t.exports = { activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', check: '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', circle: '<circle cx="12" cy="12" r="10"></circle>', clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>', cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>', "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>', divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>', droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>', hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>', hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>', instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>', italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>', loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', minus: '<line x1="5" y1="12" x2="19" y2="12"></line>', monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>', settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>', square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', table: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>', tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>', target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>', twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' };
          }
        ),
        /***/
        "./node_modules/classnames/dedupe.js": (
          /*!*******************************************!*\
            !*** ./node_modules/classnames/dedupe.js ***!
            \*******************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r, o;
            /*!
              Copyright (c) 2016 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            (function() {
              var s = function() {
                function l() {
                }
                l.prototype = /* @__PURE__ */ Object.create(null);
                function a(m, f) {
                  for (var g = f.length, j = 0; j < g; ++j)
                    y(m, f[j]);
                }
                var d = {}.hasOwnProperty;
                function c(m, f) {
                  m[f] = !0;
                }
                function h(m, f) {
                  for (var g in f)
                    d.call(f, g) && (m[g] = !!f[g]);
                }
                var x = /\s+/;
                function u(m, f) {
                  for (var g = f.split(x), j = g.length, M = 0; M < j; ++M)
                    m[g[M]] = !0;
                }
                function y(m, f) {
                  if (f) {
                    var g = typeof f;
                    g === "string" ? u(m, f) : Array.isArray(f) ? a(m, f) : g === "object" ? h(m, f) : g === "number" && c(m, f);
                  }
                }
                function v() {
                  for (var m = arguments.length, f = Array(m), g = 0; g < m; g++)
                    f[g] = arguments[g];
                  var j = new l();
                  a(j, f);
                  var M = [];
                  for (var b in j)
                    j[b] && M.push(b);
                  return M.join(" ");
                }
                return v;
              }();
              typeof t < "u" && t.exports ? t.exports = s : (r = [], o = (function() {
                return s;
              }).apply(i, r), o !== void 0 && (t.exports = o));
            })();
          }
        ),
        /***/
        "./node_modules/core-js/es/array/from.js": (
          /*!***********************************************!*\
            !*** ./node_modules/core-js/es/array/from.js ***!
            \***********************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            e(
              /*! ../../modules/es.string.iterator */
              "./node_modules/core-js/modules/es.string.iterator.js"
            ), e(
              /*! ../../modules/es.array.from */
              "./node_modules/core-js/modules/es.array.from.js"
            );
            var r = e(
              /*! ../../internals/path */
              "./node_modules/core-js/internals/path.js"
            );
            t.exports = r.Array.from;
          }
        ),
        /***/
        "./node_modules/core-js/internals/a-function.js": (
          /*!******************************************************!*\
            !*** ./node_modules/core-js/internals/a-function.js ***!
            \******************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = function(e) {
              if (typeof e != "function")
                throw TypeError(String(e) + " is not a function");
              return e;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/an-object.js": (
          /*!*****************************************************!*\
            !*** ./node_modules/core-js/internals/an-object.js ***!
            \*****************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/is-object */
              "./node_modules/core-js/internals/is-object.js"
            );
            t.exports = function(o) {
              if (!r(o))
                throw TypeError(String(o) + " is not an object");
              return o;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/array-from.js": (
          /*!******************************************************!*\
            !*** ./node_modules/core-js/internals/array-from.js ***!
            \******************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/bind-context */
              "./node_modules/core-js/internals/bind-context.js"
            ), o = e(
              /*! ../internals/to-object */
              "./node_modules/core-js/internals/to-object.js"
            ), s = e(
              /*! ../internals/call-with-safe-iteration-closing */
              "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"
            ), l = e(
              /*! ../internals/is-array-iterator-method */
              "./node_modules/core-js/internals/is-array-iterator-method.js"
            ), a = e(
              /*! ../internals/to-length */
              "./node_modules/core-js/internals/to-length.js"
            ), d = e(
              /*! ../internals/create-property */
              "./node_modules/core-js/internals/create-property.js"
            ), c = e(
              /*! ../internals/get-iterator-method */
              "./node_modules/core-js/internals/get-iterator-method.js"
            );
            t.exports = function(x) {
              var u = o(x), y = typeof this == "function" ? this : Array, v = arguments.length, m = v > 1 ? arguments[1] : void 0, f = m !== void 0, g = 0, j = c(u), M, b, w, $;
              if (f && (m = r(m, v > 2 ? arguments[2] : void 0, 2)), j != null && !(y == Array && l(j)))
                for ($ = j.call(u), b = new y(); !(w = $.next()).done; g++)
                  d(
                    b,
                    g,
                    f ? s($, m, [w.value, g], !0) : w.value
                  );
              else
                for (M = a(u.length), b = new y(M); M > g; g++)
                  d(b, g, f ? m(u[g], g) : u[g]);
              return b.length = g, b;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/array-includes.js": (
          /*!**********************************************************!*\
            !*** ./node_modules/core-js/internals/array-includes.js ***!
            \**********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/to-indexed-object */
              "./node_modules/core-js/internals/to-indexed-object.js"
            ), o = e(
              /*! ../internals/to-length */
              "./node_modules/core-js/internals/to-length.js"
            ), s = e(
              /*! ../internals/to-absolute-index */
              "./node_modules/core-js/internals/to-absolute-index.js"
            );
            t.exports = function(l) {
              return function(a, d, c) {
                var h = r(a), x = o(h.length), u = s(c, x), y;
                if (l && d != d) {
                  for (; x > u; )
                    if (y = h[u++], y != y) return !0;
                } else for (; x > u; u++) if ((l || u in h) && h[u] === d)
                  return l || u || 0;
                return !l && -1;
              };
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/bind-context.js": (
          /*!********************************************************!*\
            !*** ./node_modules/core-js/internals/bind-context.js ***!
            \********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/a-function */
              "./node_modules/core-js/internals/a-function.js"
            );
            t.exports = function(o, s, l) {
              if (r(o), s === void 0) return o;
              switch (l) {
                case 0:
                  return function() {
                    return o.call(s);
                  };
                case 1:
                  return function(a) {
                    return o.call(s, a);
                  };
                case 2:
                  return function(a, d) {
                    return o.call(s, a, d);
                  };
                case 3:
                  return function(a, d, c) {
                    return o.call(s, a, d, c);
                  };
              }
              return function() {
                return o.apply(s, arguments);
              };
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": (
          /*!****************************************************************************!*\
            !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
            \****************************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/an-object */
              "./node_modules/core-js/internals/an-object.js"
            );
            t.exports = function(o, s, l, a) {
              try {
                return a ? s(r(l)[0], l[1]) : s(l);
              } catch (c) {
                var d = o.return;
                throw d !== void 0 && r(d.call(o)), c;
              }
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/check-correctness-of-iteration.js": (
          /*!**************************************************************************!*\
            !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
            \**************************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/well-known-symbol */
              "./node_modules/core-js/internals/well-known-symbol.js"
            ), o = r("iterator"), s = !1;
            try {
              var l = 0, a = {
                next: function() {
                  return { done: !!l++ };
                },
                return: function() {
                  s = !0;
                }
              };
              a[o] = function() {
                return this;
              }, Array.from(a, function() {
                throw 2;
              });
            } catch {
            }
            t.exports = function(d, c) {
              if (!c && !s) return !1;
              var h = !1;
              try {
                var x = {};
                x[o] = function() {
                  return {
                    next: function() {
                      return { done: h = !0 };
                    }
                  };
                }, d(x);
              } catch {
              }
              return h;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/classof-raw.js": (
          /*!*******************************************************!*\
            !*** ./node_modules/core-js/internals/classof-raw.js ***!
            \*******************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            var e = {}.toString;
            t.exports = function(r) {
              return e.call(r).slice(8, -1);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/classof.js": (
          /*!***************************************************!*\
            !*** ./node_modules/core-js/internals/classof.js ***!
            \***************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/classof-raw */
              "./node_modules/core-js/internals/classof-raw.js"
            ), o = e(
              /*! ../internals/well-known-symbol */
              "./node_modules/core-js/internals/well-known-symbol.js"
            ), s = o("toStringTag"), l = r(/* @__PURE__ */ function() {
              return arguments;
            }()) == "Arguments", a = function(d, c) {
              try {
                return d[c];
              } catch {
              }
            };
            t.exports = function(d) {
              var c, h, x;
              return d === void 0 ? "Undefined" : d === null ? "Null" : typeof (h = a(c = Object(d), s)) == "string" ? h : l ? r(c) : (x = r(c)) == "Object" && typeof c.callee == "function" ? "Arguments" : x;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/copy-constructor-properties.js": (
          /*!***********************************************************************!*\
            !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
            \***********************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), o = e(
              /*! ../internals/own-keys */
              "./node_modules/core-js/internals/own-keys.js"
            ), s = e(
              /*! ../internals/object-get-own-property-descriptor */
              "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
            ), l = e(
              /*! ../internals/object-define-property */
              "./node_modules/core-js/internals/object-define-property.js"
            );
            t.exports = function(a, d) {
              for (var c = o(d), h = l.f, x = s.f, u = 0; u < c.length; u++) {
                var y = c[u];
                r(a, y) || h(a, y, x(d, y));
              }
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/correct-prototype-getter.js": (
          /*!********************************************************************!*\
            !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
            \********************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/fails */
              "./node_modules/core-js/internals/fails.js"
            );
            t.exports = !r(function() {
              function o() {
              }
              return o.prototype.constructor = null, Object.getPrototypeOf(new o()) !== o.prototype;
            });
          }
        ),
        /***/
        "./node_modules/core-js/internals/create-iterator-constructor.js": (
          /*!***********************************************************************!*\
            !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
            \***********************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/iterators-core */
              "./node_modules/core-js/internals/iterators-core.js"
            ).IteratorPrototype, o = e(
              /*! ../internals/object-create */
              "./node_modules/core-js/internals/object-create.js"
            ), s = e(
              /*! ../internals/create-property-descriptor */
              "./node_modules/core-js/internals/create-property-descriptor.js"
            ), l = e(
              /*! ../internals/set-to-string-tag */
              "./node_modules/core-js/internals/set-to-string-tag.js"
            ), a = e(
              /*! ../internals/iterators */
              "./node_modules/core-js/internals/iterators.js"
            ), d = function() {
              return this;
            };
            t.exports = function(c, h, x) {
              var u = h + " Iterator";
              return c.prototype = o(r, { next: s(1, x) }), l(c, u, !1, !0), a[u] = d, c;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/create-property-descriptor.js": (
          /*!**********************************************************************!*\
            !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
            \**********************************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = function(e, r) {
              return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: r
              };
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/create-property.js": (
          /*!***********************************************************!*\
            !*** ./node_modules/core-js/internals/create-property.js ***!
            \***********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/to-primitive */
              "./node_modules/core-js/internals/to-primitive.js"
            ), o = e(
              /*! ../internals/object-define-property */
              "./node_modules/core-js/internals/object-define-property.js"
            ), s = e(
              /*! ../internals/create-property-descriptor */
              "./node_modules/core-js/internals/create-property-descriptor.js"
            );
            t.exports = function(l, a, d) {
              var c = r(a);
              c in l ? o.f(l, c, s(0, d)) : l[c] = d;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/define-iterator.js": (
          /*!***********************************************************!*\
            !*** ./node_modules/core-js/internals/define-iterator.js ***!
            \***********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/export */
              "./node_modules/core-js/internals/export.js"
            ), o = e(
              /*! ../internals/create-iterator-constructor */
              "./node_modules/core-js/internals/create-iterator-constructor.js"
            ), s = e(
              /*! ../internals/object-get-prototype-of */
              "./node_modules/core-js/internals/object-get-prototype-of.js"
            ), l = e(
              /*! ../internals/object-set-prototype-of */
              "./node_modules/core-js/internals/object-set-prototype-of.js"
            ), a = e(
              /*! ../internals/set-to-string-tag */
              "./node_modules/core-js/internals/set-to-string-tag.js"
            ), d = e(
              /*! ../internals/hide */
              "./node_modules/core-js/internals/hide.js"
            ), c = e(
              /*! ../internals/redefine */
              "./node_modules/core-js/internals/redefine.js"
            ), h = e(
              /*! ../internals/well-known-symbol */
              "./node_modules/core-js/internals/well-known-symbol.js"
            ), x = e(
              /*! ../internals/is-pure */
              "./node_modules/core-js/internals/is-pure.js"
            ), u = e(
              /*! ../internals/iterators */
              "./node_modules/core-js/internals/iterators.js"
            ), y = e(
              /*! ../internals/iterators-core */
              "./node_modules/core-js/internals/iterators-core.js"
            ), v = y.IteratorPrototype, m = y.BUGGY_SAFARI_ITERATORS, f = h("iterator"), g = "keys", j = "values", M = "entries", b = function() {
              return this;
            };
            t.exports = function(w, $, P, Ze, D, Qe, be) {
              o(P, $, Ze);
              var ne = function(z) {
                if (z === D && I) return I;
                if (!m && z in O) return O[z];
                switch (z) {
                  case g:
                    return function() {
                      return new P(this, z);
                    };
                  case j:
                    return function() {
                      return new P(this, z);
                    };
                  case M:
                    return function() {
                      return new P(this, z);
                    };
                }
                return function() {
                  return new P(this);
                };
              }, we = $ + " Iterator", ae = !1, O = w.prototype, F = O[f] || O["@@iterator"] || D && O[D], I = !m && F || ne(D), Me = $ == "Array" && O.entries || F, V, W, re;
              if (Me && (V = s(Me.call(new w())), v !== Object.prototype && V.next && (!x && s(V) !== v && (l ? l(V, v) : typeof V[f] != "function" && d(V, f, b)), a(V, we, !0, !0), x && (u[we] = b))), D == j && F && F.name !== j && (ae = !0, I = function() {
                return F.call(this);
              }), (!x || be) && O[f] !== I && d(O, f, I), u[$] = I, D)
                if (W = {
                  values: ne(j),
                  keys: Qe ? I : ne(g),
                  entries: ne(M)
                }, be) for (re in W)
                  (m || ae || !(re in O)) && c(O, re, W[re]);
                else r({ target: $, proto: !0, forced: m || ae }, W);
              return W;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/descriptors.js": (
          /*!*******************************************************!*\
            !*** ./node_modules/core-js/internals/descriptors.js ***!
            \*******************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/fails */
              "./node_modules/core-js/internals/fails.js"
            );
            t.exports = !r(function() {
              return Object.defineProperty({}, "a", { get: function() {
                return 7;
              } }).a != 7;
            });
          }
        ),
        /***/
        "./node_modules/core-js/internals/document-create-element.js": (
          /*!*******************************************************************!*\
            !*** ./node_modules/core-js/internals/document-create-element.js ***!
            \*******************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/is-object */
              "./node_modules/core-js/internals/is-object.js"
            ), s = r.document, l = o(s) && o(s.createElement);
            t.exports = function(a) {
              return l ? s.createElement(a) : {};
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/enum-bug-keys.js": (
          /*!*********************************************************!*\
            !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
            \*********************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf"
            ];
          }
        ),
        /***/
        "./node_modules/core-js/internals/export.js": (
          /*!**************************************************!*\
            !*** ./node_modules/core-js/internals/export.js ***!
            \**************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/object-get-own-property-descriptor */
              "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
            ).f, s = e(
              /*! ../internals/hide */
              "./node_modules/core-js/internals/hide.js"
            ), l = e(
              /*! ../internals/redefine */
              "./node_modules/core-js/internals/redefine.js"
            ), a = e(
              /*! ../internals/set-global */
              "./node_modules/core-js/internals/set-global.js"
            ), d = e(
              /*! ../internals/copy-constructor-properties */
              "./node_modules/core-js/internals/copy-constructor-properties.js"
            ), c = e(
              /*! ../internals/is-forced */
              "./node_modules/core-js/internals/is-forced.js"
            );
            t.exports = function(h, x) {
              var u = h.target, y = h.global, v = h.stat, m, f, g, j, M, b;
              if (y ? f = r : v ? f = r[u] || a(u, {}) : f = (r[u] || {}).prototype, f) for (g in x) {
                if (M = x[g], h.noTargetGet ? (b = o(f, g), j = b && b.value) : j = f[g], m = c(y ? g : u + (v ? "." : "#") + g, h.forced), !m && j !== void 0) {
                  if (typeof M == typeof j) continue;
                  d(M, j);
                }
                (h.sham || j && j.sham) && s(M, "sham", !0), l(f, g, M, h);
              }
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/fails.js": (
          /*!*************************************************!*\
            !*** ./node_modules/core-js/internals/fails.js ***!
            \*************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = function(e) {
              try {
                return !!e();
              } catch {
                return !0;
              }
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/function-to-string.js": (
          /*!**************************************************************!*\
            !*** ./node_modules/core-js/internals/function-to-string.js ***!
            \**************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/shared */
              "./node_modules/core-js/internals/shared.js"
            );
            t.exports = r("native-function-to-string", Function.toString);
          }
        ),
        /***/
        "./node_modules/core-js/internals/get-iterator-method.js": (
          /*!***************************************************************!*\
            !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
            \***************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/classof */
              "./node_modules/core-js/internals/classof.js"
            ), o = e(
              /*! ../internals/iterators */
              "./node_modules/core-js/internals/iterators.js"
            ), s = e(
              /*! ../internals/well-known-symbol */
              "./node_modules/core-js/internals/well-known-symbol.js"
            ), l = s("iterator");
            t.exports = function(a) {
              if (a != null) return a[l] || a["@@iterator"] || o[r(a)];
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/global.js": (
          /*!**************************************************!*\
            !*** ./node_modules/core-js/internals/global.js ***!
            \**************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            (function(r) {
              var o = "object", s = function(l) {
                return l && l.Math == Math && l;
              };
              t.exports = // eslint-disable-next-line no-undef
              s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof r == o && r) || // eslint-disable-next-line no-new-func
              Function("return this")();
            }).call(this, e(
              /*! ./../../webpack/buildin/global.js */
              "./node_modules/webpack/buildin/global.js"
            ));
          }
        ),
        /***/
        "./node_modules/core-js/internals/has.js": (
          /*!***********************************************!*\
            !*** ./node_modules/core-js/internals/has.js ***!
            \***********************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            var e = {}.hasOwnProperty;
            t.exports = function(r, o) {
              return e.call(r, o);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/hidden-keys.js": (
          /*!*******************************************************!*\
            !*** ./node_modules/core-js/internals/hidden-keys.js ***!
            \*******************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = {};
          }
        ),
        /***/
        "./node_modules/core-js/internals/hide.js": (
          /*!************************************************!*\
            !*** ./node_modules/core-js/internals/hide.js ***!
            \************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/descriptors */
              "./node_modules/core-js/internals/descriptors.js"
            ), o = e(
              /*! ../internals/object-define-property */
              "./node_modules/core-js/internals/object-define-property.js"
            ), s = e(
              /*! ../internals/create-property-descriptor */
              "./node_modules/core-js/internals/create-property-descriptor.js"
            );
            t.exports = r ? function(l, a, d) {
              return o.f(l, a, s(1, d));
            } : function(l, a, d) {
              return l[a] = d, l;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/html.js": (
          /*!************************************************!*\
            !*** ./node_modules/core-js/internals/html.js ***!
            \************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = r.document;
            t.exports = o && o.documentElement;
          }
        ),
        /***/
        "./node_modules/core-js/internals/ie8-dom-define.js": (
          /*!**********************************************************!*\
            !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
            \**********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/descriptors */
              "./node_modules/core-js/internals/descriptors.js"
            ), o = e(
              /*! ../internals/fails */
              "./node_modules/core-js/internals/fails.js"
            ), s = e(
              /*! ../internals/document-create-element */
              "./node_modules/core-js/internals/document-create-element.js"
            );
            t.exports = !r && !o(function() {
              return Object.defineProperty(s("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7;
            });
          }
        ),
        /***/
        "./node_modules/core-js/internals/indexed-object.js": (
          /*!**********************************************************!*\
            !*** ./node_modules/core-js/internals/indexed-object.js ***!
            \**********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/fails */
              "./node_modules/core-js/internals/fails.js"
            ), o = e(
              /*! ../internals/classof-raw */
              "./node_modules/core-js/internals/classof-raw.js"
            ), s = "".split;
            t.exports = r(function() {
              return !Object("z").propertyIsEnumerable(0);
            }) ? function(l) {
              return o(l) == "String" ? s.call(l, "") : Object(l);
            } : Object;
          }
        ),
        /***/
        "./node_modules/core-js/internals/internal-state.js": (
          /*!**********************************************************!*\
            !*** ./node_modules/core-js/internals/internal-state.js ***!
            \**********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/native-weak-map */
              "./node_modules/core-js/internals/native-weak-map.js"
            ), o = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), s = e(
              /*! ../internals/is-object */
              "./node_modules/core-js/internals/is-object.js"
            ), l = e(
              /*! ../internals/hide */
              "./node_modules/core-js/internals/hide.js"
            ), a = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), d = e(
              /*! ../internals/shared-key */
              "./node_modules/core-js/internals/shared-key.js"
            ), c = e(
              /*! ../internals/hidden-keys */
              "./node_modules/core-js/internals/hidden-keys.js"
            ), h = o.WeakMap, x, u, y, v = function(w) {
              return y(w) ? u(w) : x(w, {});
            }, m = function(w) {
              return function($) {
                var P;
                if (!s($) || (P = u($)).type !== w)
                  throw TypeError("Incompatible receiver, " + w + " required");
                return P;
              };
            };
            if (r) {
              var f = new h(), g = f.get, j = f.has, M = f.set;
              x = function(w, $) {
                return M.call(f, w, $), $;
              }, u = function(w) {
                return g.call(f, w) || {};
              }, y = function(w) {
                return j.call(f, w);
              };
            } else {
              var b = d("state");
              c[b] = !0, x = function(w, $) {
                return l(w, b, $), $;
              }, u = function(w) {
                return a(w, b) ? w[b] : {};
              }, y = function(w) {
                return a(w, b);
              };
            }
            t.exports = {
              set: x,
              get: u,
              has: y,
              enforce: v,
              getterFor: m
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/is-array-iterator-method.js": (
          /*!********************************************************************!*\
            !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
            \********************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/well-known-symbol */
              "./node_modules/core-js/internals/well-known-symbol.js"
            ), o = e(
              /*! ../internals/iterators */
              "./node_modules/core-js/internals/iterators.js"
            ), s = r("iterator"), l = Array.prototype;
            t.exports = function(a) {
              return a !== void 0 && (o.Array === a || l[s] === a);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/is-forced.js": (
          /*!*****************************************************!*\
            !*** ./node_modules/core-js/internals/is-forced.js ***!
            \*****************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/fails */
              "./node_modules/core-js/internals/fails.js"
            ), o = /#|\.prototype\./, s = function(h, x) {
              var u = a[l(h)];
              return u == c ? !0 : u == d ? !1 : typeof x == "function" ? r(x) : !!x;
            }, l = s.normalize = function(h) {
              return String(h).replace(o, ".").toLowerCase();
            }, a = s.data = {}, d = s.NATIVE = "N", c = s.POLYFILL = "P";
            t.exports = s;
          }
        ),
        /***/
        "./node_modules/core-js/internals/is-object.js": (
          /*!*****************************************************!*\
            !*** ./node_modules/core-js/internals/is-object.js ***!
            \*****************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = function(e) {
              return typeof e == "object" ? e !== null : typeof e == "function";
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/is-pure.js": (
          /*!***************************************************!*\
            !*** ./node_modules/core-js/internals/is-pure.js ***!
            \***************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = !1;
          }
        ),
        /***/
        "./node_modules/core-js/internals/iterators-core.js": (
          /*!**********************************************************!*\
            !*** ./node_modules/core-js/internals/iterators-core.js ***!
            \**********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/object-get-prototype-of */
              "./node_modules/core-js/internals/object-get-prototype-of.js"
            ), o = e(
              /*! ../internals/hide */
              "./node_modules/core-js/internals/hide.js"
            ), s = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), l = e(
              /*! ../internals/well-known-symbol */
              "./node_modules/core-js/internals/well-known-symbol.js"
            ), a = e(
              /*! ../internals/is-pure */
              "./node_modules/core-js/internals/is-pure.js"
            ), d = l("iterator"), c = !1, h = function() {
              return this;
            }, x, u, y;
            [].keys && (y = [].keys(), "next" in y ? (u = r(r(y)), u !== Object.prototype && (x = u)) : c = !0), x == null && (x = {}), !a && !s(x, d) && o(x, d, h), t.exports = {
              IteratorPrototype: x,
              BUGGY_SAFARI_ITERATORS: c
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/iterators.js": (
          /*!*****************************************************!*\
            !*** ./node_modules/core-js/internals/iterators.js ***!
            \*****************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = {};
          }
        ),
        /***/
        "./node_modules/core-js/internals/native-symbol.js": (
          /*!*********************************************************!*\
            !*** ./node_modules/core-js/internals/native-symbol.js ***!
            \*********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/fails */
              "./node_modules/core-js/internals/fails.js"
            );
            t.exports = !!Object.getOwnPropertySymbols && !r(function() {
              return !String(Symbol());
            });
          }
        ),
        /***/
        "./node_modules/core-js/internals/native-weak-map.js": (
          /*!***********************************************************!*\
            !*** ./node_modules/core-js/internals/native-weak-map.js ***!
            \***********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/function-to-string */
              "./node_modules/core-js/internals/function-to-string.js"
            ), s = r.WeakMap;
            t.exports = typeof s == "function" && /native code/.test(o.call(s));
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-create.js": (
          /*!*********************************************************!*\
            !*** ./node_modules/core-js/internals/object-create.js ***!
            \*********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/an-object */
              "./node_modules/core-js/internals/an-object.js"
            ), o = e(
              /*! ../internals/object-define-properties */
              "./node_modules/core-js/internals/object-define-properties.js"
            ), s = e(
              /*! ../internals/enum-bug-keys */
              "./node_modules/core-js/internals/enum-bug-keys.js"
            ), l = e(
              /*! ../internals/hidden-keys */
              "./node_modules/core-js/internals/hidden-keys.js"
            ), a = e(
              /*! ../internals/html */
              "./node_modules/core-js/internals/html.js"
            ), d = e(
              /*! ../internals/document-create-element */
              "./node_modules/core-js/internals/document-create-element.js"
            ), c = e(
              /*! ../internals/shared-key */
              "./node_modules/core-js/internals/shared-key.js"
            ), h = c("IE_PROTO"), x = "prototype", u = function() {
            }, y = function() {
              var v = d("iframe"), m = s.length, f = "<", g = "script", j = ">", M = "java" + g + ":", b;
              for (v.style.display = "none", a.appendChild(v), v.src = String(M), b = v.contentWindow.document, b.open(), b.write(f + g + j + "document.F=Object" + f + "/" + g + j), b.close(), y = b.F; m--; ) delete y[x][s[m]];
              return y();
            };
            t.exports = Object.create || function(m, f) {
              var g;
              return m !== null ? (u[x] = r(m), g = new u(), u[x] = null, g[h] = m) : g = y(), f === void 0 ? g : o(g, f);
            }, l[h] = !0;
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-define-properties.js": (
          /*!********************************************************************!*\
            !*** ./node_modules/core-js/internals/object-define-properties.js ***!
            \********************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/descriptors */
              "./node_modules/core-js/internals/descriptors.js"
            ), o = e(
              /*! ../internals/object-define-property */
              "./node_modules/core-js/internals/object-define-property.js"
            ), s = e(
              /*! ../internals/an-object */
              "./node_modules/core-js/internals/an-object.js"
            ), l = e(
              /*! ../internals/object-keys */
              "./node_modules/core-js/internals/object-keys.js"
            );
            t.exports = r ? Object.defineProperties : function(d, c) {
              s(d);
              for (var h = l(c), x = h.length, u = 0, y; x > u; ) o.f(d, y = h[u++], c[y]);
              return d;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-define-property.js": (
          /*!******************************************************************!*\
            !*** ./node_modules/core-js/internals/object-define-property.js ***!
            \******************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/descriptors */
              "./node_modules/core-js/internals/descriptors.js"
            ), o = e(
              /*! ../internals/ie8-dom-define */
              "./node_modules/core-js/internals/ie8-dom-define.js"
            ), s = e(
              /*! ../internals/an-object */
              "./node_modules/core-js/internals/an-object.js"
            ), l = e(
              /*! ../internals/to-primitive */
              "./node_modules/core-js/internals/to-primitive.js"
            ), a = Object.defineProperty;
            i.f = r ? a : function(c, h, x) {
              if (s(c), h = l(h, !0), s(x), o) try {
                return a(c, h, x);
              } catch {
              }
              if ("get" in x || "set" in x) throw TypeError("Accessors not supported");
              return "value" in x && (c[h] = x.value), c;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-get-own-property-descriptor.js": (
          /*!******************************************************************************!*\
            !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
            \******************************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/descriptors */
              "./node_modules/core-js/internals/descriptors.js"
            ), o = e(
              /*! ../internals/object-property-is-enumerable */
              "./node_modules/core-js/internals/object-property-is-enumerable.js"
            ), s = e(
              /*! ../internals/create-property-descriptor */
              "./node_modules/core-js/internals/create-property-descriptor.js"
            ), l = e(
              /*! ../internals/to-indexed-object */
              "./node_modules/core-js/internals/to-indexed-object.js"
            ), a = e(
              /*! ../internals/to-primitive */
              "./node_modules/core-js/internals/to-primitive.js"
            ), d = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), c = e(
              /*! ../internals/ie8-dom-define */
              "./node_modules/core-js/internals/ie8-dom-define.js"
            ), h = Object.getOwnPropertyDescriptor;
            i.f = r ? h : function(u, y) {
              if (u = l(u), y = a(y, !0), c) try {
                return h(u, y);
              } catch {
              }
              if (d(u, y)) return s(!o.f.call(u, y), u[y]);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-get-own-property-names.js": (
          /*!*************************************************************************!*\
            !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
            \*************************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/object-keys-internal */
              "./node_modules/core-js/internals/object-keys-internal.js"
            ), o = e(
              /*! ../internals/enum-bug-keys */
              "./node_modules/core-js/internals/enum-bug-keys.js"
            ), s = o.concat("length", "prototype");
            i.f = Object.getOwnPropertyNames || function(a) {
              return r(a, s);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-get-own-property-symbols.js": (
          /*!***************************************************************************!*\
            !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
            \***************************************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            i.f = Object.getOwnPropertySymbols;
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-get-prototype-of.js": (
          /*!*******************************************************************!*\
            !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
            \*******************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), o = e(
              /*! ../internals/to-object */
              "./node_modules/core-js/internals/to-object.js"
            ), s = e(
              /*! ../internals/shared-key */
              "./node_modules/core-js/internals/shared-key.js"
            ), l = e(
              /*! ../internals/correct-prototype-getter */
              "./node_modules/core-js/internals/correct-prototype-getter.js"
            ), a = s("IE_PROTO"), d = Object.prototype;
            t.exports = l ? Object.getPrototypeOf : function(c) {
              return c = o(c), r(c, a) ? c[a] : typeof c.constructor == "function" && c instanceof c.constructor ? c.constructor.prototype : c instanceof Object ? d : null;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-keys-internal.js": (
          /*!****************************************************************!*\
            !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
            \****************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), o = e(
              /*! ../internals/to-indexed-object */
              "./node_modules/core-js/internals/to-indexed-object.js"
            ), s = e(
              /*! ../internals/array-includes */
              "./node_modules/core-js/internals/array-includes.js"
            ), l = e(
              /*! ../internals/hidden-keys */
              "./node_modules/core-js/internals/hidden-keys.js"
            ), a = s(!1);
            t.exports = function(d, c) {
              var h = o(d), x = 0, u = [], y;
              for (y in h) !r(l, y) && r(h, y) && u.push(y);
              for (; c.length > x; ) r(h, y = c[x++]) && (~a(u, y) || u.push(y));
              return u;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-keys.js": (
          /*!*******************************************************!*\
            !*** ./node_modules/core-js/internals/object-keys.js ***!
            \*******************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/object-keys-internal */
              "./node_modules/core-js/internals/object-keys-internal.js"
            ), o = e(
              /*! ../internals/enum-bug-keys */
              "./node_modules/core-js/internals/enum-bug-keys.js"
            );
            t.exports = Object.keys || function(l) {
              return r(l, o);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-property-is-enumerable.js": (
          /*!*************************************************************************!*\
            !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
            \*************************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, s = o && !r.call({ 1: 2 }, 1);
            i.f = s ? function(a) {
              var d = o(this, a);
              return !!d && d.enumerable;
            } : r;
          }
        ),
        /***/
        "./node_modules/core-js/internals/object-set-prototype-of.js": (
          /*!*******************************************************************!*\
            !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
            \*******************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/validate-set-prototype-of-arguments */
              "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js"
            );
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
              var o = !1, s = {}, l;
              try {
                l = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, l.call(s, []), o = s instanceof Array;
              } catch {
              }
              return function(d, c) {
                return r(d, c), o ? l.call(d, c) : d.__proto__ = c, d;
              };
            }() : void 0);
          }
        ),
        /***/
        "./node_modules/core-js/internals/own-keys.js": (
          /*!****************************************************!*\
            !*** ./node_modules/core-js/internals/own-keys.js ***!
            \****************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/object-get-own-property-names */
              "./node_modules/core-js/internals/object-get-own-property-names.js"
            ), s = e(
              /*! ../internals/object-get-own-property-symbols */
              "./node_modules/core-js/internals/object-get-own-property-symbols.js"
            ), l = e(
              /*! ../internals/an-object */
              "./node_modules/core-js/internals/an-object.js"
            ), a = r.Reflect;
            t.exports = a && a.ownKeys || function(c) {
              var h = o.f(l(c)), x = s.f;
              return x ? h.concat(x(c)) : h;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/path.js": (
          /*!************************************************!*\
            !*** ./node_modules/core-js/internals/path.js ***!
            \************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            t.exports = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            );
          }
        ),
        /***/
        "./node_modules/core-js/internals/redefine.js": (
          /*!****************************************************!*\
            !*** ./node_modules/core-js/internals/redefine.js ***!
            \****************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/shared */
              "./node_modules/core-js/internals/shared.js"
            ), s = e(
              /*! ../internals/hide */
              "./node_modules/core-js/internals/hide.js"
            ), l = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), a = e(
              /*! ../internals/set-global */
              "./node_modules/core-js/internals/set-global.js"
            ), d = e(
              /*! ../internals/function-to-string */
              "./node_modules/core-js/internals/function-to-string.js"
            ), c = e(
              /*! ../internals/internal-state */
              "./node_modules/core-js/internals/internal-state.js"
            ), h = c.get, x = c.enforce, u = String(d).split("toString");
            o("inspectSource", function(y) {
              return d.call(y);
            }), (t.exports = function(y, v, m, f) {
              var g = f ? !!f.unsafe : !1, j = f ? !!f.enumerable : !1, M = f ? !!f.noTargetGet : !1;
              if (typeof m == "function" && (typeof v == "string" && !l(m, "name") && s(m, "name", v), x(m).source = u.join(typeof v == "string" ? v : "")), y === r) {
                j ? y[v] = m : a(v, m);
                return;
              } else g ? !M && y[v] && (j = !0) : delete y[v];
              j ? y[v] = m : s(y, v, m);
            })(Function.prototype, "toString", function() {
              return typeof this == "function" && h(this).source || d.call(this);
            });
          }
        ),
        /***/
        "./node_modules/core-js/internals/require-object-coercible.js": (
          /*!********************************************************************!*\
            !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
            \********************************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            t.exports = function(e) {
              if (e == null) throw TypeError("Can't call method on " + e);
              return e;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/set-global.js": (
          /*!******************************************************!*\
            !*** ./node_modules/core-js/internals/set-global.js ***!
            \******************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/hide */
              "./node_modules/core-js/internals/hide.js"
            );
            t.exports = function(s, l) {
              try {
                o(r, s, l);
              } catch {
                r[s] = l;
              }
              return l;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/set-to-string-tag.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
            \*************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/object-define-property */
              "./node_modules/core-js/internals/object-define-property.js"
            ).f, o = e(
              /*! ../internals/has */
              "./node_modules/core-js/internals/has.js"
            ), s = e(
              /*! ../internals/well-known-symbol */
              "./node_modules/core-js/internals/well-known-symbol.js"
            ), l = s("toStringTag");
            t.exports = function(a, d, c) {
              a && !o(a = c ? a : a.prototype, l) && r(a, l, { configurable: !0, value: d });
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/shared-key.js": (
          /*!******************************************************!*\
            !*** ./node_modules/core-js/internals/shared-key.js ***!
            \******************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/shared */
              "./node_modules/core-js/internals/shared.js"
            ), o = e(
              /*! ../internals/uid */
              "./node_modules/core-js/internals/uid.js"
            ), s = r("keys");
            t.exports = function(l) {
              return s[l] || (s[l] = o(l));
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/shared.js": (
          /*!**************************************************!*\
            !*** ./node_modules/core-js/internals/shared.js ***!
            \**************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/set-global */
              "./node_modules/core-js/internals/set-global.js"
            ), s = e(
              /*! ../internals/is-pure */
              "./node_modules/core-js/internals/is-pure.js"
            ), l = "__core-js_shared__", a = r[l] || o(l, {});
            (t.exports = function(d, c) {
              return a[d] || (a[d] = c !== void 0 ? c : {});
            })("versions", []).push({
              version: "3.1.3",
              mode: s ? "pure" : "global",
              copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            });
          }
        ),
        /***/
        "./node_modules/core-js/internals/string-at.js": (
          /*!*****************************************************!*\
            !*** ./node_modules/core-js/internals/string-at.js ***!
            \*****************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/to-integer */
              "./node_modules/core-js/internals/to-integer.js"
            ), o = e(
              /*! ../internals/require-object-coercible */
              "./node_modules/core-js/internals/require-object-coercible.js"
            );
            t.exports = function(s, l, a) {
              var d = String(o(s)), c = r(l), h = d.length, x, u;
              return c < 0 || c >= h ? a ? "" : void 0 : (x = d.charCodeAt(c), x < 55296 || x > 56319 || c + 1 === h || (u = d.charCodeAt(c + 1)) < 56320 || u > 57343 ? a ? d.charAt(c) : x : a ? d.slice(c, c + 2) : (x - 55296 << 10) + (u - 56320) + 65536);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/to-absolute-index.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
            \*************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/to-integer */
              "./node_modules/core-js/internals/to-integer.js"
            ), o = Math.max, s = Math.min;
            t.exports = function(l, a) {
              var d = r(l);
              return d < 0 ? o(d + a, 0) : s(d, a);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/to-indexed-object.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
            \*************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/indexed-object */
              "./node_modules/core-js/internals/indexed-object.js"
            ), o = e(
              /*! ../internals/require-object-coercible */
              "./node_modules/core-js/internals/require-object-coercible.js"
            );
            t.exports = function(s) {
              return r(o(s));
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/to-integer.js": (
          /*!******************************************************!*\
            !*** ./node_modules/core-js/internals/to-integer.js ***!
            \******************************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            var e = Math.ceil, r = Math.floor;
            t.exports = function(o) {
              return isNaN(o = +o) ? 0 : (o > 0 ? r : e)(o);
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/to-length.js": (
          /*!*****************************************************!*\
            !*** ./node_modules/core-js/internals/to-length.js ***!
            \*****************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/to-integer */
              "./node_modules/core-js/internals/to-integer.js"
            ), o = Math.min;
            t.exports = function(s) {
              return s > 0 ? o(r(s), 9007199254740991) : 0;
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/to-object.js": (
          /*!*****************************************************!*\
            !*** ./node_modules/core-js/internals/to-object.js ***!
            \*****************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/require-object-coercible */
              "./node_modules/core-js/internals/require-object-coercible.js"
            );
            t.exports = function(o) {
              return Object(r(o));
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/to-primitive.js": (
          /*!********************************************************!*\
            !*** ./node_modules/core-js/internals/to-primitive.js ***!
            \********************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/is-object */
              "./node_modules/core-js/internals/is-object.js"
            );
            t.exports = function(o, s) {
              if (!r(o)) return o;
              var l, a;
              if (s && typeof (l = o.toString) == "function" && !r(a = l.call(o)) || typeof (l = o.valueOf) == "function" && !r(a = l.call(o)) || !s && typeof (l = o.toString) == "function" && !r(a = l.call(o))) return a;
              throw TypeError("Can't convert object to primitive value");
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/uid.js": (
          /*!***********************************************!*\
            !*** ./node_modules/core-js/internals/uid.js ***!
            \***********************************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            var e = 0, r = Math.random();
            t.exports = function(o) {
              return "Symbol(".concat(o === void 0 ? "" : o, ")_", (++e + r).toString(36));
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": (
          /*!*******************************************************************************!*\
            !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
            \*******************************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/is-object */
              "./node_modules/core-js/internals/is-object.js"
            ), o = e(
              /*! ../internals/an-object */
              "./node_modules/core-js/internals/an-object.js"
            );
            t.exports = function(s, l) {
              if (o(s), !r(l) && l !== null)
                throw TypeError("Can't set " + String(l) + " as a prototype");
            };
          }
        ),
        /***/
        "./node_modules/core-js/internals/well-known-symbol.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
            \*************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/global */
              "./node_modules/core-js/internals/global.js"
            ), o = e(
              /*! ../internals/shared */
              "./node_modules/core-js/internals/shared.js"
            ), s = e(
              /*! ../internals/uid */
              "./node_modules/core-js/internals/uid.js"
            ), l = e(
              /*! ../internals/native-symbol */
              "./node_modules/core-js/internals/native-symbol.js"
            ), a = r.Symbol, d = o("wks");
            t.exports = function(c) {
              return d[c] || (d[c] = l && a[c] || (l ? a : s)("Symbol." + c));
            };
          }
        ),
        /***/
        "./node_modules/core-js/modules/es.array.from.js": (
          /*!*******************************************************!*\
            !*** ./node_modules/core-js/modules/es.array.from.js ***!
            \*******************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/export */
              "./node_modules/core-js/internals/export.js"
            ), o = e(
              /*! ../internals/array-from */
              "./node_modules/core-js/internals/array-from.js"
            ), s = e(
              /*! ../internals/check-correctness-of-iteration */
              "./node_modules/core-js/internals/check-correctness-of-iteration.js"
            ), l = !s(function(a) {
              Array.from(a);
            });
            r({ target: "Array", stat: !0, forced: l }, {
              from: o
            });
          }
        ),
        /***/
        "./node_modules/core-js/modules/es.string.iterator.js": (
          /*!************************************************************!*\
            !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
            \************************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ../internals/string-at */
              "./node_modules/core-js/internals/string-at.js"
            ), o = e(
              /*! ../internals/internal-state */
              "./node_modules/core-js/internals/internal-state.js"
            ), s = e(
              /*! ../internals/define-iterator */
              "./node_modules/core-js/internals/define-iterator.js"
            ), l = "String Iterator", a = o.set, d = o.getterFor(l);
            s(String, "String", function(c) {
              a(this, {
                type: l,
                string: String(c),
                index: 0
              });
            }, function() {
              var h = d(this), x = h.string, u = h.index, y;
              return u >= x.length ? { value: void 0, done: !0 } : (y = r(x, u, !0), h.index += y.length, { value: y, done: !1 });
            });
          }
        ),
        /***/
        "./node_modules/webpack/buildin/global.js": (
          /*!***********************************!*\
            !*** (webpack)/buildin/global.js ***!
            \***********************************/
          /*! no static exports found */
          /***/
          function(t, i) {
            var e;
            e = /* @__PURE__ */ function() {
              return this;
            }();
            try {
              e = e || Function("return this")() || (0, eval)("this");
            } catch {
              typeof window == "object" && (e = window);
            }
            t.exports = e;
          }
        ),
        /***/
        "./src/default-attrs.json": (
          /*!********************************!*\
            !*** ./src/default-attrs.json ***!
            \********************************/
          /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
          /***/
          function(t) {
            t.exports = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
          }
        ),
        /***/
        "./src/icon.js": (
          /*!*********************!*\
            !*** ./src/icon.js ***!
            \*********************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            Object.defineProperty(i, "__esModule", {
              value: !0
            });
            var r = Object.assign || function(y) {
              for (var v = 1; v < arguments.length; v++) {
                var m = arguments[v];
                for (var f in m)
                  Object.prototype.hasOwnProperty.call(m, f) && (y[f] = m[f]);
              }
              return y;
            }, o = /* @__PURE__ */ function() {
              function y(v, m) {
                for (var f = 0; f < m.length; f++) {
                  var g = m[f];
                  g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(v, g.key, g);
                }
              }
              return function(v, m, f) {
                return m && y(v.prototype, m), f && y(v, f), v;
              };
            }(), s = e(
              /*! classnames/dedupe */
              "./node_modules/classnames/dedupe.js"
            ), l = c(s), a = e(
              /*! ./default-attrs.json */
              "./src/default-attrs.json"
            ), d = c(a);
            function c(y) {
              return y && y.__esModule ? y : { default: y };
            }
            function h(y, v) {
              if (!(y instanceof v))
                throw new TypeError("Cannot call a class as a function");
            }
            var x = function() {
              function y(v, m) {
                var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                h(this, y), this.name = v, this.contents = m, this.tags = f, this.attrs = r({}, d.default, { class: "feather feather-" + v });
              }
              return o(y, [{
                key: "toSvg",
                value: function() {
                  var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = r({}, this.attrs, m, { class: (0, l.default)(this.attrs.class, m.class) });
                  return "<svg " + u(f) + ">" + this.contents + "</svg>";
                }
                /**
                 * Return string representation of an `Icon`.
                 *
                 * Added for backward compatibility. If old code expects `feather.icons.<name>`
                 * to be a string, `toString()` will get implicitly called.
                 *
                 * @returns {string}
                 */
              }, {
                key: "toString",
                value: function() {
                  return this.contents;
                }
              }]), y;
            }();
            function u(y) {
              return Object.keys(y).map(function(v) {
                return v + '="' + y[v] + '"';
              }).join(" ");
            }
            i.default = x;
          }
        ),
        /***/
        "./src/icons.js": (
          /*!**********************!*\
            !*** ./src/icons.js ***!
            \**********************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            Object.defineProperty(i, "__esModule", {
              value: !0
            });
            var r = e(
              /*! ./icon */
              "./src/icon.js"
            ), o = c(r), s = e(
              /*! ../dist/icons.json */
              "./dist/icons.json"
            ), l = c(s), a = e(
              /*! ./tags.json */
              "./src/tags.json"
            ), d = c(a);
            function c(h) {
              return h && h.__esModule ? h : { default: h };
            }
            i.default = Object.keys(l.default).map(function(h) {
              return new o.default(h, l.default[h], d.default[h]);
            }).reduce(function(h, x) {
              return h[x.name] = x, h;
            }, {});
          }
        ),
        /***/
        "./src/index.js": (
          /*!**********************!*\
            !*** ./src/index.js ***!
            \**********************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            var r = e(
              /*! ./icons */
              "./src/icons.js"
            ), o = c(r), s = e(
              /*! ./to-svg */
              "./src/to-svg.js"
            ), l = c(s), a = e(
              /*! ./replace */
              "./src/replace.js"
            ), d = c(a);
            function c(h) {
              return h && h.__esModule ? h : { default: h };
            }
            t.exports = { icons: o.default, toSvg: l.default, replace: d.default };
          }
        ),
        /***/
        "./src/replace.js": (
          /*!************************!*\
            !*** ./src/replace.js ***!
            \************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            Object.defineProperty(i, "__esModule", {
              value: !0
            });
            var r = Object.assign || function(u) {
              for (var y = 1; y < arguments.length; y++) {
                var v = arguments[y];
                for (var m in v)
                  Object.prototype.hasOwnProperty.call(v, m) && (u[m] = v[m]);
              }
              return u;
            }, o = e(
              /*! classnames/dedupe */
              "./node_modules/classnames/dedupe.js"
            ), s = d(o), l = e(
              /*! ./icons */
              "./src/icons.js"
            ), a = d(l);
            function d(u) {
              return u && u.__esModule ? u : { default: u };
            }
            function c() {
              var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              if (typeof document > "u")
                throw new Error("`feather.replace()` only works in a browser environment.");
              var y = document.querySelectorAll("[data-feather]");
              Array.from(y).forEach(function(v) {
                return h(v, u);
              });
            }
            function h(u) {
              var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = x(u), m = v["data-feather"];
              if (delete v["data-feather"], a.default[m] === void 0) {
                console.warn("feather: '" + m + "' is not a valid icon");
                return;
              }
              var f = a.default[m].toSvg(r({}, y, v, { class: (0, s.default)(y.class, v.class) })), g = new DOMParser().parseFromString(f, "image/svg+xml"), j = g.querySelector("svg");
              u.parentNode.replaceChild(j, u);
            }
            function x(u) {
              return Array.from(u.attributes).reduce(function(y, v) {
                return y[v.name] = v.value, y;
              }, {});
            }
            i.default = c;
          }
        ),
        /***/
        "./src/tags.json": (
          /*!***********************!*\
            !*** ./src/tags.json ***!
            \***********************/
          /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
          /***/
          function(t) {
            t.exports = { activity: ["pulse", "health", "action", "motion"], airplay: ["stream", "cast", "mirroring"], "alert-circle": ["warning", "alert", "danger"], "alert-octagon": ["warning", "alert", "danger"], "alert-triangle": ["warning", "alert", "danger"], "align-center": ["text alignment", "center"], "align-justify": ["text alignment", "justified"], "align-left": ["text alignment", "left"], "align-right": ["text alignment", "right"], anchor: [], archive: ["index", "box"], "at-sign": ["mention", "at", "email", "message"], award: ["achievement", "badge"], aperture: ["camera", "photo"], "bar-chart": ["statistics", "diagram", "graph"], "bar-chart-2": ["statistics", "diagram", "graph"], battery: ["power", "electricity"], "battery-charging": ["power", "electricity"], bell: ["alarm", "notification", "sound"], "bell-off": ["alarm", "notification", "silent"], bluetooth: ["wireless"], "book-open": ["read", "library"], book: ["read", "dictionary", "booklet", "magazine", "library"], bookmark: ["read", "clip", "marker", "tag"], box: ["cube"], briefcase: ["work", "bag", "baggage", "folder"], calendar: ["date"], camera: ["photo"], cast: ["chromecast", "airplay"], "chevron-down": ["expand"], "chevron-up": ["collapse"], circle: ["off", "zero", "record"], clipboard: ["copy"], clock: ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], cloud: ["weather"], codepen: ["logo"], codesandbox: ["logo"], code: ["source", "programming"], coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], columns: ["layout"], command: ["keyboard", "cmd", "terminal", "prompt"], compass: ["navigation", "safari", "travel", "direction"], copy: ["clone", "duplicate"], "corner-down-left": ["arrow", "return"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], cpu: ["processor", "technology"], "credit-card": ["purchase", "payment", "cc"], crop: ["photo", "image"], crosshair: ["aim", "target"], database: ["storage", "memory"], delete: ["remove"], disc: ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], droplet: ["water"], edit: ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], eye: ["view", "watch"], "eye-off": ["view", "watch", "hide", "hidden"], "external-link": ["outbound"], facebook: ["logo", "social"], "fast-forward": ["music"], figma: ["logo", "design", "tool"], "file-minus": ["delete", "remove", "erase"], "file-plus": ["add", "create", "new"], "file-text": ["data", "txt", "pdf"], film: ["movie", "video"], filter: ["funnel", "hopper"], flag: ["report"], "folder-minus": ["directory"], "folder-plus": ["directory"], folder: ["directory"], framer: ["logo", "design", "tool"], frown: ["emoji", "face", "bad", "sad", "emotion"], gift: ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], github: ["logo", "version control"], gitlab: ["logo", "version control"], globe: ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server", "memory", "data"], hash: ["hashtag", "number", "pound"], headphones: ["music", "audio", "sound"], heart: ["like", "love", "emotion"], "help-circle": ["question mark"], hexagon: ["shape", "node.js", "logo"], home: ["house", "living"], image: ["picture"], inbox: ["email"], instagram: ["logo", "camera"], key: ["password", "login", "authentication", "secure"], layers: ["stack"], layout: ["window", "webpage"], "life-buoy": ["help", "life ring", "support"], link: ["chain", "url"], "link-2": ["chain", "url"], linkedin: ["logo", "social media"], list: ["options"], lock: ["security", "password", "secure"], "log-in": ["sign in", "arrow", "enter"], "log-out": ["sign out", "arrow", "exit"], mail: ["email", "message"], "map-pin": ["location", "navigation", "travel", "marker"], map: ["location", "navigation", "travel"], maximize: ["fullscreen"], "maximize-2": ["fullscreen", "arrows", "expand"], meh: ["emoji", "face", "neutral", "emotion"], menu: ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record", "sound", "mute"], mic: ["record", "sound", "listen"], minimize: ["exit fullscreen", "close"], "minimize-2": ["exit fullscreen", "arrows", "close"], minus: ["subtract"], monitor: ["tv", "screen", "display"], moon: ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], move: ["arrows"], music: ["note"], navigation: ["location", "travel"], "navigation-2": ["location", "travel"], octagon: ["stop"], package: ["box", "container"], paperclip: ["attachment"], pause: ["music", "stop"], "pause-circle": ["music", "audio", "stop"], "pen-tool": ["vector", "drawing"], percent: ["discount"], "phone-call": ["ring"], "phone-forwarded": ["call"], "phone-incoming": ["call"], "phone-missed": ["call"], "phone-off": ["call", "mute"], "phone-outgoing": ["call"], phone: ["call"], play: ["music", "start"], "pie-chart": ["statistics", "diagram"], "play-circle": ["music", "start"], plus: ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], pocket: ["logo", "save"], power: ["on", "off"], printer: ["fax", "office", "device"], radio: ["signal"], "refresh-cw": ["synchronise", "arrows"], "refresh-ccw": ["arrows"], repeat: ["loop", "arrows"], rewind: ["music"], "rotate-ccw": ["arrow"], "rotate-cw": ["arrow"], rss: ["feed", "subscribe"], save: ["floppy disk"], scissors: ["cut"], search: ["find", "magnifier", "magnifying glass"], send: ["message", "mail", "email", "paper airplane", "paper aeroplane"], settings: ["cog", "edit", "gear", "preferences"], "share-2": ["network", "connections"], shield: ["security", "secure"], "shield-off": ["security", "insecure"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], shuffle: ["music"], "skip-back": ["music"], "skip-forward": ["music"], slack: ["logo"], slash: ["ban", "no"], sliders: ["settings", "controls"], smartphone: ["cellphone", "device"], smile: ["emoji", "face", "happy", "good", "emotion"], speaker: ["audio", "music"], star: ["bookmark", "favorite", "like"], "stop-circle": ["media", "music"], sun: ["brightness", "weather", "light"], sunrise: ["weather", "time", "morning", "day"], sunset: ["weather", "time", "evening", "night"], tablet: ["device"], tag: ["label"], target: ["logo", "bullseye"], terminal: ["code", "command line", "prompt"], thermometer: ["temperature", "celsius", "fahrenheit", "weather"], "thumbs-down": ["dislike", "bad", "emotion"], "thumbs-up": ["like", "good", "emotion"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], tool: ["settings", "spanner"], trash: ["garbage", "delete", "remove", "bin"], "trash-2": ["garbage", "delete", "remove", "bin"], triangle: ["delta"], truck: ["delivery", "van", "shipping", "transport", "lorry"], tv: ["television", "stream"], twitch: ["logo"], twitter: ["logo", "social"], type: ["text"], umbrella: ["rain", "weather"], unlock: ["security"], "user-check": ["followed", "subscribed"], "user-minus": ["delete", "remove", "unfollow", "unsubscribe"], "user-plus": ["new", "add", "create", "follow", "subscribe"], "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"], user: ["person", "account"], users: ["group"], "video-off": ["camera", "movie", "film"], video: ["camera", "movie", "film"], voicemail: ["phone"], volume: ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], watch: ["clock", "time"], "wifi-off": ["disabled"], wifi: ["connection", "signal", "wireless"], wind: ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"], "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"], "x-square": ["cancel", "close", "delete", "remove", "times", "clear"], x: ["cancel", "close", "delete", "remove", "times", "clear"], youtube: ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], zap: ["flash", "camera", "lightning"], "zoom-in": ["magnifying glass"], "zoom-out": ["magnifying glass"] };
          }
        ),
        /***/
        "./src/to-svg.js": (
          /*!***********************!*\
            !*** ./src/to-svg.js ***!
            \***********************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            Object.defineProperty(i, "__esModule", {
              value: !0
            });
            var r = e(
              /*! ./icons */
              "./src/icons.js"
            ), o = s(r);
            function s(a) {
              return a && a.__esModule ? a : { default: a };
            }
            function l(a) {
              var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !a)
                throw new Error("The required `key` (icon name) parameter is missing.");
              if (!o.default[a])
                throw new Error("No icon matching '" + a + "'. See the complete list of icons at https://feathericons.com");
              return o.default[a].toSvg(d);
            }
            i.default = l;
          }
        ),
        /***/
        0: (
          /*!**************************************************!*\
            !*** multi core-js/es/array/from ./src/index.js ***!
            \**************************************************/
          /*! no static exports found */
          /***/
          function(t, i, e) {
            e(
              /*! core-js/es/array/from */
              "./node_modules/core-js/es/array/from.js"
            ), t.exports = e(
              /*! /home/runner/work/feather/feather/src/index.js */
              "./src/index.js"
            );
          }
        )
        /******/
      })
    );
  });
})(Je);
var Ot = Je.exports;
const Et = ve`
svg {
    display: block;
  }
`;
var Pt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, te = (p, n, t, i) => {
  for (var e = i > 1 ? void 0 : i ? zt(n, t) : n, r = p.length - 1, o; r >= 0; r--)
    (o = p[r]) && (e = (i ? o(n, t, e) : o(e)) || e);
  return i && e && Pt(n, t, e), e;
};
let k = class extends K {
  constructor() {
    super(...arguments), this.icon = "", this.stroke = 2, this.size = 24, this.fitHeight = !1;
  }
  getHeight() {
    return this.fitHeight ? "100%" : this.size;
  }
  render() {
    return De`${$t(Ot.icons[this.icon].toSvg({ "stroke-width": this.stroke, height: this.getHeight(), width: "auto", color: "currentColor" }))}`;
  }
};
k.styles = [K.styles, Et];
te([
  S({ reflect: !0 })
], k.prototype, "icon", 2);
te([
  S({ type: Number, reflect: !0 })
], k.prototype, "stroke", 2);
te([
  S({ type: Number, reflect: !0 })
], k.prototype, "size", 2);
te([
  S({ type: Boolean })
], k.prototype, "fitHeight", 2);
k = te([
  Ye("q-icon")
], k);
export {
  E as QButton,
  k as QIcon
};
