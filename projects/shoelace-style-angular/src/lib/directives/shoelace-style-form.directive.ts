import {
    Directive,
    Input,
    OnInit,
    ElementRef,
    EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Components } from "@shoelace-style/shoelace";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";
import { not } from "logical-not";

import {
    ShoelaceStyleControl,
    ShoelaceStyleControlElement,
} from "../tools/shoelace-style-control";

@Directive({
    selector: "sl-form[data]",
    outputs: ["submit"],
})
export class ShoelaceStyleFormDirective
    extends SubscribableDirective
    implements OnInit {
    @Input("data")
    form: FormGroup;

    submit = new EventEmitter<CustomEvent>();

    constructor(
        private elementRef: ElementRef<Components.SlForm & HTMLElement>,
    ) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions.push(
            fromEvent(element, "sl-submit").subscribe((event: CustomEvent) => {
                this.submit.emit(event);
            }),
        );

        element
            .getFormData()
            .then(formData => {
                const formValue = {};

                formData.forEach((value, name) => (formValue[name] = value));

                this.form.patchValue(formValue);
            })
            .then(() => {
                element
                    .getFormControls()
                    .then((controls: ShoelaceStyleControlElement[]) =>
                        this.subscribeControls(controls),
                    );
            });
    }

    private subscribeControls(controls: ShoelaceStyleControlElement[]): void {
        controls.forEach(element => {
            const { name } = element as { name: string };

            if (not(name)) return;

            const control = new ShoelaceStyleControl(element);

            const getValue = control.createValueGetter();
            const setValue = control.createValueSetter();

            const formControl = this.form.get(name);

            if (formControl) {
                this.subscriptions.push(
                    formControl.valueChanges.subscribe(value => {
                        if (getValue() !== value) {
                            setValue(value);
                        }
                    }),
                    fromEvent(element, control.changeEventName).subscribe(
                        () => {
                            this.form.patchValue({
                                [name]: getValue(),
                            });
                        },
                    ),
                );
            }
        });
    }
}
