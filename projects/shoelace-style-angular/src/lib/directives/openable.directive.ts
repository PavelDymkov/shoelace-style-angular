import {
    Directive,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
} from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-alert,
        sl-details,
        sl-dialog,
        sl-drawer,
        sl-dropdown,
        sl-tooltip,
    `,
})
export class OpenableDirective extends SubscribableDirective implements OnInit {
    @Output()
    show = new EventEmitter<CustomEvent<{}>>();

    @Output()
    hide = new EventEmitter<CustomEvent<{}>>();

    @Output()
    afterShow = new EventEmitter<CustomEvent<{}>>();

    @Output()
    afterHide = new EventEmitter<CustomEvent<{}>>();

    constructor(private readonly hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-show").subscribe(event => this.show.emit(event)),
            observe(host, "sl-hide").subscribe(event => this.hide.emit(event)),

            observe(host, "sl-after-show").subscribe(event =>
                this.afterShow.emit(event),
            ),
            observe(host, "sl-after-hide").subscribe(event =>
                this.afterHide.emit(event),
            ),
        ];
    }
}

@Directive({
    selector: `
        sl-dialog,
        sl-drawer,
    `,
})
export class OpenableExtendedDirective
    extends SubscribableDirective
    implements OnInit
{
    @Output()
    initialFocus = new EventEmitter<CustomEvent<{}>>();

    @Output()
    requestClose = new EventEmitter<CustomEvent<{}>>();

    constructor(private readonly hostRef: ElementRef<HTMLElement>) {
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
