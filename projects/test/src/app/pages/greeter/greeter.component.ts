import { Component } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-greeter",
    template: `
        <form [formGroup]="form" (submit)="isDialogOpen = true">
            <sl-input
                label="Enter your name"
                formControlName="username"
            ></sl-input>

            <sl-button type="submit" [disabled]="form.invalid">
                Say Hello
            </sl-button>
        </form>
        <div (sl-show)="(null)"></div>

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

    constructor(private formBuilder: UntypedFormBuilder) {}
}
