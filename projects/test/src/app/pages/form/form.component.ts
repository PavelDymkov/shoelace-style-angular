import { Component, ElementRef } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { not } from "logical-not";

type FormControlName = "inputByFormData" | "inputBySlValue" | "select";

@Component({
    selector: "app-form-page",
    templateUrl: "./form.component.html",
})
export class FormComponent {
    form = this.formBuilder.group({
        inputByFormData: ["formControl text"],
        inputBySlValue: [null],
        select: [],
    } as Record<FormControlName, any[]>);

    elements: Record<FormControlName, HTMLElement>;

    favoriteValue = "cats";

    constructor(
        private formBuilder: FormBuilder,
        private elementRef: ElementRef<HTMLElement>,
    ) {}

    ngAfterViewInit(): void {
        this.elements = $<FormControlName>(this.elementRef.nativeElement, {
            inputByFormData: `sl-input[name=inputByFormData]`,
            inputBySlValue: `sl-input[name=inputBySlValue]`,
            select: `sl-select[name="select"]`,
        });
    }

    patchForm(): void {
        this.form.patchValue({
            inputByFormData: "patched value",
            inputBySlValue: "patched value",
            select: "option-2",
        } as Record<FormControlName, any>);
    }

    logFormData(): void {
        console.log("sl-form data", this.form.value);
    }

    emitSubmit(): void {
        const slButton = document.querySelector(
            "sl-button[submit]",
        ) as HTMLElement;

        slButton.click();
    }
}

function $<K extends string>(
    root: HTMLElement,
    map: Record<K, string>,
): Record<K, HTMLElement> {
    const elements = {} as Record<K, HTMLElement>;

    Object.entries(map).forEach(([name, selector]: [string, string]) => {
        const element = root.querySelector(selector);

        if (not(element)) throw new Error();

        elements[name] = element;
    });

    return elements;
}
