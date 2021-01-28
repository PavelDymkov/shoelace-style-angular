import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

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
            fromEvent(element, "sl-load").subscribe((event: CustomEvent) => {
                this.load.emit(event);
            }),
            fromEvent(element, "sl-error").subscribe((event: CustomEvent) => {
                this.error.emit(event);
            }),
        ];
    }
}
