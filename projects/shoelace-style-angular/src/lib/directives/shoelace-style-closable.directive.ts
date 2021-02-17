import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-tab[closable],
    `,
    outputs: ["close"],
})
export class ShoelaceStyleClosableDirective
    extends SubscribableDirective
    implements OnInit {
    readonly close = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe(element, "sl-close").subscribe(event =>
                this.close.emit(event),
            ),
        ];
    }
}
