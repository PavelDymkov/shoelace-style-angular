import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-icon,
    `,
    outputs: ["load", "error"],
})
export class ShoelaceStyleLoadDirective
    extends SubscribableDirective
    implements OnInit {
    readonly load = new EventEmitter<CustomEvent>();
    readonly error = new EventEmitter<CustomEvent<{ status?: number }>>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe(element, "sl-load").subscribe(event =>
                this.load.emit(event),
            ),
            observe(element, "sl-error").subscribe(event =>
                this.error.emit(event),
            ),
        ];
    }
}
