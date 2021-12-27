import { Directive, OnInit, ElementRef, Output } from "@angular/core";
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

import { event } from "../tools/event";
import { observe } from "../tools/observe";

type SlElement =
    | SlCheckbox
    | SlColorPicker
    | SlForm
    | SlInput
    | SlRadio
    | SlRange
    | SlRating
    | SlSelect
    | SlSwitch
    | SlTextarea;

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
})
export class ChangeDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly change = event();

    constructor(private hostRef: ElementRef<SlElement>) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions = [
            observe(this.hostRef.nativeElement, "sl-change").subscribe(event =>
                this.change.emit(event),
            ),
        ];
    }
}
