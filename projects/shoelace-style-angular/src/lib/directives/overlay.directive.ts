import { Directive, OnInit, ElementRef, Output } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
    `,
})
export class OverlayDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly initialFocus = event();

    @Output()
    readonly requestClose = event();

    constructor(private hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-initial-focus").subscribe(event =>
                this.initialFocus.emit(event),
            ),
            observe(host, "sl-request-close").subscribe(event =>
                this.requestClose.emit(event),
            ),
        ];
    }
}
