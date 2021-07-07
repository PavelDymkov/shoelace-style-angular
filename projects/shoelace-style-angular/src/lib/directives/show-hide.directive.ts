import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

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
export class ShowHideDirective extends SubscribableDirective implements OnInit {
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
            observe(element, "sl-show").subscribe(event =>
                this.show.emit(event),
            ),
            observe(element, "sl-hide").subscribe(event =>
                this.hide.emit(event),
            ),

            observe(element, "sl-after-show").subscribe(event =>
                this.afterShow.emit(event),
            ),
            observe(element, "sl-after-hide").subscribe(event =>
                this.afterHide.emit(event),
            ),
        ];
    }
}

@Directive({
    selector: `
        sl-tab-group,
    `,
    outputs: ["show", "hide"],
})
export class TabGroupShowHideDirective
    extends SubscribableDirective
    implements OnInit
{
    show = new EventEmitter<CustomEvent<{ name: string }>>();
    hide = new EventEmitter<CustomEvent<{ name: string }>>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions = [
            observe<CustomEvent<{ name: string }>>(
                this.elementRef.nativeElement,
                "sl-tab-show",
            ).subscribe(event => this.show.emit(event)),
            observe<CustomEvent<{ name: string }>>(
                this.elementRef.nativeElement,
                "sl-tab-hide",
            ).subscribe(event => this.hide.emit(event)),
        ];
    }
}
