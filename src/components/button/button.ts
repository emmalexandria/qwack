import { css, LitElement, CSSResultGroup } from "lit";
import { classMap } from 'lit/directives/class-map.js'
import { html, literal } from 'lit/static-html.js';
import { customElement, property } from "lit/decorators.js";
import { QBase } from "../base";
import { QIcon } from "../icon/icon";

import styles from "./button.styles"


@customElement("q-button")
export class QButton extends QBase {
    @property({ reflect: true })
    label: string = "Button";
    @property({ reflect: true })
    size: "small" | "regular" | "large" = "regular";
    @property({ type: Boolean, reflect: true })
    primary: boolean = false;
    @property({ reflect: true })
    href: string = "";
    @property({ reflect: true })
    type: "button" | "submit" = "button";
    @property({ type: Boolean, reflect: true })
    disabled: boolean = false
    @property({ reflect: true })
    suffix: string = ""


    private isLink() {
        return this.href ? true : false
    }

    static styles: CSSResultGroup = [QBase.styles, styles];
    render() {
        const isLink = this.isLink();
        const tag = isLink ? literal`a` : literal`button`;

        return html`
                <${tag}
                class=${classMap({
            "button--base": true,
            "button--default": !this.primary,
            "button--primary": this.primary,
            "button--small": this.size == "small",
            "button--regular": this.size == "regular",
            "button--large": this.size == "large",
            "button--disabled": this.disabled,
        })} href=${isLink && !this.disabled ? this.href : undefined}
            >
                                ${this.label} 
${this.suffix ? html`<span class="button--icon"><q-icon fitHeight icon="${this.suffix}"></span>` : html``}

                </${tag}>
                `
    }
}
