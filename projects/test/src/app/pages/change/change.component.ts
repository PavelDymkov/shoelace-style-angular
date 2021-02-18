import { Component } from "@angular/core";

@Component({
    selector: "app-change-page",
    templateUrl: "./change.component.html",
})
export class ChangeComponent {
    log(event: CustomEvent): void {
        const { tagName } = event.target as HTMLElement;

        console.log(`${tagName} dispatch ${event.type}`);
    }
}
