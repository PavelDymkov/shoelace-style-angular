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
        sl-icon,
        sl-include,
    `,
})
export class LoadDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly load = new EventEmitter<CustomEvent>();

    @Output()
    readonly error = new EventEmitter<CustomEvent<{ status?: number }>>();

    constructor(private hostRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.hostRef.nativeElement;

        this.subscriptions = [
            observe(host, "sl-load").subscribe(event => this.load.emit(event)),
            observe(host, "sl-error").subscribe(event =>
                this.error.emit(event),
            ),
        ];
    }
}
