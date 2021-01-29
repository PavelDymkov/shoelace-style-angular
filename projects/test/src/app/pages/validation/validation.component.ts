import { Component, OnInit } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    ValidatorFn,
    Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { Components } from "@shoelace-style/shoelace";

@Component({
    selector: "app-validation-page",
    templateUrl: "./validation.component.html",
})
export class ValidationComponent implements OnInit {
    readonly customValidator: ValidatorFn = (control: AbstractControl) => {
        if (control.value === "foo") return null;

        return { notFoo: true };
    };

    form = this.formBuilder.group({
        text: [null],
    });

    textForEntry: string;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            const textControl = this.form.get("text");

            switch (params.type) {
                case "ng-required":
                    textControl.setValidators([Validators.required]);
                    break;
                default:
                    textControl.setValidators([this.customValidator]);
            }

            textControl.updateValueAndValidity();

            this.textForEntry = params.text || "foo";

            console.log("ValidationComponent is ready");
        });
    }

    logDisabled(button: Components.SlButton): void {
        console.log(`sl-button[submit][disabled] = ${button.disabled}`);
    }

    fillInputText(): void {
        this.form.get("text").patchValue(this.textForEntry);
    }
}
