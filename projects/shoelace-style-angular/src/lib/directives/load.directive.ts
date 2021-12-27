import { Directive, OnInit, ElementRef, Output } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-icon,
        sl-include,
    `,
})
export class LoadDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly load = event();

    @Output()
    readonly error = event<{ status?: number }>();

    constructor(private hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-load").subscribe(event => this.load.emit(event)),
            observe(host, "sl-error").subscribe(event =>
                this.error.emit(event),
            ),
        ];
    }
}
