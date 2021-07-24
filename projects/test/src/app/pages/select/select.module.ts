import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { SelectPageComponent } from "./select.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: SelectPageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [SelectPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectPageModule {}
