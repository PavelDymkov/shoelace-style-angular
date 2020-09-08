import { SubscribableDirective } from "ngx-subscribable";

import { ISlControlElement } from "../interfaces/shoelace-style-elements";

export type SlControlElementValue = string | boolean;

export abstract class ShoelaceStyleControlBase extends SubscribableDirective {
    abstract readonly element: ISlControlElement;

    get tagName(): string {
        return this.element.tagName.toLowerCase();
    }

    get changeEventName(): string {
        switch (this.tagName) {
            case "sl-input":
            case "sl-textarea":
                return "slInput";
            default:
                return "slChange";
        }
    }

    createValueGetter(): () => SlControlElementValue {
        switch (this.tagName) {
            case "sl-checkbox":
            case "sl-radio":
            case "sl-switch":
                return () => {
                    const { checked } = this.element;

                    const value = this.element.getAttribute("value");

                    if (value) {
                        return checked ? value : "";
                    }

                    return checked;
                };
            default:
                return () => this.element.value;
        }
    }

    createValueSetter(): (value: SlControlElementValue) => void {
        switch (this.tagName) {
            case "sl-checkbox":
            case "sl-radio":
            case "sl-switch":
                return (value: SlControlElementValue) => {
                    this.element.checked = value ? true : false;
                };
            default:
                return (value: string) => {
                    this.element.value = value;
                };
        }
    }
}

export class ShoelaceStyleControl extends ShoelaceStyleControlBase {
    constructor(readonly element: ISlControlElement) {
        super();
    }
}
