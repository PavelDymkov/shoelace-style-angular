import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { LoadPageComponent } from "./load.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: "", component: LoadPageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [LoadPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoadPageModule {}
