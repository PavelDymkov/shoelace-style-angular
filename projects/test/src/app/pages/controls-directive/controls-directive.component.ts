import { Component, AfterViewInit, ElementRef } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { $ } from "../../tools/$";

type FormControlName =
    | "checkbox"
    | "checkboxWithValue"
    | "colorPicker"
    | "input"
    | "radio"
    | "range"
    | "rating"
    | "select"
    | "switch"
    | "switchWithValue"
    | "textarea";

@Component({
    selector: "app-controls-directive-page",
    templateUrl: "./controls-directive.component.html",
})
export class ControlsDirectiveComponent implements AfterViewInit {
    form = this.formBuilder.group({
        checkbox: [null],
        checkboxWithValue: [null],
        colorPicker: [null],
        input: [null],
        radio: [null],
        range: [null],
        rating: [2.5],
        select: [null],
        switch: [null],
        switchWithValue: ["switched"],
        textarea: [null],
    } as Record<FormControlName, any[]>);

    elements: Record<FormControlName, HTMLElement>;

    constructor(
        private formBuilder: FormBuilder,
        private elementRef: ElementRef<HTMLElement>,
    ) {}

    ngAfterViewInit(): void {
        this.elements = $<FormControlName>(this.elementRef.nativeElement, {
            checkbox: "sl-checkbox",
            checkboxWithValue: "sl-checkbox.with-value",
            colorPicker: "sl-color-picker",
            input: "sl-input",
            radio: "sl-radio",
            range: "sl-range",
            rating: "sl-rating",
            select: "sl-select",
            switch: "sl-switch",
            switchWithValue: "sl-switch.with-value",
            textarea: "sl-textarea",
        });
    }

    onSubmit(): void {
        console.log(this.form.value);
    }
}
