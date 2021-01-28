import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

@Directive({
    selector: `
        sl-tag[clearable],
    `,
    outputs: ["clear"],
})
export class ShoelaceStyleClearableDirective
    extends SubscribableDirective
    implements OnInit {
    readonly clear = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            fromEvent(element, "sl-clear").subscribe((event: CustomEvent) => {
                this.clear.emit(event);
            }),
        ];
    }
}
