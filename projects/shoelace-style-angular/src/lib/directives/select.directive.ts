import { Directive, OnInit, ElementRef, Output } from "@angular/core";

import { SlMenu, SlMenuItem } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-menu,
    `,
})
export class SelectDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly select = event<{ item: SlMenuItem }>();

    constructor(private hostRef: ElementRef<SlMenu>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-select").subscribe(event =>
                this.select.emit(event),
            ),
        ];
    }
}
