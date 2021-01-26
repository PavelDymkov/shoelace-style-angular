import { NgModule } from "@angular/core";

import { ShoelaceStyleControlsDirective } from "./directives/shoelace-style-controls.directive";
import { ShoelaceStyleFormDirective } from "./directives/shoelace-style-form.directive";

@NgModule({
    declarations: [ShoelaceStyleControlsDirective, ShoelaceStyleFormDirective],
    exports: [ShoelaceStyleControlsDirective, ShoelaceStyleFormDirective],
})
export class ShoelaceStyleFormModule {}
