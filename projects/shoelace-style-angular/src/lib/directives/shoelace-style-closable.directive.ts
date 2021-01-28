import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

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
            fromEvent(element, "sl-close").subscribe((event: CustomEvent) => {
                this.close.emit(event);
            }),
        ];
    }
}
