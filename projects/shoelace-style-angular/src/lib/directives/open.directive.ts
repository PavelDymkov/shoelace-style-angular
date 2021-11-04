import {
    Directive,
    OnInit,
    EventEmitter,
    ElementRef,
    Input,
    Output,
    OnChanges,
    SimpleChanges,
} from "@angular/core";
import { SubscribableDirective } from "ngx-subscribable";

import { observe } from "../tools/observe";

interface Openable {
    open: boolean;
}

@Directive({
    selector: `
        sl-alert[open],
        sl-color-picker[open],
        sl-details[open],
        sl-dialog[open],
        sl-drawer[open],
        sl-dropdown[open],
        sl-tooltip[open],
    `,
})
export class OpenDirective
    extends SubscribableDirective
    implements OnInit, OnChanges
{
    @Input()
    open: boolean = false;

    @Output()
    openChange = new EventEmitter<boolean>();

    constructor(private host: ElementRef<HTMLElement & Openable>) {
        super();
    }

    ngOnInit(): void {
        const host = this.host.nativeElement;

        this.subscriptions = [
            observe(host, "sl-after-show").subscribe(() =>
                this.changeOpen(true),
            ),
            observe(host, "sl-after-hide").subscribe(() =>
                this.changeOpen(false),
            ),
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.open)
            this.host.nativeElement.open = changes.open.currentValue;
    }

    private changeOpen(value: boolean): void {
        this.open = value;
        this.openChange.emit(value);
    }
}
