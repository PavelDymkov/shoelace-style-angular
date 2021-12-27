import { Directive, OnInit, ElementRef, Output } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { event } from "../tools/event";
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
    show = event();
    afterShow = event();
    hide = event();
    afterHide = event();

    constructor(private host: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.host.nativeElement;

        this.subscriptions = [
            observe(host, "sl-show").subscribe(event => this.show.emit(event)),
            observe(host, "sl-hide").subscribe(event => this.hide.emit(event)),

            observe(host, "sl-after-show").subscribe(event =>
                this.afterShow.emit(event),
            ),
            observe(host, "sl-after-hide").subscribe(event =>
                this.afterHide.emit(event),
            ),
        ];
    }
}

@Directive({
    selector: `
        sl-tab-group,
    `,
})
export class TabGroupShowHideDirective
    extends SubscribableDirective
    implements OnInit
{
    @Output()
    show = event<{ name: string }>();

    @Output()
    hide = event<{ name: string }>();

    constructor(private hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-tab-show").subscribe(event =>
                this.show.emit(event),
            ),
            observe(host, "sl-tab-hide").subscribe(event =>
                this.hide.emit(event),
            ),
        ];
    }
}
