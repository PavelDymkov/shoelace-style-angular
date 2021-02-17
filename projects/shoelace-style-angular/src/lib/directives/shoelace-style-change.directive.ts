import { Directive, OnInit, ElementRef, EventEmitter } from "@angular/core";
import { Components } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

type ShoelaceStyleControlElement = HTMLInputElement &
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

@Directive({
    selector: `
        sl-checkbox,
        sl-color-picker,
        sl-form,
        sl-input,
        sl-radio,
        sl-range,
        sl-rating,
        sl-select,
        sl-switch,
        sl-textarea,
    `,
    outputs: ["change"],
})
export class ShoelaceStyleChangeDirective
    extends SubscribableDirective
    implements OnInit {
    readonly change = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<ShoelaceStyleControlElement>) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions = [
            observe(
                this.elementRef.nativeElement,
                "sl-change",
            ).subscribe(event => this.change.emit(event)),
        ];
    }
}
