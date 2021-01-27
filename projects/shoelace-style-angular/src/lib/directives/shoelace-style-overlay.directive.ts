import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

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
            fromEvent(element, "sl-initial-focus").subscribe(
                (event: CustomEvent) => {
                    this.initialFocus.emit(event);
                },
            ),
            fromEvent(element, "sl-overlay-dismiss").subscribe(
                (event: CustomEvent) => {
                    this.overlayDismiss.emit(event);
                },
            ),
        ];
    }
}
