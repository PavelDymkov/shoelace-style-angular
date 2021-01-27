import { NgModule } from "@angular/core";

import {
    ShoelaceStyleFocusableDirective,
    ShoelaceStyleOverlayDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";
import { ShoelaceStyleFormModule } from "./shoelace-style-form.module";

@NgModule({
    declarations: [
        ShoelaceStyleFocusableDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleFormModule,
        ShoelaceStyleFocusableDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
