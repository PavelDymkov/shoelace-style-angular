import { Component } from "@angular/core";

@Component({
    selector: "simply-dialog",
    template: `
        <sl-dialog label="Dialog label" [(open)]="isDialogOpen">
            Content

            <sl-button
                slot="footer"
                type="primary"
                (click)="isDialogOpen = false"
            >
                Close
            </sl-button>
        </sl-dialog>

        <sl-button (click)="isDialogOpen = true">Open dialog</sl-button>
    `,
})
export class SimplyDialog {
    isDialogOpen = false;
}
