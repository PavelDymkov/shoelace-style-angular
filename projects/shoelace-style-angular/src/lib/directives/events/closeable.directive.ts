import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
        sl-tab,
    `,
})
export class CloseableDirective {
    @Output("sl-request-close")
    change = new EventEmitter<CustomEvent<{}>>();
}
