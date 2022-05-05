import { Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: `
        sl-resize-observer,
    `,
})
export class ResizableDirective {
    @Output("sl-resize")
    resize = new EventEmitter<
        CustomEvent<{ entries: ResizeObserverEntry[] }>
    >();
}
