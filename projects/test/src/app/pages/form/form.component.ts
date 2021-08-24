import { Component } from "@angular/core";
import { AbstractControl, FormBuilder } from "@angular/forms";

@Component({
    selector: "app-form-page",
    templateUrl: "./form.component.html",
})
export class FormPageComponent {
    simplyForm = this.formBuilder.group({
        input: ["initial"],
        select: [],
        radio: [],
        checkbox: [],
        checkboxValue: [],
        checkboxFalse: [],
        checkboxValueNull: [],
        switch: [],
        switchValue: [],
        native: ["initial"],
    });

    dynamicForm = this.formBuilder.array([]);

    constructor(private formBuilder: FormBuilder) {}

    patchSimplyForm(): void {
        this.simplyForm.patchValue({
            input: "patched",
            select: "option-2",
            radio: "option-2",
            checkbox: true,
            checkboxValue: "checkbox-value",
            checkboxFalse: false,
            checkboxValueNull: null,
            switch: true,
            switchValue: "switch-value",
            native: "patched",
        });
    }

    fillDynamicForm(): void {
        const dynamicFormData = [
            {
                items: ["foo"],
                selected: null,
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

    logFormData(form: AbstractControl): void {
        console.log("sl-form data", form.value);
    }
}
