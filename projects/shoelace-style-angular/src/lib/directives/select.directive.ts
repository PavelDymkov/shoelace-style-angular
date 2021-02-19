import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { Components } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

type SlMenu = Components.SlMenu & HTMLElement;
type HTMLSlMenuItemElement = Components.SlMenuItem & HTMLElement;

@Directive({
    selector: `
        sl-menu,
    `,
    outputs: ["select"],
})
export class SelectDirective extends SubscribableDirective implements OnInit {
    readonly select = new EventEmitter<
        CustomEvent<{ item: HTMLSlMenuItemElement }>
    >();

    constructor(private elementRef: ElementRef<SlMenu>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe<CustomEvent<{ item: HTMLSlMenuItemElement }>>(
                element,
                "sl-select",
            ).subscribe(event => this.select.emit(event)),
        ];
    }
}
