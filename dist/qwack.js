import { LitElement as a, html as h } from "lit";
import { property as l, customElement as m } from "lit/decorators.js";
var u = Object.defineProperty, y = Object.getOwnPropertyDescriptor, r = (f, s, p, o) => {
  for (var t = o > 1 ? void 0 : o ? y(s, p) : s, n = f.length - 1, i; n >= 0; n--)
    (i = f[n]) && (t = (o ? i(s, p, t) : i(t)) || t);
  return o && t && u(s, p, t), t;
};
let e = class extends a {
  constructor() {
    super(...arguments), this.size = "small", this.primary = !1, this.href = "", this.pill = !1;
  }
  render() {
    return this.href && this.href != "" ? h`<button class="btn"><slot></slot></button> ` : h`<a href = "${this.href}" class = "btn"> <slot></slot></a > `;
  }
};
e.styles = [];
r([
  l()
], e.prototype, "size", 2);
r([
  l({ type: Boolean })
], e.prototype, "primary", 2);
r([
  l()
], e.prototype, "href", 2);
r([
  l({ type: Boolean })
], e.prototype, "pill", 2);
e = r([
  m("q-button")
], e);
export {
  e as QButton
};
