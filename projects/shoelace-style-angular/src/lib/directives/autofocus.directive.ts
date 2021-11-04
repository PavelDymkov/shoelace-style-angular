import { Directive, ElementRef, AfterViewInit } from "@angular/core";
import { SlInput, SlTextarea } from "@shoelace-style/shoelace";
import { SubscribableDirective } from "ngx-subscribable";

@Directive({
    selector: `
        sl-input[autofocus],
        sl-textarea[autofocus],
    `,
})
export class AutofocusDirective
    extends SubscribableDirective
    implements AfterViewInit
{
    constructor(private host: ElementRef<SlInput | SlTextarea>) {
        super();
    }

    ngAfterViewInit(): void {
        const host = this.host.nativeElement;

        setTimeout(() => host.focus());
    }
}
