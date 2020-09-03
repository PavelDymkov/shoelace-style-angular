import { NgModule } from "@angular/core";

import {
    ShoelaceStyleControlsDirective,
    ShoelaceStyleFormGroupDirective,
    ShoelaceStyleFormDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFormGroupDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFormGroupDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
