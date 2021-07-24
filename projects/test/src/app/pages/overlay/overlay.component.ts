import { Component } from "@angular/core";

import { Logger } from "../../tools/logger";

@Component({
    selector: "app-overlay-page",
    templateUrl: "./overlay.component.html",
})
export class OverlayPageComponent extends Logger {
    isDrawerShown = false;
}
