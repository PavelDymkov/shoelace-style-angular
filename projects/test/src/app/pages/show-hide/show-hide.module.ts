import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { ShowHidePageComponent } from "./show-hide.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: ShowHidePageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [ShowHidePageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShowHidePageModule {}
