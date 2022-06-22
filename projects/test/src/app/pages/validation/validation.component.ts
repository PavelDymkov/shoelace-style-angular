import { Component } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-validation-page",
    templateUrl: "./validation.component.html",
})
export class ValidationPageComponent {
    form = this.formBuilder.group({
        required: [null, Validators.required],
    });

    form2 = this.formBuilder.group({
        required: [null, Validators.required],
    });

    constructor(private formBuilder: UntypedFormBuilder) {}
}
