import { Component } from "@angular/core";

@Component({
    selector: "app-clearable-page",
    templateUrl: "./clearable.component.html",
})
export class ClearableComponent {
    emitClearButtonClick(): void {
        const clearButton = document
            .querySelector("sl-tag")
            .shadowRoot.querySelector(".tag__clear") as HTMLElement;

        clearButton.click();
    }

    onClear(): void {
        console.log("sl-tag cleared");
    }
}
