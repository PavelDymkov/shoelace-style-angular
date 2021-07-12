import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SlResizeObserver } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-resize-observer,
    `,
    outputs: ["resize"],
})
export class ResizeDirective extends SubscribableDirective implements OnInit {
    readonly resize = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<SlResizeObserver>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe(element, "sl-resize").subscribe(event =>
                this.resize.emit(event),
            ),
        ];
    }
}
