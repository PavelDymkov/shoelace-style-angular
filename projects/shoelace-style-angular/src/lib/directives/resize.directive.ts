import {
    Directive,
    OnInit,
    EventEmitter,
    ElementRef,
    Output,
} from "@angular/core";
import { SlResizeObserver } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

@Directive({
    selector: `
        sl-resize-observer,
    `,
})
export class ResizeDirective extends SubscribableDirective implements OnInit {
    @Output()
    readonly resize = new EventEmitter<CustomEvent>();

    constructor(private host: ElementRef<SlResizeObserver>) {
        super();
    }

    ngOnInit(): void {
        const host = this.host.nativeElement;

        this.subscriptions = [
            observe(host, "sl-resize").subscribe(event =>
                this.resize.emit(event),
            ),
        ];
    }
}
