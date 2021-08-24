import { Component, ElementRef, ViewChild } from "@angular/core";
import { SlDialog } from "@shoelace-style/shoelace";

@Component({
    selector: "app-open-page",
    templateUrl: "./open.component.html",
})
export class OpenPageComponent {
    open = false;

    @ViewChild("dialog")
    dialogRef!: ElementRef<SlDialog>;

    logDialogState(): void {
        const { open } = this.dialogRef.nativeElement;

        if (this.open === open) console.log("state is consistent");

        const state = open ? "open" : "close";

        console.log(`dialog is ${state}`);
    }
}
