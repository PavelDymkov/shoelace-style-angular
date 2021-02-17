import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

const simplyFormInitial = {
    input: "initial",
    native: "initial",
};

const simplyFormPatched = {
    input: "patched",
    select: "option-2",
    radio: "option-2",
    native: "patched",
};

const dynamicFormData = [
    {
        items: ["foo"],
        selected: false,
    },
    {
        items: ["foo", "bar"],
        selected: true,
    },
    {
        items: ["baz"],
        selected: true,
    },
];

@Component({
    selector: "app-form-page",
    templateUrl: "./form.component.html",
})
export class FormComponent {
    simplyForm = this.formBuilder.group({
        input: [],
        select: [],
        radio: [],
        native: [],
    });

    dynamicForm = this.formBuilder.array([]);

    constructor(private formBuilder: FormBuilder) {
        this.simplyForm.patchValue(simplyFormInitial);
    }

    patchSimplyForm(): void {
        this.simplyForm.patchValue(simplyFormPatched);
    }

    fillDynamicForm(): void {
        dynamicFormData.forEach(({ items, selected }, i) => {
            this.dynamicForm.setControl(
                i,
                this.formBuilder.group({
                    items: this.formBuilder.array(
                        items.map(value => this.formBuilder.control(value)),
                    ),
                    selected: [selected],
                }),
            );
        });
    }

    changeDynamicForm(): void {
        this.dynamicForm.clear();

        this.fillDynamicForm();
    }

    logFormData(event: CustomEvent<{ formData: FormData }>): void {
        const { formData } = event.detail;

        const formValue: any = {};

        formData.forEach((value, key) => (formValue[key] = value));

        console.log("sl-form data", formValue);
    }
}
