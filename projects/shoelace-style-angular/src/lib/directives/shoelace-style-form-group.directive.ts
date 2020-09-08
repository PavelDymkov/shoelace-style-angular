import {
    Directive,
    Input,
    OnInit,
    ElementRef,
    EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

@Directive({
    selector: "sl-form[formGroup]",
    outputs: ["submit"],
})
export class ShoelaceStyleFormGroupDirective
    extends SubscribableDirective
    implements OnInit {
    @Input()
    formGroup: FormGroup;

    submit = new EventEmitter<HTMLElement>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        const form = this.elementRef.nativeElement;

        this.subscriptions.push(
            fromEvent(form, "slSubmit").subscribe(() => {
                this.submit.emit(form);
            }),
        );
    }
}
