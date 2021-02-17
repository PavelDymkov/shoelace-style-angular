import { NgModule } from "@angular/core";

import {
    ShoelaceStyleChangeDirective,
    ShoelaceStyleClearableDirective,
    ShoelaceStyleClosableDirective,
    ShoelaceStyleFormDirective,
    ShoelaceStyleLoadDirective,
    ShoelaceStyleOverlayDirective,
    ShoelaceStyleSelectDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";

@NgModule({
    declarations: [
        ShoelaceStyleChangeDirective,
        ShoelaceStyleClearableDirective,
        ShoelaceStyleClosableDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleLoadDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleSelectDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleChangeDirective,
        ShoelaceStyleClearableDirective,
        ShoelaceStyleClosableDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleLoadDirective,
        ShoelaceStyleOverlayDirective,
        ShoelaceStyleSelectDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
