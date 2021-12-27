import { Directive, OnInit, ElementRef, Output } from "@angular/core";
import { SlAnimation } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-animation,
    `,
})
export class AnimationDirective
    extends SubscribableDirective
    implements OnInit
{
    @Output()
    readonly start = event();

    @Output()
    readonly finish = event();

    @Output()
    readonly cancel = event();

    constructor(private hostRef: ElementRef<SlAnimation>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-cancel").subscribe(event =>
                this.cancel.emit(event),
            ),
            observe(host, "sl-finish").subscribe(event =>
                this.finish.emit(event),
            ),
            observe(host, "sl-start").subscribe(event =>
                this.start.emit(event),
            ),
        ];
    }
}
