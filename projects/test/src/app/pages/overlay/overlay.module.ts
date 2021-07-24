import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { OverlayPageComponent } from "./overlay.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: OverlayPageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [OverlayPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverlayPageModule {}
