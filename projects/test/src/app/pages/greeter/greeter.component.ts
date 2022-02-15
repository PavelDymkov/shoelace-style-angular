import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-greeter",
    template: `
        <form [formGroup]="form" (submit)="isDialogOpen = true">
            <sl-input
                label="Enter your name"
                formControlName="username"
            ></sl-input>
            <br />
            <sl-button type="submit" [disabled]="form.invalid">
                Say Hello
            </sl-button>
        </form>

        <sl-dialog label="Greetings" [(open)]="isDialogOpen">
            Hello,
            {{ form.get("username")!.value }}!
        </sl-dialog>
    `,
})
export class GreeterComponent {
    form = this.formBuilder.group({
        username: ["World", Validators.required],
    });

    isDialogOpen = false;

    constructor(private formBuilder: FormBuilder) {}
}
