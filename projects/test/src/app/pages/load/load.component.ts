import { Component } from "@angular/core";

import { Logger } from "../../tools/logger";

@Component({
    selector: "app-load-page",
    templateUrl: "./load.component.html",
})
export class LoadPageComponent extends Logger {
    test = 0;
}
