import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { SlMenu, SlMenuItem } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-menu,
    `,
    outputs: ["select"],
})
export class SelectDirective extends SubscribableDirective implements OnInit {
    readonly select = new EventEmitter<CustomEvent<{ item: SlMenuItem }>>();

    constructor(private elementRef: ElementRef<SlMenu>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe<CustomEvent<{ item: SlMenuItem }>>(
                element,
                "sl-select",
            ).subscribe(event => this.select.emit(event)),
        ];
    }
}
