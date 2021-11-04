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
        sl-tag[removable],
    `,
})
export class RemovableDirective
    extends SubscribableDirective
    implements OnInit
{
    @Output()
    readonly remove = new EventEmitter<CustomEvent>();

    constructor(private host: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const host = this.host.nativeElement;

        this.subscriptions = [
            observe(host, "sl-remove").subscribe(event =>
                this.remove.emit(event),
            ),
        ];
    }
}
