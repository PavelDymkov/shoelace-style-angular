import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-tag[clearable],
    `,
    outputs: ["clear"],
})
export class ClearableDirective
    extends SubscribableDirective
    implements OnInit
{
    readonly clear = new EventEmitter<CustomEvent>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe(element, "sl-clear").subscribe(event =>
                this.clear.emit(event),
            ),
        ];
    }
}
