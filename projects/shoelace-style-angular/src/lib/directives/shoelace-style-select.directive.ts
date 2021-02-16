import { Directive, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { Components } from "@shoelace-style/shoelace";
import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

type SlMenu = Components.SlMenu & HTMLElement;
type HTMLSlMenuItemElement = Components.SlMenuItem & HTMLElement;
type OnSelectEvent = CustomEvent<{ item: HTMLSlMenuItemElement }>;

@Directive({
    selector: `
        sl-menu,
    `,
    outputs: ["select"],
})
export class ShoelaceStyleSelectDirective
    extends SubscribableDirective
    implements OnInit {
    readonly select = new EventEmitter<OnSelectEvent>();

    constructor(private elementRef: ElementRef<SlMenu>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            fromEvent<OnSelectEvent>(element, "sl-select").subscribe(event =>
                this.select.emit(event),
            ),
        ];
    }
}
