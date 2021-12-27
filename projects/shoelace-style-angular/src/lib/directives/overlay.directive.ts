import {
    Directive,
    OnInit,
    EventEmitter,
    ElementRef,
    Output,
} from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
    `,
})
export class OverlayDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly initialFocus = new EventEmitter<CustomEvent>();

    @Output()
    readonly requestClose = new EventEmitter<CustomEvent>();

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
