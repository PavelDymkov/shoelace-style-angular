import { Component } from "@angular/core";

@Component({
    selector: "app-load-page",
    templateUrl: "./load.component.html",
})
export class LoadComponent {
    onLoad(): void {
        console.log("sl-icon loaded");
    }

    onError(): void {
        console.log("sl-icon error while loading");
    }
}
