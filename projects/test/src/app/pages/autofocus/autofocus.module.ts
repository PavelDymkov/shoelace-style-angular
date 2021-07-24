import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { AutofocusPageComponent } from "./autofocus.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: AutofocusPageComponent },
        ]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [AutofocusPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AutofocusPageModule {}
