import { Component } from "@angular/core";

import { Logger } from "../../logger";

@Component({
    selector: "app-show-hide-page",
    templateUrl: "./show-hide.component.html",
})
export class ShowHideComponent extends Logger {
    isShowAlert = false;

    logMessage(prefix: string, target: HTMLElement): void {
        console.log(`${this.getTagName(target)} ${prefix}`);
    }

    tabToggle(event: CustomEvent<{ name: string }>): void {
        console.log(`${event.type}: panel ${event.detail.name}`);
    }

    private getTagName(element: HTMLElement): string {
        return element.tagName.toLowerCase();
    }
}
