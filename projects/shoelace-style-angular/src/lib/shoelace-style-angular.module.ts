import { NgModule } from "@angular/core";

import {
    ShoelaceStyleControlsDirective,
    ShoelaceStyleFormGroupDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFormGroupDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFormGroupDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
