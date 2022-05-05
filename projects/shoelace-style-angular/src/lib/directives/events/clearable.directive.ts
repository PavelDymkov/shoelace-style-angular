import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-input,
        sl-select,
    `,
})
export class ClearableDirective {
    @Output("sl-clear")
    clear = new EventEmitter<CustomEvent<{}>>();
}
