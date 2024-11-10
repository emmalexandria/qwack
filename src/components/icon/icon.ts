import { CSSResultGroup, LitElement, html } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from "lit/decorators.js";
import { QBase } from "../base";

import * as feather from 'feather-icons';
import styles from "./icon.styles";

@customElement("q-icon")
export class QIcon extends QBase {
  @property({ reflect: true })
  icon: string = "";
  @property({ type: Number, reflect: true })
  stroke: number = 2
  @property({ type: Number, reflect: true })
  size = 24
  @property({ type: Boolean })
  fitHeight = false

  private getHeight() {
    if (this.fitHeight) {
      return "100%"
    }
    else {
      return this.size
    }
  }


  static styles: CSSResultGroup = [QBase.styles, styles]

  render() {
    return html`${unsafeHTML(feather.icons[this.icon].toSvg({ "stroke-width": this.stroke, height: this.getHeight(), width: "auto", color: "currentColor" }))}`
  }

}
