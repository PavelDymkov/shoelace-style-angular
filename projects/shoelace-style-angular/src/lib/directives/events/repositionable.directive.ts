import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-split-panel,
    `,
})
export class RepositionableDirective {
    @Output("sl-reposition")
    reposition = new EventEmitter<CustomEvent<{}>>();
}
