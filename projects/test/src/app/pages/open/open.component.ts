import { Component, ElementRef, ViewChild } from "@angular/core";
import { Components } from "@shoelace-style/shoelace";

@Component({
    selector: "app-open-page",
    templateUrl: "./open.component.html",
})
export class OpenComponent {
    open = false;

    @ViewChild("dialog")
    dialogRef: ElementRef<HTMLElement & Components.SlDialog>;

    logDialogState(): void {
        const { open } = this.dialogRef.nativeElement;

        if (this.open === open) console.log("state is consistent");

        const state = open ? "open" : "close";

        console.log(`dialog is ${state}`);
    }
}
