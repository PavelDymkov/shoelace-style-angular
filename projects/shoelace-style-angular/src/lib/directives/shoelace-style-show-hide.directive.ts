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
    show = new EventEmitter<CustomEvent>();
    afterShow = new EventEmitter<CustomEvent>();
    hide = new EventEmitter<CustomEvent>();
    afterHide = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            fromEvent(element, "sl-show").subscribe((event: CustomEvent) => {
                this.show.emit(event);
            }),
            fromEvent(element, "sl-hide").subscribe((event: CustomEvent) => {
                this.hide.emit(event);
            }),

            fromEvent(element, "sl-after-show").subscribe(
                (event: CustomEvent) => {
                    this.afterShow.emit(event);
                },
            ),
            fromEvent(element, "sl-after-hide").subscribe(
                (event: CustomEvent) => {
                    this.afterHide.emit(event);
                },
            ),
        ];
    }
}
