import { Directive, OnInit, ElementRef, Output } from "@angular/core";
import { SlResizeObserver } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-resize-observer,
    `,
})
export class ResizeDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly resize = event();

    constructor(private hostRef: ElementRef<SlResizeObserver>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-resize").subscribe(event =>
                this.resize.emit(event),
            ),
        ];
    }
}
