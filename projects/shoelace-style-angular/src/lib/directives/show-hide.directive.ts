import {
    Directive,
    OnInit,
    EventEmitter,
    ElementRef,
    Output,
} from "@angular/core";
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
    show = new EventEmitter<CustomEvent<{ name: string }>>();

    @Output()
    hide = new EventEmitter<CustomEvent<{ name: string }>>();

    constructor(private hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe<CustomEvent<{ name: string }>>(
                host,
                "sl-tab-show",
            ).subscribe(event => this.show.emit(event)),
            observe<CustomEvent<{ name: string }>>(
                host,
                "sl-tab-hide",
            ).subscribe(event => this.hide.emit(event)),
        ];
    }
}
