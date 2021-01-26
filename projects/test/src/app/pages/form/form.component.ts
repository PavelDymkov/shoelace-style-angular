import { Component, ElementRef } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { not } from "logical-not";

type FormControlName = "inputByFormData" | "inputBySlValue";

@Component({
    selector: "app-form-page",
    templateUrl: "./form.component.html",
})
export class FormComponent {
    form = this.formBuilder.group({
        inputByFormData: ["form data text"],
        inputBySlValue: [null],
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
        });
    }

    patchForm(): void {
        this.form.patchValue({
            inputByFormData: "valid",
        });
    }

    logFormData(): void {
        console.log("formData", this.form.value);
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
