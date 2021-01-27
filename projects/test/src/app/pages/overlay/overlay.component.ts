import { Component } from "@angular/core";

@Component({
    selector: "app-overlay-page",
    templateUrl: "./overlay.component.html",
})
export class OverlayComponent {
    isDrawerShown = false;

    log(message: string): void {
        console.log(message);
    }
}
