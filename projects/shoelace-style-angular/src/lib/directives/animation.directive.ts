import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SlAnimation } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-animation,
    `,
    outputs: ["cancel", "finish", "start"],
})
export class AnimationDirective
    extends SubscribableDirective
    implements OnInit
{
    readonly cancel = new EventEmitter<CustomEvent>();
    readonly finish = new EventEmitter<CustomEvent>();
    readonly start = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<SlAnimation>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe(element, "sl-cancel").subscribe(event =>
                this.cancel.emit(event),
            ),
            observe(element, "sl-finish").subscribe(event =>
                this.finish.emit(event),
            ),
            observe(element, "sl-start").subscribe(event =>
                this.start.emit(event),
            ),
        ];
    }
}
