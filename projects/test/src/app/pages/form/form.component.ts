import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: "app-form-page",
    templateUrl: "./form.component.html",
})
export class FormComponent {
    simplyForm = this.formBuilder.group({
        input: ["initial"],
        select: [],
        radio: [],
        native: ["initial"],
    });

    dynamicForm = this.formBuilder.array([]);

    constructor(private formBuilder: FormBuilder) {}

    patchSimplyForm(): void {
        this.simplyForm.patchValue({
            input: "patched",
            select: "option-2",
            radio: "option-2",
            native: "patched",
        });
    }

    fillDynamicForm(): void {
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
