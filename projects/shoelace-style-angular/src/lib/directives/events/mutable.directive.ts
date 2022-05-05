import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-mutation-observer,
    `,
})
export class MutableDirective {
    @Output("sl-mutation")
    mutation = new EventEmitter<
        CustomEvent<{ mutationList: MutationRecord[] }>
    >();
}
