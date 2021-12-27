import { Directive, OnInit, ElementRef, Output } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-tab[closable],
    `,
})
export class ClosableDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly close = event();

    constructor(private hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-close").subscribe(event =>
                this.close.emit(event),
            ),
        ];
    }
}
