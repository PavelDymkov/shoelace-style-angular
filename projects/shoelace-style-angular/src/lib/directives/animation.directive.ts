import {
    Directive,
    OnInit,
    EventEmitter,
    ElementRef,
    Output,
} from "@angular/core";
import { SlAnimation } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-animation,
    `,
})
export class AnimationDirective
    extends SubscribableDirective
    implements OnInit
{
    @Output()
    readonly start = new EventEmitter<CustomEvent>();

    @Output()
    readonly finish = new EventEmitter<CustomEvent>();

    @Output()
    readonly cancel = new EventEmitter<CustomEvent>();

    constructor(private host: ElementRef<SlAnimation>) {
        super();
    }

    ngOnInit(): void {
        const host = this.host.nativeElement;

        this.subscriptions = [
            observe(host, "sl-cancel").subscribe(event =>
                this.cancel.emit(event),
            ),
            observe(host, "sl-finish").subscribe(event =>
                this.finish.emit(event),
            ),
            observe(host, "sl-start").subscribe(event =>
                this.start.emit(event),
            ),
        ];
    }
}
