import { Component } from "@angular/core";

import { Logger } from "../../logger";

@Component({
    selector: "app-load-page",
    templateUrl: "./load.component.html",
})
export class LoadComponent extends Logger {
    test = 0;
}
