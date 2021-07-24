import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { ClosablePageComponent } from "./closable.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: ClosablePageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [ClosablePageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClosablePageModule {}
