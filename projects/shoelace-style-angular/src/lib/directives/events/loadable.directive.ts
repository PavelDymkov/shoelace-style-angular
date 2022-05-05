import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-animated-image,
        sl-icon,
        sl-include,
    `,
})
export class LoadableDirective {
    @Output("sl-load")
    load = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-error")
    error = new EventEmitter<CustomEvent<{}>>();
}
