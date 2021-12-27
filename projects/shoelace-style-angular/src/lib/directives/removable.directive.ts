import { Directive, OnInit, ElementRef, Output } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-tag[removable],
    `,
})
export class RemovableDirective
    extends SubscribableDirective
    implements OnInit
{
    @Output()
    readonly remove = event();

    constructor(private hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-remove").subscribe(event =>
                this.remove.emit(event),
            ),
        ];
    }
}
