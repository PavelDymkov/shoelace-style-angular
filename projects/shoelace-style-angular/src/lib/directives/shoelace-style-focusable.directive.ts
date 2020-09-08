import {
    Directive,
    OnInit,
    Output,
    EventEmitter,
    ElementRef,
} from "@angular/core";

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
})
export class ShoelaceStyleFocusableDirective
    extends SubscribableDirective
    implements OnInit {
    @Output()
    focus = new EventEmitter<HTMLElement>();

    @Output()
    blur = new EventEmitter<HTMLElement>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions.push(
            fromEvent(element, "slFocus").subscribe(() => {
                this.focus.emit(element);
            }),
            fromEvent(element, "slBlur").subscribe(() => {
                this.blur.emit(element);
            }),
        );
    }
}
