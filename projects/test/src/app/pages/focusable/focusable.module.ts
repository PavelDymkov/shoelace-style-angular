import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { FocusablePageComponent } from "./focusable.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "", component: FocusablePageComponent },
        ]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [FocusablePageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FocusablePageModule {}
