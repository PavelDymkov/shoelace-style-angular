import {
    Directive,
    OnInit,
    Output,
    EventEmitter,
    ElementRef,
} from "@angular/core";

import { fromEvent } from "rxjs";

import { SubscribableDirective } from "../tools/subscribable-directive";

@Directive({
    selector: `
        sl-alert,
        sl-color-picker,
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
    onShow = new EventEmitter<void>();

    @Output()
    onAfterShow = new EventEmitter<void>();

    @Output()
    onHide = new EventEmitter<void>();

    @Output()
    onAfterHide = new EventEmitter<void>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions.push(
            fromEvent(element, "slShow").subscribe(() => {
                this.onShow.emit();
            }),
            fromEvent(element, "slHide").subscribe(() => {
                this.onHide.emit();
            }),

            fromEvent(element, "slAfterShow").subscribe(() => {
                this.onAfterShow.emit();
            }),
            fromEvent(element, "slAfterHide").subscribe(() => {
                this.onAfterHide.emit();
            }),
        );
    }
}
