import { Component } from "@angular/core";

import { Logger } from "../../logger";

@Component({
    selector: "app-overlay-page",
    templateUrl: "./overlay.component.html",
})
export class OverlayComponent extends Logger {
    isDrawerShown = false;
}
