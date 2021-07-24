import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { ChangePageComponent } from "./change.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: ChangePageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [ChangePageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChangePageModule {}
