import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceModule } from "shoelace-style-angular";

import { OpenPageComponent } from "./open.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: OpenPageComponent }]),
        ShoelaceModule,
    ],
    declarations: [OpenPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OpenPageModule {}
