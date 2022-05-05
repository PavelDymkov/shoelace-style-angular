import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-input,
        sl-textarea,
    `,
})
export class InputDirective {
    @Output("sl-input")
    input = new EventEmitter<CustomEvent<{}>>();
}
