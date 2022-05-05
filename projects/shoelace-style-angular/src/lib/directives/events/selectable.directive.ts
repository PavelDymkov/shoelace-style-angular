import { Directive, EventEmitter, Output } from "@angular/core";
import { SlMenuItem } from "@shoelace-style/shoelace";

@Directive({
    selector: `
        sl-menu,
    `,
})
export class SelectableDirective {
    @Output("sl-select")
    select = new EventEmitter<CustomEvent<{ item: SlMenuItem }>>();
}
