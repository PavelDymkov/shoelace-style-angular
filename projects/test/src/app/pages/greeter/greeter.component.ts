import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-greeter",
    template: `
        <sl-form [data]="form" (submit)="isDialogOpen = true">
            <sl-input name="username" label="Enter your name"></sl-input>
            <br />
            <sl-button submit [disabled]="form.invalid">Say Hello</sl-button>
        </sl-form>

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
