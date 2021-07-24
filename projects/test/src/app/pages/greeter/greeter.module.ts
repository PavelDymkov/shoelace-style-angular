import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { GreeterComponent } from "./greeter.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild([{ path: "", component: GreeterComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [GreeterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GreeterPageModule {}
