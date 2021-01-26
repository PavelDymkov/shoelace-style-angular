import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
        sl-tooltip,
    `,
    outputs: ["initialFocus", "overlayDismiss"],
})
export class ShoelaceStyleShowHideDirective
    extends SubscribableDirective
    implements OnInit {
    initialFocus = new EventEmitter<HTMLElement>();
    overlayDismiss = new EventEmitter<HTMLElement>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            fromEvent(element, "sl-initial-focus").subscribe(() => {
                this.initialFocus.emit(element);
            }),
            fromEvent(element, "sl-overlay-dismiss").subscribe(() => {
                this.overlayDismiss.emit(element);
            }),
        ];
    }
}
