import { html, css, LitElement, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("q-button")
export class QButton extends LitElement {
        @property()
        size: "small" | "medium" | "large" = "small";
        @property({ type: Boolean })
        primary: boolean = false;
        @property()
        href: string = "";
        @property({ type: Boolean })
        pill: boolean = false

        static styles: CSSResultGroup = [];
        render() {
                if (this.href && this.href != '') {
                        return html`<button class="btn"><slot></slot></button> `;
                } else {
                        return html`<a href = "${this.href}" class = "btn"> <slot></slot></a > `;
                }
        }
}
