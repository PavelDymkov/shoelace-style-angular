import { Directive, OnInit, ElementRef, EventEmitter } from "@angular/core";
import { AbstractControl } from "@angular/forms";

import { Components } from "@shoelace-style/shoelace";

import { SubscribableDirective } from "ngx-subscribable";
import { fromEvent } from "rxjs";

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
export class ShoelaceStyleControlsDirective
    extends SubscribableDirective
    implements OnInit {
    readonly change = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<ShoelaceStyleControlElement>) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions = [
            fromEvent(this.elementRef.nativeElement, "sl-change").subscribe(
                (event: CustomEvent) => {
                    this.change.emit(event);
                },
            ),
        ];
    }
}
