import {
    Directive,
    Input,
    OnInit,
    AfterContentChecked,
    ElementRef,
    EventEmitter,
    NgZone,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Components } from "@shoelace-style/shoelace";
import { from, fromEvent, Subscription } from "rxjs";
import { debounceTime, switchMap } from "rxjs/operators";
import { SubscribableDirective } from "ngx-subscribable";
import { not } from "logical-not";

import { observe } from "../tools/observe";

interface HTMLFormControl extends HTMLElement {
    name: string;
    value: string;
}

@Directive({
    selector: "sl-form[data]",
    outputs: ["submit"],
})
export class ShoelaceStyleFormDirective
    extends SubscribableDirective
    implements OnInit, AfterContentChecked {
    @Input("data")
    form: AbstractControl;

    submit = new EventEmitter<CustomEvent>();

    private trigger = new EventEmitter<void>();
    private registry = new Map<HTMLElement, Subscription>();

    constructor(
        private elementRef: ElementRef<Components.SlForm & HTMLElement>,
        private readonly ngZone: NgZone,
    ) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions.push(
            observe(element, "sl-submit").subscribe(event =>
                this.submit.emit(event),
            ),
            this.trigger
                .pipe(debounceTime(10))
                .pipe(
                    switchMap(() =>
                        from(this.elementRef.nativeElement.getFormControls()),
                    ),
                )
                .subscribe((controls: HTMLFormControl[]) => {
                    controls
                        .filter(
                            control =>
                                control.name && not(this.registry.has(control)),
                        )
                        .forEach(control => {
                            const formControl = this.form.get(control.name);

                            if (formControl) {
                                control.value = formControl.value || "";

                                this.registry.set(
                                    control,
                                    fromEvent(
                                        control,
                                        getChangeEventName(control),
                                    ).subscribe(() => {
                                        formControl.patchValue(control.value);
                                    }),
                                );
                            }
                        });
                }),
        );
    }

    ngAfterContentChecked(): void {
        this.ngZone.runOutsideAngular(() => this.trigger.emit());
    }

    ngOnDestroy(): void {
        this.registry.forEach((subscription, control) => {
            subscription.unsubscribe();

            this.registry.delete(control);
        });

        super.ngOnDestroy();
    }
}

function getChangeEventName(control: HTMLFormControl): string {
    const tagName = control.tagName.toLowerCase();

    switch (tagName) {
        case "sl-input":
        case "sl-textarea":
            return "sl-input";
        case "input":
        case "textarea":
            return "input";
        default:
            return tagName.startsWith("sl-") ? "sl-change" : "change";
    }
}
