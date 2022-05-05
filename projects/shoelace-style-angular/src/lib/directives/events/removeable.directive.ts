import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-tag,
    `,
})
export class RemoveableDirective {
    @Output("sl-remove")
    remove = new EventEmitter<CustomEvent<{}>>();
}
