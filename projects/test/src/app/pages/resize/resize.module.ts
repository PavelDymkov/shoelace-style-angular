import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { ResizePageComponent } from "./resize.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: ResizePageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [ResizePageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResizePageModule {}
