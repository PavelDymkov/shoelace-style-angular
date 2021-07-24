import { Component } from "@angular/core";

import { Logger } from "../../tools/logger";

@Component({
    selector: "app-resize-page",
    templateUrl: "./resize.component.html",
})
export class ResizePageComponent extends Logger {
    width = "100px";
}
