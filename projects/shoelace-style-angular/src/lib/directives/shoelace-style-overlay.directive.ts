import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
    `,
    outputs: ["initialFocus", "overlayDismiss"],
})
export class ShoelaceStyleOverlayDirective
    extends SubscribableDirective
    implements OnInit {
    initialFocus = new EventEmitter<CustomEvent>();
    overlayDismiss = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe(element, "sl-initial-focus").subscribe(event =>
                this.initialFocus.emit(event),
            ),
            observe(element, "sl-overlay-dismiss").subscribe(event =>
                this.overlayDismiss.emit(event),
            ),
        ];
    }
}
