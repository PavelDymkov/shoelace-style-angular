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
        sl-tab[closable],
    `,
})
export class ClosableDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly close = new EventEmitter<CustomEvent>();

    constructor(private host: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.host.nativeElement;

        this.subscriptions = [
            observe(host, "sl-close").subscribe(event =>
                this.close.emit(event),
            ),
        ];
    }
}
