import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { ClearablePageComponent } from "./clearable.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "", component: ClearablePageComponent },
        ]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [ClearablePageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClearablePageModule {}
