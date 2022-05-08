import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleModule } from "shoelace-style-angular";

import { OpenPageComponent } from "./open.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: OpenPageComponent }]),
        ShoelaceStyleModule,
    ],
    declarations: [OpenPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OpenPageModule {}
