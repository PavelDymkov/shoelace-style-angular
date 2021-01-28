import { NgModule } from "@angular/core";

import {
    ShoelaceStyleClearableDirective,
    ShoelaceStyleClosableDirective,
    ShoelaceStyleLoadDirective,
    ShoelaceStyleOverlayDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";
import { ShoelaceStyleFormModule } from "./shoelace-style-form.module";

@NgModule({
    declarations: [
        ShoelaceStyleClearableDirective,
        ShoelaceStyleClosableDirective,
        ShoelaceStyleLoadDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleClearableDirective,
        ShoelaceStyleClosableDirective,
        ShoelaceStyleFormModule,
        ShoelaceStyleLoadDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
