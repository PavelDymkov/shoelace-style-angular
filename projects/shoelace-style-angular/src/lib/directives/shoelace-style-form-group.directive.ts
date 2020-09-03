import {
    Directive,
    Input,
    OnInit,
    ElementRef,
    EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { fromEvent } from "rxjs";

import { SubscribableDirective } from "../tools/subscribable-directive";

@Directive({
    selector: "sl-form[formGroup]",
    outputs: ["submit"],
})
export class ShoelaceStyleFormGroupDirective
    extends SubscribableDirective
    implements OnInit {
    @Input()
    formGroup: FormGroup;

    submit = new EventEmitter<void>();

    constructor(private elementRef: ElementRef<HTMLElement>) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions.push(
            fromEvent(this.elementRef.nativeElement, "slSubmit").subscribe(
                () => {
                    this.submit.emit();
                },
            ),
        );
    }
}
