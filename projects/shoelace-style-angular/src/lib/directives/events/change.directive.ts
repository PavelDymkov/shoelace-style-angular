import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-checkbox,
        sl-color-picker,
        sl-image-comparer,
        sl-input,
        sl-radio,
        sl-radio-button,
        sl-range,
        sl-rating,
        sl-select,
        sl-switch,
        sl-textarea,
    `,
})
export class ChangeDirective {
    @Output("sl-change")
    change = new EventEmitter<CustomEvent<{}>>();
}
