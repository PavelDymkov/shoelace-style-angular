import {
    Directive,
    OnInit,
    EventEmitter,
    ElementRef,
    Output,
} from "@angular/core";

import { SlMenu, SlMenuItem } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-menu,
    `,
})
export class SelectDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly select = new EventEmitter<CustomEvent<{ item: SlMenuItem }>>();

    constructor(private host: ElementRef<SlMenu>) {
        super();
    }

    ngOnInit(): void {
        const host = this.host.nativeElement;

        this.subscriptions = [
            observe<CustomEvent<{ item: SlMenuItem }>>(
                host,
                "sl-select",
            ).subscribe(event => this.select.emit(event)),
        ];
    }
}
