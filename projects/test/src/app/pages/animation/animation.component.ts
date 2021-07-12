import { Component } from "@angular/core";
import { SlAnimation } from "@shoelace-style/shoelace";

import { Logger } from "../../logger";

@Component({
    selector: "app-animation-page",
    templateUrl: "./animation.component.html",
})
export class AnimationComponent extends Logger {
    test = 0;

    cancelAnimation(event: CustomEvent): void {
        this.log(event);

        const element = event.target as SlAnimation;

        element.cancel();
    }
}
