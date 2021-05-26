import { Component } from "@angular/core";

@Component({
    selector: "app-focusable-page",
    templateUrl: "./focusable.component.html",
})
export class FocusableComponent {
    logFocus(target: HTMLElement) {
        console.log(`focus: ${this.getTagName(target)}`);
    }

    logBlur(target: HTMLElement) {
        console.log(`blur: ${this.getTagName(target)}`);
    }

    private getTagName(element: HTMLElement): string {
        return element.tagName.toLowerCase();
    }
}
