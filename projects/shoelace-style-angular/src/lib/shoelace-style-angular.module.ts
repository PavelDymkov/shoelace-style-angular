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
    ShoelaceStyleTabGroupShowHideDirective,
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
        ShoelaceStyleTabGroupShowHideDirective,
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
        ShoelaceStyleTabGroupShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
