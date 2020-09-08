import { NgModule } from "@angular/core";

import {
    ShoelaceStyleControlsDirective,
    ShoelaceStyleFocusableDirective,
    ShoelaceStyleFormGroupDirective,
    ShoelaceStyleFormDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFocusableDirective,
        ShoelaceStyleFormGroupDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleControlsDirective,
        ShoelaceStyleFocusableDirective,
        ShoelaceStyleFormGroupDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
