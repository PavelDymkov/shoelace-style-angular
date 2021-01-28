import { Component } from "@angular/core";

@Component({
    selector: "app-closable-page",
    templateUrl: "./closable.component.html",
})
export class ClosableComponent {
    emitCloseButtonClick(): void {
        const closeButton = document
            .querySelector("sl-tab")
            .shadowRoot.querySelector(".tab__close-button") as HTMLElement;

        closeButton.click();
    }

    onClose(): void {
        console.log("sl-tab closed");
    }
}
