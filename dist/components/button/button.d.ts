import { CSSResultGroup } from 'lit';
import { QBase } from '../base';
export declare class QButton extends QBase {
    label: string;
    size: "small" | "regular" | "large";
    primary: boolean;
    href: string;
    disabled: boolean;
    private isLink;
    static styles: CSSResultGroup;
    render(): import('lit').TemplateResult;
}
//# sourceMappingURL=button.d.ts.map