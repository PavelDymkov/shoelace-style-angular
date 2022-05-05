import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-animation,
    `,
})
export class AnimationDirective {
    @Output("sl-cancel")
    cancel = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-finish")
    finish = new EventEmitter<CustomEvent<{}>>();

    @Output("sl-start")
    start = new EventEmitter<CustomEvent<{}>>();
}
