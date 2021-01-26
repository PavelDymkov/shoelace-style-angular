import { NgModule } from "@angular/core";

import {
    ShoelaceStyleFocusableDirective,
    ShoelaceStyleShowHideDirective,
} from "./directives";
import { ShoelaceStyleFormModule } from "./shoelace-style-form.module";

@NgModule({
    declarations: [
        ShoelaceStyleFocusableDirective,
        ShoelaceStyleShowHideDirective,
    ],
    exports: [
        ShoelaceStyleFormModule,
        ShoelaceStyleFocusableDirective,
        ShoelaceStyleShowHideDirective,
    ],
})
export class ShoelaceStyleAngularModule {}
