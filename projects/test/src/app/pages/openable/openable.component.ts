import { Component } from "@angular/core";

import { Logger } from "../../tools/logger";

@Component({
    selector: "app-openable-page",
    templateUrl: "./openable.component.html",
})
export class OpenableComponent extends Logger {
    selfTarget(event: CustomEvent): void | never {
        if (event.target !== event.currentTarget) throw new Error(`bubbling`);

        this.log(event);
    }
}
