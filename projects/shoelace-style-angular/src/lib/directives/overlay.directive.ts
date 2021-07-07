import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
    `,
    outputs: ["initialFocus", "requestClose"],
})
export class OverlayDirective extends SubscribableDirective implements OnInit {
    initialFocus = new EventEmitter<CustomEvent>();
    requestClose = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe(element, "sl-initial-focus").subscribe(event =>
                this.initialFocus.emit(event),
            ),
            observe(element, "sl-request-close").subscribe(event =>
                this.requestClose.emit(event),
            ),
        ];
    }
}
