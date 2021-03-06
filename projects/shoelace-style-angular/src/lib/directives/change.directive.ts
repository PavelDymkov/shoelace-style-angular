import { Directive, OnInit, ElementRef, EventEmitter } from "@angular/core";
import {
    SlCheckbox,
    SlColorPicker,
    SlForm,
    SlInput,
    SlRadio,
    SlRange,
    SlRating,
    SlSelect,
    SlSwitch,
    SlTextarea,
} from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

type ElementControl = HTMLInputElement &
    (
        | SlCheckbox
        | SlColorPicker
        | SlForm
        | SlInput
        | SlRadio
        | SlRange
        | SlRating
        | SlSelect
        | SlSwitch
        | SlTextarea
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
export class ChangeDirective extends SubscribableDirective implements OnInit {
    readonly change = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<ElementControl>) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions = [
            observe(this.elementRef.nativeElement, "sl-change").subscribe(
                event => this.change.emit(event),
            ),
        ];
    }
}
