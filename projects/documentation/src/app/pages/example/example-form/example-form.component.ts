import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: "app-example-form",
    templateUrl: "./example-form.component.html",
})
export class ExampleFormComponent implements OnInit {
    form = this.formBuilder.group({
        test: [],
    });

    constructor(private readonly formBuilder: FormBuilder) {}

    ngOnInit(): void {}
}
