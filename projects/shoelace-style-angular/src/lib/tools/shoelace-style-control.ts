import { SubscribableDirective } from "ngx-subscribable";
import { Components } from "@shoelace-style/shoelace";

export type ShoelaceStyleControlElement = HTMLElement &
    (
        | Components.SlCheckbox
        | Components.SlColorPicker
        | Components.SlForm
        | Components.SlInput
        | Components.SlRadio
        | Components.SlRange
        | Components.SlRating
        | Components.SlSelect
        | Components.SlSwitch
        | Components.SlTextarea
    );
export type ShoelaceStyleControlElementValue = string | boolean;

export abstract class ShoelaceStyleControlBase extends SubscribableDirective {
    abstract readonly element: ShoelaceStyleControlElement;

    get tagName(): string {
        return this.element.tagName.toLowerCase();
    }

    get changeEventName(): string {
        switch (this.tagName) {
            case "sl-input":
            case "sl-textarea":
                return "sl-input";
            default:
                return "sl-change";
        }
    }

    createValueGetter(): () => ShoelaceStyleControlElementValue {
        switch (this.tagName) {
            case "sl-checkbox":
            case "sl-radio":
            case "sl-switch":
                return () => {
                    const { checked } = this.element as Components.SlCheckbox;

                    const value = this.element.getAttribute("value");

                    if (value) {
                        return checked ? value : "";
                    }

                    return checked;
                };
            default:
                return () => (this.element as Components.SlInput).value;
        }
    }

    createValueSetter(): (value: ShoelaceStyleControlElementValue) => void {
        switch (this.tagName) {
            case "sl-checkbox":
            case "sl-radio":
            case "sl-switch":
                return (value: ShoelaceStyleControlElementValue) => {
                    (this.element as Components.SlCheckbox).checked = value
                        ? true
                        : false;
                };
            default:
                return (value: string) => {
                    (this.element as Components.SlInput).value = value;
                };
        }
    }
}

export class ShoelaceStyleControl extends ShoelaceStyleControlBase {
    constructor(readonly element: ShoelaceStyleControlElement) {
        super();
    }
}
