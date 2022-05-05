import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-button,
        sl-checkbox,
        sl-input,
        sl-radio,
        sl-radio-button,
        sl-range,
        sl-select,
        sl-switch,
        sl-textarea,
    `,
})
export class FocusableDirective {
    @Output("sl-blur")
    blur = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-focus")
    focus = new EventEmitter<CustomEvent<{}>>();
}

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
    `,
})
export class InitialFocusDirective {
    @Output("sl-initial-focus")
    initialFocus = new EventEmitter<CustomEvent<{}>>();
}
