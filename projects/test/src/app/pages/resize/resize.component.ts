import { AfterViewInit, Component } from "@angular/core";

import { Logger } from "../../logger";

@Component({
    selector: "app-resize-page",
    templateUrl: "./resize.component.html",
})
export class ResizeComponent extends Logger implements AfterViewInit {
    width = "100px";

    ngAfterViewInit(): void {
        setTimeout(() => (this.width = "200px"), 0);
    }
}
