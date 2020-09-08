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
        sl-alert,
        sl-color-picker,
        sl-details,
        sl-dialog,
        sl-drawer,
        sl-dropdown,
        sl-tooltip,
    `,
})
export class ShoelaceStyleShowHideDirective
    extends SubscribableDirective
    implements OnInit {
    @Output()
    show = new EventEmitter<HTMLElement>();

    @Output()
    afterShow = new EventEmitter<HTMLElement>();

    @Output()
    hide = new EventEmitter<HTMLElement>();

    @Output()
    afterHide = new EventEmitter<HTMLElement>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions.push(
            fromEvent(element, "slShow").subscribe(() => {
                this.show.emit(element);
            }),
            fromEvent(element, "slHide").subscribe(() => {
                this.hide.emit(element);
            }),

            fromEvent(element, "slAfterShow").subscribe(() => {
                this.afterShow.emit(element);
            }),
            fromEvent(element, "slAfterHide").subscribe(t => {
                this.afterHide.emit(element);
            }),
        );
    }
}
