import { Component, ElementRef } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { $ } from "../../tools/$";

type FormControlName = "name" | "favorite" | "agree";

@Component({
    selector: "app-form-page",
    templateUrl: "./form.component.html",
})
export class FormComponent {
    form = this.formBuilder.group({
        name: [null],
        favorite: [null],
        agree: [null],
    } as Record<FormControlName, any[]>);

    elements: Record<FormControlName, HTMLElement>;

    favoriteValue = "cats";

    constructor(
        private formBuilder: FormBuilder,
        private elementRef: ElementRef<HTMLElement>,
    ) {}

    ngAfterViewInit(): void {
        this.elements = $<FormControlName>(this.elementRef.nativeElement, {
            name: `sl-input[name="name"]`,
            favorite: `sl-select[name="favorite"]`,
            agree: `sl-checkbox[name="agree"]`,
        });
    }

    patchForm(): void {
        this.form.patchValue({
            name: "lol",
            agree: "yes",
        });
    }

    onSubmit(): void {
        console.log(this.form.value);
    }
}
