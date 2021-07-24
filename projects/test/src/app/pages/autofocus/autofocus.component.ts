import { Component } from "@angular/core";

import { Logger } from "../../tools/logger";

@Component({
    selector: "app-autofocus-page",
    templateUrl: "./autofocus.component.html",
})
export class AutofocusPageComponent extends Logger {
    showInput = true;
}
