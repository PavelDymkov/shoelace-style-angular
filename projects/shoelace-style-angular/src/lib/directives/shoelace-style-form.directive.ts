import {
    Directive,
    Input,
    OnInit,
    OnDestroy,
    ElementRef,
    EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { fromEvent, Subscription } from "rxjs";
import { not } from "logical-not";

import {
    ISlFormElement,
    ISlControlElement,
} from "../interfaces/shoelace-style-elements";
import { ShoelaceStyleControl } from "../tools/shoelace-style-control";

@Directive({
    selector: "sl-form[form]",
    outputs: ["onSubmit"],
})
export class ShoelaceStyleFormDirective implements OnInit, OnDestroy {
    @Input()
    form: FormGroup;

    onSubmit = new EventEmitter<void>();

    private readonly element = this.elementRef.nativeElement;

    private unsubscriptions: (() => void)[];

    private readonly onSlSubmit = () => {
        this.onSubmit.emit();
    };

    private subscriptions: Subscription[] = [];

    constructor(private elementRef: ElementRef<ISlFormElement>) {}

    ngOnInit(): void {
        this.element.addEventListener("slSubmit", this.onSlSubmit, false);

        this.element
            .getFormData()
            .then(formData => {
                console.log("getFormData");
                const form = {};

                formData.forEach((value, name) => (form[name] = value));

                this.form.patchValue(form);
            })
            .then(() => {
                this.element
                    .getFormControls()
                    .then((controls: ISlControlElement[]) => {
                        console.log("getFormControls");
                        if (not(this.subscriptions)) return;

                        controls.forEach(element => {
                            const { name } = element;

                            if (not(name)) return;

                            const control = new ShoelaceStyleControl(element);
                            const eventName = control.changeEventName;

                            const getValue = control.createValueGetter();
                            const setValue = control.createValueSetter();

                            const formControl = this.form.get(name);

                            this.subscriptions.push(
                                formControl.valueChanges.subscribe(value => {
                                    if (getValue() !== value) {
                                        setValue(value);
                                    }
                                }),
                                fromEvent(element, eventName).subscribe(() => {
                                    this.form.patchValue({
                                        [name]: getValue(),
                                    });
                                }),
                            );
                        });
                    });
            });
    }

    ngOnDestroy(): void {
        this.element.removeEventListener("slSubmit", this.onSlSubmit);

        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.subscriptions = null;

        if (this.unsubscriptions) {
            this.unsubscriptions.forEach(unsubscription => unsubscription());
            this.unsubscriptions = null;
        }
    }
}
