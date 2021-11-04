import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { RemovablePageComponent } from "./removable.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "", component: RemovablePageComponent },
        ]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [RemovablePageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RemovablePageModule {}
