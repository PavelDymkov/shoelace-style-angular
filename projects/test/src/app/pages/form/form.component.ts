import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: "app-form-page",
    templateUrl: "./form.component.html",
})
export class FormPageComponent {
    form = this.formBuilder.group({
        checkable: this.formBuilder.group({
            checkbox: [true],
            checkboxValue: ["checkbox-value"],

            switch: [true],
            switchValue: ["switch-value"],
        }),

        colorPicker: ["#aaa"],

        input: this.formBuilder.group({
            input: ["abc"],
            textarea: ["abc"],
        }),

        number: this.formBuilder.group({
            input: [123],
            range: [30],
            rating: [2],
        }),

        radio: ["2"],
        radioButton: ["2"],

        select: ["option-1"],
        multiselect: [["option-2", "option-3"]],
    });

    constructor(private formBuilder: FormBuilder) {}
}
