import { Component } from "@angular/core";

@Component({
    selector: "app-closable-page",
    templateUrl: "./closable.component.html",
})
export class ClosableComponent {
    onClose(): void {
        console.log("sl-tab closed");
    }
}
