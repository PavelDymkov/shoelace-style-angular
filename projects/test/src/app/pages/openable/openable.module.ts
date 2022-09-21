import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceModule } from "shoelace-style-angular";

import { OpenableComponent } from "./openable.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: OpenableComponent }]),
        ShoelaceModule,
    ],
    declarations: [OpenableComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OpenableModule {}
