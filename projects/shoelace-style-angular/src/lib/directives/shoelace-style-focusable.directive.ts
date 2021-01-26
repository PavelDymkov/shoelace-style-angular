import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

@Directive({
    selector: `
        sl-button,
        sl-checkbox,
        sl-input,
        sl-menu,
        sl-radio,
        sl-range,
        sl-select,
        sl-switch,
        sl-textarea,
    `,
    outputs: ["focus", "blur"],
})
export class ShoelaceStyleFocusableDirective
    extends SubscribableDirective
    implements OnInit {
    focus = new EventEmitter<HTMLElement>();
    blur = new EventEmitter<HTMLElement>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            fromEvent(element, "sl-focus").subscribe(() => {
                this.focus.emit(element);
            }),
            fromEvent(element, "sl-blur").subscribe(() => {
                this.blur.emit(element);
            }),
        ];
    }
}
