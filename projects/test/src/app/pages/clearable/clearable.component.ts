import { Component } from "@angular/core";

@Component({
    selector: "app-clearable-page",
    templateUrl: "./clearable.component.html",
})
export class ClearableComponent {
    onClear(): void {
        console.log("sl-tag cleared");
    }
}
