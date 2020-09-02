import { NgModule } from "@angular/core";

import {
    ShoelaceStyleControlsDirective,
    ShoelaceStyleFormDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
