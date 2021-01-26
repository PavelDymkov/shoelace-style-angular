import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

@Directive({
    selector: `
        sl-alert,
        sl-color-picker,
        sl-details,
        sl-dialog,
        sl-drawer,
        sl-dropdown,
        sl-tooltip,
    `,
    outputs: ["show", "afterShow", "hide", "afterHide"],
})
export class ShoelaceStyleShowHideDirective
    extends SubscribableDirective
    implements OnInit {
    show = new EventEmitter<HTMLElement>();
    afterShow = new EventEmitter<HTMLElement>();
    hide = new EventEmitter<HTMLElement>();
    afterHide = new EventEmitter<HTMLElement>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            fromEvent(element, "sl-show").subscribe(() => {
                this.show.emit(element);
            }),
            fromEvent(element, "sl-hide").subscribe(() => {
                this.hide.emit(element);
            }),

            fromEvent(element, "sl-after-show").subscribe(() => {
                this.afterShow.emit(element);
            }),
            fromEvent(element, "sl-after-hide").subscribe(t => {
                this.afterHide.emit(element);
            }),
        ];
    }
}
