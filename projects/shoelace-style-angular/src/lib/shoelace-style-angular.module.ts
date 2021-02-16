import { NgModule } from "@angular/core";

import {
    ShoelaceStyleClearableDirective,
    ShoelaceStyleClosableDirective,
    ShoelaceStyleLoadDirective,
    ShoelaceStyleOverlayDirective,
    ShoelaceStyleSelectDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";
import { ShoelaceStyleFormModule } from "./shoelace-style-form.module";

@NgModule({
    declarations: [
        ShoelaceStyleClearableDirective,
        ShoelaceStyleClosableDirective,
        ShoelaceStyleLoadDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleSelectDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleClearableDirective,
        ShoelaceStyleClosableDirective,
        ShoelaceStyleFormModule,
        ShoelaceStyleLoadDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleSelectDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
