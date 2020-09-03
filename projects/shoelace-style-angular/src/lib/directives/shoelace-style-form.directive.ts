import {
    Directive,
    Input,
    OnInit,
    ElementRef,
    EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { fromEvent } from "rxjs";
import { not } from "logical-not";

import {
    ISlFormElement,
    ISlControlElement,
} from "../interfaces/shoelace-style-elements";
import { ShoelaceStyleControl } from "../tools/shoelace-style-control";
import { SubscribableDirective } from "../tools/subscribable-directive";

@Directive({
    selector: "sl-form[form]",
    outputs: ["submit"],
})
export class ShoelaceStyleFormDirective
    extends SubscribableDirective
    implements OnInit {
    @Input()
    form: FormGroup;

    submit = new EventEmitter<void>();

    constructor(private elementRef: ElementRef<ISlFormElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions.push(
            fromEvent(element, "slSubmit").subscribe(() => {
                this.submit.emit();
            }),
        );

        element
            .getFormData()
            .then(formData => {
                this.setInitialFormValue(formData);
            })
            .then(() => {
                this.subscribeControls(element);
            });
    }

    private setInitialFormValue(formData: FormData): void {
        const form = {};

        formData.forEach((value, name) => (form[name] = value));

        this.form.patchValue(form);
    }

    private subscribeControls(element: ISlFormElement): void {
        element.getFormControls().then((controls: ISlControlElement[]) => {
            if (not(this.subscriptions)) return;

            controls.forEach(element => {
                const { name } = element;

                if (not(name)) return;

                const control = new ShoelaceStyleControl(element);

                const getValue = control.createValueGetter();
                const setValue = control.createValueSetter();

                const formControl = this.form.get(name);

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
            });
        });
    }
}
